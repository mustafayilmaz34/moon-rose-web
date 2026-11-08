// Single source of truth for supported languages.
// Adding a language: add it here, in astro.config.mjs, and add a dictionary in ./ui.ts.
export const locales = ['tr', 'en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'tr';

export const localeMeta: Record<Locale, { label: string; dir: 'ltr' | 'rtl'; hreflang: string }> = {
  tr: { label: 'Türkçe', dir: 'ltr', hreflang: 'tr-TR' },
  en: { label: 'English', dir: 'ltr', hreflang: 'en' },
  ar: { label: 'العربية', dir: 'rtl', hreflang: 'ar' },
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
