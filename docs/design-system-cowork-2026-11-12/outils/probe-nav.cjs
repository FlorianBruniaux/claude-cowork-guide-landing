const { chromium } = require('/Users/florianbruniaux/Sites/perso/html-pres/node_modules/playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  for (const u of ['/', '/guide/01-getting-started/']) {
    await p.goto('http://127.0.0.1:4393' + u, { waitUntil: 'networkidle' });
    const r = await p.evaluate(() => {
      const a = document.querySelector('.nav-links .nav-link');
      const cs = getComputedStyle(a);
      const out = [];
      for (const sh of document.styleSheets) { let rules; try { rules = sh.cssRules } catch (e) { continue }
        const walk = (rs) => { for (const r of rs) { if (r.cssRules && !r.selectorText) walk(r.cssRules); else if (r.selectorText && a.matches(r.selectorText) && r.style.color) out.push(r.selectorText + ' => ' + r.style.color + (r.parentRule ? ' [in ' + (r.parentRule.name || r.parentRule.constructor.name) + ']' : '')); } };
        walk(rules); }
      return { color: cs.color, attrs: [...a.attributes].map(x => x.name).join(' '), rules: out };
    });
    console.log(u, JSON.stringify(r, null, 1));
  }
  await b.close();
})();
