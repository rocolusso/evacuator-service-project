import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from '@/lib/i18n';
import { servicesRo, servicesRu } from '@/content/services';
import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import DeferredContactForm from '@/components/client/DeferredContactForm';
import RichParagraph from '@/components/ui/RichParagraph';
import AccordionItem from '@/components/ui/AccordionItem';
import { ServiceJsonLd } from '@/components/layout/EntityJsonLd';
import PhoneLink from '@/components/client/PhoneLink';
import Link from 'next/link';

export const revalidate = 86400;

const locale = 'ro' as const;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export function generateStaticParams() {
  return servicesRo.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesRo.find((s) => s.slug === slug);
  const ruMatch = servicesRu[servicesRo.findIndex((s) => s.slug === slug)];
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${baseUrl}/servicii/${service.slug}`,
      siteName: 'Evacuator Chisinau',
      locale: 'ro_MD',
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/servicii/${service.slug}`,
      languages: {
        'ro': `${baseUrl}/servicii/${service.slug}`,
        'ru': `${baseUrl}/ru/uslugi/${ruMatch?.slug ?? ''}`,
        'x-default': `${baseUrl}/servicii/${service.slug}`,
      },
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesRo.find((s) => s.slug === slug);
  if (!service) notFound();

  const t = getTranslations(locale);
  const pageUrl = `${baseUrl}/servicii/${service.slug}`;

  return (
    <>
      <ServiceJsonLd
        name={service.h1}
        description={service.metaDescription}
        url={pageUrl}
        baseUrl={baseUrl}
        faqItems={service.faq}
      />
      <Header t={t} />
      <main className='container mx-auto px-4 py-10 md:py-16 max-w-3xl'>
        <nav className='text-xs mb-6' style={{ color: 'var(--muted)' }} aria-label='Breadcrumb'>
          <Link href='/' className='underline hover:no-underline'>Acasă</Link>
          {' / '}
          <span>{service.h1}</span>
        </nav>

        <div className='text-5xl mb-4' aria-hidden='true'>{service.icon}</div>

        <h1 className='text-2xl md:text-4xl font-extrabold mb-4' style={{ color: 'var(--foreground)' }}>
          {service.h1}
        </h1>

        <div
          className='inline-flex items-center gap-3 rounded-xl px-4 py-3 mb-8'
          style={{ background: 'var(--card)', border: '1px solid var(--card-border)' }}
        >
          <span
            className='px-3 py-1 rounded-lg text-slate-900 text-lg font-extrabold'
            style={{ background: 'var(--accent)' }}
          >
            {service.priceFrom}
          </span>
          <span className='text-sm font-medium' style={{ color: 'var(--muted)' }}>
            {service.pricePer}
          </span>
        </div>

        <div className='space-y-4 mb-10 leading-relaxed' style={{ color: 'var(--muted)' }}>
          {service.paragraphs.map((p, i) => (
            <RichParagraph key={i} text={p} />
          ))}
        </div>

        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10'>
          {service.bullets.map((b, i) => (
            <li
              key={i}
              className='flex items-start gap-2 text-sm rounded-xl p-4'
              style={{ background: 'var(--surface)', color: 'var(--foreground)' }}
            >
              <span aria-hidden='true'>✅</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className='mb-10'>
          <PhoneLink
            href={`tel:${t.nav.phone.replace(/\s/g, '')}`}
            className='inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-base text-slate-900 transition-all duration-200 hover:scale-105'
            ariaLabel={`Call: ${t.nav.phone}`}
          >
            <span aria-hidden='true'>🚛</span>
            {t.hero.ctaCall}: {t.nav.phone}
          </PhoneLink>
        </div>

        <h2 className='text-xl md:text-2xl font-extrabold mb-4' style={{ color: 'var(--foreground)' }}>
          {t.faq.h2}
        </h2>
        <div className='space-y-3'>
          {service.faq.map((item, i) => (
            <AccordionItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </main>
      <DeferredContactForm t={t} />
      <Footer t={t} locale={locale} />
    </>
  );
}
