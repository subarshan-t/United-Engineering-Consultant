// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // The live domain. Used for canonical URLs, the sitemap, robots.txt, llms.txt and structured data.
  site: 'https://unitedengineers.com.au',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
