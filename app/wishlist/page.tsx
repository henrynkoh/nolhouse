'use client';

import React, { useState, useEffect } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { AccommodationItem } from '../../types';
import Link from 'next/link';

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<AccommodationItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // In a real app, this would fetch from an API or local storage
  useEffect(() => {
    // Simulate loading from an API
    setTimeout(() => {
      // Sample data for wishlist
      const sampleWishlist: AccommodationItem[] = [
        {
          id: "3",
          imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80",
          name: "파라다이스 호텔 부산",
          location: "부산 해운대구",
          rating: 4.9,
          reviewCount: 1024,
          price: 350000,
          discountRate: 20,
          originalPrice: 437500,
          tags: ["호텔", "5성급", "오션뷰", "스파"],
        },
        {
          id: "6",
          imageUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
          name: "평창 알펜시아 리조트",
          location: "강원 평창",
          rating: 4.5,
          reviewCount: 512,
          price: 220000,
          discountRate: 10,
          originalPrice: 244000,
          tags: ["리조트", "스키", "온천"],
        },
      ];
      
      setWishlistItems(sampleWishlist);
      setIsLoading(false);
    }, 500);
  }, []);

  const removeFromWishlist = (id: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">내 위시리스트</h1>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className="w-full h-48 object-cover"
                  />
                  <button 
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.293 3.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
                  <p className="text-gray-600 text-sm mb-2">{item.location}</p>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="font-medium">{item.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({item.reviewCount})</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {item.tags?.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <p className="text-lg font-bold">{item.price.toLocaleString()}원</p>
                      {item.discountRate && (
                        <p className="text-sm text-gray-500 line-through">{item.originalPrice?.toLocaleString()}원</p>
                      )}
                    </div>
                    <Link href={`/accommodation/${item.id}`}>
                      <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                        예약하기
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h2 className="text-xl font-medium mb-2">위시리스트가 비어있습니다</h2>
            <p className="text-gray-500 mb-4">마음에 드는 숙소를 찾아 하트를 눌러보세요!</p>
            <Link href="/search">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                숙소 둘러보기
              </button>
            </Link>
          </div>
        )}
      </div>
    </MainLayout>
  );
} 