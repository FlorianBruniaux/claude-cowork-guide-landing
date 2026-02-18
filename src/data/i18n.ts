export type Lang = 'en' | 'fr'

const GUIDE_BASE = 'https://github.com/FlorianBruniaux/claude-cowork-guide/blob/main/'

export const UI_STRINGS = {
  en: {
    // Meta
    siteTitle: 'Claude Cowork Guide: 28 workflows & 70 Prompts - Free',
    siteDescription: 'Master Claude Cowork with 28 step-by-step workflows and 70 ready-to-use prompts. Free guide for desktop file automation, document creation, and OCR. Get started →',
    ogDescription: 'Free, open-source guide for Claude Cowork. 28 workflows, 70 prompts, security best practices. Master desktop AI automation.',
    twitterDescription: '70 ready-to-use prompts, 28 workflows, security guide. Master Claude\'s desktop AI assistant.',

    // Header
    logoText: 'Claude Cowork Guide',
    navFeatures: 'Features',
    navWorkflows: 'Workflows',
    navPrompts: 'Prompts',
    navCompare: 'Compare',
    navFaq: 'FAQ',
    navFaqUrl: '/faq/',
    searchPlaceholder: 'Search guide, prompts, FAQ...',
    searchLabel: 'Open search',
    langSwitchUrl: '/fr/',
    langSwitchLabel: 'Version française',
    langSwitchText: 'FR',
    themeLabel: 'Dark mode',
    readGuide: 'Read Guide',
    menuToggle: 'Toggle menu',
    skipToContent: 'Skip to main content',

    // Preview Banner
    previewBadge: 'Exploratory Guide',
    previewText: 'Cowork is brand new and evolving rapidly. This guide reflects my current understanding and will change as I learn. Expect instability and frequent updates.',

    // Hero
    heroTitle: 'Master Claude Cowork',
    heroTagline: 'The complete guide for Claude\'s desktop AI assistant',
    heroStats: '28 workflows | 70 prompts | Security best practices',
    heroCta: 'Read the Guide',
    heroCtaSecondary: 'Browse Workflows',
    heroCodeLead: 'Developer? <strong>Claude Code</strong> is for terminal-based AI coding.',
    heroCodePrereq1: 'All platforms',
    heroCodePrereq2: 'Free tier available',
    heroCodeCta: 'Get Started with Claude Code →',

    // What's New
    whatsNewBadge: 'Feb 2026',
    whatsNewTitle: 'Claude Legal Extension Documented',
    whatsNewText: 'First official Cowork plugin for automated legal document review. Contract analysis, risk detection, NDA triage.',
    whatsNewWarning: 'Does not provide legal advice.',
    whatsNewCta: 'View Documentation →',
    whatsNewUrl: GUIDE_BASE + 'guide/02-capabilities.md#extensions--plugins',

    // TL;DR
    tldrTitle: 'TL;DR',
    tldrSubtitle: 'What you need to know in 30 seconds',
    tldrRows: [
      ['Target Audience', 'Knowledge workers (non-developers)'],
      ['Platform', 'macOS only (Windows planned)'],
      ['Cost', 'Pro $20/mo or Max $100-200/mo'],
      ['Status', 'Early Access (unstable, rapidly evolving)'],
      ['Best For', 'File organization, document creation, OCR'],
      ['Not For', 'Code execution, API calls, cloud storage'],
    ] as [string, string][],

    // Getting Started
    gettingStartedBadge: 'Quick Setup',
    gettingStartedTitle: 'Get Started in 3 Steps',
    gettingStartedSubtitle: '15 minutes to your first automated workflow',
    step1Title: 'Install Claude Desktop',
    step1Text: 'Download from <a href="https://claude.ai/download" target="_blank" rel="noopener">claude.ai/download</a> (macOS only, Pro $20/mo required)',
    step2Title: 'Follow Security Setup',
    step2Text: 'Read <a href="' + GUIDE_BASE + 'guide/01-getting-started.en.md" target="_blank" rel="noopener">Getting Started guide</a> for safe isolation and backup configuration',
    step3Title: 'Copy Your First Prompt',
    step3Text: 'Start with <a href="#prompts">70 ready-to-use prompts</a> for common tasks',

    // Why This Guide
    whyTitle: 'Why This Guide?',
    whySubtitle: 'Stop wasting hours. Start working safely and efficiently from day one.',
    withoutTitle: 'Without the Guide',
    withoutIcon: '😰',
    withoutItems: [
      'Blocked from working for hours with setup issues',
      'Out of quota after 1 hour, can\'t finish work',
      'Risk exposing passwords, confidential files, API keys',
      'Write every instruction manually, every time',
      'No idea what tasks are safe to delegate',
      'Files accidentally deleted with no backup',
    ],
    withTitle: 'With the Guide',
    withIcon: '🚀',
    withItems: [
      'Working in 15 minutes with step-by-step setup',
      'Make your quota last 3-4x longer with smart tips',
      'Keep passwords & files safe with isolation setup',
      '70 copy-paste prompts ready to use instantly',
      'Clear guidelines: what\'s safe, what\'s risky',
      'Built-in backups before every risky operation',
    ],

    // Features
    featuresBadge: 'What\'s Inside',
    featuresTitle: 'Complete Documentation',
    featuresSubtitle: 'Everything you need to master Cowork',
    features: [
      { icon: '🔄', title: '28 Step-by-Step Workflows', desc: 'From invoicing to project planning. Complete with copy-paste prompts, examples and troubleshooting.', meta: 'Beginner → Advanced', url: GUIDE_BASE + 'workflows' },
      { icon: '💬', title: '70 Ready-to-Use Prompts', desc: 'Copy-paste prompts for file ops, document creation, data extraction, and web research.', meta: '4 categories', url: GUIDE_BASE + 'prompts', featured: true, badge: 'Popular' },
      { icon: '🛡️', title: 'Security Guide', desc: 'Prompt injection defense, workspace isolation, browser permission management, incident response.', meta: '12 min read', url: GUIDE_BASE + 'guide/03-security.md' },
      { icon: '🔧', title: 'Troubleshooting', desc: 'VPN issues, permission bugs, mid-task failures, quota management. Decision tree included.', meta: '8 min read', url: GUIDE_BASE + 'guide/04-troubleshooting.md' },
      { icon: '⚖️', title: 'Product Comparison', desc: 'Cowork vs Claude Code vs Copilot vs Gemini vs ChatGPT. When to use what.', meta: 'Decision matrix', url: GUIDE_BASE + 'reference/comparison.md' },
      { icon: '📋', title: 'Cheatsheet', desc: '1-page printable reference. CTOC framework, golden rules, keyboard shortcuts.', meta: 'Print-ready', url: GUIDE_BASE + 'reference/cheatsheet.md' },
      { icon: '🎨', title: 'Profile Personalization', desc: 'Create a personal .md profile to set Claude\'s voice, tone, and style. Template included.', meta: 'New', url: GUIDE_BASE + 'guide/01-getting-started.md#step-6-personalize-your-profile-optional' },
      { icon: '⚙️', title: 'Model Selection', desc: 'Sonnet vs Opus: when to use each model. Speed, cost, and capability trade-offs.', meta: 'New', url: GUIDE_BASE + 'guide/02-capabilities.md#model-selection' },
      { icon: '⚖️', title: 'Claude Legal Extension', desc: 'First official Cowork plugin. Automated contract review, risk detection, compliance tracking. Documentation only.', meta: 'Does not provide legal advice', url: GUIDE_BASE + 'guide/02-capabilities.md#extensions--plugins', badge: 'Feb 2026' },
    ],

    // Workflows
    workflowsBadge: 'Step-by-Step',
    workflowsTitle: '25 Complete Workflows',
    workflowsSubtitle: 'Organized by task type - Administrative, Commercial, Production, Communication, Organization',
    workflowTabAll: 'All (25)',
    workflowTabAdmin: 'Admin (6)',
    workflowTabCommercial: 'Commercial (5)',
    workflowTabProduction: 'Production (5)',
    workflowTabCommunication: 'Communication (4)',
    workflowTabOrganisation: 'Organization (4)',

    // Prompts
    promptsBadge: 'Copy & Paste',
    promptsTitle: '70 Ready-to-Use Prompts',
    promptsSubtitle: 'Organized by category, tested and refined',
    promptCategories: [
      { icon: '📂', title: 'File Operations', desc: 'Organization, renaming, cleanup, deduplication', count: '20 prompts', url: GUIDE_BASE + 'prompts/file-ops.md' },
      { icon: '📄', title: 'Document Creation', desc: 'Reports, summaries, presentations, Excel', count: '16 prompts', url: GUIDE_BASE + 'prompts/document-creation.md' },
      { icon: '🔍', title: 'Data Extraction', desc: 'Images → data, PDF parsing, OCR', count: '17 prompts', url: GUIDE_BASE + 'prompts/data-extraction.md' },
      { icon: '🌐', title: 'Web Research', desc: 'Research, synthesis, competitive analysis', count: '17 prompts', url: GUIDE_BASE + 'prompts/research.md' },
    ],
    promptExampleTitle: 'Example: Expense Receipt Extraction',
    promptExampleCopy: 'Copy',
    promptExampleCode: `Analyze all receipt images in ~/Cowork-Workspace/input/receipts/

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

    // Comparison
    comparisonTitle: 'Cowork vs Other Tools',
    comparisonSubtitle: 'Choose the right tool for your task',
    comparisonHeaders: ['Feature', 'Cowork', 'Claude Code', 'M365 Copilot', 'ChatGPT'],
    comparisonRows: [
      { label: 'Target User', values: ['Knowledge workers', 'Developers', 'M365 users', 'Everyone'], classes: ['', '', '', ''] },
      { label: 'Local File Access', values: ['Sandbox', 'Full', 'Office files only*', 'Upload only'], classes: ['feature-yes', 'feature-yes', 'feature-partial', 'feature-no'] },
      { label: 'Execute Code', values: ['No', 'Full shell', 'No', 'No'], classes: ['feature-no', 'feature-yes', 'feature-no', 'feature-no'] },
      { label: 'Create Office Docs', values: ['Native', 'Via scripts', 'Native', 'No'], classes: ['feature-yes', 'feature-partial', 'feature-yes', 'feature-no'] },
      { label: 'Browser Automation', values: ['Chrome', 'Via tools', 'No', 'Operator beta'], classes: ['feature-yes', 'feature-yes', 'feature-no', 'feature-partial'] },
      { label: 'Multi-step Planning', values: ['Yes', 'Yes', 'Limited', 'GPTs only'], classes: ['feature-yes', 'feature-yes', 'feature-partial', 'feature-partial'] },
      { label: 'Platform', values: ['macOS only', 'All', 'Windows/Mac', 'All'], classes: ['', '', '', ''] },
      { label: 'Status', values: ['Preview', 'Production', 'Production', 'Production'], classes: ['feature-partial', 'feature-yes', 'feature-yes', 'feature-yes'] },
    ],
    comparisonNote: '<strong>Rule of thumb:</strong> Use Chat (80%) for thinking/writing/coding. Use Cowork (20%) for batch files and automation.',
    comparisonFootnote: '<strong>*Note:</strong> "M365 Copilot" refers to Microsoft 365 Copilot (Word/Excel/PowerPoint integration), not GitHub Copilot (developer tool with full file system access).',

    // Key Terms
    termsBadge: 'Glossary',
    termsTitle: 'Key Terms',
    termsSubtitle: 'Essential vocabulary for getting started with Cowork',
    terms: [
      { title: 'Workspace', definition: 'The macOS folder where Claude can read/write files. Set up properly to keep work separate from personal files.' },
      { title: 'Prompt', definition: 'Instructions you give to Claude. Can be simple ("organize these files") or complex workflows with multiple steps.' },
      { title: 'Workflow', definition: 'A repeatable sequence of actions (read files → process → create output). Like a recipe you can reuse.' },
      { title: 'Token', definition: 'Unit that measures text processed by Claude. ~4 characters = 1 token. Pro plan gives 5M tokens/month.' },
      { title: 'Context', definition: 'Information Claude remembers during a conversation. Like short-term memory, limited but powerful.' },
      { title: 'Sandbox', definition: 'Isolated testing area. Lets you experiment safely without affecting real files or data.' },
      { title: 'OCR', definition: 'Optical Character Recognition. Claude can read text from photos/scans and convert to editable text.' },
      { title: 'Artifact', definition: 'File created by Claude (document, spreadsheet, etc.). Appears in Claude\'s interface for preview/download.' },
    ],
    termsFooter: 'See <a href="' + GUIDE_BASE + 'reference/glossary.md" target="_blank" rel="noopener">complete glossary</a> for 30+ technical terms and advanced concepts.',

    // Golden Rules
    rulesTitle: '7 Golden Rules',
    rulesSubtitle: 'Follow these to avoid the most common mistakes',
    rules: [
      { title: 'Always review the plan', desc: 'Cowork proposes, you decide. Read every execution plan before approving. Look for unexpected actions.' },
      { title: 'Dedicated workspace only', desc: 'Never grant access to ~/Documents, ~/Desktop, or your home folder. Create ~/Cowork-Workspace/ instead.' },
      { title: 'No credentials in workspace', desc: 'Keep passwords, API keys, and secrets out of Cowork-accessible folders. Content is sent to Anthropic servers.' },
      { title: 'Verify file sources', desc: 'Prompt injection risk in untrusted files. Malicious PDFs can manipulate Cowork behavior.' },
      { title: 'Budget error correction time', desc: 'OCR accuracy is ~97% for fields, ~63% for line items. Always verify extracted data.' },
      { title: 'Disconnect VPN', desc: 'The #1 reported issue. VPN breaks VM networking. Disconnect before using Cowork.' },
      { title: 'Backup before destructive ops', desc: 'No undo for file deletions. Run <code>cp -R ~/Cowork-Workspace/ ~/Cowork-Backup/</code> first.' },
    ],

    // Cross-link
    crosslinkTitle: 'Are You a Developer?',
    crosslinkSubtitle: 'Claude Code offers full shell access and AI-powered coding workflows for developers.',
    crosslinkSignals: [
      'Write code in terminal or IDE daily',
      'Run builds, tests, deploy commands',
      'Want AI that edits files autonomously',
    ],
    crosslinkCardTitle: 'Claude Code Ultimate Guide',
    crosslinkCardStats: '66 Templates • 227 Quiz Questions • 11,100+ Lines',
    crosslinkCardCta: 'View Claude Code Guide →',

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Quick answers to common questions',
    faqItems: [
      { q: 'What is Cowork?', a: 'Cowork is Claude\'s agentic desktop feature that manipulates local files, creates documents, and organizes your workspace, without writing code. Think of it as Claude Code for knowledge workers.' },
      { q: 'How much does Cowork cost?', a: 'Cowork requires a Pro ($20/month) or Max ($100-200/month) subscription. Pro is recommended for light use only (quota exhausts in ~1-1.5 hours of intensive use).' },
      { q: 'Does Cowork work on Windows or Linux?', a: 'Not yet (January 2026). macOS only. Windows is on Anthropic\'s roadmap but has no ETA. Linux has no official announcement. Use Claude Code for Linux agentic capabilities.' },
      { q: 'Can I use Cowork with a VPN?', a: 'No. VPN software creates routing conflicts with Cowork\'s internal VM networking. This is the #1 reported issue. Disconnect VPN completely before using Cowork.' },
      { q: 'Is Cowork secure?', a: 'There\'s no official security documentation yet (research preview). Best practices: use dedicated workspace folder, review every plan, keep credentials out, verify file sources.' },
      { q: 'What can Cowork NOT do?', a: 'Cowork cannot: execute code/scripts, make API calls, access cloud storage directly (Google Drive, Dropbox), process audio/video, decrypt encrypted files.' },
      { q: 'When should I use Chat vs Cowork?', a: 'Chat (80%): reasoning, writing, coding, exploratory tasks. Cowork (20%): batch file operations, document creation, browser automation. Together they enable workflows impossible with either alone.' },
      { q: 'What\'s the difference from Claude Code?', a: 'Claude Code: terminal interface, full shell access, for developers. Cowork: desktop app, file-only access, for knowledge workers. They share architecture but differ in capabilities.' },
      { q: 'Can Cowork create Excel formulas?', a: 'Yes! Cowork can create Excel files with working formulas, multiple sheets, and formatting. Specify your regional setting (US comma vs EU semicolon) in your prompt.' },
      { q: 'What are the usage limits?', a: 'Usage resets every 5 hours (not daily/monthly). Pro tier: ~45 short messages per reset (~1-1.5h intensive use). Max tier: 5x-20x more. File processing consumes tokens rapidly.' },
      { q: 'Is this guide official?', a: '<strong>No, this is exploratory research.</strong> Cowork is brand new (launched January 2026). This guide reflects my personal experimentation and current understanding. Both will evolve rapidly as the product matures and I discover what works. Expect content changes, corrections, and pivots. Not affiliated with Anthropic.' },
      { q: 'Who is behind this guide?', a: 'Created by <a href="https://github.com/FlorianBruniaux" target="_blank" rel="noopener">Florian BRUNIAUX</a>, a developer experimenting with Cowork since its recent launch. This is a living document. I\'m learning in real-time and documenting my findings as they evolve. Feedback, corrections, and reality checks are essential!' },
      { q: 'Can I contribute to the guide?', a: 'Yes! The <a href="https://github.com/FlorianBruniaux/claude-cowork-guide" target="_blank" rel="noopener">guide repository</a> is open-source. Found an error? Have a better prompt? Contributions welcome on GitHub.' },
    ],

    // Related Projects
    relatedTitle: 'Related Projects',
    relatedProjects: [
      { icon: '📖', title: 'Claude Code Ultimate Guide', desc: 'Complete documentation, tips, and best practices for Claude Code CLI.', url: 'https://cc.bruniaux.com/' },
      { icon: '📊', title: 'ccboard', desc: 'TUI/Web dashboard for Claude Code session management and analytics.', url: 'https://ccboard.bruniaux.com/' },
      { icon: '🔌', title: 'cc-copilot-bridge', desc: 'Multi-provider router for Claude Code. Switch between Anthropic, Copilot, or Ollama.', url: 'https://ccbridge.bruniaux.com/' },
    ],

    // Footer
    footerCtaTitle: 'Ready to master Claude Cowork?',
    footerCtaText: '70 prompts and 28 workflows to transform your desktop workflow.',
    footerCtaCta: 'Read the Guide →',
    footerSections: [
      {
        title: 'Guide',
        links: [
          { text: 'Getting Started', url: GUIDE_BASE + 'guide/01-getting-started.md' },
          { text: 'Capabilities', url: GUIDE_BASE + 'guide/02-capabilities.md' },
          { text: 'Security', url: GUIDE_BASE + 'guide/03-security.md' },
          { text: 'Troubleshooting', url: GUIDE_BASE + 'guide/04-troubleshooting.md' },
        ],
      },
      {
        title: 'Reference',
        links: [
          { text: 'Cheatsheet', url: GUIDE_BASE + 'reference/cheatsheet.md' },
          { text: 'Comparison', url: GUIDE_BASE + 'reference/comparison.md' },
          { text: 'FAQ', url: GUIDE_BASE + 'reference/faq.md' },
          { text: 'Glossary', url: GUIDE_BASE + 'reference/glossary.md' },
        ],
      },
      {
        title: 'Ecosystem',
        links: [
          { text: 'Claude Code Guide', url: 'https://cc.bruniaux.com/' },
          { text: 'ccboard', url: 'https://ccboard.bruniaux.com/' },
          { text: 'cc-copilot-bridge', url: 'https://ccbridge.bruniaux.com/' },
          { text: 'GitHub', url: 'https://github.com/FlorianBruniaux/claude-cowork-guide' },
          { text: 'Anthropic', url: 'https://www.anthropic.com/claude' },
        ],
      },
      {
        title: 'Share',
        links: [
          { text: 'Share on X', url: 'https://twitter.com/intent/tweet?url=https://cowork.bruniaux.com/&text=Claude%20Cowork%20Guide%20-%20Le%20guide%20pratique%20pour%20travailler%20avec%20Claude' },
          { text: 'Share on LinkedIn', url: 'https://www.linkedin.com/sharing/share-offsite/?url=https://cowork.bruniaux.com/' },
        ],
      },
    ],
    footerMadeBy: 'Made by <a href="https://florian.bruniaux.com/" target="_blank" rel="noopener">Florian BRUNIAUX</a> · <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#102;&#108;&#111;&#114;&#105;&#97;&#110;&#64;&#98;&#114;&#117;&#110;&#105;&#97;&#117;&#120;&#46;&#99;&#111;&#109;">Feedback?</a>',
    feedbackLabel: 'Submit an idea or issue',
    feedbackText: 'Feedback',
  },

  fr: {
    // Meta
    siteTitle: 'Guide Claude Cowork : 28 workflows & 70 Prompts - Gratuit',
    siteDescription: 'Maîtrisez Claude Cowork avec 28 workflows détaillés et 70 prompts prêts à l\'emploi. Guide gratuit pour l\'automatisation de fichiers, création de documents et OCR. Démarrez →',
    ogDescription: 'Guide gratuit et open-source pour Claude Cowork. 28 workflows, 70 prompts, bonnes pratiques de sécurité. Maîtrisez l\'automatisation IA sur desktop.',
    twitterDescription: '70 prompts prêts à l\'emploi, 28 workflows, guide de sécurité. Maîtrisez l\'assistant IA desktop de Claude.',

    // Header
    logoText: 'Guide Claude Cowork',
    navFeatures: 'Fonctionnalités',
    navWorkflows: 'Workflows',
    navPrompts: 'Prompts',
    navCompare: 'Comparer',
    navFaq: 'FAQ',
    navFaqUrl: '/fr/faq/',
    searchPlaceholder: 'Rechercher guide, prompts, FAQ...',
    searchLabel: 'Ouvrir la recherche',
    langSwitchUrl: '/',
    langSwitchLabel: 'Switch to English',
    langSwitchText: 'EN',
    themeLabel: 'Mode sombre',
    readGuide: 'Lire le Guide',
    menuToggle: 'Basculer le menu',
    skipToContent: 'Aller au contenu principal',

    // Preview Banner
    previewBadge: 'Guide Exploratoire',
    previewText: 'Cowork est tout nouveau et évolue rapidement. Ce guide reflète ma compréhension actuelle et changera au fur et à mesure que j\'apprends. Attendez-vous à de l\'instabilité et des mises à jour fréquentes.',

    // Hero
    heroTitle: 'Maîtrisez Claude Cowork',
    heroTagline: 'Le guide complet pour l\'assistant IA desktop de Claude',
    heroStats: '28 workflows | 70 prompts | Bonnes pratiques de sécurité',
    heroCta: 'Lire le Guide',
    heroCtaSecondary: 'Parcourir les Workflows',
    heroCodeLead: 'Développeur ? <strong>Claude Code</strong> est fait pour le coding IA en terminal.',
    heroCodePrereq1: 'Toutes plateformes',
    heroCodePrereq2: 'Version gratuite disponible',
    heroCodeCta: 'Commencer avec Claude Code →',

    // What's New
    whatsNewBadge: 'Fév 2026',
    whatsNewTitle: 'Extension Claude Legal documentée',
    whatsNewText: 'Premier plugin officiel Cowork pour la revue automatisée de documents juridiques. Analyse de contrats, détection de risques, triage de NDA.',
    whatsNewWarning: 'Ne fournit pas de conseil juridique.',
    whatsNewCta: 'Voir la documentation →',
    whatsNewUrl: GUIDE_BASE + 'guide/02-capabilities.fr.md#extensions--plugins',

    // TL;DR
    tldrTitle: 'TL;DR',
    tldrSubtitle: 'Ce que vous devez savoir en 30 secondes',
    tldrRows: [
      ['Public cible', 'Professionnels non-développeurs (chefs de projet, consultants, analystes...)'],
      ['Plateforme', 'macOS uniquement (Windows prévu)'],
      ['Coût', 'Pro 20$/mois ou Max 100-200$/mois'],
      ['Statut', 'Version test (instable, évolution rapide)'],
      ['Idéal pour', 'Organisation fichiers, création documents, lecture de photos/scans'],
      ['Pas pour', 'Exécution de code, appels automatiques sur Internet, fichiers cloud'],
    ] as [string, string][],

    // Getting Started
    gettingStartedBadge: 'Configuration Rapide',
    gettingStartedTitle: 'Commencer en 3 Étapes',
    gettingStartedSubtitle: '15 minutes jusqu\'à votre premier workflow automatisé',
    step1Title: 'Installer Claude Desktop',
    step1Text: 'Télécharger depuis <a href="https://claude.ai/download" target="_blank" rel="noopener">claude.ai/download</a> (macOS uniquement, Pro 20$/mois requis)',
    step2Title: 'Suivre la Configuration Sécurité',
    step2Text: 'Lire le <a href="' + GUIDE_BASE + 'guide/01-getting-started.md" target="_blank" rel="noopener">guide de démarrage</a> pour l\'isolation sécurisée et la configuration des sauvegardes',
    step3Title: 'Copier Votre Premier Prompt',
    step3Text: 'Commencer avec <a href="#prompts">70 prompts prêts à l\'emploi</a> pour vos tâches courantes',

    // Why This Guide
    whyTitle: 'Pourquoi ce Guide ?',
    whySubtitle: 'Arrêtez de perdre des heures. Commencez à travailler en toute sécurité et efficacement dès le premier jour.',
    withoutTitle: 'Sans le Guide',
    withoutIcon: '😰',
    withoutItems: [
      'Bloqué pendant des heures avec des problèmes de configuration',
      'À court de quota après 1 heure, impossible de finir le travail',
      'Risque d\'exposer mots de passe, fichiers confidentiels, clés API',
      'Écrire chaque instruction manuellement, à chaque fois',
      'Aucune idée des tâches sûres à déléguer',
      'Fichiers accidentellement supprimés sans sauvegarde',
    ],
    withTitle: 'Avec le Guide',
    withIcon: '🚀',
    withItems: [
      'Opérationnel en 15 minutes avec configuration pas à pas',
      'Faites durer votre quota 3-4x plus longtemps avec des astuces',
      'Gardez mots de passe & fichiers en sécurité avec isolation',
      '70 prompts copier-coller prêts à l\'emploi instantanément',
      'Directives claires : ce qui est sûr, ce qui est risqué',
      'Sauvegardes intégrées avant chaque opération risquée',
    ],

    // Features
    featuresBadge: 'Contenu',
    featuresTitle: 'Documentation Complète',
    featuresSubtitle: 'Tout ce dont vous avez besoin pour maîtriser Cowork',
    features: [
      { icon: '🔄', title: '28 workflows Pas à Pas', desc: 'De la facturation à la planification de projets. Complets avec prompts copier-coller, exemples et dépannage.', meta: 'Débutant → Avancé', url: GUIDE_BASE + 'workflows' },
      { icon: '💬', title: '70 Prompts Prêts à l\'Emploi', desc: 'Prompts copier-coller pour opérations fichiers, création documents, extraction données et recherche web.', meta: '4 catégories', url: GUIDE_BASE + 'prompts', featured: true, badge: 'Populaire' },
      { icon: '🛡️', title: 'Guide de Sécurité', desc: 'Défense contre les fichiers pièges (injection de prompts), atelier isolé (workspace), gestion permissions navigateur, réponse aux incidents.', meta: '12 min lecture', url: GUIDE_BASE + 'guide/03-security.fr.md' },
      { icon: '🔧', title: 'Dépannage', desc: 'Problèmes VPN, bugs de permissions, échecs en cours de tâche, gestion du quota. Arbre de décision inclus.', meta: '8 min lecture', url: GUIDE_BASE + 'guide/04-troubleshooting.fr.md' },
      { icon: '⚖️', title: 'Comparaison Produits', desc: 'Cowork vs Claude Code vs Copilot vs Gemini vs ChatGPT. Quand utiliser quoi.', meta: 'Matrice de décision', url: GUIDE_BASE + 'reference/comparison.fr.md' },
      { icon: '📋', title: 'Cheatsheet', desc: 'Référence imprimable 1 page. Framework CTOC, règles d\'or, raccourcis clavier.', meta: 'Prêt à imprimer', url: GUIDE_BASE + 'reference/cheatsheet.fr.md' },
      { icon: '🎨', title: 'Personnalisation du Profil', desc: 'Créez un fichier .md personnel pour définir la voix, le ton et le style de Claude. Template inclus.', meta: 'Nouveau', url: GUIDE_BASE + 'guide/01-getting-started.fr.md#étape-6--personnaliser-votre-profil-optionnel' },
      { icon: '⚙️', title: 'Sélection du Modèle', desc: 'Sonnet vs Opus : quand utiliser chaque modèle. Compromis vitesse, coût et capacités.', meta: 'Nouveau', url: GUIDE_BASE + 'guide/02-capabilities.fr.md#sélection-du-modèle' },
      { icon: '⚖️', title: 'Extension Claude Legal', desc: 'Premier plugin officiel Cowork. Revue automatisée de contrats, détection de risques, suivi de conformité. Documentation uniquement.', meta: 'Ne fournit pas de conseil juridique', url: GUIDE_BASE + 'guide/02-capabilities.fr.md#extensions--plugins', badge: 'Fév 2026' },
    ],

    // Workflows
    workflowsBadge: 'Pas à Pas',
    workflowsTitle: '28 workflows Complets',
    workflowsSubtitle: 'Organisés par type de tâche - Administratif, Commercial, Production, Communication, Organisation',
    workflowTabAll: 'Tous (25)',
    workflowTabAdmin: 'Admin (6)',
    workflowTabCommercial: 'Commercial (5)',
    workflowTabProduction: 'Production (5)',
    workflowTabCommunication: 'Communication (4)',
    workflowTabOrganisation: 'Organisation (4)',

    // Prompts
    promptsBadge: 'Copier & Coller',
    promptsTitle: '70 Prompts Prêts à l\'Emploi',
    promptsSubtitle: 'Organisés par catégorie, testés et affinés',
    promptCategories: [
      { icon: '📂', title: 'Opérations Fichiers', desc: 'Organisation, renommage, nettoyage, déduplication', count: '20 prompts', url: GUIDE_BASE + 'prompts/file-ops.fr.md' },
      { icon: '📄', title: 'Création Documents', desc: 'Rapports, synthèses, présentations, Excel', count: '16 prompts', url: GUIDE_BASE + 'prompts/document-creation.fr.md' },
      { icon: '🔍', title: 'Extraction Données', desc: 'Images → données, parsing PDF, OCR', count: '17 prompts', url: GUIDE_BASE + 'prompts/data-extraction.fr.md' },
      { icon: '🌐', title: 'Recherche Web', desc: 'Recherche, synthèse, analyse concurrentielle', count: '17 prompts', url: GUIDE_BASE + 'prompts/research.fr.md' },
    ],
    promptExampleTitle: 'Exemple : Extraction Tickets de Caisse',
    promptExampleCopy: 'Copier',
    promptExampleCode: `Analyse toutes les images de tickets dans ~/Cowork-Workspace/input/tickets/

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

    // Comparison
    comparisonTitle: 'Cowork vs Autres Outils',
    comparisonSubtitle: 'Choisissez le bon outil pour votre tâche',
    comparisonHeaders: ['Fonctionnalité', 'Cowork', 'Claude Code', 'M365 Copilot', 'ChatGPT'],
    comparisonRows: [
      { label: 'Utilisateur cible', values: ['Knowledge workers', 'Développeurs', 'Utilisateurs M365', 'Tout le monde'], classes: ['', '', '', ''] },
      { label: 'Accès fichiers locaux', values: ['Sandbox', 'Complet', 'Fichiers Office uniquement*', 'Upload uniquement'], classes: ['feature-yes', 'feature-yes', 'feature-partial', 'feature-no'] },
      { label: 'Exécuter du code', values: ['Non', 'Shell complet', 'Non', 'Non'], classes: ['feature-no', 'feature-yes', 'feature-no', 'feature-no'] },
      { label: 'Créer docs Office', values: ['Natif', 'Via scripts', 'Natif', 'Non'], classes: ['feature-yes', 'feature-partial', 'feature-yes', 'feature-no'] },
      { label: 'Automatisation navigateur', values: ['Chrome', 'Via outils', 'Non', 'Operator beta'], classes: ['feature-yes', 'feature-yes', 'feature-no', 'feature-partial'] },
      { label: 'Planification multi-étapes', values: ['Oui', 'Oui', 'Limité', 'GPTs seulement'], classes: ['feature-yes', 'feature-yes', 'feature-partial', 'feature-partial'] },
      { label: 'Plateforme', values: ['macOS uniquement', 'Tous', 'Windows/Mac', 'Tous'], classes: ['', '', '', ''] },
      { label: 'Statut', values: ['Preview', 'Production', 'Production', 'Production'], classes: ['feature-partial', 'feature-yes', 'feature-yes', 'feature-yes'] },
    ],
    comparisonNote: '<strong>Règle d\'or :</strong> Utilisez Chat (80%) pour réflexion/écriture/codage. Utilisez Cowork (20%) pour fichiers en lot et automatisation.',
    comparisonFootnote: '<strong>*Note :</strong> "M365 Copilot" désigne Microsoft 365 Copilot (intégration Word/Excel/PowerPoint), pas GitHub Copilot (outil développeur avec accès complet au système de fichiers).',

    // Key Terms
    termsBadge: 'Glossaire',
    termsTitle: 'Termes Clés',
    termsSubtitle: 'Vocabulaire essentiel pour démarrer avec Cowork',
    terms: [
      { title: 'Espace de travail', definition: 'Le dossier macOS où Claude peut lire/écrire des fichiers. À configurer pour séparer travail et fichiers personnels.' },
      { title: 'Prompt', definition: 'Instructions données à Claude. Peuvent être simples ("organiser ces fichiers") ou complexes avec plusieurs étapes.' },
      { title: 'Workflow', definition: 'Séquence d\'actions répétable (lire fichiers → traiter → créer résultat). Comme une recette réutilisable.' },
      { title: 'Jeton (Token)', definition: 'Unité mesurant le texte traité par Claude. ~4 caractères = 1 jeton. Plan Pro donne 5M jetons/mois.' },
      { title: 'Contexte', definition: 'Information que Claude mémorise pendant une conversation. Mémoire à court terme, limitée mais puissante.' },
      { title: 'Bac à sable', definition: 'Zone de test isolée. Permet d\'expérimenter en toute sécurité sans affecter fichiers réels ou données.' },
      { title: 'OCR', definition: 'Reconnaissance optique de caractères. Claude lit du texte dans photos/scans et convertit en texte modifiable.' },
      { title: 'Artefact', definition: 'Fichier créé par Claude (document, tableur, etc.). Apparaît dans l\'interface Claude pour aperçu/téléchargement.' },
    ],
    termsFooter: 'Voir le <a href="' + GUIDE_BASE + 'reference/glossary.fr.md" target="_blank" rel="noopener">glossaire complet</a> avec plus de 30 termes techniques et concepts avancés.',

    // Golden Rules
    rulesTitle: '7 Règles d\'Or',
    rulesSubtitle: 'Suivez-les pour éviter les erreurs les plus courantes',
    rules: [
      { title: 'Toujours vérifier le plan', desc: 'Cowork propose, vous décidez. Lisez chaque plan d\'exécution avant d\'approuver. Cherchez les actions inattendues.' },
      { title: 'Workspace dédié uniquement', desc: 'N\'accordez jamais l\'accès à ~/Documents, ~/Desktop ou votre dossier personnel. Créez ~/Cowork-Workspace/ à la place.' },
      { title: 'Pas d\'identifiants dans le workspace', desc: 'Gardez mots de passe, clés API et secrets hors des dossiers accessibles à Cowork. Le contenu est envoyé aux serveurs d\'Anthropic.' },
      { title: 'Vérifier les sources de fichiers', desc: 'Risque de fichiers pièges (injection de prompt) dans les fichiers non fiables. Les PDF malveillants peuvent manipuler le comportement de Cowork.' },
      { title: 'Budgéter le temps de correction', desc: 'La précision OCR est ~97% pour les champs, ~63% pour les lignes. Vérifiez toujours les données extraites.' },
      { title: 'Déconnecter le VPN', desc: 'Le problème n°1 rapporté. Le VPN casse le réseau VM. Déconnectez avant d\'utiliser Cowork.' },
      { title: 'Sauvegarder avant opérations destructives', desc: 'Pas d\'annulation pour les suppressions de fichiers. Exécutez <code>cp -R ~/Cowork-Workspace/ ~/Cowork-Backup/</code> d\'abord.' },
    ],

    // Cross-link
    crosslinkTitle: 'Vous êtes Développeur ?',
    crosslinkSubtitle: 'Claude Code offre un accès shell complet et des workflows de codage IA pour les développeurs.',
    crosslinkSignals: [
      'Écrire du code en terminal ou IDE quotidiennement',
      'Exécuter builds, tests, commandes de déploiement',
      'Voulez une IA qui édite les fichiers de façon autonome',
    ],
    crosslinkCardTitle: 'Guide Ultime Claude Code',
    crosslinkCardStats: '66 Templates • 227 Questions Quiz • 11 100+ Lignes',
    crosslinkCardCta: 'Voir le Guide Claude Code →',

    // FAQ
    faqTitle: 'Questions Fréquentes',
    faqSubtitle: 'Réponses rapides aux questions courantes',
    faqItems: [
      { q: 'Qu\'est-ce que Cowork ?', a: 'Cowork est la fonctionnalité autonome (agentique) de Claude qui manipule les fichiers locaux, crée des documents et organise votre espace de travail, sans écrire de code. Pensez-y comme Claude Code pour les professionnels non-développeurs.' },
      { q: 'Combien coûte Cowork ?', a: 'Cowork nécessite un abonnement Pro (20$/mois) ou Max (100-200$/mois). Pro est recommandé uniquement pour une utilisation légère (le quota s\'épuise en ~1-1,5 heures d\'utilisation intensive).' },
      { q: 'Cowork fonctionne-t-il sur Windows ou Linux ?', a: 'Pas encore (janvier 2026). macOS uniquement. Windows est sur la roadmap d\'Anthropic mais sans ETA. Linux n\'a pas d\'annonce officielle. Utilisez Claude Code pour les capacités autonomes (agentiques) sur Linux.' },
      { q: 'Puis-je utiliser Cowork avec un VPN ?', a: 'Non. Les logiciels VPN créent des conflits de routage avec le réseau VM interne de Cowork. C\'est le problème n°1 rapporté. Déconnectez complètement votre VPN avant d\'utiliser Cowork.' },
      { q: 'Cowork est-il sécurisé ?', a: 'Il n\'y a pas encore de documentation de sécurité officielle (version test). Bonnes pratiques : utilisez un dossier séparé dédié (atelier isolé), vérifiez chaque plan d\'action, gardez vos codes d\'accès dehors, vérifiez les sources de fichiers.' },
      { q: 'Que ne peut PAS faire Cowork ?', a: 'Cowork ne peut pas : exécuter du code/scripts, faire des appels API, accéder directement au cloud storage (Google Drive, Dropbox), traiter l\'audio/vidéo, déchiffrer des fichiers cryptés.' },
      { q: 'Quand utiliser Chat vs Cowork ?', a: 'Chat (80%) : raisonnement, écriture, codage, tâches exploratoires. Cowork (20%) : opérations fichiers en lot, création de documents, automatisation navigateur. Ensemble, ils permettent des procédures guidées (workflows) impossibles avec l\'un ou l\'autre seul.' },
      { q: 'Quelle est la différence avec Claude Code ?', a: 'Claude Code : interface terminal, accès shell complet, pour développeurs. Cowork : app desktop, accès fichiers uniquement, pour professionnels non-développeurs. Ils partagent l\'architecture mais diffèrent en capacités.' },
      { q: 'Cowork peut-il créer des formules Excel ?', a: 'Oui ! Cowork peut créer des fichiers Excel avec formules fonctionnelles, feuilles multiples et mise en forme. Spécifiez votre réglage régional (virgule US vs point-virgule EU) dans votre instruction (prompt).' },
      { q: 'Quelles sont les limites d\'utilisation ?', a: 'L\'utilisation se réinitialise toutes les 5 heures (pas quotidien/mensuel). Tier Pro : ~45 messages courts par reset (~1-1,5h utilisation intensive). Tier Max : 5x-20x plus. Le traitement de fichiers consomme la capacité (tokens) rapidement.' },
      { q: 'Ce guide est-il officiel ?', a: '<strong>Non, il s\'agit de recherche exploratoire.</strong> Cowork est tout nouveau (lancé janvier 2026). Ce guide reflète mon expérimentation personnelle et ma compréhension actuelle. Tous deux vont évoluer rapidement à mesure que le produit mûrit et que je découvre ce qui fonctionne. Attendez-vous à des changements de contenu, corrections et pivots. Pas affilié à Anthropic.' },
      { q: 'Qui est derrière ce guide ?', a: 'Créé par <a href="https://github.com/FlorianBruniaux" target="_blank" rel="noopener">Florian BRUNIAUX</a>, un développeur expérimentant Cowork depuis son lancement récent. C\'est un document vivant. J\'apprends en temps réel et documente mes découvertes au fur et à mesure qu\'elles évoluent. Les retours, corrections et vérifications de réalité sont essentiels !' },
      { q: 'Puis-je contribuer au guide ?', a: 'Oui ! Le <a href="https://github.com/FlorianBruniaux/claude-cowork-guide" target="_blank" rel="noopener">dépôt du guide</a> est open-source. Trouvé une erreur ? Vous avez une meilleure instruction (prompt) ? Les contributions sont bienvenues sur GitHub.' },
    ],

    // Related Projects
    relatedTitle: 'Projets Associés',
    relatedProjects: [
      { icon: '📖', title: 'Claude Code Ultimate Guide', desc: 'Documentation complète, astuces et bonnes pratiques pour Claude Code CLI.', url: 'https://cc.bruniaux.com/' },
      { icon: '📊', title: 'ccboard', desc: 'Dashboard TUI/Web pour la gestion de sessions et analyses Claude Code.', url: 'https://ccboard.bruniaux.com/' },
      { icon: '🔌', title: 'cc-copilot-bridge', desc: 'Routeur multi-fournisseurs pour Claude Code. Basculez entre Anthropic, Copilot ou Ollama.', url: 'https://ccbridge.bruniaux.com/' },
    ],

    // Footer
    footerCtaTitle: 'Prêt à maîtriser Claude Cowork ?',
    footerCtaText: '70 prompts et 28 workflows pour transformer votre workflow desktop.',
    footerCtaCta: 'Lire le Guide →',
    footerSections: [
      {
        title: 'Guide',
        links: [
          { text: 'Démarrage', url: GUIDE_BASE + 'guide/01-getting-started.fr.md' },
          { text: 'Capacités', url: GUIDE_BASE + 'guide/02-capabilities.fr.md' },
          { text: 'Sécurité', url: GUIDE_BASE + 'guide/03-security.fr.md' },
          { text: 'Dépannage', url: GUIDE_BASE + 'guide/04-troubleshooting.fr.md' },
        ],
      },
      {
        title: 'Référence',
        links: [
          { text: 'Cheatsheet', url: GUIDE_BASE + 'reference/cheatsheet.fr.md' },
          { text: 'Comparaison', url: GUIDE_BASE + 'reference/comparison.fr.md' },
          { text: 'FAQ', url: GUIDE_BASE + 'reference/faq.fr.md' },
          { text: 'Glossaire', url: GUIDE_BASE + 'reference/glossary.fr.md' },
        ],
      },
      {
        title: 'Écosystème',
        links: [
          { text: 'Guide Claude Code', url: 'https://cc.bruniaux.com/' },
          { text: 'ccboard', url: 'https://ccboard.bruniaux.com/' },
          { text: 'cc-copilot-bridge', url: 'https://ccbridge.bruniaux.com/' },
          { text: 'GitHub', url: 'https://github.com/FlorianBruniaux/claude-cowork-guide' },
          { text: 'Anthropic', url: 'https://www.anthropic.com/claude' },
        ],
      },
      {
        title: 'Partager',
        links: [
          { text: 'Partager sur X', url: 'https://twitter.com/intent/tweet?url=https://cowork.bruniaux.com/fr/&text=Claude%20Cowork%20Guide%20-%20Le%20guide%20pratique%20pour%20travailler%20avec%20Claude' },
          { text: 'Partager sur LinkedIn', url: 'https://www.linkedin.com/sharing/share-offsite/?url=https://cowork.bruniaux.com/fr/' },
        ],
      },
    ],
    footerMadeBy: 'Créé par <a href="https://florian.bruniaux.com/" target="_blank" rel="noopener">Florian BRUNIAUX</a> · <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#102;&#108;&#111;&#114;&#105;&#97;&#110;&#64;&#98;&#114;&#117;&#110;&#105;&#97;&#117;&#120;&#46;&#99;&#111;&#109;">Feedback ?</a>',
    feedbackLabel: 'Soumettre une idée ou un problème',
    feedbackText: 'Feedback',
  },
} as const

export function t(lang: Lang) {
  return UI_STRINGS[lang]
}