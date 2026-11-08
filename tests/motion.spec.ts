import { test, expect } from '@playwright/test';

// Direction C preview page (temporary) — motion must run normally and be fully off for reduced motion.
const url = '/tr/yonler/c/';

test('Motion: hero entrance runs when motion is allowed', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto(url);
  const names = await page.evaluate(() =>
    document.getAnimations().map((a) => (a as CSSAnimation).animationName),
  );
  expect(names).toContain('c-rise');
});

test('Motion: reduced motion stops animations and keeps the video paused', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(url);
  // Only movement counts — colour transitions (e.g. the header turning solid) are not motion.
  const moving = await page.evaluate(
    () => document.getAnimations().filter((a) => a.constructor.name === 'CSSAnimation').length,
  );
  expect(moving).toBe(0);
  const video = page.locator('[data-hero-video]');
  expect(await video.evaluate((v: HTMLVideoElement) => v.paused)).toBe(true);
  await expect(page.locator('[data-hero-toggle]')).toBeVisible();
  await expect(page.locator('[data-hero-toggle]')).toHaveAttribute('aria-label', 'Videoyu oynat');
});

test('Header: transparent over the hero, solid after scrolling past it', async ({ page }) => {
  await page.goto(url);
  const header = page.locator('[data-site-header]');
  await expect(header).not.toHaveAttribute('data-solid');
  await page.mouse.wheel(0, 2000);
  await expect(header).toHaveAttribute('data-solid', '');
  await expect(header).toBeInViewport();
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(header).not.toHaveAttribute('data-solid');
});
