import { z } from 'astro:schema';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * This function combines the clsx and tailwind-merge libraries to create a
 * utility function that merges class names conditionally and resolves Tailwind
 * CSS classes.
 * @param inputs The class names to be merged.
 * @returns The merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * This function validates a given URL using the zod library.
 * @param href The URL to be validated.
 * @returns The validated URL object.
 * @throws An error if the URL is invalid.
 */
export function validateHref(href: unknown) {
  const hrefSchema = z.string().url();
  const result = hrefSchema.safeParse(href);
  if (!result.success) {
    const input = String(href) || 'unknown';
    throw new Error(`Invalid URL: ${input}`);
  }
  return new URL(result.data);
}

/**
 * This function validates a given site URL and returns a URL object.
 * @param site - The site URL to be validated.
 * @returns The validated URL object.
 * @throws An error if the site URL is invalid or not provided.
 */
export function getSiteUrl(site?: URL) {
  if (!site) {
    throw new Error('Site URL is required');
  }
  return validateHref(site.href);
}

/**
 * This function extracts the domain from a given URL.
 * @param url The URL object from which to extract the domain.
 * @returns The domain as a string.
 * @throws An error if the URL does not contain at least one dot in the domain.
 * @example 'https://www.example.com' => 'example.com'
 */
export function getDomain(url: URL) {
  const parts = url.hostname.split('.');
  if (parts.length < 2) {
    throw new Error('Invalid URL: domain must contain at least one dot');
  }
  if (parts.length === 2) {
    return url.hostname;
  }
  if (parts.length > 2) {
    return parts.slice(parts.length - 2).join('.');
  }
  throw new Error('Invalid URL: domain must contain at least one dot');
}

/**
 * This function creates a new URL object based on a root URL and a path.
 * @param root The root URL to be used as the base.
 * @param path The path to be appended to the root URL.
 * @returns The full URL as a string.
 */
export function makeUrl(root: URL, path: string) {
  const rootValid = validateHref(root.href);
  const newUrl = new URL(path, rootValid);
  return newUrl.href;
}

/**
 * This function validates SEO-related data structures using the zod library.
 * It checks the page title, description, robots directives, and canonical URL.
 * @returns An object containing the validated SEO data or throws an error if
 * validation fails.
 */
const _seoValidate = z.object({
  /** The title of the current page that appears in the browser tab and search results, max. 60 characters */
  page_title: z
    .string()
    .min(1, 'Page title is required')
    .max(60, 'The page title cannot exceed 60 characters'),
  /** The description of the current page that appears in search results, max. 160 characters */
  page_description: z
    .string()
    .min(1, 'Page description is required')
    .max(160, 'The page description cannot exceed 160 characters'),
  /** Whether the page should be omitted from search engine indexing */
  robots_noindex: z.boolean().default(false).optional(),
  /** Whether links on the page should not be followed by search engine crawlers */
  robots_nofollow: z.boolean().default(false).optional(),
  /** The canonical URL of the page, _no trailing slash_ */
  canonical_url: z.string().url().min(1, 'Canonical URL is required'),
});

/** The SEO validation schema */
export type SeoValidate = z.infer<typeof _seoValidate>;

/**
 * This function validates SEO data against a predefined schema using zod.
 * If the data is valid, it returns the validated data; otherwise, it throws an
 * error with a message detailing the validation issues.
 * @param data The data to be validated against the SEO schema.
 * @returns The validated SEO data.
 * @throws An error if the data does not conform to the SEO schema.
 */
export function seoValidation(data: unknown): SeoValidate {
  const result = _seoValidate.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((e) => e.message).join(', ');
    throw new Error(`${errors}`);
  }
  return result.data;
}
