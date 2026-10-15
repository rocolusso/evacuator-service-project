import type { FaqItem, LocaleCode } from '@/types';
import { getTranslations } from '@/lib/i18n';
import { servicesRo, servicesRu } from '@/content/services';
import { BASE_URL, OG_ALT, OG_IMAGE } from '@/lib/seo';

/**
 * schema.org builders. Every page emits ONE JSON-LD <script> with an
 * `@graph`; entities are linked by `@id` (WebSite <- WebPage -> Organization,
 * BreadcrumbList, Service / BlogPosting / FAQPage ...), so each entity is
 * described once and referenced everywhere else.
 */
export type SchemaNode = Record<string, unknown>;

/** Date of the current build (YYYY-MM-DD), inlined by next.config.ts; used as `dateModified`. */
export const SITE_UPDATED = process.env.BUILD_DATE ?? new Date().toISOString().slice(0, 10);

const PHONE = '+37368988220';

export const ID = {
  website: `${BASE_URL}/#website`,
  organization: `${BASE_URL}/#organization`,
  image: `${BASE_URL}/#primaryimage`,
} as const;

export const LABELS = {
  home: { ro: 'Acasă', ru: 'Главная' },
  blog: { ro: 'Blog', ru: 'Блог' },
} as const;

export const homeUrl = (locale: LocaleCode) => (locale === 'ru' ? `${BASE_URL}/ru` : `${BASE_URL}/`);
export const blogUrl = (locale: LocaleCode) => (locale === 'ru' ? `${BASE_URL}/ru/blog` : `${BASE_URL}/blog`);

const ref = (id: string) => ({ '@id': id });

export function websiteNode(): SchemaNode {
  return {
    '@type': 'WebSite',
    '@id': ID.website,
    url: `${BASE_URL}/`,
    name: 'Evacuator Chisinau',
    alternateName: ['Эвакуатор Кишинев', 'Vezu.md'],
    inLanguage: ['ro', 'ru'],
    publisher: ref(ID.organization),
  };
}

export function imageNode(locale: LocaleCode): SchemaNode {
  return {
    '@type': 'ImageObject',
    '@id': ID.image,
    url: OG_IMAGE.url,
    contentUrl: OG_IMAGE.url,
    width: OG_IMAGE.width,
    height: OG_IMAGE.height,
    caption: OG_ALT[locale],
    inLanguage: locale,
  };
}

export function organizationNode(locale: LocaleCode): SchemaNode {
  const t = getTranslations(locale);
  const services = locale === 'ru' ? servicesRu : servicesRo;
  const servicePath = locale === 'ru' ? '/ru/uslugi/' : '/servicii/';

  return {
    '@type': ['AutomotiveBusiness', 'LocalBusiness'],
    '@id': ID.organization,
    name: 'Evacuator Chisinau',
    alternateName: ['Эвакуатор Кишинев', 'Vezu.md', 'Evacuator Chisinau / Эвакуатор Кишинев'],
    description: t.meta.description,
    url: `${BASE_URL}/`,
    image: ref(ID.image),
    telephone: PHONE,
    priceRange: '450 MDL - 1500 MDL',
    currenciesAccepted: 'MDL',
    paymentAccepted: 'Cash, Card',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Strada Vissarion Belinski 71',
      addressLocality: 'Chișinău',
      postalCode: 'MD-2064',
      addressCountry: 'MD',
    },
    areaServed: [
      { '@type': 'City', name: 'Chișinău', addressCountry: 'MD' },
      { '@type': 'Country', name: 'Moldova' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE,
      contactType: 'customer service',
      areaServed: 'MD',
      availableLanguage: ['ro', 'ru'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    knowsLanguage: ['ro', 'ru'],
    hasMap: 'https://maps.google.com/?q=Chisinau,Moldova',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'ru' ? 'Услуги эвакуации и техпомощи' : 'Servicii de evacuare și asistență rutieră',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.h1, url: `${BASE_URL}${servicePath}${s.slug}` },
      })),
    },
  };
}

export function breadcrumbNode(url: string, trail: { name: string; url: string }[]): SchemaNode {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

interface WebPageInput {
  url: string;
  name: string;
  description: string;
  locale: LocaleCode;
  type?: 'WebPage' | 'CollectionPage';
  dateModified?: string;
  mainEntityId?: string;
}

export function webPageNode({ url, name, description, locale, type = 'WebPage', dateModified = SITE_UPDATED, mainEntityId }: WebPageInput): SchemaNode {
  return {
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: locale,
    isPartOf: ref(ID.website),
    about: ref(ID.organization),
    primaryImageOfPage: ref(ID.image),
    breadcrumb: ref(`${url}#breadcrumb`),
    dateModified,
    potentialAction: { '@type': 'ReadAction', target: [url] },
    ...(mainEntityId ? { mainEntity: ref(mainEntityId) } : {}),
  };
}

export function faqNode(url: string, locale: LocaleCode, items: FaqItem[]): SchemaNode {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    url,
    inLanguage: locale,
    isPartOf: ref(`${url}#webpage`),
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

interface ServiceInput {
  url: string;
  locale: LocaleCode;
  name: string;
  description: string;
  priceFrom: string;
  pricePer: string;
}

export function serviceNode({ url, locale, name, description, priceFrom, pricePer }: ServiceInput): SchemaNode {
  const price = priceFrom.match(/\d+/)?.[0];

  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    serviceType: name,
    name,
    description,
    url,
    inLanguage: locale,
    provider: ref(ID.organization),
    areaServed: [
      { '@type': 'City', name: 'Chișinău', addressCountry: 'MD' },
      { '@type': 'Country', name: 'Moldova' },
    ],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: url,
      servicePhone: { '@type': 'ContactPoint', telephone: PHONE, availableLanguage: ['ro', 'ru'] },
    },
    ...(price
      ? {
        offers: {
          '@type': 'Offer',
          priceCurrency: 'MDL',
          price,
          description: `${priceFrom} ${pricePer}`,
          availability: 'https://schema.org/InStock',
          seller: ref(ID.organization),
        },
      }
      : {}),
  };
}

interface ArticleInput {
  url: string;
  locale: LocaleCode;
  headline: string;
  description: string;
  datePublished: string;
  paragraphs: string[];
}

export function articleNode({ url, locale, headline, description, datePublished, paragraphs }: ArticleInput): SchemaNode {
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline,
    description,
    url,
    inLanguage: locale,
    datePublished,
    dateModified: datePublished,
    wordCount: paragraphs.join(' ').split(/\s+/).filter(Boolean).length,
    image: ref(ID.image),
    isPartOf: ref(`${url}#webpage`),
    mainEntityOfPage: ref(`${url}#webpage`),
    author: ref(ID.organization),
    publisher: ref(ID.organization),
  };
}

export function blogListNode(url: string, locale: LocaleCode, articles: { title: string; url: string }[]): SchemaNode {
  return {
    '@type': 'ItemList',
    '@id': `${url}#list`,
    inLanguage: locale,
    numberOfItems: articles.length,
    itemListElement: articles.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: a.title,
      url: a.url,
    })),
  };
}

/** Shared nodes present on every page. */
export function baseGraph(locale: LocaleCode): SchemaNode[] {
  return [websiteNode(), organizationNode(locale), imageNode(locale)];
}
