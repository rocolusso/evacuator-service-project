import type { Locale, LocaleCode } from '@/types';
import Link from 'next/link';
import PhoneLink from '@/components/client/PhoneLink';
import CookieSettingsLink from '@/components/client/CookieSettingsLink';
import { servicesRo, servicesRu } from '@/content/services';
import { blogRo, blogRu } from '@/content/blog';

interface FooterProps {
  t: Locale;
  locale: LocaleCode;
}

const LABELS = {
  ro: {
    brand: 'Evacuator Chisinau — Acasă',
    sections: 'Secțiuni',
    home: 'Acasă',
    services: 'Servicii',
    blog: 'Blog',
    contacts: 'Contacte',
    info: 'Informații',
    articles: 'Articole',
    sitemap: 'Harta site-ului',
  },
  ru: {
    brand: 'Эвакуатор Кишинев — Главная',
    sections: 'Разделы',
    home: 'Главная',
    services: 'Услуги',
    blog: 'Блог',
    contacts: 'Контакты',
    info: 'Информация',
    articles: 'Статьи',
    sitemap: 'Карта сайта',
  },
} as const;

const linkClass = 'block text-[13px] leading-[22px] text-slate-400 transition-colors hover:text-white';

function ColumnTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p
      id={id}
      className='mb-5 pb-3 text-[13px] font-semibold uppercase leading-5 tracking-[0.5px] text-slate-200 border-b border-white/10 relative after:absolute after:left-0 after:-bottom-px after:h-[2px] after:w-8 after:bg-yellow-400'
    >
      {children}
    </p>
  );
}

export default function Footer({ t, locale }: FooterProps) {
  const { footer, nav } = t;
  const labels = LABELS[locale];
  const isRu = locale === 'ru';

  const homeHref = isRu ? '/ru' : '/';
  const pricingHref = isRu ? '/ru#pricing' : '/#pricing';
  const blogHref = isRu ? '/ru/blog' : '/blog';
  const servicePath = isRu ? '/ru/uslugi' : '/servicii';
  const articlePath = isRu ? '/ru/blog' : '/blog';
  const privacyHref = isRu ? '/ru/politika-konfidencialnosti' : '/politica-de-confidentialitate';
  const cookieHref = isRu ? '/ru/politika-cookie' : '/politica-cookie-urilor';

  const services = isRu ? servicesRu : servicesRo;
  const articles = isRu ? blogRu : blogRo;

  // "© 2026 Vezu.md" at the start of the copyright text links to the homepage.
  const copyrightMatch = footer.rights.match(/^©\s*\d{4}\s+Vezu\.md/);
  const copyrightBrand = copyrightMatch ? copyrightMatch[0] : null;
  const copyrightRest = copyrightBrand ? footer.rights.slice(copyrightBrand.length) : footer.rights;

  return (
    <footer
      className='mt-auto text-slate-400'
      style={{ background: '#0f172a' }}
      aria-label={labels.sitemap}
    >
      {/* Brand band */}
      <div className='py-6 md:py-8' style={{ background: '#020617' }}>
        <div className='container mx-auto px-4 flex justify-center'>
          <Link
            href={homeHref}
            className='flex items-center gap-2 font-extrabold text-lg md:text-xl text-white transition-opacity hover:opacity-80'
            aria-label={labels.brand}
          >
            <span>VEZU.MD</span>
            <span aria-hidden='true'>🚛</span>
            <span>
              Evacuator
              <span className='text-yellow-400'> 24/7</span>
            </span>
          </Link>
        </div>
      </div>

      {/* Sitemap */}
      <div className='container mx-auto px-4 pt-10 pb-8 md:pt-14'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
          <nav aria-labelledby='footer-sections' className='min-w-0'>
            <ColumnTitle id='footer-sections'>{labels.sections}</ColumnTitle>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href={homeHref} className={linkClass}>
                  {labels.home}
                </Link>
              </li>
              <li>
                <Link href={pricingHref} className={linkClass}>
                  {labels.services}
                </Link>
              </li>
              <li>
                <Link href={blogHref} className={linkClass}>
                  {labels.blog}
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby='footer-services' className='min-w-0'>
            <ColumnTitle id='footer-services'>{labels.services}</ColumnTitle>
            <ul className='flex flex-col gap-2'>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`${servicePath}/${service.slug}`} className={linkClass}>
                    {service.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className='min-w-0'>
            <ColumnTitle id='footer-contacts'>{labels.contacts}</ColumnTitle>
            <ul className='flex flex-col gap-3'>
              <li>
                <PhoneLink
                  href={`tel:${nav.phone.replace(/\s/g, '')}`}
                  className='inline-flex items-center gap-2 text-base font-bold text-yellow-400 transition-colors hover:text-yellow-300'
                  ariaLabel={`Call us: ${footer.phone}`}
                >
                  <svg width='14' height='14' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
                    <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
                  </svg>
                  {footer.phone}
                </PhoneLink>
              </li>
              <li className='text-[13px] leading-[22px]'>{footer.workingHours}</li>
              <li className='text-[13px] leading-[22px]'>{t.hero.trustArea}</li>
            </ul>
          </div>

          <nav aria-labelledby='footer-info' className='min-w-0'>
            <ColumnTitle id='footer-info'>{labels.info}</ColumnTitle>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href={privacyHref} className={linkClass}>
                  {footer.privacyPolicyLabel}
                </Link>
              </li>
              <li>
                <Link href={cookieHref} className={linkClass}>
                  {footer.cookiePolicyLabel}
                </Link>
              </li>
              <li>
                <CookieSettingsLink
                  label={footer.cookieSettingsLabel}
                  className={`${linkClass} text-left`}
                />
              </li>
            </ul>
          </nav>
        </div>

        {/* All articles */}
        <nav aria-labelledby='footer-articles' className='mt-10 pt-10 border-t border-white/10'>
          <ColumnTitle id='footer-articles'>
            <Link href={blogHref} className='transition-colors hover:text-yellow-400'>
              {labels.articles}
            </Link>
          </ColumnTitle>
          <ul className='columns-1 gap-x-8 sm:columns-2 lg:columns-3'>
            {articles.map((article) => (
              <li key={article.slug} className='mb-2 break-inside-avoid'>
                <Link href={`${articlePath}/${article.slug}`} className={linkClass}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className='py-6' style={{ background: '#020617' }}>
        <div className='container mx-auto px-4'>
          <p className='text-xs leading-5 text-center text-slate-500 whitespace-pre-line'>
            {copyrightBrand && (
              <Link href={homeHref} className='transition-colors hover:text-white'>
                {copyrightBrand}
              </Link>
            )}
            {copyrightRest}
          </p>
        </div>
      </div>
    </footer>
  );
}
