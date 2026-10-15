import type { Metadata } from 'next';
import { buildOpenGraph, buildTwitter } from '@/lib/seo';
import { getTranslations } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import JsonLd from '@/components/layout/JsonLd';
import HeroSection from '@/components/sections/HeroSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import PricingSection from '@/components/sections/PricingSection';
import FaqSection from '@/components/sections/FaqSection';
import SeoSection from '@/components/sections/SeoSection';
import Footer from '@/components/sections/Footer';
import DeferredContactForm from '@/components/client/DeferredContactForm';

export const revalidate = 86400;

const locale = 'ru' as const;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export async function generateMetadata(): Promise<Metadata> {
  const t = getTranslations(locale);

  return {
    title: t.meta.title,
    description: t.meta.description,
    openGraph: buildOpenGraph({ locale, title: t.meta.ogTitle, description: t.meta.ogDescription, url: `${baseUrl}/ru` }),
    twitter: buildTwitter({ locale, title: t.meta.ogTitle, description: t.meta.ogDescription }),
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
      <JsonLd locale={locale} t={t} />
      <Header t={t} locale={locale} />
      <main>
        <HeroSection t={t} />
        <AdvantagesSection t={t} />
        <PricingSection t={t} />
        <FaqSection t={t} />
        <DeferredContactForm t={t} />
        <SeoSection t={t} />
      </main>
      <Footer t={t} locale={locale} />
    </>
  );
}
