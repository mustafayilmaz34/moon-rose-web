// Clinic details — single source for the UI, social cards and schema.org data.
// TODO(client): confirm phone number — see docs/CONTENT.md, question 2.
export const site = {
  name: 'Moonrose Clinic',
  whatsappNumber: '905405000234',
  phoneDisplay: '0540 500 02 34',
  phoneHref: 'tel:+905405000234',
  phoneE164: '+905405000234',
  // TODO(client): Instagram handle — docs/CONTENT.md, question 3. Hidden while null.
  instagramUrl: null as string | null,
  address: {
    street: 'Doğu Mah., Erol Kaya Cd. No:179 Kat:1 D:2',
    district: 'Pendik',
    city: 'İstanbul',
    postalCode: '34840',
    country: 'TR',
  },
  /** Monday–Saturday 08:30–17:00, closed Wednesday and Sunday (current site). */
  openingHours: {
    days: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:30',
    closes: '17:00',
  },
  /** Browser UI colour — same value as the `ink` token in global.css. */
  themeColor: '#0f2a4a',
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}`;

// A plain link (no embedded map): an embedded Google Map would set cookies before consent.
export const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Erol Kaya Cd. No:179, 34840 Pendik/İstanbul');
