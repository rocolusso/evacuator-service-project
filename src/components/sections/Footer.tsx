import type { Locale } from '@/types';
import PhoneLink from '@/components/client/PhoneLink';
import Link from "next/link";

interface FooterProps {
  t: Locale;
}

export default function Footer({ t }: FooterProps) {
  const { footer, nav } = t;

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
      </div>
    </footer>
  );
}
