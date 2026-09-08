import type { Metadata } from 'next';
import { getTranslations } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import PolicyContent from '@/components/legal/PolicyContent';

export const revalidate = 86400;

const locale = 'ro' as const;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export async function generateMetadata(): Promise<Metadata> {
  const t = getTranslations(locale);

  return {
    title: t.cookiePolicy.title,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${baseUrl}/politica-cookie-urilor`,
      languages: {
        'ro': `${baseUrl}/politica-cookie-urilor`,
        'ru': `${baseUrl}/ru/politika-cookie`,
        'x-default': `${baseUrl}/politica-cookie-urilor`,
      },
    },
  };
}

export default function CookiePolicyPage() {
  const t = getTranslations(locale);

  return (
    <>
      <Header t={t} />
      <PolicyContent
        title={t.cookiePolicy.title}
        updated={t.cookiePolicy.updated}
        intro={t.cookiePolicy.intro}
        sections={t.cookiePolicy.sections}
      />
      <Footer t={t} locale={locale} />
    </>
  );
}
