import type { Locale } from '@/types';

interface SeoSectionProps {
  t: Locale;
}

export default function SeoSection({ t }: SeoSectionProps) {
  const { seo } = t;

  return (
    <section
      className='py-16 md:py-20'
      style={{ background: 'var(--background)' }}
      aria-label='About service'
    >
      <div className='container mx-auto px-4 max-w-4xl'>
        <h2
          className='text-xl sm:text-2xl md:text-3xl font-bold mb-6'
          style={{ color: 'var(--foreground)' }}
        >
          {seo.h2}
        </h2>

        <p
          className='text-sm md:text-base leading-relaxed mb-8'
          style={{ color: 'var(--muted)' }}
        >
          {seo.text1}
        </p>

        <h3
          className='text-lg sm:text-xl font-bold mb-4'
          style={{ color: 'var(--foreground)' }}
        >
          {seo.h3_1}
        </h3>

        <p
          className='text-sm md:text-base leading-relaxed mb-8'
          style={{ color: 'var(--muted)' }}
        >
          {seo.text2}
        </p>

        <h3
          className='text-lg sm:text-xl font-bold mb-4'
          style={{ color: 'var(--foreground)' }}
        >
          {seo.h3_2}
        </h3>

        <p
          className='text-sm md:text-base leading-relaxed'
          style={{ color: 'var(--muted)' }}
        >
          {seo.text3}
        </p>
      </div>
    </section>
  );
}
