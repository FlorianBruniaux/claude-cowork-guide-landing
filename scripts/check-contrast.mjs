// WCAG contrast gate for the primary button and orange text, computed from the real
// CSS variables of both themes (src/styles/global.css) and the real .btn-primary rules
// (src/styles/components.css). Fails below 4.5:1.
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const root = new URL('../src/styles/', import.meta.url)
const MIN = 4.5

function block(css, selector) {
  const start = css.indexOf(`${selector} {`)
  if (start < 0) throw new Error(`selector not found: ${selector}`)
  const open = css.indexOf('{', start)
  const close = css.indexOf('}', open)
  return css.slice(open + 1, close)
}

function declarations(body) {
  const out = {}
  for (const m of body.matchAll(/([\w-]+)\s*:\s*([^;]+);/g)) out[m[1]] = m[2].trim()
  return out
}

function resolve(value, vars, seen = new Set()) {
  const m = value.match(/^var\((--[\w-]+)\)$/)
  if (!m) return value
  if (seen.has(m[1])) throw new Error(`cyclic variable ${m[1]}`)
  seen.add(m[1])
  if (!(m[1] in vars)) throw new Error(`unresolved variable ${m[1]}`)
  return resolve(vars[m[1]], vars, seen)
}

function luminance(hex) {
  const h = hex.replace('#', '')
  const full = h.length === 3 ? [...h].map(c => c + c).join('') : h
  const [r, g, b] = [0, 2, 4].map(i => parseInt(full.slice(i, i + 2), 16) / 255)
  const lin = v => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)
}

export function ratio(a, b) {
  const [x, y] = [luminance(a), luminance(b)]
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05)
}

export function themeVars() {
  const css = readFileSync(new URL('global.css', root), 'utf8')
  const light = declarations(block(css, ':root'))
  const dark = { ...light, ...declarations(block(css, '[data-theme="dark"]')) }
  return { light, dark }
}

function primaryButtonRules() {
  const css = readFileSync(new URL('components.css', root), 'utf8')
  const base = declarations(block(css, '.btn-primary'))
  const hover = { ...base, ...declarations(block(css, '.btn-primary:hover')) }
  return { base, hover }
}

export function checkContrast() {
  const { light, dark } = themeVars()
  const { base, hover } = primaryButtonRules()
  const results = []
  for (const [theme, vars] of [['light', light], ['dark', dark]]) {
    const pair = (label, fg, bg) => {
      const f = resolve(fg, vars)
      const b = resolve(bg, vars)
      results.push({ theme, label, fg: f, bg: b, ratio: ratio(f, b) })
    }
    pair('.btn-primary', base.color, base['background-color'])
    pair('.btn-primary:hover', hover.color, hover['background-color'])
    for (const surface of ['--bg-primary', '--bg-secondary', '--bg-tertiary', '--surface-elevated']) {
      pair(`accent text on ${surface}`, 'var(--accent)', `var(${surface})`)
      pair(`accent-hover text on ${surface}`, 'var(--accent-hover)', `var(${surface})`)
    }
  }
  return { results, failures: results.filter(r => r.ratio < MIN) }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { results, failures } = checkContrast()
  for (const r of results) {
    console.log(`${r.ratio < MIN ? 'FAIL' : 'ok  '}\t${r.theme}\t${r.ratio.toFixed(2)}\t${r.label}\t${r.fg} on ${r.bg}`)
  }
  if (failures.length) {
    console.error(`Contrast gate failed: ${failures.length} pair(s) under ${MIN}:1.`)
    process.exit(1)
  }
}
