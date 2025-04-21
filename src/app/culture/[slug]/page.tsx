import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getArticleBySlug, getRecentArticles } from '@/data/articles';
import Markdown from 'react-markdown';

interface ArticleDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const article = getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }
  
  const recentArticles = getRecentArticles().filter(a => a.id !== article.id);

  return (
    <>
      <Navbar />
      <main>
        {/* 文章标题 */}
        <section className="relative h-[400px] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 container-custom text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden relative mr-2">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <span>{article.author.name}</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-white hidden md:block"></span>
              <span>{article.date}</span>
              <span className="w-2 h-2 rounded-full bg-white hidden md:block"></span>
              <span className="px-3 py-1 bg-primary-600 rounded-full text-sm">
                {article.category}
              </span>
            </div>
          </div>
        </section>

        {/* 文章内容 */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* 主要内容 */}
              <div className="lg:col-span-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="prose prose-lg max-w-none">
                    <div className="text-xl text-gray-700 mb-8 italic">
                      {article.excerpt}
                    </div>
                    <div className="markdown-content" style={{color:'#000'}}>
                      {article.content}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 mt-12 pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <Link href="/culture">
                        <span className="text-primary-600 hover:text-primary-700 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                          </svg>
                          返回文章列表
                        </span>
                      </Link>
                      
                      <div className="flex space-x-4">
                        <button className="text-gray-600 hover:text-gray-800 flex items-center">
                          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                          </svg>
                          分享
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 flex items-center">
                          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
                          </svg>
                          打印
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 侧边栏 */}
              <div className="lg:col-span-4">
                <div className="sticky top-24">
                  {/* 作者信息 */}
                  <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h3 className="text-xl font-bold mb-4">关于作者</h3>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden relative mr-4">
                        <Image
                          src={article.author.avatar}
                          alt={article.author.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{article.author.name}</h4>
                        <p className="text-gray-600">茶文化研究专家</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      {article.author.name}是我们的资深茶文化专家，拥有多年茶叶研究和品鉴经验，致力于传播中国茶文化的魅力。
                    </p>
                  </div>
                  
                  {/* 最近文章 */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4">最近文章</h3>
                    <div className="space-y-4">
                      {recentArticles.map((recentArticle) => (
                        <div key={recentArticle.id} className="flex gap-3">
                          <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden">
                            <Image
                              src={recentArticle.coverImage}
                              alt={recentArticle.title}
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                          <div>
                            <Link href={`/culture/${recentArticle.slug}`}>
                              <h4 className="font-medium hover:text-primary-600 line-clamp-2 mb-1">
                                {recentArticle.title}
                              </h4>
                            </Link>
                            <p className="text-sm text-gray-500">{recentArticle.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 