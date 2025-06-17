import { file, glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

import { generateJsonSchema } from '@/lib/json-schema';

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
  /** Image reference for the publication, 'src/cms/images/...' */
  image: z.string().optional(),
  /** Link to the publication */
  href: z.string().url(),
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
    publicationsSchema.merge(
      z.object({
        image: image().optional(),
      }),
    ),
});

/** The schema for portfolio items */
const portfolioSchema = z.object({
  /** Unique identifier for the portfolio item */
  slug: z.string().min(1, 'ID cannot be empty'),
  /** Title of the portfolio item */
  title: z.string().min(1, 'Title cannot be empty'),
  /** Description of the portfolio item */
  description: z.string().optional(),
  /** Image reference for the portfolio item, 'src/cms/images/...' */
  image: z.string().optional(),
  /** Link to the portfolio item */
  href: z.string().url(),
  /** Type of portfolio item */
  type: z.enum(['advisor', 'angel investor', 'founder']),
});

const portfolio = defineCollection({
  loader: file('src/cms/portfolio.json'),
  schema: ({ image }) =>
    portfolioSchema.merge(
      z.object({
        image: image().optional(),
      }),
    ),
});

export const collections = { blog, publications, portfolio };

// Create a json schema for the collection, runs with 'npx astro sync'
generateJsonSchema(publicationsSchema.array(), 'publications-schema.json');
generateJsonSchema(portfolioSchema.array(), 'portfolio-schema.json');
