import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { resolve, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const MAX_PAGES_PER_DESCRIPTION = 3
const ORIGIN = 'https://cowork.bruniaux.com'
const LEGACY_ORIGIN = 'https://florianbruniaux.github.io/claude-cowork-guide-landing'

function filesBelow(root, suffix) {
  const result = []
  for (const name of readdirSync(root)) {
    const path = resolve(root, name)
    if (statSync(path).isDirectory()) result.push(...filesBelow(path, suffix))
    else if (path.endsWith(suffix)) result.push(path)
  }
  return result
}

function attrs(tag) {
  return Object.fromEntries([...tag.matchAll(/([:\w-]+)=(?:"([^"]*)"|'([^']*)')/g)].map(match => [match[1].toLowerCase(), match[2] ?? match[3]]))
}

function textBetween(html, tag) {
  const match = html.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'))
  return match?.[1].replace(/<[^>]+>/g, '').trim() ?? ''
}

function routeFor(root, file) {
  const local = relative(root, file).split(sep).join('/')
  if (local === 'index.html') return '/'
  return `/${local.replace(/index\.html$/, '')}`
}

function normalizeRoute(href) {
  const url = new URL(href, ORIGIN)
  if (url.origin !== ORIGIN) return null
  const path = url.pathname
  if (/\.[a-z0-9]+$/i.test(path) && !path.endsWith('.html')) return path
  if (path.endsWith('/index.html')) return path.replace(/index\.html$/, '')
  if (path.endsWith('.html')) return path
  return path.endsWith('/') ? path : `${path}/`
}

// Every object that defines something (an @id plus at least one other property),
// at any depth. A bare { "@id": ... } is a reference, not a definition.
function jsonLdDefinitions(value, found = []) {
  if (Array.isArray(value)) value.forEach(item => jsonLdDefinitions(item, found))
  else if (value && typeof value === 'object') {
    const { '@context': _context, ...rest } = value
    if (typeof rest['@id'] === 'string' && Object.keys(rest).length > 1) found.push(rest)
    Object.values(rest).forEach(item => jsonLdDefinitions(item, found))
  }
  return found
}

function speakableSelectors(value, found = []) {
  if (Array.isArray(value)) value.forEach(item => speakableSelectors(item, found))
  else if (value && typeof value === 'object') {
    if (value.speakable?.cssSelector) found.push(...[value.speakable.cssSelector].flat())
    Object.values(value).forEach(item => speakableSelectors(item, found))
  }
  return found
}

// Presence check for simple selectors (tag, #id, .class and descendant chains):
// each compound must match some element. Nesting is not verified.
function selectorPresent(html, selector) {
  return selector.trim().split(/\s+/).every(compound => {
    const tag = compound.match(/^[a-z][a-z0-9]*/i)?.[0]
    const ids = [...compound.matchAll(/#([\w-]+)/g)].map(match => match[1])
    const classes = [...compound.matchAll(/\.([\w-]+)/g)].map(match => match[1])
    return [...html.matchAll(/<([a-z][a-z0-9]*)\b([^>]*)>/gi)].some(([, name, attributes]) => {
      const parsed = attrs(`<${name} ${attributes}>`)
      return (!tag || name.toLowerCase() === tag.toLowerCase())
        && ids.every(id => parsed.id === id)
        && classes.every(cls => (parsed.class ?? '').split(/\s+/).includes(cls))
    })
  })
}

export async function auditBuiltSite(distDir = resolve('dist')) {
  const findings = []
  const add = (code, route, message) => findings.push({ code, route, message })
  if (!existsSync(distDir)) return { pages: 0, findings: [{ code: 'DIST_MISSING', route: '/', message: `${distDir} does not exist` }] }

  // 404.html is a noindex error page: no canonical, hreflang or sitemap entry is expected.
  const htmlFiles = filesBelow(distDir, '.html').filter(file => routeFor(distDir, file) !== '/404.html')
  const routes = new Set(htmlFiles.map(file => routeFor(distDir, file)))
  const htmlByRoute = new Map(htmlFiles.map(file => [routeFor(distDir, file), readFileSync(file, 'utf8')]))
  const idsByRoute = new Map([...htmlByRoute].map(([route, html]) => [
    route,
    new Set([...html.matchAll(/\bid=(?:"([^"]+)"|'([^']+)')/gi)].map(match => match[1] ?? match[2])),
  ]))
  const canonicals = new Map()
  const canonicalOwners = new Map()
  const alternatesByCanonical = new Map()
  const titles = new Map()
  const routesByDescription = new Map()
  const definitionsById = new Map()

  for (const file of htmlFiles) {
    const route = routeFor(distDir, file)
    const html = htmlByRoute.get(route)
    const htmlTag = html.match(/<html\b[^>]*>/i)?.[0] ?? ''
    const lang = attrs(htmlTag).lang ?? ''
    const title = textBetween(html, 'title')
    const descriptionTag = [...html.matchAll(/<meta\b[^>]*>/gi)].map(match => attrs(match[0])).find(item => item.name?.toLowerCase() === 'description')
    const description = descriptionTag?.content ?? ''
    const robots = [...html.matchAll(/<meta\b[^>]*>/gi)].map(match => attrs(match[0])).find(item => item.name?.toLowerCase() === 'robots')?.content ?? ''
    const ogImage = [...html.matchAll(/<meta\b[^>]*>/gi)].map(match => attrs(match[0])).find(item => item.property?.toLowerCase() === 'og:image')?.content ?? ''
    const links = [...html.matchAll(/<link\b[^>]*>/gi)].map(match => attrs(match[0]))
    const canonicalLinks = links.filter(link => link.rel?.toLowerCase() === 'canonical')
    const canonical = canonicalLinks[0]?.href
    const alternates = new Map(links.filter(link => link.rel?.toLowerCase() === 'alternate' && link.hreflang).map(link => [link.hreflang.toLowerCase(), link.href]))

    if (!title) add('TITLE_MISSING', route, 'Missing title')
    else {
      const titleKey = `${lang}:${title}`
      const previous = titles.get(titleKey)
      if (previous) add('TITLE_DUPLICATE', route, `Title duplicates ${previous}`)
      else titles.set(titleKey, route)
    }
    if (description.length < 50 || description.length > 170) add('DESCRIPTION_LENGTH', route, `Description length is ${description.length}`)
    if (description) routesByDescription.set(description, [...(routesByDescription.get(description) ?? []), route])
    if (!/^https:\/\/[^/]+\/\S+/.test(ogImage)) add('OG_IMAGE', route, `Expected an absolute og:image, found ${ogImage || '(missing)'}`)
    const h1Count = (html.match(/<h1\b/gi) ?? []).length
    if (h1Count !== 1) add('H1_COUNT', route, `Expected one H1, found ${h1Count}`)
    if (canonicalLinks.length !== 1 || !canonical?.startsWith(`${ORIGIN}/`)) add('CANONICAL', route, `Expected one HTTPS canonical on ${ORIGIN}`)
    if (canonical) {
      const expectedCanonical = `${ORIGIN}${route}`
      if (canonical !== expectedCanonical) add('CANONICAL_ROUTE_MISMATCH', route, `Expected ${expectedCanonical}, found ${canonical}`)
      const owner = canonicalOwners.get(canonical)
      if (owner && owner !== route) add('CANONICAL_DUPLICATE', route, `Canonical also belongs to ${owner}`)
      else canonicalOwners.set(canonical, route)
    }
    if (/noindex/i.test(robots)) add('NOINDEX_CANONICAL', route, 'Canonical page is noindex')
    if ((route.startsWith('/fr/') && lang !== 'fr') || (!route.startsWith('/fr/') && lang !== 'en')) add('LANG_PATH_MISMATCH', route, `lang=${lang || '(missing)'}`)
    if (!alternates.has('x-default')) add('HREFLANG_X_DEFAULT', route, 'Missing x-default')
    if (canonical && alternates.get(lang) !== canonical) add('HREFLANG_SELF', route, 'Self hreflang differs from canonical')
    if (canonical) {
      canonicals.set(route, canonical)
      alternatesByCanonical.set(canonical, alternates)
    }

    if (html.includes(LEGACY_ORIGIN)) add('LEGACY_URL', route, `Contains ${LEGACY_ORIGIN}`)

    for (const match of html.matchAll(/<script\b[^>]*type=(?:"application\/ld\+json"|'application\/ld\+json')[^>]*>([\s\S]*?)<\/script>/gi)) {
      let data
      try { data = JSON.parse(match[1]) } catch (error) { add('JSON_LD_INVALID', route, error.message); continue }
      for (const definition of jsonLdDefinitions(data)) {
        const signature = JSON.stringify(definition, (_key, item) => item && typeof item === 'object' && !Array.isArray(item) ? Object.fromEntries(Object.entries(item).sort()) : item)
        const byId = definitionsById.get(definition['@id']) ?? new Map()
        byId.set(signature, byId.get(signature) ?? route)
        definitionsById.set(definition['@id'], byId)
      }
      for (const selector of new Set(speakableSelectors(data))) {
        if (!selectorPresent(html, selector)) add('SPEAKABLE_SELECTOR', route, `speakable selector matches nothing in the page: ${selector}`)
      }
    }

    for (const match of html.matchAll(/<a\b[^>]*href=(?:"([^"]+)"|'([^']+)')[^>]*>/gi)) {
      const href = match[1] ?? match[2]
      if (!href || href.startsWith('&#') || /^(mailto:|tel:|javascript:)/i.test(href)) continue
      let target
      let resolvedLink
      try {
        resolvedLink = new URL(href, `${ORIGIN}${route}`)
        target = normalizeRoute(resolvedLink.href)
      } catch { add('LINK_INVALID', route, href); continue }
      if (!target) continue
      if (/\.[a-z0-9]+$/i.test(target) && !target.endsWith('.html')) {
        if (!existsSync(resolve(distDir, target.slice(1)))) add('BROKEN_INTERNAL_LINK', route, target)
      } else if (!routes.has(target)) add('BROKEN_INTERNAL_LINK', route, target)
      else if (resolvedLink.hash) {
        let fragment = resolvedLink.hash.slice(1)
        try { fragment = decodeURIComponent(fragment) } catch { /* malformed fragments remain unmatched */ }
        if (!idsByRoute.get(target)?.has(fragment)) add('BROKEN_INTERNAL_FRAGMENT', route, `${target}#${fragment}`)
      }
    }
  }

  for (const [canonical, alternates] of alternatesByCanonical) {
    for (const hreflang of ['en', 'fr']) {
      const target = alternates.get(hreflang)
      if (!target) { add('HREFLANG_LANGUAGE', new URL(canonical).pathname, `Missing ${hreflang}`); continue }
      const reciprocal = alternatesByCanonical.get(target)
      if (!reciprocal || ![...reciprocal.values()].includes(canonical)) add('HREFLANG_RECIPROCAL', new URL(canonical).pathname, `${target} does not link back`)
    }
  }

  for (const [description, sharing] of routesByDescription) {
    if (sharing.length > MAX_PAGES_PER_DESCRIPTION) add('DESCRIPTION_SHARED', sharing[0], `Description shared by ${sharing.length} pages (max ${MAX_PAGES_PER_DESCRIPTION}): ${description.slice(0, 60)}`)
  }

  for (const [id, variants] of definitionsById) {
    if (variants.size > 1) add('JSON_LD_ID_CONFLICT', [...variants.values()][0], `${id} has ${variants.size} different definitions (first seen on ${[...variants.values()].join(', ')})`)
  }

  const sitemapFiles = filesBelow(distDir, '.xml').filter(file => /sitemap(?:-\d+)?\.xml$/.test(file))
  const sitemapUrls = new Set(sitemapFiles.flatMap(file => [...readFileSync(file, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1])).filter(url => !url.endsWith('.xml')))
  const canonicalUrls = new Set(canonicals.values())
  for (const url of sitemapUrls) if (!canonicalUrls.has(url)) add('SITEMAP_CANONICAL_MISMATCH', new URL(url).pathname, 'Sitemap URL has no matching canonical page')
  for (const url of canonicalUrls) if (!sitemapUrls.has(url)) add('SITEMAP_CANONICAL_MISMATCH', new URL(url).pathname, 'Canonical page is absent from sitemap')

  return { pages: htmlFiles.length, sitemapUrls: sitemapUrls.size, findings }
}

async function main() {
  const report = await auditBuiltSite(resolve(process.argv[2] ?? 'dist'))
  if (report.findings.length) {
    for (const finding of report.findings) console.error(`${finding.code}\t${finding.route}\t${finding.message}`)
    console.error(`SEO gate failed: ${report.findings.length} finding(s) across ${report.pages} page(s).`)
    process.exitCode = 1
  } else console.log(`SEO gate passed: ${report.pages} pages and ${report.sitemapUrls} sitemap URLs.`)
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) await main()
