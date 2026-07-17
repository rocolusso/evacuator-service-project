import type { Locale } from '@/types';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from '@/components/client/ThemeToggle';

interface HeaderProps {
  t: Locale;
}

export default function Header({ t }: HeaderProps) {
  const { nav } = t;

  return (
    <header
      className='sticky top-0 z-50 border-b backdrop-blur-md'
      style={{
        background: 'rgba(15,23,42,0.85)',
        borderColor: 'rgba(255,255,255,0.08)',
      }}
    >
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-14 md:h-16'>
          {/* Logo */}
          <a
            href='#'
            className='flex items-center gap-2 font-extrabold text-base md:text-lg text-white hover:text-yellow-400 transition-colors'
            aria-label='Evacuator Chisinau — Home'
          >
            <span aria-hidden='true'>🚛</span>
            <span>
              Evacuator
              <span className='text-yellow-400'> 24/7</span>
            </span>
          </a>

          {/* Right side controls */}
          <div className='flex items-center gap-3'>
            <a
              href={`tel:${nav.phone.replace(/\s/g, '')}`}
              className='hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-yellow-400 hover:text-yellow-300 transition-colors'
              aria-label={`Call: ${nav.phone}`}
            >
              <svg
                width='14'
                height='14'
                viewBox='0 0 24 24'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
              </svg>
              {nav.phone}
            </a>

            <ThemeToggle />
            <LanguageSwitcher langLabel={nav.langLabel} langHref={nav.langHref} />
          </div>
        </div>
      </div>
    </header>
  );
}
