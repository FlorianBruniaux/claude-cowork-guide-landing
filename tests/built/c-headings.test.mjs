import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

import { headingJumps } from '../../scripts/check-headings.mjs'

test('headingJumps flags a skipped level and ignores scripts and descents', () => {
  assert.deepEqual(headingJumps('<h1>A</h1><h3>B</h3>'), [{ from: 1, to: 3, text: 'B' }])
  assert.deepEqual(headingJumps('<h1>A</h1><h2>B</h2><h3>C</h3><h2>D</h2>'), [])
  assert.deepEqual(headingJumps('<h1>A</h1><script>"<h3>x</h3>"</script><h2>B</h2>'), [])
})

for (const page of ['index.html', 'fr/index.html', 'glossary/index.html', 'fr/glossary/index.html']) {
  test(`dist/${page} has no heading level jump`, async () => {
    const html = await readFile(new URL(`../../dist/${page}`, import.meta.url), 'utf8')
    assert.deepEqual(headingJumps(html), [])
  })
}
