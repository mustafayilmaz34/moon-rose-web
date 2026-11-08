import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from '../i18n/config';
import type { UiKey } from '../i18n/ui';
import { routeUrl } from '../i18n/routes';

// Sections that stay on the home page.
export const sectionIds = {
  about: 'hakkimizda',
  treatments: 'tedaviler',
  faq: 'sss',
  contact: 'iletisim',
} as const;

export function mainNav(locale: Locale): { key: UiKey; href: string }[] {
  const home = getRelativeLocaleUrl(locale);
  return [
    { key: 'nav.about', href: `${home}#${sectionIds.about}` },
    { key: 'nav.treatments', href: routeUrl(locale, 'treatments') },
    { key: 'nav.faq', href: `${home}#${sectionIds.faq}` },
    { key: 'nav.contact', href: routeUrl(locale, 'contact') },
  ];
}
