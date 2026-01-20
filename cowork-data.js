/**
 * Cowork Guide Search Index
 * Entries for guide sections and workflows
 */

const GUIDE_BASE = 'https://github.com/FlorianBruniaux/claude-cowork-guide/blob/main/';

window.SEARCH_GUIDE = [
    // Main Guide
    {
        id: 'guide-intro',
        type: 'guide',
        title: 'Introduction to Claude Cowork',
        content: 'cowork overview what is getting started basics introduction beginner',
        url: GUIDE_BASE + 'README.md'
    },
    {
        id: 'guide-quick-start',
        type: 'guide',
        title: 'Quick Start Guide',
        content: 'quick start first steps setup install begin launch workspace',
        url: GUIDE_BASE + 'guide/01-quick-start.md'
    },
    {
        id: 'guide-core-concepts',
        type: 'guide',
        title: 'Core Concepts',
        content: 'concepts fundamentals how it works architecture understanding basics',
        url: GUIDE_BASE + 'guide/02-core-concepts.md'
    },
    {
        id: 'guide-security',
        type: 'guide',
        title: 'Security Best Practices',
        content: 'security safety permissions credentials passwords sensitive data protection',
        url: GUIDE_BASE + 'guide/03-security.md'
    },
    {
        id: 'guide-troubleshooting',
        type: 'guide',
        title: 'Troubleshooting Guide',
        content: 'troubleshoot problems issues errors fix debug help not working',
        url: GUIDE_BASE + 'guide/04-troubleshooting.md'
    },

    // Workflows
    {
        id: 'workflow-expense',
        type: 'workflow',
        title: 'Expense Tracking Workflow',
        content: 'receipts expenses tracking spreadsheet excel money budget finance invoices',
        category: 'Beginner',
        url: GUIDE_BASE + 'workflows/expense-tracking.md'
    },
    {
        id: 'workflow-file-org',
        type: 'workflow',
        title: 'File Organization Workflow',
        content: 'organize files folders cleanup sort rename downloads documents structure',
        category: 'Beginner',
        url: GUIDE_BASE + 'workflows/file-organization.md'
    },
    {
        id: 'workflow-research',
        type: 'workflow',
        title: 'Research Synthesis Workflow',
        content: 'research analysis synthesis competitive market study report summary',
        category: 'Intermediate',
        url: GUIDE_BASE + 'workflows/research-synthesis.md'
    },
    {
        id: 'workflow-document',
        type: 'workflow',
        title: 'Document Creation Workflow',
        content: 'create documents reports presentations word powerpoint writing drafting',
        category: 'Intermediate',
        url: GUIDE_BASE + 'workflows/document-creation.md'
    },
    {
        id: 'workflow-multi-step',
        type: 'workflow',
        title: 'Multi-Step Complex Workflow',
        content: 'complex advanced multi-step pipeline automation chain batch',
        category: 'Advanced',
        url: GUIDE_BASE + 'workflows/multi-step-complex.md'
    },

    // Reference
    {
        id: 'ref-faq',
        type: 'guide',
        title: 'Frequently Asked Questions',
        content: 'faq questions answers help common issues doubts queries',
        url: GUIDE_BASE + 'reference/faq.md'
    },
    {
        id: 'ref-comparison',
        type: 'guide',
        title: 'Cowork vs Other Tools',
        content: 'comparison copilot chatgpt claude code vs versus difference',
        url: GUIDE_BASE + 'reference/comparison.md'
    },
    {
        id: 'ref-glossary',
        type: 'guide',
        title: 'Glossary of Terms',
        content: 'glossary terms definitions vocabulary terminology dictionary',
        url: GUIDE_BASE + 'reference/glossary.md'
    },

    // Prompts Index
    {
        id: 'prompts-index',
        type: 'guide',
        title: 'Prompt Library Overview',
        content: 'prompts library templates examples ready-to-use collection',
        url: GUIDE_BASE + 'prompts/README.md'
    },
    {
        id: 'prompts-file-ops',
        type: 'guide',
        title: 'File Operations Prompts',
        content: 'file prompts organize rename cleanup filter move copy delete',
        url: GUIDE_BASE + 'prompts/file-ops.md'
    },
    {
        id: 'prompts-documents',
        type: 'guide',
        title: 'Document Creation Prompts',
        content: 'document prompts reports summaries presentations writing creation',
        url: GUIDE_BASE + 'prompts/document-creation.md'
    },
    {
        id: 'prompts-extraction',
        type: 'guide',
        title: 'Data Extraction Prompts',
        content: 'extraction prompts receipts pdf ocr images data parsing',
        url: GUIDE_BASE + 'prompts/data-extraction.md'
    },
    {
        id: 'prompts-research',
        type: 'guide',
        title: 'Research Prompts',
        content: 'research prompts competitive analysis market study web search',
        url: GUIDE_BASE + 'prompts/research.md'
    },

    // Topics
    {
        id: 'topic-workspace',
        type: 'guide',
        title: 'Workspace Setup',
        content: 'workspace folder directory input output setup structure',
        url: GUIDE_BASE + 'guide/01-quick-start.md#workspace-setup'
    },
    {
        id: 'topic-token-limits',
        type: 'guide',
        title: 'Token Limits & Usage',
        content: 'tokens limits usage context window rate limit budget consumption',
        url: GUIDE_BASE + 'guide/02-core-concepts.md#token-limits'
    },
    {
        id: 'topic-permissions',
        type: 'guide',
        title: 'Permission Management',
        content: 'permissions approve deny allow block access control authorization',
        url: GUIDE_BASE + 'guide/03-security.md#permission-management'
    },
    {
        id: 'topic-recovery',
        type: 'guide',
        title: 'Error Recovery',
        content: 'error recovery fix undo rollback restore recover mistake',
        url: GUIDE_BASE + 'guide/04-troubleshooting.md#error-recovery'
    },
    {
        id: 'topic-checkpoints',
        type: 'guide',
        title: 'Using Checkpoints',
        content: 'checkpoints save restore state progress batch resume',
        url: GUIDE_BASE + 'guide/02-core-concepts.md#checkpoints'
    },
    {
        id: 'topic-batch-processing',
        type: 'guide',
        title: 'Batch Processing',
        content: 'batch processing large files multiple many bulk automation',
        url: GUIDE_BASE + 'guide/02-core-concepts.md#batch-processing'
    }
];
