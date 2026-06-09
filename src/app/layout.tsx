import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import InteractiveBackground from '@/components/InteractiveBackground';

export const metadata: Metadata = {
  title: '河南磐霆速科新材料科技有限公司',
  description: '专注新型建筑材料研发与生产，提供灌浆料、建筑砂浆、特种结构材料、防水堵漏材料、装配式墙面砂浆等产品',
  keywords: '灌浆料,建筑砂浆,特种结构,防水堵漏,装配式墙面砂浆,新型建筑材料',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">
        <InteractiveBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 page-enter">{children}</main>
          <FloatingContact />
          <Footer />
        </div>
      </body>
    </html>
  );
}
