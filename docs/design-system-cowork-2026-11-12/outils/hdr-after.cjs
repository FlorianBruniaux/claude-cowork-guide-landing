// Header, More panel, footer and mobile drawer of the local build, light and dark.
// Usage: node hdr-after.cjs <outDir> [route]
const { chromium } = require('/Users/florianbruniaux/Sites/perso/html-pres/node_modules/playwright');
const [OUT, route = '/'] = process.argv.slice(2);
const BASE = process.env.BASE || 'http://127.0.0.1:4393';
(async () => {
  const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  for (const theme of ['light', 'dark']) {
    for (const w of [1440, 390]) {
      const ctx = await b.newContext({ viewport: { width: w, height: 900 } });
      await ctx.addInitScript((t) => { localStorage.setItem('theme', t); localStorage.setItem('starlight-theme', t); }, theme);
      const p = await ctx.newPage();
      const errors = [];
      p.on('pageerror', (e) => errors.push(e.message));
      await p.goto(BASE + route, { waitUntil: 'networkidle' });
      const tag = `${theme}-${w}`;
      if (w > 500) {
        await p.screenshot({ path: `${OUT}/after-${tag}-top.png`, clip: { x: 0, y: 0, width: w, height: 120 } });
        await p.click('#more-btn'); await p.waitForTimeout(300);
        await p.screenshot({ path: `${OUT}/after-${tag}-menu.png`, clip: { x: 340, y: 0, width: 1100, height: 420 } });
        await p.hover('.more-menu-item >> nth=1'); await p.waitForTimeout(250);
        await p.screenshot({ path: `${OUT}/after-${tag}-menu-hover.png`, clip: { x: 340, y: 0, width: 1100, height: 420 } });
        await p.keyboard.press('Escape');
        await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight)); await p.waitForTimeout(500);
        await p.click('.footer-ecosystem-toggle > summary'); await p.mouse.move(5, 5); await p.waitForTimeout(800);
        await (await p.$('footer')).screenshot({ path: `${OUT}/after-${tag}-footer.png` });
      } else {
        await p.click('#menu-toggle'); await p.waitForTimeout(300);
        await p.click('#more-btn'); await p.waitForTimeout(300);
        await p.screenshot({ path: `${OUT}/after-${tag}-drawer.png` });
        const st = await p.evaluate(() => ({ focus: document.activeElement?.id, drawer: document.getElementById('nav-links-drawer').getBoundingClientRect().toJSON(), header: document.querySelector('.header').getBoundingClientRect().height }));
        await p.keyboard.press('Escape'); await p.waitForTimeout(200);
        const closed = await p.evaluate(() => !document.getElementById('nav-links-drawer').classList.contains('active') && document.activeElement?.id);
        console.log(tag, JSON.stringify(st), 'closedFocus', closed);
        await p.keyboard.press('Escape');
        await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight)); await p.waitForTimeout(500);
        await (await p.$('footer')).screenshot({ path: `${OUT}/after-${tag}-footer.png` });
      }
      const ow = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      console.log(tag, 'overflowX', ow, 'errors', errors.length);
      await ctx.close();
    }
  }
  await b.close();
})().catch((e) => { console.error(e.message.split('\n')[0]); process.exit(1); });
