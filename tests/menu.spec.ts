import { test, expect } from '@playwright/test';

test.describe('Mobile menu', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'mobile', 'Menu button only exists below the lg breakpoint');
    await page.goto('/tr/');
  });

  test('opens as a modal and closes with the close button', async ({ page }) => {
    const button = page.locator('[data-menu-open]');
    const menu = page.locator('[data-menu]');
    await expect(menu).toBeHidden();
    await button.click();
    await expect(menu).toBeVisible();
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await page.locator('[data-menu-close]').click();
    await expect(menu).toBeHidden();
    await expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  test('closes with Escape', async ({ page }) => {
    await page.locator('[data-menu-open]').click();
    await page.keyboard.press('Escape');
    await expect(page.locator('[data-menu]')).toBeHidden();
  });

  test('closes after following a link', async ({ page }) => {
    await page.locator('[data-menu-open]').click();
    await page.locator('[data-menu] [data-menu-link]').first().click();
    await expect(page.locator('[data-menu]')).toBeHidden();
  });
});
