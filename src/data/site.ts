// Business details used across the header, footer and contact sections.
// Any value left as null renders as a highlighted placeholder until the client supplies it.
export const site = {
  name: 'United Engineering Consultants',
  phone: '+61 435 338 017' as string | null,
  email: 'admin@unitedengineers.com.au',
  address: '1/41 Douglas Drive, Mawson Lakes, SA 5095',
  // Structured version of the address for search engines (schema.org PostalAddress).
  postalAddress: {
    streetAddress: '1/41 Douglas Drive',
    addressLocality: 'Mawson Lakes',
    addressRegion: 'SA',
    postalCode: '5095',
    addressCountry: 'AU',
  },
  areaServed: ['Adelaide', 'South Australia'],
  homesDelivered: '100+', // shown in the home hero and trust lists
  memberships: ['Housing Industry Association (HIA)'],
  // Key facts for AI assistants and answer engines (llms.txt). Keep in sync with the page copy.
  keyFacts: [
    'Free initial consultation of up to 30 minutes; further professional services are $550 per hour including GST',
    'Builds use the HIA standard residential building contract',
    'Homes are inspected at each key construction stage by qualified engineers and a building supervisor',
    'A standard single-storey home typically takes around four months to build after the slab',
    'Residential design typically takes 45 to 60 days; council approval generally takes around 60 days',
    'Structural engineering turnaround is typically around two weeks per set of drawings',
    'Every home includes a three-month maintenance period from handover',
    'Design-only clients can take their approved plans to any builder',
    'Services metropolitan Adelaide and outer regional areas of South Australia',
  ],
  openingHours: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
  description:
    'Adelaide engineering and design firm with 100+ homes delivered, providing residential design, structural and civil engineering, building approvals, project management and construction across South Australia.',
  hours: 'Monday – Friday, 9:00am – 5:00pm',
  hoursShort: 'Mon – Fri, 9:00am – 5:00pm',
  responseTime: 'within two business days', // how quickly enquiries are answered
  licence: 'BLD 350766' as string | null, // Building Work Contractor's Licence
  abn: '73 683 735 328' as string | null,
  engineerCredential: 'MIEAust' as string | null,

  // Enquiry form is delivered by Web3Forms (https://web3forms.com) to the email the access key
  // was created with. The access key is designed to be public. If formEndpoint is empty, the
  // form validates and shows the thank-you message but sends nothing.
  formEndpoint: 'https://api.web3forms.com/submit',
  formAccessKey: 'e7156c42-84dc-447f-bf25-c03965d5618a',
  formSubject: 'New website enquiry',
};

export const placeholders = {
  phone: '[PHONE NUMBER]',
  licence: '[BLD LICENCE NUMBER]',
  abn: '[ABN]',
  engineerCredential: '[ENGINEER CREDENTIAL, e.g. CPEng / NER]',
};
