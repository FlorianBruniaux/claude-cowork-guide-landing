# Rapport d'implémentation SEO

Statut : **INTÉGRÉ, DÉPLOYÉ ET VALIDÉ EN PRODUCTION**.

Date de validation : 4 septembre 2026.

## Résultat

- Revue indépendante finale : 0 P0, 0 P1.
- Build : 112 pages HTML et 112 URL sitemap, sans finding du gate SEO.
- Parité du corpus publié : 44 pages guide EN et 44 FR.
- Guide : 29 workflows, 70 prompts, version 1.12.0, 47 traductions synchronisées.
- Production : smoke HTTP strict 7/7 après déploiement. Le dernier SHA qui modifie le site est `41e05a6a0bb64531ff432a214e4a3b85f3c60e59`; les commits suivants ne mettent à jour que ces rapports.

## Changements

- Source guide alignée avant consommation par la landing.
- Claims Cowork qualifiés par plan, surface, permissions et état beta ou preview.
- Prix, quotas, dates GA et diagnostic VPN non prouvés retirés ou marqués `UNKNOWN`.
- FAQ visible et JSON-LD réunies dans `src/data/faq-data.ts`.
- Graphe JSON-LD corrigé pour décrire le guide communautaire, sans offre produit fictive.
- Liens, fragments, H1, locale Starlight, `x-default`, indexes de collections et comportement guide absent corrigés.
- Tests Node, check Astro réel, contrôle du build et smoke public strict ajoutés.
- CI ordonnée et liée au SHA exact du guide : checkout du guide, vérification du SHA, tests, check, build, gate SEO, puis publication.
- README et `llms.txt` landing remis à jour.
- Navigation mobile vérifiée après correction du header.

## Cycle TDD observé

Le premier `pnpm test` a échoué avec `ERR_MODULE_NOT_FOUND` pour le checker non implémenté. Les fixtures ont ensuite démontré successivement les faux négatifs suivants avant leur correction : canonical d'une autre route, canonical dupliquée, fragments absents, redirection vers une autre route, canonical publique différente et route HTML servie en `text/plain`.

L'installation d'`@astrojs/check` a transformé une invite interactive sans preuve en vrai diagnostic : 23 erreurs initiales, puis 0 erreur. Le résultat final conserve 12 hints non bloquants, principalement des scripts inline, variables inutilisées et `document.execCommand` déprécié.

## Validation finale

| Contrôle | Résultat |
| --- | --- |
| `./tests/test-content-checks.sh` | PASS |
| `./scripts/check-translations.sh` | PASS, 47/47 |
| `pnpm test` | PASS, 9/9 |
| `pnpm check` | PASS, 0 erreur, 0 warning, 12 hints |
| `pnpm build` | PASS, 112 pages |
| `pnpm check:built-seo` | PASS, 112 pages et 112 URL sitemap |
| `pnpm check:public-seo` | PASS, 7/7 après déploiement |
| Rendu desktop production | PASS sur accueil EN/FR, FAQ, guide et workflows |
| Rendu mobile production 390 x 844 | PASS sur accueil, FAQ, guide et workflows |
| GitHub Pages | PASS, workflow `33878780179` |
| GSC | PASS, sitemap canonique soumis sans erreur et ancien sitemap retiré |
| Revue indépendante, troisième passe | PASS, 0 P0 et 0 P1 |

## Commits locaux

Guide, branche `codex/cowork-seo-audit-20260904` :

- `4ba3b74` `docs(cowork): align active product guidance`
- `8970408` `fix(docs): remove dead workflow links`
- `3b9066b` `docs(cowork): bound active capability claims`
- `7068f34` `fix(docs): repair generated guide anchors`
- `04f9124` `fix(docs): qualify network and pricing claims`
- `b425d54` `fix(ci): compare translation commit order`
- `d0fc8f0` `fix(ci): avoid bash errexit on counters`

Landing, branche `codex/cowork-seo-audit-20260904` :

- `3cf3307` `feat(seo): enforce generated site contracts`
- `c838a34` `fix(seo): align Cowork facts and entities`
- `2b4f88b` `fix(seo): close final audit blockers`
- `c2e104a` `chore(seo): integrate audited guide revision`
- `67b3df5` `fix(ci): pin successful guide revision`
- `41e05a6` `fix(ci): prepare generated content before check`

## Actions externes

- Guide poussé sur `origin/main` au SHA `d0fc8f0cae0951b4bf4acaf1bcfef536e5fa3a1c`.
- Landing poussée et déployée depuis `origin/main`. Le dernier SHA qui modifie le site est `41e05a6a0bb64531ff432a214e4a3b85f3c60e59`; les commits suivants sont documentaires.
- Ancien sitemap `https://cowork.bruniaux.com/sitemap.xml` supprimé de GSC.
- Sitemap canonique `https://cowork.bruniaux.com/sitemap-index.xml` soumis le 4 septembre 2026 à 13:40:02 UTC, téléchargé par GSC à 13:40:03 UTC, sans erreur ni warning.
- Aucune modification GA4 ni écriture portfolio.

## Risques résiduels

- GA4 reste `UNKNOWN` : le Measurement ID observé est partagé avec `cc.bruniaux.com` et la propriété numérique n'est pas connue.
- `/workflows/`, `/fr/workflows/` et `/fr/whitepapers/` restent `NEUTRAL` lors de la réinspection GSC, sans crawl ni canonical exploitables. Leur HTTP 200 et leur présence dans le sitemap ne prouvent pas leur indexation.
- `/index.html`, les headers de sécurité et une CSP report-only dépendent de la couche d'hébergement.
- CrUX et PageSpeed restent `UNKNOWN` après une réponse API 429.
- Les 12 hints Astro n'empêchent ni le typage ni le build, mais restent une dette technique mesurable.
