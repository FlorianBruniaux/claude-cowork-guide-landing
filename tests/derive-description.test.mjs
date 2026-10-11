import assert from 'node:assert/strict'
import test from 'node:test'

import { deriveDescription, truncateOnWord, yamlString } from '../scripts/derive-description.mjs'

test('skips title, language switcher, header quote, rule, table and code to reach the first paragraph', () => {
  const md = [
    '# Démarrage avec Cowork',
    '',
    '🌐 **Langues** : [Français](a.fr.md) | [English](a.md)',
    '',
    '> **Temps de lecture** : ~10 minutes',
    '',
    '---',
    '',
    '[![Badge](https://img.shields.io/x.svg)](https://x.test)',
    '',
    '| A | B |',
    '|---|---|',
    '| 1 | 2 |',
    '',
    '```',
    'Ceci est du code qui ne doit jamais devenir une description de page.',
    '```',
    '',
    'Avant de commencer, **assurez-vous** de lire le [guide officiel](https://x.test) puis `ouvrez` Cowork.',
  ].join('\n')
  assert.equal(deriveDescription(md), 'Avant de commencer, assurez-vous de lire le guide officiel puis ouvrez Cowork.')
})

test('ignores frontmatter and lists, joins wrapped lines of a paragraph', () => {
  const md = '---\ntitle: "X"\n---\n\n- un\n- deux\n\nCowork organise vos fichiers\nlocaux sans écrire de code, pas à pas.\n'
  assert.equal(deriveDescription(md), 'Cowork organise vos fichiers locaux sans écrire de code, pas à pas.')
})

test('truncates under 160 characters on a word boundary', () => {
  const md = `# T\n\n${'Cowork range vos fichiers locaux '.repeat(12)}.\n`
  const description = deriveDescription(md)
  assert.ok(description.length <= 159, `length ${description.length}`)
  assert.ok(description.endsWith('…'))
  assert.ok(!description.slice(0, -1).endsWith(' '))
  assert.ok(description.slice(0, -1).split(' ').every(word => word === 'Cowork' || ['range', 'vos', 'fichiers', 'locaux'].includes(word)))
})

test('returns an empty string when the page has no paragraph long enough', () => {
  assert.equal(deriveDescription('# T\n\n- a\n- b\n\nCourt.\n'), '')
})

test('keeps a short text untouched', () => {
  assert.equal(truncateOnWord('Un texte court.'), 'Un texte court.')
})

test('drops the trailing list lead-in and keeps the sentence before it', () => {
  const md = "# T\n\nVotre site web est souvent le premier contact avec un prospect. Ce workflow vous aide à:\n\n- auditer\n"
  assert.equal(deriveDescription(md), 'Votre site web est souvent le premier contact avec un prospect.')
})

test('completes a bare lead-in with the first list item', () => {
  const md = "# T\n\nVous avez une réunion à venir et vous devez:\n\n- Rechercher l'entreprise et les personnes rencontrées\n- Autre\n"
  assert.equal(deriveDescription(md), "Vous avez une réunion à venir et vous devez: Rechercher l'entreprise et les personnes rencontrées")
})

test('falls back to the bold lead quote when the page has no usable paragraph', () => {
  const md = '# T\n\n> **Temps de lecture** : 5 min\n\n> **15+ prompts prêts à l\'emploi pour organiser, renommer et nettoyer des fichiers**\n\n---\n\n## Section\n\n```\ncode\n```\n'
  assert.equal(deriveDescription(md), "15+ prompts prêts à l'emploi pour organiser, renommer et nettoyer des fichiers")
})

test('skips navigation lines and strips FAQ answer labels', () => {
  const md = "# T\n\n[Retour à l'Index](./README.md) | [Documentation](../x.md)\n\n**R:** Cowork est la fonctionnalité desktop agentique de Claude pour vos fichiers locaux.\n"
  assert.equal(deriveDescription(md), 'Cowork est la fonctionnalité desktop agentique de Claude pour vos fichiers locaux.')
})

test('yamlString escapes backslashes, quotes and newlines for a double-quoted YAML scalar', () => {
  assert.equal(yamlString('C:\\Users\\Nom "Pro"'), '"C:\\\\Users\\\\Nom \\"Pro\\""')
  assert.equal(yamlString('a\nb'), '"a b"')
})
