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
  openingHours: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
  description:
    'Adelaide engineering and design firm providing residential design, structural and civil engineering, building approvals and construction for homes across South Australia.',
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
