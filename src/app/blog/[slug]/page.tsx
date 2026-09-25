import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getTranslations } from '@/lib/i18n';
import { blogRo, blogRu } from '@/content/blog';
import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import DeferredContactForm from '@/components/client/DeferredContactForm';
import RichParagraph from '@/components/ui/RichParagraph';
import { ArticleJsonLd } from '@/components/layout/EntityJsonLd';

export const revalidate = 86400;

const locale = 'ro' as const;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export function generateStaticParams() {
  return blogRo.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = blogRo.find((a) => a.slug === slug);
  const ruMatch = blogRu[blogRo.findIndex((a) => a.slug === slug)];
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${baseUrl}/blog/${article.slug}`,
      siteName: 'Evacuator Chisinau',
      locale: 'ro_MD',
      type: 'article',
      publishedTime: article.publishedAt,
    },
    alternates: {
      canonical: `${baseUrl}/blog/${article.slug}`,
      languages: {
        'ro': `${baseUrl}/blog/${article.slug}`,
        'ru': `${baseUrl}/ru/blog/${ruMatch?.slug ?? ''}`,
        'x-default': `${baseUrl}/blog/${article.slug}`,
      },
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = blogRo.find((a) => a.slug === slug);
  if (!article) notFound();

  const t = getTranslations(locale);
  const pageUrl = `${baseUrl}/blog/${article.slug}`;
  const ruMatch = blogRu[blogRo.findIndex((a) => a.slug === slug)];

  return (
    <>
      <ArticleJsonLd
        headline={article.title}
        description={article.metaDescription}
        url={pageUrl}
        baseUrl={baseUrl}
        datePublished={article.publishedAt}
        inLanguage='ro'
      />
      <Header t={t} locale={locale} langHrefOverride={`/ru/blog/${ruMatch?.slug ?? ''}`} />
      <main className='container mx-auto px-4 py-10 md:py-16 max-w-3xl'>
        <nav className='text-xs mb-6' style={{ color: 'var(--muted)' }} aria-label='Breadcrumb'>
          <Link href='/' className='underline hover:no-underline'>Acasă</Link>
          {' / '}
          <Link href='/blog' className='underline hover:no-underline'>Blog</Link>
          {' / '}
          <span>{article.title}</span>
        </nav>

        <div className='text-5xl mb-4' aria-hidden='true'>{article.icon}</div>

        <h1 className='text-2xl md:text-4xl font-extrabold mb-3' style={{ color: 'var(--foreground)' }}>
          {article.title}
        </h1>

        <time
          dateTime={article.publishedAt}
          className='block text-sm mb-8'
          style={{ color: 'var(--muted)' }}
        >
          {new Date(article.publishedAt).toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>

        <div className='space-y-4 leading-relaxed' style={{ color: 'var(--muted)' }}>
          {article.paragraphs.map((p, i) => (
            <RichParagraph key={i} text={p} />
          ))}
        </div>

        <div className='mt-12 pt-6 border-t' style={{ borderColor: 'var(--border)' }}>
          <Link href='/blog' className='text-sm font-semibold underline hover:no-underline' style={{ color: 'var(--accent-foreground)' }}>
            ← Înapoi la toate articolele
          </Link>
        </div>
      </main>
      <DeferredContactForm t={t} />
      <Footer t={t} locale={locale} />
    </>
  );
}
