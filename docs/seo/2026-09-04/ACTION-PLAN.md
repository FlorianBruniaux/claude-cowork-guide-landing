# Plan d'action SEO

## P0, avant intégration

1. Intégrer les commits guide jusqu'à `d0fc8f0cae0951b4bf4acaf1bcfef536e5fa3a1c` en premier. Acceptation : version 1.12.0, 70 prompts, 29 workflows, parité FR et contrôles verts.
2. Intégrer ensuite les commits landing. Sa CI exige exactement ce SHA guide. Acceptation : tests, check Astro, build et contrôle SEO final verts.
3. Examiner le diff final des deux dépôts. Acceptation : aucune modification hors périmètre et aucun secret.

## P1, après déploiement autorisé

1. Vérifier en production accueil, FAQ, guide, workflows et une route FR sur desktop et mobile.
2. Relancer le smoke public et sonder un exemple de chaque collection.
3. Demander une nouvelle inspection GSC des trois URL `UNKNOWN` seulement si cette écriture est autorisée.
4. Supprimer l'ancien `sitemap.xml` de GSC seulement avec autorisation explicite.
5. Prouver la propriété GA4, le stream et le hostname. Créer un ID Cowork distinct si le partage avec Claude Code n'est pas intentionnel.

## P2, décisions d'infrastructure

1. Décider si `/index.html` mérite une redirection 301 selon ses liens externes et impressions.
2. Choisir une couche capable de servir des headers. Commencer la CSP en report-only et vérifier Analytics, recherche et navigation.
3. Reprendre PageSpeed/CrUX quand le quota est disponible. Ne pas remplacer les données terrain par Lighthouse local.
4. Ajouter `lastmod` seulement depuis une date de source fiable.

## Portfolio, hors périmètre

Vérifier ou créer une fiche publique `Claude Cowork Guide` avec le nom exact, le domaine canonique, le dépôt, la licence et la non-affiliation. N'ajouter le portfolio à `sameAs` qu'après preuve de cette URL et de son contenu.
