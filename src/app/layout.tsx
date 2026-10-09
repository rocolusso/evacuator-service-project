import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Montserrat } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import ClientShell from '@/components/client/ClientShell';
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
      <head>
        {/*
          Google Consent Mode v2 bootstrap. Must run before the GTM
          container (below) or any gtag call, so consent defaults to
          "denied" until the visitor makes an explicit choice in the
          cookie banner (see src/lib/consent.ts / CookieConsent.tsx).
        */}
        <Script id='consent-mode-default' strategy='beforeInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
        <Script src="https://analytics.ahrefs.com/analytics.js" data-key="MibK2ek2ikjsInY36M9g/A" strategy="afterInteractive"/>
      </head>
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      <body className='min-h-screen flex flex-col antialiased'>
        {children}
        <ClientShell />
        <Analytics />
      </body>
    </html>
  );
}
