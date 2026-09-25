interface AccordionItemProps {
  question: string;
  answer: string;
}

export default function AccordionItem({ question, answer }: AccordionItemProps) {
  return (
    <details
      className='group rounded-xl border overflow-hidden transition-all duration-200'
      style={{
        background: 'var(--card)',
        borderColor: 'var(--card-border)',
      }}
    >
      <summary
        className='w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-sm md:text-base cursor-pointer list-none [&::-webkit-details-marker]:hidden'
        style={{ color: 'var(--foreground)' }}
      >
        <span>{question}</span>
        <span
          className='shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 group-open:rotate-45'
          style={{
            background: 'var(--accent)',
            color: 'var(--accent-foreground)',
          }}
          aria-hidden='true'
        >
          +
        </span>
      </summary>

      <div
        className='px-5 pb-5 text-sm md:text-base leading-relaxed'
        style={{ color: 'var(--muted)' }}
      >
        {answer}
      </div>
    </details>
  );
}
