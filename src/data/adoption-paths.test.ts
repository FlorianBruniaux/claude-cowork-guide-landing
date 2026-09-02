import assert from 'node:assert/strict'
import test from 'node:test'

import { UI_STRINGS } from './i18n.ts'

test('keeps the three adoption paths aligned across English and French', () => {
  for (const lang of ['en', 'fr'] as const) {
    const strings = UI_STRINGS[lang]

    assert.deepEqual(strings.adoptionPaths.map(path => path.id), ['start', 'build', 'scale'])
    assert.deepEqual(strings.adoptionPaths.map(path => path.label), ['Start', 'Build', 'Scale'])
    assert.match(strings.adoptionGuideUrl, /guide\/methodologies\.md#start--build--scale-for-knowledge-work$/)
    assert.equal(new Set(strings.adoptionPaths.map(path => path.id)).size, 3)
  }
})

test('defines observable exits without turning Scale into a mandatory destination', () => {
  assert.match(UI_STRINGS.en.adoptionPaths[0].exit, /explain, check, and recover/i)
  assert.match(UI_STRINGS.en.adoptionPaths[1].exit, /another person/i)
  assert.match(UI_STRINGS.en.adoptionPaths[2].exit, /ownership, permissions, logs, escalation/i)
  assert.match(UI_STRINGS.en.adoptionNote, /not a mandatory destination/i)
  assert.match(UI_STRINGS.fr.adoptionNote, /pas une destination obligatoire/i)
})

test('preserves Workflows, Prompts, and Resources as navigation formats', () => {
  assert.equal(UI_STRINGS.en.navWorkflows, 'Workflows')
  assert.equal(UI_STRINGS.en.navPrompts, 'Prompts')
  assert.equal(UI_STRINGS.fr.navWorkflows, 'Workflows')
  assert.equal(UI_STRINGS.fr.navPrompts, 'Prompts')
  assert.ok(UI_STRINGS.en.features.some(feature => feature.title.toLowerCase().includes('workflows')))
  assert.ok(UI_STRINGS.fr.features.some(feature => feature.title.toLowerCase().includes('workflows')))
})
