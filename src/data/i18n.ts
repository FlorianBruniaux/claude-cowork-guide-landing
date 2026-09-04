export type Lang = 'en' | 'fr'

const GUIDE_BASE = 'https://github.com/FlorianBruniaux/claude-cowork-guide/blob/main/'

export const UI_STRINGS = {
  en: {
    // Meta
    siteTitle: 'Claude Cowork Guide: 29 workflows & 70 Prompts - Free',
    siteDescription: 'Master Claude Cowork with 29 workflows and 70 ready-to-use prompts. Free community guide for secure, surface-aware workflows.',
    ogDescription: 'Free, open-source guide for Claude Cowork. 29 workflows, 70 prompts, security practices, and verified product scope.',
    twitterDescription: '70 ready-to-use prompts, 29 workflows, security guide, and verified Cowork capability notes.',

    // Header
    logoText: 'Claude Cowork Guide',
    navGuide: 'Guide',
    navGuideUrl: '/guide/',
    navFeatures: 'Features',
    navWorkflows: 'Workflows',
    navPrompts: 'Prompts',
    navCompare: 'Compare',
    navFaq: 'FAQ',
    navFaqUrl: '/faq/',
    navWhitepapers: 'Whitepapers',
    navWhitepapersUrl: '/whitepapers/',
    navWorkflowsUrl: '/workflows/',
    navPromptsUrl: '/prompts/',
    navCompareUrl: '/compare/',
    navKeyTermsUrl: '/glossary/',
    navRss: 'RSS Feed',
    navRssUrl: '/rss.xml',
    navMore: 'More',
    navReleases: 'Releases',
    navReleasesUrl: '/releases/',
    workflowsMetaTitle: '29 Cowork Workflows: Step-by-Step Automations | Claude Cowork Guide',
    workflowsMetaDescription: '29 complete Cowork workflows for knowledge workers: invoicing, client tracking, inventory, presentations, social media, and more.',
    workflowsBackHome: '← Back to guide',
    workflowsHeroNote: 'Each workflow links directly to the full step-by-step guide.',
    promptsMetaTitle: '70 Ready-to-Use Cowork Prompts | Claude Cowork Guide',
    promptsMetaDescription: '70 tested Cowork prompts across 4 categories: file operations, document creation, data extraction, web research. Copy, paste, adapt.',
    promptsBackHome: '← Back to guide',
    promptsHeroNote: 'All prompts are tested and ready to paste directly into Cowork.',
    promptsSeeAll: 'See all prompts on GitHub →',
    compareMetaTitle: 'Cowork vs Copilot vs ChatGPT — Tool Comparison | Claude Cowork Guide',
    compareMetaDescription: 'Objective comparison of Claude Cowork vs Microsoft 365 Copilot vs ChatGPT vs Notion AI. Choose the right tool for your workflow.',
    compareBackHome: '← Back to guide',
    compareHeroNote: 'All tools serve different use cases. Cowork excels at local file automation — not everything.',

    // Releases page
    releasesMetaTitle: 'Releases — Claude Cowork Guide',
    releasesMetaDescription: 'Complete changelog of the Claude Cowork Guide: new workflows, prompts, features, and Cowork updates. All versions from v1.2.0.',
    releasesHeroTitle: 'Releases',
    releasesHeroSubtitle: 'All guide versions and Cowork feature updates',
    releasesShowAll: 'Show all releases',
    releasesShowLess: 'Show less',
    releasesViewGitHub: 'View on GitHub →',
    releasesLatestBadge: 'Latest',
    releasesBackHome: '← Back to guide',
    glossaryMetaTitle: 'Cowork Glossary: 34 Terms Defined | Claude Cowork Guide',
    glossaryMetaDescription: 'Alphabetical glossary of Claude Cowork terms for knowledge workers. From Agentic to Workspace — every concept explained simply.',
    glossaryHeroTitle: 'Cowork Glossary',
    glossaryHeroSubtitle: 'Every Cowork concept explained simply. No jargon, no assumptions.',
    glossaryBackHome: '← Back to guide',
    glossaryContributeText: 'Missing a term?',
    glossaryContributeLink: 'Suggest it on GitHub',
    navKeyTerms: 'Key Terms',
    navGithub: 'GitHub',
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
    previewBadge: 'Community Guide',
    previewText: 'Community guide, product facts verified against Anthropic documentation on September 4, 2026. Not affiliated with Anthropic.',

    // Hero
    heroTitle: 'Master Claude Cowork',
    heroTagline: 'The complete guide to Claude Cowork across desktop, web, and mobile',
    heroBadgeLabelWorkflows: 'workflows',
    heroBadgeWorkflows: '29',
    heroBadgeLabelPrompts: 'prompts',
    heroBadgePrompts: '70',
    heroBadgeLabelRules: 'golden rules',
    heroBadgeRules: '7',
    heroCta: 'Read the Guide',
    heroCtaSecondary: 'Browse Workflows',

    // What's New
    whatsNewBadge: 'Sep 2026',
    whatsNewTitle: 'Guide v1.12.0: 29 workflows and 70 prompts',
    whatsNewText: 'The guide now provides a bilingual workflow library, a verified product FAQ, security guidance, prompt templates, and reference material for each supported surface.',
    whatsNewWarning: 'Product capabilities vary by plan and surface. Check the linked Anthropic documentation before relying on a feature for critical work.',
    whatsNewCta: 'View Capabilities →',
    whatsNewUrl: GUIDE_BASE + 'guide/02-capabilities.md#model-selection',

    // TL;DR
    tldrTitle: 'TL;DR',
    tldrSubtitle: 'What you need to know in 30 seconds',
    tldrRows: [
      ['Target Audience', 'Knowledge workers (non-developers)'],
      ['Platform', 'Desktop: macOS, Windows, Linux beta; web and mobile beta'],
      ['Access', 'Eligible paid Claude plans; availability varies by surface'],
      ['Status', 'Available now; some surfaces and computer use remain beta or preview'],
      ['Best For', 'File organization, document creation, OCR'],
      ['Scope', 'Capabilities depend on surface, permissions, connectors, and plan'],
    ] as [string, string][],

    // Getting Started
    gettingStartedBadge: 'Quick Setup',
    gettingStartedTitle: 'Get Started in 3 Steps',
    gettingStartedSubtitle: 'A practical path to your first automated workflow',
    step1Title: 'Install Claude Desktop',
    step1Text: 'Download from <a href="https://claude.ai/download" target="_blank" rel="noopener">claude.ai/download</a>. Cowork requires an eligible paid plan; Linux Desktop remains beta.',
    step2Title: 'Follow Security Setup',
    step2Text: 'Read <a href="' + GUIDE_BASE + 'guide/01-getting-started.md" target="_blank" rel="noopener">Getting Started guide</a> for safe isolation and backup configuration',
    step3Title: 'Copy Your First Prompt',
    step3Text: 'Start with <a href="#prompts">70 ready-to-use prompts</a> for common tasks',

    // Why This Guide
    whyTitle: 'Why This Guide?',
    whySubtitle: 'Stop wasting hours. Start working safely and efficiently from day one.',
    withoutTitle: 'Without the Guide',
    withoutIcon: '😰',
    withoutItems: [
      'Blocked from working for hours with setup issues',
      'Repeat expensive attempts without clear checkpoints',
      'Risk exposing passwords, confidential files, API keys',
      'Write every instruction manually, every time',
      'No idea what tasks are safe to delegate',
      'Files accidentally deleted with no backup',
    ],
    withTitle: 'With the Guide',
    withIcon: '🚀',
    withItems: [
      'Follow a step-by-step setup with explicit checkpoints',
      'Use explicit scope and checkpoints to control expensive retries',
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
      { icon: '🔄', title: '29 Step-by-Step Workflows', desc: 'From invoicing to project planning. Complete with copy-paste prompts, examples and troubleshooting.', meta: 'Beginner → Advanced', url: '/workflows/' },
      { icon: '💬', title: '70 Ready-to-Use Prompts', desc: 'Copy-paste prompts for file ops, document creation, data extraction, and web research.', meta: '4 categories', url: GUIDE_BASE + 'prompts', featured: true, badge: 'Popular' },
      { icon: '🛡️', title: 'Security Guide', desc: 'Prompt injection defense, workspace isolation, browser permission management, incident response.', meta: '12 min read', url: '/guide/03-security/' },
      { icon: '🔧', title: 'Troubleshooting', desc: 'VPN issues, permission bugs, mid-task failures, quota management. Decision tree included.', meta: '8 min read', url: '/guide/04-troubleshooting/' },
      { icon: '⚖️', title: 'Product Comparison', desc: 'Cowork vs Claude Code vs Copilot vs Gemini vs ChatGPT. When to use what.', meta: 'Decision matrix', url: '/guide/reference/comparison/' },
      { icon: '📋', title: 'Cheatsheet', desc: '1-page printable reference. CTOC framework, golden rules, keyboard shortcuts.', meta: 'Print-ready', url: '/guide/reference/cheatsheet/' },
      { icon: '🎨', title: 'Profile Personalization', desc: 'Create a personal .md profile to set Claude\'s voice, tone, and style. Template included.', meta: 'New', url: GUIDE_BASE + 'guide/01-getting-started.md#step-6-personalize-your-profile-optional' },
      { icon: '⚙️', title: 'Model Selection', desc: 'Sonnet vs Opus: when to use each model. Speed, cost, and capability trade-offs.', meta: 'New', url: GUIDE_BASE + 'guide/02-capabilities.md#model-selection' },
      { icon: '⚖️', title: 'Claude Legal Extension', desc: 'First official Cowork plugin. Automated contract review, risk detection, compliance tracking. Documentation only.', meta: 'Does not provide legal advice', url: GUIDE_BASE + 'guide/02-capabilities.md#extensions--plugins', badge: 'Feb 2026' },
      { icon: '⚡', title: 'Customize Tab & Skills', desc: 'Skills system (slash commands like /pdf /xlsx), MCP connectors, community skills. No coding required.', meta: 'New v1.5.0', url: GUIDE_BASE + 'guide/02-capabilities.md#customize-cowork' },
      { icon: '🧠', title: 'Cross-Session Memory', desc: 'Persist context between sessions with Desktop Commander and a memory.md file. Never repeat yourself.', meta: 'New v1.5.0', url: '/guide/workflows/memory-setup/' },
      { icon: '🕐', title: 'Scheduled Automation', desc: 'Daily briefs, weekly reports, monthly dashboards; set once, run automatically.', meta: 'New v1.5.0', url: '/guide/workflows/scheduled-automation/' },
    ],

    // Workflows
    workflowsBadge: 'Step-by-Step',
    workflowsTitle: '29 Complete Workflows',
    workflowsSubtitle: 'Organized by task type - Administrative, Commercial, Production, Communication, Organization',
    workflowTabAll: 'All (29)',
    workflowTabAdmin: 'Admin (6)',
    workflowTabCommercial: 'Commercial (5)',
    workflowTabProduction: 'Production (5)',
    workflowTabCommunication: 'Communication (4)',
    workflowTabOrganisation: 'Organization (6)',

    // Prompts
    promptsBadge: 'Copy & Paste',
    promptsTitle: '70 Ready-to-Use Prompts',
    promptsSubtitle: 'Organized by category, tested and refined',
    promptCategories: [
      { icon: '📂', title: 'File Operations', desc: 'Organization, renaming, cleanup, deduplication', count: '20 prompts', url: '/guide/prompts/file-ops/' },
      { icon: '📄', title: 'Document Creation', desc: 'Reports, summaries, presentations, Excel', count: '16 prompts', url: '/guide/prompts/document-creation/' },
      { icon: '🔍', title: 'Data Extraction', desc: 'Images → data, PDF parsing, OCR', count: '17 prompts', url: '/guide/prompts/data-extraction/' },
      { icon: '🌐', title: 'Web Research', desc: 'Research, synthesis, competitive analysis', count: '17 prompts', url: '/guide/prompts/research/' },
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
      { label: 'Execute Code', values: ['Isolated environment', 'Full shell', 'No', 'Sandboxed tools'], classes: ['feature-partial', 'feature-yes', 'feature-no', 'feature-partial'] },
      { label: 'Create Office Docs', values: ['Native', 'Via scripts', 'Native', 'No'], classes: ['feature-yes', 'feature-partial', 'feature-yes', 'feature-no'] },
      { label: 'Browser Automation', values: ['Chrome', 'Via tools', 'No', 'Operator beta'], classes: ['feature-yes', 'feature-yes', 'feature-no', 'feature-partial'] },
      { label: 'Multi-step Planning', values: ['Yes', 'Yes', 'Limited', 'GPTs only'], classes: ['feature-yes', 'feature-yes', 'feature-partial', 'feature-partial'] },
      { label: 'Platform', values: ['Desktop + web/mobile beta', 'All', 'Windows/Mac', 'All'], classes: ['', '', '', ''] },
      { label: 'Status', values: ['Varies by surface', 'Production', 'Production', 'Production'], classes: ['feature-partial', 'feature-yes', 'feature-yes', 'feature-yes'] },
    ],
    comparisonNote: '<strong>Rule of thumb:</strong> choose the surface from the files, permissions, connectors, and review controls the task needs.',
    comparisonFootnote: '<strong>*Note:</strong> "M365 Copilot" refers to Microsoft 365 Copilot (Word/Excel/PowerPoint integration), not GitHub Copilot (developer tool with full file system access).',

    // Key Terms
    termsBadge: 'Glossary',
    termsTitle: 'Key Terms',
    termsSubtitle: 'Essential vocabulary for getting started with Cowork',
    terms: [
      { title: 'Workspace', definition: 'The files and services made available to Cowork for a task. Access depends on the active surface and permissions.' },
      { title: 'Prompt', definition: 'Instructions you give to Claude. Can be simple ("organize these files") or complex workflows with multiple steps.' },
      { title: 'Workflow', definition: 'A repeatable sequence of actions (read files → process → create output). Like a recipe you can reuse.' },
      { title: 'Token', definition: 'A unit used to measure model input and output. Actual usage depends on the model, task, and processed content.' },
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
      { title: 'Budget error correction time', desc: 'Treat generated documents and extracted data as drafts. Verify material fields against their sources.' },
      { title: 'Check network policy', desc: 'If a connection fails, review the official troubleshooting guidance before changing VPN or firewall policy.' },
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
    // Related Projects
    relatedTitle: 'Related Projects',
    relatedProjects: [
      { icon: '>_', title: 'Claude Code', desc: 'Terminal-based AI coding assistant. For developers who want to automate their workflow.', url: 'https://cc.bruniaux.com/', badge: 'Developers' },
      { icon: '📖', title: 'Claude Code Ultimate Guide', desc: 'Complete documentation, tips, and best practices for Claude Code CLI.', url: 'https://cc.bruniaux.com/' },
      { icon: '📊', title: 'ccboard', desc: 'TUI/Web dashboard for Claude Code session management and analytics.', url: 'https://ccboard.bruniaux.com/' },
      { icon: '🔌', title: 'cc-copilot-bridge', desc: 'Multi-provider router for Claude Code. Switch between Anthropic, Copilot, or Ollama.', url: 'https://ccbridge.bruniaux.com/' },
    ],

    // Footer
    footerCtaTitle: 'Ready to master Claude Cowork?',
    footerCtaText: '70 prompts and 29 workflows for safe, repeatable work with Claude Cowork.',
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
        title: 'Whitepapers',
        links: [
          { text: 'All whitepapers', url: '/whitepapers/' },
          { text: 'WP-00 — From Zero to Productive', url: '/whitepapers/#wp-00' },
          { text: 'WP-09 — Security & Privacy', url: '/whitepapers/#wp-09' },
          { text: 'WP-11 — ROI & Deployment', url: '/whitepapers/#wp-11' },
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
    siteTitle: 'Guide Claude Cowork : 29 workflows & 70 Prompts - Gratuit',
    siteDescription: 'Maîtrisez Claude Cowork avec 29 workflows et 70 prompts prêts à l\'emploi. Guide communautaire gratuit, sécurisé et vérifié.',
    ogDescription: 'Guide gratuit et open source pour Claude Cowork. 29 workflows, 70 prompts, sécurité et périmètre produit vérifié.',
    twitterDescription: '70 prompts, 29 workflows, sécurité et capacités Claude Cowork vérifiées.',

    // Header
    logoText: 'Guide Claude Cowork',
    navGuide: 'Guide',
    navGuideUrl: '/guide/',
    navFeatures: 'Fonctionnalités',
    navWorkflows: 'Workflows',
    navPrompts: 'Prompts',
    navCompare: 'Comparer',
    navFaq: 'FAQ',
    navFaqUrl: '/fr/faq/',
    navWhitepapers: 'Livres blancs',
    navWhitepapersUrl: '/fr/whitepapers/',
    navWorkflowsUrl: '/fr/workflows/',
    navPromptsUrl: '/fr/prompts/',
    navCompareUrl: '/fr/compare/',
    navKeyTermsUrl: '/fr/glossary/',
    navRss: 'Flux RSS',
    navRssUrl: '/rss.xml',
    navMore: 'Plus',
    navReleases: 'Releases',
    navReleasesUrl: '/fr/releases/',
    workflowsMetaTitle: '29 Workflows Cowork : automatisations pas à pas | Guide Claude Cowork',
    workflowsMetaDescription: '29 workflows Cowork complets pour les professionnels : facturation, suivi client, inventaire, présentations et réseaux sociaux.',
    workflowsBackHome: '← Retour au guide',
    workflowsHeroNote: 'Chaque workflow renvoie directement au guide complet pas à pas.',
    promptsMetaTitle: '70 Prompts Cowork Prêts à l\'Emploi | Guide Claude Cowork',
    promptsMetaDescription: '70 prompts Cowork testés en 4 catégories : opérations fichiers, création documents, extraction données, recherche web. Copier, coller, adapter.',
    promptsBackHome: '← Retour au guide',
    promptsHeroNote: 'Tous les prompts sont testés et prêts à coller directement dans Cowork.',
    promptsSeeAll: 'Voir tous les prompts sur GitHub →',
    compareMetaTitle: 'Cowork vs Copilot vs ChatGPT — Comparatif Outils | Guide Claude Cowork',
    compareMetaDescription: 'Comparaison objective Claude Cowork vs Microsoft 365 Copilot vs ChatGPT vs Notion AI. Choisissez le bon outil pour votre flux de travail.',
    compareBackHome: '← Retour au guide',
    compareHeroNote: 'Chaque outil a ses points forts. Cowork excelle sur l\'automatisation de fichiers locaux — pas sur tout.',

    // Releases page
    releasesMetaTitle: 'Releases — Claude Cowork Guide',
    releasesMetaDescription: 'Historique complet du guide Claude Cowork : nouveaux workflows, prompts, fonctionnalités et mises à jour Cowork. Toutes les versions depuis v1.2.0.',
    releasesHeroTitle: 'Releases',
    releasesHeroSubtitle: 'Toutes les versions du guide et les mises à jour de fonctionnalités Cowork',
    releasesShowAll: 'Voir toutes les releases',
    releasesShowLess: 'Voir moins',
    releasesViewGitHub: 'Voir sur GitHub →',
    releasesLatestBadge: 'Dernière',
    releasesBackHome: '← Retour au guide',
    glossaryMetaTitle: 'Glossaire Cowork : 34 termes définis | Guide Claude Cowork',
    glossaryMetaDescription: 'Glossaire alphabétique des termes Claude Cowork pour les travailleurs du savoir. D\'Agentique à Workspace — chaque concept expliqué simplement.',
    glossaryHeroTitle: 'Glossaire Cowork',
    glossaryHeroSubtitle: 'Chaque concept Cowork expliqué simplement. Sans jargon, sans suppositions.',
    glossaryBackHome: '← Retour au guide',
    glossaryContributeText: 'Un terme manquant ?',
    glossaryContributeLink: 'Proposer sur GitHub',
    navKeyTerms: 'Termes clés',
    navGithub: 'GitHub',
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
    previewBadge: 'Guide Communauté',
    previewText: 'Guide communautaire, informations produit vérifiées avec la documentation Anthropic le 4 septembre 2026. Non affilié à Anthropic.',

    // Hero
    heroTitle: 'Maîtrisez Claude Cowork',
    heroTagline: 'Le guide complet de Claude Cowork sur desktop, web et mobile',
    heroBadgeLabelWorkflows: 'workflows',
    heroBadgeWorkflows: '29',
    heroBadgeLabelPrompts: 'prompts',
    heroBadgePrompts: '70',
    heroBadgeLabelRules: 'règles d\'or',
    heroBadgeRules: '7',
    heroCta: 'Lire le Guide',
    heroCtaSecondary: 'Parcourir les Workflows',

    // What's New
    whatsNewBadge: 'Sept 2026',
    whatsNewTitle: 'Guide v1.12.0 : 29 workflows et 70 prompts',
    whatsNewText: 'Le guide propose maintenant une bibliothèque bilingue de workflows, une FAQ produit vérifiée, des pratiques de sécurité, des modèles de prompts et des références par surface.',
    whatsNewWarning: 'Les capacités produit varient selon le plan et la surface. Vérifiez la documentation Anthropic liée avant de dépendre d’une fonction pour une tâche critique.',
    whatsNewCta: 'Voir les fonctionnalités →',
    whatsNewUrl: GUIDE_BASE + 'guide/02-capabilities.fr.md#selection-du-modele',

    // TL;DR
    tldrTitle: 'TL;DR',
    tldrSubtitle: 'Ce que vous devez savoir en 30 secondes',
    tldrRows: [
      ['Public cible', 'Professionnels non-développeurs (chefs de projet, consultants, analystes...)'],
      ['Plateforme', 'Desktop : macOS, Windows, Linux beta ; web et mobile beta'],
      ['Accès', 'Plans Claude payants éligibles ; disponibilité variable selon la surface'],
      ['Statut', 'Disponible ; certaines surfaces et fonctions restent en beta ou preview'],
      ['Idéal pour', 'Organisation fichiers, création documents, lecture de photos/scans'],
      ['Périmètre', 'Capacités variables selon surface, permissions, connecteurs et plan'],
    ] as [string, string][],

    // Getting Started
    gettingStartedBadge: 'Configuration Rapide',
    gettingStartedTitle: 'Commencer en 3 Étapes',
    gettingStartedSubtitle: 'Un parcours pratique vers votre premier workflow automatisé',
    step1Title: 'Installer Claude Desktop',
    step1Text: 'Télécharger depuis <a href="https://claude.ai/download" target="_blank" rel="noopener">claude.ai/download</a>. Cowork exige un plan payant éligible ; Linux Desktop reste en beta.',
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
      'Répéter des tentatives coûteuses sans points de contrôle clairs',
      'Risque d\'exposer mots de passe, fichiers confidentiels, clés API',
      'Écrire chaque instruction manuellement, à chaque fois',
      'Aucune idée des tâches sûres à déléguer',
      'Fichiers accidentellement supprimés sans sauvegarde',
    ],
    withTitle: 'Avec le Guide',
    withIcon: '🚀',
    withItems: [
      'Suivez une configuration pas à pas avec des points de contrôle explicites',
      'Cadrez la tâche et les validations pour limiter les reprises coûteuses',
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
      { icon: '🔄', title: '29 workflows pas à pas', desc: 'De la facturation à la planification de projets. Complets avec prompts copier-coller, exemples et dépannage.', meta: 'Débutant → Avancé', url: '/fr/workflows/' },
      { icon: '💬', title: '70 Prompts Prêts à l\'Emploi', desc: 'Prompts copier-coller pour opérations fichiers, création documents, extraction données et recherche web.', meta: '4 catégories', url: GUIDE_BASE + 'prompts', featured: true, badge: 'Populaire' },
      { icon: '🛡️', title: 'Guide de Sécurité', desc: 'Défense contre les fichiers pièges, isolation, permissions navigateur et réponse aux incidents.', meta: '12 min lecture', url: '/fr/guide/03-security/' },
      { icon: '🔧', title: 'Dépannage', desc: 'Problèmes réseau, permissions, échecs en cours de tâche et gestion des limites.', meta: '8 min lecture', url: '/fr/guide/04-troubleshooting/' },
      { icon: '⚖️', title: 'Comparaison Produits', desc: 'Cowork vs Claude Code vs Copilot vs Gemini vs ChatGPT. Quand utiliser quoi.', meta: 'Matrice de décision', url: '/fr/guide/reference/comparison/' },
      { icon: '📋', title: 'Cheatsheet', desc: 'Référence imprimable 1 page. Framework CTOC, règles d\'or et raccourcis clavier.', meta: 'Prêt à imprimer', url: '/fr/guide/reference/cheatsheet/' },
      { icon: '🎨', title: 'Personnalisation du Profil', desc: 'Créez un fichier .md personnel pour définir la voix, le ton et le style de Claude. Template inclus.', meta: 'Nouveau', url: GUIDE_BASE + 'guide/01-getting-started.fr.md#étape-6--personnaliser-votre-profil-optionnel' },
      { icon: '⚙️', title: 'Sélection du Modèle', desc: 'Sonnet vs Opus : quand utiliser chaque modèle. Compromis vitesse, coût et capacités.', meta: 'Nouveau', url: GUIDE_BASE + 'guide/02-capabilities.fr.md#sélection-du-modèle' },
      { icon: '⚖️', title: 'Extension Claude Legal', desc: 'Premier plugin officiel Cowork. Revue automatisée de contrats, détection de risques, suivi de conformité. Documentation uniquement.', meta: 'Ne fournit pas de conseil juridique', url: GUIDE_BASE + 'guide/02-capabilities.fr.md#extensions--plugins', badge: 'Fév 2026' },
      { icon: '⚡', title: 'Onglet Personnaliser & Skills', desc: 'Système de Skills (commandes /pdf /xlsx), connecteurs MCP, skills communautaires. Sans code.', meta: 'Nouveau v1.5.0', url: GUIDE_BASE + 'guide/02-capabilities.fr.md#personnaliser-cowork' },
      { icon: '🧠', title: 'Mémoire Inter-Sessions', desc: 'Persistez le contexte entre sessions avec Desktop Commander et un fichier memory.md.', meta: 'Nouveau v1.5.0', url: '/fr/guide/workflows/memory-setup/' },
      { icon: '🕐', title: 'Automatisation Planifiée', desc: 'Briefs quotidiens, rapports hebdo et dashboards mensuels, récurrents ou à la demande.', meta: 'Nouveau v1.5.0', url: '/fr/guide/workflows/scheduled-automation/' },
    ],

    // Workflows
    workflowsBadge: 'Pas à Pas',
    workflowsTitle: '29 workflows complets',
    workflowsSubtitle: 'Organisés par type de tâche - Administratif, Commercial, Production, Communication, Organisation',
    workflowTabAll: 'Tous (29)',
    workflowTabAdmin: 'Admin (6)',
    workflowTabCommercial: 'Commercial (5)',
    workflowTabProduction: 'Production (5)',
    workflowTabCommunication: 'Communication (4)',
    workflowTabOrganisation: 'Organisation (6)',

    // Prompts
    promptsBadge: 'Copier & Coller',
    promptsTitle: '70 Prompts Prêts à l\'Emploi',
    promptsSubtitle: 'Organisés par catégorie, testés et affinés',
    promptCategories: [
      { icon: '📂', title: 'Opérations Fichiers', desc: 'Organisation, renommage, nettoyage, déduplication', count: '20 prompts', url: '/fr/guide/prompts/file-ops/' },
      { icon: '📄', title: 'Création Documents', desc: 'Rapports, synthèses, présentations, Excel', count: '16 prompts', url: '/fr/guide/prompts/document-creation/' },
      { icon: '🔍', title: 'Extraction Données', desc: 'Images vers données, parsing PDF, OCR', count: '17 prompts', url: '/fr/guide/prompts/data-extraction/' },
      { icon: '🌐', title: 'Recherche Web', desc: 'Recherche, synthèse, analyse concurrentielle', count: '17 prompts', url: '/fr/guide/prompts/research/' },
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
      { label: 'Exécuter du code', values: ['Environnement isolé', 'Shell complet', 'Non', 'Outils isolés'], classes: ['feature-partial', 'feature-yes', 'feature-no', 'feature-partial'] },
      { label: 'Créer docs Office', values: ['Natif', 'Via scripts', 'Natif', 'Non'], classes: ['feature-yes', 'feature-partial', 'feature-yes', 'feature-no'] },
      { label: 'Automatisation navigateur', values: ['Chrome', 'Via outils', 'Non', 'Operator beta'], classes: ['feature-yes', 'feature-yes', 'feature-no', 'feature-partial'] },
      { label: 'Planification multi-étapes', values: ['Oui', 'Oui', 'Limité', 'GPTs seulement'], classes: ['feature-yes', 'feature-yes', 'feature-partial', 'feature-partial'] },
      { label: 'Plateforme', values: ['Desktop + web/mobile beta', 'Tous', 'Windows/Mac', 'Tous'], classes: ['', '', '', ''] },
      { label: 'Statut', values: ['Variable selon la surface', 'Production', 'Production', 'Production'], classes: ['feature-partial', 'feature-yes', 'feature-yes', 'feature-yes'] },
    ],
    comparisonNote: '<strong>Règle pratique :</strong> choisissez la surface selon les fichiers, permissions, connecteurs et validations nécessaires.',
    comparisonFootnote: '<strong>*Note :</strong> "M365 Copilot" désigne Microsoft 365 Copilot (intégration Word/Excel/PowerPoint), pas GitHub Copilot (outil développeur avec accès complet au système de fichiers).',

    // Key Terms
    termsBadge: 'Glossaire',
    termsTitle: 'Termes Clés',
    termsSubtitle: 'Vocabulaire essentiel pour démarrer avec Cowork',
    terms: [
      { title: 'Espace de travail', definition: 'Les fichiers et services mis à disposition de Cowork pour une tâche. L’accès dépend de la surface et des permissions.' },
      { title: 'Prompt', definition: 'Instructions données à Claude. Peuvent être simples ("organiser ces fichiers") ou complexes avec plusieurs étapes.' },
      { title: 'Workflow', definition: 'Séquence d\'actions répétable (lire fichiers → traiter → créer résultat). Comme une recette réutilisable.' },
      { title: 'Jeton (Token)', definition: 'Unité utilisée pour mesurer les entrées et sorties du modèle. L’usage dépend du modèle, de la tâche et du contenu traité.' },
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
      { title: 'Budgéter le temps de correction', desc: 'Traitez documents générés et données extraites comme des brouillons. Vérifiez les champs matériels avec leurs sources.' },
      { title: 'Vérifier la politique réseau', desc: 'En cas d’échec réseau, consultez le dépannage officiel avant de modifier la politique VPN ou pare-feu.' },
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
    // Related Projects
    relatedTitle: 'Projets Associés',
    relatedProjects: [
      { icon: '>_', title: 'Claude Code', desc: 'Assistant IA de codage en terminal. Pour les développeurs qui veulent automatiser leur workflow.', url: 'https://cc.bruniaux.com/', badge: 'Développeurs' },
      { icon: '📖', title: 'Claude Code Ultimate Guide', desc: 'Documentation complète, astuces et bonnes pratiques pour Claude Code CLI.', url: 'https://cc.bruniaux.com/' },
      { icon: '📊', title: 'ccboard', desc: 'Dashboard TUI/Web pour la gestion de sessions et analyses Claude Code.', url: 'https://ccboard.bruniaux.com/' },
      { icon: '🔌', title: 'cc-copilot-bridge', desc: 'Routeur multi-fournisseurs pour Claude Code. Basculez entre Anthropic, Copilot ou Ollama.', url: 'https://ccbridge.bruniaux.com/' },
    ],

    // Footer
    footerCtaTitle: 'Prêt à maîtriser Claude Cowork ?',
    footerCtaText: '70 prompts et 29 workflows pour travailler de façon sûre et répétable avec Claude Cowork.',
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
        title: 'Livres blancs',
        links: [
          { text: 'Tous les livres blancs', url: '/whitepapers/' },
          { text: 'WP-00 — De Zéro à Productif', url: '/whitepapers/#wp-00' },
          { text: 'WP-09 — Sécurité & Confidentialité', url: '/whitepapers/#wp-09' },
          { text: 'WP-11 — ROI & Déploiement', url: '/whitepapers/#wp-11' },
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
