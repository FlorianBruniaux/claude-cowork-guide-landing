/**
 * Cowork Guide Search Index (French)
 * Index de recherche pour le guide en français
 */

const GUIDE_BASE = 'https://github.com/FlorianBruniaux/claude-cowork-guide/blob/main/';

window.SEARCH_GUIDE_FR = [
    // Guide Principal
    {
        id: 'guide-intro',
        type: 'guide',
        title: 'Introduction à Claude Cowork',
        content: 'cowork aperçu présentation démarrage bases introduction débutant',
        url: GUIDE_BASE + 'README.fr.md'
    },
    {
        id: 'guide-quick-start',
        type: 'guide',
        title: 'Guide de Démarrage Rapide',
        content: 'démarrage rapide premiers pas configuration installation commencer lancer espace travail',
        url: GUIDE_BASE + 'guide/01-quick-start.fr.md'
    },
    {
        id: 'guide-core-concepts',
        type: 'guide',
        title: 'Concepts Fondamentaux',
        content: 'concepts fondamentaux fonctionnement architecture compréhension bases',
        url: GUIDE_BASE + 'guide/02-core-concepts.fr.md'
    },
    {
        id: 'guide-security',
        type: 'guide',
        title: 'Bonnes Pratiques de Sécurité',
        content: 'sécurité protection permissions identifiants mots de passe données sensibles confidentialité',
        url: GUIDE_BASE + 'guide/03-security.fr.md'
    },
    {
        id: 'guide-troubleshooting',
        type: 'guide',
        title: 'Guide de Dépannage',
        content: 'dépannage problèmes erreurs correction debug aide ne fonctionne pas',
        url: GUIDE_BASE + 'guide/04-troubleshooting.fr.md'
    },
    {
        id: 'guide-profile-personalization',
        type: 'guide',
        title: 'Personnalisation du Profil',
        content: 'profil personnalisation voix style persona ton préférences paramètres mon-profil.md',
        url: GUIDE_BASE + 'guide/01-getting-started.fr.md#étape-6--personnaliser-votre-profil-optionnel'
    },
    {
        id: 'guide-model-selection',
        type: 'guide',
        title: 'Sélection du Modèle (Sonnet vs Opus)',
        content: 'sélection modèle sonnet opus choisir modèle performance coût vitesse compromis quel modèle',
        url: GUIDE_BASE + 'guide/02-capabilities.fr.md#sélection-du-modèle'
    },

    // Workflows - Organisation (4)
    {
        id: 'workflow-expense',
        type: 'workflow',
        title: 'Suivi Dépenses',
        content: 'reçus dépenses suivi tableur excel argent budget finance factures tickets',
        category: 'Intermédiaire',
        url: GUIDE_BASE + 'workflows/expense-tracking.md'
    },
    {
        id: 'workflow-file-org',
        type: 'workflow',
        title: 'Organisation Fichiers',
        content: 'organiser fichiers dossiers rangement tri renommer téléchargements documents structure organisation',
        category: 'Débutant',
        url: GUIDE_BASE + 'workflows/file-organization.md'
    },
    {
        id: 'workflow-meeting-prep',
        type: 'workflow',
        title: 'Préparation Réunions',
        content: 'réunion préparation briefing recherche ordre du jour notes compte-rendu',
        category: 'Intermédiaire',
        url: GUIDE_BASE + 'workflows/meeting-prep.md'
    },
    {
        id: 'workflow-knowledge-transfer',
        type: 'workflow',
        title: 'Transmission Savoir-Faire',
        content: 'transmission savoir-faire succession formation apprenti artisan procédures documentation compétences',
        category: 'Avancé',
        url: GUIDE_BASE + 'workflows/knowledge-transfer.md'
    },

    // Workflows - Administratif (6)
    {
        id: 'workflow-invoice-generation',
        type: 'workflow',
        title: 'Génération Factures/Devis',
        content: 'facture devis génération modèle facturation auto-entrepreneur TVA mentions légales',
        category: 'Débutant',
        url: GUIDE_BASE + 'workflows/invoice-generation.md'
    },
    {
        id: 'workflow-quote-to-invoice',
        type: 'workflow',
        title: 'Devis vers Facture',
        content: 'devis facture conversion transformation acceptation validation commande',
        category: 'Débutant',
        url: GUIDE_BASE + 'workflows/quote-to-invoice.md'
    },
    {
        id: 'workflow-payment-reminders',
        type: 'workflow',
        title: 'Relances Impayés',
        content: 'relance paiement impayé recouvrement facture retard mise en demeure courrier',
        category: 'Intermédiaire',
        url: GUIDE_BASE + 'workflows/payment-reminders.md'
    },
    {
        id: 'workflow-compliance-checklist',
        type: 'workflow',
        title: 'Vérification Conformité',
        content: 'conformité vérification documents obligatoires assurance Qualibat URSSAF réglementation',
        category: 'Intermédiaire',
        url: GUIDE_BASE + 'workflows/compliance-checklist.md'
    },
    {
        id: 'workflow-client-followup',
        type: 'workflow',
        title: 'Suivi Relances Clients',
        content: 'client suivi relance crm tableau excel pipeline commercial prospects',
        category: 'Débutant',
        url: GUIDE_BASE + 'workflows/client-followup-tracker.md'
    },
    {
        id: 'workflow-price-comparison',
        type: 'workflow',
        title: 'Comparatif Prix Fournisseurs',
        content: 'comparaison prix fournisseurs tarifs notation achat approvisionnement',
        category: 'Débutant',
        url: GUIDE_BASE + 'workflows/price-comparison.md'
    },

    // Workflows - Commercial (5)
    {
        id: 'workflow-prospect-research',
        type: 'workflow',
        title: 'Recherche Prospect',
        content: 'prospect recherche enquête SIREN données entreprise prospection Infogreffe societe.com',
        category: 'Intermédiaire',
        url: GUIDE_BASE + 'workflows/prospect-research.md'
    },
    {
        id: 'workflow-quote-creation',
        type: 'workflow',
        title: 'Création Devis Détaillé',
        content: 'devis création chiffrage estimation tarification variantes options détail',
        category: 'Intermédiaire',
        url: GUIDE_BASE + 'workflows/quote-creation.md'
    },
    {
        id: 'workflow-competitor-analysis',
        type: 'workflow',
        title: 'Analyse Concurrence',
        content: 'concurrence analyse compétiteurs tarifs avis marché local étude',
        category: 'Intermédiaire',
        url: GUIDE_BASE + 'workflows/competitor-analysis.md'
    },
    {
        id: 'workflow-presentation-slides',
        type: 'workflow',
        title: 'Présentations Commerciales',
        content: 'présentation slides powerpoint keynote commercial pitch client proposition',
        category: 'Intermédiaire',
        url: GUIDE_BASE + 'workflows/presentation-slides.md'
    },
    {
        id: 'workflow-newsletter',
        type: 'workflow',
        title: 'Newsletter Clients',
        content: 'newsletter email html responsive mailchimp sendinblue communication clients actualités',
        category: 'Intermédiaire',
        url: GUIDE_BASE + 'workflows/newsletter-creation.md'
    },

    // Workflows - Production (5)
    {
        id: 'workflow-project-planning',
        type: 'workflow',
        title: 'Planning Chantier/Projet',
        content: 'projet planning gantt calendrier dépendances chantier jalons tâches BTP',
        category: 'Intermédiaire',
        url: GUIDE_BASE + 'workflows/project-planning.md'
    },
    {
        id: 'workflow-inventory-tracking',
        type: 'workflow',
        title: 'Suivi Stock',
        content: 'inventaire suivi stock alertes réapprovisionnement seuil valorisation matériel',
        category: 'Intermédiaire',
        url: GUIDE_BASE + 'workflows/inventory-tracking.md'
    },
    {
        id: 'workflow-work-log',
        type: 'workflow',
        title: 'Journal de Chantier',
        content: 'journal chantier rapport quotidien BTP réglementation suivi travaux',
        category: 'Débutant',
        url: GUIDE_BASE + 'workflows/work-log.md'
    },
    {
        id: 'workflow-quality-checklist',
        type: 'workflow',
        title: 'Contrôle Qualité',
        content: 'contrôle qualité inspection vérification norme NF DTU réception chantier',
        category: 'Débutant',
        url: GUIDE_BASE + 'workflows/quality-checklist.md'
    },
    {
        id: 'workflow-supplier-order',
        type: 'workflow',
        title: 'Commandes Fournisseurs',
        content: 'fournisseur commande achat approvisionnement bon de commande',
        category: 'Intermédiaire',
        url: GUIDE_BASE + 'workflows/supplier-order.md'
    },

    // Workflows - Communication (4)
    {
        id: 'workflow-social-media',
        type: 'workflow',
        title: 'Posts Réseaux Sociaux',
        content: 'réseaux sociaux publication linkedin facebook instagram calendrier contenu',
        category: 'Débutant',
        url: GUIDE_BASE + 'workflows/social-media-posts.md'
    },
    {
        id: 'workflow-email-templates',
        type: 'workflow',
        title: 'Templates Emails Pro',
        content: 'email modèles templates professionnels bibliothèque réutilisables courriers',
        category: 'Débutant',
        url: GUIDE_BASE + 'workflows/email-templates.md'
    },
    {
        id: 'workflow-review-response',
        type: 'workflow',
        title: 'Réponses Avis Clients',
        content: 'avis clients réponse google facebook notes e-réputation gestion commentaires',
        category: 'Débutant',
        url: GUIDE_BASE + 'workflows/review-response.md'
    },

    // Référence
    {
        id: 'ref-faq',
        type: 'guide',
        title: 'Questions Fréquemment Posées',
        content: 'faq questions réponses aide problèmes courants doutes requêtes',
        url: GUIDE_BASE + 'reference/faq.fr.md'
    },
    {
        id: 'ref-comparison',
        type: 'guide',
        title: 'Cowork vs Autres Outils',
        content: 'comparaison copilot chatgpt claude code versus différence',
        url: GUIDE_BASE + 'reference/comparison.fr.md'
    },
    {
        id: 'ref-glossary',
        type: 'guide',
        title: 'Glossaire des Termes',
        content: 'glossaire termes définitions vocabulaire terminologie dictionnaire',
        url: GUIDE_BASE + 'reference/glossary.fr.md'
    },

    // Index Prompts
    {
        id: 'prompts-index',
        type: 'guide',
        title: 'Aperçu Bibliothèque Prompts',
        content: 'prompts bibliothèque modèles exemples prêts à utiliser collection',
        url: GUIDE_BASE + 'prompts/README.fr.md'
    },
    {
        id: 'prompts-file-ops',
        type: 'guide',
        title: 'Prompts Opérations Fichiers',
        content: 'fichier prompts organiser renommer nettoyage filtrer déplacer copier supprimer',
        url: GUIDE_BASE + 'prompts/file-ops.fr.md'
    },
    {
        id: 'prompts-documents',
        type: 'guide',
        title: 'Prompts Création Documents',
        content: 'document prompts rapports résumés présentations rédaction création',
        url: GUIDE_BASE + 'prompts/document-creation.fr.md'
    },
    {
        id: 'prompts-extraction',
        type: 'guide',
        title: 'Prompts Extraction Données',
        content: 'extraction prompts reçus pdf ocr images données parsing analyse',
        url: GUIDE_BASE + 'prompts/data-extraction.fr.md'
    },
    {
        id: 'prompts-research',
        type: 'guide',
        title: 'Prompts Recherche',
        content: 'recherche prompts analyse concurrence étude marché web investigation',
        url: GUIDE_BASE + 'prompts/research.fr.md'
    },

    // Sujets Spécifiques
    {
        id: 'topic-workspace',
        type: 'guide',
        title: 'Configuration Espace de Travail',
        content: 'espace travail dossier répertoire entrée sortie configuration structure',
        url: GUIDE_BASE + 'guide/01-quick-start.fr.md#workspace-setup'
    },
    {
        id: 'topic-token-limits',
        type: 'guide',
        title: 'Limites & Usage Tokens',
        content: 'tokens limites usage fenêtre contexte limite taux budget consommation',
        url: GUIDE_BASE + 'guide/02-core-concepts.fr.md#token-limits'
    },
    {
        id: 'topic-permissions',
        type: 'guide',
        title: 'Gestion des Permissions',
        content: 'permissions approuver refuser autoriser bloquer contrôle accès autorisation',
        url: GUIDE_BASE + 'guide/03-security.fr.md#permission-management'
    },
    {
        id: 'topic-recovery',
        type: 'guide',
        title: 'Récupération Erreurs',
        content: 'erreur récupération correction annuler rollback restaurer réparer erreur',
        url: GUIDE_BASE + 'guide/04-troubleshooting.fr.md#error-recovery'
    },
    {
        id: 'topic-checkpoints',
        type: 'guide',
        title: 'Utilisation Points de Contrôle',
        content: 'points contrôle sauvegarder restaurer état progression lot reprendre',
        url: GUIDE_BASE + 'guide/02-core-concepts.fr.md#checkpoints'
    },
    {
        id: 'topic-batch-processing',
        type: 'guide',
        title: 'Traitement par Lots',
        content: 'traitement lot fichiers volumineux multiples nombreux masse automatisation',
        url: GUIDE_BASE + 'guide/02-core-concepts.fr.md#batch-processing'
    }
];
