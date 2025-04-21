import { Product } from '@/components/ProductCard';

export const products: Product[] = [
  {
    id: '1',
    name: '金骏眉',
    slug: 'jinjunmei',
    category: '红茶',
    image: '/imgs/image (17).jpg',
    price: 120.00,
    shortDescription: '金骏眉诞生于2005年，是一种顶级红茶。'
  },
  {
    id: '2',
    name: '正山小种',
    slug: 'zhengshanjinxiang',
    category: '红茶',
    image: '/imgs/image (6).jpg',
    price: 160.00,
    shortDescription: '正山小种是世界红茶的鼻祖，之称的茶叶。'
  },
  {
    id: '3',
    name: '芙蓉王花茶',
    slug: 'furongwang',
    category: '花茶',
    image: '/imgs/image (12).jpg',
    price: 180.00,
    shortDescription: '核心功效：清热解毒；适用于感冒发热等。'
  },
  {
    id: '4',
    name: '白雪公主花茶',
    slug: 'baixuegongzhu',
    category: '花茶',
    image: '/imgs/image (8).jpg',
    price: 120.00,
    shortDescription: '白雪公主花茶是一种以莲花为原料的花茶。'
  },
  {
    id: '5',
    name: '毛峰花茶',
    slug: 'maofeng',
    category: '花茶',
    image: '/imgs/WechatIMG1778.jpg',
    price: 80.00,
    shortDescription: '毛峰花茶清香甜润绿叶重山毛峰茶。'
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getRelatedProducts = (currentProductId: string, category: string, limit = 4): Product[] => {
  return products
    .filter(product => product.category === category && product.id !== currentProductId)
    .slice(0, limit);
};

export const getFeaturedProducts = (limit = 4): Product[] => {
  return products.slice(0, limit);
}; 