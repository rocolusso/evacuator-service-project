'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CookieState {
  accepted: boolean;
  accept: () => void;
}

export const useCookieStore = create<CookieState>()(
  persist(
    (set) => ({
      accepted: false,
      accept: () => set({ accepted: true }),
    }),
    { name: 'cookie-consent' },
  ),
);
