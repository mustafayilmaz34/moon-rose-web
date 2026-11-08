import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { treatmentKeys } from './i18n/ui';

/**
 * Treatments: one Markdown file per language, src/content/treatments/<locale>/<key>.md.
 * `key` ties the translations together; `urlSlug` is the localised URL part.
 * (Not `slug`: the glob loader would use that as the entry id and the languages would collide.)
 */
const treatments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/treatments' }),
  schema: z.object({
    key: z.enum(treatmentKeys),
    urlSlug: z.string().regex(/^[a-z0-9-]+$/, 'lowercase ASCII slug'),
    title: z.string(),
    /** One or two sentences: card text + meta description. */
    summary: z.string().max(200),
    order: z.number().int(),
    /** Short practical facts shown beside the article (duration, sessions…). */
    facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    /** EN/AR drafts stay true until a native speaker has reviewed them. */
    translationReview: z.boolean().default(false),
  }),
});

/** Simple long-form pages per language: src/content/pages/<locale>/<name>.md (privacy…). */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    translationReview: z.boolean().default(false),
  }),
});

export const collections = { treatments, pages };
