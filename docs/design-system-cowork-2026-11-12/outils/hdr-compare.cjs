const { chromium } = require('/Users/florianbruniaux/Sites/perso/html-pres/node_modules/playwright');
const OUT = process.argv[2];
(async () => {
  const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  for (const [name, url, w] of [['cc','https://cc.bruniaux.com/',1440],['cw','http://127.0.0.1:4393/',1440],['cc390','https://cc.bruniaux.com/',390],['cw390','http://127.0.0.1:4393/',390]]) {
    const ctx = await b.newContext({ viewport: { width: w, height: 900 } });
    await ctx.addInitScript(() => { localStorage.setItem('theme','light'); localStorage.setItem('starlight-theme','light'); });
    const p = await ctx.newPage();
    await p.goto(url, { waitUntil: 'networkidle' });
    await p.screenshot({ path: `${OUT}/${name}-top.png`, clip: { x: 0, y: 0, width: w, height: w > 500 ? 260 : 700 } });
    if (w > 500) {
      const trig = name === 'cc' ? 'summary.top-level-trigger >> nth=0' : '#more-btn';
      await p.click(trig); await p.waitForTimeout(400);
      await p.screenshot({ path: `${OUT}/${name}-menu.png`, clip: { x: 0, y: 0, width: w, height: 700 } });
      await p.keyboard.press('Escape');
      await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight)); await p.waitForTimeout(600);
      const f = await p.$('footer');
      await f.screenshot({ path: `${OUT}/${name}-footer.png` });
    } else {
      const t = name === 'cc390' ? '#mobile-menu-toggle' : '#menu-toggle';
      await p.click(t); await p.waitForTimeout(500);
      await p.screenshot({ path: `${OUT}/${name}-drawer.png` });
    }
    await ctx.close();
  }
  await b.close();
})().catch((e) => { console.error(e.message.split('\n')[0]); process.exit(1); });
