import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { articles } from '@/data/articles';

export default function CulturePage() {
  // 获取所有文章分类
  const categories = [...new Set(articles.map(article => article.category))];

  return (
    <>
      <Navbar />
      <main>
        {/* 页面标题 */}
        <section className="bg-wood-600 text-white py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold mb-4">茶文化鉴赏</h1>
            <p className="text-xl max-w-2xl mx-auto">
              茶不仅是一种饮品，更是一种文化和生活方式。在这里，您可以了解更多关于茶叶的知识和茶文化的魅力。
            </p>
          </div>
        </section>

        {/* 分类导航 */}
        <section className="bg-white py-6 shadow-md sticky top-0 z-10">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/culture">
                <span className="px-4 py-2 rounded-full bg-wood-600 text-white font-medium">
                  全部文章
                </span>
              </Link>
              {/* {categories.map((category) => (
                <Link key={category} href={`/culture?category=${category}`}>
                  <span className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition-colors">
                    {category}
                  </span>
                </Link> */}
              ))}
            </div>
          </div>
        </section>

        {/* 文章列表 */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article) => (
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
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-primary-600">{article.date}</span>
                      <span className="text-xs bg-wood-100 text-wood-800 px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <Link href={`/culture/${article.slug}`}>
                      <h3 className="text-xl font-bold mb-2 hover:text-primary-600 transition-colors">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full overflow-hidden relative mr-2">
                          <Image
                            src={article.author.avatar}
                            alt={article.author.name}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <span className="text-sm text-gray-700">{article.author.name}</span>
                      </div>
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 订阅区域 */}
        {/* <section className="py-16 bg-wood-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">订阅我们的茶文化电子刊</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              订阅我们的电子刊，定期获取茶知识、新品资讯和独家优惠，让您的茶旅程更加丰富多彩。
            </p>
            <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="您的邮箱地址"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none border border-gray-300"
                required
              />
              <button type="submit" className="bg-wood-600 hover:bg-wood-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
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