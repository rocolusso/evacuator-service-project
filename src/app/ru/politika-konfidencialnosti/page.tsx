import type { Metadata } from 'next';
import { getTranslations } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import PolicyContent from '@/components/legal/PolicyContent';

export const revalidate = 86400;

const locale = 'ru' as const;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export async function generateMetadata(): Promise<Metadata> {
  const t = getTranslations(locale);

  return {
    title: t.privacyPolicy.title,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${baseUrl}/ru/politika-konfidencialnosti`,
      languages: {
        'ro': `${baseUrl}/politica-de-confidentialitate`,
        'ru': `${baseUrl}/ru/politika-konfidencialnosti`,
        'x-default': `${baseUrl}/politica-de-confidentialitate`,
      },
    },
  };
}

export default function PrivacyPolicyPage() {
  const t = getTranslations(locale);

  return (
    <>
      <Header t={t} />
      <PolicyContent
        title={t.privacyPolicy.title}
        updated={t.privacyPolicy.updated}
        intro={t.privacyPolicy.intro}
        sections={t.privacyPolicy.sections}
      />
      <Footer t={t} locale={locale} />
    </>
  );
}
