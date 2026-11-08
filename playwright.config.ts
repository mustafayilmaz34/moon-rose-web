import { defineConfig, devices } from '@playwright/test';

// Dedicated port so tests never collide with a dev/preview server on 4321.
const PORT = 4329;
const screens = !!process.env.SCREENS;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  // Screenshot capture (@screens) only runs via `npm run screens`.
  grep: screens ? /@screens/ : undefined,
  grepInvert: screens ? undefined : /@screens/,
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } } },
    { name: 'mobile', use: { ...devices['Pixel 7'], viewport: { width: 375, height: 812 } } },
  ],
  webServer: {
    // --ignore-lock: Astro 7 preview exits early if another preview holds its lock file.
    command: `npm run build && npx astro preview --port ${PORT} --ignore-lock`,
    url: `http://localhost:${PORT}/tr/`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
