// Keyboard focus and hover on the first interactive card of a page: ring, hard shadow, no lift.
// Usage: node card-focus.cjs <path> [theme]
const { chromium } = require('/Users/florianbruniaux/Sites/perso/html-pres/node_modules/playwright');
const [route = '/workflows/', theme = 'light'] = process.argv.slice(2);
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
  await ctx.addInitScript((t) => localStorage.setItem('theme', t), theme);
  const p = await ctx.newPage();
  await p.goto((process.env.BASE || 'http://127.0.0.1:4393') + route, { waitUntil: 'networkidle' });
  const read = () => p.evaluate(() => {
    const c = document.querySelector('a.brand-interactive-card, .brand-interactive-card a');
    const card = c.closest('.brand-interactive-card') || c;
    const s = getComputedStyle(card);
    return { focused: document.activeElement === c, transform: s.transform, shadow: s.boxShadow.slice(0, 70), bg: s.backgroundColor, outline: getComputedStyle(c).outlineStyle };
  });
  for (let i = 0; i < 80; i++) {
    await p.keyboard.press('Tab');
    const hit = await p.evaluate(() => { const a = document.activeElement; return !!(a && (a.matches('.brand-interactive-card') || a.closest('.brand-interactive-card'))); });
    if (hit) break;
  }
  console.log(route, theme, 'keyboard', JSON.stringify(await read()));
  await p.hover('.brand-interactive-card >> nth=1');
  await p.waitForTimeout(250);
  console.log(route, theme, 'hover', await p.evaluate(() => { const s = getComputedStyle(document.querySelectorAll('.brand-interactive-card')[1]); return JSON.stringify({ transform: s.transform, shadow: s.boxShadow.slice(0, 70), bg: s.backgroundColor }); }));
  await b.close();
})().catch((e) => { console.error(e.message.split('\n')[0]); process.exit(1); });
