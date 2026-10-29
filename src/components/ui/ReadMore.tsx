'use client';

import { useId, useState } from 'react';
import type { ReactNode } from 'react';

interface ReadMoreProps {
  /** Full content — always present in the server-rendered HTML, so crawlers see it regardless of collapsed state. */
  children: ReactNode;
  /** Collapsed height in pixels. */
  maxHeight?: number;
  /** CSS color value the fade-out gradient blends into — match the section's own background. */
  fadeColor?: string;
  expandLabel: string;
  collapseLabel: string;
  className?: string;
}

/**
 * Reusable "read more" collapse: CSS-only visual clipping (max-height + overflow),
 * never display:none / unmounting. The full text is part of the initial SSR HTML
 * on every render, collapsed or not — safe for Google and any other crawler,
 * same treatment as a native <details> or tab/accordion panel. Only the visible
 * viewport changes on click; the DOM content never changes.
 *
 * Usage: wrap the part of a long-form block that should start collapsed.
 * Keep the lead paragraph(s) outside this wrapper so they're always visible.
 */
export default function ReadMore({
  children,
  maxHeight = 400,
  fadeColor = 'var(--background)',
  expandLabel,
  collapseLabel,
  className,
}: ReadMoreProps) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();

  return (
    <div className={className}>
      <div
        id={contentId}
        className='relative overflow-hidden transition-[max-height] duration-500 ease-in-out motion-reduce:transition-none'
        style={{ maxHeight: expanded ? 'none' : `${maxHeight}px` }}
      >
        {children}

        {!expanded && (
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 bottom-0 h-28'
            style={{ background: `linear-gradient(to bottom, transparent, ${fadeColor})` }}
          />
        )}
      </div>

      <div className='relative flex justify-center mt-2'>
        <button
          type='button'
          aria-expanded={expanded}
          aria-controls={contentId}
          onClick={() => setExpanded((v) => !v)}
          className='text-sm md:text-base font-semibold px-4 py-2 rounded-lg underline underline-offset-2 hover:no-underline transition-colors'
          style={{ color: 'var(--accent-foreground)' }}
        >
          {expanded ? collapseLabel : expandLabel}
        </button>
      </div>
    </div>
  );
}
