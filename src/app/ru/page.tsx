import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { getTranslations } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import JsonLd from '@/components/layout/JsonLd';
import HeroSection from '@/components/sections/HeroSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import PricingSection from '@/components/sections/PricingSection';
import FaqSection from '@/components/sections/FaqSection';
import SeoSection from '@/components/sections/SeoSection';
import Footer from '@/components/sections/Footer';

export const revalidate = 86400;

const locale = 'ru' as const;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

const ContactForm = dynamic(
  () => import('@/components/client/ContactForm'),
  {
    ssr: false,
    loading: () => (
      <div
        className='py-16 md:py-24 flex items-center justify-center'
        style={{ background: 'var(--surface)', minHeight: '400px' }}
        aria-busy='true'
      >
        <div
          className='w-10 h-10 rounded-full border-4 border-t-transparent animate-spin'
          style={{ borderColor: 'var(--border)', borderTopColor: 'var(--accent)' }}
          role='status'
          aria-label='Загрузка формы...'
        />
      </div>
    ),
  },
);

export async function generateMetadata(): Promise<Metadata> {
  const t = getTranslations(locale);

  return {
    title: t.meta.title,
    description: t.meta.description,
    openGraph: {
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      url: `${baseUrl}/ru`,
      siteName: 'Эвакуатор Кишинев',
      locale: 'ru_MD',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
    },
    alternates: {
      canonical: `${baseUrl}/ru`,
      languages: {
        'ro': `${baseUrl}/`,
        'ru': `${baseUrl}/ru`,
        'x-default': `${baseUrl}/`,
      },
    },
  };
}

export default function RuPage() {
  const t = getTranslations(locale);

  return (
    <>
      <JsonLd
        locale={locale}
        t={t}
        baseUrl={`${baseUrl}/ru`}
      />
      <Header t={t} />
      <main>
        <HeroSection t={t} />
        <AdvantagesSection t={t} />
        <PricingSection t={t} />
        <FaqSection t={t} />
        <Suspense>
          <ContactForm t={t} />
        </Suspense>
        <SeoSection t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
