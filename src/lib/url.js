// Astro's BASE_URL is "/" locally and "/jcw-portfolio/" on GitHub Pages.
// Every internal link and asset path goes through here so the sub-path is
// handled in exactly one place.
const BASE = import.meta.env.BASE_URL;

export function url(path = '') {
  const joined = `${BASE}/${String(path).replace(/^\/+/, '')}`;
  return joined.replace(/\/{2,}/g, '/').replace(/\/$/, '') || '/';
}

/** Image filenames contain spaces, so they need encoding. */
export function img(filename) {
  return url(`img/${encodeURIComponent(filename)}`);
}
