import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// GitHub Pages serves this repo from a sub-path because the repo is named
// `jcw-portfolio` rather than `waltherjc.github.io`. If you ever rename the
// repo to `waltherjc.github.io`, set BASE_PATH="" (or delete the `base` line).
const base = process.env.BASE_PATH ?? '/jcw-portfolio';

export default defineConfig({
  site: 'https://waltherjc.github.io',
  base,
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  build: {
    format: 'directory',
  },
});
