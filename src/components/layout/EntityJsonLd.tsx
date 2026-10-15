import type { FaqItem, LocaleCode } from '@/types';
import SchemaScript from '@/components/layout/SchemaScript';
import {
  LABELS, articleNode, baseGraph, blogListNode, blogUrl, breadcrumbNode,
  faqNode, homeUrl, serviceNode, webPageNode,
} from '@/lib/jsonld';

interface ServiceJsonLdProps {
  locale: LocaleCode;
  /** Visible service name (H1). */
  name: string;
  /** Page <title>. */
  pageTitle: string;
  description: string;
  url: string;
  priceFrom: string;
  pricePer: string;
  faqItems?: FaqItem[];
}

/** Service page graph: base entities + breadcrumb + WebPage + Service (+ FAQPage). */
export function ServiceJsonLd({ locale, name, pageTitle, description, url, priceFrom, pricePer, faqItems }: ServiceJsonLdProps) {
  return (
    <SchemaScript
      graph={[
        ...baseGraph(locale),
        breadcrumbNode(url, [
          { name: LABELS.home[locale], url: homeUrl(locale) },
          { name, url },
        ]),
        webPageNode({ url, locale, name: pageTitle, description, mainEntityId: `${url}#service` }),
        serviceNode({ url, locale, name, description, priceFrom, pricePer }),
        ...(faqItems && faqItems.length > 0 ? [faqNode(url, locale, faqItems)] : []),
      ]}
    />
  );
}

interface ArticleJsonLdProps {
  locale: LocaleCode;
  /** Visible article title (H1). */
  headline: string;
  /** Page <title>. */
  pageTitle: string;
  description: string;
  url: string;
  datePublished: string;
  paragraphs: string[];
}

/** Blog article graph: base entities + breadcrumb + WebPage + BlogPosting. */
export function ArticleJsonLd({ locale, headline, pageTitle, description, url, datePublished, paragraphs }: ArticleJsonLdProps) {
  return (
    <SchemaScript
      graph={[
        ...baseGraph(locale),
        breadcrumbNode(url, [
          { name: LABELS.home[locale], url: homeUrl(locale) },
          { name: LABELS.blog[locale], url: blogUrl(locale) },
          { name: headline, url },
        ]),
        webPageNode({ url, locale, name: pageTitle, description, dateModified: datePublished, mainEntityId: `${url}#article` }),
        articleNode({ url, locale, headline, description, datePublished, paragraphs }),
      ]}
    />
  );
}

interface BlogIndexJsonLdProps {
  locale: LocaleCode;
  pageTitle: string;
  description: string;
  articles: { title: string; url: string }[];
}

/** Blog index graph: base entities + breadcrumb + CollectionPage + ItemList of articles. */
export function BlogIndexJsonLd({ locale, pageTitle, description, articles }: BlogIndexJsonLdProps) {
  const url = blogUrl(locale);

  return (
    <SchemaScript
      graph={[
        ...baseGraph(locale),
        breadcrumbNode(url, [
          { name: LABELS.home[locale], url: homeUrl(locale) },
          { name: LABELS.blog[locale], url },
        ]),
        webPageNode({ url, locale, name: pageTitle, description, type: 'CollectionPage', mainEntityId: `${url}#list` }),
        blogListNode(url, locale, articles),
      ]}
    />
  );
}
