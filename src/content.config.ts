import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

/**
 * IMAGE PATHS IN JSON COLLECTIONS
 *
 * Image paths in JSON data files must be relative to the JSON file's own
 * directory, NOT the project root. This matches the documented behavior for
 * Markdown frontmatter:
 * @see https://docs.astro.build/en/guides/images/#images-in-content-collections
 *
 * Correct:   "./images/my-photo.jpg"   (relative to src/cms/<file>.json)
 * Incorrect: "src/cms/images/my-photo.jpg"  (relative to project root)
 *
 * The incorrect format worked silently in Astro ≤ 5 / Vite ≤ 6 (Rollup) because
 * Vite's Rollup-based resolver fell back to a project-root lookup. After the
 * migration to Astro 7 / Vite 8 (Rolldown), the resolver resolves bare paths
 * strictly relative to the importer, so the project-root-relative format causes
 * an [ImageNotFound] build error on any image not already in the dist cache.
 */

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/cms/blog' }),
  schema: z.object({
    title: z.string(),
  }),
});

/** The schema for publications */
const publicationsSchema = z.object({
  /** Unique identifier for the publication */
  slug: z.string().min(1, 'ID cannot be empty'),
  /** Title of the publication */
  title: z.string().min(1, 'Title cannot be empty'),
  /** Image reference for the publication, path relative to this JSON file e.g. './images/cover.jpg' */
  image: z.string().optional(),
  /** Link to the publication */
  href: z.url(),
  /** Year of publication in the format YYYY */
  year: z
    .number()
    .int()
    .min(1000, 'Year must be 4 digits')
    .max(9999, 'Year must be 4 digits'),
  /** Type of publication */
  type: z.enum(['book', 'article', 'essay', 'report', 'other']),
});

const publications = defineCollection({
  loader: file('src/cms/publications.json'),
  schema: ({ image }) =>
    publicationsSchema.extend({
      image: image().optional(),
    }),
});

/** The schema for portfolio items */
const portfolioSchema = z.object({
  /** Unique identifier for the portfolio item */
  slug: z.string().min(1, 'ID cannot be empty'),
  /** Title of the portfolio item */
  title: z.string().min(1, 'Title cannot be empty'),
  /** Description of the portfolio item */
  description: z.string().optional(),
  /** Image reference for the portfolio item, path relative to this JSON file e.g. './images/logo.jpg' */
  image: z.string().optional(),
  /** Link to the portfolio item */
  href: z.url(),
  /** Type of portfolio item */
  type: z.enum(['advisor', 'angel investor', 'founder', 'member']),
});

const portfolio = defineCollection({
  loader: file('src/cms/portfolio.json'),
  schema: ({ image }) =>
    portfolioSchema.extend({
      image: image().optional(),
    }),
});

/** The schema for media items */
const mediaSchema = z.object({
  /** Unique identifier for the media item */
  slug: z.string().min(1, 'ID cannot be empty'),
  /** Title of the media item */
  title: z.string().min(1, 'Title cannot be empty'),
  /** name of the publication of the media item */
  publication: z.string().optional(),
  /** Format of the media item */
  format: z.enum(['video', 'article']),
  /** Image reference for the media item, path relative to this JSON file e.g. './images/thumbnail.jpg' */
  image: z.string().optional(),
  /** Link to the media item */
  href: z.url(),
  /** Type of media item */
  type: z.enum(['interview', 'panel', 'commentary', 'presentation']),
  /** Year of media in the format YYYY */
  year: z
    .number()
    .int()
    .min(1000, 'Year must be 4 digits')
    .max(9999, 'Year must be 4 digits'),
});

const media = defineCollection({
  loader: file('src/cms/media.json'),
  schema: ({ image }) =>
    mediaSchema.extend({
      image: image().optional(),
    }),
});

export const collections = { blog, publications, portfolio, media };
