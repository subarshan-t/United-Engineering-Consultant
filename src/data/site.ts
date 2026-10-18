// Business details used across the header, footer and contact sections.
// Any value left as null renders as a highlighted placeholder until the client supplies it.
export const site = {
  name: 'United Engineering Consultants',
  phone: '+61 435 338 017' as string | null,
  email: 'admin@unitedengineers.com.au',
  address: '1/41 Douglas Drive, Mawson Lakes, SA 5095',
  hours: 'Monday – Friday, 9:00am – 5:00pm',
  hoursShort: 'Mon – Fri, 9:00am – 5:00pm',
  licence: 'BLD 350766' as string | null, // Building Work Contractor's Licence
  abn: '73 683 735 328' as string | null,
  engineerCredential: 'MIEAust' as string | null,

  // Form service URL for the enquiry form, e.g. 'https://formspree.io/f/YOUR_FORM_ID'.
  // While empty, the form validates and shows the thank-you message but sends nothing.
  formEndpoint: '',
};

export const placeholders = {
  phone: '[PHONE NUMBER]',
  licence: '[BLD LICENCE NUMBER]',
  abn: '[ABN]',
  engineerCredential: '[ENGINEER CREDENTIAL, e.g. CPEng / NER]',
};
