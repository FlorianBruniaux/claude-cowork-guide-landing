# Cowork SEO corrections implementation plan

> Execute in order. The guide is authoritative and must be corrected before the landing consumes it.

**Goal:** eliminate P0/P1 factual and technical SEO defects with executable local proof.

**Architecture:** canonical repository facts flow from the guide into generated landing content. Shared landing data renders HTML and structured data. Post-build checks inspect the final static output rather than source templates alone.

**Stack:** Markdown, shell checks, Node.js native test runner, Astro 5, Starlight, TypeScript, pnpm.

---

### Task 1: Align the guide source of truth

**Files:** `VERSION`, `README.md`, `README.fr.md`, `MANIFEST.yaml`, `CITATION.cff`, `llms.txt`, `machine-readable/llms.txt`, `machine-readable/reference.yaml`, `CLAUDE.md`, `AGENTS.md`, `scripts/update-stats.sh`, `scripts/sync-version.sh`, `scripts/check-translations.sh`, `guide/methodologies.fr.md`, and active guide/reference pages containing P0/P1 claims.

1. Run existing checks and capture the failures.
2. Add assertions for all version consumers and numbered prompt counting.
3. Align product facts, version, counts, canonical domain, and translations.
4. Run version, statistics, translation, link, and diff checks.
5. Commit only explicit guide paths.

### Task 2: Add landing tests and executable gates

**Files:** `package.json`, `pnpm-lock.yaml`, `scripts/check-built-seo.mjs`, `scripts/check-public-seo.mjs`, `tests/*.test.mjs`, `.github/workflows/static.yml`, `scripts/prepare-guide-content.mjs`, `src/content.config.ts`.

1. Write failing fixture tests for built-page and sitemap contracts.
2. Implement the smallest checker that satisfies those tests.
3. Make missing guide content fatal and record the consumed guide SHA.
4. Install `@astrojs/check` and make CI run test, check, build, and built-output verification.
5. Prove red then green and commit explicit paths.

### Task 3: Correct landing facts and entity graph

**Files:** `src/data/i18n.ts`, new shared fact/FAQ data, `src/layouts/Layout.astro`, FAQ pages, comparison and collection pages, Starlight head, `public/llms.txt`, `README.md`.

1. Add tests for forbidden stale claims and shared FAQ rendering inputs.
2. Replace 28 with verified 29 where it describes the complete workflow corpus.
3. Remove false prices, quotas, global status dates, platform limits, and capability absolutes.
4. Generate FAQ HTML and JSON-LD from one locale-specific data source.
5. Replace the false product offer schema with stable guide, website, and person entities.
6. Prefer same-language internal learning routes; keep GitHub for source and contribution.
7. Update repository documentation and commit explicit paths.

### Task 4: Build, inspect, and report

**Files:** `docs/seo/2026-09-04/*.md`; ignored `.audit/seo/2026-09-04-cowork-bruniaux/**`.

1. Run frozen install, tests, Astro check, build, built SEO gate, public smoke, and diff checks.
2. Inspect representative desktop and mobile renders.
3. Record coverage, findings, evidence limits, corrections, and residual risks.
4. Request an independent final review, fix accepted findings, and rerun the final suite.
5. Commit reports only after evidence is final. Do not push, merge, or deploy.
