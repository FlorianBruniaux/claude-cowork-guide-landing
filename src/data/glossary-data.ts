export interface GlossaryTerm {
  id: string
  letter: string
  term: string
  termFr?: string
  definition: string
  definitionFr: string
  category: GlossaryCategory
  link?: string
}

export type GlossaryCategory = 'Cowork' | 'AI' | 'Workflow' | 'Security' | 'Ecosystem'

export const categoryColors: Record<GlossaryCategory, string> = {
  'Cowork':    'badge-cowork',
  'AI':        'badge-ai',
  'Workflow':  'badge-workflow',
  'Security':  'badge-security',
  'Ecosystem': 'badge-ecosystem',
}

export const glossaryTerms: GlossaryTerm[] = [
  // A
  {
    id: 'agentic',
    letter: 'A',
    term: 'Agentic',
    termFr: 'Agentique',
    definition: 'Describes AI systems that autonomously plan and execute multi-step tasks with minimal human intervention. Cowork is "agentic" because it analyzes your request, creates a plan, and executes it with your approval.',
    definitionFr: 'Décrit des systèmes IA capables de planifier et exécuter des tâches multi-étapes de manière autonome avec une intervention humaine minimale. Cowork est "agentique" car il analyse votre requête, crée un plan et l\'exécute après votre approbation.',
    category: 'AI',
  },
  {
    id: 'agent-teams',
    letter: 'A',
    term: 'Agent Teams',
    termFr: 'Équipes d\'agents',
    definition: 'Research preview feature enabling multi-agent coordination where multiple Claude agents work together on complex tasks. One agent orchestrates others, each handling a specialized sub-task in parallel.',
    definitionFr: 'Fonctionnalité en preview permettant la coordination multi-agents où plusieurs agents Claude travaillent ensemble sur des tâches complexes. Un agent orchestre les autres, chacun gérant une sous-tâche spécialisée en parallèle.',
    category: 'AI',
  },
  {
    id: 'approval-gate',
    letter: 'A',
    term: 'Approval Gate',
    termFr: 'Porte d\'approbation',
    definition: 'The checkpoint where Cowork shows its planned actions and waits for your confirmation before executing. Critical security measure — always review before approving.',
    definitionFr: 'Le point de contrôle où Cowork montre ses actions planifiées et attend votre confirmation avant d\'exécuter. Mesure de sécurité critique — toujours vérifier avant d\'approuver.',
    category: 'Security',
  },
  {
    id: 'artifact',
    letter: 'A',
    term: 'Artifact',
    termFr: 'Artefact',
    definition: 'A file created by Claude (document, spreadsheet, image, etc.) during a Cowork session. Artifacts appear in Claude\'s interface where you can preview, edit, or download them.',
    definitionFr: 'Un fichier créé par Claude (document, tableur, image, etc.) pendant une session Cowork. Les artefacts apparaissent dans l\'interface de Claude où vous pouvez les prévisualiser, modifier ou télécharger.',
    category: 'Cowork',
  },
  // C
  {
    id: 'claude-desktop',
    letter: 'C',
    term: 'Claude Desktop',
    definition: 'The macOS and Windows application that hosts Cowork. Different from the web interface (claude.ai).',
    definitionFr: 'L\'application macOS et Windows qui héberge Cowork. Différente de l\'interface web (claude.ai).',
    category: 'Cowork',
  },
  {
    id: 'context-compaction',
    letter: 'C',
    term: 'Context Compaction',
    termFr: 'Compaction de contexte',
    definition: 'Beta feature that automatically compresses conversation history during long sessions. Allows much longer effective sessions by keeping relevant context while removing redundant information.',
    definitionFr: 'Fonctionnalité beta qui compresse automatiquement l\'historique de conversation pendant les sessions longues. Permet des sessions bien plus longues en gardant le contexte pertinent tout en supprimant les informations redondantes.',
    category: 'AI',
  },
  {
    id: 'context-limit',
    letter: 'C',
    term: 'Context Limit',
    termFr: 'Limite de contexte',
    definition: 'The maximum amount of text/data Claude can process in a single session (~200K tokens). When exceeded, tasks may fail or produce incomplete results.',
    definitionFr: 'La quantité maximale de texte/données que Claude peut traiter dans une seule session (~200K tokens). Quand dépassée, les tâches peuvent échouer ou produire des résultats incomplets.',
    category: 'AI',
  },
  {
    id: 'context-window',
    letter: 'C',
    term: 'Context Window',
    termFr: 'Fenêtre de contexte',
    definition: 'The "memory" space where Claude holds your conversation and file contents during a session. Measured in tokens.',
    definitionFr: 'L\'espace "mémoire" où Claude conserve votre conversation et le contenu des fichiers pendant une session. Mesuré en tokens.',
    category: 'AI',
  },
  {
    id: 'cowork',
    letter: 'C',
    term: 'Cowork',
    definition: 'Claude\'s agentic desktop feature for knowledge workers. Accesses and manipulates files directly on your computer without requiring code execution.',
    definitionFr: 'La fonctionnalité desktop agentique de Claude pour les travailleurs du savoir. Accède et manipule les fichiers directement sur votre ordinateur sans nécessiter d\'exécution de code.',
    category: 'Cowork',
    link: 'https://cowork.bruniaux.com/guide/',
  },
  {
    id: 'customize-tab',
    letter: 'C',
    term: 'Customize Tab',
    termFr: 'Onglet Personnaliser',
    definition: 'The settings area in Claude Desktop for managing Skills, Connectors, and personalizations. Install skills, configure external tool connections, and set per-tool permissions.',
    definitionFr: 'L\'espace de configuration dans Claude Desktop pour gérer les Compétences, les Connecteurs et les personnalisations. Installez des compétences, configurez des connexions avec des outils externes et définissez des permissions par outil.',
    category: 'Cowork',
  },
  // D
  {
    id: 'desktop-commander',
    letter: 'D',
    term: 'Desktop Commander',
    definition: 'Official Cowork extension installed from the Customize tab. Enables file system access beyond the workspace folder, cross-session memory via a memory.md file, and one-click MCP server installation.',
    definitionFr: 'Extension officielle de Cowork installée depuis l\'onglet Personnaliser. Active l\'accès au système de fichiers au-delà du dossier workspace, la mémoire cross-session via memory.md, et l\'installation de serveurs MCP en un clic.',
    category: 'Ecosystem',
  },
  // E
  {
    id: 'execution-plan',
    letter: 'E',
    term: 'Execution Plan',
    termFr: 'Plan d\'exécution',
    definition: 'The detailed list of actions Cowork proposes before starting work. Shows what files will be affected and how. Review this carefully before approving.',
    definitionFr: 'La liste détaillée des actions que Cowork propose avant de commencer le travail. Montre quels fichiers seront affectés et comment. Vérifiez attentivement avant d\'approuver.',
    category: 'Workflow',
  },
  {
    id: 'extended-thinking',
    letter: 'E',
    term: 'Extended Thinking',
    termFr: 'Pensée étendue',
    definition: 'Claude\'s ability to reason through complex problems step-by-step before responding. Produces more accurate results for multi-step tasks at the cost of slightly longer wait times.',
    definitionFr: 'La capacité de Claude à raisonner à travers des problèmes complexes étape par étape avant de répondre. Produit des résultats plus précis pour les tâches multi-étapes, au coût d\'un temps d\'attente légèrement plus long.',
    category: 'AI',
  },
  // F
  {
    id: 'folder-sandbox',
    letter: 'F',
    term: 'Folder Sandbox',
    termFr: 'Sandbox de dossier',
    definition: 'The restricted area where Cowork can operate. You grant access to specific folders; Cowork cannot access anything outside this boundary. Core security mechanism.',
    definitionFr: 'La zone restreinte où Cowork peut opérer. Vous accordez l\'accès à des dossiers spécifiques ; Cowork ne peut rien accéder en dehors de cette limite. Mécanisme de sécurité central.',
    category: 'Security',
  },
  // K
  {
    id: 'knowledge-worker',
    letter: 'K',
    term: 'Knowledge Worker',
    termFr: 'Travailleur du savoir',
    definition: 'Non-technical professionals who work primarily with information and documents — project managers, analysts, writers, consultants. Cowork\'s primary target audience.',
    definitionFr: 'Professionnels non techniques qui travaillent principalement avec l\'information et les documents — chefs de projet, analystes, rédacteurs, consultants. L\'audience cible principale de Cowork.',
    category: 'Cowork',
  },
  // L
  {
    id: 'local-first',
    letter: 'L',
    term: 'Local-First',
    definition: 'Design principle where data and processing stay on your computer rather than in the cloud. Cowork accesses local files only — nothing is uploaded without your explicit action.',
    definitionFr: 'Principe de design où les données et le traitement restent sur votre ordinateur plutôt que dans le cloud. Cowork accède uniquement aux fichiers locaux — rien n\'est téléchargé sans votre action explicite.',
    category: 'Security',
  },
  // M
  {
    id: 'mcp-connector',
    letter: 'M',
    term: 'MCP Connector',
    termFr: 'Connecteur MCP',
    definition: 'Model Context Protocol integration allowing Cowork to interact with external tools and services. Three types: web search, desktop/local files, and custom JSON. No coding required for setup.',
    definitionFr: 'Intégration Model Context Protocol permettant à Cowork d\'interagir avec des outils et services externes. Trois types : recherche web, desktop/fichiers locaux, et JSON personnalisé. Aucun code requis pour la configuration.',
    category: 'Ecosystem',
  },
  {
    id: 'memory-file',
    letter: 'M',
    term: 'Memory File',
    termFr: 'Fichier mémoire',
    definition: 'A markdown file (typically memory.md) used with Desktop Commander to persist context across sessions. Contains business context, client preferences, and recurring task information.',
    definitionFr: 'Un fichier markdown (typiquement memory.md) utilisé avec Desktop Commander pour conserver le contexte entre les sessions. Contient le contexte métier, les préférences clients et les informations de tâches récurrentes.',
    category: 'Workflow',
  },
  {
    id: 'multi-step-task',
    letter: 'M',
    term: 'Multi-Step Task',
    termFr: 'Tâche multi-étapes',
    definition: 'An operation requiring multiple sequential actions, e.g. "read files → analyze → create report → organize output." Cowork excels at automating these without requiring code.',
    definitionFr: 'Une opération nécessitant plusieurs actions séquentielles, ex. "lire fichiers → analyser → créer rapport → organiser résultat." Cowork excelle à automatiser ces tâches sans code.',
    category: 'Workflow',
  },
  // O
  {
    id: 'ocr',
    letter: 'O',
    term: 'OCR',
    definition: 'Optical Character Recognition. Technology that extracts text from images and scanned documents. Cowork uses OCR to read receipts, screenshots, and PDFs that are image-based.',
    definitionFr: 'Reconnaissance optique de caractères. Technologie qui extrait du texte depuis des images et documents scannés. Cowork utilise l\'OCR pour lire les reçus, captures d\'écran et PDFs en format image.',
    category: 'Cowork',
  },
  {
    id: 'orchestrator',
    letter: 'O',
    term: 'Orchestrator',
    termFr: 'Orchestrateur',
    definition: 'The main Cowork agent that receives your request, creates the execution plan, coordinates sub-agents, and assembles the final result.',
    definitionFr: 'L\'agent Cowork principal qui reçoit votre requête, crée le plan d\'exécution, coordonne les sous-agents et assemble le résultat final.',
    category: 'AI',
  },
  // P
  {
    id: 'plugin',
    letter: 'P',
    term: 'Plugin',
    definition: 'Official third-party integration that extends Cowork\'s capabilities. Examples: Asana, Canva, Figma, GitHub, Google Drive, Jira, Notion, Slack. Allows direct service interaction without browser automation.',
    definitionFr: 'Intégration tierce officielle qui étend les capacités de Cowork. Exemples : Asana, Canva, Figma, GitHub, Google Drive, Jira, Notion, Slack. Permet l\'interaction directe avec les services sans automatisation navigateur.',
    category: 'Ecosystem',
  },
  {
    id: 'prompt',
    letter: 'P',
    term: 'Prompt',
    definition: 'The instructions you give to Claude. Can range from simple ("organize these files alphabetically") to complex multi-step workflows. Clear, specific prompts produce better results.',
    definitionFr: 'Les instructions que vous donnez à Claude. Peut aller du simple ("organise ces fichiers par ordre alphabétique") à des workflows multi-étapes complexes. Des prompts clairs et spécifiques donnent de meilleurs résultats.',
    category: 'Workflow',
  },
  {
    id: 'prompt-injection',
    letter: 'P',
    term: 'Prompt Injection',
    termFr: 'Injection de prompt',
    definition: 'A security attack where malicious instructions are hidden inside files (PDFs, documents) attempting to manipulate Claude\'s behavior. Mitigation: only process files from trusted sources.',
    definitionFr: 'Attaque de sécurité où des instructions malveillantes sont cachées dans des fichiers (PDFs, documents) pour tenter de manipuler le comportement de Claude. Protection : traiter uniquement des fichiers de sources fiables.',
    category: 'Security',
  },
  // S
  {
    id: 'scheduled-tasks',
    letter: 'S',
    term: 'Scheduled Tasks',
    termFr: 'Tâches planifiées',
    definition: 'Feature allowing automated recurring Cowork operations on a set schedule — e.g. daily report compilation, weekly file organization. Removes the need to manually trigger repetitive tasks.',
    definitionFr: 'Fonctionnalité permettant d\'automatiser des opérations Cowork récurrentes selon un calendrier — ex. compilation de rapport quotidien, organisation de fichiers hebdomadaire. Supprime le besoin de déclencher manuellement les tâches répétitives.',
    category: 'Workflow',
  },
  {
    id: 'skill',
    letter: 'S',
    term: 'Skill',
    termFr: 'Compétence',
    definition: 'Add-on capability for Cowork, installed via the Customize tab. Invoked via slash commands (e.g. /pdf, /docx, /xlsx). Skills extend what Cowork can do beyond its defaults.',
    definitionFr: 'Capacité supplémentaire pour Cowork, installée via l\'onglet Personnaliser. S\'active via des commandes / (ex. /pdf, /docx, /xlsx). Les compétences étendent ce que Cowork peut faire au-delà de ses fonctions par défaut.',
    category: 'Cowork',
  },
  {
    id: 'skill-chaining',
    letter: 'S',
    term: 'Skill Chaining',
    termFr: 'Enchaînement de compétences',
    definition: 'Combining multiple skills in a single workflow. Example: /pdf to extract content from a document, then /xlsx to organize it into a spreadsheet. Skills execute sequentially.',
    definitionFr: 'Combinaison de plusieurs compétences dans un même workflow. Exemple : /pdf pour extraire le contenu d\'un document, puis /xlsx pour l\'organiser en tableur. Les compétences s\'exécutent séquentiellement.',
    category: 'Workflow',
  },
  {
    id: 'slash-command',
    letter: 'S',
    term: 'Slash Command',
    termFr: 'Commande /',
    definition: 'A shortcut for invoking a skill in Cowork. Type the slash command at the start of your message — e.g. /pdf, /docx, /xlsx, /canvas-design.',
    definitionFr: 'Un raccourci pour invoquer une compétence dans Cowork. Tapez la commande / au début de votre message — ex. /pdf, /docx, /xlsx, /canvas-design.',
    category: 'Cowork',
  },
  {
    id: 'sub-agent',
    letter: 'S',
    term: 'Sub-Agent',
    termFr: 'Sous-agent',
    definition: 'Specialized worker spawned by the orchestrator to handle a specific part of a task. Each sub-agent has fresh context and can work in parallel with others.',
    definitionFr: 'Travailleur spécialisé généré par l\'orchestrateur pour gérer une partie spécifique d\'une tâche. Chaque sous-agent a un contexte frais et peut travailler en parallèle avec les autres.',
    category: 'AI',
  },
  // T
  {
    id: 'token',
    letter: 'T',
    term: 'Token',
    definition: 'The unit Claude uses to measure text. Roughly 4 characters or 0.75 words. Used to calculate context limits and usage costs.',
    definitionFr: 'L\'unité que Claude utilise pour mesurer le texte. Environ 4 caractères ou 0,75 mots. Utilisé pour calculer les limites de contexte et les coûts d\'utilisation.',
    category: 'AI',
  },
  // W
  {
    id: 'workflow',
    letter: 'W',
    term: 'Workflow',
    definition: 'A repeatable sequence of actions that transforms input into output — like a recipe you can reuse. Example: "read files → process → create output." Cowork can automate 28+ documented workflows.',
    definitionFr: 'Une séquence d\'actions répétable qui transforme une entrée en sortie — comme une recette réutilisable. Exemple : "lire fichiers → traiter → créer résultat." Cowork peut automatiser 28+ workflows documentés.',
    category: 'Workflow',
    link: '/guide/workflows/',
  },
  {
    id: 'workspace',
    letter: 'W',
    term: 'Workspace',
    definition: 'The dedicated folder structure for Cowork operations. Best practice: ~/Cowork-Workspace/ with input/ and output/ subfolders. Cowork operates within this boundary by default.',
    definitionFr: 'La structure de dossiers dédiée pour les opérations Cowork. Bonne pratique : ~/Cowork-Workspace/ avec les sous-dossiers input/ et output/. Cowork opère dans cette limite par défaut.',
    category: 'Security',
  },
]

export function groupByLetter(terms: GlossaryTerm[]): Map<string, GlossaryTerm[]> {
  const map = new Map<string, GlossaryTerm[]>()
  for (const term of terms) {
    const existing = map.get(term.letter) ?? []
    existing.push(term)
    map.set(term.letter, existing)
  }
  return map
}
