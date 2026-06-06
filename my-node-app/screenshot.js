const { chromium } = require('playwright');

(async () => {
  console.log("Launching browser...");
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();
  
  console.log("Navigating to Figma URL...");
  await page.goto('https://www.figma.com/design/pTsLIIzrx4DlrWANsVIJJX/portfolio-mayank?node-id=9-20&t=YuuFTxnAs0rZw4es-4');
  
  console.log("Waiting for 10 seconds to allow Figma to load canvas...");
  await page.waitForTimeout(10000);
  
  console.log("Taking screenshot...");
  await page.screenshot({ path: 'figma_screenshot.png' });
  
  await browser.close();
  console.log("Screenshot saved to figma_screenshot.png");
})();
