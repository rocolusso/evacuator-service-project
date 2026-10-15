import type { SchemaNode } from '@/lib/jsonld';

/** Renders one JSON-LD script with an `@graph`. `<` is escaped to keep the payload inert inside <script>. */
export default function SchemaScript({ graph }: { graph: SchemaNode[] }) {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');

  return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: json }} />;
}
