import type { SearchEntry } from '../scripts/search'
import type { Lang } from './i18n'
import { GUIDE_ENTRIES_EN, GUIDE_ENTRIES_FR } from './guide-search-entries'

const LANDING_ENTRIES_EN: SearchEntry[] = [
  // Landing pages
  { id: 'page-home', title: 'Home - Claude Cowork Guide', keywords: 'home main page cowork guide overview', category: 'Pages', url: '/', source: 'landing' },
  { id: 'page-features', title: 'Features', keywords: 'features documentation workflows prompts security', category: 'Pages', url: '/#features', source: 'landing' },
  { id: 'page-workflows', title: 'Workflows', keywords: 'workflows step by step admin commercial production', category: 'Pages', url: '/#workflows', source: 'landing' },
  { id: 'page-prompts', title: 'Prompts Library', keywords: 'prompts copy paste file operations documents extraction', category: 'Pages', url: '/#prompts', source: 'landing' },
  { id: 'page-comparison', title: 'Tool Comparison', keywords: 'comparison cowork claude code copilot chatgpt', category: 'Pages', url: '/#comparison', source: 'landing' },
  { id: 'page-faq', title: 'FAQ', keywords: 'faq questions answers help', category: 'Pages', url: '/#faq', source: 'landing' },
  { id: 'page-rules', title: 'Golden Rules', keywords: 'rules safety security best practices golden', category: 'Pages', url: '/#rules', source: 'landing' },
  { id: 'page-terms', title: 'Key Terms', keywords: 'terms glossary vocabulary workspace token', category: 'Pages', url: '/#terms', source: 'landing' },
]

const LANDING_ENTRIES_FR: SearchEntry[] = [
  // Pages
  { id: 'page-home', title: 'Accueil - Guide Claude Cowork', keywords: 'accueil page principale cowork guide aperçu', category: 'Pages', url: '/fr/', source: 'landing' },
  { id: 'page-features', title: 'Fonctionnalités', keywords: 'fonctionnalités documentation workflows prompts sécurité', category: 'Pages', url: '/fr/#features', source: 'landing' },
  { id: 'page-workflows', title: 'Workflows', keywords: 'workflows pas à pas admin commercial production', category: 'Pages', url: '/fr/#workflows', source: 'landing' },
  { id: 'page-prompts', title: 'Bibliothèque Prompts', keywords: 'prompts copier coller fichiers documents extraction', category: 'Pages', url: '/fr/#prompts', source: 'landing' },
  { id: 'page-comparison', title: 'Comparaison Outils', keywords: 'comparaison cowork claude code copilot chatgpt', category: 'Pages', url: '/fr/#comparison', source: 'landing' },
  { id: 'page-faq', title: 'FAQ', keywords: 'faq questions réponses aide', category: 'Pages', url: '/fr/#faq', source: 'landing' },
  { id: 'page-rules', title: 'Règles d\'Or', keywords: 'règles sécurité bonnes pratiques', category: 'Pages', url: '/fr/#rules', source: 'landing' },
  { id: 'page-terms', title: 'Termes Clés', keywords: 'termes glossaire vocabulaire workspace jeton', category: 'Pages', url: '/fr/#terms', source: 'landing' },
]

export function getSearchIndex(lang: Lang): SearchEntry[] {
  if (lang === 'fr') {
    return [...LANDING_ENTRIES_FR, ...GUIDE_ENTRIES_FR] as SearchEntry[]
  }
  return [...LANDING_ENTRIES_EN, ...GUIDE_ENTRIES_EN] as SearchEntry[]
}
