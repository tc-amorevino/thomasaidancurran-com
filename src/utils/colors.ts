/**
 * TODO
 * =============================================================================
 * - we might not need this file, once the design system is implemented.
 */

/**
 * Convert hex color to rgb color
 * @param hex The hex color to convert.
 * @example hex: '#ffffff' => rgb: '255 255 255'
 * @returns The rgb color.
 */
const hexToRgb = (hex: string) => {
  hex = hex.replace('#', '');
  hex = hex.length === 3 ? hex.replace(/./g, '$&$&') : hex;
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r} ${g} ${b}`;
};

export { hexToRgb };
