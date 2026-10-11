import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'

const dist = new URL('../../dist/', import.meta.url).pathname

test('dist/404.html is a noindex page with the site navigation and a link to /fr/', () => {
  const file = join(dist, '404.html')
  assert.ok(existsSync(file), 'dist/404.html missing')
  const html = readFileSync(file, 'utf8')
  assert.match(html, /<meta name="robots" content="[^"]*noindex/)
  assert.match(html, /<nav\b/, 'site navigation present')
  assert.match(html, /<h1[^>]*>[^<]*(not found|404)/i)
  assert.match(html, /href="\/fr\/"/, 'link to the French site')
  assert.match(html, /href="\/guide\/"/, 'link to the guide')
})

test('sitemap files do not list the 404 page', () => {
  const sitemaps = readdirSync(dist).filter(name => /^sitemap.*\.xml$/.test(name))
  assert.ok(sitemaps.length > 0)
  for (const name of sitemaps) assert.doesNotMatch(readFileSync(join(dist, name), 'utf8'), /404/, name)
})
