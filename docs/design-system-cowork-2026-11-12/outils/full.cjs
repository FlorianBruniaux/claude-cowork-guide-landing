// Usage: node full.cjs <label> <theme> <width> <path> [<path>...]  (BASE env, default http://127.0.0.1:4393)
const { chromium } = require('/Users/florianbruniaux/Sites/perso/html-pres/node_modules/playwright');
const path = require('path');
const fs = require('fs');
const [label, theme, width, ...paths] = process.argv.slice(2);
const BASE = process.env.BASE || 'http://127.0.0.1:4393';
const EXE = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT = path.join(__dirname, 'shots', 'full');
fs.mkdirSync(OUT, { recursive: true });
(async () => {
  const browser = await chromium.launch({ executablePath: EXE });
  const ctx = await browser.newContext({ viewport: { width: Number(width), height: 900 } });
  await ctx.addInitScript((t) => { localStorage.setItem('theme', t); localStorage.setItem('starlight-theme', t); }, theme);
  const page = await ctx.newPage();
  for (const p of paths) {
    await page.goto(BASE + p, { waitUntil: 'networkidle', timeout: 120000 });
    // Trigger the scroll fade-in (IntersectionObserver in Layout.astro) before a full-page shot.
    await page.evaluate(async () => {
      for (let y = 0; y < document.documentElement.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
      window.scrollTo(0, 0);
      document.querySelectorAll('.section').forEach((s) => s.classList.add('visible'));
    });
    await page.waitForTimeout(700);
    const slug = p.replace(/\W+/g, '-').replace(/^-|-$/g, '') || 'home';
    const file = path.join(OUT, `${label}-${slug}-${width}-${theme}.png`);
    await page.screenshot({ path: file, fullPage: true });
    const ox = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    console.log(file, 'overflowX', ox);
  }
  await browser.close();
})().catch((e) => { console.error(e.message.split('\n')[0]); process.exit(1); });
