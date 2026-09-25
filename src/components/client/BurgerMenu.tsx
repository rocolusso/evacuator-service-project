'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { LocaleCode } from '@/types';
import { servicesRo, servicesRu } from '@/content/services';

interface BurgerMenuProps {
  locale: LocaleCode;
  homeLabel: string;
  pricingLabel: string;
  blogLabel: string;
}

export default function BurgerMenu({ locale, homeLabel, pricingLabel, blogLabel }: BurgerMenuProps) {
  const [open, setOpen] = useState(false);
  const services = locale === 'ru' ? servicesRu : servicesRo;
  const homeHref = locale === 'ru' ? '/ru' : '/';
  const pricingHref = locale === 'ru' ? '/ru#pricing' : '/#pricing';
  const blogHref = locale === 'ru' ? '/ru/blog' : '/blog';
  const serviceBase = locale === 'ru' ? '/ru/uslugi' : '/servicii';

  function close() {
    setOpen(false);
  }

  return (
    <div className='md:hidden'>
      <button
        type='button'
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className='inline-flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200'
        style={{ borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.08)' }}
      >
        <span aria-hidden='true' style={{ color: '#ffffff', fontSize: '18px', lineHeight: 1 }}>
          {open ? '✕' : '☰'}
        </span>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            className='fixed inset-0 z-40'
            style={{ top: '56px', background: 'rgba(0,0,0,0.4)' }}
            onClick={close}
            aria-hidden='true'
          />

          <nav
            className='fixed inset-x-0 z-50 border-b max-h-[calc(100vh-56px)] overflow-y-auto'
            style={{
              top: '56px',
              background: 'rgba(15,23,42,0.98)',
              borderColor: 'rgba(255,255,255,0.08)',
            }}
            aria-label='Mobile navigation'
          >
            <div className='container mx-auto px-4 py-4 flex flex-col gap-1 text-sm font-semibold text-slate-200'>
              <Link href={homeHref} onClick={close} className='py-2.5 hover:text-yellow-400 transition-colors'>
                🏠 {homeLabel}
              </Link>
              <Link href={pricingHref} onClick={close} className='py-2.5 hover:text-yellow-400 transition-colors'>
                💰 {pricingLabel}
              </Link>

              <div className='mt-1 pt-2 border-t' style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`${serviceBase}/${service.slug}`}
                    onClick={close}
                    className='flex items-center gap-2 py-2.5 text-slate-300 font-medium hover:text-yellow-400 transition-colors'
                  >
                    <span aria-hidden='true'>{service.icon}</span>
                    {service.h1}
                  </Link>
                ))}
              </div>

              <Link
                href={blogHref}
                onClick={close}
                className='mt-1 pt-2 py-2.5 border-t hover:text-yellow-400 transition-colors'
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                📰 {blogLabel}
              </Link>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
