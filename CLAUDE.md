# Landing Site - Claude Cowork Guide

## URLs

| Environnement | URL |
|---------------|-----|
| **Production** | https://florianbruniaux.github.io/claude-cowork-guide-landing/ |
| **Custom Domain** | https://cowork.bruniaux.com (à configurer) |
| **GitHub Repo** | https://github.com/FlorianBruniaux/claude-cowork-guide-landing |

## Configuration Custom Domain

**Domaine cible**: `cowork.bruniaux.com`

### Étapes de configuration

1. **Créer fichier CNAME** (à la racine du repo):
   ```
   cowork.bruniaux.com
   ```

2. **Configurer DNS** (chez le registrar de bruniaux.com):
   - Type: `CNAME`
   - Host: `cowork`
   - Value: `florianbruniaux.github.io`

3. **Activer HTTPS** dans GitHub Pages settings (après propagation DNS)

## Source de vérité

**Ce site est SECONDAIRE**. La source de vérité est le guide principal:
`/Users/florianbruniaux/Sites/perso/claude-cowork-guide/`

**GitHub Repo**: https://github.com/FlorianBruniaux/claude-cowork-guide

**Workflow obligatoire**:
1. Modifier d'abord le guide principal (claude-cowork-guide/)
2. Puis synchroniser ici

Ne JAMAIS modifier les stats ou le contenu ici sans avoir d'abord mis à jour le guide principal.

## Éléments synchronisés depuis le guide

| Élément | Source (guide) | Fichiers landing |
|---------|----------------|------------------|
| Workflows count | `workflows/*.md` | index.html (hero stats, badges) |
| Prompts count | `prompts/*.md` | index.html (hero stats, section) |
| Golden Rules | `guide/03-security.md` | index.html section |
| FAQ | `reference/faq.md` | index.html (schema + HTML) |
| **Guide search index** | `**/*.md` headings | `cowork-data.js` (25 entrées) |
| **Prompts search index** | `prompts/*.md` | `prompts-data.js` (70 entrées) |

## Valeurs actuelles (à maintenir synchronisées)

| Métrique | Valeur | Source |
|----------|--------|--------|
| Workflows | `25` | workflows/ directory (23 actifs + 2 dépréciés) |
| Prompts | `70` | prompts/*.md (20 file-ops + 16 docs + 17 data + 17 research) |
| FAQ questions | `13` | reference/faq.md |
| Golden Rules | `7` | guide/03-security.md |

## Fichiers critiques

- **index.html**: Hero, badges, meta tags, FAQ, Golden Rules, footer
- **styles.css**: CSS avec palette indigo (--accent: #6366f1)
- **search.js**: Recherche Cmd+K (MiniSearch)
- **cowork-data.js**: Index des sections du guide
- **search-data.js**: FAQ + Golden Rules pour la recherche
- **prompts-data.js**: Index des 70 prompts

## Différences avec Claude Code Landing

| Aspect | Code Landing | Cowork Landing |
|--------|-------------|----------------|
| Accent color | Blue (#58a6ff) | Indigo (#6366f1) |
| Target audience | Developers | Knowledge workers |
| Main content | Templates, Quiz | Workflows, Prompts |
| Badge | None | "Exploratory Guide" |
| Platform | Terminal (all OS) | macOS only |
| Maturity | Stable (v2.x) | Early access, évolution rapide |

## Synchronisation des fichiers de recherche

### cowork-data.js (guide index)

**Quand mettre à jour :**
- Nouvelle section majeure ajoutée au guide
- Fichier .md renommé ou supprimé
- Ancre (#section) modifiée
- Nouveau workflow ajouté

**Ce qui n'impacte PAS :**
- Corrections de typos
- Ajouts de contenu dans sections existantes

**Workflow de mise à jour :**
```bash
# 1. Identifier les changements dans le guide principal
cd /Users/florianbruniaux/Sites/perso/claude-cowork-guide/
git log --oneline -10  # voir les derniers commits

# 2. Éditer cowork-data.js manuellement pour ajouter/modifier les entrées
cd /Users/florianbruniaux/Sites/perso/claude-cowork-guide-landing/
# Éditer cowork-data.js

# 3. Tester localement
python3 -m http.server 8080
# Cmd+K → vérifier les nouveaux résultats
```

### prompts-data.js (prompts index)

**Quand mettre à jour :**
- Nouveau prompt ajouté à une catégorie
- Prompt renommé ou restructuré
- Nouvelle catégorie de prompts

**Workflow de mise à jour :**
```bash
# 1. Vérifier les nouveaux prompts dans le guide
cd /Users/florianbruniaux/Sites/perso/claude-cowork-guide/
ls prompts/

# 2. Compter par catégorie
find prompts/ -name "*.md" | wc -l

# 3. Mettre à jour prompts-data.js avec les nouvelles entrées
```

### search-data.js (FAQ + Rules)

**Quand mettre à jour :**
- Nouvelle FAQ ajoutée
- Golden Rule modifiée ou ajoutée
- Question/réponse mise à jour

**Workflow de mise à jour :**
```bash
# 1. Vérifier les changements dans reference/faq.md et guide/03-security.md
cd /Users/florianbruniaux/Sites/perso/claude-cowork-guide/
git diff HEAD~5 reference/faq.md guide/03-security.md

# 2. Reporter dans search-data.js
```

## Structure d'une entrée de recherche

```javascript
// Pour cowork-data.js et prompts-data.js
{
    id: 'unique-id',
    type: 'guide' | 'workflow' | 'prompt' | 'faq' | 'rule',
    title: 'Titre affiché dans les résultats',
    content: 'mots-clés séparés par espaces pour le fuzzy search',
    category: 'Catégorie optionnelle',  // affiché comme badge
    url: GUIDE_BASE + 'fichier.md#ancre'
}
```

## Emplacements des stats dans index.html

### Workflows count (5)
- Hero stats section
- Badges (shields.io)
- Meta description

### Prompts count (70)
- Hero stats section
- Section title "70 Prompts Production-Ready"
- Meta tags

### FAQ questions (10+)
- Schema.org JSON-LD
- Section #faq

### Golden Rules (7)
- Section #golden-rules
- search-data.js

**Commandes de vérification :**
```bash
# Vérifier les stats actuelles dans index.html
grep -n "5 workflows" index.html
grep -n "70 prompts" index.html

# Vérifier cohérence avec le guide principal
cd /Users/florianbruniaux/Sites/perso/claude-cowork-guide/
ls workflows/ | wc -l  # doit être 5
find prompts/ -name "*.md" | wc -l  # doit être 70
```

## Test local

```bash
cd /Users/florianbruniaux/Sites/perso/claude-cowork-guide-landing
python3 -m http.server 8080
# Ouvrir http://localhost:8080

# Vérifier
- [ ] Hero stats corrects (5 workflows, 70 prompts)
- [ ] Cmd+K search fonctionne
- [ ] Tous les liens externes OK
- [ ] Responsive mobile OK
- [ ] Research Preview badge visible
- [ ] FAQ schema.org valide
- [ ] Palette indigo (#6366f1) appliquée
```

## Cross-linking

### Dans Cowork Landing
Card "For Developers" → lien vers Claude Code Guide

### Dans Code Landing (à ajouter)
Card "For Knowledge Workers" → lien vers Cowork Guide
(Section Ecosystem ou nouvelle section)
