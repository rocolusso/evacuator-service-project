import type { Locale } from '@/types';

interface PricingSectionProps {
  t: Locale;
}

export default function PricingSection({ t }: PricingSectionProps) {
  const { pricing, services } = t;

  return (
    <section
      id='pricing'
      className='py-16 md:py-24'
      style={{ background: 'var(--background)' }}
    >
      <div className='container mx-auto px-4'>

        {/* Pricing */}
        <h2
          className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4'
          style={{ color: 'var(--foreground)' }}
        >
          {pricing.h2}
        </h2>

        <div className='w-16 h-1 rounded-full mx-auto mb-6' style={{ background: 'var(--accent)' }} />

        <p
          className='text-sm md:text-base text-center max-w-2xl mx-auto mb-12 leading-relaxed'
          style={{ color: 'var(--muted)' }}
        >
          {pricing.desc}
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-20'>
          {pricing.items.map((item, idx) => (
            <article
              key={idx}
              className='flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-200 hover:scale-[1.03] hover:shadow-lg'
              style={{
                background: 'var(--card)',
                borderColor: 'var(--card-border)',
              }}
            >
              <div className='text-5xl mb-4' aria-hidden='true'>{item.icon}</div>

              <h3
                className='text-base font-bold mb-4 leading-snug'
                style={{ color: 'var(--foreground)' }}
              >
                {item.title}
              </h3>

              <div className='mt-auto'>
                <p
                  className='text-2xl font-extrabold'
                  style={{ color: 'var(--accent-foreground)' }}
                >
                  <span
                    className='inline-block px-3 py-1 rounded-lg text-slate-900 text-xl font-extrabold'
                    style={{ background: 'var(--accent)' }}
                  >
                    {item.price}
                  </span>
                </p>
                <p
                  className='text-sm mt-2 font-medium'
                  style={{ color: 'var(--muted)' }}
                >
                  {item.per}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Additional Services */}
        <h2
          className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4'
          style={{ color: 'var(--foreground)' }}
        >
          {services.h2}
        </h2>

        <div className='w-16 h-1 rounded-full mx-auto mb-12' style={{ background: 'var(--accent)' }} />

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto'>
          {services.items.map((service, idx) => (
            <article
              key={idx}
              className='flex flex-col items-start p-6 rounded-2xl border transition-all duration-200'
              style={{
                background: 'var(--surface)',
                borderColor: 'var(--border)',
              }}
            >
              <span className='text-3xl mb-3' aria-hidden='true'>{service.icon}</span>
              <h3
                className='text-base md:text-lg font-bold mb-2'
                style={{ color: 'var(--foreground)' }}
              >
                {service.title}
              </h3>
              <p
                className='text-sm leading-relaxed'
                style={{ color: 'var(--muted)' }}
              >
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
