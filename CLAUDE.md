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
`/Users/florianbruniaux/Sites/perso/claude-code-ultimate-guide/cowork/`

**Workflow obligatoire**:
1. Modifier d'abord le guide principal (cowork/)
2. Puis synchroniser ici

Ne JAMAIS modifier les stats ou le contenu ici sans avoir d'abord mis à jour le guide principal.

## Éléments synchronisés depuis le guide

| Élément | Source (guide) | Fichiers landing |
|---------|----------------|------------------|
| Workflows count | `cowork/workflows/*.md` | index.html (hero stats, badges) |
| Prompts count | `cowork/prompts/*.md` | index.html (hero stats, section) |
| Golden Rules | `cowork/guide/03-security.md` | index.html section |
| FAQ | `cowork/reference/faq.md` | index.html (schema + HTML) |
| **Guide search index** | `cowork/**/*.md` headings | `cowork-data.js` (25 entrées) |
| **Prompts search index** | `cowork/prompts/*.md` | `prompts-data.js` (70 entrées) |

## Valeurs actuelles (à maintenir synchronisées)

| Métrique | Valeur | Source |
|----------|--------|--------|
| Workflows | `5` | workflows/ directory |
| Prompts | `70` | prompts/*.md (20 file-ops + 16 docs + 17 data + 17 research) |
| FAQ questions | `10+` | reference/faq.md |
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
| Badge | None | "Research Preview" |
| Platform | Terminal (all OS) | macOS only |

## Synchronisation des fichiers de recherche

### cowork-data.js (guide index)

**Quand mettre à jour :**
- Nouvelle section majeure ajoutée au guide
- Fichier .md renommé ou supprimé
- Ancre (#section) modifiée
- Nouveau workflow ajouté

### prompts-data.js (prompts index)

**Quand mettre à jour :**
- Nouveau prompt ajouté à une catégorie
- Prompt renommé ou restructuré
- Nouvelle catégorie de prompts

### search-data.js (FAQ + Rules)

**Quand mettre à jour :**
- Nouvelle FAQ ajoutée
- Golden Rule modifiée ou ajoutée
- Question/réponse mise à jour

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
```

## Cross-linking

### Dans Cowork Landing
Card "For Developers" → lien vers Claude Code Guide

### Dans Code Landing (à ajouter)
Card "For Knowledge Workers" → lien vers Cowork Guide
(Section Ecosystem ou nouvelle section)
