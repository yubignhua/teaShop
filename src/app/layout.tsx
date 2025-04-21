import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: '祥润茶庄 - 优质茶叶专卖',
  description: '提供各种高品质的绿茶、红茶、乌龙茶等，了解正宗茶文化，体验茶叶的奇妙世界。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.variable}>
        <main>{children}</main>
      </body>
    </html>
  );
} 