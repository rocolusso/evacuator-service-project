import type { Locale, LocaleCode } from '@/types';
import SchemaScript from '@/components/layout/SchemaScript';
import {
  LABELS, baseGraph, breadcrumbNode, faqNode, homeUrl, webPageNode,
} from '@/lib/jsonld';

interface JsonLdProps {
  locale: LocaleCode;
  t: Locale;
}

/** Home page graph: WebSite + business + breadcrumb + WebPage + FAQPage. */
export default function JsonLd({ locale, t }: JsonLdProps) {
  const url = homeUrl(locale);

  return (
    <SchemaScript
      graph={[
        ...baseGraph(locale),
        breadcrumbNode(url, [{ name: LABELS.home[locale], url }]),
        webPageNode({ url, locale, name: t.meta.title, description: t.meta.description }),
        faqNode(url, locale, t.faq.items),
      ]}
    />
  );
}
