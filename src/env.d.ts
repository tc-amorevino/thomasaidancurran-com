declare module 'astro-html-beautifier';

/**
 * Astro JSX namespace declaration.
 * Without `@types/react` installed, TypeScript has no definition for JSX.Element,
 * causing `@typescript-eslint/no-unsafe-return` to fire on .map() callbacks in
 * Astro templates (JSX elements are inferred as `any`). This declaration
 * provides a proper type using Astro's own types rather than React's.
 * @see https://github.com/ota-meshi/eslint-plugin-astro/issues/168
 */
import 'astro/astro-jsx';

declare global {
  namespace JSX {
    type Element = HTMLElement;
    type IntrinsicElements = astroHTML.JSX.IntrinsicElements;
  }
}
