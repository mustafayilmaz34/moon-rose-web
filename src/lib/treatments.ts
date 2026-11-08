import { getCollection, type CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';
import { locales, type Locale } from '../i18n/config';
import { alternatesFor, type Alternates } from '../i18n/routes';
import type { treatmentKeys } from '../i18n/ui';

// TEMPORARY stock images from the current site — licence to be confirmed (docs/CONTENT.md).
import botoxImg from '../assets/legacy/2-botoks.jpeg';
import fillerImg from '../assets/legacy/1-dolgu.jpeg';
import mesoImg from '../assets/legacy/doktor-salih-gul-min.jpg';
import pigmentImg from '../assets/legacy/3-yuz-germe.jpeg';
import threadImg from '../assets/legacy/11-ip-aski.jpeg';
import exosomeImg from '../assets/legacy/12-eksozom.jpeg';

export type TreatmentKey = (typeof treatmentKeys)[number];
export type Treatment = CollectionEntry<'treatments'>;

export const treatmentImages: Record<TreatmentKey, ImageMetadata> = {
  botox: botoxImg,
  filler: fillerImg,
  meso: mesoImg,
  pigment: pigmentImg,
  thread: threadImg,
  exosome: exosomeImg,
};

/** Entry ids look like "tr/botox". */
export function entryLocale(entry: Treatment): Locale {
  return entry.id.split('/')[0] as Locale;
}

/** All treatments of one language, in display order. */
export async function treatmentsFor(locale: Locale): Promise<Treatment[]> {
  const all = await getCollection('treatments', (e) => entryLocale(e) === locale);
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** Per-language URL of the same treatment, for hreflang and the language switcher. */
export async function treatmentAlternates(key: TreatmentKey): Promise<Alternates> {
  const all = await getCollection('treatments', (e) => e.data.key === key);
  const slugs = Object.fromEntries(all.map((e) => [entryLocale(e), e.data.urlSlug]));
  const missing = locales.filter((l) => !slugs[l]);
  if (missing.length) throw new Error(`Treatment "${key}" has no translation for: ${missing.join(', ')}`);
  return alternatesFor('treatments', slugs);
}
