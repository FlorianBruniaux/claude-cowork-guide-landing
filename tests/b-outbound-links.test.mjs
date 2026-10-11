import assert from 'node:assert/strict'
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'

import { checkLinks, collectOutboundLinks } from '../scripts/check-outbound-links.mjs'

async function fixture() {
  const root = await mkdtemp(join(tmpdir(), 'cowork-links-test-'))
  await mkdir(join(root, 'guide'), { recursive: true })
  await writeFile(join(root, 'index.html'), `<a href="https://example.org/ok">a</a>
    <a href="https://example.org/gone#frag">b</a>
    <a href="https://cowork.bruniaux.com/internal/">internal</a>
    <a href="/relative/">relative</a>
    <a href="https://example.org/q?a=1&amp;b=2">c</a>`)
  await writeFile(join(root, 'guide/index.html'), '<a href="https://example.org/gone">again</a><a href="https://example.org/moved">m</a>')
  return root
}

test('collects each distinct external link once, with the pages that carry it', async t => {
  const root = await fixture()
  t.after(() => rm(root, { recursive: true, force: true }))
  const links = await collectOutboundLinks(root)
  assert.deepEqual([...links.keys()].sort(), [
    'https://example.org/gone',
    'https://example.org/moved',
    'https://example.org/ok',
    'https://example.org/q?a=1&b=2',
  ])
  assert.deepEqual(links.get('https://example.org/gone').sort(), ['/', '/guide/'])
})

test('reports 404 and 410 as broken, redirects as informational, network errors as unverified', async () => {
  const table = {
    'https://example.org/ok': { status: 200 },
    'https://example.org/gone': { status: 404 },
    'https://example.org/moved': { status: 301, headers: { location: 'https://example.org/new' } },
    'https://example.org/boom': new Error('ECONNRESET'),
    'https://example.org/blocked': { status: 999 },
  }
  const fetchImpl = async (url, { method }) => {
    const entry = table[url]
    if (entry instanceof Error) throw entry
    return { status: entry.status, headers: new Map(Object.entries(entry.headers ?? {})) }
  }
  const report = await checkLinks(Object.keys(table), { fetchImpl })
  assert.deepEqual(report.broken.map(r => r.url), ['https://example.org/gone'])
  assert.deepEqual(report.redirects.map(r => [r.url, r.location]), [['https://example.org/moved', 'https://example.org/new']])
  assert.deepEqual(report.unverified.map(r => r.url).sort(), ['https://example.org/blocked', 'https://example.org/boom'])
})

test('falls back to GET when HEAD is refused with 405', async () => {
  const calls = []
  const fetchImpl = async (url, { method }) => {
    calls.push(method)
    return { status: method === 'HEAD' ? 405 : 404, headers: new Map() }
  }
  const report = await checkLinks(['https://example.org/x'], { fetchImpl })
  assert.deepEqual(calls, ['HEAD', 'GET'])
  assert.equal(report.broken.length, 1)
})
