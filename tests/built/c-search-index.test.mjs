import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'


const dist = new URL('../../dist/', import.meta.url)

for (const lang of ['en', 'fr']) {
  test(`dist/search-index/${lang}.json is valid JSON with search entries`, async () => {
    const entries = JSON.parse(await readFile(new URL(`search-index/${lang}.json`, dist), 'utf8'))
    assert.ok(entries.length > 100, `${entries.length} entries`)
    for (const e of entries) {
      assert.deepEqual(Object.keys(e).sort(), ['category', 'id', 'keywords', 'source', 'title', 'url'])
    }
    const home = entries.find(e => e.id === 'page-home')
    assert.equal(home.url, lang === 'en' ? '/' : '/fr/')
  })
}

for (const [page, lang] of [['index.html', 'en'], ['fr/index.html', 'fr'], ['guide/index.html', 'en'], ['fr/guide/index.html', 'fr'], ['releases/index.html', 'en']]) {
  test(`dist/${page} no longer inlines the search index and points to ${lang}.json`, async () => {
    const html = await readFile(new URL(page, dist), 'utf8')
    assert.ok(!html.includes('id="search-data"'))
    assert.ok(html.includes(`data-index-url="/search-index/${lang}.json"`))
  })
}
