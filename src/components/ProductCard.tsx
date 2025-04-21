import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  image: string;
  price: number;
  shortDescription: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card group">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <span className="text-sm text-primary-600 font-medium">{product.category}</span>
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-xl font-bold mt-1 text-gray-600 hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 mt-2 text-sm line-clamp-2">{product.shortDescription}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-red-400">¥{product.price.toFixed(2)} <span className="text-sm font-normal text-gray-600">/ 500克</span></span>
          <Link href={`/products/${product.slug}`}>
            <span className="btn-outline py-1 px-3 text-sm">查看详情</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 