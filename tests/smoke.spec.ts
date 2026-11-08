import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { locales, localeMeta } from '../src/i18n/config';

test('Routing: root redirects to the default locale', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/\/tr\/$/);
});

for (const locale of locales) {
  test.describe(`Home (${locale})`, () => {
    test.beforeEach(async ({ page }) => {
      const response = await page.goto(`/${locale}/`);
      expect(response?.status()).toBe(200);
    });

    test('sets lang and text direction', async ({ page }) => {
      const html = page.locator('html');
      await expect(html).toHaveAttribute('lang', locale);
      await expect(html).toHaveAttribute('dir', localeMeta[locale].dir);
    });

    test('has a visible h1 and a title', async ({ page }) => {
      await expect(page.locator('h1')).toBeVisible();
      await expect(page).toHaveTitle(/.+/);
    });

    test('links every language with hreflang', async ({ page }) => {
      await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(locales.length + 1);
    });

    test('language switcher marks the current language', async ({ page }) => {
      await expect(page.locator(`nav a[aria-current="true"][hreflang="${locale}"]`)).toBeVisible();
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
      expect(serious.map((v) => `${v.id}: ${v.help}`)).toEqual([]);
    });
  });
}
