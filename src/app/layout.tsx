import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import dynamic from 'next/dynamic';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['600', '700', '800'],
});

const CookieConsent = dynamic(
  () => import('@/components/client/CookieConsent'),
  { ssr: false, loading: () => null },
);

const CtaPanel = dynamic(
  () => import('@/components/client/CtaPanel'),
  { ssr: false, loading: () => <div className='h-16' /> },
);

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'),
  robots: { index: true, follow: true },
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? '';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang='ro'
      className={`${inter.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      <body className='min-h-screen flex flex-col antialiased'>
        {children}
        <CookieConsent />
        <CtaPanel />
      </body>
    </html>
  );
}
