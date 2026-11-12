# Itération Cowork : système du portfolio sur la landing Claude Cowork Guide

Livraison locale du 12 novembre 2026, branche `design-system-cowork` créée depuis `main@46b9fbb`. Rien n'est commité, poussé ni déployé.

Référence d'exécution : pilote Claude Code (`claude-code-ultimate-guide-landing`, `main@6b2e3b5`, `docs/design-system-pilot-2026-11-11/`). Références visuelles : `florian-portfolio@376d69b7`, `branding-florian@821ad55`. Contrat des agents : `CONTRACT.md` (ce dossier).

## Ce qui a changé

| Zone | Responsable | Résultat |
| --- | --- | --- |
| Fondations | Session principale | Polices Barlow Condensed 700, IBM Plex Sans 400/600, IBM Plex Mono 400 (copie binaire du pilote, licences OFL) ; jetons du pilote (ivoire `#f3f0e9`, sombre `#141414`, lien `#a63f05` / `#ffb17a`, action `#f97316`) ; trois niveaux d'action ; liens de prose soulignés ; `portfolio-system.css` et `ChapterLabel` copiés tels quels |
| Coque | Session principale | Header « rail » (filet orange 2 px, barre 4 px sous l'item actif, item ouvert sur fond élevé, menu « More » en carte charcoal à lignes sobres) ; tiroir mobile à bandeau charcoal ; footer en bande charcoal hachurée, titres mono orange, liens ivoire, CTA en carte charcoal à filet orange ; bandeau d'annonce avec badge « New identity » / « Nouvelle identité » ; FeedbackFab en action principale sans soulèvement ; badges du hero en encre et orange |
| Recherche | Session principale | Bandeau charcoal (eyebrow `⌘K`, titre, bouton Esc), filet orange, lignes plates ; le bouton Esc ferme et rend le focus au déclencheur (`src/scripts/search.ts`), test `tests/search-focus.test.mjs` |
| Accueil EN et FR | Agent `ds-home` (sonnet) | Hero charcoal, `home-rail` avec rail orange, 5 ChapterLabels, bandes : hero ink, paper, base, ink, base, paper, base, paper, base, paper, ink, base, accent (CrossLink, seule bande orange), paper |
| Workflows, Prompts, Whitepapers EN et FR | Agent `ds-catalog` (sonnet) | Intro charcoal alignée, cartes interactives, filtres au contrat ; Prompts en 4 chapitres (base, paper, ink, base) et appel final orange ; Whitepapers en 4 chapitres (paper, base, ink, paper) ; Workflows : grille sur base, appel final orange |
| Compare, FAQ, Glossary, Releases, 404 EN et FR | Agent `ds-reference` (sonnet) | Compare : tableau, cas d'usage en charcoal, appel orange ; FAQ en trois chapitres (base, ink, paper), cartes en liseré ; Glossary : lettres, appel final charcoal ; Releases : dernière version en carte à filet orange, versions récentes en charcoal, anciennes sur papier derrière « Show all » ; 404 en bande charcoal |
| Guide Starlight | Session principale | Bande de titre charcoal hachurée, h1 à h3 en Barlow, h2 à filet orange sur `.sl-heading-wrapper.level-h2`, h3 à filet gauche, citations teintées, tableaux bordés à largeur de contenu, blocs de code à surface unique, barre latérale et sommaire en cartes charcoal à filet orange, splash `/guide/` en bande charcoal pleine largeur alignée sur le logo |

## Fichiers

- Nouveaux : `src/styles/brand-foundation.css`, `src/styles/portfolio-system.css`, `src/components/global/ChapterLabel.astro`, `public/fonts/brand/` (8 WOFF2 et 4 licences), `public/images/brand/section-hatching.svg`, `tests/search-focus.test.mjs`, ce dossier.
- Partagés (session principale) : `src/styles/global.css`, `src/styles/components.css`, `src/styles/starlight-overrides.css`, `src/layouts/Layout.astro`, `astro.config.mjs`, `src/components/global/{Header,Footer,SearchModal,AnnouncementBanner}.astro`, `src/scripts/search.ts`, `scripts/check-contrast.mjs`.
- Pages et composants (agents) : `src/pages/{index,404}.astro`, `src/pages/{compare,glossary,prompts,releases,whitepapers,workflows}/index.astro`, leurs miroirs `src/pages/fr/…`, `src/components/landing/{HeroBanner,WhatsNew,TldrSection,GettingStarted,WhyGuide,Features,Workflows,Prompts,ComparisonTable,KeyTerms,GoldenRules,ClaudeEcosystem,CrossLink,RelatedProjects,FaqPage}.astro`.

## Contrôles

Serveur de dev local (`127.0.0.1:4393`), Google Chrome de la machine et WebKit Playwright.

| Contrôle | Résultat |
| --- | --- |
| `pnpm test` | 40 tests, 40 passés (dont `c-contrast` et le nouveau `search-focus`) |
| `pnpm build` | Exit 0, 113 pages construites |
| `pnpm test:built` | 21 tests, 21 passés |
| `pnpm check:built-seo` | « SEO gate passed: 112 pages and 112 sitemap URLs. » |
| Balayage Chrome (`outils/sweep.cjs final view all`) | 27 gabarits EN et FR × clair 1440, sombre 1440, clair 390 : 81 vues, 0 problème (statut, débordement horizontal, erreur console, soulèvement de carte) |
| Balayage WebKit (`outils/sweep.cjs webkit view all webkit`) | 27 gabarits × clair 1440 et 390 : 54 vues, 0 problème |
| Bord gauche du h1 = logo (136 px à 1440) | Toutes les pages de la landing et le splash `/guide/`. Exception : les 8 pages de lecture Starlight testées (h1 à 280 px, à droite de la barre latérale), comme sur le pilote |
| Contenu (`outils/content-diff.cjs`, build `main` contre build de la branche) | 113 pages comparées : 0 texte retiré, 0 `href` changé, 0 JSON-LD changé. Ajouts : bandeau de recherche (`⌘K`, titre, `Esc`, `id="search-close"`), badge « New identity », identifiant du bandeau, libellés des ChapterLabels (texte repris de la page) |
| Survol et focus clavier d'une carte (`outils/card-focus.cjs /workflows/`) | Clavier : anneau intérieur `#a63f05` et ombre dure 4 px, `transform: none`. Survol : fond `#f97316`, ombre dure encre, `transform: none` |
| Bouton principal au clavier (`outils/menu.cjs`) | Contour 2 px `#a63f05` en clair, `#ffb17a` en sombre |
| Recherche | Bouton Esc : dialogue fermé, focus rendu à `#search-trigger`, en clair et en sombre ; test qui échoue si la ligne de retour du focus est retirée (vérifié : 0 passé, 2 échecs) |
| Menu mobile | Tiroir ouvert à 390, sous-menu « More » déplié, fermeture par Escape |
| Contraste (`scripts/check-contrast.mjs`) | Bouton principal 7,06:1 (survol 5,97:1) dans les deux thèmes ; liens 5,02:1 à 5,99:1 en clair, 8,19:1 à 10,37:1 en sombre. Le contrôle échoue bien si le fond de survol passe à `#333333` (vérifié, 2 échecs) |

## Captures

`captures/` (29 Mo, hors commit, `.gitignore` local) : `before-*` et `after-*` en pleine page, accueil en clair 1440, sombre 1440, clair 390 ; Workflows, Prompts, Whitepapers, Compare, Releases, Glossary, FAQ et une page du guide en clair 1440 ; page du guide en sombre. Les vues de balayage (`outils/shots/`, 110 Mo) restent locales aussi.

## Exceptions aux contraintes, à arbitrer

- Thème clair par défaut (`Layout.astro`, `astro.config.mjs`) : la valeur de repli passe de `dark` à `light`, comme le pilote. Un choix déjà enregistré reste prioritaire.
- `AnnouncementBanner` : badge « New identity » / « Nouvelle identité » ajouté, `BANNER_ID` renouvelé (`cowork-banner-new-identity-2026-11`), composant déplacé dans `<main>`. Avant, il était rendu sous le header fixe et restait invisible (constaté sur les captures « avant »).
- `src/scripts/search.ts` et `SearchModal.astro` : retour du focus, bouton Esc et bandeau (textes `⌘K`, libellé `searchLabel` existant, `aria-label` « Close search » / « Fermer la recherche »). L'indice `Esc` dans le champ est masqué en CSS, pas retiré.
- `scripts/check-contrast.mjs` : lit désormais les règles groupées et la requête `(hover: hover)` du nouveau bloc boutons. Sans ce changement, `c-contrast` échouait sur `selector not found: .btn-primary:hover`.
- `components.css` : la règle héritée `a:not(.btn):not(.feature-card-link)…:hover` (spécificité 0,5,1) passe en `:where(…)`, sinon elle écrasait tous les survols de liens des composants.
- Tiroir mobile : le `backdrop-filter` du header faisait du header le bloc conteneur du tiroir fixe, haut de 56 px seulement. Le header mobile est désormais opaque. Constaté sur la branche avant correctif ; l'état en production n'a pas été vérifié.
- Guide mobile : le bouton de menu Starlight recouvrait le bouton de menu du site ; il passe au bout de la barre « On this page ».

## Header et footer alignés sur le pilote (demande du 12 novembre)

- Header : marque en mono couleur lien, liens secondaires discrets, recherche encadrée, langue et GitHub en boutons fantômes, « Read Guide » au niveau secondaire (était le bouton orange principal), « More » en panneau du pilote (bandeau charcoal, cartes, flux RSS en ligne sous un filet). Mobile : tiroir à droite sous le header, page assombrie, bouton de fermeture rond.
- Footer : appel sans carte au-dessus d'un filet, colonne de marque (`>_` et `logoText`, lien vers l'accueil, avec `footerDisclaimer` déplacé depuis la ligne légale), colonne Écosystème passée dans un dépliant pleine largeur, barre basse en petit texte.
- Contenu (`outils/content-diff.cjs`, build précédent de la branche contre le nouveau, 113 pages) : 0 `href` retiré, 0 JSON-LD changé. Ajouts : lien de marque `/` ou `/fr/`, libellé `More`/`Plus` du bandeau du panneau (`aria-hidden`), signe `+` du dépliant. Retrait : un séparateur `·` de la ligne légale.
- Contrôles : `pnpm test` 40/40, build 113 pages, `test:built` 21/21, `check:built-seo` passé, balayage Chrome 81 vues 0 problème, tiroir 390 ouvert puis fermé par Escape avec focus rendu à `#menu-toggle`, clair et sombre.

## Écarts avec le pilote

- Pas de reprise des composants propres au pilote (sommaire `guide-toc-panel`, tiroir de guide mobile, méga-menu à intentions) : la landing Cowork garde le sommaire Starlight par défaut, stylé en carte charcoal par `.right-sidebar-panel > .sl-container`, et son menu « More » à 5 liens.
- Spécificité : Astro scope les styles en `:where(.astro-*)`, donc une classe scopée ne bat pas la règle globale des liens (0,2,1). Le header, le footer et le bandeau qualifient leurs sélecteurs par deux ancêtres ; le contrat le documente pour les agents.
- Workflows : la seule bande charcoal hors intro est le footer (page à un seul chapitre, grille puis appel orange). Choix de l'agent conservé.

## Encore en indigo

`#6366f1` reste dans `src/pages/og-image.png.ts` (lignes 102 et 148, titre et chiffres de l'image OG) et `public/favicon.svg` (ligne 5, dégradé). Non modifié : image OG et favicon sont des métadonnées, hors du périmètre visuel de la page. Le repli indigo de `HeroBanner.astro` a disparu avec la refonte du hero.

## Non vérifié

- Firefox, lecteur d'écran, zoom texte à 200 %.
- Le site publié et le déploiement GitHub Pages.
- La recherche Cmd+K avec résultats en dev : `/search-index/en.json` répond 404 sur le serveur de dev (index produit au build) ; seules l'ouverture, la fermeture et le focus ont été testés.
- Captures sombre et 390 relues à l'œil seulement pour l'accueil, le guide et les états du header ; les autres gabarits sont couverts par le balayage automatique (haut de page) et par les relectures des agents, partielles de leur propre aveu.
- Contraste des étiquettes de niveau « Intermediate » (jaune sur jaune pâle) sur les cartes de workflows : couleur sémantique existante, non mesurée.
