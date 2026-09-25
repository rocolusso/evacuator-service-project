import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from '@/lib/i18n';
import { blogRo } from '@/content/blog';
import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';

export const revalidate = 86400;

const locale = 'ro' as const;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blog despre evacuator auto și asistență rutieră | Vezu.md',
    description: 'Sfaturi practice despre evacuator auto, prețuri, pornirea bateriei și asistență rutieră în Chișinău și Moldova.',
    alternates: {
      canonical: `${baseUrl}/blog`,
      languages: {
        'ro': `${baseUrl}/blog`,
        'ru': `${baseUrl}/ru/blog`,
        'x-default': `${baseUrl}/blog`,
      },
    },
  };
}

export default function BlogIndexPage() {
  const t = getTranslations(locale);

  return (
    <>
      <Header t={t} locale={locale} langHrefOverride='/ru/blog' />
      <main className='container mx-auto px-4 py-10 md:py-16 max-w-4xl'>
        <h1 className='text-2xl md:text-4xl font-extrabold mb-4' style={{ color: 'var(--foreground)' }}>
          Blog: sfaturi despre evacuator și asistență rutieră
        </h1>
        <p className='mb-10 leading-relaxed' style={{ color: 'var(--muted)' }}>
          Articole practice despre prețuri, tipuri de evacuator, siguranță rutieră și întreținerea mașinii în Chișinău și Moldova.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'>
          {blogRo.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className='flex flex-col p-6 rounded-2xl border transition-all duration-200 hover:scale-[1.02] hover:shadow-lg'
              style={{ background: 'var(--card)', borderColor: 'var(--card-border)' }}
            >
              <span className='text-3xl mb-3' aria-hidden='true'>{article.icon}</span>
              <h2 className='text-base font-bold mb-2 leading-snug' style={{ color: 'var(--foreground)' }}>
                {article.title}
              </h2>
              <p className='text-sm leading-relaxed' style={{ color: 'var(--muted)' }}>
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </main>
      <Footer t={t} locale={locale} />
    </>
  );
}
