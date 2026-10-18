import type { APIRoute } from 'astro';

// Search engines and AI assistants (including their search crawlers) are all welcome.
export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *
Allow: /

Sitemap: ${new URL('/sitemap-index.xml', site).href}
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
