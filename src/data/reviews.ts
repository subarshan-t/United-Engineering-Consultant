// Genuine client reviews shown in "What our clients say" on the home page.
// Copy them word for word from the source (e.g. Google) and keep the link to the original.
export interface Review {
  name: string;
  rating: number; // out of 5
  quote: string;
  source: string;
  url?: string;
}

export const reviews: Review[] = [
  {
    name: 'Mehdi Ali',
    rating: 5,
    quote:
      'United Engineering Consultant delivers unique, effective designs and handles council, building, and development approvals incredibly fast. Their quick approval process and creative ideas make them an excellent choice. Highly recommended!',
    source: 'Google review',
    url: 'https://share.google/v3n8k4ovA55zG9Apc',
  },
];
