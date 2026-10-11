import assert from 'node:assert/strict'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import test from 'node:test'

const dist = new URL('../dist/', import.meta.url).pathname
const version = readFileSync(new URL('../src/data/releases.ts', import.meta.url), 'utf8').match(/version:\s*'(v[^']+)'/)[1]

function htmlFiles(dir) {
  return readdirSync(dir).flatMap(name => {
    const path = join(dir, name)
    return statSync(path).isDirectory() ? htmlFiles(path) : path.endsWith('.html') ? [path] : []
  })
}

test('every built page shows the non-affiliation notice and the guide version in its language', () => {
  const failures = []
  const files = htmlFiles(dist)
  assert.ok(files.length >= 112, `expected at least 112 pages, found ${files.length}`)
  for (const file of files) {
    const html = readFileSync(file, 'utf8')
    const lang = html.match(/<html[^>]*\blang="(\w+)"/)?.[1]
    const footer = html.match(/<footer\b[\s\S]*?<\/footer>/)?.[0] ?? ''
    const notice = lang === 'fr' ? /non affilié à Anthropic/i : /not affiliated with Anthropic/i
    if (!notice.test(footer)) failures.push(`${relative(dist, file)}: notice missing from footer`)
    if (!footer.includes(version)) failures.push(`${relative(dist, file)}: ${version} missing from footer`)
  }
  assert.deepEqual(failures.slice(0, 10), [])
  assert.equal(failures.length, 0)
})
