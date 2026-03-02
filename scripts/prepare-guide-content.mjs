/**
 * prepare-guide-content.mjs
 *
 * Prepares Cowork guide content for Starlight:
 *   1. Copies guide/*.md (EN) → src/content/docs/guide/
 *   2. Copies workflows/*.en.md → src/content/docs/guide/workflows/ (renamed: strip .en)
 *   3. Copies prompts/*.md (EN) → src/content/docs/guide/prompts/
 *   4. Copies reference/*.md (EN) → src/content/docs/guide/reference/
 *
 * Language conventions in claude-cowork-guide:
 *   guide/prompts/reference: name.md = English, name.fr.md = French
 *   workflows: name.md = French, name.en.md = English
 *
 * Run: node scripts/prepare-guide-content.mjs
 * CI:  runs after 'git clone' of guide repo
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

// Clear Astro's content layer data store so stale entries don't cause
// duplicate ID warnings after guide files are regenerated.
const DATA_STORE = resolve(ROOT, '.astro/data-store.json')
if (existsSync(DATA_STORE)) {
  rmSync(DATA_STORE)
}

const GUIDE_REPO = resolve(ROOT, '../claude-cowork-guide')
const GUIDE_DIR = resolve(GUIDE_REPO, 'guide')

// Graceful fail if guide repo absent
if (!existsSync(GUIDE_DIR)) {
  console.warn(`[prepare-guide] WARNING: Guide repo not found at ${GUIDE_DIR}`)
  console.warn(`[prepare-guide] Skipping — expected path: ${GUIDE_DIR}`)
  console.warn(`[prepare-guide] In CI, ensure guide repo is cloned before running this script.`)

  const stubDir = resolve(ROOT, 'src/content/docs/guide')
  mkdirSync(stubDir, { recursive: true })
  writeFileSync(
    resolve(ROOT, 'src/content/docs/guide/index.md'),
    '---\ntitle: "Guide"\ndescription: "Guide content not available in this build."\n---\n\nGuide content is generated during CI from the [guide repository](https://github.com/FlorianBruniaux/claude-cowork-guide).\n',
    'utf-8'
  )
  process.exit(0)
}

// --- Paths ---
const OUT_GUIDE = resolve(ROOT, 'src/content/docs/guide')
const OUT_WORKFLOWS = resolve(OUT_GUIDE, 'workflows')
const OUT_PROMPTS = resolve(OUT_GUIDE, 'prompts')
const OUT_REFERENCE = resolve(OUT_GUIDE, 'reference')

const OUT_FR_GUIDE = resolve(ROOT, 'src/content/docs/fr/guide')
const OUT_FR_WORKFLOWS = resolve(OUT_FR_GUIDE, 'workflows')
const OUT_FR_PROMPTS = resolve(OUT_FR_GUIDE, 'prompts')
const OUT_FR_REFERENCE = resolve(OUT_FR_GUIDE, 'reference')

// --- Helpers ---

/**
 * Transform frontmatter: add sidebar.order.
 * If no frontmatter, extract title from first # heading and create one.
 */
function addStarlightFm(content, meta) {
  const sidebarYaml = `sidebar:\n  order: ${meta.order}`
  const fmRegex = /^---\r?\n([\s\S]*?)\r?\n---/

  const match = content.match(fmRegex)
  if (!match) {
    // No frontmatter — extract title from first heading
    const headingMatch = content.match(/^# (.+)/m)
    const title = headingMatch ? headingMatch[1].trim() : meta.title
    const desc = meta.desc || ''
    return `---\ntitle: "${title.replace(/"/g, '\\"')}"\n${desc ? `description: "${desc.replace(/"/g, '\\"')}"\n` : ''}${sidebarYaml}\n---\n\n${content.trimStart()}`
  }

  let fm = match[1]
  // Remove tags: field if present (inline form)
  fm = fm.replace(/^tags:.*\n?/m, '')
  // Remove tags: block form
  fm = fm.replace(/^tags:\n([ \t]+-[^\n]*\n)*/m, '')
  fm = fm.trim()
  if (fm) fm += '\n'
  fm += sidebarYaml

  return content.replace(fmRegex, `---\n${fm}\n---`)
}

/**
 * Normalize code fence language identifiers to ones Shiki knows.
 */
function normalizeLangs(content) {
  return content.replace(/^(```|~~~)(\S+)/gm, (match, fence, lang) => {
    const normalized = {
      'gitignore': 'bash',
      'C': 'c',
      'C++': 'cpp',
      'Dockerfile': 'docker',
    }[lang] ?? (lang.startsWith('[') ? '' : lang.toLowerCase() === lang ? lang : lang.toLowerCase())
    return `${fence}${normalized}`
  })
}

function ensureDir(dir) {
  mkdirSync(dir, { recursive: true })
}

function cleanAndCreate(dir) {
  rmSync(dir, { recursive: true, force: true })
  mkdirSync(dir, { recursive: true })
}

// =====================================================================
// Main
// =====================================================================

console.log('[prepare-guide] Starting guide content preparation...')
console.log(`[prepare-guide] Source: ${GUIDE_DIR}`)
console.log(`[prepare-guide] Output: ${OUT_GUIDE}`)

// Clean output directories (EN + FR)
cleanAndCreate(OUT_GUIDE)
cleanAndCreate(OUT_FR_GUIDE)

const stats = { guide: 0, workflows: 0, prompts: 0, reference: 0, fr: 0 }

// -----------------------------------------------------------------------
// 1. Core guide files (guide/*.md, EN only — exclude .fr.md, README.md)
// -----------------------------------------------------------------------
const guideFiles = readdirSync(GUIDE_DIR)
  .filter(f => f.endsWith('.md') && !f.endsWith('.fr.md') && f !== 'README.md')
  .sort()

for (let i = 0; i < guideFiles.length; i++) {
  const file = guideFiles[i]
  const src = resolve(GUIDE_DIR, file)
  let content = readFileSync(src, 'utf-8')

  const titleMatch = content.match(/^title:\s*["']?(.+?)["']?\s*$/m) || content.match(/^# (.+)/m)
  const title = titleMatch ? titleMatch[1].trim() : file.replace('.md', '')
  const descMatch = content.match(/^description:\s*["']?(.+?)["']?\s*$/m)
  const desc = descMatch ? descMatch[1].trim() : ''

  content = addStarlightFm(content, { title, desc, order: i })
  content = normalizeLangs(content)

  writeFileSync(resolve(OUT_GUIDE, file), content, 'utf-8')
  stats.guide++
}

console.log(`[prepare-guide] ✓ Core guide files: ${stats.guide}`)

// -----------------------------------------------------------------------
// 2. Workflow files (workflows/*.en.md — English, rename to strip .en)
// -----------------------------------------------------------------------
const WORKFLOWS_SRC = resolve(GUIDE_REPO, 'workflows')

if (existsSync(WORKFLOWS_SRC)) {
  ensureDir(OUT_WORKFLOWS)

  const workflowFiles = readdirSync(WORKFLOWS_SRC)
    .filter(f => f.endsWith('.en.md') && !f.startsWith('README'))
    .sort()

  for (let i = 0; i < workflowFiles.length; i++) {
    const file = workflowFiles[i]
    const src = resolve(WORKFLOWS_SRC, file)
    let content = readFileSync(src, 'utf-8')

    const titleMatch = content.match(/^title:\s*["']?(.+?)["']?\s*$/m) || content.match(/^# (.+)/m)
    const title = titleMatch ? titleMatch[1].trim() : file.replace('.en.md', '')
    const descMatch = content.match(/^description:\s*["']?(.+?)["']?\s*$/m)
    const desc = descMatch ? descMatch[1].trim() : ''

    content = addStarlightFm(content, { title, desc, order: 200 + i })
    content = normalizeLangs(content)

    // Output filename: strip .en → name.md
    const outFile = file.replace('.en.md', '.md')
    writeFileSync(resolve(OUT_WORKFLOWS, outFile), content, 'utf-8')
    stats.workflows++
  }

  console.log(`[prepare-guide] ✓ Workflow files: ${stats.workflows}`)
} else {
  console.warn(`[prepare-guide] WARNING: No workflows directory at ${WORKFLOWS_SRC}`)
}

// -----------------------------------------------------------------------
// 3. Prompt files (prompts/*.md, EN — exclude .fr.md, README)
// -----------------------------------------------------------------------
const PROMPTS_SRC = resolve(GUIDE_REPO, 'prompts')

if (existsSync(PROMPTS_SRC)) {
  ensureDir(OUT_PROMPTS)

  const promptFiles = readdirSync(PROMPTS_SRC)
    .filter(f => f.endsWith('.md') && !f.endsWith('.fr.md') && !f.startsWith('README'))
    .sort()

  for (let i = 0; i < promptFiles.length; i++) {
    const file = promptFiles[i]
    const src = resolve(PROMPTS_SRC, file)
    let content = readFileSync(src, 'utf-8')

    const titleMatch = content.match(/^title:\s*["']?(.+?)["']?\s*$/m) || content.match(/^# (.+)/m)
    const title = titleMatch ? titleMatch[1].trim() : file.replace('.md', '')
    const descMatch = content.match(/^description:\s*["']?(.+?)["']?\s*$/m)
    const desc = descMatch ? descMatch[1].trim() : ''

    content = addStarlightFm(content, { title, desc, order: 300 + i })
    content = normalizeLangs(content)

    writeFileSync(resolve(OUT_PROMPTS, file), content, 'utf-8')
    stats.prompts++
  }

  console.log(`[prepare-guide] ✓ Prompt files: ${stats.prompts}`)
} else {
  console.warn(`[prepare-guide] WARNING: No prompts directory at ${PROMPTS_SRC}`)
}

// -----------------------------------------------------------------------
// 4. Reference files (reference/*.md, EN — exclude .fr.md, README)
// -----------------------------------------------------------------------
const REFERENCE_SRC = resolve(GUIDE_REPO, 'reference')

if (existsSync(REFERENCE_SRC)) {
  ensureDir(OUT_REFERENCE)

  const referenceFiles = readdirSync(REFERENCE_SRC)
    .filter(f => f.endsWith('.md') && !f.endsWith('.fr.md') && !f.startsWith('README'))
    .sort()

  for (let i = 0; i < referenceFiles.length; i++) {
    const file = referenceFiles[i]
    const src = resolve(REFERENCE_SRC, file)
    let content = readFileSync(src, 'utf-8')

    const titleMatch = content.match(/^title:\s*["']?(.+?)["']?\s*$/m) || content.match(/^# (.+)/m)
    const title = titleMatch ? titleMatch[1].trim() : file.replace('.md', '')
    const descMatch = content.match(/^description:\s*["']?(.+?)["']?\s*$/m)
    const desc = descMatch ? descMatch[1].trim() : ''

    content = addStarlightFm(content, { title, desc, order: 400 + i })
    content = normalizeLangs(content)

    writeFileSync(resolve(OUT_REFERENCE, file), content, 'utf-8')
    stats.reference++
  }

  console.log(`[prepare-guide] ✓ Reference files: ${stats.reference}`)
} else {
  console.warn(`[prepare-guide] WARNING: No reference directory at ${REFERENCE_SRC}`)
}

// -----------------------------------------------------------------------
// 5. Generate /guide/ landing index page
// -----------------------------------------------------------------------
const guideIndexContent = `---
title: "Cowork Guide"
description: "Complete guide for Claude Cowork — from getting started to advanced workflows and reference documentation."
sidebar:
  order: -1
template: splash
hero:
  tagline: Everything you need to master Claude Cowork — from zero to power user.
  actions:
    - text: Getting Started
      link: /guide/01-getting-started/
      icon: right-arrow
      variant: primary
    - text: Browse Workflows
      link: /guide/workflows/invoice-generation/
      icon: open-book
---

| Section | Description |
|---------|-------------|
| [Guide](/guide/00-overview/) | Core documentation — overview to troubleshooting |
| [Workflows](/guide/workflows/invoice-generation/) | Step-by-step real-world task automation |
| [Prompts](/guide/prompts/file-ops/) | Ready-to-use prompt templates |
| [Reference](/guide/reference/cheatsheet/) | Cheatsheet, FAQ, glossary, and comparison |
`
writeFileSync(resolve(OUT_GUIDE, 'index.md'), guideIndexContent, 'utf-8')

// -----------------------------------------------------------------------
// 6. FR — Core guide files (guide/*.fr.md → strip .fr → fr/guide/XX.md)
// -----------------------------------------------------------------------
const frGuideFiles = readdirSync(GUIDE_DIR)
  .filter(f => f.endsWith('.fr.md') && f !== 'README.fr.md')
  .sort()

ensureDir(OUT_FR_GUIDE)
for (let i = 0; i < frGuideFiles.length; i++) {
  const file = frGuideFiles[i]
  const src = resolve(GUIDE_DIR, file)
  let content = readFileSync(src, 'utf-8')

  const titleMatch = content.match(/^title:\s*["']?(.+?)["']?\s*$/m) || content.match(/^# (.+)/m)
  const title = titleMatch ? titleMatch[1].trim() : file.replace('.fr.md', '')
  const descMatch = content.match(/^description:\s*["']?(.+?)["']?\s*$/m)
  const desc = descMatch ? descMatch[1].trim() : ''

  content = addStarlightFm(content, { title, desc, order: i })
  content = normalizeLangs(content)

  const outFile = file.replace('.fr.md', '.md')
  writeFileSync(resolve(OUT_FR_GUIDE, outFile), content, 'utf-8')
  stats.fr++
}

// -----------------------------------------------------------------------
// 7. FR — Workflow files (workflows/*.md, FR base — exclude .en.md, README)
// -----------------------------------------------------------------------
if (existsSync(WORKFLOWS_SRC)) {
  ensureDir(OUT_FR_WORKFLOWS)

  const frWorkflowFiles = readdirSync(WORKFLOWS_SRC)
    .filter(f => f.endsWith('.md') && !f.endsWith('.en.md') && !f.startsWith('README'))
    .sort()

  for (let i = 0; i < frWorkflowFiles.length; i++) {
    const file = frWorkflowFiles[i]
    const src = resolve(WORKFLOWS_SRC, file)
    let content = readFileSync(src, 'utf-8')

    const titleMatch = content.match(/^title:\s*["']?(.+?)["']?\s*$/m) || content.match(/^# (.+)/m)
    const title = titleMatch ? titleMatch[1].trim() : file.replace('.md', '')
    const descMatch = content.match(/^description:\s*["']?(.+?)["']?\s*$/m)
    const desc = descMatch ? descMatch[1].trim() : ''

    content = addStarlightFm(content, { title, desc, order: 200 + i })
    content = normalizeLangs(content)

    writeFileSync(resolve(OUT_FR_WORKFLOWS, file), content, 'utf-8')
    stats.fr++
  }
}

// -----------------------------------------------------------------------
// 8. FR — Prompt files (prompts/*.fr.md → strip .fr)
// -----------------------------------------------------------------------
if (existsSync(PROMPTS_SRC)) {
  ensureDir(OUT_FR_PROMPTS)

  const frPromptFiles = readdirSync(PROMPTS_SRC)
    .filter(f => f.endsWith('.fr.md') && !f.startsWith('README'))
    .sort()

  for (let i = 0; i < frPromptFiles.length; i++) {
    const file = frPromptFiles[i]
    const src = resolve(PROMPTS_SRC, file)
    let content = readFileSync(src, 'utf-8')

    const titleMatch = content.match(/^title:\s*["']?(.+?)["']?\s*$/m) || content.match(/^# (.+)/m)
    const title = titleMatch ? titleMatch[1].trim() : file.replace('.fr.md', '')
    const descMatch = content.match(/^description:\s*["']?(.+?)["']?\s*$/m)
    const desc = descMatch ? descMatch[1].trim() : ''

    content = addStarlightFm(content, { title, desc, order: 300 + i })
    content = normalizeLangs(content)

    const outFile = file.replace('.fr.md', '.md')
    writeFileSync(resolve(OUT_FR_PROMPTS, outFile), content, 'utf-8')
    stats.fr++
  }
}

// -----------------------------------------------------------------------
// 9. FR — Reference files (reference/*.fr.md → strip .fr)
// -----------------------------------------------------------------------
if (existsSync(REFERENCE_SRC)) {
  ensureDir(OUT_FR_REFERENCE)

  const frReferenceFiles = readdirSync(REFERENCE_SRC)
    .filter(f => f.endsWith('.fr.md') && !f.startsWith('README'))
    .sort()

  for (let i = 0; i < frReferenceFiles.length; i++) {
    const file = frReferenceFiles[i]
    const src = resolve(REFERENCE_SRC, file)
    let content = readFileSync(src, 'utf-8')

    const titleMatch = content.match(/^title:\s*["']?(.+?)["']?\s*$/m) || content.match(/^# (.+)/m)
    const title = titleMatch ? titleMatch[1].trim() : file.replace('.fr.md', '')
    const descMatch = content.match(/^description:\s*["']?(.+?)["']?\s*$/m)
    const desc = descMatch ? descMatch[1].trim() : ''

    content = addStarlightFm(content, { title, desc, order: 400 + i })
    content = normalizeLangs(content)

    const outFile = file.replace('.fr.md', '.md')
    writeFileSync(resolve(OUT_FR_REFERENCE, outFile), content, 'utf-8')
    stats.fr++
  }
}

// -----------------------------------------------------------------------
// 10. Generate /fr/guide/ landing index page
// -----------------------------------------------------------------------
const frGuideIndexContent = `---
title: "Guide Cowork"
description: "Guide complet pour Claude Cowork — de la prise en main aux workflows avancés et à la documentation de référence."
sidebar:
  order: -1
template: splash
hero:
  tagline: Tout ce qu'il faut pour maîtriser Claude Cowork — du débutant à l'utilisateur avancé.
  actions:
    - text: Démarrage
      link: /fr/guide/01-getting-started/
      icon: right-arrow
      variant: primary
    - text: Parcourir les Workflows
      link: /fr/guide/workflows/invoice-generation/
      icon: open-book
---

| Section | Description |
|---------|-------------|
| [Guide](/fr/guide/00-overview/) | Documentation principale — aperçu jusqu'au dépannage |
| [Workflows](/fr/guide/workflows/invoice-generation/) | Automatisation de tâches réelles pas à pas |
| [Prompts](/fr/guide/prompts/file-ops/) | Modèles de prompts prêts à l'emploi |
| [Référence](/fr/guide/reference/cheatsheet/) | Cheatsheet, FAQ, glossaire et comparaison |
`
writeFileSync(resolve(OUT_FR_GUIDE, 'index.md'), frGuideIndexContent, 'utf-8')

// -----------------------------------------------------------------------
// Report
// -----------------------------------------------------------------------
const total = stats.guide + stats.workflows + stats.prompts + stats.reference
console.log('')
console.log('[prepare-guide] ══════════════════════════════════')
console.log('[prepare-guide] Done! Summary:')
console.log(`[prepare-guide]   Core guide files (EN) : ${stats.guide}`)
console.log(`[prepare-guide]   Workflow files (EN)   : ${stats.workflows}`)
console.log(`[prepare-guide]   Prompt files (EN)     : ${stats.prompts}`)
console.log(`[prepare-guide]   Reference files (EN)  : ${stats.reference}`)
console.log(`[prepare-guide]   FR files (all)        : ${stats.fr}`)
console.log(`[prepare-guide]   Total EN              : ${total}`)
console.log(`[prepare-guide]   Total FR              : ${stats.fr}`)
console.log('[prepare-guide] ══════════════════════════════════')
