import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { locales, localeMeta, type Locale } from '../src/i18n/config';

// Mirrors src/i18n/routes.ts (that module imports astro:i18n, which Playwright can't load).
const pages: Record<string, Record<Locale, string>> = {
  home: { tr: '/tr/', en: '/en/', ar: '/ar/' },
  treatments: { tr: '/tr/tedaviler/', en: '/en/treatments/', ar: '/ar/treatments/' },
  treatment: { tr: '/tr/tedaviler/botoks/', en: '/en/treatments/botox/', ar: '/ar/treatments/botox/' },
  contact: { tr: '/tr/iletisim/', en: '/en/contact/', ar: '/ar/contact/' },
  privacy: { tr: '/tr/kvkk-gizlilik/', en: '/en/privacy/', ar: '/ar/privacy/' },
};

test('Routing: root redirects to the default locale', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/\/tr\/$/);
});

test('Routing: unknown URLs get the 404 page', async ({ page }) => {
  const response = await page.goto('/tr/boyle-bir-sayfa-yok/');
  expect(response?.status()).toBe(404);
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');
});

for (const [name, byLocale] of Object.entries(pages)) {
  for (const locale of locales) {
    const url = byLocale[locale];

    test.describe(`Page ${name} (${locale})`, () => {
      test.beforeEach(async ({ page }) => {
        const response = await page.goto(url);
        expect(response?.status()).toBe(200);
      });

      test('sets lang and text direction', async ({ page }) => {
        const html = page.locator('html');
        await expect(html).toHaveAttribute('lang', locale);
        await expect(html).toHaveAttribute('dir', localeMeta[locale].dir);
      });

      test('has exactly one h1 and a title', async ({ page }) => {
        await expect(page.locator('h1')).toHaveCount(1);
        await expect(page.locator('h1')).toBeVisible();
        await expect(page).toHaveTitle(/.+/);
      });

      test('links every language version with hreflang', async ({ page }) => {
        for (const l of locales) {
          await expect(
            page.locator(`link[rel="alternate"][hreflang="${localeMeta[l].hreflang}"]`),
          ).toHaveAttribute('href', new RegExp(`${byLocale[l]}$`));
        }
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', new RegExp(`${url}$`));
      });

      test('language switcher leads to the same page in each language', async ({ page }) => {
        // On small screens the switcher lives in the mobile menu.
        const menuButton = page.locator('[data-menu-open]');
        if (await menuButton.isVisible()) await menuButton.click();
        await expect(page.locator(`a[aria-current="true"][hreflang="${locale}"]:visible`)).toHaveCount(1);
        for (const l of locales) {
          await expect(page.locator(`a[hreflang="${l}"]:visible`)).toHaveAttribute('href', byLocale[l]);
        }
      });

      test('has no horizontal overflow', async ({ page }) => {
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
        );
        expect(overflow).toBeLessThanOrEqual(0);
      });

      test('has no serious accessibility violations', async ({ page }) => {
        const results = await new AxeBuilder({ page }).analyze();
        const serious = results.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
        expect(serious.map((v) => `${v.id}: ${v.help} (${v.nodes[0]?.target})`)).toEqual([]);
      });
    });
  }
}

for (const locale of locales) {
  test(`Navigation (${locale}): every menu link resolves`, async ({ page, request }) => {
    await page.goto(pages.home[locale]);
    const hrefs = await page
      .locator('[data-site-header] nav a, [data-menu] nav a, footer a[href^="/"]')
      .evaluateAll((links) => [...new Set(links.map((a) => (a as HTMLAnchorElement).getAttribute('href')!))]);
    for (const href of hrefs) {
      const [path, hash] = href.split('#');
      expect((await request.get(path)).status(), href).toBe(200);
      if (hash) {
        await page.goto(path);
        await expect(page.locator(`#${hash}`), href).toHaveCount(1);
      }
    }
  });

  test(`Treatments (${locale}): every card opens a treatment page`, async ({ page, request }) => {
    await page.goto(pages.treatments[locale]);
    const hrefs = await page
      .locator('main ul a')
      .evaluateAll((links) => links.map((a) => a.getAttribute('href')!));
    expect(hrefs.length).toBeGreaterThanOrEqual(6);
    for (const href of hrefs) expect((await request.get(href)).status(), href).toBe(200);
  });
}

test('FAQ: answers open and close', async ({ page }) => {
  await page.goto('/tr/#sss');
  const first = page.locator('#sss details').first();
  await expect(first).not.toHaveAttribute('open');
  await first.locator('summary').click();
  await expect(first).toHaveAttribute('open', '');
  await first.locator('summary').click();
  await expect(first).not.toHaveAttribute('open');
});
