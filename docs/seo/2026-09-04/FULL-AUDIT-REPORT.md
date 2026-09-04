# Audit SEO complet de cowork.bruniaux.com

Date d'observation : 4 septembre 2026. Périmètre : guide source, landing Astro, build statique, production publique, Google Search Console et configuration Analytics observable.

## Verdict

**PARTIEL avant correction.** Le site était crawlable et recevait déjà du trafic organique, mais publiait des informations produit fausses et un maillage du guide fortement cassé. Le principal risque n'était pas un manque de balises. Il venait d'une source de vérité fragmentée entre le guide, la landing, la FAQ et les fichiers machine-readable.

La correction locale traite les défauts P0/P1 qui ne demandent pas de décision produit ou d'écriture externe. Elle ne prouve pas le comportement déployé. GA4, CrUX et l'indexation exhaustive restent `UNKNOWN`.

## Périmètre et couverture

| Surface | Couverture | Résultat avant correction |
| --- | ---: | --- |
| Guide source | README EN/FR, métadonnées, LLMs, manifestes, scripts, FAQ, matrices, traductions | Versions 1.1.0 à 1.12.0, 28/29 workflows, claims produit contradictoires, méthodologies FR absentes |
| Landing source | 67 fichiers Astro/TS/JS contrôlés | 23 erreurs quand `astro check` a été réellement installé et exécuté |
| Build local | 109 pages HTML et 109 URL sitemap | 147 cibles internes cassées, 252 occurrences, 91 pages avec deux H1, 93 sans `x-default` |
| Production | 15 pages, 4 endpoints, redirections et liens échantillonnés | Cinq liens cassés confirmés 404, `/index.html` en 200, headers de sécurité absents |
| GSC | propriété domaine, 28 j et 90 j, sitemaps, 10 inspections URL | Accès `siteOwner`, données finales complètes par jour, 7/10 inspections `PASS` |
| GA4 | ID public et possibilité d'attribution | `UNKNOWN`, ID `G-WH1C8CM79E` partagé avec `cc.bruniaux.com` |
| Performance terrain | PageSpeed/CrUX | `UNKNOWN`, API 429 |

Baselines Git : guide `6f7582a050ff4cf186858adb33119f5fd87696f0`, landing `9f4aa355a02459d10d634cc41707f09cd3ff5c7e`.

## Mise à jour après intégration

Le guide est intégré et poussé au SHA `d0fc8f0cae0951b4bf4acaf1bcfef536e5fa3a1c`. Le dernier SHA qui modifie le site landing est `41e05a6a0bb64531ff432a214e4a3b85f3c60e59`; les commits suivants ne mettent à jour que ces rapports. Le workflow GitHub Pages `33878780179` associé à ce SHA est terminé avec succès. Le smoke HTTP strict post-déploiement passe sur 7 URL sur 7 et le contrôle visuel production couvre les accueils EN/FR, la FAQ, l'index du guide et les workflows, en desktop et à 390 x 844.

Dans GSC, l'ancien `https://cowork.bruniaux.com/sitemap.xml` a été supprimé. Le sitemap canonique `https://cowork.bruniaux.com/sitemap-index.xml` a été soumis puis téléchargé le 4 septembre 2026, sans erreur ni warning. Les trois URL précédemment `NEUTRAL` le restent après réinspection. Cette absence d'état de crawl exploitable ne prouve pas une absence d'indexation.

## Search Console

Les requêtes utilisent `type=web`, `dataState=final`, un retard de trois jours et une limite de 25 000 lignes. Chaque fenêtre couvre tous les jours demandés et aucune pagination n'est tronquée.

| Fenêtre inclusive | Clics | Impressions | CTR | Position moyenne | Lignes requête-page | Couverture jour |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 2026-08-05 au 2026-09-01 | 68 | 3 275 | 2,08 % | 11,4 | 208 | 28/28 |
| 2026-06-04 au 2026-09-01 | 273 | 11 272 | 2,42 % | 11,5 | 378 | 90/90 |

GSC anonymise les requêtes à faible volume. Les lignes détaillées ne peuvent donc pas reconstituer les agrégats. Le détail visible représente 10 clics et 908 impressions sur 28 jours, puis 34 clics et 1 883 impressions sur 90 jours. Le dénominateur réel des requêtes est inconnu.

`sitemap-0.xml` est traité avec 109 URL et 0 erreur. L'ancien `sitemap.xml` reste soumis, pending, avec 1 erreur, et répond 404. Sa suppression dans GSC exige une écriture externe, interdite dans cet audit.

Sur dix URL inspectées, sept sont `PASS` avec fetch réussi et canonique Google conforme. `/workflows/`, `/fr/workflows/` et `/fr/whitepapers/` sont `NEUTRAL`, sans état de fetch ni canonique exploitable. Leur présence dans le sitemap et leur HTTP 200 ne prouve pas leur indexation.

## Constats P0

1. **FAQ factuellement fausse.** Le HTML et `FAQPage` affirmaient que Cowork était gratuit, macOS-only, incapable d'exécuter du code ou d'utiliser des services cloud, et dépourvu de documentation de sécurité.
2. **Offre structurée trompeuse.** `SoftwareApplication` publiait `Offer price=0 EUR` pour le produit Anthropic. Le guide est gratuit, pas Cowork.
3. **Matrice de capacités absolue.** Les zones de conversion niaient code isolé, connecteurs et surfaces web/mobile documentés par Anthropic.

Sources primaires : [accès Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork), [surfaces web, desktop et mobile](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile), [installation Desktop](https://support.claude.com/en/articles/10065433-install-claude-desktop), [architecture](https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview), [computer use](https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork).

## Constats P1

1. **Maillage cassé à grande échelle.** 147 cibles uniques et 252 occurrences. Causes : locale Starlight forcée à EN, résolution erronée des `README`, suffixes `.en`, et collection absente dans l'URL.
2. **Deux H1 sur 91 pages.** Starlight rendait le titre du frontmatter en plus du H1 Markdown source.
3. **Hreflang incomplet.** 93 pages Starlight n'avaient pas de `x-default`.
4. **Drift de version et de corpus.** Les surfaces publiaient 1.1.0, 1.5.0, 1.6.1, 1.9.0, 1.11.0 et 1.12.0, ainsi que 28 ou 29 workflows.
5. **Fichier IA cassé.** `llms.txt` référençait un `llms-full.txt` public inexistant.
6. **Parité FR incomplète.** `guide/methodologies.fr.md` manquait et plusieurs liens FR sortaient vers des contenus EN.
7. **Contrôle Astro inopérant.** `@astrojs/check` n'était pas installé, donc la commande proposait une installation interactive au lieu de prouver le projet.

## Constats P2 et limites d'hébergement

- `/index.html` répond 200 avec canonical `/`. Une redirection 301 demande une capacité d'hébergement absente du dépôt GitHub Pages inspecté.
- Les headers HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy et Permissions-Policy ne sont pas observés. Une CSP exige d'abord un mode report-only à cause de GA4 et des scripts inline.
- Le sitemap est cohérent, mais sans `lastmod`. Aucune date artificielle n'est ajoutée.
- La syntaxe JSON-LD était valide avant correction. Son exactitude sémantique ne l'était pas.
- L'effet de `llms.txt` sur les citations IA reste `UNKNOWN`.

## Attribution GA4

Le Measurement ID public Cowork est également chargé par `cc.bruniaux.com`. La propriété numérique, le data stream et le mapping hostname ne sont pas prouvés. Aucune requête GA4 ni modification locale de tracking n'a été faite. Toute métrique actuelle pourrait mélanger les deux sites.

## Ce qui est corrigé localement

- FAQ EN/FR et FAQPage générées depuis la même donnée sourcée.
- Retrait de l'offre produit à 0 EUR, ajout d'entités stables `Person`, `WebSite` et `CreativeWorkSeries` pour le guide.
- Comptage affiché aligné sur 29 workflows et 70 prompts.
- Matrices plateforme, accès et code rendues conditionnelles par surface.
- Génération du guide rendue obligatoire, suppression du H1 Markdown rendu en double, collection indexes et résolution des liens corrigés.
- `x-default` ajouté aux pages Starlight et locale du header dérivée de l'URL.
- Vrai `astro check`, tests Node et contrôle SEO post-build ajoutés.
- `llms.txt` landing réécrit sans ressource 404 et avec sources primaires.

## Risques résiduels

- GA4 non attribuable tant que propriété, stream et ID dédié ne sont pas prouvés.
- Les trois URL réinspectées restent `NEUTRAL` dans GSC malgré leur HTTP 200 et leur présence dans le sitemap.
- Les redirections historiques et headers exigent une autre couche d'hébergement.
- CrUX, Rich Results Test, SERP, backlinks et citations LLM non mesurés.
- Les annonces historiques des releases ne sont pas une preuve de l'état produit actuel.
