import { test } from '@playwright/test';
import { locales } from '../src/i18n/config';

// Full-page screenshots for visual review by the tester agent. Run with `npm run screens`.
// Add new routes here as pages are built.
const routes = [''];

for (const locale of locales) {
  for (const route of routes) {
    test(`Screens: ${locale}/${route} @screens`, async ({ page }, testInfo) => {
      // Static captures: motion is reviewed live, not in screenshots.
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(`/${locale}/${route}`);
      await page.evaluate(() => document.fonts.ready);
      const name = `${locale}-${route.replaceAll('/', '_') || 'home'}-${testInfo.project.name}.png`;
      await page.screenshot({ path: `test-results/screens/${name}`, fullPage: true });
    });
  }
}
