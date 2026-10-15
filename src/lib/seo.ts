import type { Metadata } from 'next';
import type { LocaleCode } from '@/types';

/** Canonical site origin (no trailing slash). */
export const BASE_URL = (process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000').replace(/\/$/, '');

/** Default social preview image, served from /public (1200x630). */
export const OG_IMAGE = {
  url: `${BASE_URL}/og-image.jpg`,
  width: 1200,
  height: 630,
  type: 'image/jpeg',
} as const;

const OG_ALT: Record<LocaleCode, string> = {
  ro: 'Evacuator Chișinău 24/7 — Vezu.md',
  ru: 'Эвакуатор Кишинев 24/7 — Vezu.md',
};

export const SITE_NAME: Record<LocaleCode, string> = {
  ro: 'Evacuator Chisinau',
  ru: 'Эвакуатор Кишинев',
};

const OG_LOCALE: Record<LocaleCode, string> = {
  ro: 'ro_MD',
  ru: 'ru_MD',
};

interface SocialInput {
  locale: LocaleCode;
  title: string;
  description: string;
  url: string;
  type?: 'website' | 'article';
  publishedTime?: string;
}

type OpenGraph = NonNullable<Metadata['openGraph']>;
type Twitter = NonNullable<Metadata['twitter']>;

/**
 * Complete Open Graph block (type, locale, site_name, url, title,
 * description, image). A page-level `openGraph` replaces the layout's
 * wholesale in Next.js metadata merging, so every page must pass the
 * full set, including the image.
 */
export function buildOpenGraph({ locale, title, description, url, type = 'website', publishedTime }: SocialInput): OpenGraph {
  const base = {
    title,
    description,
    url,
    siteName: SITE_NAME[locale],
    locale: OG_LOCALE[locale],
    images: [{ ...OG_IMAGE, alt: OG_ALT[locale] }],
  };

  if (type === 'article') {
    return { ...base, type: 'article', publishedTime, modifiedTime: publishedTime };
  }
  return { ...base, type: 'website' };
}

export function buildTwitter({ locale, title, description }: Pick<SocialInput, 'locale' | 'title' | 'description'>): Twitter {
  return {
    card: 'summary_large_image',
    title,
    description,
    images: [{ url: OG_IMAGE.url, alt: OG_ALT[locale], width: OG_IMAGE.width, height: OG_IMAGE.height }],
  };
}

export { OG_ALT };
