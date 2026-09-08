'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ConsentStatus = 'pending' | 'accepted' | 'rejected';

interface CookieState {
  status: ConsentStatus;
  accept: () => void;
  reject: () => void;
  reset: () => void;
}

export const useCookieStore = create<CookieState>()(
  persist(
    (set) => ({
      status: 'pending',
      accept: () => set({ status: 'accepted' }),
      reject: () => set({ status: 'rejected' }),
      reset: () => set({ status: 'pending' }),
    }),
    // Renamed from the old boolean-only "cookie-consent" key: the shape
    // changed (status enum instead of accepted: boolean), so we start
    // fresh rather than trying to migrate the old value.
    { name: 'cookie-consent-v2' },
  ),
);
