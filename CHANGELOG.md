# Changelog

All notable changes to the Claude Cowork Guide Landing Page will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [1.3.2] - 2026-02-04

### Changed
- **Workflow count correction**: 26 → 24 workflows
  - Updated in: titles, meta tags, OG tags, Twitter cards, hero stats, badges, section titles, footer
  - Both EN (`index.html`) and FR (`index.fr.html`) versions updated
  - Synced with main guide v1.3.0

### Fixed
- **Copilot disambiguation**: Clarified "Copilot (MS)" refers to Microsoft 365 Copilot (Office integration), not GitHub Copilot (developer tool)
  - Updated in comparison sections to prevent confusion between two distinct Microsoft products

### Guide Sync (v1.3.0)
Main guide corrections and updates:
- **Workflow cleanup**: Removed 2 deprecated workflows (report-synthesis, team-handoff)
- **Recategorization**: Fixed 5 misclassified workflows to match their metadata
- **Documentation**: Added Haiku model, clarified Opus versions, updated macOS terminology (System Settings)
- Final count: 24 active workflows properly organized across 5 categories

## [1.3.1] - 2026-01-27

### Changed
- **Workflow descriptions updated** - Synced with main guide v1.2.1
  - EN: "From file organization to team handoffs" → "From invoicing to project planning" (reflects SME/artisan focus)
  - FR: "De l'organisation de fichiers aux passations d'équipe" → "De la facturation à la planification de projets"
  - Updated "5 Step-by-Step Workflows" → "26 Step-by-Step Workflows" in EN version (line 404)
  - FR version already correct at "26 Workflows Pas à Pas"

### Guide Sync (v1.2.1)
Main guide enriched with two new workflow sections:
- **Recurring Reporting**: Weekly/monthly progress reports for long projects (work-log.md)
- **Client Onboarding**: Standardized checklist for new client process (client-followup-tracker.md)
- Total: 26 workflows with enhanced practical value for SMEs/artisans

## [1.3.0] - 2026-01-23

### Changed
- **Workflow count update**: 25 → 26 workflows
  - Updated in: titles, meta tags, OG tags, Twitter cards, hero stats, badges, section titles, footer
  - Both EN (`index.html`) and FR (`index.fr.html`) versions updated
  - Synced with main guide v1.2.0

### Added
- 📖 **Key Terms section** - Glossary with 8 essential terms before Golden Rules
  - Terms: Workspace, Prompt, Workflow, Token, Context, Sandbox, OCR, Artifact
  - Grid layout (2 columns desktop → 1 column mobile)
  - Indigo accent titles with hover effects
  - Link to complete glossary in main guide (30+ terms)
  - Indexed in search (Cmd+K) with 8 new searchable entries
  - Fully translated in both EN and FR versions
- 🚀 **Getting Started section** - 3-step installation guide after TL;DR section
  - Step 1: Install Claude Desktop (direct link to claude.ai/download)
  - Step 2: Follow Security Setup (link to Getting Started guide)
  - Step 3: Copy Your First Prompt (anchor to #prompts)
  - Responsive grid (3 columns → 1 column mobile)
  - Numbered circular badges with indigo accent
  - Hover effects (border accent, translateY, shadow)
  - Fully translated in both EN and FR versions
- 🎨 **Styled cross-sell box** - Hero section promotion for Claude Code
  - Replaced simple text link with styled box
  - Prerequisites badges: "All platforms" + "Free tier available"
  - Call-to-action button with hover effects
  - Consistent indigo accent design (#6366f1)
  - Fully translated in both EN and FR versions

### Changed
- Hero cross-link (text) → Styled hero-code-box with badges and button
- Added `.hero-code-box`, `.hero-code-lead`, `.hero-code-prereq`, `.prereq-tag`, `.btn-code` CSS classes
- Added `.getting-started`, `.getting-started-badge`, `.setup-steps`, `.setup-step`, `.step-num` CSS classes
- Added `.key-terms`, `.terms-grid`, `.term-card`, `.term-title`, `.term-definition`, `.terms-footer` CSS classes

### Fixed
- Glossary links now point to correct files: `glossary.md` (EN) and `glossary.fr.md` (FR)
- Previous EN link pointed to non-existent `glossary.en.md`
- Previous FR link pointed to EN glossary instead of `glossary.fr.md`

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
