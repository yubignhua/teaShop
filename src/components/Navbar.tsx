"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary-600 flex items-center">
          <span className="mr-2">🍵</span>
          <span>祥润茶庄</span>
        </Link>
        
        {/* 桌面端导航 */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">首页</Link>
          <Link href="/products" className="text-gray-700 hover:text-primary-600 transition-colors">产品中心</Link>
          <Link href="/culture" className="text-gray-700 hover:text-primary-600 transition-colors">茶文化</Link>
          <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">关于我们</Link>
          <button className="btn-primary">联系我们</button>
        </div>
        
        {/* 移动端菜单按钮 */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      
      {/* 移动端菜单 */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              首页
            </Link>
            <Link 
              href="/products" 
              className="text-gray-700 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              产品中心
            </Link>
            <Link 
              href="/culture" 
              className="text-gray-700 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              茶文化
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              关于我们
            </Link>
            <button className="btn-primary mt-2 self-start">联系我们</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 