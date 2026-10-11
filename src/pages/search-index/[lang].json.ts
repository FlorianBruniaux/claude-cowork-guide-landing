import type { APIRoute, GetStaticPaths } from 'astro'
import type { Lang } from '../../data/i18n'
import { getSearchIndex } from '../../data/search-index'

const LANGS: Lang[] = ['en', 'fr']

export const getStaticPaths: GetStaticPaths = () => LANGS.map(lang => ({ params: { lang } }))

export const GET: APIRoute = ({ params }) =>
  new Response(JSON.stringify(getSearchIndex(params.lang as Lang)), {
    headers: { 'Content-Type': 'application/json' },
  })
