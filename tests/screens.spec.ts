import { test } from '@playwright/test';
import { locales, type Locale } from '../src/i18n/config';

// Full-page screenshots for visual review by the tester agent. Run with `npm run screens`.
// Mirrors src/i18n/routes.ts — add new pages here as they are built.
const pages: Record<string, Record<Locale, string>> = {
  home: { tr: '/tr/', en: '/en/', ar: '/ar/' },
  treatments: { tr: '/tr/tedaviler/', en: '/en/treatments/', ar: '/ar/treatments/' },
  treatment: { tr: '/tr/tedaviler/botoks/', en: '/en/treatments/botox/', ar: '/ar/treatments/botox/' },
  contact: { tr: '/tr/iletisim/', en: '/en/contact/', ar: '/ar/contact/' },
  privacy: { tr: '/tr/kvkk-gizlilik/', en: '/en/privacy/', ar: '/ar/privacy/' },
};

for (const [name, byLocale] of Object.entries(pages)) {
  for (const locale of locales) {
    test(`Screens: ${locale} ${name} @screens`, async ({ page }, testInfo) => {
      // Static captures: motion is reviewed live, not in screenshots.
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(byLocale[locale]);
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({
        path: `test-results/screens/${locale}-${name}-${testInfo.project.name}.png`,
        fullPage: true,
      });
    });
  }
}
