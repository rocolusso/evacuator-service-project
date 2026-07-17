'use client';

import { usePathname } from 'next/navigation';
import { useCookieStore } from '@/store/cookieStore';
import { getTranslations } from '@/lib/i18n';

export default function CookieConsent() {
  const { accepted, accept } = useCookieStore();
  const pathname = usePathname();
  const locale = pathname?.startsWith('/ru') ? 'ru' : 'ro';

  if (accepted) return null;

  const { cookie } = getTranslations(locale);

  return (
    <div
      className='fixed bottom-[72px] left-0 right-0 z-40 px-4 pb-2'
      role='dialog'
      aria-live='polite'
      aria-label='Cookie consent'
    >
      <div
        className='max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-3 px-5 py-4 rounded-xl shadow-2xl border'
        style={{
          background: 'var(--card)',
          borderColor: 'var(--border)',
        }}
      >
        <p
          className='text-sm text-center sm:text-left leading-relaxed flex-1'
          style={{ color: 'var(--muted)' }}
        >
          {'🍪 '}
          {cookie.message}
        </p>
        <button
          type='button'
          onClick={accept}
          className='shrink-0 px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95'
          style={{
            background: 'var(--accent)',
            color: 'var(--accent-foreground)',
          }}
        >
          {cookie.accept}
        </button>
      </div>
    </div>
  );
}
