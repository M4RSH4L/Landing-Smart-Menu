export const site = {
  brand: "Morpho",
  product: "Menú Digital Inteligente con QR",
  city: "La Plata",
  region: "Buenos Aires",
  country: "Argentina",
  locale: "es_AR",
  primaryCta: {
    label: "Pedir demo",
    href: process.env.NEXT_PUBLIC_PRIMARY_CTA_URL ?? "https://wa.link/ls9vvg",
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
} as const;
