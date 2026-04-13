const GUIDE_BASE = 'https://github.com/FlorianBruniaux/claude-cowork-guide/blob/main/'

export interface PromptItem {
  id: string
  title: string
  titleFr: string
  code: string
  codeFr: string
}

export interface PromptCategory {
  id: string
  icon: string
  title: string
  titleFr: string
  desc: string
  descFr: string
  count: number
  guideUrl: string
  guideUrlFr: string
  prompts: PromptItem[]
}

export const PROMPT_CATEGORIES: PromptCategory[] = [
  {
    id: 'file-ops',
    icon: '📂',
    title: 'File Operations',
    titleFr: 'Opérations Fichiers',
    desc: 'Organization, renaming, cleanup, deduplication',
    descFr: 'Organisation, renommage, nettoyage, déduplication',
    count: 20,
    guideUrl: GUIDE_BASE + 'prompts/file-ops.en.md',
    guideUrlFr: GUIDE_BASE + 'prompts/file-ops.fr.md',
    prompts: [
      {
        id: 'file-ops-by-type',
        title: 'Organize by File Type',
        titleFr: 'Organiser par type de fichier',
        code: `Organize all files in ~/Cowork-Workspace/input/ by file type.

Create these folders:
- Documents (pdf, doc, docx, txt, md)
- Spreadsheets (xls, xlsx, csv)
- Images (jpg, jpeg, png, gif, svg)
- Archives (zip, tar, gz, rar)
- Other (everything else)

Move files to appropriate folders. Don't copy.
Create a summary at ~/Cowork-Workspace/output/organization-report.txt showing:
- Total files processed
- Files per category
- Any files that couldn't be categorized`,
        codeFr: `Organise tous les fichiers dans ~/Cowork-Workspace/input/ par type de fichier.

Crée ces dossiers :
- Documents (pdf, doc, docx, txt, md)
- Spreadsheets (xls, xlsx, csv)
- Images (jpg, jpeg, png, gif, svg)
- Archives (zip, tar, gz, rar)
- Autres (tout le reste)

Déplace les fichiers dans les dossiers appropriés. Ne pas copier.
Crée un résumé dans ~/Cowork-Workspace/output/organisation-rapport.txt indiquant :
- Nombre total de fichiers traités
- Fichiers par catégorie
- Fichiers impossibles à catégoriser`,
      },
      {
        id: 'file-ops-by-date',
        title: 'Organize by Date',
        titleFr: 'Organiser par date',
        code: `Organize files in ~/Cowork-Workspace/input/ by date.

Create year/month folder structure:
- 2024/
  - 01-January/
  - 02-February/
- 2025/
  - 01-January/
  ...

Use file modification date for sorting.
Move files to appropriate folders.
Save summary to ~/Cowork-Workspace/output/date-organization.txt`,
        codeFr: `Organise les fichiers dans ~/Cowork-Workspace/input/ par date.

Crée une structure de dossiers année/mois :
- 2024/
  - 01-Janvier/
  - 02-Février/
- 2025/
  - 01-Janvier/
  ...

Utilise la date de modification du fichier pour le tri.
Déplace les fichiers dans les dossiers appropriés.
Sauvegarde le résumé dans ~/Cowork-Workspace/output/organisation-par-date.txt`,
      },
      {
        id: 'file-ops-rename-batch',
        title: 'Batch Rename Files',
        titleFr: 'Renommer en masse',
        code: `Rename all files in ~/Cowork-Workspace/input/ following this pattern:
YYYY-MM-DD_[original-name-lowercase-hyphens].[ext]

Rules:
- Use file creation date for the date prefix
- Convert spaces to hyphens in filename
- Remove special characters except hyphens and underscores
- Keep original extension

Show preview of renames before executing.
Save rename log to ~/Cowork-Workspace/output/rename-log.txt`,
        codeFr: `Renomme tous les fichiers dans ~/Cowork-Workspace/input/ selon ce modèle :
AAAA-MM-JJ_[nom-original-minuscules-tirets].[ext]

Règles :
- Utilise la date de création du fichier pour le préfixe date
- Convertis les espaces en tirets dans le nom de fichier
- Supprime les caractères spéciaux sauf tirets et underscores
- Conserve l'extension originale

Montre un aperçu des renommages avant d'exécuter.
Sauvegarde le journal dans ~/Cowork-Workspace/output/journal-renommage.txt`,
      },
      {
        id: 'file-ops-duplicates',
        title: 'Find & Remove Duplicates',
        titleFr: 'Trouver et supprimer les doublons',
        code: `Scan ~/Cowork-Workspace/input/ for duplicate files.

Detection method: compare file size AND content hash.
Group duplicates together.

For each duplicate group:
- Keep the file with the earliest creation date
- Move others to ~/Cowork-Workspace/output/duplicates/ (don't delete)

Create report at ~/Cowork-Workspace/output/duplicates-report.txt showing:
- Total duplicate groups found
- Space saved
- Files moved`,
        codeFr: `Scanne ~/Cowork-Workspace/input/ pour trouver les fichiers en double.

Méthode de détection : comparer la taille de fichier ET le hash du contenu.
Regroupe les doublons ensemble.

Pour chaque groupe de doublons :
- Conserve le fichier avec la date de création la plus ancienne
- Déplace les autres dans ~/Cowork-Workspace/output/doublons/ (ne pas supprimer)

Crée un rapport dans ~/Cowork-Workspace/output/rapport-doublons.txt indiquant :
- Nombre total de groupes de doublons trouvés
- Espace libéré
- Fichiers déplacés`,
      },
      {
        id: 'file-ops-cleanup',
        title: 'Clean Up Old Files',
        titleFr: 'Nettoyer les anciens fichiers',
        code: `Clean up files in ~/Cowork-Workspace/input/ that are older than 90 days.

Steps:
1. List all files with their last modified date
2. Flag files not modified in 90+ days
3. Move flagged files to ~/Cowork-Workspace/output/archive/YYYY-MM/

Do NOT delete anything — only move to archive.
Create cleanup report at ~/Cowork-Workspace/output/cleanup-report.txt`,
        codeFr: `Nettoie les fichiers dans ~/Cowork-Workspace/input/ non modifiés depuis plus de 90 jours.

Étapes :
1. Liste tous les fichiers avec leur date de dernière modification
2. Signale les fichiers non modifiés depuis 90 jours ou plus
3. Déplace les fichiers signalés dans ~/Cowork-Workspace/output/archive/AAAA-MM/

Ne RIEN supprimer — déplacer uniquement vers l'archive.
Crée un rapport dans ~/Cowork-Workspace/output/rapport-nettoyage.txt`,
      },
    ],
  },
  {
    id: 'document-creation',
    icon: '📄',
    title: 'Document Creation',
    titleFr: 'Création de Documents',
    desc: 'Reports, summaries, presentations, Excel',
    descFr: 'Rapports, synthèses, présentations, Excel',
    count: 16,
    guideUrl: GUIDE_BASE + 'prompts/document-creation.en.md',
    guideUrlFr: GUIDE_BASE + 'prompts/document-creation.fr.md',
    prompts: [
      {
        id: 'doc-status-report',
        title: 'Project Status Report',
        titleFr: 'Rapport de Statut de Projet',
        code: `Create a project status report from the notes in ~/Cowork-Workspace/input/notes/

Structure:
1. Executive Summary (1 paragraph)
2. Progress This Period
   - Completed items
   - In progress items
3. Key Metrics (if data available)
4. Risks and Issues
5. Next Period Plans
6. Action Items with owners and due dates

Format: Word document
Save to: ~/Cowork-Workspace/output/status-report.docx
Include: Date and project name in header`,
        codeFr: `Crée un rapport de statut de projet à partir des notes dans ~/Cowork-Workspace/input/notes/

Structure :
1. Résumé exécutif (1 paragraphe)
2. Progrès de la période
   - Éléments terminés
   - Éléments en cours
3. Indicateurs clés (si données disponibles)
4. Risques et problèmes
5. Plans pour la période suivante
6. Actions à mener avec responsables et échéances

Format : document Word
Enregistrer dans : ~/Cowork-Workspace/output/rapport-statut.docx
Inclure : date et nom du projet dans l'en-tête`,
      },
      {
        id: 'doc-meeting-summary',
        title: 'Meeting Summary Report',
        titleFr: 'Rapport de Synthèse de Réunion',
        code: `Create a meeting summary from ~/Cowork-Workspace/input/meeting-notes.txt

Structure:
- Meeting Details (date, attendees, duration)
- Key Discussion Points (bulleted)
- Decisions Made
- Action Items (table: Action | Owner | Due Date | Status)
- Next Meeting Date/Topics

Format: Word document
Tone: Professional, concise
Save to: ~/Cowork-Workspace/output/meeting-summary.docx`,
        codeFr: `Crée un résumé de réunion à partir de ~/Cowork-Workspace/input/notes-reunion.txt

Structure :
- Détails de la réunion (date, participants, durée)
- Points de discussion clés (liste à puces)
- Décisions prises
- Actions à mener (tableau : Action | Responsable | Échéance | Statut)
- Date/Sujets prochaine réunion

Format : document Word
Ton : professionnel, concis
Enregistrer dans : ~/Cowork-Workspace/output/synthese-reunion.docx`,
      },
      {
        id: 'doc-excel-dashboard',
        title: 'Excel Dashboard from CSV',
        titleFr: 'Tableau de Bord Excel depuis CSV',
        code: `Create an Excel dashboard from the CSV files in ~/Cowork-Workspace/input/data/

Dashboard requirements:
Sheet 1 - Raw Data: all imported data, clean and formatted
Sheet 2 - Summary: key totals, averages, min/max
Sheet 3 - Charts: 3 relevant charts based on the data

Formatting:
- Header row bold with accent color
- Alternating row colors
- Auto-fit column widths
- Number formatting appropriate to data type

Save to: ~/Cowork-Workspace/output/dashboard.xlsx`,
        codeFr: `Crée un tableau de bord Excel à partir des fichiers CSV dans ~/Cowork-Workspace/input/donnees/

Exigences du tableau de bord :
Feuille 1 - Données brutes : toutes les données importées, propres et formatées
Feuille 2 - Résumé : totaux clés, moyennes, min/max
Feuille 3 - Graphiques : 3 graphiques pertinents basés sur les données

Mise en forme :
- Ligne d'en-tête en gras avec couleur d'accentuation
- Couleurs de lignes alternées
- Largeurs de colonnes auto-ajustées
- Format numérique adapté au type de données

Enregistrer dans : ~/Cowork-Workspace/output/tableau-de-bord.xlsx`,
      },
      {
        id: 'doc-email-sequence',
        title: 'Email Sequence Generator',
        titleFr: 'Générateur de Séquences Email',
        code: `Create a professional email sequence for [GOAL: e.g. payment reminder / client onboarding / follow-up].

Context: [YOUR BUSINESS TYPE]
Tone: [Professional / Friendly / Formal]

Generate 3 emails:
Email 1 - Initial (Day 0): [describe]
Email 2 - Follow-up (Day +7): more insistent, recap benefits
Email 3 - Final (Day +14): last attempt, clear call to action

For each email:
- Subject line (with A/B variant)
- Body text
- CTA button text

Save to: ~/Cowork-Workspace/output/email-sequence.docx`,
        codeFr: `Crée une séquence d'emails professionnels pour [OBJECTIF : ex. relance paiement / onboarding client / suivi].

Contexte : [TYPE DE TON ACTIVITÉ]
Ton : [Professionnel / Sympathique / Formel]

Génère 3 emails :
Email 1 - Initial (Jour 0) : [décrire]
Email 2 - Relance (Jour +7) : plus insistant, rappel des avantages
Email 3 - Final (Jour +14) : dernière tentative, appel à l'action clair

Pour chaque email :
- Objet (avec variante A/B)
- Corps du texte
- Texte bouton CTA

Enregistrer dans : ~/Cowork-Workspace/output/sequence-emails.docx`,
      },
      {
        id: 'doc-presentation',
        title: 'PowerPoint from Outline',
        titleFr: 'PowerPoint depuis Plan',
        code: `Create a PowerPoint presentation from ~/Cowork-Workspace/input/outline.txt

Presentation structure: follow the outline exactly.

Design rules:
- Title slide with company name and date
- Consistent color scheme (professional blues/grays)
- Max 5 bullet points per slide
- Speaker notes for each slide
- Section divider slides for major topics

Save to: ~/Cowork-Workspace/output/presentation.pptx
Also save PDF version: ~/Cowork-Workspace/output/presentation.pdf`,
        codeFr: `Crée une présentation PowerPoint à partir de ~/Cowork-Workspace/input/plan.txt

Structure de la présentation : suivre exactement le plan.

Règles de design :
- Diapositive titre avec nom de l'entreprise et date
- Palette de couleurs cohérente (bleus/gris professionnels)
- Maximum 5 points par diapositive
- Notes intervenant pour chaque diapositive
- Diapositives de séparation pour les sujets majeurs

Enregistrer dans : ~/Cowork-Workspace/output/presentation.pptx
Enregistrer aussi en PDF : ~/Cowork-Workspace/output/presentation.pdf`,
      },
    ],
  },
  {
    id: 'data-extraction',
    icon: '🔍',
    title: 'Data Extraction',
    titleFr: 'Extraction de Données',
    desc: 'Images → data, PDF parsing, OCR',
    descFr: 'Images → données, parsing PDF, OCR',
    count: 17,
    guideUrl: GUIDE_BASE + 'prompts/data-extraction.en.md',
    guideUrlFr: GUIDE_BASE + 'prompts/data-extraction.fr.md',
    prompts: [
      {
        id: 'extract-receipts',
        title: 'Expense Receipt Extraction',
        titleFr: 'Extraction Tickets de Caisse',
        code: `Analyze all receipt images in ~/Cowork-Workspace/input/receipts/

For each receipt, extract:
- Date
- Vendor name
- Total amount
- Category (meals, transport, supplies, other)

Create an Excel file at ~/Cowork-Workspace/output/expenses.xlsx with:
- One row per receipt
- Columns for each extracted field
- A summary sheet with totals by category
- Use semicolon separators for EU locale formulas`,
        codeFr: `Analyse toutes les images de tickets dans ~/Cowork-Workspace/input/tickets/

Pour chaque ticket, extrais :
- Date
- Nom du commerçant
- Montant total
- Catégorie (repas, transport, fournitures, autre)

Crée un fichier Excel à ~/Cowork-Workspace/output/depenses.xlsx avec :
- Une ligne par ticket
- Colonnes pour chaque champ extrait
- Une feuille récapitulative avec totaux par catégorie
- Utilise des séparateurs point-virgule pour les formules locale EU`,
      },
      {
        id: 'extract-pdf-invoice',
        title: 'Extract Data from PDF Invoices',
        titleFr: 'Extraire Données des Factures PDF',
        code: `Extract structured data from all PDF invoices in ~/Cowork-Workspace/input/invoices/

For each invoice extract:
- Invoice number
- Invoice date
- Due date
- Supplier name and address
- Client name and address
- Line items (description, quantity, unit price, total)
- Subtotal, VAT amount, grand total
- Payment terms

Output: Excel file at ~/Cowork-Workspace/output/invoices-extracted.xlsx
One sheet per invoice + summary sheet with all invoices`,
        codeFr: `Extrais les données structurées de toutes les factures PDF dans ~/Cowork-Workspace/input/factures/

Pour chaque facture extrais :
- Numéro de facture
- Date de facture
- Date d'échéance
- Nom et adresse du fournisseur
- Nom et adresse du client
- Lignes de détail (description, quantité, prix unitaire, total)
- Sous-total, montant TVA, total TTC
- Conditions de paiement

Sortie : fichier Excel dans ~/Cowork-Workspace/output/factures-extraites.xlsx
Une feuille par facture + feuille récapitulative avec toutes les factures`,
      },
      {
        id: 'extract-business-cards',
        title: 'Extract Business Card Data',
        titleFr: 'Extraire Données Cartes de Visite',
        code: `Scan all business card images in ~/Cowork-Workspace/input/business-cards/

For each card extract:
- Full name
- Job title
- Company
- Email
- Phone (mobile and/or office)
- Website
- Address (if present)
- LinkedIn (if present)

Create CSV file at ~/Cowork-Workspace/output/contacts.csv
Use UTF-8 encoding, comma separated, headers on row 1
Also create vCard file at ~/Cowork-Workspace/output/contacts.vcf`,
        codeFr: `Scanne toutes les images de cartes de visite dans ~/Cowork-Workspace/input/cartes-visite/

Pour chaque carte extrais :
- Nom complet
- Intitulé de poste
- Entreprise
- Email
- Téléphone (mobile et/ou bureau)
- Site web
- Adresse (si présente)
- LinkedIn (si présent)

Crée un fichier CSV dans ~/Cowork-Workspace/output/contacts.csv
Encodage UTF-8, séparateur virgule, en-têtes ligne 1
Crée aussi un fichier vCard dans ~/Cowork-Workspace/output/contacts.vcf`,
      },
      {
        id: 'extract-contract-key-dates',
        title: 'Extract Key Dates from Contracts',
        titleFr: 'Extraire Dates Clés des Contrats',
        code: `Read all PDF contracts in ~/Cowork-Workspace/input/contracts/

For each contract extract:
- Contract name/type
- Parties involved
- Start date
- End date / expiry date
- Renewal deadline (if applicable)
- Notice period for termination
- Key financial terms
- Any penalty clauses

Create a tracking spreadsheet at ~/Cowork-Workspace/output/contract-tracker.xlsx
Flag contracts expiring within 90 days in red`,
        codeFr: `Lis tous les contrats PDF dans ~/Cowork-Workspace/input/contrats/

Pour chaque contrat extrais :
- Nom/type de contrat
- Parties impliquées
- Date de début
- Date de fin / d'expiration
- Délai de renouvellement (si applicable)
- Préavis de résiliation
- Termes financiers clés
- Clauses pénales éventuelles

Crée un tableau de suivi dans ~/Cowork-Workspace/output/suivi-contrats.xlsx
Met en rouge les contrats expirant dans les 90 jours`,
      },
      {
        id: 'extract-photos-report',
        title: 'Photos to Inspection Report',
        titleFr: 'Photos vers Rapport d\'Inspection',
        code: `Analyze all photos in ~/Cowork-Workspace/input/photos/

For each photo:
- Describe what you see (1-2 sentences)
- Note any visible issues, damage, or anomalies
- Rate condition: Good / Fair / Poor

Create a Word report at ~/Cowork-Workspace/output/inspection-report.docx:
- One section per photo with embedded thumbnail
- Description and condition rating
- Summary table at the end with all items
- Flag all "Poor" items in red for priority action`,
        codeFr: `Analyse toutes les photos dans ~/Cowork-Workspace/input/photos/

Pour chaque photo :
- Décris ce que tu vois (1-2 phrases)
- Note les problèmes, dommages ou anomalies visibles
- Évalue l'état : Bon / Moyen / Mauvais

Crée un rapport Word dans ~/Cowork-Workspace/output/rapport-inspection.docx :
- Une section par photo avec miniature intégrée
- Description et évaluation de l'état
- Tableau récapitulatif à la fin avec tous les éléments
- Met en rouge tous les éléments "Mauvais" pour action prioritaire`,
      },
    ],
  },
  {
    id: 'research',
    icon: '🌐',
    title: 'Web Research',
    titleFr: 'Recherche Web',
    desc: 'Research, synthesis, competitive analysis',
    descFr: 'Recherche, synthèse, analyse concurrentielle',
    count: 17,
    guideUrl: GUIDE_BASE + 'prompts/research.en.md',
    guideUrlFr: GUIDE_BASE + 'prompts/research.fr.md',
    prompts: [
      {
        id: 'research-competitor',
        title: 'Competitive Analysis',
        titleFr: 'Analyse Concurrentielle',
        code: `Research the top 5 competitors in [YOUR INDUSTRY].

For each competitor:
- Company name and website
- Brief description (1-2 sentences)
- Key products/services
- Target market
- Pricing (if public)
- Key differentiators
- Recent news/developments

Create comparison table.
Save to: ~/Cowork-Workspace/output/competitive-analysis.md`,
        codeFr: `Recherche les 5 principaux concurrents dans [TON SECTEUR].

Pour chaque concurrent :
- Nom de l'entreprise et site web
- Description courte (1-2 phrases)
- Produits/services clés
- Marché cible
- Tarifs (si publics)
- Différenciateurs clés
- Actualités récentes/développements

Crée un tableau comparatif.
Enregistre dans : ~/Cowork-Workspace/output/analyse-concurrentielle.md`,
      },
      {
        id: 'research-market',
        title: 'Market Research Synthesis',
        titleFr: 'Synthèse d\'Étude de Marché',
        code: `Research [TOPIC/MARKET] and create a synthesis document.

Research structure:
1. Market Overview
   - Market size and growth rate
   - Key players
   - Geographic distribution
2. Trends (last 12 months)
   - Technology changes
   - Consumer behavior shifts
   - Regulatory changes
3. Opportunities
4. Threats/Risks
5. Sources used

Save to: ~/Cowork-Workspace/output/market-research.docx`,
        codeFr: `Recherche [SUJET/MARCHÉ] et crée un document de synthèse.

Structure de recherche :
1. Vue d'ensemble du marché
   - Taille et taux de croissance du marché
   - Acteurs clés
   - Distribution géographique
2. Tendances (12 derniers mois)
   - Évolutions technologiques
   - Changements comportements consommateurs
   - Changements réglementaires
3. Opportunités
4. Menaces/Risques
5. Sources utilisées

Enregistre dans : ~/Cowork-Workspace/output/etude-marche.docx`,
      },
      {
        id: 'research-company-profile',
        title: 'Company Due Diligence',
        titleFr: 'Due Diligence Entreprise',
        code: `Create a due diligence report for [COMPANY NAME].

Research the following:
1. Company Overview
   - Founded, headquarters, employee count
   - Mission / core business
   - Key leadership team

2. Financial Signals
   - Revenue range (if available)
   - Funding/investment history
   - Growth indicators

3. Market Position
   - Market share estimate
   - Key clients/partnerships
   - Recent press coverage

4. Risk Indicators
   - Legal issues (litigation, regulatory)
   - Management changes
   - Negative reviews/reputation signals

Save to: ~/Cowork-Workspace/output/due-diligence-[company].docx`,
        codeFr: `Crée un rapport de due diligence pour [NOM DE L'ENTREPRISE].

Recherche les éléments suivants :
1. Vue d'ensemble de l'entreprise
   - Fondation, siège, nombre d'employés
   - Mission / activité principale
   - Équipe dirigeante clé

2. Signaux financiers
   - Fourchette de revenus (si disponible)
   - Historique financement/investissement
   - Indicateurs de croissance

3. Position sur le marché
   - Estimation de la part de marché
   - Clients/partenariats clés
   - Couverture presse récente

4. Indicateurs de risque
   - Problèmes juridiques (litiges, réglementaires)
   - Changements de direction
   - Avis négatifs/signaux de réputation

Enregistre dans : ~/Cowork-Workspace/output/due-diligence-[entreprise].docx`,
      },
      {
        id: 'research-topic-brief',
        title: 'Topic Research Brief',
        titleFr: 'Brief de Recherche Thématique',
        code: `Research [TOPIC] and create an executive brief for a non-expert audience.

Format:
- What it is (2-3 sentences, no jargon)
- Why it matters for [YOUR INDUSTRY]
- Current state (what's happening now)
- Key statistics (3-5 key numbers)
- What to watch (upcoming trends/developments)
- Recommended actions (3 concrete steps)

Length: 1 page max
Tone: Clear, practical, actionable
Save to: ~/Cowork-Workspace/output/brief-[topic].docx`,
        codeFr: `Recherche [SUJET] et crée un brief exécutif pour un public non-expert.

Format :
- Ce que c'est (2-3 phrases, sans jargon)
- Pourquoi c'est important pour [TON SECTEUR]
- État actuel (ce qui se passe maintenant)
- Statistiques clés (3-5 chiffres importants)
- À surveiller (tendances/développements à venir)
- Actions recommandées (3 étapes concrètes)

Longueur : 1 page max
Ton : clair, pratique, actionnable
Enregistre dans : ~/Cowork-Workspace/output/brief-[sujet].docx`,
      },
      {
        id: 'research-pricing',
        title: 'Supplier Pricing Research',
        titleFr: 'Recherche Tarifs Fournisseurs',
        code: `Research current market pricing for [PRODUCT/SERVICE].

Find at least 5 suppliers and for each note:
- Company name and website
- Product/service specifications
- Price (and pricing model: per unit/subscription/quote)
- Lead time
- Minimum order
- Key differentiators (quality, support, warranty)

Create comparison table in Excel.
Add a recommended choice with justification.
Save to: ~/Cowork-Workspace/output/supplier-pricing-[product].xlsx`,
        codeFr: `Recherche les tarifs actuels du marché pour [PRODUIT/SERVICE].

Trouve au moins 5 fournisseurs et pour chacun note :
- Nom de l'entreprise et site web
- Spécifications du produit/service
- Prix (et modèle tarifaire : à l'unité/abonnement/devis)
- Délai de livraison
- Commande minimale
- Différenciateurs clés (qualité, support, garantie)

Crée un tableau comparatif dans Excel.
Ajoute une recommandation avec justification.
Enregistre dans : ~/Cowork-Workspace/output/tarifs-fournisseurs-[produit].xlsx`,
      },
    ],
  },
]
