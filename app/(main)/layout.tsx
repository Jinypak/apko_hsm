import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Navigation from './_components/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'APPLIANCE KOREA - HSM',
  description: 'HSM DOCS PAGE',
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
