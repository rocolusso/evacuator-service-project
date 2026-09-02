'use client';

import { useEffect } from 'react';
import { initTurnstile } from '@/lib/turnstile';

/**
 * Mounted once, globally (see ClientShell), so the invisible Turnstile
 * widget starts verifying in the background as early as possible —
 * ideally well before the user has a chance to tap a phone button.
 * Renders nothing.
 */
export default function TurnstileGate() {
  useEffect(() => {
    initTurnstile();
  }, []);

  return null;
}
