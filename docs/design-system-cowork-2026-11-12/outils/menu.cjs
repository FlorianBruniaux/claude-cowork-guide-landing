// Header states: More menu open (light/dark 1440), mobile drawer open (390), search open then Esc button closes.
// Usage: node menu.cjs <label> [path]
const { chromium } = require('/Users/florianbruniaux/Sites/perso/html-pres/node_modules/playwright');
const path = require('path');
const fs = require('fs');
const [label = 'menu', route = '/'] = process.argv.slice(2);
const BASE = process.env.BASE || 'http://127.0.0.1:4393';
const OUT = path.join(__dirname, 'shots', 'menu');
fs.mkdirSync(OUT, { recursive: true });
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  for (const theme of ['light', 'dark']) {
    const ctx = await b.newContext({ viewport: { width: 1440, height: 700 } });
    await ctx.addInitScript((t) => { localStorage.setItem('theme', t); localStorage.setItem('starlight-theme', t); }, theme);
    const p = await ctx.newPage();
    await p.goto(BASE + route, { waitUntil: 'networkidle' });
    await p.click('#more-btn');
    await p.hover('.nav-more-menu .more-menu-item >> nth=1');
    await p.waitForTimeout(200);
    await p.screenshot({ path: path.join(OUT, `${label}-more-${theme}.png`), clip: { x: 0, y: 0, width: 1440, height: 420 } });
    await p.keyboard.press('Escape');
    // Search: open with the trigger, close with the Esc button, focus must return to the trigger.
    await p.focus('#search-trigger');
    await p.keyboard.press('Enter');
    await p.waitForTimeout(200);
    await p.fill('#search-input', 'workflow');
    await p.waitForTimeout(800);
    await p.screenshot({ path: path.join(OUT, `${label}-search-${theme}.png`) });
    await p.click('#search-close');
    const focus = await p.evaluate(() => ({ hidden: document.getElementById('search-modal').hasAttribute('hidden'), active: document.activeElement && document.activeElement.id }));
    console.log(theme, 'search closed', focus.hidden, 'focus on', focus.active);
    // Keyboard focus on the primary header button.
    await p.focus('.nav-actions > .btn-primary');
    await p.keyboard.press('Shift+Tab'); await p.keyboard.press('Tab');
    const ring = await p.evaluate(() => { const s = getComputedStyle(document.activeElement); return s.outlineStyle + ' ' + s.outlineWidth + ' ' + s.outlineColor; });
    console.log(theme, 'primary focus ring', ring);
    await ctx.close();
  }
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  const p = await ctx.newPage();
  await p.goto(BASE + route, { waitUntil: 'networkidle' });
  await p.click('#menu-toggle', { timeout: 5000 }).catch((e) => console.log('toggle click failed', e.message.split('\n').slice(0, 4).join(' | ')));
  await p.screenshot({ path: path.join(OUT, `${label}-drawer-390-step1.png`) });
  await p.click('#more-btn', { timeout: 5000 }).catch((e) => console.log('more click failed', e.message.split('\n').slice(0, 6).join(' | ')));
  await p.waitForTimeout(200);
  await p.screenshot({ path: path.join(OUT, `${label}-drawer-390.png`) });
  await p.keyboard.press('Escape');
  console.log('drawer closed by Escape', await p.evaluate(() => !document.getElementById('nav-links-drawer').classList.contains('active')));
  await b.close();
})().catch((e) => { console.error(e.message.split('\n')[0]); process.exit(1); });
