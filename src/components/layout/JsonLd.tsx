import type { Locale, LocaleCode, FaqItem } from '@/types';

interface JsonLdProps {
  locale: LocaleCode;
  t: Locale;
  baseUrl: string;
}

function buildLocalBusinessSchema(t: Locale, baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutoRepair'],
    name: 'Evacuator Chisinau / Эвакуатор Кишинев',
    '@id': baseUrl,
    url: baseUrl,
    telephone: '+37360000000',
    priceRange: '400 MDL - 1500 MDL',
    description: t.meta.description,
    image: `${baseUrl}/og-image.jpg`,
    areaServed: {
      '@type': 'City',
      name: 'Chisinau',
      addressCountry: 'MD',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    hasMap: 'https://maps.google.com/?q=Chisinau,Moldova',
  };
}

function buildFaqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export default function JsonLd({ t, baseUrl }: JsonLdProps) {
  const localBusiness = buildLocalBusinessSchema(t, baseUrl);
  const faq = buildFaqSchema(t.faq.items);

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
