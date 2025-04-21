import React from 'react';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 品牌信息 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center">
              <span className="mr-2">🍵</span>
              <span>祥润茶庄</span>
            </h3>
            <p className="text-gray-300">
              专注优质茶叶20年，只为您呈现最纯正的茶香。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary-300 transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-300 transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-300 transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-300 transition-colors">
                <FiYoutube size={20} />
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  产品中心
                </Link>
              </li>
              <li>
                <Link href="/culture" className="text-gray-300 hover:text-white transition-colors">
                  茶文化
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
            </ul>
          </div>

          {/* 热门产品 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">热门产品</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/longjing" className="text-gray-300 hover:text-white transition-colors">
                正山小种
                </Link>
              </li>
              <li>
                <Link href="/products/dahongpao" className="text-gray-300 hover:text-white transition-colors">
                芙蓉王花茶
                </Link>
              </li>
              <li>
                <Link href="/products/tieguanyin" className="text-gray-300 hover:text-white transition-colors">
                白雪公主花茶
                </Link>
              </li>
              <li>
                <Link href="/products/puer" className="text-gray-300 hover:text-white transition-colors">
                金骏眉
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-2 text-secondary-400" />
                <span className="text-gray-300">孙子故里|中国惠民·温博园南门祥润茶庄电</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2 text-secondary-400" />
                <span className="text-gray-300">13791002024</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2 text-secondary-400" />
                <span className="text-gray-300">13791002024@163.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} 祥润茶庄. 版权所有.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 