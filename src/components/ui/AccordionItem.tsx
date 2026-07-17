'use client';

import { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

export default function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className='rounded-xl border overflow-hidden transition-all duration-200'
      style={{
        background: 'var(--card)',
        borderColor: open ? 'var(--accent)' : 'var(--card-border)',
      }}
    >
      <button
        type='button'
        className='w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-sm md:text-base cursor-pointer'
        style={{ color: 'var(--foreground)' }}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span
          className='shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200'
          style={{
            background: 'var(--accent)',
            color: 'var(--accent-foreground)',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
          aria-hidden='true'
        >
          +
        </span>
      </button>

      {open && (
        <div
          className='px-5 pb-5 text-sm md:text-base leading-relaxed'
          style={{ color: 'var(--muted)' }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}
