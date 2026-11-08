import { test, expect } from '@playwright/test';

test.describe('Desktop dropdowns', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'desktop', 'Dropdowns are the lg+ header');
    await page.goto('/tr/tedaviler/');
  });

  test('language menu opens on click, lists every language and closes with Escape', async ({ page }) => {
    const trigger = page.locator('[aria-controls="language-menu"]');
    const panel = page.locator('#language-menu');
    await expect(panel).toBeHidden();
    await trigger.click();
    await expect(panel).toBeVisible();
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(panel.locator('a[hreflang]')).toHaveCount(3);
    await expect(panel.locator('a[aria-current="true"]')).toHaveAttribute('hreflang', 'tr');
    await page.keyboard.press('Escape');
    await expect(panel).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test('treatments menu opens on hover and lists every treatment', async ({ page }) => {
    const panel = page.locator('#treatments-menu');
    await page.locator('[aria-controls="treatments-menu"]').hover();
    await expect(panel).toBeVisible();
    await expect(panel.locator('ul a')).toHaveCount(6);
    await expect(panel.locator('a[href="/tr/tedaviler/"]')).toBeVisible();
    // Moving through the gap into the panel keeps it open.
    await panel.locator('ul a').first().hover();
    await expect(panel).toBeVisible();
  });

  test('hovering then clicking the trigger keeps the menu open', async ({ page }) => {
    const trigger = page.locator('[aria-controls="language-menu"]');
    await trigger.hover();
    await expect(page.locator('#language-menu')).toBeVisible();
    await trigger.click();
    await expect(page.locator('#language-menu')).toBeVisible();
    await trigger.click();
    await expect(page.locator('#language-menu')).toBeHidden();
  });

  test('a link in the treatments menu opens that treatment', async ({ page }) => {
    await page.locator('[aria-controls="treatments-menu"]').click();
    await page.locator('#treatments-menu a[href="/tr/tedaviler/botoks/"]').click();
    await expect(page).toHaveURL(/\/tr\/tedaviler\/botoks\/$/);
  });

  test('only one dropdown is open at a time and outside clicks close it', async ({ page }) => {
    await page.locator('[aria-controls="treatments-menu"]').click();
    await page.locator('[aria-controls="language-menu"]').click();
    await expect(page.locator('#treatments-menu')).toBeHidden();
    await expect(page.locator('#language-menu')).toBeVisible();
    await page.locator('main h1').click();
    await expect(page.locator('#language-menu')).toBeHidden();
  });
});

test('Mobile menu: treatments expand into a sub-list', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile', 'Mobile menu only');
  await page.goto('/tr/');
  await page.locator('[data-menu-open]').click();
  const sub = page.locator('[data-menu] details');
  await expect(sub.locator('ul a').first()).toBeHidden();
  await sub.locator('summary').click();
  await expect(sub.locator('ul a')).toHaveCount(7); // 6 treatments + "all"
  await sub.locator('a[href="/tr/tedaviler/dolgu/"]').click();
  await expect(page).toHaveURL(/\/tr\/tedaviler\/dolgu\/$/);
  await expect(page.locator('[data-menu]')).toBeHidden();
});
