// Viewport shots down a page, to read a long page at full resolution.
// Usage: node views.cjs <label> <theme> <width> <path> [step]   (BASE env, default http://127.0.0.1:4393)
const { chromium } = require('/Users/florianbruniaux/Sites/perso/html-pres/node_modules/playwright');
const path = require('path');
const fs = require('fs');
const [label, theme, width, route, step = '1600'] = process.argv.slice(2);
const OUT = path.join(__dirname, 'shots', 'views');
fs.mkdirSync(OUT, { recursive: true });
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const ctx = await b.newContext({ viewport: { width: Number(width), height: 1600 } });
  await ctx.addInitScript((t) => { localStorage.setItem('theme', t); localStorage.setItem('starlight-theme', t); }, theme);
  const page = await ctx.newPage();
  await page.goto((process.env.BASE || 'http://127.0.0.1:4393') + route, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.querySelectorAll('.section').forEach((s) => s.classList.add('visible')));
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  let i = 0;
  for (let y = 0; y < h; y += Number(step)) {
    await page.evaluate((v) => window.scrollTo(0, v), y);
    await page.waitForTimeout(350);
    await page.screenshot({ path: path.join(OUT, `${label}-${String(i++).padStart(2, '0')}.png`) });
  }
  console.log(label, 'height', h, 'shots', i);
  await b.close();
})().catch((e) => { console.error(e.message.split('\n')[0]); process.exit(1); });
