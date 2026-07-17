import Link from 'next/link';

interface LanguageSwitcherProps {
  langLabel: string;
  langHref: string;
}

export default function LanguageSwitcher({ langLabel, langHref }: LanguageSwitcherProps) {
  return (
    <Link
      href={langHref}
      className='inline-flex items-center justify-center w-9 h-9 rounded-lg text-xs font-bold border transition-all duration-200 hover:scale-105'
      style={{
        background: 'rgba(255,255,255,0.08)',
        borderColor: 'rgba(255,255,255,0.15)',
        color: '#ffffff',
      }}
      aria-label={`Switch language to ${langLabel}`}
    >
      {langLabel}
    </Link>
  );
}
