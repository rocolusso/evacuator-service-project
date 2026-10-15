import type { Metadata } from 'next';
import RootDocument from '@/components/layout/RootDocument';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'),
  robots: { index: true, follow: true },
};

export default function RoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang='ro'>{children}</RootDocument>;
}
