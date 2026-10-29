import type { Locale, SeoBlock } from '@/types';
import ReadMore from '@/components/ui/ReadMore';

interface SeoSectionProps {
  t: Locale;
}

const headingClass: Record<SeoBlock['level'], string> = {
  h2: 'text-2xl sm:text-3xl md:text-4xl font-extrabold mt-14 mb-4 first:mt-0',
  h3: 'text-lg sm:text-xl font-bold mt-8 mb-3',
  h4: 'text-base sm:text-lg font-bold mt-6 mb-2',
  h5: 'text-sm sm:text-base font-bold mt-5 mb-2',
  h6: 'text-sm font-bold mt-5 mb-2',
};

function SeoHeading({ block }: { block: SeoBlock }) {
  if (!block.heading) return null;
  const className = headingClass[block.level];
  const style = { color: 'var(--foreground)' };

  switch (block.level) {
    case 'h2':
      return <h2 className={className} style={style}>{block.heading}</h2>;
    case 'h3':
      return <h3 className={className} style={style}>{block.heading}</h3>;
    case 'h4':
      return <h4 className={className} style={style}>{block.heading}</h4>;
    case 'h5':
      return <h5 className={className} style={style}>{block.heading}</h5>;
    default:
      return <h6 className={className} style={style}>{block.heading}</h6>;
  }
}

function SeoBlockView({ block }: { block: SeoBlock }) {
  return (
    <div>
      <SeoHeading block={block} />

      {block.body && (
        <p
          className='text-sm md:text-base leading-relaxed mb-4'
          style={{ color: 'var(--muted)' }}
        >
          {block.body}
        </p>
      )}

      {block.bullets && block.bullets.length > 0 && (
        <ul className='list-disc pl-5 mb-4 text-sm md:text-base leading-relaxed space-y-1' style={{ color: 'var(--muted)' }}>
          {block.bullets.map((bullet, bIdx) => (
            <li key={bIdx}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function SeoSection({ t }: SeoSectionProps) {
  const { seo, ui } = t;
  const [lead, ...rest] = seo.items;

  return (
    <section
      className='py-16 md:py-20'
      style={{ background: 'var(--background)' }}
      aria-label='About service'
    >
      <div className='container mx-auto px-4 max-w-4xl'>
        {lead && <SeoBlockView block={lead} />}

        {rest.length > 0 && (
          <ReadMore
            maxHeight={400}
            fadeColor='var(--background)'
            expandLabel={ui.readMore}
            collapseLabel={ui.readLess}
          >
            {rest.map((block, idx) => (
              <SeoBlockView key={idx} block={block} />
            ))}
          </ReadMore>
        )}
      </div>
    </section>
  );
}
