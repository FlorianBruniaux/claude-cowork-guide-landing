# Rapport d'implémentation SEO, 11 octobre 2026

Statut : **corrigé et validé localement, non poussé, non déployé.** Epic : https://github.com/FlorianBruniaux/claude-cowork-guide-landing/issues/8

## Correspondance constats, issues, commits

| Constat | Issue | Commits landing | Commits guide (poussés) | État |
| --- | --- | --- | --- | --- |
| F-01 | #10 | `0d45ceb` (v1.14.0), `1c11cf6` (`GUIDE_COMMIT` 334fd3d, tests post-build) | `412b3ef`, `4b695a8`, `334fd3d` | attend le push landing et le déploiement |
| F-02 | #9 | `34e30f1`, `4d9d970` | - | validé localement |
| F-03 | #11 | `89deed4`, `78f16e5` | - | validé localement |
| F-04 | #12 | `389fa08`, `a27add3` | `334fd3d` | validé localement ; #4 à #7 fermées |
| F-05 | #13 | `25d72c8`, `4d9d970` | - | validé localement |
| F-06 | #14 | `d99fc5c` | - | validé localement |
| F-07 | #15 | `3295a21`, `4d9d970` | - | validé localement, recherche non testée en navigateur |
| F-08 | #16 | `915ecb6` | - | validé par calcul, rendu non vu |
| F-09 | #17 | `14bc73f`, `4d9d970` | - | validé localement |
| F-10 | #18 | `14bc73f` | `4b695a8` | validé localement |
| F-11 | #19 | `a9baf49`, `39347ef` | - | validé localement, prod à vérifier |
| F-12 | #20 | `6e76563`, `78f16e5`, `4b3caa1` | - | validé localement |
| F-13 | #21 | `8333444` | - | validé localement |
| F-14 | #22 | `4140edc` | - | validé localement |
| F-15 | #23 | - | - | bloqué : décision GA4 |
| F-16 | #24 | - | - | bloqué : décision hébergement |
| F-17 | #25 | - | - | bloqué : accès GSC/GA4/Bing et clé PSI |
| F-18 | #26 | - | - | dépend de #25 |

Rapport et plan : `07e9b26`. Intégration des trois branches de travail : `bef7a81`, `879fb8a`, `c915ddf`.

## Validation

Séquence de la CI, depuis un `dist/` vide, sur `main` local `4d9d970` avec le guide `334fd3d` :

| Étape | Résultat |
| --- | --- |
| `pnpm test` (unitaires) | 38/38 |
| `pnpm check` | 0 erreur, 0 warning |
| `pnpm build` | 113 pages (112 indexables et `404.html`) |
| `pnpm check:built-seo` | 112 pages, 112 URL sitemap, 0 finding |
| `pnpm test:built` | 21/21 |
| `scripts/check-headings.mjs` | 0 saut sur les pages landing |
| `scripts/check-contrast.mjs` | toutes les paires à au moins 4,5:1 |
| `scripts/check-outbound-links.mjs dist` | 57 liens, 0 cassé |
| Guide `check-translations.sh` | 47/47 |

Mesures sur `dist/` : description partagée par au plus 1 page (86 avant), `og:image` absolue 112/112 (16 avant), `dist/index.html` 76 205 octets (242 127 avant), accueil et `llms.txt` en v1.14.0, `/guide/02-capabilities/` avec la section « One Claude », 29 workflows (25 avant), 0 `SoftwareApplication` sur `/releases/`.

Revue indépendante : aucun point bloquant ; quatre remarques corrigées dans `4d9d970` (échappement YAML, fragments GitHub, regex des releases, test d'index figé).

Changement de CI : les tests qui lisent `dist/` sont dans `tests/built/` et tournent après le build (`pnpm test:built`). Sans ce changement, la CI aurait échoué sur 18 tests, car `pnpm test` tourne avant le build.

## Non vérifié

- Rendu navigateur (recherche Cmd+K, boutons, titres re-balisés) : aucun navigateur pilotable, Chrome headless bloqué par le bac à sable.
- Production : rien n'est déployé tant que la landing n'est pas poussée.
- GSC, GA4, Bing, CrUX : voir #25. Aucun effet sur la recherche n'est revendiqué.

## Suite

1. Pousser la landing (`main`, 24 commits d'avance sur `origin/main`), attendre le workflow Pages.
2. `pnpm check:public-seo`, curl de `/llms.txt`, `/guide/02-capabilities/`, `/releases/`, d'une URL inconnue (404) ; test de la recherche dans un navigateur ; fermeture de #9 à #22 et #10.
3. #25 depuis une session ouverte dans le dépôt landing, puis #26.
