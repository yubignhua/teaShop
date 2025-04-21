import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getFeaturedProducts } from '@/data/products';
import { getRecentArticles } from '@/data/articles';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const recentArticles = getRecentArticles();

  return (
    <>
      <Navbar />
      <main>
        {/* 英雄轮播 */}
        <HeroSlider />

        {/* 关于我们 */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">祥润茶庄：传承百年茶韵</h2>
                <p className="text-gray-600 mb-4">
                  祥润茶始终坚持以匠心精神制茶，守护茶叶的纯正品质。我们的产品来自分布在中国各大名茶产区，从西湖龙井到武夷大红袍，从安溪铁观音到云南普洱，只为寻找最好的茶叶原料。
                </p>
                <p className="text-gray-600 mb-8">
                  在祥润茶庄，我们不仅提供优质的茶叶，更致力于传播中国茶文化的魅力。无论您是茶叶爱好者还是初次接触茶文化的朋友，都能在这里找到适合自己的茶品，体验到中国茶的独特魅力。
                </p>
                <Link href="/about">
                  <span className="btn-primary">了解更多</span>
                </Link>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/imgs/WechatIMG1777.jpg"
                  alt="祥润茶庄茶园"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 特色产品 */}
        <section className="py-16">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800">特色茶品</h2>
              <Link href="/products">
                <span className="btn-outline mt-4 md:mt-0">查看全部产品</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* 茶文化 */}
        <section className="py-16 bg-wood-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">茶文化鉴赏</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentArticles.map((article) => (
                <div key={article.id} className="card group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-primary-600 mb-2">{article.date}</p>
                    <Link href={`/culture/${article.slug}`}>
                      <h3 className="text-xl font-bold mb-2 text-gray-600 hover:text-primary-600 transition-colors">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                    <Link href={`/culture/${article.slug}`}>
                      <span className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                        阅读更多
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 优势特点 */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 text-gray-100">我们的优势</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center mb-5">
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">品质保证</h3>
                <p className="text-gray-200">
                  我们的每一款茶叶都经过严格的品质检测，确保茶叶的纯正和安全，让您喝得放心。
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center mb-5">
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">源头直采</h3>
                <p className="text-gray-100">
                  我们与各大茶区的优质茶园建立长期合作关系，从源头直接采购，保证茶叶的新鲜度和原产地风味。
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center mb-5">
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">专业服务</h3>
                <p className="text-gray-100">
                  我们的茶艺师团队拥有丰富的专业知识，为您提供茶叶选择、冲泡技巧等方面的咨询和指导。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 订阅区域 */}
        {/* <section className="py-16 bg-primary-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">订阅我们的茶文化电子刊</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              订阅我们的电子刊，定期获取茶知识、新品资讯和独家优惠，让您的茶旅程更加丰富多彩。
            </p>
            <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="您的邮箱地址"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none text-gray-800"
                required
              />
              <button type="submit" className="bg-secondary-500 hover:bg-secondary-600 px-6 py-3 rounded-md font-medium transition-colors">
                立即订阅
              </button>
            </form>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
} 