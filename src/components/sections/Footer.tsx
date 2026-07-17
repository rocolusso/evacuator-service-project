import type { Locale } from '@/types';

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
          <p
            className='text-sm'
            style={{ color: 'var(--muted)' }}
          >
            {footer.rights}
          </p>

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

            <a
              href={`tel:${nav.phone.replace(/\s/g, '')}`}
              className='text-sm font-bold text-yellow-400 hover:text-yellow-300 transition-colors'
              aria-label={`Call us: ${footer.phone}`}
            >
              {footer.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
