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
