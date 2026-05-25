/**
 * Resolves a public asset path relative to Vite's base URL.
 * Use this instead of hardcoded "/image.png" so it works on GitHub Pages.
 *
 * Usage: assetUrl('/romalogo.png') => '/RO.MA/romalogo.png' in production
 */
export function assetUrl(path) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path}`
}
