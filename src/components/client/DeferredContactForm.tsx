'use client';

import dynamic from 'next/dynamic';
import type { Locale } from '@/types';

const ContactForm = dynamic(
  () => import('./ContactForm'),
  {
    ssr: false,
    loading: () => (
      <div
        className='py-16 md:py-24 flex items-center justify-center'
        style={{ background: 'var(--surface)', minHeight: '400px' }}
        aria-busy='true'
      >
        <div
          className='w-10 h-10 rounded-full border-4 animate-spin'
          style={{
            borderColor: 'var(--border)',
            borderTopColor: 'var(--accent)',
          }}
          role='status'
          aria-label='Loading form...'
        />
      </div>
    ),
  },
);

interface DeferredContactFormProps {
  t: Locale;
}

export default function DeferredContactForm({ t }: DeferredContactFormProps) {
  return <ContactForm t={t} />;
}
