import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 页面标题 */}
        <section className="bg-primary-600 text-white py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold mb-4">关于我们</h1>
            <p className="text-xl max-w-2xl mx-auto">
              祥润茶庄，一家专注传统茶文化传承与创新的茶叶品牌，始终坚持为您提供最优质的茶叶体验。总建筑面积300平米。欢迎各位顾客光临!!地址:孙子故里|中国惠民·温博园南门祥润茶庄电话:13791002024【微信同号】
              邮箱:13791002024@163.com
            </p>
          </div>
        </section>

        {/* 品牌故事 */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-100">我们的品牌故事</h2>
                <p className="text-gray-100 mb-4">
                  
                </p>
                <p className="text-gray-100 mb-4">
                  凭借着对茶叶品质的严格把控和对顾客的真诚服务，祥润茶庄很快在当地赢得了良好的口碑。
                </p>
                <p className="text-gray-100 mb-8">
                  祥润茶庄始终坚持"匠心制茶，诚信经营"的理念，将传统制茶工艺与现代科技相结合，不断提升产品品质，丰富产品种类。
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/imgs/WechatIMG1777.jpg"
                  alt="祥润茶庄品牌故事"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 我们的使命和价值观 */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12" style={{color:'#000'}}>我们的使命与价值观</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">品质承诺</h3>
                <p className="text-gray-600 text-center">
                  我们承诺只提供最优质的茶叶，从源头把控产品质量，确保每一片茶叶都能带给您纯正的口感和香气。
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">文化传承</h3>
                <p className="text-gray-600 text-center">
                  我们致力于传承和发扬中国茶文化，通过各种方式帮助更多人了解茶叶知识，领略茶文化的魅力。
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">可持续发展</h3>
                <p className="text-gray-600 text-center">
                  我们注重环保和可持续发展，采用生态种植方式，减少化学物质使用，保护茶园生态环境。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 我们的团队 */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-4">我们的团队</h2>
            <p className="text-center text-gray-100 max-w-2xl mx-auto mb-12">
              祥润茶庄拥有一支专业且充满热情的团队，他们在茶叶种植、制作、品鉴等方面都有着丰富的经验和专业知识。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: '陈明志',
                  position: '创始人兼总经理',
                  image: '/imgs/team/image (19).jpg',
                  description: '第四代传人，拥有30年茶叶行业经验，致力于将祥润茶庄打造成国际知名品牌。'
                },
                {
                  name: '李茶师',
                  position: '首席茶艺师',
                  image: '/imgs/team/image (20).jpg',
                  description: '国家级评茶师，精通各种茶叶品类的鉴赏与冲泡技巧，主持祥润茶庄的品茶会和茶艺表演。'
                },
                {
                  name: '张种植',
                  position: '茶园总监',
                  image: '/imgs/team/image.jpg',
                  description: '农业硕士，负责茶园的日常管理和种植技术革新，确保茶叶原料的优质和可持续。'
                },
                {
                  name: '王文化',
                  position: '茶文化研究员',
                  image: '/imgs/team/image (19).jpg',
                  description: '茶学博士，致力于茶文化的研究和传播，定期举办茶文化讲座和工作坊。'
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary-600 mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 联系我们 */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-600">联系我们</h2>
                <p className="text-gray-600 mb-8">
                  无论您是对我们的产品有疑问，还是想了解更多关于茶文化的信息，或是有合作意向，都欢迎随时联系我们。我们的团队将竭诚为您服务。
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-600">地址</h3>
                      <p className="text-gray-600">山东省孙子故里|中国惠民·温博园南门祥润茶庄电祥润茶庄总部</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-600">电话</h3>
                      <p className="text-gray-600">13791002024</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-600">电子邮件</h3>
                      <p className="text-gray-600">13791002024@163.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-600">营业时间</h3>
                      <p className="text-gray-600">周一至周日: 上午9:00 - 下午6:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-bold mb-6">给我们留言</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">姓名</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="请输入您的姓名"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">电子邮件</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="请输入您的电子邮件"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 mb-2">主题</label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="请输入留言主题"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2">留言内容</label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="请输入您的留言内容"
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn-primary w-full py-3">提交留言</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 