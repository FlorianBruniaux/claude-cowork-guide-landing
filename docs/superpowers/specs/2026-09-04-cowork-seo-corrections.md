# Cowork SEO corrections specification

Status: approved for implementation by the user prompt dated 2026-09-04.

## Objective

Make the guide repository the factual source of truth, then make the landing site publish the same current, sourced facts in English and French. The work must remain local: no push, merge, deployment, Search Console mutation, Analytics mutation, or portfolio edit.

## Evidence boundary

- Repository baselines: guide `6f7582a050ff4cf186858adb33119f5fd87696f0`; landing `9f4aa355a02459d10d634cc41707f09cd3ff5c7e`.
- Product authority: Anthropic Help Center pages for Cowork access, surfaces, Desktop installation, architecture, and computer use, observed 2026-09-04.
- GSC, GA4, SERP positions, backlinks, and LLM citations remain `UNKNOWN` unless a live authorized read succeeds.
- Structural validation does not prove deployed behavior.

## Canonical facts

1. The Claude Cowork Guide is a free, open-source, community guide. Claude Cowork itself requires an eligible paid Claude plan.
2. The guide contains 70 numbered prompts and 29 bilingual workflows. Counts must be computed or checked, not copied independently.
3. Cowork availability and features vary by surface. Desktop supports macOS and Windows; Linux Desktop is beta with limitations. Web and mobile access are beta where Anthropic documents them.
4. Cowork can execute code in an isolated environment. Local files, browser access, computer use, and connectors depend on the surface and plan.
5. Computer use is a research preview. Do not label the whole Cowork product as research preview or publish an unproved GA date.
6. Current product prices, quotas, fixed usage ratios, VPN absolutes, and performance claims are omitted unless a primary dated source supports them.
7. The public canonical domain is `https://cowork.bruniaux.com/`. GitHub remains the source and contribution destination.

## Architecture

- Guide metadata and public summaries are aligned to `VERSION`, repository inventories, and the canonical fact set.
- Landing facts shared by HTML, metadata, FAQ JSON-LD, and collection pages live in committed TypeScript data. FAQ HTML and `FAQPage.mainEntity` derive from the same arrays.
- Guide ingestion fails when the guide is missing. A production build must never silently publish an empty guide.
- Built-output validation inspects every generated HTML page and sitemap after `astro build`.
- Public smoke validation is read-only and reports network/server failures separately from HTML contract failures.

## Acceptance criteria

- Guide checks report version 1.12.0, 70 prompts, 29 workflows, current canonical URLs, and no missing French methodology page.
- Landing unit tests fail before the checker implementation and pass after it.
- `pnpm check` performs a real Astro type/content check without an installation prompt.
- `pnpm build` ingests the bound guide checkout without duplicate content IDs or missing-guide fallback.
- Built SEO gate verifies unique title, bounded description, one H1, HTTPS self-canonical, indexability, language and path agreement, reciprocal hreflang with self and x-default, sitemap/canonical agreement, parseable JSON-LD, current dates where supplied, and no legacy public URLs.
- FAQ visible answers and FAQ JSON-LD are generated from identical data.
- No `Offer` at 0 EUR, macOS-only claim, no-code absolute, no-cloud absolute, unproved GA date, or fixed price/quota claim remains in active landing content.
- Desktop and mobile render checks cover the home page, FAQ, guide home, and one French route.
- Git status contains only scoped changes; commits remain local on `codex/cowork-seo-audit-20260904`.

## Non-goals

- No production deployment or production-state claim.
- No GA4 configuration change without verified property access and authorization.
- No portfolio change; recommendations are reported separately.
- No speculative programmatic SEO pages or schema added solely for keyword coverage.
