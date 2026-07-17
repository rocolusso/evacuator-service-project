import type { Locale } from '@/types';
import AccordionItem from '@/components/ui/AccordionItem';

interface FaqSectionProps {
  t: Locale;
}

export default function FaqSection({ t }: FaqSectionProps) {
  const { faq } = t;

  return (
    <section
      id='faq'
      className='py-16 md:py-24'
      style={{ background: 'var(--surface)' }}
    >
      <div className='container mx-auto px-4 max-w-3xl'>
        <h2
          className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4'
          style={{ color: 'var(--foreground)' }}
        >
          {faq.h2}
        </h2>

        <div className='w-16 h-1 rounded-full mx-auto mb-12' style={{ background: 'var(--accent)' }} />

        <div className='flex flex-col gap-3'>
          {faq.items.map((item, idx) => (
            <AccordionItem
              key={idx}
              question={item.q}
              answer={item.a}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
