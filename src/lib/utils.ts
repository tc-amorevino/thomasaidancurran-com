import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'astro:schema';

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
