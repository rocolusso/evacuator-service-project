'use client';

import dynamic from 'next/dynamic';
import TurnstileGate from './TurnstileGate';

// const CookieConsent = dynamic(
//   () => import('./CookieConsent'),
//   { ssr: false, loading: () => null },
// );

const CtaPanel = dynamic(
  () => import('./CtaPanel'),
  { ssr: false, loading: () => <div className='h-[72px]' /> },
);

export default function ClientShell() {
  return (
    <>
      <TurnstileGate />
      {/*<CookieConsent />*/}
      <CtaPanel />
    </>
  );
}
