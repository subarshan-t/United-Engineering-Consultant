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
| Home hero video | `public/videos/` |

The file path in `src/pages/` is the URL: for example `src/pages/services/plans/house-plans.astro` is `/services/plans/house-plans/`.

## Replacing images

The images in `public/images/` are placeholders cropped from the mockup. Replace a file with one of the same name to swap it across the site, or add new files and update the `image="/images/..."` props on the pages.

## Home hero video

The home page hero plays `public/videos/hero.mp4` (muted, looping) behind the navy gradient, with `public/images/hero-poster.jpg` shown while it loads and for visitors who have reduced motion turned on. To swap it, replace both files. Keep the video short, silent and compressed (H.264 MP4, a few MB) so the page stays fast.

## Placeholders

- Copy that still needs client input is wrapped in `<Placeholder>…</Placeholder>` (highlighted on the page). Replace the whole tag with the final text.
- The phone number, licence number, ABN and engineer credential are set once in `src/data/site.ts`. Fill those in and they update everywhere, including the footer, contact sections and FAQs.

## Enquiry form

Submissions are sent by [Web3Forms](https://web3forms.com) (free plan, 250 submissions a month) to the email address the access key was created with. The settings are `formEndpoint`, `formAccessKey` and `formSubject` in `src/data/site.ts`. The access key is designed to be public, so it's fine in the site's code. To send to a different inbox, create a new access key at web3forms.com and replace it.

Fields are posted as `name`, `email`, `phone`, `address`, `project_type` and `message`. Replying to the notification email goes to the customer. `botcheck` is a hidden spam trap. File uploads need a paid Web3Forms plan, so the form asks people to email drawings instead.

## SEO, AEO and GEO

Built in, nothing to maintain by hand:

- **Domain:** set once as `site` in `astro.config.mjs`. Canonical URLs, social previews, the sitemap, `robots.txt`, `llms.txt` and structured data all use it.
- **Sitemap:** `/sitemap-index.xml`, generated on every build.
- **robots.txt:** allows all search engines and AI crawlers and points to the sitemap.
- **llms.txt:** a plain-text summary of the business and its key pages for AI assistants, built from `src/data/site.ts` and `src/data/navigation.ts`.
- **Structured data (JSON-LD):** every page describes the business (address, phone, hours, licence, ABN, MIEAust, services, areas served), plus breadcrumbs. Service pages also describe the service.
- **FAQ markup:** FAQ answers are marked up as an FAQPage for answer engines. Answers that still contain a placeholder are left out automatically until they're filled in.
- **Social previews:** Open Graph and Twitter tags use `public/images/og-image.jpg` (1200×630).

After launch: verify the domain in Google Search Console and Bing Webmaster Tools, submit the sitemap, and set up a Google Business Profile with the same name, address and phone as the site.

## Going live

1. Check `site` in `astro.config.mjs` matches the live domain (currently `https://unitedengineers.com.au`).
2. Run `npm run build` and upload the contents of `dist/` to the host, or connect the repository to Netlify / Vercel / Cloudflare Pages with build command `npm run build` and output directory `dist`.
