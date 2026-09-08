import type { Locale, LocaleCode } from '@/types';
import PhoneLink from '@/components/client/PhoneLink';
import CookieSettingsLink from '@/components/client/CookieSettingsLink';
import Link from 'next/link';

interface FooterProps {
  t: Locale;
  locale: LocaleCode;
}

export default function Footer({ t, locale }: FooterProps) {
  const { footer, nav } = t;
  const privacyHref = locale === 'ru' ? '/ru/politika-konfidencialnosti' : '/politica-de-confidentialitate';
  const cookieHref = locale === 'ru' ? '/ru/politika-cookie' : '/politica-cookie-urilor';

  return (
    <footer
      className='py-8 mt-auto border-t'
      style={{
        background: 'var(--hero-bg)',
        borderColor: 'var(--border)',
      }}
    >
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <Link
            className='text-sm'
            style={{ color: 'var(--muted)' }}
            href={'/'}
          >
            {footer.rights}
          </Link>

          <div className='flex items-center gap-4'>
            <span
              className='text-xs font-medium px-2 py-1 rounded-full'
              style={{
                background: 'var(--surface)',
                color: 'var(--muted)',
              }}
            >
              {footer.workingHours}
            </span>

            <PhoneLink
              href={`tel:${nav.phone.replace(/\s/g, '')}`}
              className='text-sm font-bold text-yellow-400 hover:text-yellow-300 transition-colors'
              ariaLabel={`Call us: ${footer.phone}`}
            >
              {footer.phone}
            </PhoneLink>
          </div>
        </div>

        <div
          className='flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 mt-4 pt-4 border-t text-xs'
          style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
        >
          <Link href={privacyHref} className='underline hover:no-underline'>
            {footer.privacyPolicyLabel}
          </Link>
          <Link href={cookieHref} className='underline hover:no-underline'>
            {footer.cookiePolicyLabel}
          </Link>
          <CookieSettingsLink
            label={footer.cookieSettingsLabel}
            className='underline hover:no-underline'
          />
        </div>
      </div>
    </footer>
  );
}
