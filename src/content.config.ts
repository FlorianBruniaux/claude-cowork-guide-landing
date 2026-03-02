import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'
import { docsLoader } from '@astrojs/starlight/loaders'
import { docsSchema } from '@astrojs/starlight/schema'

// Dummy collection to ensure content layer initializes before Starlight routing
const _meta = defineCollection({
  loader: glob({ pattern: '**/_*.json', base: './src/content' }),
  schema: z.object({}),
})

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema(),
})

export const collections = { _meta, docs }
