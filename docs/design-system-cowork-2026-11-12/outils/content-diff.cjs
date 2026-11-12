// Content guard: compares two builds page by page on visible text, link targets, ids,
// ARIA attributes and JSON-LD. Usage: node content-diff.cjs <distBefore> <distAfter>
const fs = require('fs');
const path = require('path');
const [A, B] = process.argv.slice(2);
const files = (dir) => fs.readdirSync(dir, { recursive: true }).filter((f) => f.endsWith('.html'));
const strip = (h) => h.replace(/<script\b[\s\S]*?<\/script>/g, (m) => (m.includes('application/ld+json') ? m : ''))
  .replace(/<style\b[\s\S]*?<\/style>/g, '');
function facts(html) {
  const h = strip(html);
  const text = h.replace(/<script\b[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
  const all = (re) => [...h.matchAll(re)].map((m) => m[1]).sort();
  return {
    text,
    href: all(/\bhref="([^"]*)"/g).filter((x) => !x.startsWith('/_astro/') && !x.includes('.css')),
    id: all(/\bid="([^"]*)"/g),
    aria: all(/\b(aria-[a-z]+="[^"]*")/g),
    ld: all(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
  };
}
function diffList(a, b) {
  const ca = new Map(); for (const x of a) ca.set(x, (ca.get(x) || 0) + 1);
  const cb = new Map(); for (const x of b) cb.set(x, (cb.get(x) || 0) + 1);
  const removed = []; const added = [];
  for (const [k, n] of ca) if ((cb.get(k) || 0) < n) removed.push(k);
  for (const [k, n] of cb) if ((ca.get(k) || 0) < n) added.push(k);
  return { removed, added };
}
const before = new Set(files(A));
const after = new Set(files(B));
let changed = 0;
for (const f of [...before].filter((x) => !after.has(x))) console.log('MISSING after:', f);
for (const f of [...after].filter((x) => !before.has(x))) console.log('NEW after:', f);
for (const f of [...before].filter((x) => after.has(x)).sort()) {
  const a = facts(fs.readFileSync(path.join(A, f), 'utf8'));
  const b = facts(fs.readFileSync(path.join(B, f), 'utf8'));
  const out = [];
  if (a.text !== b.text) {
    const wa = a.text.split(' '); const wb = b.text.split(' ');
    const d = diffList(wa, wb);
    out.push(`text: -[${d.removed.slice(0, 12).join(' | ')}] +[${d.added.slice(0, 12).join(' | ')}]${wa.length === wb.length && !d.removed.length ? ' (order only)' : ''}`);
  }
  for (const k of ['href', 'id', 'aria', 'ld']) {
    const d = diffList(a[k], b[k]);
    if (d.removed.length || d.added.length) out.push(`${k}: -${JSON.stringify(d.removed.slice(0, 6)).slice(0, 300)} +${JSON.stringify(d.added.slice(0, 6)).slice(0, 300)}`);
  }
  if (out.length) { changed++; console.log('==', f); for (const l of out) console.log('  ', l); }
}
console.log('pages compared', [...before].filter((x) => after.has(x)).length, 'pages with differences', changed);
