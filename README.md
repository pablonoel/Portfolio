# Portfolio (Astro + Sass + GSAP)

## Requirements

- Node.js 18+

## Setup

```sh
npm install
```

## Development

```sh
npm run dev
```

Starts a local server at `http://localhost:4321` with hot module replacement.

## Build

```sh
npm run build
```

Outputs static files to `dist/`. Astro generates routes from `src/pages/`.

## Preview production build

```sh
npm run preview
```

## Project structure

```
src/
  layouts/
    BaseLayout.astro      — HTML shell: head, fonts, global scripts, Perlin-wave
                            background, entrance animations (GSAP), image lightbox
    ArticleLayout.astro   — case study / essay page (hero + article slot)
  components/
    Header.astro          — site header and nav
    Hero.astro            — headline / rule / lede
    Breadcrumb.astro      — back-link breadcrumb for article pages
    ProjectCard.astro     — card with optional image, link, and meta text
    ArticleCard.astro     — card for writings/essays
    Footer.astro          — site footer with social links
  pages/
    index.astro
    about/index.astro
    work/index.astro
    work/archdaily/index.astro
    work/bci-bank/index.astro
    work/codepicnic/index.astro
    work/devpad/index.astro
    work/drn/index.astro
    work/find-eddie-the-skater/index.astro
    work/florida-dashboard/index.astro
    work/google-datacommons/index.astro
    work/google-mesa-dashboard/index.astro
    work/google-sidewalk-labs/index.astro
    work/kidlinks/index.astro
    work/nyserda-offshore-wind/index.astro
    work/one-data/index.astro
    work/one-data-agent/index.astro
    work/sidewalk-labs-street-design-principles/index.astro
    writings/index.astro
    writings/interface-delegation/index.astro
    writings/recognition-rather-than-recall/index.astro
    writings/technology-is-hackable/index.astro
    photography/index.astro
  styles/
    _variables.sass       — CSS custom properties (colors, sizes, typography)
    _reset.sass           — box-sizing and body base
    _layout.sass          — page wrapper, header, hero, sections
    _components.sass      — cards, gallery, article, image modal, misc UI
  style.sass              — imports all partials

public/
  assets/                 — images and media, served at /assets/
```

## Adding a new page

- **Index page** — create `src/pages/[section]/index.astro`, use `BaseLayout` + `Header` + `Hero` + content.
- **Case study or essay** — create `src/pages/work/[slug]/index.astro` (or `writings/`), use `ArticleLayout` with the following props:

```astro
<ArticleLayout
  pageTitle="Project Name · Work"
  headline="Project Name"
  lede="One-sentence description shown in the hero and as the page meta description."
  articleClass="work"
>
  <!-- article body goes here -->
</ArticleLayout>
```

## Image lightbox

Any `<figure class="media image">` element containing an `<img>` gets automatic lightbox behaviour from `BaseLayout`:

- Click image → opens modal
- Click image in modal / scroll wheel → zoom (up to 4×)
- Drag → pan when zoomed
- `←` / `→` keys or arrow buttons → navigate between all images on the page
- `Escape` or click backdrop → close
