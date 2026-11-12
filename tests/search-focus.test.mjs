// Behaviour test of the Cmd+K dialog lifecycle in src/scripts/search.ts, on a minimal fake DOM:
// the visible Esc button closes the dialog and the focus returns to the control that opened it.
// Node >= 22.18 strips the TypeScript types natively.
import assert from 'node:assert/strict'
import test from 'node:test'

class FakeElement {
  constructor(id, doc) {
    this.id = id
    this.doc = doc
    this.attrs = new Map()
    this.listeners = new Map()
    this.isConnected = true
    this.innerHTML = ''
    this.value = ''
    this.style = {}
    this.dataset = {}
  }
  setAttribute(name, value) { this.attrs.set(name, String(value)) }
  removeAttribute(name) { this.attrs.delete(name) }
  hasAttribute(name) { return this.attrs.has(name) }
  addEventListener(type, fn) { (this.listeners.get(type) ?? this.listeners.set(type, []).get(type)).push(fn) }
  dispatch(type, event = {}) { for (const fn of this.listeners.get(type) ?? []) fn({ preventDefault() {}, ...event }) }
  focus() { this.doc.activeElement = this }
  querySelectorAll() { return [] }
}

function fakeDocument() {
  const doc = { listeners: new Map(), activeElement: null }
  const ids = ['search-modal', 'search-input', 'search-results', 'search-trigger', 'search-backdrop', 'search-close']
  const els = Object.fromEntries(ids.map((id) => [id, new FakeElement(id, doc)]))
  els['search-modal'].setAttribute('hidden', '')
  doc.body = new FakeElement('body', doc)
  doc.activeElement = doc.body
  doc.getElementById = (id) => els[id] ?? null
  doc.addEventListener = (type, fn) => { (doc.listeners.get(type) ?? doc.listeners.set(type, []).get(type)).push(fn) }
  doc.dispatchKey = (event) => { for (const fn of doc.listeners.get('keydown') ?? []) fn({ preventDefault() {}, ...event }) }
  return { doc, els }
}

test('the Esc button closes the search dialog and gives the focus back to its opener', async () => {
  const { doc, els } = fakeDocument()
  globalThis.document = doc
  const { initSearch } = await import('../src/scripts/search.ts')
  initSearch([])

  els['search-trigger'].focus()
  els['search-trigger'].dispatch('click')
  assert.equal(els['search-modal'].hasAttribute('hidden'), false, 'dialog opens from the trigger')
  assert.equal(doc.activeElement, els['search-input'], 'the field takes the focus on open')

  els['search-close'].dispatch('click')
  assert.equal(els['search-modal'].hasAttribute('hidden'), true, 'the Esc button closes the dialog')
  assert.equal(doc.activeElement, els['search-trigger'], 'the focus returns to the opener')
})

test('the Escape key also gives the focus back', async () => {
  const { doc, els } = fakeDocument()
  globalThis.document = doc
  const { initSearch } = await import('../src/scripts/search.ts')
  initSearch([])

  els['search-trigger'].focus()
  els['search-trigger'].dispatch('click')
  doc.dispatchKey({ key: 'Escape' })
  assert.equal(els['search-modal'].hasAttribute('hidden'), true)
  assert.equal(doc.activeElement, els['search-trigger'])
})
