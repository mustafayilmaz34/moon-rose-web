import { test, expect } from '@playwright/test';

// Home page — motion must run normally and be fully off for reduced motion.
const url = '/tr/';

test('Motion: hero entrance runs when motion is allowed', async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto(url);
  const names = await page.evaluate(() =>
    document.getAnimations().map((a) => (a as CSSAnimation).animationName),
  );
  expect(names).toContain('rise');
  expect(names).toContain('wa-ring');
  // Scroll-driven (view timeline) animations must actually attach — a bad build silently drops them.
  expect(names).toEqual(expect.arrayContaining(['hero-media', 'hero-content', 'parallax', 'reveal']));
  // The bubble only exists on wide screens.
  if (testInfo.project.name === 'desktop') expect(names).toContain('wa-bubble');
});

test('Motion: reduced motion stops animations and keeps the video on its poster', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(url);
  // Only movement counts — colour transitions (e.g. the header turning solid) are not motion.
  const moving = await page.evaluate(
    () => document.getAnimations().filter((a) => a.constructor.name === 'CSSAnimation').length,
  );
  expect(moving).toBe(0);
  const video = page.locator('[data-hero-video]');
  expect(await video.evaluate((v: HTMLVideoElement) => v.paused)).toBe(true);
});

test('Header: transparent only at the top, solid and pinned as soon as the page scrolls', async ({
  page,
}) => {
  await page.goto(url);
  const header = page.locator('[data-site-header]');
  await expect(header).not.toHaveAttribute('data-solid');

  // A small scroll is enough — hero text must never pass under a transparent header.
  await page.mouse.wheel(0, 120);
  await expect(header).toHaveAttribute('data-solid', '');
  await expect.poll(() => header.evaluate((el) => el.getBoundingClientRect().top)).toBe(0);

  await page.mouse.wheel(0, 2000);
  await expect(header).toHaveAttribute('data-solid', '');
  await expect.poll(() => header.evaluate((el) => el.getBoundingClientRect().top)).toBe(0);

  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(header).not.toHaveAttribute('data-solid');
});

test('WhatsApp: official icon on brand green, pulse stops after a few iterations', async ({ page }) => {
  await page.goto(url);
  const button = page.locator('a[href^="https://wa.me/"].fixed');
  await expect(button).toBeVisible();
  const ring = await button.locator('.motion-wa-ring').evaluate((el) => {
    const a = el.getAnimations()[0];
    return a ? a.effect?.getTiming().iterations : null;
  });
  expect(ring).toBe(3);
  const bg = await button
    .locator('.bg-whatsapp.relative')
    .evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(bg).toBe('rgb(37, 211, 102)');
});
