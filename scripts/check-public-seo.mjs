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
      const requestedUrl = new URL(url)
      const finalUrl = new URL(response.url || url)
      const expectsHtml = requestedUrl.pathname.endsWith('/') || requestedUrl.pathname.endsWith('.html')
      if (expectsHtml && !isHtml) contractFailures.push('expected text/html content type')
      if (requestedUrl.origin !== finalUrl.origin || requestedUrl.pathname !== finalUrl.pathname) {
        contractFailures.push(`redirected to ${finalUrl.href}`)
      }
      if (isHtml) {
        const canonicalTag = body.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i)?.[0]
          ?? body.match(/<link\b[^>]*href=["'][^"']+["'][^>]*rel=["']canonical["'][^>]*>/i)?.[0]
        const canonical = canonicalTag?.match(/href=["']([^"']+)["']/i)?.[1]
        if (!canonical) contractFailures.push('missing canonical')
        else if (canonical !== finalUrl.href) contractFailures.push(`canonical mismatch: ${canonical}`)
      }
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
