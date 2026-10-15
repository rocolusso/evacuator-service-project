import type { Locale, LocaleCode } from '@/types';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import PhoneLink from '@/components/client/PhoneLink';
import BurgerMenu from '@/components/client/BurgerMenu';

interface HeaderProps {
  t: Locale;
  locale: LocaleCode;
  /**
   * Correct cross-locale URL for the language switcher on this specific
   * page. `t.nav.langHref` only ever points at the other locale's
   * homepage ('/' or '/ru'), which is right on the homepage itself but
   * wrong everywhere else (service pages, blog articles, legal pages).
   * Pages that aren't the homepage must pass their real RO<->RU
   * counterpart URL here.
   */
  langHrefOverride?: string;
}

export default function Header({ t, locale, langHrefOverride }: HeaderProps) {
  const { nav } = t;
  const homeHref = locale === 'ru' ? '/ru' : '/';
  const pricingHref = locale === 'ru' ? '/ru#pricing' : '/#pricing';
  const pricingLabel = locale === 'ru' ? 'Услуги' : 'Servicii';
  const blogHref = locale === 'ru' ? '/ru/blog' : '/blog';
  const blogLabel = locale === 'ru' ? 'Блог' : 'Blog';
  const homeLabel = locale === 'ru' ? 'Главная' : 'Acasă';
  const langHref = langHrefOverride ?? nav.langHref;

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
            href={homeHref}
            className='flex items-center gap-2 font-extrabold text-base md:text-lg text-white hover:text-yellow-400 transition-colors'
            aria-label='Evacuator Chisinau — Home'
          >
            <span>VEZU.MD</span>
            <span aria-hidden='true'>🚛</span>
            <span>
              Evacuator
              <span className='text-yellow-400'> 24/7</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className='hidden md:flex items-center gap-5 text-sm font-semibold text-slate-300'>
            <Link href={pricingHref} className='hover:text-yellow-400 transition-colors'>
              {pricingLabel}
            </Link>
            <Link href={blogHref} className='hover:text-yellow-400 transition-colors'>
              {blogLabel}
            </Link>
          </nav>

          {/* Right side controls */}
          <div className='flex items-center gap-3'>
            <PhoneLink
              href={`tel:${nav.phone.replace(/\s/g, '')}`}
              className='hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-yellow-400 hover:text-yellow-300 transition-colors'
              ariaLabel={`Call: ${nav.phone}`}
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
            </PhoneLink>

            <LanguageSwitcher langLabel={nav.langLabel} langHref={langHref} />
            <BurgerMenu
              locale={locale}
              homeLabel={homeLabel}
              pricingLabel={pricingLabel}
              blogLabel={blogLabel}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
