import { getRelativeLocaleUrl } from 'astro:i18n';
import { locales, type Locale } from './config';

/**
 * Localised URL segments. Each language gets words its visitors search for:
 * /tr/tedaviler/botoks/, /en/treatments/botox/, /ar/treatments/botox/.
 * Adding a language: add its segment to every entry (a missing one is a type error).
 */
export const routeSegments = {
  treatments: { tr: 'tedaviler', en: 'treatments', ar: 'treatments' },
  contact: { tr: 'iletisim', en: 'contact', ar: 'contact' },
  privacy: { tr: 'kvkk-gizlilik', en: 'privacy', ar: 'privacy' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routeSegments;

/** Path after the locale prefix, per language — drives canonical, hreflang and the language switcher. */
export type Alternates = Record<Locale, string>;

/** Path after the locale prefix, e.g. "tedaviler/botoks/". */
export function routePath(locale: Locale, key: RouteKey, slug?: string): string {
  const segment = routeSegments[key][locale];
  return slug ? `${segment}/${slug}/` : `${segment}/`;
}

/** Root-relative URL, e.g. "/tr/tedaviler/botoks/". */
export function routeUrl(locale: Locale, key: RouteKey, slug?: string): string {
  return getRelativeLocaleUrl(locale, routePath(locale, key, slug));
}

/** Alternates for a page that exists in every language (optionally with per-language slugs). */
export function alternatesFor(key: RouteKey, slugs?: Partial<Record<Locale, string>>): Alternates {
  return Object.fromEntries(locales.map((l) => [l, routePath(l, key, slugs?.[l])])) as Alternates;
}

/** Same path in every language (the home page uses ''). */
export function sameAlternates(path: string): Alternates {
  return Object.fromEntries(locales.map((l) => [l, path])) as Alternates;
}
