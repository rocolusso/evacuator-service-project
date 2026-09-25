import type { FaqItem } from '@/types';

interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
  baseUrl: string;
  faqItems?: FaqItem[];
}

/**
 * JSON-LD for a single service page: a Service entity (offered by the
 * site's AutomotiveBusiness), plus an optional FAQPage block for the
 * page's mini-FAQ.
 */
export function ServiceJsonLd({ name, description, url, baseUrl, faqItems }: ServiceJsonLdProps) {
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description,
    url,
    provider: {
      '@type': 'AutomotiveBusiness',
      name: 'Evacuator Chisinau / Эвакуатор Кишинев',
      '@id': baseUrl,
      telephone: '+37368988220',
    },
    areaServed: {
      '@type': 'City',
      name: 'Chisinau',
      addressCountry: 'MD',
    },
  };

  const faq = faqItems && faqItems.length > 0
    ? {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    }
    : null;

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      {faq && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
      )}
    </>
  );
}

interface ArticleJsonLdProps {
  headline: string;
  description: string;
  url: string;
  baseUrl: string;
  datePublished: string;
  inLanguage: 'ro' | 'ru';
}

/**
 * JSON-LD for a blog article: a BlogPosting entity attributed to the
 * site's business as author/publisher.
 */
export function ArticleJsonLd({ headline, description, url, baseUrl, datePublished, inLanguage }: ArticleJsonLdProps) {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    url,
    datePublished,
    dateModified: datePublished,
    inLanguage,
    author: {
      '@type': 'Organization',
      name: 'Evacuator Chisinau / Эвакуатор Кишинев',
      '@id': baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Evacuator Chisinau / Эвакуатор Кишинев',
      '@id': baseUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
    />
  );
}
