import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function SEO({
  title = 'Absouts - Global Outsourcing Solutions | Cloud Accounting, BPO & Software Development',
  description = 'Leading provider of Cloud Accounting, Business Process Outsourcing (BPO), Software Development, and Image Editing services. Transform your business with our expert outsourcing solutions.',
  keywords = 'cloud accounting, BPO services, software development, image editing, outsourcing, business process outsourcing, accounting services, payroll management, tax compliance, Bangladesh outsourcing',
  image = 'https://absouts.com/og-image.png',
  url = 'https://absouts.com',
  type = 'website',
  author = 'Absouts',
  publishedTime,
  modifiedTime,
}: SEOProps) {
  const siteName = 'Absouts';
  const twitterHandle = '@absouts';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Article specific tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:site" content={twitterHandle} />
      <meta property="twitter:creator" content={twitterHandle} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* Geo Tags */}
      <meta name="geo.region" content="BD" />
      <meta name="geo.placename" content="Dhaka" />
      <meta name="geo.position" content="23.8103;90.4125" />
      <meta name="ICBM" content="23.8103, 90.4125" />
    </Helmet>
  );
}
