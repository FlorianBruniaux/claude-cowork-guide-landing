// Heading-level gate for landing pages: reports a heading that skips a level
// (for example h1 followed by h3). Starlight pages under /guide/ and /fr/guide/ are
// excluded because their "On this page" h2 is structural.
import { readdirSync, readFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const EXCLUDED = [/^guide\//, /^fr\/guide\//, /^pagefind\//]

function* htmlFiles(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* htmlFiles(full)
    else if (entry.name.endsWith('.html')) yield full
  }
}

export function headingJumps(html) {
  // Ignore content that is not rendered as headings of the document.
  const body = html.replace(/<(script|style|template)\b[\s\S]*?<\/\1>/gi, '').replace(/<!--[\s\S]*?-->/g, '')
  const jumps = []
  let prev = 0
  for (const m of body.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)) {
    const level = Number(m[1])
    const text = m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 60)
    if (prev && level > prev + 1) jumps.push({ from: prev, to: level, text })
    prev = level
  }
  return jumps
}

export function auditHeadings(distDir) {
  const findings = []
  for (const file of htmlFiles(distDir)) {
    const route = relative(distDir, file).split(sep).join('/')
    if (EXCLUDED.some(re => re.test(route))) continue
    for (const j of headingJumps(readFileSync(file, 'utf8'))) findings.push({ route, ...j })
  }
  return findings
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const dist = fileURLToPath(new URL(process.argv[2] ?? '../dist/', import.meta.url))
  const findings = auditHeadings(dist)
  for (const f of findings) console.log(`HEADING_JUMP\t/${f.route}\th${f.from} -> h${f.to}\t${f.text}`)
  if (findings.length) {
    console.error(`Heading gate failed: ${findings.length} jump(s).`)
    process.exit(1)
  }
}
