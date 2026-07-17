'use client';

import { usePathname } from 'next/navigation';
import { getTranslations } from '@/lib/i18n';

export default function CtaPanel() {
  const pathname = usePathname();
  const locale = pathname?.startsWith('/ru') ? 'ru' : 'ro';
  const t = getTranslations(locale);
  const phone = t.nav.phone;
  const phoneHref = `tel:${phone.replace(/\s/g, '')}`;

  function scrollToForm() {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div
      className='fixed bottom-0 left-0 right-0 z-50 flex h-[72px]'
      role='complementary'
      aria-label='Quick contact actions'
    >
      {/* Left: Wave CTA — scroll to form */}
      <button
        type='button'
        onClick={scrollToForm}
        className='cta-wave flex-1 flex items-center justify-center gap-2 font-bold text-sm md:text-base text-slate-900 transition-all active:scale-95'
        style={{ background: 'var(--accent)' }}
        aria-label='Open contact form'
      >
        <span aria-hidden='true'>🚛</span>
        <span className='hidden xs:inline sm:inline'>{t.hero.ctaCall}</span>
        <span className='xs:hidden sm:hidden text-xs'>Вызвать</span>
      </button>

      {/* Divider */}
      <div className='w-px bg-slate-900/20' aria-hidden='true' />

      {/* Right: Pulse CTA — tel link */}
      <a
        href={phoneHref}
        className='cta-pulse flex-1 flex items-center justify-center gap-2 font-bold text-sm md:text-base text-white transition-all active:scale-95'
        style={{ background: 'var(--accent-green)' }}
        aria-label={`Call ${phone}`}
      >
        <svg
          width='18'
          height='18'
          viewBox='0 0 24 24'
          fill='currentColor'
          aria-hidden='true'
          className='shrink-0'
        >
          <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
        </svg>
        <span>{phone}</span>
      </a>
    </div>
  );
}
