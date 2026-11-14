# Règles d'exécution GitHub Actions

Deux règles du dépôt décident qui peut lancer quel workflow, et sur quel événement. On les voit dans Settings > Actions > Policies, ou par l'API :

```bash
gh api repos/FlorianBruniaux/claude-cowork-guide-landing/actions/policies
```

| Règle | Workflows | Acteur | Événements |
| --- | --- | --- | --- |
| `6761` Owner-requested workflows only | tous sauf `static.yml` | Florian seul | `workflow_dispatch` |
| `14013` Owner push - Deploy | `.github/workflows/static.yml` | Florian seul | `push`, `workflow_dispatch` |

Conséquences :

- un push de Florian sur `main` déploie le site ;
- Link Check ne part qu'à la main, ses déclenchements `schedule` et `workflow_run` sont refusés ;
- un nouveau workflow automatique a besoin de sa propre exception.

## Reconnaître un blocage

Un run refusé par une règle finit en `startup_failure`, sans job ni journal. La cause n'apparaît que dans l'annotation de la page du run, par exemple « Event 'push' is not allowed to trigger Actions workflows. Workflow file: '.github/workflows/static.yml' ». L'API des runs ne la renvoie pas.

## Historique

La règle `6761` a été créée le 07/10/2026, en même temps que la règle `6751` de la landing Claude Code. Celle-ci a reçu le 28/10 une exception pour son déploiement (`9314`), pas Cowork. Du 11/10 au 14/11/2026, chaque push Cowork a donc fini en `startup_failure` et le site n'a été mis à jour que par des lancements manuels. L'exception `14013` et l'exclusion de `static.yml` dans `6761` ont été posées le 14/11/2026.
