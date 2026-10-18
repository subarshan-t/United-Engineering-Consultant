# United Engineering Consultants website

Built with [Astro](https://astro.build). It produces a fully static site (51 pages plus a 404) that can be hosted anywhere: Netlify, Vercel, Cloudflare Pages, or any standard web host / cPanel.

## Getting started

```sh
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # builds the static site into dist/
npm run preview   # serves the built dist/ folder locally
```

Requires Node.js 22 or newer.

## Where things live

| What | Where |
| --- | --- |
| Business details (phone, licence, ABN, form endpoint) | `src/data/site.ts` |
| Main menu, Services mega menu, footer links, page tabs | `src/data/navigation.ts` |
| Pages (one file per URL) | `src/pages/` |
| Shared layout (head, header, footer) | `src/layouts/BaseLayout.astro` |
| Reusable sections (hero, numbered section, CTA banner, FAQ, contact form) | `src/components/` |
| Styles and design tokens | `src/styles/global.css` |
| Menu and form behaviour | `src/scripts/main.js` |
| Images and logos | `public/images/` |

The file path in `src/pages/` is the URL: for example `src/pages/services/plans/house-plans.astro` is `/services/plans/house-plans/`.

## Replacing images

The images in `public/images/` are placeholders cropped from the mockup. Replace a file with one of the same name to swap it across the site, or add new files and update the `image="/images/..."` props on the pages.

## Placeholders

- Copy that still needs client input is wrapped in `<Placeholder>…</Placeholder>` (highlighted on the page). Replace the whole tag with the final text.
- The phone number, licence number, ABN and engineer credential are set once in `src/data/site.ts`. Fill those in and they update everywhere, including the footer, contact sections and FAQs.

## Enquiry form

Set `formEndpoint` in `src/data/site.ts` to a form service URL (Formspree, Basin, Getform), e.g. `https://formspree.io/f/YOUR_FORM_ID`. Until it's set, the form validates and shows the thank-you message but sends nothing.

Fields are posted as `name`, `email`, `phone`, `address`, `project_type`, `message` and `attachments` (file upload, which needs a form plan that supports attachments). `_gotcha` is a honeypot spam trap.

## Going live

1. Set `site` in `astro.config.mjs` to the live domain (enables canonical URLs).
2. Run `npm run build` and upload the contents of `dist/` to the host, or connect the repository to Netlify / Vercel / Cloudflare Pages with build command `npm run build` and output directory `dist`.
