/**
 * derive-description.mjs
 *
 * Derives a meta description from the first real paragraph of a Markdown page.
 * Used by prepare-guide-content.mjs when the source frontmatter has no
 * `description`, so every page gets text in its own language instead of the
 * site-wide fallback.
 */

export const MAX_DESCRIPTION_LENGTH = 159
export const MIN_DESCRIPTION_LENGTH = 50

/** Serialise a string as a double-quoted YAML scalar (backslash, quote, newline safe). */
export function yamlString(text) {
  return `"${String(text).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\r?\n/g, ' ')}"`
}

// Lines that are never prose: headings, quotes, tables, lists, rules, HTML,
// badges and images, language switchers (🌐), admonition fences.
const NON_PROSE = /^(#{1,6}\s|>|\||[-*+]\s|\d+[.)]\s|-{3,}\s*$|\*{3,}\s*$|_{3,}\s*$|<|!\[|\[!\[|🌐|:::)/

function stripFrontmatter(markdown) {
  return markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')
}

function cleanInline(text) {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/`+([^`]*)`+/g, '$1')
    .replace(/(\*\*|__)(.+?)\1/g, '$2')
    .replace(/(^|[\s(])[*_]([^*_\s][^*_]*?)[*_](?=[\s).,;:!?]|$)/g, '$1$2')
    .replace(/\s+/g, ' ')
    .trim()
}

export function truncateOnWord(text, max = MAX_DESCRIPTION_LENGTH) {
  if (text.length <= max) return text
  const room = max - 1
  const cut = text.slice(0, room + 1)
  const boundary = cut.lastIndexOf(' ')
  const head = (boundary > 0 ? cut.slice(0, boundary) : text.slice(0, room)).replace(/[\s,;:.\-–(]+$/, '')
  return `${head}…`
}

const LIST_ITEM = /^([-*+]|\d+[.)])\s+/
// A lead-in shorter than this is a label ("Symptoms:"), not a sentence.
const MIN_LEAD_IN_LENGTH = 20
const LABELLED = /^[^:]{1,40}\s?:\s/

function blocksOf(markdown) {
  const blocks = []
  let fence = null
  let paragraph = []
  const endParagraph = () => {
    if (paragraph.length) blocks.push({ type: 'para', raw: paragraph.join(' ') })
    paragraph = []
  }

  for (const rawLine of stripFrontmatter(markdown).split(/\r?\n/)) {
    const line = rawLine.trim()
    const fenceMatch = line.match(/^(`{3,}|~{3,})/)
    if (fenceMatch) {
      endParagraph()
      if (!fence) fence = fenceMatch[1][0]
      else if (fenceMatch[1][0] === fence) fence = null
      blocks.push({ type: 'break' })
      continue
    }
    if (fence) continue
    if (!line) { endParagraph(); continue }
    if (LIST_ITEM.test(line) && !/^(-{3,}|\*{3,})\s*$/.test(line)) {
      endParagraph()
      blocks.push({ type: 'list', raw: line.replace(LIST_ITEM, '') })
    } else if (line.startsWith('>')) {
      endParagraph()
      blocks.push({ type: 'quote', raw: line.replace(/^>\s?/, '') })
    } else if (NON_PROSE.test(line)) {
      endParagraph()
      blocks.push({ type: /^##\s/.test(line) ? 'h2' : 'break' })
    } else paragraph.push(line)
  }
  endParagraph()
  return blocks
}

function finish(text) {
  return truncateOnWord(text.replace(/^[RAQ]\s?:\s+/, '').replace(/\s+([:;?!])/g, ' $1'))
}

/**
 * Preference order:
 *   1. the first prose paragraph of at least 50 characters before the first
 *      "##" heading (the page introduction);
 *   2. the bold lead quote under the title ("> **15+ ready-to-use prompts...**"),
 *      which summarises prompt and reference pages better than a paragraph
 *      taken from the middle of the page;
 *   3. the first such paragraph anywhere in the page;
 *   4. any other lead quote, then a bare list lead-in.
 * A paragraph that only introduces a list ("...this workflow helps you:")
 * keeps its last full sentence, or is completed with the first list item.
 */
export function deriveDescription(markdown) {
  const blocks = blocksOf(markdown)
  let intro = ''
  let later = ''
  let boldQuote = ''
  let quote = ''
  let weakLead = ''
  let pastFirstH2 = false

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]
    if (block.type === 'h2') { pastFirstH2 = true; continue }
    if (block.type === 'quote') {
      const text = cleanInline(block.raw)
      if (text.length >= MIN_DESCRIPTION_LENGTH && !LABELLED.test(text)) {
        if (!boldQuote && /^\*\*.+\*\*$/.test(block.raw.trim())) boldQuote = text
        if (!quote) quote = text
      }
      continue
    }
    if (block.type !== 'para' || / \| /.test(block.raw)) continue
    const text = cleanInline(block.raw)
    let found = ''
    if (text.endsWith(':') || text.endsWith(' :')) {
      const body = text.replace(/\s*:$/, '')
      const previous = body.match(/^(.*[.!?])\s+[^.!?]+$/)?.[1]
      const next = blocks[i + 1]
      if (previous && previous.length >= MIN_DESCRIPTION_LENGTH) found = previous
      else if (next?.type === 'list' && body.length >= MIN_LEAD_IN_LENGTH) found = `${body}: ${cleanInline(next.raw)}`
      else if (!weakLead) weakLead = body
    } else if (text.length >= MIN_DESCRIPTION_LENGTH) found = text

    if (found.length < MIN_DESCRIPTION_LENGTH) continue
    if (!pastFirstH2) { intro = found; break }
    if (!later) later = found
  }

  const best = intro || boldQuote || later || quote
  if (best) return finish(best)
  return weakLead.length >= MIN_DESCRIPTION_LENGTH ? finish(`${weakLead}.`) : ''
}
