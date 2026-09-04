import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { resolve, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

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

export async function auditBuiltSite(distDir = resolve('dist')) {
  const findings = []
  const add = (code, route, message) => findings.push({ code, route, message })
  if (!existsSync(distDir)) return { pages: 0, findings: [{ code: 'DIST_MISSING', route: '/', message: `${distDir} does not exist` }] }

  const htmlFiles = filesBelow(distDir, '.html')
  const routes = new Set(htmlFiles.map(file => routeFor(distDir, file)))
  const canonicals = new Map()
  const alternatesByCanonical = new Map()
  const titles = new Map()

  for (const file of htmlFiles) {
    const route = routeFor(distDir, file)
    const html = readFileSync(file, 'utf8')
    const htmlTag = html.match(/<html\b[^>]*>/i)?.[0] ?? ''
    const lang = attrs(htmlTag).lang ?? ''
    const title = textBetween(html, 'title')
    const descriptionTag = [...html.matchAll(/<meta\b[^>]*>/gi)].map(match => attrs(match[0])).find(item => item.name?.toLowerCase() === 'description')
    const description = descriptionTag?.content ?? ''
    const robots = [...html.matchAll(/<meta\b[^>]*>/gi)].map(match => attrs(match[0])).find(item => item.name?.toLowerCase() === 'robots')?.content ?? ''
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
    const h1Count = (html.match(/<h1\b/gi) ?? []).length
    if (h1Count !== 1) add('H1_COUNT', route, `Expected one H1, found ${h1Count}`)
    if (canonicalLinks.length !== 1 || !canonical?.startsWith(`${ORIGIN}/`)) add('CANONICAL', route, `Expected one HTTPS canonical on ${ORIGIN}`)
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
      try { JSON.parse(match[1]) } catch (error) { add('JSON_LD_INVALID', route, error.message) }
    }

    for (const match of html.matchAll(/<a\b[^>]*href=(?:"([^"]+)"|'([^']+)')[^>]*>/gi)) {
      const href = match[1] ?? match[2]
      if (!href || href.startsWith('#') || href.startsWith('&#') || /^(mailto:|tel:|javascript:)/i.test(href)) continue
      let target
      try { target = normalizeRoute(href) } catch { add('LINK_INVALID', route, href); continue }
      if (!target) continue
      if (/\.[a-z0-9]+$/i.test(target) && !target.endsWith('.html')) {
        if (!existsSync(resolve(distDir, target.slice(1)))) add('BROKEN_INTERNAL_LINK', route, target)
      } else if (!routes.has(target)) add('BROKEN_INTERNAL_LINK', route, target)
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
