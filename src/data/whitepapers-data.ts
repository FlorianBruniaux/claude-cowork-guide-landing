/**
 * Whitepapers & Livres blancs — Claude Cowork Guide
 * 17 whitepapers (WP-00 à WP-16), FR uniquement, PDF
 *
 * PDFs hébergés sur florian.bruniaux.com/guides/cowork/.
 * La stable ID (cw-XX-slug.fr) est envoyée au backend qui résout
 * vers le PDF hashé courant — les liens email restent valides indéfiniment.
 */

export interface Whitepaper {
  num: string        // "00", "01", ..., "11"
  titleFr: string
  subtitle: string   // hook en 1 ligne
  audience: string
  pages: number
  tags: string[]
  gated: boolean     // false = téléchargement direct, true = email requis
  badge?: string
  slugFr: string     // stable ID sans préfixe cw- ni suffixe .fr (ex: "00-de-zero-a-productif")
  hashedFileFr?: string  // pour les WP non-gated seulement — chemin relatif depuis /guides/
  datePublished: string  // ISO 8601 (YYYY-MM-DD)
}

export const WHITEPAPERS: Whitepaper[] = [
  {
    num: '00',
    titleFr: 'De Zéro à Productif',
    subtitle: 'Setup workspace, framework CTOC, 5 règles d\'or — le point d\'entrée pour tous les profils.',
    audience: 'Tous profils',
    pages: 24,
    tags: ['démarrage', 'ctoc', 'workspace'],
    gated: false,
    badge: 'Gratuit',
    slugFr: '00-de-zero-a-productif',
    hashedFileFr: 'cowork/00-de-zero-a-productif.fr.v1.0.0.50815d34631f.pdf',
    datePublished: '2026-01-15',
  },
  {
    num: '01',
    titleFr: 'Prompts Efficaces pour Non-Devs',
    subtitle: '20 exemples avant/après par catégorie — extraction, documents, organisation, communication.',
    audience: 'Tous profils',
    pages: 26,
    tags: ['prompts', 'ctoc', 'avant-après'],
    gated: true,
    slugFr: '01-prompts-efficaces-non-devs',
    datePublished: '2026-01-20',
  },
  {
    num: '02',
    titleFr: 'Automatisation Administrative',
    subtitle: '5 tâches chronophages automatisées — notes de frais, rapprochement bancaire, TVA, URSSAF.',
    audience: 'Gestionnaires, comptables',
    pages: 24,
    tags: ['admin', 'urssaf', 'tva', 'factures'],
    gated: true,
    slugFr: '02-automatisation-administrative',
    datePublished: '2026-01-22',
  },
  {
    num: '03',
    titleFr: 'IA pour Artisans et BTP',
    subtitle: 'Devis depuis photos chantier, bon de travaux, carnet numérique — réalités terrain.',
    audience: 'Artisans, BTP',
    pages: 22,
    tags: ['artisan', 'btp', 'devis', 'chantier'],
    gated: true,
    slugFr: '03-ia-artisans-btp',
    datePublished: '2026-01-25',
  },
  {
    num: '04',
    titleFr: 'IA pour Commerçants et Retail',
    subtitle: 'Calendrier commercial saisonnier, avis Google, fiches produit, inventaire temps réel.',
    audience: 'Commerçants, e-commerce',
    pages: 24,
    tags: ['commerce', 'retail', 'saisonnalité', 'avis'],
    gated: true,
    slugFr: '04-ia-commercants-retail',
    datePublished: '2026-01-28',
  },
  {
    num: '05',
    titleFr: 'IA pour Consultants et Professions Libérales',
    subtitle: 'ROI sur le temps non facturable — propositions, veille, CR de mission, knowledge base.',
    audience: 'Consultants, indépendants',
    pages: 24,
    tags: ['consultant', 'freelance', 'propositions', 'roi'],
    gated: true,
    slugFr: '05-ia-consultants-professions-liberales',
    datePublished: '2026-02-01',
  },
  {
    num: '06',
    titleFr: 'Prospection et Relation Client',
    subtitle: 'Pipeline complet prospect-client via Infogreffe, Pappers, Google Maps — templates de relance.',
    audience: 'Commerciaux, dirigeants',
    pages: 24,
    tags: ['prospection', 'infogreffe', 'crm', 'relances'],
    gated: true,
    slugFr: '06-prospection-relation-client',
    datePublished: '2026-02-05',
  },
  {
    num: '07',
    titleFr: 'Communication et Visibilité',
    subtitle: '4 canaux prioritaires, calendrier éditorial en 2h/mois, gestion réputation en ligne.',
    audience: 'Dirigeants, responsables comm',
    pages: 24,
    tags: ['gmb', 'linkedin', 'instagram', 'newsletter'],
    gated: true,
    slugFr: '07-communication-visibilite',
    datePublished: '2026-02-08',
  },
  {
    num: '08',
    titleFr: 'Organisation et Productivité',
    subtitle: 'Structure workspace, automatisations récurrentes, mémoire cross-session, kit équipe.',
    audience: 'Tous profils',
    pages: 24,
    tags: ['organisation', 'automatisation', 'workspace', 'équipe'],
    gated: true,
    badge: 'Populaire',
    slugFr: '08-organisation-productivite',
    datePublished: '2026-02-12',
  },
  {
    num: '09',
    titleFr: 'Sécurité et Confidentialité pour TPE',
    subtitle: 'Flux de données en 4 étapes, opt-out Anthropic, 3 catégories de docs, checklist complète.',
    audience: 'Dirigeants, responsables IT',
    pages: 22,
    tags: ['sécurité', 'rgpd', 'confidentialité', 'checklist'],
    gated: true,
    slugFr: '09-securite-confidentialite-tpe',
    datePublished: '2026-02-15',
  },
  {
    num: '10',
    titleFr: "Apprendre l'IA quand on n'est pas Dev",
    subtitle: 'Auto-diagnostic 3 profils, protocole UVAL, plan 30 jours, 5 pièges à éviter.',
    audience: 'Non-techniques, managers',
    pages: 22,
    tags: ['apprentissage', 'uval', 'plan-30-jours', 'adoption'],
    gated: true,
    slugFr: '10-apprendre-ia-non-dev',
    datePublished: '2026-02-20',
  },
  {
    num: '11',
    titleFr: 'ROI et Déploiement pour Dirigeants',
    subtitle: 'Formule ROI, comparatif VA/stagiaire/SaaS, plan 3 phases, 3 cas d\'usage chiffrés.',
    audience: 'Dirigeants, décideurs',
    pages: 22,
    tags: ['roi', 'déploiement', 'équipe', 'budget'],
    gated: true,
    slugFr: '11-roi-deploiement-dirigeants',
    datePublished: '2026-02-25',
  },
  {
    num: '12',
    titleFr: 'IA pour Professions de Santé Libérales',
    subtitle: '6 usages sans données patient, fiches métier (dentiste, kiné, ostéo, pharmacien, infirmier, médecin), workflow anonymisation.',
    audience: 'Praticiens de santé libéraux',
    pages: 28,
    tags: ['santé', 'médical', 'secret-médical', 'cabinet', 'CPAM'],
    gated: true,
    slugFr: '12-ia-professions-sante-liberales',
    datePublished: '2026-03-05',
  },
  {
    num: '13',
    titleFr: 'IA pour Conciergeries LCD',
    subtitle: 'Prospection Le Bon Coin, estimation revenus LCD vs LLD, messages personnalisés, argumentaire propriétaire.',
    audience: 'Conciergeries de location courte durée',
    pages: 23,
    tags: ['conciergerie', 'location-saisonniere', 'airbnb', 'prospection', 'immobilier'],
    gated: true,
    slugFr: '13-ia-conciergerie-lcd',
    datePublished: '2026-03-10',
  },
  {
    num: '14',
    titleFr: 'IA pour Restaurateurs et Hôteliers',
    subtitle: 'Menus saisonniers, food cost, réponses avis Google/TripAdvisor et gestion fournisseurs.',
    audience: 'Restaurateurs indépendants, traiteurs, hôteliers',
    pages: 22,
    tags: ['restauration', 'food-cost', 'avis', 'fournisseurs', 'menus'],
    gated: true,
    slugFr: '14-ia-restauration-hotellerie',
    datePublished: '2026-03-15',
  },
  {
    num: '15',
    titleFr: 'IA pour Agents et Mandataires Immobiliers',
    subtitle: 'Annonces différenciantes, prospection vendeurs, comptes-rendus de visite et argumentaire de prix.',
    audience: 'Agents immobiliers, mandataires indépendants',
    pages: 22,
    tags: ['immobilier', 'annonces', 'prospection', 'mandataires', 'estimation'],
    gated: true,
    slugFr: '15-ia-agents-immobiliers',
    datePublished: '2026-03-20',
  },
  {
    num: '16',
    titleFr: 'IA pour E-commerçants et Vendeurs en Ligne',
    subtitle: 'Fiches produits SEO, SAV efficace, newsletters et posts réseaux pour vendre plus avec moins de temps.',
    audience: 'E-commerçants indépendants, vendeurs Etsy/Shopify/Amazon',
    pages: 22,
    tags: ['ecommerce', 'fiches-produits', 'sav', 'newsletter', 'etsy', 'shopify'],
    gated: true,
    badge: 'Nouveau',
    slugFr: '16-ia-ecommerce-vendeurs-en-ligne',
    datePublished: '2026-04-01',
  },
]

export const TOTAL_PAGES = WHITEPAPERS.reduce((sum, wp) => sum + wp.pages, 0)
export const FREE_WPS = WHITEPAPERS.filter(wp => !wp.gated)
export const GATED_WPS = WHITEPAPERS.filter(wp => wp.gated)

/** Base URL des PDFs hashés sur Vercel */
export const PDF_BASE_URL = import.meta.env.PUBLIC_PDF_BASE ?? 'https://florian.bruniaux.com/guides'

/** URL de l'API subscribe du portfolio */
export const API_URL = import.meta.env.PUBLIC_API_URL ?? 'https://florian.bruniaux.com/api/subscribe'
