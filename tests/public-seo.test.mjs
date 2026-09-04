import assert from 'node:assert/strict'
import test from 'node:test'

import { checkPublicSeo } from '../scripts/check-public-seo.mjs'

function htmlResponse(requestedUrl, finalUrl = requestedUrl) {
  const body = '<html><head><link rel="canonical" href="' + finalUrl + '"></head><body><h1>Guide</h1></body></html>'
  return {
    ok: true,
    status: 200,
    url: finalUrl,
    headers: { get: name => name === 'content-type' ? 'text/html' : null },
    text: async () => body,
  }
}

test('accepts an HTML route that does not redirect', async () => {
  const url = 'https://cowork.bruniaux.com/guide/'
  const results = await checkPublicSeo([url], async requestedUrl => htmlResponse(requestedUrl))
  assert.deepEqual(results[0].failures, [])
})

test('rejects an HTML route that redirects to a different path', async () => {
  const requested = 'https://cowork.bruniaux.com/guide/'
  const results = await checkPublicSeo([requested], async () => htmlResponse(requested, 'https://cowork.bruniaux.com/'))
  assert.ok(results[0].failures.some(failure => failure.includes('redirected to')))
})

test('rejects an HTML route with a different canonical', async () => {
  const requested = 'https://cowork.bruniaux.com/guide/'
  const response = htmlResponse(requested)
  response.text = async () => '<html><head><link rel="canonical" href="https://cowork.bruniaux.com/"></head><body><h1>Guide</h1></body></html>'
  const results = await checkPublicSeo([requested], async () => response)
  assert.ok(results[0].failures.some(failure => failure.includes('canonical mismatch')))
})

test('rejects an expected HTML route served with a non-HTML content type', async () => {
  const requested = 'https://cowork.bruniaux.com/guide/'
  const response = htmlResponse(requested)
  response.headers.get = name => name === 'content-type' ? 'text/plain' : null
  const results = await checkPublicSeo([requested], async () => response)
  assert.ok(results[0].failures.some(failure => failure.includes('expected text/html')))
})
