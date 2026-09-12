# jcw-portfolio

Engineering portfolio for John Walther. Built with [Astro](https://astro.build), deployed to GitHub
Pages as static HTML. Ships no JavaScript.

## Setting it up in an empty repo

```bash
# From inside this folder
git init
git add -A
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Waltherjc/<your-repo-name>.git
git push -u origin main
```

Then two things:

**1. Turn on Pages.** Settings → Pages → Build and deployment → Source → **GitHub Actions**. If you
leave it on "Deploy from a branch" the workflow runs and goes green but nothing publishes.

**2. Set the base path to match your repo name.** See below — this is the one thing that will break
the site if you skip it.

## The base path

If the repo is named anything other than `waltherjc.github.io`, Pages serves the site from a
sub-directory and every link and image needs that prefix. Two files have to agree:

| File | Setting |
| --- | --- |
| `astro.config.mjs` | `const base = process.env.BASE_PATH ?? '/jcw-portfolio'` |
| `.github/workflows/deploy.yml` | `BASE_PATH: /jcw-portfolio` |

Both currently say `/jcw-portfolio`. Change **both** to your repo name, or set **both** to an empty
string if the repo is `waltherjc.github.io`. Changing only one gives you a site where every link
404s.

`astro.config.mjs` also sets `site: 'https://waltherjc.github.io'`, used for canonical URLs and the
sitemap. Update it if you move to a custom domain.

`npm run dev` runs at the root path locally, so you won't see the prefix while developing. Expected.

## Running it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # writes dist/
npm run preview  # serve the built site
```

Node 20 or newer.

## Adding a project

Projects are markdown. Drop a new `.mdx` file into `src/content/projects/` — the filename becomes
the URL, so `bike-clamp.mdx` is served at `/portfolio/bike-clamp`.

```mdx
---
title: Bike Clamp
summary: One sentence that shows up on the work index.
order: 6                     # position in the list, lowest first
hero: Bike Full Render.png   # a file in public/img, or null if you have no photo yet
tags: [Fusion 360, 3D printing]
meta:
  - field: TOOLS
    value: Fusion 360
  - field: SCOPE
    value: Design and build
---

import Figure from '../../components/Figure.astro';

## Introduction

Ordinary markdown from here down. Headings, **bold**, [links](https://example.com),
numbered lists and tables all work.

<Figure
  n={1}
  caption="What this shows"
  images={[{ src: 'Bike Real 1.jpg', alt: 'Describe the image for screen readers' }]}
/>
```

The frontmatter is validated against a schema in `src/content.config.mjs`, so a typo fails the build
with a clear message rather than rendering something wrong.

`hero: null` is fine — the work index draws a struck-through box for projects with no photograph,
which is the drawing convention for a view that doesn't exist.

### Components available inside a project

| Component | Use it for |
| --- | --- |
| `Figure`  | One or more images with an auto-labelled `FIG. n` caption |
| `Embed`   | An iframe, e.g. a shared Fusion 360 model |
| `FileRow` | A download (`href` relative to `public/`) or an external link (add `external`) |

## Editing everything else

- **Bio, education, experience, skills, awards** — `src/data/site.js`
- **Contact links in the footer** — the `contact` array in `src/data/site.js`. It is empty, so no
  contact links render at all right now. Uncomment a line and fill it in.
- **Colours, type, spacing** — the token block at the top of `src/styles/global.css`

## Adding images

Drop files into `public/img/`, then regenerate the aspect-ratio map so figures reserve the right
space before the image loads:

```bash
python3 -c "
from PIL import Image; import os, json
d = {f: round(Image.open('public/img/'+f).width / Image.open('public/img/'+f).height, 4)
     for f in sorted(os.listdir('public/img'))}
open('src/data/imageSizes.js','w').write(
    'export const aspect = ' + json.dumps(d, indent=2) + ';\n\n'
    'export const ratioOf = (name, fallback = 1.5) => aspect[name] ?? fallback;\n')
"
```

**Resize photos before adding them.** Nothing on the site displays wider than about 1100 px, so
2000 px on the long edge is plenty. Phone photos are often 5712 × 4284 and 3 MB each, which makes
pages crawl. Re-encode GIFs as MP4 or WebM. The site currently serves 3.4 MB of images in total —
worth keeping it that way.

## What's here

```
src/
  content/projects/   the five project write-ups, as MDX
  data/site.js        bio, education, experience, skills, awards
  data/imageSizes.js  generated aspect-ratio map
  components/         Figure, Embed, FileRow, PartRow, TitleBlock, SectionHead
  layouts/Base.astro  head tags, nav, footer, sheet frame
  pages/              home, work index, project pages, about, 404
  styles/global.css   design tokens and all styling
  lib/url.js          base-path handling for links and assets
public/
  img/                the 16 images the site actually uses
  assets/             the Arduino sketch linked from the syringe pump page
```

## Known gaps

- **No contact details anywhere.** See `src/data/site.js`. Nobody reading the site can reach you.
- **No photographs of the oil tank or the shower chair.** Both render a struck-through box.
- **Four projects were never written up.** The old Jekyll repo still holds complete image sets for a
  bike clamp, a generative-design part, a compliant plier, and a microfluidic device. They were left
  out of this folder because nothing referenced them; pull them from the old repo when you write
  those pages.

## Design notes

The visual language is the engineering drawing, because that's the subject's own vernacular: a sheet
frame with zone markers, a title block on the hero and each project page, figures numbered `FIG. n`,
and a single redline red for callouts.

Two structural choices worth knowing before you edit them:

- The project index is a **parts list**, not a card grid. Item numbers are legitimate because a
  parts list is numbered.
- Work history on the About page is a **revision table** (REV / DATE / DESCRIPTION). A drawing
  records change history that way, and a résumé is a change history.

Uppercase is confined to title-block fields and the revision table header, where it's a drafting
convention rather than decoration. One animation: the rule under the name draws left to right on
load, disabled under `prefers-reduced-motion`.
