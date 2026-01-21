# Changelog

All notable changes to the Claude Cowork Guide Landing Page will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [1.2.0] - 2026-01-21

### Added
- 🌐 **Full French translation** - Complete bilingual support with `index.fr.html`
  - 112 French search index entries (25 guide + 70 prompts + 17 FAQ/rules)
  - `cowork-data.fr.js`, `prompts-data.fr.js`, `search-data.fr.js`
  - Language-specific URLs and share text for social buttons
- 🌍 **Language switcher** - Navigation toggle (🌐 FR / 🌐 EN)
  - Styled with hover effects and WCAG touch targets (44px)
  - Hreflang tags for SEO optimization
- 🔗 **Social sharing buttons** - X (Twitter) and LinkedIn
  - Hero section: Visual buttons with icons (𝕏, in)
  - Footer section: Text links ("Share on X", "Share on LinkedIn")
  - GDPR-friendly intent URLs (no third-party tracking)
- 🔍 **Language-aware search** - Automatic detection from `<html lang="">`
  - Loads appropriate data files (*.fr.js for French)
- Exploratory guide messaging throughout the landing page
- Warning banner: "Cowork is brand new and evolving rapidly"
- Status badge: "Exploratory" to set proper expectations
- FAQ updates emphasizing experimental nature of guide
- TL;DR status: "Early Access (unstable, rapidly evolving)"

### Changed
- Rewrote "Why This Guide?" section for non-technical audience with business impact focus
- Replaced technical jargon (VPN conflicts, token budgeting, prompt injection) with concrete impacts (blocked from working, quota exhausted, passwords exposed)
- Grouped technical security aspects into 2 user-friendly points
- Updated subtitle: "Stop wasting hours. Start working safely and efficiently from day one."

### Updated
- Workflow count: 5 → 25 workflows
- Prompt count: 67 → 70 prompts
- Shields.io badges with new metrics
- Schema.org JSON-LD metadata for SEO

### Fixed
- Header navigation spacing: Cmd+K button no longer overlaps "Read Guide" button
- Workflow tabs spacing: increased gap from 0.5rem to 1rem for better readability
- `.nav-actions`: gap 0.75rem → 1.25rem, added margin-left: 1rem
- French search data files now correctly load on `index.fr.html`

## [1.0.0] - 2026-01-XX

### Added
- Initial landing page for Claude Cowork Guide
- Hero section with stats (workflows, prompts, FAQ)
- Global search (Cmd+K / Ctrl+K) with MiniSearch
- 70 ready-to-use prompts across 4 categories
- 25 complete workflows organized by category
- Golden Rules for security and best practices
- FAQ section with Schema.org structured data
- Cross-linking to Claude Code Guide for developers
- Mobile responsive design with hamburger menu (< 768px)
- Indigo accent color palette (#6366f1)
- GitHub Pages deployment workflow
