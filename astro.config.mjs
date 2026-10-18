// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Set to the live domain once confirmed, e.g. 'https://www.unitedengineering.com.au'.
  // Used for canonical URLs.
  // site: 'https://www.unitedengineering.com.au',
  trailingSlash: 'always',
});
