import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

const DEFAULT_URLS = [
  'https://cowork.bruniaux.com/',
  'https://cowork.bruniaux.com/fr/',
  'https://cowork.bruniaux.com/faq/',
  'https://cowork.bruniaux.com/guide/',
  'https://cowork.bruniaux.com/sitemap-index.xml',
  'https://cowork.bruniaux.com/robots.txt',
  'https://cowork.bruniaux.com/llms.txt',
]

export async function checkPublicSeo(urls = DEFAULT_URLS, fetchImpl = fetch) {
  const results = []
  for (const url of urls) {
    try {
      const response = await fetchImpl(url, { redirect: 'follow', headers: { 'user-agent': 'CoworkSeoSmoke/1.0' } })
      const body = await response.text()
      const isHtml = response.headers.get('content-type')?.includes('text/html')
      const contractFailures = []
      if (!response.ok) contractFailures.push(`HTTP ${response.status}`)
      if (isHtml && !/<link\b[^>]*rel=["']canonical["']/i.test(body)) contractFailures.push('missing canonical')
      if (isHtml && !/<h1\b/i.test(body)) contractFailures.push('missing H1')
      results.push({ url, finalUrl: response.url, status: response.status, kind: 'server', failures: contractFailures })
    } catch (error) {
      results.push({ url, kind: 'network', failures: [error.message] })
    }
  }
  return results
}

async function main() {
  const results = await checkPublicSeo(process.argv.slice(2).length ? process.argv.slice(2) : DEFAULT_URLS)
  let failed = false
  for (const result of results) {
    const label = result.failures.length ? 'FAIL' : 'PASS'
    console.log(`${label}\t${result.kind}\t${result.status ?? '-'}\t${result.url}${result.finalUrl && result.finalUrl !== result.url ? ` -> ${result.finalUrl}` : ''}`)
    for (const failure of result.failures) console.log(`  ${failure}`)
    failed ||= result.failures.length > 0
  }
  if (failed) process.exitCode = 1
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) await main()
