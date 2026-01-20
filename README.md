# Claude Cowork Guide - Landing Site

Landing site for the [Claude Cowork Guide](https://github.com/FlorianBruniaux/claude-cowork-guide).

## Live Site

**URL**: [florianbruniaux.github.io/claude-cowork-guide-landing](https://florianbruniaux.github.io/claude-cowork-guide-landing)

## Features

- **Global Search** (Cmd+K / Ctrl+K) - Fuzzy search across prompts, workflows, FAQ, and guide sections
- **Prompt Library** - 67 ready-to-use prompts across 4 categories
- **Workflow Gallery** - 5 complete workflows for knowledge workers
- **Golden Rules** - Security and best practices for non-technical users
- **Cross-linking** - Integrated navigation to Claude Code Guide for developers
- **Mobile Responsive** - Hamburger menu for tablet/mobile (< 768px)

## Structure

```
claude-cowork-guide-landing/
├── index.html           # Main landing page
├── styles.css           # Shared styles (indigo accent)
├── search.js            # Search engine (MiniSearch)
├── search-data.js       # FAQ + Golden Rules data
├── cowork-data.js       # Guide sections index
├── prompts-data.js      # Prompts library index
├── favicon.svg          # Indigo favicon
└── .github/workflows/   # GitHub Pages deployment
```

## Data Synchronization

This site is **secondary** to the main guide. Stats must be synced manually.

### Current Values (from main guide)

| Metric | Value | Source |
|--------|-------|--------|
| Version | 1.0.0 | VERSION file |
| Workflows | 5 | workflows/ directory |
| Prompts | 67 | prompts/ directory |
| FAQ Questions | 10+ | reference/faq.md |

### Files to Update on Sync

1. **index.html** - Version, prompt count, workflow count in meta tags and badges
2. **prompts-data.js** - Prompt definitions
3. **cowork-data.js** - Guide section index
4. **search-data.js** - FAQ and Golden Rules

## Development

```bash
# Local server
python -m http.server 8080

# Or with Node
npx serve
```

Open http://localhost:8080

## Search Architecture

- **Library**: MiniSearch (CDN, lazy-loaded on first Cmd+K)
- **Index**: ~100 items (67 prompts + 5 workflows + 10 FAQ + 25 guide sections)
- **Features**: Fuzzy matching, prefix search, category filtering

## Differences from Code Landing

| Aspect | Code Landing | Cowork Landing |
|--------|--------------|----------------|
| Accent color | Blue (#58a6ff) | Indigo (#6366f1) |
| Target audience | Developers | Knowledge workers |
| Main content | Templates, Quiz | Workflows, Prompts |
| Badge | None | "Research Preview" |
| Platform | Terminal (all OS) | macOS only |

## Related Repositories

- [Claude Cowork Guide](https://github.com/FlorianBruniaux/claude-cowork-guide) - Source of truth
- [Claude Code Guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) - For developers
- [Claude Code Landing](https://github.com/FlorianBruniaux/claude-code-ultimate-guide-landing) - Code guide landing

## License

CC BY-SA 4.0 - Same as the main guide.
