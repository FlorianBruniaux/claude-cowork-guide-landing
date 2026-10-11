# Audit SEO de cowork.bruniaux.com, 11 octobre 2026

Observation le 11 octobre 2026 entre 16:30 et 16:50 UTC. Périmètre : production publique, dépôt landing (`main`, HEAD local `0d45ceb`, `origin/main` `9083502`), dépôt guide (`412b3ef`, poussé), build local, recherche web et assistants IA. Audit précédent : `docs/seo/2026-09-04/`.

## Verdict

**PARTIEL.** La base technique tient : sur les 112 URL du sitemap, statuts, canonicals, hreflang, H1 uniques, maillage interne et JSON-LD sont propres. Le défaut majeur est éditorial et vient de la chaîne de livraison. La production décrit encore Cowork tel qu'il était début septembre (exécution locale, computer use en research preview, modèles Opus 5, guide v1.12.0) alors que le produit a changé les 16 septembre et 6 octobre 2026. Deux mécanismes l'expliquent : le commit landing v1.14.0 n'est pas poussé, et la CI fige le contenu du guide sur `d0fc8f0` (v1.12.0). Monter ce verrou fait échouer le gate SEO sur deux ancres françaises, ce qui bloque la publication tant que ce point n'est pas corrigé.

Les données moteurs (GSC, GA4, Bing) et terrain (CrUX) n'ont pas pu être collectées dans cette session : tout jugement sur le trafic, l'indexation ou les Core Web Vitals reste `UNKNOWN`.

## Profil du site

| Élément | Valeur | Preuve |
| --- | --- | --- |
| Production | `https://cowork.bruniaux.com/` | PROUVÉ, curl |
| Hébergement | GitHub Pages, `server: GitHub.com`, `max-age=600` | PROUVÉ, en-têtes |
| Variantes | http→https 301, slash final 301, `github.io` 301 vers le domaine, `www.` UNKNOWN | PROUVÉ / UNKNOWN |
| Framework | Astro 5 + Starlight 0.37, statique, `trailingSlash: 'always'` | PROUVÉ, `astro.config.mjs` |
| Langues | EN (racine), FR (`/fr/`) | PROUVÉ |
| Source du contenu guide | dépôt `claude-cowork-guide`, généré par `scripts/prepare-guide-content.mjs` | PROUVÉ |
| CI / déploiement | `.github/workflows/static.yml` : tests, `astro check`, build, gate SEO, Pages. Guide figé par `GUIDE_COMMIT` | PROUVÉ |
| GSC | serveur gsc-mcp configuré pour les sessions ouvertes dans le dépôt landing, non exposé à cette session | DÉCLARÉ |
| GA4 | ID public `G-WH1C8CM79E`, partagé avec cc.bruniaux.com selon l'audit du 04/09 | DÉCLARÉ |
| Objectif | guide gratuit FR/EN pour TPE/PME, conversions documentées : clic vers le guide, GitHub, abonnement | DÉCLARÉ, `CLAUDE.md` |

## Matrice de couverture

| Capacité | Rôle | Outil | Résultat | Limite |
| --- | --- | --- | --- | --- |
| Crawl HTTP | statuts, canonicals, hreflang, liens | scripts Node + curl (`raw/tech/`) | 112/112 URL, 13 993 liens internes, 121 sortants | maillage éditorial hors barre latérale non isolé |
| Build et contrats | régression locale | `pnpm test`, `check`, `build`, `check:built-seo`, `check:public-seo` | 9/9, 0 erreur, 112 pages, **gate FAIL** (2), smoke 7/7 | build local sur guide `412b3ef`, prod sur `d0fc8f0` |
| Données structurées | syntaxe, entités | extraction JSON-LD | 126 blocs valides, incohérences d'entités | éligibilité Google non observée |
| Contenu | exactitude, métadonnées | curl + sources + CHANGELOG 1.14.0 | 112 pages analysées | relecture page à page du guide non faite |
| GSC | trafic, indexation | gsc-mcp | **échec** : outils non exposés au sous-agent ; appel direct refusé par le classifieur du mode auto | trafic, indexation et requêtes `UNKNOWN` |
| GA4 | comportement organique | gsc-mcp GA4 | non exécuté | `UNKNOWN` |
| Bing Webmaster | indexation Bing | gsc-mcp Bing | non exécuté | `UNKNOWN` |
| PageSpeed / CrUX | performance terrain et labo | API PSI v5, CrUX | **échec** : PSI 429 sans clé (2 essais), CrUX 403 sans clé | CWV `UNKNOWN` |
| Lighthouse local | laboratoire | `command -v lighthouse` | absent | pas de mesure labo |
| Navigateur réel | rendu, console | claude-in-chrome | extension non connectée | rendu et contraste non observés |
| Analyse statique perf | poids, scripts, images | curl sur 6 pages | mesuré | sans lien prouvé aux CWV |
| SERP | positions, concurrents | Perplexity search, WebSearch | 9 requêtes | pas de SERP Google ni Bing |
| Visibilité IA | citations | Perplexity ask (3 questions), `llms.txt`, robots | observé | une observation par question |
| DataForSEO, SerpApi, Ahrefs | volumes, backlinks | config | désactivés (`off`), aucun appel | aucun backlink ni volume |
| GitHub | doublons | `gh issue list` | 7 issues lychee, dont 4 ouvertes (#4 à #7) | - |

## Ce qui fonctionne (PROUVÉ, 112/112 URL)

Statut 200, canonical auto-référente unique, un H1, aucun `noindex`, hreflang en/fr/x-default réciproque, 0 lien interne cassé ou redirigé, 0 orpheline, profondeur maximale 3, FAQPage conforme à la FAQ visible. Les correctifs du 4 septembre sont toujours en place.

## Constats

Identifiants stables `F-NN`. Détail et artefacts : `.audit/seo/2026-10-11-cowork.bruniaux.com/derived/{tech,content,perf,gsc}/findings.md` (local, non versionné).

| ID | Priorité | Statut | Constat | Sources du volet |
| --- | --- | --- | --- | --- |
| F-01 | P0 | PROUVÉ | La production publie des faits produit périmés (v1.12.0/v1.13.0) : exécution locale, computer use en preview, pas de Claude unifié, modèles Opus 5, `/releases/` arrêté à v1.13.0, `llms.txt` « checked 2026-09-04 ». 0/112 page ne mentionne Claude 5.5 ni les nouveaux modes d'approbation. Cause : `0d45ceb` non poussé et `GUIDE_COMMIT: d0fc8f0` | CONT-01, CONT-02, TECH-02 |
| F-02 | P1 | PROUVÉ | Avec le guide v1.14.0, `pnpm check:built-seo` échoue : `#q-cowork-est-il-gratuit-` (slug GitHub) ne correspond pas à l'id Astro `q-cowork-est-il-gratuit`. Bloque F-01 | TECH-01 |
| F-03 | P1 | PROUVÉ | `/workflows/` et `/fr/workflows/` annoncent 29 workflows, en affichent 25 ; les cartes renvoient vers GitHub au lieu des pages `/guide/workflows/` du site | TECH-04 |
| F-04 | P1 | PROUVÉ | 4 liens 404 sur `/prompts/` (fichiers `.en.md` inexistants) ; 14 liens sortants en 301 ; 4 issues lychee ouvertes (#4 à #7) dont la cause est corrigée ; lychee ne vérifie que l'accueil | TECH-05, TECH-16 |
| F-05 | P1 | PROUVÉ | 86/112 pages partagent la même meta description, dont 42 pages FR en anglais | CONT-03, TECH-06 |
| F-06 | P1 | PROUVÉ | Aucune image sociale sur les 96 pages du guide ; `og:locale` non conforme ; l'image OG dit « 70+ prompts » et une accroche « Claude Desktop » | CONT-04, CONT-05, TECH-12 |
| F-07 | P1 | PROUVÉ (poids) / UNKNOWN (CWV) | Un index de recherche JSON de 163 Ko est inliné dans chaque page (51 à 68 % du HTML) ; l'accueil appelle l'API GitHub sans authentification au chargement | PERF-01, TECH-14, PERF-03 |
| F-08 | P1 | PARTIEL | Contraste du bouton primaire calculé à 2,80:1 en sombre (mode par défaut) et 4,19:1 en clair, sous le seuil WCAG AA 4,5:1. Calcul sur variables CSS, rendu non observé | PERF-05, PERF-06 |
| F-09 | P2 | PROUVÉ | JSON-LD : `#website` défini 3 fois avec 3 noms, `#person` 2 fois ; breadcrumb sans page courante ; 38 `SoftwareApplication` avec `Offer` 0 EUR et OS macOS/Windows pour des versions du guide ; `speakable` vers `#faq` absent | TECH-11, CONT-07 |
| F-10 | P2 | PROUVÉ | 3 pages FR du guide en anglais (`expense-tracking`, `meeting-prep`, `file-organization`) ; titres dupliqués EN/FR (8 pages) ; 9 titles > 60 caractères | TECH-07, CONT-06, TECH-13 |
| F-11 | P2 | PROUVÉ | La 404 est la page générique GitHub Pages | TECH-08 |
| F-12 | P2 | PROUVÉ | Hiérarchie : saut h1→h3 sur 4 gabarits landing ; sur le guide, le h2 « On this page » précède le h1 (structure Starlight) | PERF-07 |
| F-13 | P2 | PROUVÉ | Non-affiliation à Anthropic visible sur 2/112 pages, date de mise à jour sur 4/112 | CONT-07 |
| F-14 | P2 | PROUVÉ | `/favicon.ico` 404 ; `robots.txt` racine du dépôt (non servi) obsolète ; `llms-full.txt` 404, plus référencé | TECH-15, SERP-03 |
| F-15 | P2 | PROUVÉ / DÉCLARÉ | GA4 sur 16/112 pages seulement ; ID partagé avec cc.bruniaux.com ; chargé sans consentement | TECH-03, PERF-04 |
| F-16 | P2 | PROUVÉ | Limites GitHub Pages : aucun en-tête de sécurité, assets hachés en `max-age=600`, `/index.html` et paramètres en 200 (canonical correcte) | TECH-09, TECH-10, PERF-02 |
| F-17 | UNKNOWN | UNKNOWN | GSC, GA4, Bing, CrUX/PSI, SERP Google et variante `www.` non mesurés | GSC-01, PERF, TECH-09 |
| F-18 | P2 | PARTIEL | Visibilité : 1 présence sur 9 requêtes (Perplexity, « Claude Cowork TPE PME », rang 6) ; cité en premier par Perplexity sur la question FR TPE/PME ; aucune page ne cible les intentions tarifs ou comparatif | SERP-01, SERP-02 |

## Hypothèses écartées

- « La v1.13.0 du guide manque en production » : faux, `d0fc8f0..f7a3846` ne modifie que des métadonnées, aucune page du guide.
- « Liens internes cassés comme le 4 septembre » : faux, 0 sur 13 993.
- « hreflang ou canonical incomplets » : faux, 112/112 conformes.

## Conflits et inconnues

- Aucune métrique de trafic ou d'indexation : une absence de donnée ne prouve ni absence de trafic ni absence de problème.
- Les contrastes et le poids de page ne sont pas reliés à des mesures CWV.
- Les observations SERP viennent de Perplexity et d'une recherche web US, pas de Google France.
