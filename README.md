# Claude Cowork Guide landing

Static bilingual site for the independent [Claude Cowork Guide](https://cowork.bruniaux.com/). The guide is free and open source. Claude Cowork is an Anthropic product that requires an eligible paid plan and whose capabilities vary by surface.

## Content architecture

- `src/pages/`: English routes at `/` and French routes below `/fr/`.
- `src/content/docs/`: generated Starlight content. Do not edit it directly.
- `../claude-cowork-guide/`: required source repository for guide, workflow, prompt, and reference pages.
- `src/data/faq-data.ts`: shared visible and structured FAQ answers.
- `scripts/prepare-guide-content.mjs`: imports both languages and refuses a guide-less build.
- `scripts/check-built-seo.mjs`: validates the final HTML and sitemap.
- `scripts/check-public-seo.mjs`: read-only production smoke test.

The current verified corpus is 29 bilingual workflows and 70 numbered prompts. Version metadata belongs to the guide repository and is consumed by this site after the guide is integrated first.

## Local development

The guide repository must be a sibling directory named `claude-cowork-guide`.

```bash
pnpm install --frozen-lockfile
pnpm test
pnpm check
pnpm build
pnpm check:built-seo
pnpm dev
```

Run the public smoke test only when network access is authorized:

```bash
pnpm check:public-seo
```

## Deployment contract

GitHub Actions clones the guide, records its commit, runs tests and Astro checks, builds all pages, and validates the built SEO output before publishing GitHub Pages. A green source check is not proof of production behavior; verify the deployed URL separately.

Canonical domain: [cowork.bruniaux.com](https://cowork.bruniaux.com/)

Source guide: [FlorianBruniaux/claude-cowork-guide](https://github.com/FlorianBruniaux/claude-cowork-guide)
