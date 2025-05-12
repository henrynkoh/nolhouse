'use client';

import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import Link from 'next/link';

interface CartItem {
  id: string;
  accommodationName: string;
  accommodationImage: string;
  roomType: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  price: number;
  nights: number;
}

export default function CartPage() {
  // Sample cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'item1',
      accommodationName: '그랜드 하얏트 서울',
      accommodationImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      roomType: '디럭스 킹룸',
      checkInDate: '2024-07-15',
      checkOutDate: '2024-07-17',
      guests: 2,
      price: 280000,
      nights: 2,
    },
    {
      id: 'item2',
      accommodationName: '파라다이스 호텔 부산',
      accommodationImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      roomType: '오션뷰 스위트',
      checkInDate: '2024-08-10',
      checkOutDate: '2024-08-13',
      guests: 3,
      price: 350000,
      nights: 3,
    },
  ]);

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.nights), 0);
  const tax = Math.round(subtotal * 0.1); // 10% tax
  const total = subtotal + tax;

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">장바구니</h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart items */}
            <div className="lg:w-2/3">
              {cartItems.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
                  <div className="p-4 flex flex-col md:flex-row gap-4">
                    <img
                      src={item.accommodationImage}
                      alt={item.accommodationName}
                      className="w-full md:w-48 h-32 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h2 className="text-xl font-bold">{item.accommodationName}</h2>
                      <p className="text-gray-600">{item.roomType}</p>
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                          <p className="text-sm text-gray-500">체크인</p>
                          <p>{formatDate(item.checkInDate)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">체크아웃</p>
                          <p>{formatDate(item.checkOutDate)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">인원</p>
                          <p>{item.guests}명</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">숙박</p>
                          <p>{item.nights}박</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">1박 요금</p>
                        <p className="font-bold">₩{item.price.toLocaleString()}</p>
                        <p className="font-bold mt-1">총 ₩{(item.price * item.nights).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h2 className="text-xl font-bold mb-4">결제 정보</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">소계</span>
                    <span>₩{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">세금 (10%)</span>
                    <span>₩{tax.toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-bold">
                      <span>총 결제금액</span>
                      <span>₩{total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/booking/checkout">
                    <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                      결제하기
                    </button>
                  </Link>
                  <Link href="/search">
                    <button className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50">
                      계속 쇼핑하기
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 className="text-2xl font-medium mb-2">장바구니가 비어있습니다</h2>
            <p className="text-gray-500 mb-6">원하는 숙소를 찾아 장바구니에 담아보세요!</p>
            <Link href="/search">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                숙소 둘러보기
              </button>
            </Link>
          </div>
        )}
      </div>
    </MainLayout>
  );
} 