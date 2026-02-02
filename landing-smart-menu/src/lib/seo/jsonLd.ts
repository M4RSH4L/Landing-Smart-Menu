import { site } from "@/lib/site";

type JsonLd = Record<string, unknown>;

type FaqItem = {
  question: string;
  answer: string;
};

export function buildLocalBusinessJsonLd(): JsonLd {
  const url = site.siteUrl ?? "https://example.com";

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${site.brand} — ${site.product}`,
    url,
    description:
      "Servicio de menús digitales inteligentes con QR, optimizados para SEO y editables desde Google Sheets. Nacido en La Plata (Buenos Aires, Argentina) y escalable globalmente.",
    areaServed: ["La Plata", "Buenos Aires", "Argentina", "Global"],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
  };
}

export function buildProductJsonLd(): JsonLd {
  const url = site.siteUrl ?? "https://example.com";

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: site.product,
    description:
      "Carta digital QR moderna, rápida y liviana. Editable desde Google Sheets, con control del orden visual, fotos, precios y videos. Optimizada para búsquedas locales y turismo.",
    brand: {
      "@type": "Brand",
      name: site.brand,
    },
    category: "SaaS",
    url,
    offers: {
      "@type": "Offer",
      url: site.primaryCta.href.startsWith("http")
        ? site.primaryCta.href
        : `${url}${site.primaryCta.href}`,
      priceCurrency: "ARS",
      availability: "https://schema.org/InStock",
    },
  };
}

export function buildFaqJsonLd(items: FaqItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
