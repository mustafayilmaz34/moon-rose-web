// Clinic contact details. TODO(client): confirm phone number — see docs/CONTENT.md, question 2.
export const site = {
  whatsappNumber: '905405000234',
  phoneDisplay: '0540 500 02 34',
  phoneHref: 'tel:+905405000234',
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}`;
