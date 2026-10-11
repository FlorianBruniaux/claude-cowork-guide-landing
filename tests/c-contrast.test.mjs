import assert from 'node:assert/strict'
import test from 'node:test'

import { checkContrast, ratio } from '../scripts/check-contrast.mjs'

test('ratio matches WCAG reference values', () => {
  assert.equal(ratio('#000000', '#ffffff').toFixed(1), '21.0')
  assert.equal(ratio('#ffffff', '#f97316').toFixed(2), '2.80')
})

test('primary button and orange text reach 4.5:1 in both themes', () => {
  const { results, failures } = checkContrast()
  assert.ok(results.some(r => r.theme === 'dark' && r.label === '.btn-primary'))
  assert.ok(results.some(r => r.theme === 'light' && r.label === '.btn-primary'))
  assert.deepEqual(failures.map(f => `${f.theme} ${f.label} ${f.ratio.toFixed(2)}`), [])
})
