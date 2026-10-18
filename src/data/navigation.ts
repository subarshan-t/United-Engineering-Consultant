export interface Link {
  label: string;
  href: string;
}

export const mainNav: (Link & { mega?: boolean })[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/', mega: true },
  { label: 'Projects', href: '/projects/' },
  { label: 'Process', href: '/process/' },
  { label: 'About', href: '/about/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: '/contact/' },
];

// Services mega menu (desktop) and footer services column.
export const serviceGroups: (Link & { children: Link[] })[] = [
  {
    label: 'Residential Designs',
    href: '/services/residential-design/',
    children: [
      { label: 'Concept Design', href: '/services/residential-design/concept-design/' },
      { label: 'Planning Drawings', href: '/services/residential-design/planning-drawings/' },
      { label: 'Working & Construction Drawings', href: '/services/residential-design/construction-drawings/' },
      { label: '3D Design & Visualisation', href: '/services/residential-design/3d-design-visualisation/' },
    ],
  },
  {
    label: 'Structural Engineering',
    href: '/services/structural-engineering/',
    children: [
      { label: 'New Home Engineering', href: '/services/structural-engineering/new-home-engineering/' },
      { label: 'Footings & Foundations', href: '/services/structural-engineering/footings-foundations/' },
      { label: 'Site & Drainage Plans', href: '/services/structural-engineering/site-drainage-plans/' },
      { label: 'Structural Design', href: '/services/structural-engineering/structural-design/' },
      { label: 'Retaining Walls', href: '/services/structural-engineering/retaining-walls/' },
    ],
  },
  {
    label: 'Planning and Approvals',
    href: '/services/planning-approvals/',
    children: [
      { label: 'Planning Consent', href: '/services/planning-approvals/planning-consent/' },
      { label: 'Building Consent', href: '/services/planning-approvals/building-consent/' },
      { label: 'Development Approval', href: '/services/planning-approvals/development-approval/' },
      { label: 'Council & Authority Coordination', href: '/services/planning-approvals/council-authority-coordination/' },
    ],
  },
  {
    label: 'Subdivision & Land Division',
    href: '/services/subdivision-land-division/',
    children: [],
  },
  {
    label: 'Interior Design',
    href: '/services/interior-design/',
    children: [
      { label: 'Interior Design', href: '/services/interior-design/interior-design/' },
      { label: 'Kitchen & Bathroom Design', href: '/services/interior-design/kitchen-bathroom-design/' },
      { label: 'Furniture & Joinery', href: '/services/interior-design/furniture-joinery/' },
      { label: 'Materials & Finishes', href: '/services/interior-design/materials-finishes/' },
    ],
  },
  {
    label: 'Plans',
    href: '/services/plans/',
    children: [
      { label: 'House Plans', href: '/services/plans/house-plans/' },
      { label: 'Engineering Plans', href: '/services/plans/engineering-plans/' },
      { label: 'Electrical Plans', href: '/services/plans/electrical-plans/' },
      { label: 'Plumbing Plans', href: '/services/plans/plumbing-plans/' },
      { label: 'Air Conditioning Layout', href: '/services/plans/air-conditioning-layout/' },
      { label: 'Structural Plan', href: '/services/plans/structural-plan/' },
    ],
  },
];

export const projectLinks: Link[] = [
  { label: 'New Homes', href: '/projects/new-homes/' },
  { label: 'Custom Homes', href: '/projects/custom-homes/' },
  { label: 'Renovations & Extensions', href: '/projects/renovations-extensions/' },
  { label: 'Knockdown & Rebuild', href: '/projects/knockdown-rebuild/' },
  { label: 'Secondary Dwellings', href: '/projects/secondary-dwellings/' },
  { label: 'Development & Subdivision', href: '/projects/development-subdivision/' },
];

const overview = (href: string): Link => ({ label: 'Overview', href });
const withOverview = (group: (typeof serviceGroups)[number]): Link[] => [overview(group.href), ...group.children];
const group = (href: string) => serviceGroups.find((g) => g.href === href)!;

// Tab rows shown under the page hero, keyed by section.
export const tabs = {
  services: [overview('/services/'), ...serviceGroups.map(({ label, href }) => ({ label, href }))],
  residentialDesign: withOverview(group('/services/residential-design/')),
  structuralEngineering: withOverview(group('/services/structural-engineering/')),
  planningApprovals: withOverview(group('/services/planning-approvals/')),
  interiorDesign: withOverview(group('/services/interior-design/')),
  plans: withOverview(group('/services/plans/')),
  projects: [overview('/projects/'), ...projectLinks],
  process: [
    overview('/process/'),
    { label: 'Initial Consultations', href: '/process/initial-consultation/' },
    { label: 'Fee Proposal', href: '/process/fee-proposal/' },
    { label: 'Engagement Agreement', href: '/process/engagement-agreement/' },
    { label: 'Final Quote', href: '/process/final-quote/' },
    { label: 'Agreement', href: '/process/building-contract/' },
    { label: 'Processing', href: '/process/processing/' },
    { label: 'Pre handover', href: '/process/pre-handover/' },
    { label: 'Handover', href: '/process/handover/' },
  ],
} satisfies Record<string, Link[]>;

export type TabGroup = keyof typeof tabs;
