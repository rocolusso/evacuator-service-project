import type { Locale } from '@/types';

interface AdvantagesSectionProps {
  t: Locale;
}

const stepIcons = ['📞', '💰', '🚛'];

export default function AdvantagesSection({ t }: AdvantagesSectionProps) {
  const { advantages } = t;
  const steps = [advantages.step1, advantages.step2, advantages.step3];

  return (
    <section
      id='advantages'
      className='py-16 md:py-24'
      style={{ background: 'var(--surface)' }}
    >
      <div className='container mx-auto px-4'>
        <h2
          className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4'
          style={{ color: 'var(--foreground)' }}
        >
          {advantages.h2}
        </h2>

        <div className='w-16 h-1 rounded-full mx-auto mb-12' style={{ background: 'var(--accent)' }} />

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto'>
          {steps.map((step, idx) => (
            <article
              key={idx}
              className='relative flex flex-col items-center text-center p-6 md:p-8 rounded-2xl border transition-all duration-200 hover:scale-[1.02]'
              style={{
                background: 'var(--card)',
                borderColor: 'var(--card-border)',
              }}
            >
              {/* Step number */}
              <div
                className='absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-sm'
                style={{
                  background: 'var(--accent)',
                  color: 'var(--accent-foreground)',
                }}
                aria-hidden='true'
              >
                {idx + 1}
              </div>

              <div className='text-4xl mb-4 mt-2' aria-hidden='true'>
                {stepIcons[idx]}
              </div>

              <h3
                className='text-lg md:text-xl font-bold mb-3'
                style={{ color: 'var(--foreground)' }}
              >
                {step.title}
              </h3>

              <p
                className='text-sm md:text-base leading-relaxed'
                style={{ color: 'var(--muted)' }}
              >
                {step.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
