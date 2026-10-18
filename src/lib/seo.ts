import { site } from '../data/site';
import { mainNav, serviceGroups, projectLinks, tabs, type Link } from '../data/navigation';

// Every page's label, keyed by path, taken from the navigation data.
const labels = new Map<string, string>();
const add = (links: Link[]) => links.forEach((l) => labels.has(l.href) || labels.set(l.href, l.label));
add(mainNav);
add(serviceGroups);
serviceGroups.forEach((g) => add(g.children));
add(projectLinks);
add(Object.values(tabs).flat().filter((l) => l.label !== 'Overview'));

export const pageLabel = (path: string) => labels.get(path);

/** Breadcrumb trail for a path, e.g. /services/plans/house-plans/ → Home › Services › Plans › House Plans. */
export function breadcrumbs(path: string): Link[] {
  const parts = path.split('/').filter(Boolean);
  const trail: Link[] = [{ label: 'Home', href: '/' }];
  parts.forEach((_, i) => {
    const href = `/${parts.slice(0, i + 1).join('/')}/`;
    const label = labels.get(href);
    if (label) trail.push({ label, href });
  });
  return trail;
}

export function organisationSchema(origin: URL) {
  const url = new URL('/', origin).href;
  const { postalAddress, openingHours } = site;
  return {
    '@type': ['ProfessionalService', 'GeneralContractor'],
    '@id': `${url}#organization`,
    name: site.name,
    url,
    logo: new URL('/images/icon-512.png', origin).href,
    image: new URL('/images/og-image.jpg', origin).href,
    description: site.description,
    telephone: site.phone ?? undefined,
    email: site.email,
    address: { '@type': 'PostalAddress', ...postalAddress },
    areaServed: site.areaServed.map((name) => ({ '@type': name === 'Adelaide' ? 'City' : 'State', name })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: openingHours.days,
      opens: openingHours.opens,
      closes: openingHours.closes,
    },
    taxID: site.abn ? `ABN ${site.abn}` : undefined,
    hasCredential: [
      site.licence && { '@type': 'EducationalOccupationalCredential', name: `Building Work Contractor’s Licence ${site.licence}`, credentialCategory: 'license' },
      site.engineerCredential && { '@type': 'EducationalOccupationalCredential', name: 'Member of Engineers Australia (MIEAust)', credentialCategory: 'Professional membership' },
    ].filter(Boolean),
    knowsAbout: [
      'Residential design',
      'Structural engineering',
      'Civil engineering',
      'Footings and foundations on reactive clay soils',
      'Site and stormwater drainage',
      'Planning Consent and Building Consent in South Australia',
      'Development Approval (PlanSA)',
      'Subdivision and land division',
      'Interior design',
      'House plans',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: serviceGroups.map((g) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: g.label, url: new URL(g.href, origin).href },
      })),
    },
  };
}

interface PageSchemaInput {
  origin: URL;
  path: string;
  title: string;
  description: string;
  home: boolean;
}

/** JSON-LD graph for a page: organisation, website, web page, breadcrumbs and (on service pages) the service. */
export function pageSchema({ origin, path, title, description, home }: PageSchemaInput) {
  const url = new URL(path, origin).href;
  const orgId = new URL('/#organization', origin).href;
  const siteId = new URL('/#website', origin).href;
  const graph: Record<string, unknown>[] = [
    organisationSchema(origin),
    { '@type': 'WebSite', '@id': siteId, url: new URL('/', origin).href, name: site.name, publisher: { '@id': orgId }, inLanguage: 'en-AU' },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      isPartOf: { '@id': siteId },
      about: { '@id': orgId },
      inLanguage: 'en-AU',
    },
  ];

  if (!home) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs(path).map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: new URL(c.href, origin).href })),
    });
  }

  const label = pageLabel(path);
  if (path.startsWith('/services/') && path !== '/services/' && label) {
    graph.push({
      '@type': 'Service',
      name: label,
      serviceType: label,
      description,
      url,
      provider: { '@id': orgId },
      areaServed: site.areaServed.map((name) => ({ '@type': name === 'Adelaide' ? 'City' : 'State', name })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
