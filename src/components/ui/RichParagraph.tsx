import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * Renders a plain-text string that may contain lightweight markdown-style
 * links: `[anchor text](/href)`. Used for article/service copy stored as
 * plain data (locale/content files) that still needs real, crawlable
 * internal links with keyword-rich anchor text — without storing JSX in
 * data files.
 */
function parseInline(text: string): ReactNode[] {
  const regex = /\[([^\]]+)]\(([^)]+)\)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <Link
        key={key++}
        href={match[2]}
        className='font-semibold underline underline-offset-2 decoration-1 hover:no-underline'
        style={{ color: 'var(--accent-foreground)' }}
      >
        {match[1]}
      </Link>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

interface RichParagraphProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function RichParagraph({ text, className, style }: RichParagraphProps) {
  return <p className={className} style={style}>{parseInline(text)}</p>;
}
