# Delta depuis les audits et correctifs précédents

## Changements déjà présents au baseline

- Le commit historique `0cdc556` avait normalisé les URL sitemap avec slash final, ajouté les articles Starlight et les alternates EN/FR, puis retiré un `SearchAction` non justifié.
- Le commit historique `ea3886f` avait ajouté la FAQ gratuite et l'offre 0 EUR. L'audit actuel établit que ces deux éléments sont faux et les retire.
- Le domaine canonique actuel est `cowork.bruniaux.com`, mais des métadonnées du guide pointaient encore vers l'ancien GitHub Pages.

## Nouvelle preuve

- GSC est maintenant mesuré sur 28 et 90 jours avec données finales, couverture calendaire complète et limite de lignes documentée.
- L'ancien sitemap soumis est identifié comme source exacte de l'erreur GSC.
- L'analyse exhaustive du build chiffre le maillage cassé : 147 cibles uniques, 252 occurrences.
- Le double H1 concerne 91 pages et l'absence de `x-default` 93 pages.
- L'installation réelle d'`@astrojs/check` révèle 23 erreurs auparavant masquées.
- Le Measurement ID GA4 partagé entre Cowork et Claude Code invalide l'attribution actuelle.

## Changement de doctrine

- Le guide gratuit et le produit payant sont séparés explicitement.
- Les capacités ne sont plus résumées par un absolu global. Elles sont qualifiées par plan, surface, permissions et état beta/preview.
- Le build final devient la preuve structurelle locale. La production reste une preuve distincte après déploiement.
