// Guards the portfolio design system applied in November 2026.
// Rules and rationale: CLAUDE.md "Design system" and docs/design-system-cowork-2026-11-12/CONTRACT.md.
import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'

const root = new URL('..', import.meta.url).pathname
const read = (rel) => readFileSync(join(root, rel), 'utf8')

const sourceFiles = (dir) => readdirSync(join(root, dir), { recursive: true })
  .filter((f) => /\.(astro|css|ts|mjs)$/.test(f))
  .map((f) => join(dir, f))

test('light theme declares the portfolio tokens', () => {
  const css = read('src/styles/global.css')
  const light = css.slice(0, css.indexOf('[data-theme="dark"]'))
  assert.match(light, /--action:\s*#f97316;/)
  assert.match(light, /--font-display:\s*'Barlow Condensed'/)
  assert.match(light, /--font-sans:\s*'IBM Plex Sans'/)
  assert.match(light, /--font-mono:\s*'IBM Plex Mono'/)
})

test('no source file brings back the old indigo accent', () => {
  const offenders = [...['src/components', 'src/layouts', 'src/pages', 'src/styles'].flatMap(sourceFiles), 'public/favicon.svg']
    .filter((f) => /#6366f1|#4f46e5|#818cf8|\bindigo\b/i.test(read(f)))
  assert.deepEqual(offenders, [])
})

test('interactive cards do not lift on hover or focus', () => {
  const css = read('src/styles/portfolio-system.css')
  const hover = css.match(/\.brand-interactive-card:hover\s*\{([^}]*)\}/)
  const focus = css.match(/\.brand-interactive-card:is\(:focus-visible, :focus-within\)\s*\{([^}]*)\}/)
  assert.ok(hover && focus, 'hover and focus rules exist')
  for (const [, body] of [hover, focus]) assert.match(body, /transform:\s*none\s*!important/)
})
