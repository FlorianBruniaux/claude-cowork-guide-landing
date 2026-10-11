import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const dist = new URL('../../dist/', import.meta.url).pathname

for (const route of ['releases', 'fr/releases', 'workflows', 'fr/workflows']) {
  test(`/${route}/ never skips a heading level`, () => {
    const html = readFileSync(`${dist}${route}/index.html`, 'utf8')
    const levels = [...html.matchAll(/<h([1-6])\b/g)].map(m => Number(m[1]))
    let previous = 0
    const jumps = []
    for (const level of levels) {
      if (level > previous + 1) jumps.push(`h${previous} -> h${level}`)
      previous = level
    }
    assert.deepEqual(jumps, [])
  })
}
