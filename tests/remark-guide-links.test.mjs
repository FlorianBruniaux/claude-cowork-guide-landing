import assert from 'node:assert/strict'
import test from 'node:test'

import { remarkGuideLinks } from '../plugins/remark-guide-links.mjs'

function rewrite(url, filePath = '/site/src/content/docs/fr/guide/04-troubleshooting.md') {
  const tree = { type: 'root', children: [{ type: 'paragraph', children: [{ type: 'link', url, children: [] }] }] }
  remarkGuideLinks()(tree, { history: [filePath] })
  return tree.children[0].children[0].url
}

test('drops the trailing dash of a cross-page fragment, as Astro does for heading ids', () => {
  assert.equal(
    rewrite('./reference/faq.fr.md#q-cowork-est-il-gratuit-', '/site/src/content/docs/fr/guide/04-troubleshooting.md'),
    rewrite('./reference/faq.fr.md#q-cowork-est-il-gratuit', '/site/src/content/docs/fr/guide/04-troubleshooting.md'),
  )
  assert.ok(!rewrite('../reference/faq.fr.md#q-cowork-est-il-gratuit-').includes('gratuit-'))
})

test('drops the trailing dash of a same-page fragment', () => {
  assert.equal(rewrite('#q-cowork-est-il-gratuit-'), '#q-cowork-est-il-gratuit')
})

test('leaves fragments without trailing dash and external URLs untouched', () => {
  assert.equal(rewrite('#section-a'), '#section-a')
  assert.equal(rewrite('https://example.com/#x-'), 'https://example.com/#x-')
})
