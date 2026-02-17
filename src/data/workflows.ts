import type { Lang } from './i18n'

const GUIDE_BASE = 'https://github.com/FlorianBruniaux/claude-cowork-guide/blob/main/'

export interface Workflow {
  icon: string
  title: string
  desc: string
  complexity: string
  complexityClass: string
  category: string
  url: string
}

const WORKFLOWS_EN: Workflow[] = [
  // Administratif (6)
  { icon: '📄', title: 'Invoice/Quote Generation', desc: 'Create invoices from templates. VAT calculations, legal mentions.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'administratif', url: GUIDE_BASE + 'workflows/invoice-generation.en.md' },
  { icon: '🔄', title: 'Quote → Invoice', desc: 'Automatically convert accepted quotes to invoices.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'administratif', url: GUIDE_BASE + 'workflows/quote-to-invoice.en.md' },
  { icon: '⏰', title: 'Payment Reminders', desc: 'Generate escalating reminders (R1, R2, R3, formal notice).', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'administratif', url: GUIDE_BASE + 'workflows/payment-reminders.en.md' },
  { icon: '✅', title: 'Compliance Verification', desc: 'Check mandatory documents (certifications, insurance).', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'administratif', url: GUIDE_BASE + 'workflows/compliance-checklist.en.md' },
  { icon: '📊', title: 'Client Follow-up Tracker', desc: 'Excel dashboard with statuses and next actions.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'administratif', url: GUIDE_BASE + 'workflows/client-followup-tracker.en.md' },
  { icon: '💰', title: 'Supplier Price Comparison', desc: 'Multi-quote analysis with weighted scoring.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'administratif', url: GUIDE_BASE + 'workflows/price-comparison.en.md' },
  // Commercial (5)
  { icon: '🔍', title: 'Prospect Research', desc: 'Company investigation (ID, revenue, financial health, decision-makers).', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_BASE + 'workflows/prospect-research.en.md' },
  { icon: '📝', title: 'Detailed Quote Creation', desc: 'Professional quotes with pricing and variants.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_BASE + 'workflows/quote-creation.en.md' },
  { icon: '📈', title: 'Competitor Analysis', desc: 'Local benchmarking (pricing, offers, reviews).', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_BASE + 'workflows/competitor-analysis.en.md' },
  { icon: '📊', title: 'Commercial Presentations', desc: 'Structured PowerPoint/Keynote for clients.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_BASE + 'workflows/presentation-slides.en.md' },
  { icon: '📧', title: 'Client Newsletters', desc: 'Create regular responsive HTML newsletters.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_BASE + 'workflows/newsletter-creation.en.md' },
  // Production (5)
  { icon: '📅', title: 'Project/Site Planning', desc: 'Gantt planning with milestones and dependencies.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'production', url: GUIDE_BASE + 'workflows/project-planning.en.md' },
  { icon: '📦', title: 'Inventory Tracking', desc: 'Inventory with reorder alerts and valuation.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'production', url: GUIDE_BASE + 'workflows/inventory-tracking.en.md' },
  { icon: '📓', title: 'Work Log', desc: 'Daily activity report compliant with regulations.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'production', url: GUIDE_BASE + 'workflows/work-log.en.md' },
  { icon: '✓', title: 'Quality Control', desc: 'Standardized verification checklists by trade.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'production', url: GUIDE_BASE + 'workflows/quality-checklist.en.md' },
  { icon: '🛒', title: 'Supplier Orders', desc: 'Optimized purchase order preparation.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'production', url: GUIDE_BASE + 'workflows/supplier-order.en.md' },
  // Communication (4)
  { icon: '📱', title: 'Social Media Posts', desc: 'LinkedIn/Facebook/Instagram with calendar.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'communication', url: GUIDE_BASE + 'workflows/social-media-posts.en.md' },
  { icon: '✉️', title: 'Email Templates', desc: 'Reusable professional email library.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'communication', url: GUIDE_BASE + 'workflows/email-templates.en.md' },
  { icon: '⭐', title: 'Review Responses', desc: 'Manage Google/Facebook reviews with response strategies.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'communication', url: GUIDE_BASE + 'workflows/review-response.en.md' },
  { icon: '🎓', title: 'Knowledge Transfer', desc: 'Training documentation for apprentices and succession.', complexity: 'Advanced', complexityClass: 'complexity-advanced', category: 'communication', url: GUIDE_BASE + 'workflows/knowledge-transfer.en.md' },
  // Organisation (4)
  { icon: '📁', title: 'File Organization', desc: 'Automatic folder sorting by type and date.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'organisation', url: GUIDE_BASE + 'workflows/file-organization.en.md' },
  { icon: '🧾', title: 'Expense Tracking', desc: 'Receipts to Excel accounting with OCR.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'organisation', url: GUIDE_BASE + 'workflows/expense-tracking.en.md' },
  { icon: '📝', title: 'Meeting Preparation', desc: 'Structured client/supplier briefings.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'organisation', url: GUIDE_BASE + 'workflows/meeting-prep.en.md' },
]

const WORKFLOWS_FR: Workflow[] = [
  // Administratif (6)
  { icon: '📄', title: 'Génération Factures/Devis', desc: 'Créer des factures depuis modèles. Calculs TVA, mentions légales.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'administratif', url: GUIDE_BASE + 'workflows/invoice-generation.md' },
  { icon: '🔄', title: 'Devis → Facture', desc: 'Convertir automatiquement les devis acceptés en factures.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'administratif', url: GUIDE_BASE + 'workflows/quote-to-invoice.md' },
  { icon: '⏰', title: 'Relances Paiement', desc: 'Générer des relances progressives (R1, R2, R3, mise en demeure).', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'administratif', url: GUIDE_BASE + 'workflows/payment-reminders.md' },
  { icon: '✅', title: 'Vérification Conformité', desc: 'Vérifier les documents obligatoires (certifications, assurances).', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'administratif', url: GUIDE_BASE + 'workflows/compliance-checklist.md' },
  { icon: '📊', title: 'Suivi Client', desc: 'Tableau de bord Excel avec statuts et prochaines actions.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'administratif', url: GUIDE_BASE + 'workflows/client-followup-tracker.md' },
  { icon: '💰', title: 'Comparaison Prix Fournisseurs', desc: 'Analyse multi-devis avec scoring pondéré.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'administratif', url: GUIDE_BASE + 'workflows/price-comparison.md' },
  // Commercial (5)
  { icon: '🔍', title: 'Recherche Prospects', desc: 'Investigation entreprise (SIRET, CA, santé financière, décideurs).', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_BASE + 'workflows/prospect-research.md' },
  { icon: '📝', title: 'Création Devis Détaillé', desc: 'Devis professionnels avec tarification et variantes.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_BASE + 'workflows/quote-creation.md' },
  { icon: '📈', title: 'Analyse Concurrence', desc: 'Benchmarking local (tarifs, offres, avis).', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_BASE + 'workflows/competitor-analysis.md' },
  { icon: '📊', title: 'Présentations Commerciales', desc: 'PowerPoint/Keynote structurés pour clients.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_BASE + 'workflows/presentation-slides.md' },
  { icon: '📧', title: 'Newsletters Clients', desc: 'Créer des newsletters HTML responsive régulières.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_BASE + 'workflows/newsletter-creation.md' },
  // Production (5)
  { icon: '📅', title: 'Planification Projet/Chantier', desc: 'Planning Gantt avec jalons et dépendances.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'production', url: GUIDE_BASE + 'workflows/project-planning.md' },
  { icon: '📦', title: 'Suivi Stock', desc: 'Inventaire avec alertes réapprovisionnement et valorisation.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'production', url: GUIDE_BASE + 'workflows/inventory-tracking.md' },
  { icon: '📓', title: 'Journal de Chantier', desc: 'Rapport d\'activité quotidien conforme réglementation.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'production', url: GUIDE_BASE + 'workflows/work-log.md' },
  { icon: '✓', title: 'Contrôle Qualité', desc: 'Checklists de vérification standardisées par métier.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'production', url: GUIDE_BASE + 'workflows/quality-checklist.md' },
  { icon: '🛒', title: 'Commandes Fournisseurs', desc: 'Préparation de bons de commande optimisés.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'production', url: GUIDE_BASE + 'workflows/supplier-order.md' },
  // Communication (4)
  { icon: '📱', title: 'Publications Réseaux Sociaux', desc: 'LinkedIn/Facebook/Instagram avec calendrier.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'communication', url: GUIDE_BASE + 'workflows/social-media-posts.md' },
  { icon: '✉️', title: 'Modèles d\'Emails', desc: 'Bibliothèque d\'emails professionnels réutilisables.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'communication', url: GUIDE_BASE + 'workflows/email-templates.md' },
  { icon: '⭐', title: 'Réponses aux Avis', desc: 'Gérer les avis Google/Facebook avec stratégies de réponse.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'communication', url: GUIDE_BASE + 'workflows/review-response.md' },
  { icon: '🎓', title: 'Transmission Savoir', desc: 'Documentation de formation pour apprentis et succession.', complexity: 'Avancé', complexityClass: 'complexity-advanced', category: 'communication', url: GUIDE_BASE + 'workflows/knowledge-transfer.md' },
  // Organisation (4)
  { icon: '📁', title: 'Organisation Fichiers', desc: 'Tri automatique dossiers par type et date.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'organisation', url: GUIDE_BASE + 'workflows/file-organization.md' },
  { icon: '🧾', title: 'Suivi Dépenses', desc: 'Tickets de caisse vers comptabilité Excel avec OCR.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'organisation', url: GUIDE_BASE + 'workflows/expense-tracking.md' },
  { icon: '📝', title: 'Préparation Réunions', desc: 'Briefings structurés client/fournisseur.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'organisation', url: GUIDE_BASE + 'workflows/meeting-prep.md' },
]

export function getWorkflows(lang: Lang): Workflow[] {
  return lang === 'fr' ? WORKFLOWS_FR : WORKFLOWS_EN
}