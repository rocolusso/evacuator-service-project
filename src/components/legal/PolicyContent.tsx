import type { PolicySection } from '@/types';

interface PolicyContentProps {
  title: string;
  updated: string;
  intro: string;
  sections: PolicySection[];
}

/**
 * Shared layout for the Privacy Policy and Cookie Policy pages —
 * both render the same {title, updated, intro, sections[]} shape from
 * the locale files, so the presentation lives in one place.
 */
export default function PolicyContent({ title, updated, intro, sections }: PolicyContentProps) {
  return (
    <main className='container mx-auto px-4 py-12 max-w-3xl'>
      <h1 className='text-2xl md:text-3xl font-extrabold mb-2'>{title}</h1>
      <p className='text-sm mb-8' style={{ color: 'var(--muted)' }}>
        {updated}
      </p>
      <p className='mb-8 leading-relaxed'>{intro}</p>
      <div className='space-y-8'>
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className='text-lg font-bold mb-2'>{section.heading}</h2>
            <p className='leading-relaxed whitespace-pre-line' style={{ color: 'var(--muted)' }}>
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
