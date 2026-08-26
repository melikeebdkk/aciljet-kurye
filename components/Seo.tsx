import Head from "next/head";

export const SITE_URL = "https://www.aciljetkurye.com";
export const SITE_NAME = "AcilJet Kurye";
export const PHONE_NUMBER = "+905428421013";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/aciljet-logo-selected.webp`;

type JsonLd = Record<string, unknown>;

type PageSeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: JsonLd | JsonLd[];
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`}`;
}

export function PageSeo({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  jsonLd,
}: PageSeoProps) {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonical} />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {schemas.map((schema, index) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: "Kurye ve lojistik hizmeti",
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: PHONE_NUMBER,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "İstanbul",
    },
    url: absoluteUrl(path),
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
