import { COMPANY } from "@/lib/utils/constants";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://absouts.com";

const services = [
  "Cloud Accounting",
  "Business Process Outsourcing",
  "Software Development",
  "Payroll Management",
  "Tax Compliance",
  "Virtual Accounting Services",
  "Customer Support",
  "Data Management",
];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    description:
      "Leading provider of Cloud Accounting, Business Process Outsourcing (BPO), and Software Development services.",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/assets/Absouts Logo Transparent 01_1757063958530.png`,
    },
    image: `${SITE_URL}/assets/Absouts Logo Transparent 01_1757063958530.png`,
    telephone: COMPANY.phones[0],
    email: COMPANY.email,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "232/232(2), West Agargaon, A K Khan Tower, Level-7",
        addressLocality: "Dhaka",
        addressRegion: "Dhaka Division",
        postalCode: "1207",
        addressCountry: "BD",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "434 Finchley Road",
        addressLocality: "London",
        postalCode: "NW2 2HY",
        addressCountry: "GB",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.phones[0],
      contactType: "Customer Service",
      email: COMPANY.email,
      availableLanguage: ["English", "Bengali", "Spanish"],
    },
    sameAs: [
      "https://www.linkedin.com/company/absouts",
      "https://twitter.com/absouts",
      "https://www.facebook.com/absouts",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Outsourcing Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          provider: {
            "@type": "Organization",
            name: COMPANY.name,
          },
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    provider: {
      "@type": "Organization",
      name: COMPANY.name,
      url: SITE_URL,
    },
    areaServed: ["Bangladesh", "United Kingdom", "United States", "Global"].map((area) => ({
      "@type": "Place",
      name: area,
    })),
    url: url.startsWith("http") ? url : `${SITE_URL}${url}`,
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
