import type { MetadataRoute } from 'next';
import { servicesRo, servicesRu } from '@/content/services';
import { blogRo, blogRu } from '@/content/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ru`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...servicesRo.map((service) => ({
      url: `${baseUrl}/servicii/${service.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...servicesRu.map((service) => ({
      url: `${baseUrl}/ru/uslugi/${service.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ru/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    ...blogRo.map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
    ...blogRu.map((article) => ({
      url: `${baseUrl}/ru/blog/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];
}
