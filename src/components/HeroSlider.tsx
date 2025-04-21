"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface SlideItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

const HeroSlider: React.FC = () => {
  const slides: SlideItem[] = [
    {
      id: 1,
      imageUrl: '/imgs/image (10).jpg',
      title: '品味传统，感受自然',
      description: '精选优质茶叶，为您带来纯正的茶香体验'
    },
    {
      id: 2,
      imageUrl: '/imgs/image (13).jpg',
      title: '匠心制作，世代相传',
      description: '传承百年制茶工艺，每一片茶叶都充满故事'
    },
    {
      id: 3,
      imageUrl: '/imgs/image (15).jpg',
      title: '源自高山，自然馈赠',
      description: '高海拔茶园，阳光雨露的完美结合'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <div 
        className="h-full w-full flex transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-full w-full flex-shrink-0">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="relative h-full w-full">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fill
                style={{ objectFit: 'cover' }}
                priority={slide.id === 1}
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 px-4 md:px-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl text-center">
                {slide.description}
              </p>
              <button className="btn-primary text-lg">探索我们的产品</button>
            </div>
          </div>
        ))}
      </div>

      {/* 左右箭头 */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
        onClick={prevSlide}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
        onClick={nextSlide}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      {/* 指示点 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider; 