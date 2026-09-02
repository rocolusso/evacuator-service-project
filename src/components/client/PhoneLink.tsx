'use client';

import { handlePhoneClick } from '@/lib/analytics';

interface PhoneLinkProps {
  href: string;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}

export default function PhoneLink({ href, className, ariaLabel, children }: PhoneLinkProps) {
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={handlePhoneClick}
    >
      {children}
    </a>
  );
}
