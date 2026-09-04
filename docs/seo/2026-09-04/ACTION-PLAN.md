# Plan d'action SEO

## P0, intégration terminée

1. Intégrer les commits guide jusqu'à `d0fc8f0cae0951b4bf4acaf1bcfef536e5fa3a1c` en premier. Acceptation : version 1.12.0, 70 prompts, 29 workflows, parité FR et contrôles verts.
2. Intégrer ensuite les commits landing. Sa CI exige exactement ce SHA guide. Acceptation : tests, check Astro, build et contrôle SEO final verts.
3. Examiner le diff final des deux dépôts. Acceptation : aucune modification hors périmètre et aucun secret.

Les trois critères sont satisfaits. Le guide est sur `d0fc8f0cae0951b4bf4acaf1bcfef536e5fa3a1c`. Le dernier SHA qui modifie le site landing est `41e05a6a0bb64531ff432a214e4a3b85f3c60e59`; les commits suivants ne mettent à jour que les rapports. Les deux branches `main` correspondent à `origin/main` après publication.

## P1, déploiement et GSC terminés

1. Vérifier en production accueil, FAQ, guide, workflows et une route FR sur desktop et mobile.
2. Relancer le smoke public et sonder un exemple de chaque collection.
3. Réinspection GSC exécutée : les trois URL restent `NEUTRAL`, sans état de crawl exploitable.
4. Ancien `sitemap.xml` supprimé de GSC et `sitemap-index.xml` soumis, téléchargé sans erreur ni warning.
5. Prouver la propriété GA4, le stream et le hostname. Créer un ID Cowork distinct si le partage avec Claude Code n'est pas intentionnel.

Les points 1 à 4 sont terminés. Le point 5 reste bloqué par l'absence d'identifiant de propriété et de preuve du stream GA4 Cowork.

## P2, décisions d'infrastructure

1. Décider si `/index.html` mérite une redirection 301 selon ses liens externes et impressions.
2. Choisir une couche capable de servir des headers. Commencer la CSP en report-only et vérifier Analytics, recherche et navigation.
3. Reprendre PageSpeed/CrUX quand le quota est disponible. Ne pas remplacer les données terrain par Lighthouse local.
4. Ajouter `lastmod` seulement depuis une date de source fiable.

## Portfolio, hors périmètre

Vérifier ou créer une fiche publique `Claude Cowork Guide` avec le nom exact, le domaine canonique, le dépôt, la licence et la non-affiliation. N'ajouter le portfolio à `sameAs` qu'après preuve de cette URL et de son contenu.
