# Claude Cowork Guide - Landing Site

Landing site for the [Claude Cowork Guide](https://github.com/FlorianBruniaux/claude-cowork-guide).

## StarMapper

<a href="https://starmapper.bruniaux.com/FlorianBruniaux/claude-cowork-guide-landing">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://starmapper.bruniaux.com/api/map-image/FlorianBruniaux/claude-cowork-guide-landing?theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://starmapper.bruniaux.com/api/map-image/FlorianBruniaux/claude-cowork-guide-landing?theme=light" />
    <img alt="StarMapper — see who stars this repo on a world map" src="https://starmapper.bruniaux.com/api/map-image/FlorianBruniaux/claude-cowork-guide-landing" />
  </picture>
</a>

## Live Site

- 🇬🇧 **English**: [cowork.bruniaux.com](https://cowork.bruniaux.com)
- 🇫🇷 **French**: [cowork.bruniaux.com/index.fr.html](https://cowork.bruniaux.com/index.fr.html)

## Features

- **Bilingual** (🇬🇧 English / 🇫🇷 French) - Complete translations with language switcher
- **Global Search** (Cmd+K / Ctrl+K) - Language-aware fuzzy search across prompts, workflows, FAQ, and guide sections
- **Getting Started Section** - 3-step installation guide with direct links to Claude Desktop download
- **Styled Cross-Sell Box** - Hero section box promoting Claude Code for developers with badges and CTA button
- **Prompt Library** - 70 ready-to-use prompts across 4 categories
- **Workflow Gallery** - 25 complete workflows organized by category (Admin, Commercial, Production, Communication, Organization)
- **Golden Rules** - Security and best practices for non-technical users
- **Social Sharing** - X (Twitter) and LinkedIn share buttons in hero and footer
- **Cross-linking** - Integrated navigation to Claude Code Guide for developers
- **Mobile Responsive** - Hamburger menu for tablet/mobile (< 768px)
- **Exploratory Badge** - Clear messaging that Cowork and this guide are evolving rapidly

## Structure

```
claude-cowork-guide-landing/
├── index.html           # English landing page
├── index.fr.html        # French landing page
├── styles.css           # Shared styles (indigo accent)
├── search.js            # Language-aware search engine (MiniSearch)
├── search-data.js       # EN: FAQ + Golden Rules data
├── search-data.fr.js    # FR: FAQ + Golden Rules data
├── cowork-data.js       # EN: Guide sections index
├── cowork-data.fr.js    # FR: Guide sections index
├── prompts-data.js      # EN: Prompts library index
├── prompts-data.fr.js   # FR: Prompts library index
├── favicon.svg          # Indigo favicon
└── .github/workflows/   # GitHub Pages deployment
```

## Data Synchronization

This site is **secondary** to the main guide. Stats must be synced manually.

### Current Values (from main guide)

| Metric | Value | Source |
|--------|-------|--------|
| Version | 1.1.0 | VERSION file |
| Workflows | 25 | workflows/ directory (23 active + 2 deprecated) |
| Prompts | 70 | prompts/ directory |
| FAQ Questions | 13 | reference/faq.md |

### Files to Update on Sync

1. **index.html** + **index.fr.html** - Version, prompt count, workflow count in meta tags and badges
2. **prompts-data.js** + **prompts-data.fr.js** - Prompt definitions
3. **cowork-data.js** + **cowork-data.fr.js** - Guide section index
4. **search-data.js** + **search-data.fr.js** - FAQ and Golden Rules

## Internationalization (i18n)

The landing page is fully bilingual with complete English and French versions.

### Language Detection

- `search.js` detects language from `<html lang="">` attribute
- Automatically loads appropriate data files (*.fr.js for French)
- Each page has its own search index (112 entries per language)

### Translation Coverage

| Component | English | French |
|-----------|---------|--------|
| Landing page | index.html | index.fr.html |
| Guide index | cowork-data.js (25) | cowork-data.fr.js (25) |
| Prompts | prompts-data.js (70) | prompts-data.fr.js (70) |
| FAQ + Rules | search-data.js (17) | search-data.fr.js (17) |
| **Total search entries** | **112** | **112** |

### Language Switcher

- Located in navigation bar (🌐 FR / 🌐 EN)
- Styled with hover effects and WCAG touch targets (44px)
- Hreflang tags for SEO optimization

### Social Sharing

Both language versions include X (Twitter) and LinkedIn share buttons:
- **Hero section**: Visual buttons with icons (𝕏, in)
- **Footer section**: Text links ("Share on X", "Share on LinkedIn")
- Language-specific URLs and share text
- GDPR-friendly (intent URLs, no third-party tracking)

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
- **Index**: ~130 items (70 prompts + 25 workflows + 13 FAQ + 25 guide sections)
- **Features**: Fuzzy matching, prefix search, category filtering

## Differences from Code Landing

| Aspect | Code Landing | Cowork Landing |
|--------|--------------|----------------|
| Accent color | Blue (#58a6ff) | Indigo (#6366f1) |
| Target audience | Developers | Knowledge workers |
| Main content | Templates, Quiz | Workflows, Prompts |
| Badge | None | "Exploratory Guide" |
| Platform | Terminal (all OS) | macOS only |
| Maturity | Stable (v2.x) | Early access, rapidly evolving |

## Related Repositories

- [Claude Cowork Guide](https://github.com/FlorianBruniaux/claude-cowork-guide) - Source of truth
- [Claude Code Guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) - For developers
- [Claude Code Landing](https://github.com/FlorianBruniaux/claude-code-ultimate-guide-landing) - Code guide landing

## Recent Changes

See [CHANGELOG.md](CHANGELOG.md) for detailed version history.

**Latest updates** (v1.2.0 - January 2026):
- 🌐 **Full French translation** - Complete bilingual support with index.fr.html
- 🔍 **Language-aware search** - Automatic detection and French search index (112 entries)
- 🌍 **Language switcher** - Navigation toggle between EN/FR with hreflang SEO tags
- 🔗 **Social sharing** - X (Twitter) and LinkedIn buttons in hero and footer
- Rewrote "Why This Guide?" section for non-technical audience
- Added exploratory guide messaging throughout
- Updated metrics: 25 workflows, 70 prompts
- Fixed UI spacing issues in navigation and workflow tabs

## License

CC BY-SA 4.0 - Same as the main guide.
