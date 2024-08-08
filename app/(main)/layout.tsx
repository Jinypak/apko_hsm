import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/toaster';

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
        <main className="max-w-7xl mx-auto">
          <Header />
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
