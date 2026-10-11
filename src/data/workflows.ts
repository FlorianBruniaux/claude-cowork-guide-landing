import type { Lang } from './i18n'

const GUIDE_PATH = { en: '/guide/workflows/', fr: '/fr/guide/workflows/' } as const

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
  // Administratif (8)
  { icon: '📄', title: 'Invoice/Quote Generation', desc: 'Create invoices from templates. VAT calculations, legal mentions.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'administratif', url: GUIDE_PATH.en + 'invoice-generation/' },
  { icon: '🔄', title: 'Quote → Invoice', desc: 'Automatically convert accepted quotes to invoices.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'administratif', url: GUIDE_PATH.en + 'quote-to-invoice/' },
  { icon: '⏰', title: 'Payment Reminders', desc: 'Generate escalating reminders (R1, R2, R3, formal notice).', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'administratif', url: GUIDE_PATH.en + 'payment-reminders/' },
  { icon: '✅', title: 'Compliance Verification', desc: 'Check mandatory documents (certifications, insurance).', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'administratif', url: GUIDE_PATH.en + 'compliance-checklist/' },
  { icon: '📊', title: 'Client Follow-up Tracker', desc: 'Excel dashboard with statuses and next actions.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'administratif', url: GUIDE_PATH.en + 'client-followup-tracker/' },
  { icon: '💰', title: 'Supplier Price Comparison', desc: 'Multi-quote analysis with weighted scoring.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'administratif', url: GUIDE_PATH.en + 'price-comparison/' },
  { icon: '🧮', title: 'Financial Model Validation', desc: 'Audit Excel formulas, assumptions, errors.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'administratif', url: GUIDE_PATH.en + 'financial-model-validation/' },
  { icon: '👥', title: 'Workforce Planning', desc: 'Model HR growth, compensation costs.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'administratif', url: GUIDE_PATH.en + 'workforce-planning/' },
  // Commercial (6)
  { icon: '🔍', title: 'Prospect Research', desc: 'Company investigation (ID, revenue, financial health, decision-makers).', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_PATH.en + 'prospect-research/' },
  { icon: '📝', title: 'Detailed Quote Creation', desc: 'Professional quotes with pricing and variants.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_PATH.en + 'quote-creation/' },
  { icon: '📈', title: 'Competitor Analysis', desc: 'Local benchmarking (pricing, offers, reviews).', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_PATH.en + 'competitor-analysis/' },
  { icon: '📊', title: 'Commercial Presentations', desc: 'Structured PowerPoint/Keynote for clients. Includes reusable template workflow from your existing company files.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_PATH.en + 'presentation-slides/' },
  { icon: '📧', title: 'Client Newsletters', desc: 'Create regular responsive HTML newsletters.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_PATH.en + 'newsletter-creation/' },
  { icon: '🏠', title: 'Short-Term Rental Prospecting', desc: 'Long-term listing analysis, short-term revenue estimates and personalized outreach.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_PATH.en + 'conciergerie-lcd-prospection/' },
  // Production (5)
  { icon: '📅', title: 'Project/Site Planning', desc: 'Gantt planning with milestones and dependencies.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'production', url: GUIDE_PATH.en + 'project-planning/' },
  { icon: '📦', title: 'Inventory Tracking', desc: 'Inventory with reorder alerts and valuation.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'production', url: GUIDE_PATH.en + 'inventory-tracking/' },
  { icon: '📓', title: 'Work Log', desc: 'Daily activity report compliant with regulations.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'production', url: GUIDE_PATH.en + 'work-log/' },
  { icon: '✓', title: 'Quality Control', desc: 'Standardized verification checklists by trade.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'production', url: GUIDE_PATH.en + 'quality-checklist/' },
  { icon: '🛒', title: 'Supplier Orders', desc: 'Optimized purchase order preparation.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'production', url: GUIDE_PATH.en + 'supplier-order/' },
  // Communication (5)
  { icon: '📱', title: 'Social Media Posts', desc: 'LinkedIn/Facebook/Instagram with calendar.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'communication', url: GUIDE_PATH.en + 'social-media-posts/' },
  { icon: '✉️', title: 'Email Templates', desc: 'Reusable professional email library.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'communication', url: GUIDE_PATH.en + 'email-templates/' },
  { icon: '⭐', title: 'Review Responses', desc: 'Manage Google/Facebook reviews with response strategies.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'communication', url: GUIDE_PATH.en + 'review-response/' },
  { icon: '🎓', title: 'Knowledge Transfer', desc: 'Training documentation for apprentices and succession.', complexity: 'Advanced', complexityClass: 'complexity-advanced', category: 'communication', url: GUIDE_PATH.en + 'knowledge-transfer/' },
  { icon: '🌐', title: 'Website Audit', desc: 'Website diagnostic and action plan.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'communication', url: GUIDE_PATH.en + 'website-audit/' },
  // Organisation (6)
  { icon: '📁', title: 'File Organization', desc: 'Automatic folder sorting by type and date.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'organisation', url: GUIDE_PATH.en + 'file-organization/' },
  { icon: '🧾', title: 'Expense Tracking', desc: 'Receipts to Excel accounting with OCR.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'organisation', url: GUIDE_PATH.en + 'expense-tracking/' },
  { icon: '📝', title: 'Meeting Preparation', desc: 'Structured client/supplier briefings.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'organisation', url: GUIDE_PATH.en + 'meeting-prep/' },
  { icon: '📅', title: 'Scheduled Automation', desc: 'Daily briefs, weekly reports, monthly dashboards — set once, run automatically.', complexity: 'Intermediate', complexityClass: 'complexity-intermediate', category: 'organisation', url: GUIDE_PATH.en + 'scheduled-automation/' },
  { icon: '🧠', title: 'Cross-Session Memory', desc: 'Persist context between Cowork sessions with Desktop Commander and a memory.md file.', complexity: 'Beginner', complexityClass: 'complexity-beginner', category: 'organisation', url: GUIDE_PATH.en + 'memory-setup/' },
]

const WORKFLOWS_FR: Workflow[] = [
  // Administratif (8)
  { icon: '📄', title: 'Génération Factures/Devis', desc: 'Créer des factures depuis modèles. Calculs TVA, mentions légales.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'administratif', url: GUIDE_PATH.fr + 'invoice-generation/' },
  { icon: '🔄', title: 'Devis → Facture', desc: 'Convertir automatiquement les devis acceptés en factures.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'administratif', url: GUIDE_PATH.fr + 'quote-to-invoice/' },
  { icon: '⏰', title: 'Relances Paiement', desc: 'Générer des relances progressives (R1, R2, R3, mise en demeure).', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'administratif', url: GUIDE_PATH.fr + 'payment-reminders/' },
  { icon: '✅', title: 'Vérification Conformité', desc: 'Vérifier les documents obligatoires (certifications, assurances).', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'administratif', url: GUIDE_PATH.fr + 'compliance-checklist/' },
  { icon: '📊', title: 'Suivi Client', desc: 'Tableau de bord Excel avec statuts et prochaines actions.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'administratif', url: GUIDE_PATH.fr + 'client-followup-tracker/' },
  { icon: '💰', title: 'Comparaison Prix Fournisseurs', desc: 'Analyse multi-devis avec scoring pondéré.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'administratif', url: GUIDE_PATH.fr + 'price-comparison/' },
  { icon: '🧮', title: 'Validation Modèle Financier', desc: 'Audit des formules Excel, hypothèses, erreurs.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'administratif', url: GUIDE_PATH.fr + 'financial-model-validation/' },
  { icon: '👥', title: 'Planification Effectifs', desc: 'Modélisation de la croissance RH et des coûts de masse salariale.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'administratif', url: GUIDE_PATH.fr + 'workforce-planning/' },
  // Commercial (6)
  { icon: '🔍', title: 'Recherche Prospects', desc: 'Investigation entreprise (SIRET, CA, santé financière, décideurs).', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_PATH.fr + 'prospect-research/' },
  { icon: '📝', title: 'Création Devis Détaillé', desc: 'Devis professionnels avec tarification et variantes.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_PATH.fr + 'quote-creation/' },
  { icon: '📈', title: 'Analyse Concurrence', desc: 'Benchmarking local (tarifs, offres, avis).', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_PATH.fr + 'competitor-analysis/' },
  { icon: '📊', title: 'Présentations Commerciales', desc: 'PowerPoint/Keynote structurés pour clients. Inclut la création de templates réutilisables depuis vos fichiers existants.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_PATH.fr + 'presentation-slides/' },
  { icon: '📧', title: 'Newsletters Clients', desc: 'Créer des newsletters HTML responsive régulières.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_PATH.fr + 'newsletter-creation/' },
  { icon: '🏠', title: 'Prospection Conciergerie LCD', desc: 'Analyse d\'annonces LLD, estimation des revenus LCD et message personnalisé.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'commercial', url: GUIDE_PATH.fr + 'conciergerie-lcd-prospection/' },
  // Production (5)
  { icon: '📅', title: 'Planification Projet/Chantier', desc: 'Planning Gantt avec jalons et dépendances.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'production', url: GUIDE_PATH.fr + 'project-planning/' },
  { icon: '📦', title: 'Suivi Stock', desc: 'Inventaire avec alertes réapprovisionnement et valorisation.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'production', url: GUIDE_PATH.fr + 'inventory-tracking/' },
  { icon: '📓', title: 'Journal de Chantier', desc: 'Rapport d\'activité quotidien conforme réglementation.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'production', url: GUIDE_PATH.fr + 'work-log/' },
  { icon: '✓', title: 'Contrôle Qualité', desc: 'Checklists de vérification standardisées par métier.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'production', url: GUIDE_PATH.fr + 'quality-checklist/' },
  { icon: '🛒', title: 'Commandes Fournisseurs', desc: 'Préparation de bons de commande optimisés.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'production', url: GUIDE_PATH.fr + 'supplier-order/' },
  // Communication (5)
  { icon: '📱', title: 'Publications Réseaux Sociaux', desc: 'LinkedIn/Facebook/Instagram avec calendrier.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'communication', url: GUIDE_PATH.fr + 'social-media-posts/' },
  { icon: '✉️', title: 'Modèles d\'Emails', desc: 'Bibliothèque d\'emails professionnels réutilisables.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'communication', url: GUIDE_PATH.fr + 'email-templates/' },
  { icon: '⭐', title: 'Réponses aux Avis', desc: 'Gérer les avis Google/Facebook avec stratégies de réponse.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'communication', url: GUIDE_PATH.fr + 'review-response/' },
  { icon: '🎓', title: 'Transmission Savoir', desc: 'Documentation de formation pour apprentis et succession.', complexity: 'Avancé', complexityClass: 'complexity-advanced', category: 'communication', url: GUIDE_PATH.fr + 'knowledge-transfer/' },
  { icon: '🌐', title: 'Audit Site Vitrine', desc: 'Diagnostic du site web et plan d\'action.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'communication', url: GUIDE_PATH.fr + 'website-audit/' },
  // Organisation (6)
  { icon: '📁', title: 'Organisation Fichiers', desc: 'Tri automatique dossiers par type et date.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'organisation', url: GUIDE_PATH.fr + 'file-organization/' },
  { icon: '🧾', title: 'Suivi Dépenses', desc: 'Tickets de caisse vers comptabilité Excel avec OCR.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'organisation', url: GUIDE_PATH.fr + 'expense-tracking/' },
  { icon: '📝', title: 'Préparation Réunions', desc: 'Briefings structurés client/fournisseur.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'organisation', url: GUIDE_PATH.fr + 'meeting-prep/' },
  { icon: '📅', title: 'Automatisation Planifiée', desc: 'Briefs quotidiens, rapports hebdo, dashboards mensuels — configurez une fois, exécutez automatiquement.', complexity: 'Intermédiaire', complexityClass: 'complexity-intermediate', category: 'organisation', url: GUIDE_PATH.fr + 'scheduled-automation/' },
  { icon: '🧠', title: 'Mémoire Inter-Sessions', desc: 'Persistez le contexte entre sessions Cowork avec Desktop Commander et un fichier memory.md.', complexity: 'Débutant', complexityClass: 'complexity-beginner', category: 'organisation', url: GUIDE_PATH.fr + 'memory-setup/' },
]

export function getWorkflows(lang: Lang): Workflow[] {
  return lang === 'fr' ? WORKFLOWS_FR : WORKFLOWS_EN
}