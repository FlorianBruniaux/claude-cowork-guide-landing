import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import test from 'node:test'

// Entry counts measured on the pre-change build (inline #search-data), both languages.
const BASELINE_ENTRIES = 462
// Pre-change dist/index.html was 242127 bytes with 165203 bytes of inline JSON.
const BASELINE_INDEX_BYTES = 242127
const INLINE_JSON_BYTES = 165203

const dist = new URL('../../dist/', import.meta.url)

for (const lang of ['en', 'fr']) {
  test(`dist/search-index/${lang}.json is valid JSON with the baseline entry count`, async () => {
    const entries = JSON.parse(await readFile(new URL(`search-index/${lang}.json`, dist), 'utf8'))
    assert.equal(entries.length, BASELINE_ENTRIES)
    for (const e of entries) {
      assert.deepEqual(Object.keys(e).sort(), ['category', 'id', 'keywords', 'source', 'title', 'url'])
    }
    const home = entries.find(e => e.id === 'page-home')
    assert.equal(home.url, lang === 'en' ? '/' : '/fr/')
  })
}

for (const [page, lang] of [['index.html', 'en'], ['fr/index.html', 'fr'], ['guide/index.html', 'en'], ['releases/index.html', 'en']]) {
  test(`dist/${page} no longer inlines the search index and points to ${lang}.json`, async () => {
    const html = await readFile(new URL(page, dist), 'utf8')
    assert.ok(!html.includes('id="search-data"'))
    assert.ok(html.includes(`data-index-url="/search-index/${lang}.json"`))
  })
}

test('dist/index.html shrank by at least the size of the inlined index', async () => {
  const { size } = await stat(new URL('index.html', dist))
  assert.ok(size <= BASELINE_INDEX_BYTES - INLINE_JSON_BYTES, `index.html is ${size} bytes`)
})
