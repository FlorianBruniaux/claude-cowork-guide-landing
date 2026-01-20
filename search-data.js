/**
 * Search Data - FAQ and Golden Rules
 * For Claude Cowork Guide search
 */

window.SEARCH_FAQ = [
    {
        id: 'faq-1',
        type: 'faq',
        title: 'What is Claude Cowork?',
        content: 'Claude Cowork is an AI assistant that can interact with your Mac applications to automate tasks like file organization, document creation, and data extraction.',
        url: '#faq'
    },
    {
        id: 'faq-2',
        type: 'faq',
        title: 'Is Cowork free to use?',
        content: 'No, Cowork requires a Claude Pro ($20/month) or Max ($100/month) subscription. It is not available on the free tier.',
        url: '#faq'
    },
    {
        id: 'faq-3',
        type: 'faq',
        title: 'Does Cowork work on Windows?',
        content: 'Currently, Cowork is only available on macOS. There is no announced timeline for Windows support.',
        url: '#faq'
    },
    {
        id: 'faq-4',
        type: 'faq',
        title: 'What applications can Cowork control?',
        content: 'Cowork can control Finder for file operations, create documents, read PDFs and images, access web browsers for research, and more.',
        url: '#faq'
    },
    {
        id: 'faq-5',
        type: 'faq',
        title: 'Is my data safe with Cowork?',
        content: 'Cowork requires explicit permission for each action. Create a dedicated workspace folder, never share credentials, and always review plans before approving.',
        url: '#faq'
    },
    {
        id: 'faq-6',
        type: 'faq',
        title: 'What are the token limits?',
        content: 'Pro tier has approximately 30M tokens per 5-hour window. Max tier has higher limits. Large file operations consume tokens rapidly.',
        url: '#faq'
    },
    {
        id: 'faq-7',
        type: 'faq',
        title: 'Can I undo actions in Cowork?',
        content: 'File moves can be tracked via reports. For reversibility, always work in a dedicated workspace and request reports of changes made.',
        url: '#faq'
    },
    {
        id: 'faq-8',
        type: 'faq',
        title: 'Why did my task fail midway?',
        content: 'Common causes: token limit reached, permission denied, file locked, or network timeout. Check troubleshooting guide for specific errors.',
        url: '#faq'
    },
    {
        id: 'faq-9',
        type: 'faq',
        title: 'How do I resume an interrupted task?',
        content: 'Use checkpoints and progress reports. If a task was interrupted, refer to the last report to see what was completed and resume from there.',
        url: '#faq'
    },
    {
        id: 'faq-10',
        type: 'faq',
        title: 'Difference between Cowork and Claude Code?',
        content: 'Cowork is for knowledge workers automating desktop tasks. Claude Code is for developers writing and editing code in the terminal.',
        url: '#comparison'
    }
];

window.SEARCH_RULES = [
    {
        id: 'rule-1',
        type: 'rule',
        title: 'Always review the plan before approving',
        content: 'Never approve blindly. Read what Cowork plans to do, check file paths, verify actions are what you expect.',
        url: '#golden-rules'
    },
    {
        id: 'rule-2',
        type: 'rule',
        title: 'Use a dedicated workspace folder',
        content: 'Create ~/Cowork-Workspace with input/ and output/ subfolders. Never let Cowork access your entire home directory.',
        url: '#golden-rules'
    },
    {
        id: 'rule-3',
        type: 'rule',
        title: 'Never share credentials or passwords',
        content: 'Do not paste passwords, API keys, tokens, or any credentials into Cowork. It does not need them for file operations.',
        url: '#golden-rules'
    },
    {
        id: 'rule-4',
        type: 'rule',
        title: 'Request reports for every operation',
        content: 'Always ask for a summary report showing what was done. This creates an audit trail and helps with recovery if needed.',
        url: '#golden-rules'
    },
    {
        id: 'rule-5',
        type: 'rule',
        title: 'Start small, scale gradually',
        content: 'Test with a few files before processing hundreds. Verify results before running large batch operations.',
        url: '#golden-rules'
    },
    {
        id: 'rule-6',
        type: 'rule',
        title: 'Keep backups of important files',
        content: 'Before major operations, ensure you have backups. Cowork can make mistakes, and file operations may be irreversible.',
        url: '#golden-rules'
    },
    {
        id: 'rule-7',
        type: 'rule',
        title: 'Monitor token usage for large tasks',
        content: 'Large file operations consume tokens rapidly. Plan batches accordingly and use checkpoints for resumability.',
        url: '#golden-rules'
    }
];
