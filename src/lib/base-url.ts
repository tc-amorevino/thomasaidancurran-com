import { z } from 'astro/zod';
import { PUBLIC_SITE_URL } from 'astro:env/client';

/**
 * Validates the Base URL is a valid URL and does NOT end with a slash.
 * This is exported for runtime use in components and layouts. For build-time config,
 * see astro.config.ts which uses Vite's loadEnv to load PUBLIC_SITE_URL.
 */
const baseUrlValidate = z.url().refine((url) => !url.endsWith('/'), {
  message: 'Base URL must not end with a slash',
});

/**
 * The base URL of the site WITHOUT a trailing slash
 */
export const baseUrl = baseUrlValidate.parse(PUBLIC_SITE_URL);
