import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import { remarkGuideLinks } from './plugins/remark-guide-links.mjs'
import { readdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * Generate sidebar items for "Guide" by reading only the flat .md files
 * in src/content/docs/guide/ — excludes index.md and subdirectories.
 * Falls back to empty array if content hasn't been generated yet.
 */
function getCoreGuideItems() {
  const guideDir = resolve(__dirname, 'src/content/docs/guide')
  if (!existsSync(guideDir)) return []
  return readdirSync(guideDir)
    .filter(f => f.endsWith('.md') && f !== 'index.md')
    .sort()
    .map(f => ({ slug: `guide/${f.replace('.md', '')}` }))
}

export default defineConfig({
  site: 'https://cowork.bruniaux.com',
  trailingSlash: 'always',

  integrations: [
    starlight({
      title: 'Cowork Guide',
      description: 'Complete guide for Claude Cowork — from getting started to advanced workflows and reference documentation.',
      disable404Route: true,
      locales: {
        root: { label: 'English', lang: 'en' },
        fr: { label: 'Français', lang: 'fr' },
      },
      customCss: [
        './src/styles/global.css',
        './src/styles/components.css',
        './src/styles/starlight-overrides.css',
      ],
      components: {
        Header: './src/components/starlight/Header.astro',
        Footer: './src/components/starlight/Footer.astro',
      },
      head: [
        {
          // Sync our localStorage 'theme' key with Starlight's 'starlight-theme' key
          // so both systems respect the user's dark/light preference.
          tag: 'script',
          attrs: {},
          content: `(function(){var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);localStorage.setItem('starlight-theme',t);})();`,
        },
      ],
      sidebar: [
        {
          label: 'Guide',
          translations: { fr: 'Guide' },
          items: getCoreGuideItems(),
        },
        {
          label: 'Workflows',
          translations: { fr: 'Workflows' },
          autogenerate: { directory: 'guide/workflows' },
        },
        {
          label: 'Prompts',
          translations: { fr: 'Prompts' },
          autogenerate: { directory: 'guide/prompts' },
        },
        {
          label: 'Reference',
          translations: { fr: 'Référence' },
          autogenerate: { directory: 'guide/reference' },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      serialize(item) {
        if (item.url === 'https://cowork.bruniaux.com/') {
          return { ...item, priority: 1.0, changefreq: 'weekly' }
        }
        if (item.url.includes('/fr/')) {
          return { ...item, priority: 0.9, changefreq: 'weekly' }
        }
        if (item.url.includes('/guide/')) {
          return { ...item, priority: 0.85, changefreq: 'weekly' }
        }
        return { ...item, priority: 0.7, changefreq: 'monthly' }
      },
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],

  markdown: {
    remarkPlugins: [remarkGuideLinks],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
})
