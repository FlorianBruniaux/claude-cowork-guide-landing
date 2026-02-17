import type { SearchEntry } from '../scripts/search'
import type { Lang } from './i18n'

const GUIDE_BASE = 'https://github.com/FlorianBruniaux/claude-cowork-guide/blob/main/'

const ENTRIES_EN: SearchEntry[] = [
  // Landing pages
  { id: 'page-home', title: 'Home - Claude Cowork Guide', keywords: 'home main page cowork guide overview', category: 'Pages', url: '/', source: 'landing' },
  { id: 'page-features', title: 'Features', keywords: 'features documentation workflows prompts security', category: 'Pages', url: '/#features', source: 'landing' },
  { id: 'page-workflows', title: 'Workflows', keywords: 'workflows step by step admin commercial production', category: 'Pages', url: '/#workflows', source: 'landing' },
  { id: 'page-prompts', title: 'Prompts Library', keywords: 'prompts copy paste file operations documents extraction', category: 'Pages', url: '/#prompts', source: 'landing' },
  { id: 'page-comparison', title: 'Tool Comparison', keywords: 'comparison cowork claude code copilot chatgpt', category: 'Pages', url: '/#comparison', source: 'landing' },
  { id: 'page-faq', title: 'FAQ', keywords: 'faq questions answers help', category: 'Pages', url: '/#faq', source: 'landing' },
  { id: 'page-rules', title: 'Golden Rules', keywords: 'rules safety security best practices golden', category: 'Pages', url: '/#rules', source: 'landing' },
  { id: 'page-terms', title: 'Key Terms', keywords: 'terms glossary vocabulary workspace token', category: 'Pages', url: '/#terms', source: 'landing' },
  // Guide sections
  { id: 'guide-intro', title: 'Introduction to Claude Cowork', keywords: 'cowork overview what is getting started basics introduction beginner', category: 'Guide', url: GUIDE_BASE + 'README.md', source: 'guide' },
  { id: 'guide-quick-start', title: 'Quick Start Guide', keywords: 'quick start first steps setup install begin launch workspace', category: 'Guide', url: GUIDE_BASE + 'guide/01-quick-start.md', source: 'guide' },
  { id: 'guide-core-concepts', title: 'Core Concepts', keywords: 'concepts fundamentals how it works architecture understanding basics', category: 'Guide', url: GUIDE_BASE + 'guide/02-core-concepts.md', source: 'guide' },
  { id: 'guide-security', title: 'Security Best Practices', keywords: 'security safety permissions credentials passwords sensitive data protection', category: 'Guide', url: GUIDE_BASE + 'guide/03-security.md', source: 'guide' },
  { id: 'guide-troubleshooting', title: 'Troubleshooting Guide', keywords: 'troubleshoot problems issues errors fix debug help not working', category: 'Guide', url: GUIDE_BASE + 'guide/04-troubleshooting.md', source: 'guide' },
  { id: 'guide-legal', title: 'Claude Legal Extension', keywords: 'claude legal extension plugin contract review risk detection compliance nda', category: 'Guide', url: GUIDE_BASE + 'guide/02-capabilities.md#extensions--plugins', source: 'guide' },
]

const ENTRIES_FR: SearchEntry[] = [
  // Pages
  { id: 'page-home', title: 'Accueil - Guide Claude Cowork', keywords: 'accueil page principale cowork guide aperçu', category: 'Pages', url: '/fr/', source: 'landing' },
  { id: 'page-features', title: 'Fonctionnalités', keywords: 'fonctionnalités documentation workflows prompts sécurité', category: 'Pages', url: '/fr/#features', source: 'landing' },
  { id: 'page-workflows', title: 'Workflows', keywords: 'workflows pas à pas admin commercial production', category: 'Pages', url: '/fr/#workflows', source: 'landing' },
  { id: 'page-prompts', title: 'Bibliothèque Prompts', keywords: 'prompts copier coller fichiers documents extraction', category: 'Pages', url: '/fr/#prompts', source: 'landing' },
  { id: 'page-comparison', title: 'Comparaison Outils', keywords: 'comparaison cowork claude code copilot chatgpt', category: 'Pages', url: '/fr/#comparison', source: 'landing' },
  { id: 'page-faq', title: 'FAQ', keywords: 'faq questions réponses aide', category: 'Pages', url: '/fr/#faq', source: 'landing' },
  { id: 'page-rules', title: 'Règles d\'Or', keywords: 'règles sécurité bonnes pratiques', category: 'Pages', url: '/fr/#rules', source: 'landing' },
  { id: 'page-terms', title: 'Termes Clés', keywords: 'termes glossaire vocabulaire workspace jeton', category: 'Pages', url: '/fr/#terms', source: 'landing' },
  // Guide
  { id: 'guide-intro', title: 'Introduction à Claude Cowork', keywords: 'cowork aperçu présentation démarrage bases introduction débutant', category: 'Guide', url: GUIDE_BASE + 'README.fr.md', source: 'guide' },
  { id: 'guide-quick-start', title: 'Guide de Démarrage Rapide', keywords: 'démarrage rapide premiers pas configuration installation commencer', category: 'Guide', url: GUIDE_BASE + 'guide/01-quick-start.fr.md', source: 'guide' },
  { id: 'guide-core-concepts', title: 'Concepts Fondamentaux', keywords: 'concepts fondamentaux fonctionnement architecture compréhension bases', category: 'Guide', url: GUIDE_BASE + 'guide/02-core-concepts.fr.md', source: 'guide' },
  { id: 'guide-security', title: 'Bonnes Pratiques de Sécurité', keywords: 'sécurité protection permissions identifiants mots de passe données sensibles', category: 'Guide', url: GUIDE_BASE + 'guide/03-security.fr.md', source: 'guide' },
  { id: 'guide-troubleshooting', title: 'Guide de Dépannage', keywords: 'dépannage problèmes erreurs correction debug aide', category: 'Guide', url: GUIDE_BASE + 'guide/04-troubleshooting.fr.md', source: 'guide' },
  { id: 'guide-legal', title: 'Extension Claude Legal', keywords: 'claude legal extension plugin revue contrats détection risques conformité nda', category: 'Guide', url: GUIDE_BASE + 'guide/02-capabilities.fr.md#extensions--plugins', source: 'guide' },
]

export function getSearchIndex(lang: Lang): SearchEntry[] {
  return lang === 'fr' ? ENTRIES_FR : ENTRIES_EN
}