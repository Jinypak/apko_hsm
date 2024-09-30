import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/toaster';
import MobileHeader from '@/components/mobile/mobile-header';

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
        <main className="mx-auto">
          <div className="hidden sm:block">
            <Header />
          </div>
          <div className="sm:hidden">
            <MobileHeader />
          </div>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
