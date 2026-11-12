// Computed style of the footer ecosystem links, at rest, after opening the disclosure.
const { chromium } = require('/Users/florianbruniaux/Sites/perso/html-pres/node_modules/playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto((process.env.BASE || 'http://127.0.0.1:4393') + '/', { waitUntil: 'networkidle' });
  await p.evaluate(() => { document.querySelector('.footer-ecosystem-toggle').open = true; });
  await p.mouse.move(5, 5);
  await p.waitForTimeout(1200);
  console.log(await p.evaluate(() => [...document.querySelectorAll('.footer-ecosystem a')].slice(0, 7).map((a) => { const s = getComputedStyle(a); return [a.textContent.trim().slice(0, 18), s.color, s.opacity, s.textDecorationLine, getComputedStyle(a.closest('li')).opacity, getComputedStyle(a.closest('ul')).opacity].join(' | '); }).join('\n')));
  await b.close();
})().catch((e) => { console.error(e.message.split('\n')[0]); process.exit(1); });
