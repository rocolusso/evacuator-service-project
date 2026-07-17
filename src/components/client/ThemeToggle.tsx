'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      setDark(true);
    }
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return (
    <button
      type='button'
      onClick={toggle}
      className='w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-200 hover:scale-105'
      style={{
        background: 'rgba(255,255,255,0.08)',
        borderColor: 'rgba(255,255,255,0.15)',
      }}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className='text-base' aria-hidden='true'>
        {dark ? '☀️' : '🌙'}
      </span>
    </button>
  );
}
