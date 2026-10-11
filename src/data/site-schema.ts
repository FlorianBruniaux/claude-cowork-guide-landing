/**
 * Shared JSON-LD definitions for the entities that several templates mention.
 *
 * Layout.astro (landing pages) and starlight/Head.astro (guide pages) both
 * embed these nodes, so one @id has exactly one definition across the site.
 * The site is bilingual, so the nodes carry no per-language property: the
 * language of a page is stated on the page-level node (WebPage, TechArticle).
 * scripts/check-built-seo.mjs fails the build when an @id is defined twice
 * with different content.
 */
const ORIGIN = 'https://cowork.bruniaux.com'

export const PERSON_ID = `${ORIGIN}/#person`
export const WEBSITE_ID = `${ORIGIN}/#website`
export const GUIDE_ID = `${ORIGIN}/#guide`

export const personNode = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Florian BRUNIAUX',
  url: 'https://github.com/FlorianBruniaux',
  sameAs: [
    'https://github.com/FlorianBruniaux',
    'https://www.linkedin.com/in/florian-bruniaux-43408b83/',
  ],
}

export const websiteNode = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: 'Claude Cowork Guide',
  url: `${ORIGIN}/`,
  description: 'Free community guide for Claude Cowork with 70 prompts and 29 workflows',
  inLanguage: ['en', 'fr'],
  author: { '@id': PERSON_ID },
}

export const guideNode = {
  '@type': 'CreativeWorkSeries',
  '@id': GUIDE_ID,
  name: 'Claude Cowork Guide',
  url: `${ORIGIN}/`,
  inLanguage: ['en', 'fr'],
  isAccessibleForFree: true,
  author: { '@id': PERSON_ID },
  isPartOf: { '@id': WEBSITE_ID },
}
