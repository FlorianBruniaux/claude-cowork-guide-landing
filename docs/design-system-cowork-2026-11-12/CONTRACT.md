# Contrat d'intégration du système portfolio : landing Cowork

Référence d'exécution : pilote Claude Code (`~/Sites/perso/claude-code-ultimate-guide-landing`, `main@6b2e3b5`, contrat `docs/design-system-pilot-2026-11-11/CONTRACT.md`). Référence visuelle : `florian-portfolio@376d69b7`.

Les classes ci-dessous existent déjà dans `src/styles/portfolio-system.css`, `src/styles/components.css` et `src/styles/global.css`.

## Fichiers partagés interdits aux agents

Ne pas modifier : `src/styles/global.css`, `src/styles/components.css`, `src/styles/portfolio-system.css`, `src/styles/starlight-overrides.css`, `src/components/global/*` (Header, Footer, Layout, SearchModal, AnnouncementBanner, FeedbackFab, ThemeToggle, ChapterLabel), `src/layouts/Layout.astro`, `astro.config.mjs`, `src/data/*`, `src/scripts/*`, `tests/*`. Signaler le besoin dans le rapport.

## Jetons

Uniquement les variables, jamais une couleur en dur pour un rôle qui en a une :

- surfaces : `--bg-primary` (fond de bande), `--bg-secondary`, `--bg-tertiary`, `--surface-elevated` (carte) ;
- texte : `--text-primary`, `--text-secondary`, `--text-muted` ;
- lien et focus : `--accent`, `--accent-hover` ;
- action principale : `--action` (#f97316), `--action-hover`, `--action-ink` ;
- bordures : `--border` ; rayons : `--radius-control` (6 px), `--border-radius-lg` (8 px carte) ;
- polices : `--font-display` (Barlow Condensed, h1 à h3 déjà global), `--font-sans`, `--font-mono`.

Couleurs sémantiques d'état et de données (niveau beginner/intermediate, succès, alerte, catégories) : permises si elles ont un sens. Les remplacer seulement si elles imitent l'accent orange. Une couleur en dur blanche sur `--accent` devient `--action-ink` sur `--action`.

## Composition de page

- Intro de page : `.page-hero` est déjà une bande charcoal hachurée à filet orange 3 px. Une intro qui n'utilise pas `.page-hero` doit l'adopter ou poser `band band-ink band-hero section-wallpaper`.
- Bandes : une `<section>` de contenu porte `band` plus une surface : `band-base` (ivoire, aucune règle à ajouter), `band-paper section-wallpaper` (papier hachuré), `band-ink section-wallpaper` (charcoal), `band-accent section-wallpaper` (orange, une seule par page, pour l'appel à l'action ou l'offre). Les jetons sont redéclarés par la bande : ne pas forcer de couleur dans les enfants.
- Règles de rythme (retours de Florian) : chaque page longue a au moins une bande charcoal en plus du hero ; alternance des surfaces ; jamais deux bandes identiques adjacentes ; une seule bande orange par page.
- `.section--alt` est déjà converti en papier hachuré.
- Le fondu au défilement `.section` (script de `Layout.astro`) reste : ne pas retirer la classe `section` d'une section qui l'a.
- Label de chapitre : `import ChapterLabel from '<chemin>/components/global/ChapterLabel.astro'` puis `<ChapterLabel number="01" label="Libellé" />` au-dessus du h2 d'une section principale. Le libellé reprend un texte déjà présent (titre de section, kicker). 3 à 6 grands chapitres par page, pas les sous-sections.
- Eyebrow / kicker : mono, majuscules, `--accent`, tiret de 28 px avant (`.section-kicker` l'a déjà).
- Pages longues et monotones : regrouper en 3 à 5 chapitres, cartes plutôt que listes nues, un seul appel à l'action final.

## Alignement

Le header et le footer sont à `--max-width` (75rem) avec 1rem de gouttière : le logo commence à 136 px à 1440. Tout conteneur de page utilise `.container` ou la même largeur et la même gouttière (`max-width: var(--max-width); padding-inline: 1rem; margin-inline: auto`). Une colonne de lecture étroite garde sa largeur et démarre sur le bord du logo : `margin-left: max(0px, calc((100% - var(--max-width)) / 2))` à l'intérieur d'un conteneur pleine largeur. Mesure attendue : bord gauche du h1 = bord gauche du logo.

## Cartes

- `brand-card` sur une carte statique, `brand-card brand-interactive-card` sur une carte cliquable (lien entier) ou qui contient l'action principale.
- Supprimer tout `transform: translateY(...)` au survol, toute ombre douce (`var(--shadow-md)`, rgba floue) et tout `transition: all`.
- Rayon des cartes : `var(--border-radius-lg)`. Pas de 12 px ou plus, pas de pilule `999px` sauf badge de compteur.
- Lien-bloc : `text-decoration: none !important` sur la carte, soulignement porté par le titre seul au survol (le hover global se propage aux descriptions).
- Liens dans une carte : soulignés au repos (règle globale).

## Actions

- `<a class="btn btn-primary">` : une seule par groupe.
- `<a class="btn btn-secondary">` : action autonome visible au repos.
- `<a class="btn btn-quiet">` : renvoi discret, souligné.
- Cibles de 44 px au moins.
- Supprimer les redéfinitions locales de `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`.
- Onglets, filtres, bascules : bordure `--border`, rayon `--radius-control`, état actif = fond `--text-primary` et texte `--bg-primary` (`.brand-filter` du portfolio), focus `outline: 2px solid var(--accent); outline-offset: 3px`.

## Liens

Liens de prose soulignés au repos, trait 2 px au survol, couleur `--accent`. Listes de liens (navigation, « voir aussi ») : non soulignées au repos possible, soulignées au survol et au focus. Sources liées quand l'URL existe déjà dans les données ; jamais d'URL inventée.

## Pièges connus

- Les règles `p` des pages restylent le libellé du `ChapterLabel` : il est protégé par `.chapter-label.chapter-label p`, ne pas écrire de sélecteur plus fort.
- Astro ajoute une classe `astro-*` ou un attribut `data-astro-cid-*` : la règle globale `a:not([class*="btn"])` (spécificité 0,2,1) bat une classe scopée simple `.foo` (0,2,0 avec l'attribut). Qualifier par le parent (`.card-grid .foo`) quand la couleur d'un lien à classe est écrasée.
- Remplissage orange au survol des cartes : seulement hors bandes sombres (déjà géré par `portfolio-system.css`).

## À ne pas toucher

Contenu, textes, URL, ancres, `id`, attributs ARIA, scripts, données, métadonnées, liens FR/EN. Le travail est visuel et de composition (classes, enveloppes `<section>`, CSS scopé). Toute exception est listée dans le rapport. Les classes testées restent : `workflow-card` sur chaque `<a>` de `/workflows/` (`tests/built/b-workflows.test.mjs`), hiérarchie des titres sans saut (`b-headings`, `c-headings`), notice et version dans `<footer>`.

## Vérification attendue par page

Serveur de dev déjà lancé sur `http://127.0.0.1:4393/` (ne pas en lancer un autre). Captures avec les scripts du dossier `outils/` (une commande `node … .cjs` seule sur sa ligne, sinon le bac à sable bloque Chromium ; jamais `npx playwright install`) :

```bash
node /Users/florianbruniaux/Sites/perso/claude-cowork-guide-landing/docs/design-system-cowork-2026-11-12/outils/sweep.cjs <label> view /route/,/fr/route/
node /Users/florianbruniaux/Sites/perso/claude-cowork-guide-landing/docs/design-system-cowork-2026-11-12/outils/full.cjs <label> light 1440 /route/
```

`sweep.cjs` sort clair et sombre 1440 et clair 390, le débordement horizontal, les erreurs console, le survol de la première carte interactive et l'écart h1 / logo. `full.cjs` fait une capture pleine page (thème `light` ou `dark`, largeur). Relire les captures à l'œil en clair, en sombre et en 390.
