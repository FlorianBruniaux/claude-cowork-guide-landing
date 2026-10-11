import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'

import { buildIco } from '../scripts/build-favicon.mjs'

const root = new URL('../', import.meta.url).pathname
const PNG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])

function entries(ico) {
  assert.equal(ico.readUInt16LE(0), 0, 'reserved')
  assert.equal(ico.readUInt16LE(2), 1, 'type icon')
  return Array.from({ length: ico.readUInt16LE(4) }, (_, i) => {
    const at = 6 + i * 16
    const size = ico.readUInt32LE(at + 8)
    const offset = ico.readUInt32LE(at + 12)
    return { w: ico[at] || 256, h: ico[at + 1] || 256, size, offset, data: ico.subarray(offset, offset + size) }
  })
}

test('buildIco packs a 32x32 and a 16x16 PNG rendered from the SVG', () => {
  const ico = buildIco(readFileSync(new URL('../public/favicon.svg', import.meta.url)))
  const found = entries(ico)
  assert.deepEqual(found.map(e => [e.w, e.h]), [[32, 32], [16, 16]])
  for (const e of found) {
    assert.deepEqual(e.data.subarray(0, 8), PNG)
    assert.equal(e.data.readUInt32BE(16), e.w, 'PNG width matches directory entry')
    assert.equal(e.data.readUInt32BE(20), e.h)
    assert.equal(e.offset + e.size <= ico.length, true)
  }
})

test('public/favicon.ico is the committed output of the script', () => {
  const file = new URL('../public/favicon.ico', import.meta.url)
  assert.ok(existsSync(file), 'public/favicon.ico missing')
  assert.equal(entries(readFileSync(file)).length, 2)
  assert.deepEqual(readFileSync(file), buildIco(readFileSync(new URL('../public/favicon.svg', import.meta.url))), 'stale: rerun node scripts/build-favicon.mjs')
})

test('the repository ships a single robots.txt, in public/', () => {
  assert.equal(existsSync(`${root}robots.txt`), false)
  assert.ok(existsSync(`${root}public/robots.txt`))
})
