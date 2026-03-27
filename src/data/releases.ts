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
    version: 'v1.8.0',
    date: 'Mar 27, 2026',
    highlights: [
      '⭐ <strong>Computer Use</strong> (research preview, Pro et Max, macOS) — Claude contrôle directement le bureau : ouvrir des apps, cliquer, remplir des formulaires, naviguer. Setup Step 9 documenté avec permissions macOS + QR code Dispatch',
      '⭐ <strong>Applications interactives sur iOS et Android</strong> — graphiques live, croquis et contenu partageable dans l\'app mobile (extension des visuels interactifs desktop v1.6.1)',
      'Changed: <strong>Dispatch</strong> — détails QR code pairing + limitations (thread unique, apps natives Mac non supportées)',
      'Changed: Cowork disponible sur <strong>Team et Enterprise</strong> — availability matrix corrigée',
      'Fixed: <strong>Audit Logs / Compliance API</strong> ne capturent pas l\'activité Cowork — avertissement secteurs réglementés (finance, santé, légal) ajouté dans le Security guide',
    ],
    latest: true,
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
]

export const breakingChanges: BreakingChange[] = []