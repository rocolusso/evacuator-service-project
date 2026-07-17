import type { Locale } from '@/types';

interface HeroSectionProps {
  t: Locale;
}

export default function HeroSection({ t }: HeroSectionProps) {
  const { hero } = t;

  return (
    <section
      className='relative min-h-[100svh] flex items-center justify-center overflow-hidden'
      style={{ background: 'var(--hero-bg)' }}
      aria-label={hero.h1}
    >
      {/* Background gradient overlay */}
      <div
        className='absolute inset-0 z-0'
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(250,204,21,0.08) 0%, transparent 60%),
            linear-gradient(180deg, rgba(15,23,42,0.0) 0%, rgba(15,23,42,0.6) 100%)
          `,
        }}
        aria-hidden='true'
      />

      {/* Decorative grid lines */}
      <div
        className='absolute inset-0 z-0 opacity-10'
        style={{
          backgroundImage: `
            linear-gradient(rgba(250,204,21,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(250,204,21,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        aria-hidden='true'
      />

      <div className='relative z-10 container mx-auto px-4 py-20 md:py-28 lg:py-32 text-center'>
        {/* Badge */}
        <div className='inline-flex items-center gap-2 mb-6'>
          <span
            className='w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse'
            aria-hidden='true'
          />
          <span
            className='text-xs md:text-sm font-semibold tracking-widest uppercase text-green-400 border border-green-400/30 rounded-full px-3 py-1'
          >
            {hero.badge}
          </span>
        </div>

        {/* H1 — critical for SEO, rendered server-side */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight'>
          {hero.h1.split('24/7')[0]}
          <span className='text-yellow-400'>24/7</span>
        </h1>

        {/* Subtitle */}
        <p className='text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed'>
          {hero.subtitle}
        </p>

        {/* CTA buttons — static links for SSR, JS enhances scroll behavior */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href='#contact-form'
            className='inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-base md:text-lg text-slate-900 transition-all duration-200 hover:scale-105 active:scale-95'
            style={{ background: 'var(--accent)' }}
          >
            <span aria-hidden='true'>🚛</span>
            {hero.ctaCall}
          </a>
          <a
            href='#pricing'
            className='inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-base md:text-lg text-white border-2 border-white/20 hover:border-yellow-400/60 transition-all duration-200 hover:scale-105 active:scale-95'
          >
            <span aria-hidden='true'>💰</span>
            {hero.ctaPrice}
          </a>
        </div>

        {/* Trust indicators */}
        <div className='mt-12 flex flex-wrap justify-center gap-6 text-slate-400 text-sm'>
          <span className='flex items-center gap-2'>
            <span aria-hidden='true'>⚡</span>
            30–45 min
          </span>
          <span className='flex items-center gap-2'>
            <span aria-hidden='true'>🛡️</span>
            Fără costuri ascunse
          </span>
          <span className='flex items-center gap-2'>
            <span aria-hidden='true'>📍</span>
            Chișinău & Moldova
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className='absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-slate-500 animate-bounce'
        aria-hidden='true'
      >
        <span className='text-xs tracking-widest uppercase'>Scroll</span>
        <svg
          width='16'
          height='24'
          viewBox='0 0 16 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8 0v20M1 13l7 7 7-7'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </section>
  );
}
