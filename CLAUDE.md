# Landing Site - Claude Cowork Guide

## 📋 Changements récents

**Novembre 2026 - Design system portfolio (refonte visuelle)**
- ✅ Système visuel du portfolio de Florian Bruniaux, aligné sur la landing Claude Code (pilote) : ivoire, charbon, orange, Barlow Condensed + IBM Plex
- ✅ Header et footer alignés sur le pilote : panneau More en cartes, tiroir mobile à droite, lien Guide en secondaire, colonne marque, colonne Écosystème repliable
- ✅ Starlight `/guide/` habillé par `starlight-overrides.css`
- 📄 Contrat et vérifications : `docs/design-system-cowork-2026-11-12/` (CONTRACT.md, README.md, `outils/`)
- ⚠️ Restent en indigo : `public/favicon.svg` et l'image OG (`src/pages/og-image.png.ts`, police Inter). À migrer dans une tâche dédiée

**Avril 2026 - Shell parity + SEO + Pages structurelles**
- ✅ Shell refonte complet (Header, Footer, ThemeToggle, FeedbackFab, Layout)
- ✅ Header : 5 mainLinks + dropdown "More" (Whitepapers, Compare, Key Terms), double CTA Guide+GitHub, Cmd+K visible, menu mobile focus-trap
- ✅ Footer : CTA block + 5 colonnes config-driven + bottom bar (Sitemap, CC BY-SA)
- ✅ ThemeToggle : composant standalone, sync avec Starlight `/guide/` (localStorage `starlight-theme`)
- ✅ FeedbackFab : extrait de Layout, menu expandable 3 items (bug, content, feedback → GitHub issues)
- ✅ Hero : double CTA Guide+GitHub, 3 badges shields (28 WORKFLOWS, 70 PROMPTS, 7 GOLDEN RULES), cross-sell déplacé dans RelatedProjects
- ✅ SEO : robots.txt GEO (12 AI crawlers), llms.txt statique
- ✅ OG image : stats corrigées (couleur indigo d'origine, pas encore migrée)
- ✅ Pages structurelles : `/releases` EN+FR (12 versions, toggle older)
- ✅ Nettoyage : 12 fichiers `.legacy` supprimés
- ⚠️ TODO `/glossary` : bloqué — créer `reference/glossary.en.md` + `reference/glossary.md` dans le guide principal d'abord
- ⚠️ TODO `/rss.xml` : conditionnel — créer skill `cowork:update-releases` d'abord
- ⚠️ TODO GA4 ID : vérifier si `G-WH1C8CM79E` est bien l'ID Cowork (actuellement identique à CC landing)

**Voir [CHANGELOG.md](CHANGELOG.md) pour l'historique complet.**

---

## URLs

| Environnement | URL |
|---------------|-----|
| **Production** | https://cowork.bruniaux.com/ |
| **GitHub Repo** | https://github.com/FlorianBruniaux/claude-cowork-guide-landing |

## Stack technique

- **Framework** : Astro 5.17 + Starlight 0.37 (pour `/guide/`)
- **Styles** : CSS custom properties (vars), pas de Tailwind dans la landing
- **i18n** : `src/data/i18n.ts` → helper `t(lang)`, EN (root) + FR (`/fr/` prefix)
- **Search** : MiniSearch via Cmd+K (landing), Pagefind (Starlight `/guide/`)
- **Deploy** : GitHub Pages, build `pnpm build`

## Source de vérité

**Ce site est SECONDAIRE**. La source de vérité est le guide principal :
`/Users/florianbruniaux/Sites/perso/claude-cowork-guide/`

**Workflow obligatoire** : modifier d'abord le guide principal → puis synchroniser ici.
Ne JAMAIS modifier les stats ou le contenu ici sans avoir mis à jour le guide principal.

## Architecture des fichiers clés

```
src/
  components/
    global/
      Header.astro        — Nav principale + dropdown More + mobile drawer
      Footer.astro        — CTA block + 5 colonnes + bottom bar
      ThemeToggle.astro   — Switch dark/light, sync Starlight localStorage
      FeedbackFab.astro   — FAB expandable (3 items → GitHub issues)
      ChapterLabel.astro  — Label de chapitre (brique + numéro) au-dessus d'un h2
    landing/
      HeroBanner.astro    — Hero avec badges shields + double CTA
      RelatedProjects.astro — Cross-sell Claude Code + autres projets
  layouts/
    Layout.astro          — HTML base, SEO meta, JSON-LD, GA4, slots
  styles/
    global.css            — Jetons CSS clair + sombre (--bg-*, --text-*, --accent, --action, --font-*)
    brand-foundation.css  — @font-face Barlow Condensed + IBM Plex (fichiers dans public/fonts/brand/)
    portfolio-system.css  — Bandes, cartes brand-*, ChapterLabel, filtres (système portfolio)
    components.css        — Primitives (.btn, .badge-shield, .page-hero, .feature-card...)
    starlight-overrides.css — Habillage du guide Starlight /guide/
  data/
    i18n.ts               — Toutes les strings EN+FR, helper t(lang)
    releases.ts           — Timeline des releases (version, date, highlights, breaking)
    search-index.ts       — Index MiniSearch (guide sections, prompts, FAQ, rules, terms)
  pages/
    index.astro           — Landing EN
    releases/index.astro  — Page releases EN
    faq/index.astro       — Page FAQ complète EN (FAQPage JSON-LD)
    whitepapers/          — Whitepapers EN
    fr/                   — Miroir FR de toutes les pages
  components/starlight/
    Header.astro          — Override header Starlight (réutilise le Header global)
    Footer.astro          — Override footer Starlight (réutilise le Footer global)
public/
  robots.txt              — GEO : 12 AI crawlers explicitement autorisés
  llms.txt                — Index LLM (format standard llms.txt)
```

## Shell components — patterns

### ThemeToggle
- `localStorage['theme']` + `localStorage['starlight-theme']` synchronisés
- Classe `disable-transitions` pendant le switch (évite le flash)
- ARIA : `role="switch"`, `aria-checked`
- Importé dans `Header.astro` + `src/starlight/Header.astro`

### FeedbackFab
- Menu expandable au clic, ferme au clic extérieur ou Escape
- 3 items : "Report a bug", "Suggest content", "General feedback"
- Tous pointent vers `https://github.com/FlorianBruniaux/claude-cowork-guide/issues`
- Caché sur mobile (`display: none` sous 768px) pour ne pas chevaucher footer CTA

### Header
- `mainLinks` (5 items) + `moreLinks` (dropdown Whitepapers, Compare, Key Terms)
- Active state : `Astro.url.pathname.startsWith(link.href)`
- Mobile : drawer avec scroll-lock, close button, focus-trap, Escape close
- Actions : recherche encadrée, langue et GitHub en boutons fantômes, "Read the Guide" → `/guide/` en `btn-secondary` (comme "All pages" du pilote)
- More : panneau de cartes (≥901px), tiroir à droite sur mobile (≤900px)
- Lang switcher EN ↔ FR

### Layout props
```typescript
interface Props {
  lang?: string
  title: string
  description: string
  image?: string
  ogType?: string    // 'website' | 'article' (défaut: 'website')
  noIndex?: boolean
  preloadImages?: string[]
  jsonLd?: object[]  // JSON-LD page-spécifique, merge avec @graph global
}
```

## i18n — workflow

Toutes les strings passent par `src/data/i18n.ts`. **Jamais de texte hardcodé** dans les composants.

```typescript
// Ajouter une clé
const en = {
  // ...
  myNewKey: 'English text',
}
const fr = {
  // ...
  myNewKey: 'Texte français',
}
```

Puis dans les composants :
```astro
---
const s = t(lang)
---
<p>{s.myNewKey}</p>
```

**Règle absolue** : toute clé ajoutée en EN doit exister en FR dans le même commit.

## Pages structurelles

### /releases (EN + FR)
- Source : `src/data/releases.ts` — format :
  ```typescript
  {
    version: string
    date: string
    highlights: string[]      // HTML autorisé
    breaking?: string[]
    latest?: boolean
    featured?: boolean
    featuredLabel?: string
    initiallyVisible: boolean // false = caché derrière le toggle "Show all"
  }
  ```
- Ajouter une release : modifier `releases.ts` (version la plus récente en premier, `latest: true` sur 1 seul, `initiallyVisible: true` sur les 5-6 dernières)

### /faq (EN + FR)
- Source : clés `faq*` dans `src/data/i18n.ts`
- JSON-LD `FAQPage` injecté via prop `jsonLd` du Layout
- Sélecteur `.faq-answer` utilisé par SpeakableSpecification

### /whitepapers (EN + FR)
- Source : `src/data/whitepapers-data.ts`

### /glossary (BLOQUÉ)
- Prérequis : créer `reference/glossary.en.md` + `reference/glossary.md` dans le guide principal
- Puis : créer `src/data/glossary-data.ts` + `src/pages/glossary/index.astro`

## Synchronisation données guide

| Données | Source guide | Fichier landing | Quand sync |
|---------|-------------|-----------------|------------|
| Sections guide | `**/*.md` headings | `src/data/search-index.ts` | Nouvelle section majeure |
| Prompts | `prompts/*.md` | `src/data/search-index.ts` | Nouveau prompt |
| FAQ | `reference/faq.md` | `src/data/i18n.ts` (clés faq*) | Nouvelle question |
| Golden Rules | `guide/03-security.md` | `src/data/i18n.ts` (clés rule*) | Règle modifiée |
| Releases | — | `src/data/releases.ts` | Chaque release Cowork |

## Valeurs actuelles

| Métrique | Valeur | Source |
|----------|--------|--------|
| Workflows | `28` | workflows/ directory |
| Prompts | `70` | prompts/*.md |
| FAQ questions | `13` | reference/faq.md |
| Golden Rules | `7` | guide/03-security.md |

## Test local

```bash
cd /Users/florianbruniaux/Sites/perso/claude-cowork-guide-landing
pnpm dev        # dev server → http://localhost:4321
pnpm build      # build complet, vérifie les erreurs TS/Astro
```

Checklist :
- [ ] Hero : 3 badges shields (28 WORKFLOWS, 70 PROMPTS, 7 GOLDEN RULES)
- [ ] CTA primaire → `/guide/` (pas GitHub)
- [ ] ThemeToggle persiste au reload, sync avec `/guide/` Starlight
- [ ] Cmd+K ouvre modal, résultats cliquables, Esc ferme
- [ ] `/releases` : 12 versions, toggle "Show all" fonctionne
- [ ] `/faq` : 13 questions EN + FR
- [ ] FeedbackFab visible desktop, caché mobile
- [ ] Mobile menu : hamburger → drawer + Escape close
- [ ] Design system respecté : voir la section « Design system » ci-dessous
- [ ] `pnpm test` passe, dont `tests/d-design-system.test.mjs`
- [ ] `pnpm check` à 0 erreur et `pnpm build` sans warning bloquant

## Design system

Système visuel personnel de Florian Bruniaux (preset `florian-portfolio@376d69b7`), le même que la landing Claude Code (`~/Sites/perso/claude-code-ultimate-guide-landing`). Pour tout travail visuel, charger le skill `boldguy-ui`. Référence détaillée : `docs/design-system-cowork-2026-11-12/CONTRACT.md`.

**Jetons, jamais de couleur en dur pour un rôle qui en a un** (`src/styles/global.css`, clair et `[data-theme="dark"]`) :

- surfaces : `--bg-primary`, `--bg-secondary`, `--bg-tertiary`, `--surface-elevated`
- texte : `--text-primary`, `--text-secondary`, `--text-muted`
- lien et focus : `--accent` ; action principale : `--action` (`#f97316`), `--action-hover`, `--action-ink`
- polices : `--font-display` (Barlow Condensed, titres), `--font-sans` (IBM Plex Sans), `--font-mono` (IBM Plex Mono)
- rayons : `--radius-control` (6 px), `--border-radius-lg` (8 px pour une carte)

**Composition**

- Sections en bandes : `band` + `band-base`, `band-paper section-wallpaper`, `band-ink section-wallpaper` ou `band-accent section-wallpaper`. Une seule bande orange par page, jamais deux bandes identiques adjacentes, au moins une bande charbon en plus du hero sur une page longue.
- Intro de page : `.page-hero` (bande charbon hachurée, filet orange).
- `<ChapterLabel number="01" label="..." />` au-dessus du h2 des 3 à 6 grands chapitres d'une page.
- Conteneurs à `--max-width` avec 1rem de gouttière : le bord gauche du h1 s'aligne sur le logo.

**Cartes et actions**

- `brand-card` (statique) ou `brand-card brand-interactive-card` (cliquable). Pas de `translateY` au survol, pas d'ombre floue, pas de `transition: all`, pas de rayon de 12 px ou plus.
- `btn btn-primary` : une seule par groupe. `btn-secondary` pour une action autonome, `btn-quiet` pour un renvoi discret. Cibles de 44 px au moins. Ne pas redéfinir `.btn*` localement.
- Liens de prose soulignés au repos, en `--accent`.

**Vérifier un changement visuel** (serveur de dev lancé, commande `node … .cjs` seule sur sa ligne, jamais `npx playwright install`) :

```bash
node docs/design-system-cowork-2026-11-12/outils/sweep.cjs <label> view /route/,/fr/route/
node docs/design-system-cowork-2026-11-12/outils/full.cjs <label> light 1440 /route/
node docs/design-system-cowork-2026-11-12/outils/content-diff.cjs <distAvant> <distAprès>
```

`sweep.cjs` contrôle clair et sombre à 1440, clair à 390, le débordement, les erreurs console, le survol de carte et l'alignement h1 / logo. Lancer aussi `pnpm check` (le déploiement échoue sur une erreur `astro check`), `pnpm test`, `pnpm build`, `pnpm test:built`.

## Différences avec Claude Code Landing

| Aspect | Code Landing | Cowork Landing |
|--------|-------------|----------------|
| Design system | Portfolio Florian Bruniaux | Le même (refonte de novembre 2026) |
| Target audience | Developers | Knowledge workers |
| Main content | Templates, Quiz | Workflows, Prompts |
| Platform | Terminal (all OS) | macOS (Windows partial) |
| i18n | EN only | EN + FR |
| Starlight `/guide/` | ✅ | ✅ |
