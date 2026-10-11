import { readFileSync, readdirSync, statSync } from 'node:fs'
import { relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const SELF_HOST = 'cowork.bruniaux.com'
// Share intents and tag loaders answer bots with login walls or 999, so a probe says nothing about them.
const SKIPPED = [/^https:\/\/twitter\.com\/intent\//, /^https:\/\/www\.linkedin\.com\/sharing\//, /^https:\/\/www\.googletagmanager\.com/]

function htmlFilesBelow(root) {
  const result = []
  for (const name of readdirSync(root)) {
    const path = resolve(root, name)
    if (statSync(path).isDirectory()) result.push(...htmlFilesBelow(path))
    else if (path.endsWith('.html')) result.push(path)
  }
  return result
}

function routeFor(root, file) {
  const local = relative(root, file).split(sep).join('/')
  return local === 'index.html' ? '/' : `/${local.replace(/index\.html$/, '')}`
}

const decode = value => value.replaceAll('&amp;', '&')

/** Map of external link (fragment stripped) to the routes that carry it. */
export async function collectOutboundLinks(distDir) {
  const links = new Map()
  for (const file of htmlFilesBelow(distDir)) {
    const route = routeFor(distDir, file)
    for (const match of readFileSync(file, 'utf8').matchAll(/<a\b[^>]*?\bhref="(https?:\/\/[^"]+)"/g)) {
      const url = decode(match[1]).replace(/#.*$/, '')
      if (new URL(url).host === SELF_HOST || SKIPPED.some(pattern => pattern.test(url))) continue
      const pages = links.get(url) ?? []
      if (!pages.includes(route)) pages.push(route)
      links.set(url, pages)
    }
  }
  return links
}

async function probe(url, fetchImpl) {
  const options = { redirect: 'manual', signal: AbortSignal.timeout(20000), headers: { 'user-agent': 'cowork-link-check/1.0' } }
  let response = await fetchImpl(url, { ...options, method: 'HEAD' })
  if ([403, 405, 501].includes(response.status)) response = await fetchImpl(url, { ...options, method: 'GET' })
  return response
}

export async function checkLinks(urls, { fetchImpl = fetch, concurrency = 8 } = {}) {
  const report = { broken: [], redirects: [], unverified: [], ok: [] }
  const queue = [...urls]
  async function worker() {
    while (queue.length) {
      const url = queue.shift()
      try {
        const { status, headers } = await probe(url, fetchImpl)
        if (status === 404 || status === 410) report.broken.push({ url, status })
        else if (status >= 300 && status < 400) report.redirects.push({ url, status, location: headers.get('location') })
        else if (status >= 200 && status < 300) report.ok.push({ url, status })
        else report.unverified.push({ url, status })
      } catch (error) {
        report.unverified.push({ url, error: error.message })
      }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker))
  return report
}

async function main() {
  const dist = resolve(process.argv[2] ?? 'dist')
  const links = await collectOutboundLinks(dist)
  const report = await checkLinks([...links.keys()])
  const where = url => links.get(url).slice(0, 3).join(' ')
  for (const r of report.broken) console.error(`BROKEN\t${r.status}\t${r.url}\t${where(r.url)}`)
  for (const r of report.redirects) console.log(`REDIRECT\t${r.status}\t${r.url}\t-> ${r.location}`)
  for (const r of report.unverified) console.log(`UNVERIFIED\t${r.status ?? r.error}\t${r.url}`)
  console.log(`Checked ${links.size} outbound links: ${report.ok.length} ok, ${report.redirects.length} redirect, ${report.broken.length} broken, ${report.unverified.length} unverified.`)
  if (report.broken.length) process.exitCode = 1
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) await main()
