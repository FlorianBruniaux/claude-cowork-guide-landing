import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'

const dist = new URL('../../dist/', import.meta.url).pathname

function guideSlugs(prefix) {
  const dir = join(dist, prefix, 'guide/workflows')
  return readdirSync(dir).filter(name => statSync(join(dir, name)).isDirectory())
}

function cards(html) {
  return [...html.matchAll(/<a\b[^>]*class="[^"]*workflow-card[^"]*"[^>]*>/g)].map(m => m[0])
}

for (const [lang, prefix] of [['en', ''], ['fr', 'fr']]) {
  test(`workflows page ${lang}: cards = numberOfItems = guide workflows, internal links only`, () => {
    const file = join(dist, prefix, 'workflows/index.html')
    assert.ok(existsSync(file), `${file} missing, run the build first`)
    const html = readFileSync(file, 'utf8')
    const slugs = guideSlugs(prefix)
    const found = cards(html)
    const items = Number(html.match(/"numberOfItems":(\d+)/)?.[1])

    assert.equal(slugs.length, 29, 'guide ships 29 workflows')
    assert.equal(found.length, slugs.length, 'one card per guide workflow')
    assert.equal(items, slugs.length, 'ItemList.numberOfItems matches')

    const base = `${prefix ? `/${prefix}` : ''}/guide/workflows/`
    const hrefs = found.map(a => a.match(/href="([^"]+)"/)[1])
    assert.deepEqual(hrefs.filter(h => /github\.com/.test(h)), [], 'no card points to github.com')
    assert.deepEqual(hrefs.map(h => h.replace(base, '').replace(/\/$/, '')).sort(), [...slugs].sort())
    for (const h of hrefs) assert.ok(existsSync(join(dist, h, 'index.html')), `${h} exists in dist`)
  })
}
