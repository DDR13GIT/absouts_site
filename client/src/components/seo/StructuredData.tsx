import { Helmet } from 'react-helmet-async';

interface OrganizationSchemaProps {
  type?: 'Organization' | 'LocalBusiness' | 'Service';
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  services?: string[];
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode: string;
    addressCountry: string;
  }[];
  contactPoint?: {
    telephone: string;
    contactType: string;
    email: string;
  };
}

export function OrganizationSchema({
  type = 'Organization',
  name = 'Absouts',
  description = 'Leading provider of Cloud Accounting, Business Process Outsourcing (BPO), Software Development, and Image Editing services.',
  url = 'https://absouts.com',
  logo = 'https://absouts.com/logo.png',
  services = [
    'Cloud Accounting',
    'Business Process Outsourcing',
    'Software Development',
    'Image Editing Services',
    'Payroll Management',
    'Tax Compliance'
  ],
  address = [
    {
      streetAddress: '232/232(2), West Agargaon, A K Khan Tower, Level-7',
      addressLocality: 'Dhaka',
      addressRegion: 'Dhaka Division',
      postalCode: '1207',
      addressCountry: 'BD'
    },
    {
      streetAddress: '434 Finchley Road',
      addressLocality: 'London',
      postalCode: 'NW2 2HY',
      addressCountry: 'GB'
    }
  ],
  contactPoint = {
    telephone: '+880-2-223-315-204',
    contactType: 'Customer Service',
    email: 'contact@absouts.com'
  }
}: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url,
    logo: {
      '@type': 'ImageObject',
      url: logo
    },
    image: logo,
    telephone: contactPoint.telephone,
    email: contactPoint.email,
    address: address.map(addr => ({
      '@type': 'PostalAddress',
      streetAddress: addr.streetAddress,
      addressLocality: addr.addressLocality,
      addressRegion: addr.addressRegion,
      postalCode: addr.postalCode,
      addressCountry: addr.addressCountry
    })),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contactPoint.telephone,
      contactType: contactPoint.contactType,
      email: contactPoint.email,
      availableLanguage: ['English', 'Bengali']
    },
    sameAs: [
      'https://www.linkedin.com/company/absouts',
      'https://twitter.com/absouts',
      'https://www.facebook.com/absouts'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Outsourcing Services',
      itemListElement: services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
          provider: {
            '@type': 'Organization',
            name
          }
        }
      }))
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150'
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface BreadcrumbSchemaProps {
  items: {
    name: string;
    url: string;
  }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string[];
  url?: string;
}

export function ServiceSchema({
  name,
  description,
  provider = 'Absouts',
  areaServed = ['Bangladesh', 'United Kingdom', 'United States', 'Global'],
  url
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: 'https://absouts.com'
    },
    areaServed: areaServed.map(area => ({
      '@type': 'Place',
      name: area
    })),
    url
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
