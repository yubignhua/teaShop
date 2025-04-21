import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function ProductsPage() {
  // 获取所有茶叶分类
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <>
      <Navbar />
      <main>
        {/* 页面标题 */}
        <section className="bg-primary-600 text-white py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold mb-4">产品中心</h1>
            <p className="text-xl max-w-2xl mx-auto">
              精选各类优质茶叶，从源头直采，以匠心工艺制作，带给您最纯正的茶香体验。
            </p>
          </div>
        </section>

        {/* 分类导航 */}
        <section className="bg-white py-6 shadow-md sticky top-0 z-10">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/products">
                <span className="px-4 py-2 rounded-full bg-primary-600 text-white font-medium">
                  全部茶品
                </span>
              </Link>
              {categories.map((category) => (
                <Link key={category} href={`/products?category=${category}`}>
                  <span className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition-colors">
                    {category}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 产品展示 */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* 购买指南 */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-600">茶叶选购指南</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/imgs/image (14).jpg"
                  alt="茶叶选购"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center text-gray-600">
                      <span className="w-8 h-8 rounded-full flex items-center justify-center mr-3 text-gray-600">1</span>
                      根据个人口味选择茶类
                    </h3>
                    <p className="text-gray-600 ml-11">
                      喜欢清爽的可选绿茶、白茶；喜欢浓郁的可选红茶、黑茶；喜欢介于两者之间的可选乌龙茶。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center text-gray-600">
                      <span className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3 text-gray-600">2</span>
                      注意茶叶的外观和香气
                    </h3>
                    <p className="text-gray-600 ml-11">
                      好茶通常色泽鲜亮，形状完整，干香纯正持久，没有异味或霉味。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center text-gray-600">
                      <span className="w-8 h-8 rounded-full bg-primary-100  flex items-center justify-center mr-3">3</span>
                      考虑茶叶的产地和季节
                    </h3>
                    <p className="text-gray-600 ml-11">
                      不同产区的茶叶风味各异，春茶通常品质最佳，但价格也相对较高。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center text-gray-600">
                      <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3">4</span>
                      选择正规渠道购买
                    </h3>
                    <p className="text-gray-600 ml-11">
                      建议从有信誉的茶叶店或直接从原产地购买，以确保茶叶的品质和安全。
                    </p>
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