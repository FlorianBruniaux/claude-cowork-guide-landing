import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'
import { releases } from '../data/releases'

export const GET: APIRoute = async (context) => {
  const siteUrl = context.site?.toString() ?? 'https://cowork.bruniaux.com'

  const items = releases.map(release => {
    // Strip HTML tags from highlights for plain-text description
    const description = release.highlights
      .map(h => h.replace(/<[^>]+>/g, ''))
      .join(' · ')

    const breakingNote = release.breaking && release.breaking.length > 0
      ? ` ⚠️ Breaking: ${release.breaking.map(b => b.replace(/<[^>]+>/g, '')).join(' · ')}`
      : ''

    const versionSlug = release.version.replace(/\./g, '-')

    return {
      title: `Claude Cowork Guide ${release.version}`,
      description: description + breakingNote,
      pubDate: new Date(release.date),
      link: `${siteUrl}releases/#${versionSlug}`,
      customData: `<guid isPermaLink="false">claude-cowork-guide-${release.version}</guid>`,
    }
  })

  return rss({
    title: 'Claude Cowork Guide — Releases',
    description: 'New versions, features, and updates for the Claude Cowork Guide. Covers Cowork workflows, prompts, security rules, and integration guides.',
    site: siteUrl,
    items,
    customData: `<language>en</language><managingEditor>florian@bruniaux.com (Florian Bruniaux)</managingEditor><webMaster>florian@bruniaux.com (Florian Bruniaux)</webMaster><copyright>CC BY-SA 4.0 Florian Bruniaux</copyright>`,
    stylesheet: false,
  })
}
