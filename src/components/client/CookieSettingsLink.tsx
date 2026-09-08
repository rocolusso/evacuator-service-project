'use client';

import { useCookieStore } from '@/store/cookieStore';

interface CookieSettingsLinkProps {
  label: string;
  className?: string;
}

/**
 * Small client-only control that reopens the cookie consent banner by
 * resetting the persisted choice back to "pending". Kept as its own
 * tiny client component (rather than making the whole Footer a client
 * component) — same pattern already used for ThemeToggle/PhoneLink.
 */
export default function CookieSettingsLink({ label, className }: CookieSettingsLinkProps) {
  const reset = useCookieStore((state) => state.reset);

  return (
    <button type='button' onClick={reset} className={className}>
      {label}
    </button>
  );
}
