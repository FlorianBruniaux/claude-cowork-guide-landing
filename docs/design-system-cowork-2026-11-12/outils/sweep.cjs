// Cowork sweep: every template EN + FR, light + dark at 1440, light at 390.
// Usage: node sweep.cjs <label> [view|full] [/a/,/b/ or all] [chromium|webkit]   (BASE env, default http://127.0.0.1:4393)
// Checks: status, horizontal overflow, console errors, card hover (no lift), h1 left edge vs logo left edge.
const pw = require('/Users/florianbruniaux/Sites/perso/html-pres/node_modules/playwright');
const path = require('path');
const fs = require('fs');
const [label = 'sweep', mode = '', routeArg = '', engineArg = ''] = process.argv.slice(2);
const BASE = process.env.BASE || 'http://127.0.0.1:4393';
const ENGINE = engineArg || process.env.ENGINE || 'chromium';
const OUT = path.join(__dirname, 'shots', label);
fs.mkdirSync(OUT, { recursive: true });
const en = ['/', '/compare/', '/faq/', '/glossary/', '/prompts/', '/releases/', '/whitepapers/', '/workflows/', '/guide/', '/guide/01-getting-started/', '/guide/workflows/competitor-analysis/', '/guide/prompts/document-creation/', '/guide/reference/faq/'];
const routes = (routeArg && routeArg !== 'all' ? routeArg.split(',') : [...en, ...en.map((r) => '/fr' + r), '/404/']);
const views = ENGINE === 'webkit' ? [['light', 1440], ['light', 390]] : [['light', 1440], ['dark', 1440], ['light', 390]];
(async () => {
  const opts = ENGINE === 'webkit' ? {} : { executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' };
  const b = await pw[ENGINE].launch(opts);
  const rows = [];
  for (const [theme, w] of views) {
    const ctx = await b.newContext({ viewport: { width: w, height: 900 } });
    await ctx.addInitScript((t) => { localStorage.setItem('theme', t); localStorage.setItem('starlight-theme', t); }, theme);
    const page = await ctx.newPage();
    for (const r of routes) {
      const errors = [];
      const onErr = (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 140)); };
      const onPageErr = (e) => errors.push('pageerror ' + String(e.message).slice(0, 140));
      page.on('console', onErr); page.on('pageerror', onPageErr);
      let status = null;
      try { const resp = await page.goto(BASE + r, { waitUntil: 'networkidle', timeout: 90000 }); status = resp && resp.status(); } catch (e) { status = 'ERR'; }
      await page.waitForTimeout(250);
      const slug = r.replace(/\W+/g, '-').replace(/^-|-$/g, '') || 'home';
      const info = await page.evaluate(() => {
        const logo = document.querySelector('header .logo, .header .logo, .site-title');
        const h1 = [...document.querySelectorAll('h1')].find((h) => h.offsetParent);
        return {
          overflow: document.documentElement.scrollWidth - window.innerWidth,
          logoX: logo ? Math.round(logo.getBoundingClientRect().left) : null,
          h1X: h1 ? Math.round(h1.getBoundingClientRect().left) : null,
          bands: document.querySelectorAll('.band, .section--alt').length,
          ink: document.querySelectorAll('.band-ink, .page-hero, .band-hero').length,
          accent: document.querySelectorAll('.band-accent').length,
          cards: document.querySelectorAll('.brand-interactive-card').length,
        };
      });
      let hover = null;
      if (w === 1440 && info.cards) {
        const card = page.locator('.brand-interactive-card:visible').first();
        try {
          await card.scrollIntoViewIfNeeded(); await card.hover(); await page.waitForTimeout(220);
          hover = await card.evaluate((el) => { const s = getComputedStyle(el); return { transform: s.transform, shadow: s.boxShadow.slice(0, 50), bg: s.backgroundColor }; });
        } catch (e) { hover = 'n/a'; }
        await page.mouse.move(2, 2);
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(150);
      }
      await page.screenshot({ path: path.join(OUT, `${slug}-${w}-${theme}.png`), fullPage: mode === 'full' });
      page.off('console', onErr); page.off('pageerror', onPageErr);
      rows.push({ route: r, theme, w, status, ...info, hover, errors: errors.slice(0, 3) });
    }
    await ctx.close();
  }
  fs.writeFileSync(path.join(OUT, 'sweep.json'), JSON.stringify(rows, null, 1));
  const expectStatus = (r) => (r === '/404/' ? 404 : 200);
  // The 404 template logs its own 404 response: expected, not an error of the page.
  for (const x of rows) if (x.route === '/404/') x.errors = x.errors.filter((e) => !/status of 404/.test(e));
  const bad = rows.filter((x) => x.status !== expectStatus(x.route) || x.overflow > 0 || x.errors.length || (x.hover && x.hover !== 'n/a' && x.hover.transform !== 'none'));
  console.log('engine', ENGINE, 'rows', rows.length, 'issues', bad.length);
  for (const x of bad) console.log(JSON.stringify(x));
  const misaligned = rows.filter((x) => x.w === 1440 && x.theme === 'light' && x.h1X !== null && x.logoX !== null && x.h1X !== x.logoX);
  console.log('h1 != logo at 1440:', misaligned.map((x) => `${x.route} h1=${x.h1X} logo=${x.logoX}`).join(' | ') || 'none');
  await b.close();
})().catch((e) => { console.error(e.message.split('\n')[0]); process.exit(1); });
