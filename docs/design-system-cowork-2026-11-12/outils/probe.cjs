// Usage: node probe.cjs <path> <selector> [hover] [clickFirst] — prints computed colour and every matching rule that sets color.
const { chromium } = require('/Users/florianbruniaux/Sites/perso/html-pres/node_modules/playwright');
const [route, sel, mode = '', clickFirst = ''] = process.argv.slice(2);
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto((process.env.BASE || 'http://127.0.0.1:4393') + route, { waitUntil: 'networkidle' });
  if (clickFirst) await p.click(clickFirst);
  if (mode === 'hover') { await p.hover(sel); await p.waitForTimeout(250); }
  const r = await p.evaluate((sel) => {
    const a = document.querySelector(sel);
    const out = [];
    for (const sh of document.styleSheets) { let rules; try { rules = sh.cssRules } catch (e) { continue }
      const walk = (rs) => { for (const r of rs) { if (r.cssRules && !r.selectorText) walk(r.cssRules); else if (r.selectorText) { try { if (a.matches(r.selectorText) && (r.style.color || r.style.textDecoration || r.style.textDecorationLine)) out.push(r.selectorText.slice(0, 160) + ' => ' + (r.style.color || '') + ' ' + (r.style.textDecoration || r.style.textDecorationLine || '')); } catch (e) {} } } };
      walk(rules); }
    const cs = getComputedStyle(a);
    return { color: cs.color, deco: cs.textDecorationLine, bg: cs.backgroundColor, rules: out };
  }, sel);
  console.log(JSON.stringify(r, null, 1));
  await b.close();
})().catch((e) => { console.error(e.message.split('\n')[0]); process.exit(1); });
