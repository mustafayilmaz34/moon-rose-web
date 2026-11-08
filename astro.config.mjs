// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Locale list is duplicated in src/i18n/config.ts (config files cannot import TS).
// Keep both in sync when adding a language.
const locales = ['tr', 'en', 'ar'];
const defaultLocale = 'tr';

// https://astro.build/config
export default defineConfig({
  // TODO: final production domain
  site: 'https://www.moonroseclinic.com',
  trailingSlash: 'always',
  i18n: {
    locales,
    defaultLocale,
    routing: {
      prefixDefaultLocale: true,
      // "/" → "/tr/" is handled by src/pages/index.astro
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale,
        locales: { tr: 'tr-TR', en: 'en-US', ar: 'ar' },
      },
    }),
  ],
});
