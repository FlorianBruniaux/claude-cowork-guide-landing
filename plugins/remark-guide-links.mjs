/**
 * remark-guide-links.mjs
 *
 * Remark plugin that rewrites relative links in guide content for Starlight.
 * Locale-aware: detects whether the file is in content/docs/fr/ and uses
 * the appropriate URL prefix (/guide/ vs /fr/guide/).
 *
 *   Pattern                              → EN                        → FR
 *   ────────────────────────────────────────────────────────────────────────
 *   ./01-getting-started.md             → /guide/01-getting-started/ → /fr/guide/01-getting-started/
 *   ./01-getting-started.fr.md          → (n/a)                     → /fr/guide/01-getting-started/
 *   ../workflows/invoice-generation.md  → /guide/workflows/...      → /fr/guide/workflows/...
 *   ../guide/03-security.fr.md          → (n/a)                     → /fr/guide/03-security/
 *   ../prompts/file-ops.md              → /guide/prompts/file-ops/  → /fr/guide/prompts/file-ops/
 *   ../reference/cheatsheet.md          → /guide/reference/...      → /fr/guide/reference/...
 *   https://...                         → unchanged
 *   #anchor                             → unchanged
 */

import { visit } from 'unist-util-visit'

const GITHUB_BASE = 'https://github.com/FlorianBruniaux/claude-cowork-guide/blob/main/'
const IMAGE_EXTS = new Set(['.jpeg', '.jpg', '.png', '.gif', '.svg', '.webp', '.avif'])

function resolveGuideLink(href, anchorFragment, guideBase, collectionBase) {
  const cleanHref = href.replace(/^\.\//, '')
  const frag = anchorFragment || ''

  if (/^(?:\.\.\/)?(?:workflows|prompts|reference)\/?$/.test(cleanHref)) {
    const directory = cleanHref.match(/(workflows|prompts|reference)/)[1]
    return `${guideBase}${directory}/${frag}`
  }

  if (/(?:^|\/)README(?:\.en|\.fr)?\.md$/.test(cleanHref)) {
    return cleanHref.startsWith('../') ? `${guideBase}${frag}` : `${collectionBase}${frag}`
  }

  // Images
  const ext = '.' + (cleanHref.split('.').pop() || '')
  if (IMAGE_EXTS.has(ext)) {
    return '/guide/images/' + cleanHref.split('/').pop()
  }

  // Same-dir .md or .fr.md (no subpath)
  if ((cleanHref.endsWith('.md') || cleanHref.endsWith('.fr.md')) && !cleanHref.includes('/')) {
    const slug = cleanHref.replace(/\.fr\.md$/, '').replace(/\.en\.md$/, '').replace(/\.md$/, '')
    return `${collectionBase}${slug}/${frag}`
  }

  // ../guide/XX.fr.md or ../guide/XX.md (from reference/prompts cross-linking to guide)
  const guideMatch = cleanHref.match(/(?:\.\.\/)?guide\/(.+?)(?:\.fr)?\.md$/)
  if (guideMatch) {
    return `${guideBase}${guideMatch[1]}/${frag}`
  }

  // ../workflows/XX.en.md or ../workflows/XX.md
  const workflowMatch = cleanHref.match(/(?:\.\.\/)?workflows\/(.+?)(?:\.en|\.fr)?\.md$/)
  if (workflowMatch) {
    return `${guideBase}workflows/${workflowMatch[1]}/${frag}`
  }

  // ../prompts/XX.fr.md or ../prompts/XX.md
  const promptMatch = cleanHref.match(/(?:\.\.\/)?prompts\/(.+?)(?:\.en|\.fr)?\.md$/)
  if (promptMatch) {
    return `${guideBase}prompts/${promptMatch[1]}/${frag}`
  }

  // ../reference/XX.fr.md or ../reference/XX.md
  const referenceMatch = cleanHref.match(/(?:\.\.\/)?reference\/(.+?)(?:\.en|\.fr)?\.md$/)
  if (referenceMatch) {
    return `${guideBase}reference/${referenceMatch[1]}/${frag}`
  }

  return null
}

function toGitHubUrl(href) {
  return GITHUB_BASE + href.replace(/^(\.\.\/)+/, '')
}

export function remarkGuideLinks() {
  return function transformer(tree, file) {
    const filePath = file?.history?.[0] || ''

    // Only process files inside guide content dirs (EN or FR)
    const isEN = filePath.includes('/docs/guide') || filePath.includes('/docs\\guide')
    const isFR = filePath.includes('/docs/fr/guide') || filePath.includes('/docs\\fr\\guide')
    if (!isEN && !isFR) return

    const guideBase = isFR ? '/fr/guide/' : '/guide/'
    const normalizedPath = filePath.replaceAll('\\', '/')
    const collection = normalizedPath.match(/\/docs\/(?:fr\/)?guide\/(workflows|prompts|reference)\//)?.[1]
    const collectionBase = collection ? `${guideBase}${collection}/` : guideBase

    visit(tree, ['link', 'image'], (node) => {
      const originalUrl = node.url || ''
      if (originalUrl.startsWith('http://') || originalUrl.startsWith('https://')) return
      if (originalUrl.startsWith('#')) return
      if (originalUrl.startsWith('data:')) return
      if (originalUrl.startsWith('/')) return

      const hashIdx = originalUrl.indexOf('#')
      const hrefPart = hashIdx >= 0 ? originalUrl.slice(0, hashIdx) : originalUrl
      const fragmentPart = hashIdx >= 0 ? originalUrl.slice(hashIdx) : ''
      if (!hrefPart) return

      const resolved = resolveGuideLink(hrefPart, fragmentPart, guideBase, collectionBase)
      if (resolved) {
        node.url = resolved
      } else if (hrefPart.startsWith('../') || hrefPart.startsWith('..\\')) {
        node.url = toGitHubUrl(hrefPart) + fragmentPart
      }
    })
  }
}

export default remarkGuideLinks
