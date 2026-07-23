export interface Release {
  version: string
  date: string
  highlights: string[]
  breaking?: string[]
  latest?: boolean
  initiallyVisible?: boolean
  featured?: boolean
  featuredLabel?: string
}

export interface BreakingChange {
  badge: string
  description: string
}

export const releases: Release[] = [
  {
    version: 'v1.12.0',
    date: 'Jul 22, 2026',
    highlights: [
      '⭐ <strong>Claude Cowork sur web et mobile</strong> (bêta, Max d\'abord) — sessions et fichiers sauvegardés sur le compte Claude, accessibles depuis claude.ai, iPhone, iPad et Android. Tâches exécutées dans le cloud sans appareil connecté',
      '⭐ <strong>Chat et Cowork fusionnés</strong> — les onglets séparés disparaissent au profit d\'une vue unique, sur web et desktop',
      '⭐ <strong>Microsoft 365 : outils d\'écriture</strong> — le connecteur passe en écriture (emails, calendrier, OneDrive, SharePoint). Teams reste en lecture seule. Consentement admin requis',
      '⭐ <strong>Reflect + Time and focus</strong> (bêta Free/Pro/Max) — temps passé par sujet, jour actif, heure de pointe ; rappels de pause et heures calmes. Mémoire requise',
      '<strong>Configuration HIPAA en self-service</strong> (Enterprise/API) — BAA, guide d\'implémentation et activation dans un parcours unifié, sans passer par le support',
      '<strong>Admin API Claude Enterprise</strong> (bêta) — gestion des membres claude.ai par API : rôles, invitations, groupes, rôles custom',
      '<strong>Configuration managée Cowork</strong> — <code>otlpTracesEnabled</code>, <code>toolSearchEnabled</code>, <code>allowedPluginMarketplaces</code> par utilisateur, <code>disableFeatureDiscovery</code>',
      '<strong>Mémoire par entrées catégorisées</strong> — la mémoire devient un ensemble d\'entrées que Claude lit et met à jour, en remplacement du résumé quotidien',
      'Fixed: <strong>Cowork indisponible sur ChromeOS</strong> — plus d\'accès terminal proposé sur les OS incapables de fournir la virtualisation nécessaire à l\'environnement isolé',
    ],
    breaking: [
      'Desktop Extensions désactivées par défaut (déploiements administrés) — <code>isDesktopExtensionEnabled</code> passe de <code>true</code> à <code>false</code>. Les extensions <code>.dxt</code> et <code>.mcpb</code> ne se chargent plus tant qu\'un admin ne l\'autorise pas',
    ],
    latest: true,
    initiallyVisible: true,
    featured: true,
    featuredLabel: '⭐ Cowork sur web et mobile + fusion Chat/Cowork',
  },
  {
    version: 'v1.11.0',
    date: 'Jul 4, 2026',
    highlights: [
      '⭐ <strong>Claude Fable 5</strong> — premier modèle Mythos-class grand public : contexte 1M, output 128K, adaptive thinking. Suspendu le 12 juin (export controls US), restauré le 1er juillet avec classifieur renforcé',
      '⭐ <strong>Claude Sonnet 5</strong> — nouveau modèle par défaut Free/Pro, proche d\'Opus 4.8 à coût inférieur. API : $2/$10 par M tokens jusqu\'au 31 août',
      '⭐ <strong>Claude Opus 4.8</strong> — améliorations coding, agentic skills et raisonnement. Fallback de Fable 5 sur les sujets sensibles',
      '⭐ <strong>Claude Desktop bêta Linux</strong> — Ubuntu 22.04+/Debian 12+, onglets Chat/Cowork/Code, install <code>apt</code> ou <code>.deb</code>. Computer Use indisponible en bêta',
      '⭐ <strong>Claude Tag</strong> (bêta Team/Enterprise) — @Claude dans Slack : délégation de tâches, exécution asynchrone, mode ambient proactif, accès scopés',
      '⭐ <strong>Dynamic Workflows</strong> (research preview) — sous-agents parallèles dans une session unique pour les tâches longues, avec vérification intégrée',
      '⭐ <strong>Claude Science</strong> (bêta) — workbench scientifique sur claude.com/science : 60+ skills, rendu 3D natif, agent reviewer',
      'Édition des brouillons en place — surligner un passage d\'un draft (chat ou Cowork) et réviser directement dans l\'artifact',
      '<strong>Managed Agents</strong> — planification cron + vaults sécurisés. <strong>Connector Observability</strong> en public beta',
      'Enterprise — rôles admin personnalisés, Connector Access Controls, Compliance API (CrowdStrike, Palo Alto, SentinelOne, Wiz), sandboxes self-hosted + MCP tunnels, model entitlements (bêta)',
    ],
    initiallyVisible: true,
    featured: true,
    featuredLabel: '⭐ Fable 5 + Sonnet 5 + bêta Linux',
  },
  {
    version: 'v1.10.0',
    date: 'May 16, 2026',
    highlights: [
      '⭐ <strong>Claude Opus 4.7</strong> — nouveau modèle : vision haute résolution 3x, auto-correction améliorée, effort <code>xhigh</code>. Même prix qu\'Opus 4.6',
      '⭐ <strong>Claude Design</strong> (research preview) — créer designs, slides et prototypes par conversation. Import DOCX/PPTX, export PDF/PPTX/HTML/Canva. Propulsé par Opus 4.7',
      '⭐ <strong>9 Creative Connectors</strong> — Ableton, Adobe CC (50+ outils), Affinity by Canva, Autodesk Fusion, Blender, Resolume Arena & Wire, SketchUp, Splice',
      '⭐ <strong>Claude for Small Business</strong> — 7 connecteurs préinstallés (QuickBooks, PayPal, HubSpot, Canva, Docusign, Google Workspace, Microsoft 365) + 15 workflows agentic + 15 skills',
      '⭐ <strong>Claude for Legal</strong> — 12 plugins par domaine de pratique + 20+ connecteurs MCP (iManage, Westlaw, LexisNexis, Harvey, Relativity, Ironclad…)',
      '⭐ <strong>Agents for Financial Services</strong> — 10 templates d\'agents + 8 connecteurs financiers (Moody\'s, D&B, Verisk, Experian, GLG, IBISWorld…)',
      'Limites d\'usage doublées (SpaceX Colossus 1) — plus de throttling aux heures de pointe pour Pro/Max/Team/Enterprise',
      '<strong>Claude Security</strong> (Enterprise beta) — scan de codebases, rapports vulnérabilités, patchs ciblés. Partenaires : CrowdStrike, Palo Alto, SentinelOne, Wiz',
      '<strong>Outlook add-in</strong> (beta) + <strong>Word</strong> GA — 4 add-ins Office avec contexte partagé',
    ],
    initiallyVisible: true,
    featured: true,
    featuredLabel: '⭐ Opus 4.7 + Claude for Small Business + Legal',
  },
  {
    version: 'v1.9.0',
    date: 'Apr 11, 2026',
    highlights: [
      '⭐ <strong>Cowork GA</strong> — disponibilité générale sur macOS et Windows. Fini le "research preview" — disponible Pro, Max, Team et Enterprise',
      '⭐ <strong>Connecteur Zoom MCP</strong> — nouveau connecteur officiel : réunions, transcripts, automatisation depuis Cowork',
      '⭐ <strong>Contrôle d\'accès par rôle</strong> (Enterprise) — groupes, rôles personnalisés, activation Cowork par équipe',
      '⭐ <strong>Analytics d\'utilisation</strong> (Enterprise) — monitoring d\'activité et reporting par équipe via Analytics API',
      '<strong>Limites de dépenses</strong> par groupe (Enterprise) — plafonds budgétaires par département',
      '<strong>OpenTelemetry</strong> étendu — connecter l\'activité Cowork à Datadog, Grafana, etc.',
      '<strong>Smart Skills Loading</strong> — les Skills ne consomment plus l\'intégralité du contexte',
    ],
    initiallyVisible: true,
    featured: true,
    featuredLabel: '⭐ Cowork GA + Enterprise controls',
  },
  {
    version: 'v1.8.1',
    date: 'Apr 1, 2026',
    highlights: [
      '⭐ <strong>Computer Use — hiérarchie d\'accès documentée</strong> — tableau 3 niveaux : connectors → Chrome → contrôle écran direct, avec implications de performance',
      'Security: <strong>warnings officiels Anthropic</strong> pour Computer Use — interdiction santé, finance, données personnelles. Nouvelle section Security Guide avec tableau de risques par catégorie d\'app',
      'Docs: <strong>Computer Use hors VM</strong> — précision critique : le contrôle écran opère sur votre bureau réel, pas dans la VM isolée',
      'FAQ: <strong>Dispatch vs Channels</strong> — clarifie la confusion Telegram/Discord (Channels = Claude Code CLI, pas Cowork)',
    ],
    initiallyVisible: true,
    featured: true,
    featuredLabel: '⭐ Computer Use — sécurité & hiérarchie',
  },
  {
    version: 'v1.8.0',
    date: 'Mar 27, 2026',
    highlights: [
      '⭐ <strong>Computer Use</strong> (research preview, Pro et Max, macOS) — Claude contrôle directement le bureau : ouvrir des apps, cliquer, remplir des formulaires, naviguer. Setup Step 9 documenté avec permissions macOS + QR code Dispatch',
      '⭐ <strong>Applications interactives sur iOS et Android</strong> — graphiques live, croquis et contenu partageable dans l\'app mobile (extension des visuels interactifs desktop v1.6.1)',
      'Changed: <strong>Dispatch</strong> — détails QR code pairing + limitations (thread unique, apps natives Mac non supportées)',
      'Changed: Cowork disponible sur <strong>Team et Enterprise</strong> — availability matrix corrigée',
      'Fixed: <strong>Audit Logs / Compliance API</strong> ne capturent pas l\'activité Cowork — avertissement secteurs réglementés (finance, santé, légal) ajouté dans le Security guide',
    ],
    initiallyVisible: true,
    featured: true,
    featuredLabel: '⭐ Computer Use dans Cowork',
  },
  {
    version: 'v1.7.0',
    date: 'Mar 22, 2026',
    highlights: [
      '⭐ <strong>Claude Dispatch</strong> (research preview Max → Pro) — contrôler Cowork depuis son smartphone : tâches envoyées du mobile, exécutées sur desktop, fichiers locaux, sandbox, approbation requise',
      '⭐ <strong>Projects dans Cowork</strong> — workspaces persistants par zone de travail : fichiers, contexte, instructions et mémoire associés. Import en 1 clic ou départ de zéro',
      'New workflow: <strong>PPTX reusable template</strong> — variation "Reusable template from existing file" (3 étapes, prompts copy-paste)',
      'Changed: <strong>LLM Gateway</strong> pour add-ins Excel × PowerPoint — Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry',
    ],
    initiallyVisible: true,
    featured: true,
    featuredLabel: '⭐ Claude Dispatch + Projects',
  },
  {
    version: 'v1.6.1',
    date: 'Mar 17, 2026',
    highlights: [
      '⭐ <strong>Visuels interactifs</strong> (bêta) — graphiques, diagrammes et mini-apps HTML/JS directement dans le chat : sliders, arbres de décision, météo, recettes, inputs à choix multiples',
      '<strong>Excel × PowerPoint Skills</strong> — slash commands dans les add-ins (<code>/quarterly-update</code>) + contexte complet partagé entre les deux apps',
      'Promotion: limites d\'utilisation doublées hors heures de pointe jusqu\'au 27 mars (tous plans sauf Enterprise)',
    ],
    initiallyVisible: true,
    featured: true,
    featuredLabel: '⭐ Visuels interactifs',
  },
  {
    version: 'v1.6.0',
    date: 'Mar 4, 2026',
    highlights: [
      '⭐ <strong>Claude in Chrome</strong> (bêta) — extension Chrome pour tous plans payants : multi-onglets, tâches navigateur planifiées, <code>/slash commands</code>',
      '⭐ <strong>Import Memory</strong> — migration depuis ChatGPT/Gemini/Copilot via prompt Anthropic dédié',
      '⭐ <strong>Acquisition Vercept</strong> — Computer Use benchmark OSWorld 72.5% (vs 15% fin 2024)',
      '<strong>Instructions globales et par dossier</strong> dans Cowork (complément aux tâches planifiées)',
      '<strong>Desktop Extensions</strong> — interface graphique d\'installation MCP (accessible non-développeurs)',
      'Changed: <strong>Memory</strong> désormais disponible pour tous y compris tier gratuit',
      'Changed: <strong>Claude in Excel × PowerPoint</strong> — workflows cross-app dans le même contexte',
    ],
    initiallyVisible: true,
    featured: true,
    featuredLabel: '⭐ Claude in Chrome + Import Memory',
  },
  {
    version: 'v1.5.1',
    date: 'Mar 4, 2026',
    highlights: [
      'New <code>audit-prompt.md</code> for French linguistic accessibility auditing',
      'Translated ~70 prompts EN→FR across file-ops, document-creation, research, data-extraction',
      'Docs: terminology corrections — anglicismes replaced throughout overview',
    ],
    initiallyVisible: true,
  },
  {
    version: 'v1.5.0',
    date: 'Feb 28, 2026',
    highlights: [
      '⭐ <strong>Desktop Commander</strong> — Step 8 in Getting Started with cross-session memory via <code>memory.md</code>',
      '⭐ <strong>Customize Tab</strong> — full documentation: Skills, Connectors, permissions system',
      '⭐ <strong>Skills system</strong> — slash commands (<code>/pdf</code>, <code>/docx</code>, <code>/xlsx</code>), skill chaining, community registries',
      '⭐ <strong>MCP Connectors</strong> — 3 types (web, desktop, custom JSON) with per-tool permissions',
      '12 new MCP connectors: Google Calendar, Gmail, DocuSign, WordPress, Apollo, Clay, Outreach, Similarweb, Harvey, LegalZoom + finance',
      '<strong>Sonnet 4.6</strong> as recommended default model (replaces Opus for agentic tasks)',
      'New workflows: Scheduled Automation + Memory Setup (FR + EN) — workflow count 26 → 28',
    ],
    initiallyVisible: true,
    featured: true,
    featuredLabel: '⭐ Desktop Commander + Skills',
  },
  {
    version: 'v1.4.0',
    date: 'Feb 18, 2026',
    highlights: [
      '⭐ <strong>Windows support</strong> — Claude Cowork now available on macOS and Windows',
      '⭐ <strong>11 official Plugins</strong> — Asana, Canva, Cloudflare, Figma, GitHub, Google Drive, Jira, Linear, Notion, Sentry, Slack',
      '⭐ <strong>Scheduled tasks</strong> — automate recurring Claude tasks',
      '⭐ <strong>Agent Teams</strong> (research preview) — coordinate multiple Claude agents',
      '<strong>Opus 4.6</strong>: 1M token context (beta), 128K output tokens, adaptive thinking',
      'Context compaction (beta): automatic conversation history compression',
    ],
    initiallyVisible: true,
    featured: true,
    featuredLabel: '⭐ Windows + 11 Plugins',
  },
  {
    version: 'v1.3.1',
    date: 'Feb 6, 2026',
    highlights: [
      '⭐ <strong>Claude Legal Extension</strong> — first official Plugin: contract review, risk detection, NDA triage, compliance tracking',
      'Capabilities section: new Extensions & Plugins documentation (EN + FR)',
      'FAQ: new "What is Claude Legal?" Q&A entry',
    ],
    initiallyVisible: true,
    featured: true,
    featuredLabel: '⭐ Claude Legal Extension',
  },
  {
    version: 'v1.3.0',
    date: 'Feb 3, 2026',
    highlights: [
      'Model tables: Haiku added, Opus 4.5 clarification (4.0/4.1 retired from selector)',
      'macOS terminology: System Preferences → System Settings (Ventura+)',
      'Docs: Cloud Connectors status clarified, workflow categorization fixed',
      'Removed deprecated workflows: report-synthesis, team-handoff',
    ],
    initiallyVisible: false,
  },
  {
    version: 'v1.2.1',
    date: 'Jan 27, 2026',
    highlights: [
      'Work Log workflow: Weekly/Monthly Progress Reporting section',
      'Client Follow-up Tracker: Client Onboarding Checklist section',
    ],
    initiallyVisible: false,
  },
  {
    version: 'v1.2.0',
    date: 'Jan 23, 2026',
    highlights: [
      '⭐ <strong>New workflow: Website Audit</strong> — 25-point evaluation grid, competitive benchmark',
      'Email Sequences: 2 complete automated sequences (Relance Devis, Réactivation)',
      'Local Visibility Audit: Google My Business comparison section',
    ],
    initiallyVisible: true,
    featured: true,
    featuredLabel: '⭐ Website Audit workflow',
  },
  {
    version: 'v1.1.0',
    date: 'Jan 20, 2026',
    highlights: [
      '⭐ <strong>25 workflows TPE/PME</strong> — expansion 5 → 25, focus artisans, commerçants, dirigeants français',
      '⭐ <strong>4 catégories métiers</strong> — Administratif (6), Commercial (5), Production (5), Communication (4)',
      'Références françaises : SIREN, Infogreffe, URSSAF, Qualibat, TVA 20%',
    ],
    initiallyVisible: true,
    featured: true,
    featuredLabel: '⭐ 25 workflows TPE/PME',
  },
  {
    version: 'v1.0.0',
    date: 'Jan 20, 2026',
    highlights: [
      '⭐ <strong>Release initiale</strong> — 5 guides + 5 workflows + 67 prompts copy-paste',
      '⭐ <strong>Framework CTOC</strong> — Context → Task → Output → Constraints',
      'Plateforme macOS (research preview), plans Pro et Max',
    ],
    initiallyVisible: true,
    featured: true,
    featuredLabel: '⭐ Release initiale',
  },
]

export const breakingChanges: BreakingChange[] = []