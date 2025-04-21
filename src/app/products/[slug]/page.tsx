import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getProductBySlug, getRelatedProducts } from '@/data/products';

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    notFound();
  }
  
  const relatedProducts = getRelatedProducts(product.id, product.category);

  return (
    <>
      <Navbar />
      <main>
        {/* 产品详情 */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* 产品图片 */}
              <div className="relative h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              
              {/* 产品信息 */}
              <div>
                <div className="mb-4">
                  <Link href="/products">
                    <span className="text-primary-600 hover:text-primary-700 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                      </svg>
                      返回产品列表
                    </span>
                  </Link>
                </div>
                
                <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {product.category}
                </span>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                
                <div className="text-2xl font-bold text-primary-100 mb-6 bg-red-500">
                  ¥{product.price.toFixed(2)} / 500克
                </div>
                
                <p className="mb-8 text-light-50">{product.shortDescription}</p>
                
                <div className="border-t border-b border-gray-200 py-6 mb-8">
                  <h3 className="text-lg font-bold mb-4">茶叶特点</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>产地：中国{product.category === '绿茶' ? '浙江杭州' : product.category === '红茶' ? '福建武夷山' : product.category === '乌龙茶' ? '福建武夷山' : product.category === '花茶' ? '云南/福建' : '云南'}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>等级：特级</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>采摘时节：春季</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>适宜温度：{product.category === '绿茶' ? '80-85℃' : product.category === '白茶' ? '85-90℃' : product.category === '花茶' ? '90-95℃' : '95-100℃'}</span>
                    </li>
                  </ul>
                </div>
                
                {/* <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary flex-1 py-3">加入购物车</button>
                  <button className="btn-outline flex-1 py-3">立即购买</button>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        
        {/* 详细描述 */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-600">产品详情</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-600">茶叶简介</h3>
                  <p className="text-gray-700">
                    {product.name}是中国传统名茶，{
                      product.category === '绿茶' 
                        ? '属于绿茶类，不发酵茶，保留了茶叶的天然物质和清新的风味。' 
                        : product.category === '红茶' 
                          ? '属于红茶类，全发酵茶，具有红汤红叶的特点，滋味醇厚。' 
                        : product.category === '乌龙茶' 
                          ? '属于乌龙茶类，半发酵茶，兼具绿茶的清香和红茶的醇厚。' 
                        : product.category === '花茶'
                          ? '属于花茶类，以优质茶叶为原料，添加鲜花增香，具有独特芬芳和健康功效。'
                        : '有着独特的风味特点和加工工艺。'
                    }
                    {product.shortDescription}
                  </p>
                </div>
                 
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-600">品质特点</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-gray-600">外形</h4>
                      <p className="text-gray-700">
                        {product.category === '绿茶' 
                          ? '扁平挺直，匀整光滑，色泽翠绿，白毫显露' 
                          : product.category === '红茶' 
                            ? '条索紧结，色泽乌润，金毫显露' 
                          : product.category === '乌龙茶' 
                            ? '条索卷曲，色泽棕褐，叶缘红褐'
                          : product.category === '花茶'
                            ? '干燥花朵形态完整，色彩鲜艳，茶叶与花瓣完美结合'
                          : '形态独特，精选上等茶叶制作'
                        }
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-gray-600">香气</h4>
                      <p className="text-gray-700">
                        {product.category === '绿茶' 
                          ? '清香高扬，兰花香，持久怡人' 
                          : product.category === '红茶' 
                            ? '香气馥郁，带花果香，温暖舒适' 
                          : product.category === '乌龙茶' 
                            ? '香气浓郁，带有蜜兰香，层次丰富'
                          : product.category === '花茶'
                            ? '花香芬芳四溢，清新自然，香气持久怡人'
                          : '独特的香气特点，令人陶醉'
                        }
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-gray-600">口感</h4>
                      <p className="text-gray-700">
                        {product.category === '绿茶' 
                          ? '鲜爽甘醇，回甘明显，滋味清新' 
                          : product.category === '红茶' 
                            ? '醇厚甘甜，滋味饱满，回味持久' 
                          : product.category === '乌龙茶' 
                            ? '滋味浓郁，醇厚回甘，喉韵悠长'
                          : product.category === '花茶'
                            ? '滋味鲜爽甘甜，花香与茶香完美融合，回味悠长'
                          : '独特的风味，带给您不同的品茶体验'
                        }
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-600">冲泡建议</h3>
                  <div className="bg-primary-50 p-6 rounded-lg  bg-gray-600">
                    <ol className="space-y-4">
                      <li className="flex">
                        <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                        <p><span className="font-medium">准备：</span>使用{product.category === '绿茶' || product.category === '白茶' ? '玻璃杯或盖碗' : product.category === '花茶' ? '玻璃杯或透明壶' : '紫砂壶或盖碗'}，取{product.category === '绿茶' ? '3-5克' : product.category === '花茶' ? '3-5克' : '5-7克'}茶叶</p>
                      </li>
                      <li className="flex">
                        <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                        <p><span className="font-medium">水温：</span>使用{product.category === '绿茶' ? '80-85℃' : product.category === '白茶' ? '85-90℃' : product.category === '花茶' ? '90-95℃' : '95-100℃'}的水温</p>
                      </li>
                      <li className="flex">
                        <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                        <p><span className="font-medium">冲泡：</span>第一泡{product.category === '绿茶' ? '约30秒' : product.category === '白茶' ? '约45秒' : product.category === '花茶' ? '约1-2分钟' : '约15-20秒'}，之后每泡增加10-15秒</p>
                      </li>
                      <li className="flex">
                        <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                        <p><span className="font-medium">品尝：</span>小口啜饮，在口腔中充分感受茶汤的香气和滋味变化</p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 相关推荐 */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">相关推荐</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 