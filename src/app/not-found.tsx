import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-9xl font-bold text-primary-600">404</h1>
            <h2 className="text-4xl font-bold text-gray-800 mt-6 mb-8">页面未找到</h2>
            <p className="text-xl text-gray-600 max-w-2xl mb-12">
              抱歉，您访问的页面不存在或已被移除。请返回首页或浏览其他页面。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/">
                <span className="btn-primary px-8 py-3">返回首页</span>
              </Link>
              <Link href="/products">
                <span className="btn-outline px-8 py-3">浏览产品</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 