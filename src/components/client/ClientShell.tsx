'use client';

import dynamic from 'next/dynamic';

const CookieConsent = dynamic(
  () => import('./CookieConsent'),
  { ssr: false, loading: () => null },
);

const CtaPanel = dynamic(
  () => import('./CtaPanel'),
  { ssr: false, loading: () => <div className='h-[72px]' /> },
);

export default function ClientShell() {
  return (
    <>
      <CookieConsent />
      <CtaPanel />
    </>
  );
}
