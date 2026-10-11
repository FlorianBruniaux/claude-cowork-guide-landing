import assert from 'node:assert/strict'
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'

import { auditBuiltSite } from '../scripts/check-built-seo.mjs'

const site = 'https://cowork.bruniaux.com'

async function fixture(pages, sitemapUrls) {
  const root = await mkdtemp(join(tmpdir(), 'cowork-seo-test-'))
  for (const [route, html] of Object.entries(pages)) {
    const dir = route === '/' ? root : join(root, route.replace(/^\//, '').replace(/\/$/, ''))
    await mkdir(dir, { recursive: true })
    await writeFile(join(dir, 'index.html'), html)
  }
  await writeFile(join(root, 'sitemap-0.xml'), `<urlset>${sitemapUrls.map(url => `<url><loc>${url}</loc></url>`).join('')}</urlset>`)
  await writeFile(join(root, 'sitemap-index.xml'), `${site}/sitemap-0.xml`)
  return root
}

function page({ lang = 'en', canonical = `${site}/`, alternate = `${site}/fr/`, body = '<h1>Guide</h1>' } = {}) {
  const altLang = lang === 'en' ? 'fr' : 'en'
  return `<!doctype html><html lang="${lang}"><head>
    <title>${lang === 'fr' ? 'Une page utile du guide Cowork' : 'A useful Cowork guide page'}</title>
    <meta name="description" content="A factual description of this Claude Cowork guide page, with enough detail to help readers choose the right documented workflow safely.">
    <meta name="robots" content="index, follow">
    <meta property="og:image" content="${site}/og-image.png">
    <link rel="canonical" href="${canonical}">
    <link rel="alternate" hreflang="${lang}" href="${canonical}">
    <link rel="alternate" hreflang="${altLang}" href="${alternate}">
    <link rel="alternate" hreflang="x-default" href="${lang === 'en' ? canonical : alternate}">
    <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","url":"${canonical}"}</script>
  </head><body>${body}</body></html>`
}

test('accepts reciprocal bilingual pages whose sitemap matches their canonicals', async t => {
  const root = await fixture({
    '/': page(),
    '/fr/': page({ lang: 'fr', canonical: `${site}/fr/`, alternate: `${site}/` }),
  }, [`${site}/`, `${site}/fr/`])
  t.after(() => rm(root, { recursive: true, force: true }))

  assert.deepEqual((await auditBuiltSite(root)).findings, [])
})

test('reports duplicate H1, missing x-default, broken internal links and sitemap drift', async t => {
  const broken = page({ body: '<h1>Guide</h1><h1>Duplicate</h1><a href="/missing/">Missing</a>' })
    .replace(/\s*<link rel="alternate" hreflang="x-default"[^>]+>/, '')
  const root = await fixture({ '/': broken }, [`${site}/legacy/`])
  t.after(() => rm(root, { recursive: true, force: true }))

  const codes = (await auditBuiltSite(root)).findings.map(finding => finding.code)
  assert.ok(codes.includes('H1_COUNT'))
  assert.ok(codes.includes('HREFLANG_X_DEFAULT'))
  assert.ok(codes.includes('BROKEN_INTERNAL_LINK'))
  assert.ok(codes.includes('SITEMAP_CANONICAL_MISMATCH'))
})

test('reports malformed JSON-LD, language-path mismatch and a legacy public URL', async t => {
  const invalid = page({ lang: 'fr' })
    .replace('{"@context":"https://schema.org","@type":"WebPage","url":"https://cowork.bruniaux.com/"}', '{broken')
    .replace('</body>', '<a href="https://florianbruniaux.github.io/claude-cowork-guide-landing/">Legacy</a></body>')
  const root = await fixture({ '/': invalid }, [`${site}/`])
  t.after(() => rm(root, { recursive: true, force: true }))

  const codes = (await auditBuiltSite(root)).findings.map(finding => finding.code)
  assert.ok(codes.includes('LANG_PATH_MISMATCH'))
  assert.ok(codes.includes('JSON_LD_INVALID'))
  assert.ok(codes.includes('LEGACY_URL'))
})

test('rejects a page whose canonical points to a different route', async t => {
  const root = await fixture({
    '/': page(),
    '/foo/': page({ canonical: `${site}/`, alternate: `${site}/fr/` })
      .replace('A useful Cowork guide page', 'A different useful Cowork guide page'),
    '/fr/': page({ lang: 'fr', canonical: `${site}/fr/`, alternate: `${site}/` }),
  }, [`${site}/`, `${site}/foo/`, `${site}/fr/`])
  t.after(() => rm(root, { recursive: true, force: true }))

  const codes = (await auditBuiltSite(root)).findings.map(finding => finding.code)
  assert.ok(codes.includes('CANONICAL_ROUTE_MISMATCH'))
  assert.ok(codes.includes('CANONICAL_DUPLICATE'))
})

test('rejects missing fragments on same-page and cross-page links', async t => {
  const root = await fixture({
    '/': page({ body: '<h1 id="guide">Guide</h1><a href="#missing">Same page</a><a href="/fr/#absent">French page</a>' }),
    '/fr/': page({ lang: 'fr', canonical: `${site}/fr/`, alternate: `${site}/`, body: '<h1 id="guide-fr">Guide</h1>' }),
  }, [`${site}/`, `${site}/fr/`])
  t.after(() => rm(root, { recursive: true, force: true }))

  const fragmentFindings = (await auditBuiltSite(root)).findings.filter(finding => finding.code === 'BROKEN_INTERNAL_FRAGMENT')
  assert.equal(fragmentFindings.length, 2)
})

test('rejects a description shared by more than three pages', async t => {
  const pages = {}
  const urls = []
  for (const n of [1, 2, 3, 4]) {
    pages[`/p${n}/`] = page({ canonical: `${site}/p${n}/`, alternate: `${site}/fr/p${n}/` })
      .replace('A useful Cowork guide page', `Useful Cowork guide page ${n}`)
    urls.push(`${site}/p${n}/`)
  }
  const root = await fixture(pages, urls)
  t.after(() => rm(root, { recursive: true, force: true }))

  const findings = (await auditBuiltSite(root)).findings.filter(finding => finding.code === 'DESCRIPTION_SHARED')
  assert.equal(findings.length, 1)
  assert.match(findings[0].message, /4 pages/)
})

test('accepts a description shared by exactly three pages', async t => {
  const pages = {}
  const urls = []
  for (const n of [1, 2, 3]) {
    pages[`/p${n}/`] = page({ canonical: `${site}/p${n}/`, alternate: `${site}/fr/p${n}/` })
      .replace('A useful Cowork guide page', `Useful Cowork guide page ${n}`)
    urls.push(`${site}/p${n}/`)
  }
  const root = await fixture(pages, urls)
  t.after(() => rm(root, { recursive: true, force: true }))

  const findings = (await auditBuiltSite(root)).findings.filter(finding => finding.code === 'DESCRIPTION_SHARED')
  assert.deepEqual(findings, [])
})

test('rejects pages without an absolute og:image', async t => {
  const missing = page().replace(/\s*<meta property="og:image"[^>]+>/, '')
  const relative = page({ canonical: `${site}/rel/`, alternate: `${site}/fr/rel/` })
    .replace(`content="${site}/og-image.png"`, 'content="/og-image.png"')
    .replace('A useful Cowork guide page', 'Another useful Cowork guide page')
  const root = await fixture({ '/': missing, '/rel/': relative }, [`${site}/`, `${site}/rel/`])
  t.after(() => rm(root, { recursive: true, force: true }))

  const routes = (await auditBuiltSite(root)).findings.filter(finding => finding.code === 'OG_IMAGE').map(finding => finding.route)
  assert.deepEqual(routes.sort(), ['/', '/rel/'])
})

function withJsonLd(html, ...blocks) {
  return html.replace('</head>', `${blocks.map(block => `<script type="application/ld+json">${JSON.stringify(block)}</script>`).join('')}</head>`)
}

const website = { '@type': 'WebSite', '@id': `${site}/#website`, name: 'Claude Cowork Guide', url: `${site}/` }

test('rejects one JSON-LD @id defined with different names, including nested definitions', async t => {
  const en = withJsonLd(page(), { '@context': 'https://schema.org', '@graph': [website] })
  const fr = withJsonLd(page({ lang: 'fr', canonical: `${site}/fr/`, alternate: `${site}/` }),
    { '@context': 'https://schema.org', '@type': 'TechArticle', isPartOf: { ...website, name: 'Guide Claude Cowork' } })
  const root = await fixture({ '/': en, '/fr/': fr }, [`${site}/`, `${site}/fr/`])
  t.after(() => rm(root, { recursive: true, force: true }))

  const findings = (await auditBuiltSite(root)).findings.filter(finding => finding.code === 'JSON_LD_ID_CONFLICT')
  assert.equal(findings.length, 1)
  assert.match(findings[0].message, /#website/)
})

test('accepts the same JSON-LD definition repeated, and bare @id references', async t => {
  const en = withJsonLd(page(), { '@context': 'https://schema.org', '@graph': [website, { '@type': 'WebPage', author: { '@id': `${site}/#person` } }] })
  const fr = withJsonLd(page({ lang: 'fr', canonical: `${site}/fr/`, alternate: `${site}/` }),
    { '@context': 'https://schema.org', '@type': 'TechArticle', isPartOf: { ...website } })
  const root = await fixture({ '/': en, '/fr/': fr }, [`${site}/`, `${site}/fr/`])
  t.after(() => rm(root, { recursive: true, force: true }))

  const findings = (await auditBuiltSite(root)).findings.filter(finding => finding.code === 'JSON_LD_ID_CONFLICT')
  assert.deepEqual(findings, [])
})

test('rejects speakable selectors that match nothing in the page', async t => {
  const speakable = { '@context': 'https://schema.org', '@type': 'WebPage', speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.hero-tagline', '#faq h2'] } }
  const root = await fixture({
    '/': withJsonLd(page({ body: '<h1>Guide</h1><p class="hero tagline-x">x</p>' }), speakable),
    '/ok/': withJsonLd(page({ canonical: `${site}/ok/`, alternate: `${site}/fr/ok/`, body: '<h1>Guide</h1><p class="hero-tagline">x</p><section id="faq"><h2>Q</h2></section>' })
      .replace('A useful Cowork guide page', 'Another useful Cowork guide page'), speakable),
  }, [`${site}/`, `${site}/ok/`])
  t.after(() => rm(root, { recursive: true, force: true }))

  const findings = (await auditBuiltSite(root)).findings.filter(finding => finding.code === 'SPEAKABLE_SELECTOR')
  assert.deepEqual(findings.map(finding => finding.route), ['/', '/'])
  assert.ok(findings.some(finding => finding.message.includes('.hero-tagline')))
  assert.ok(findings.some(finding => finding.message.includes('#faq h2')))
})
