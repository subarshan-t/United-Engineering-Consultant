import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { serviceGroups, projectLinks, tabs } from '../data/navigation';

// llms.txt (https://llmstxt.org): a plain-text summary of the business and its key pages
// for AI assistants and answer engines.
export const GET: APIRoute = ({ site: origin }) => {
  const url = (href: string) => new URL(href, origin).href;
  const link = (label: string, href: string) => `- [${label}](${url(href)})`;
  const facts = [
    `Location: ${site.address} (servicing ${site.areaServed.join(' and ')})`,
    site.phone && `Phone: ${site.phone}`,
    `Email: ${site.email}`,
    `Hours: ${site.hours}`,
    site.licence && `Building Work Contractor’s Licence: ${site.licence}`,
    site.abn && `ABN: ${site.abn}`,
    site.engineerCredential && `Engineering: ${site.engineerCredential} (Member of Engineers Australia)`,
  ].filter(Boolean);

  const body = `# ${site.name}

> ${site.description}

${site.name} designs, engineers, gets council approval for and builds homes in Adelaide and South Australia, so clients deal with one business from the first sketch to handover. Services can also be engaged on their own by builders, owner-builders and developers.

${facts.map((f) => `- ${f}`).join('\n')}

## Services

${serviceGroups
  .map((g) => [link(g.label, g.href), ...g.children.map((c) => `  ${link(c.label, c.href)}`)].join('\n'))
  .join('\n')}

## Projects

${projectLinks.map((p) => link(p.label, p.href)).join('\n')}

## Process

${tabs.process.map((p) => link(p.label === 'Overview' ? 'Our process' : p.label, p.href)).join('\n')}

## Company

${link('About', '/about/')}
${link('FAQs', '/faqs/')}
${link('Insights', '/insights/')}
${link('Contact and quotes', '/contact/')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
