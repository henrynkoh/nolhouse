'use client';

import React, { useState } from 'react';
import { MainLayout } from '../../../components/layout/MainLayout';
import Link from 'next/link';

type TabType = 'profile' | 'bookings' | 'reviews' | 'points';

interface BookingType {
  id: string;
  accommodationName: string;
  accommodationImage: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  totalPrice: number;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export default function UserAccountPage() {
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  
  // Mock user data
  const user = {
    name: '김영희',
    email: 'younghee.kim@example.com',
    phone: '010-1234-5678',
    joinDate: '2023년 5월 15일',
    points: 12500,
    level: 'Gold',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
  };
  
  // Mock bookings data
  const bookings: BookingType[] = [
    {
      id: 'b001',
      accommodationName: '그랜드 하얏트 서울',
      accommodationImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      checkInDate: '2024-07-15',
      checkOutDate: '2024-07-17',
      guests: 2,
      totalPrice: 560000,
      status: 'upcoming',
    },
    {
      id: 'b002',
      accommodationName: '파라다이스 호텔 부산',
      accommodationImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      checkInDate: '2024-02-10',
      checkOutDate: '2024-02-12',
      guests: 3,
      totalPrice: 620000,
      status: 'completed',
    },
    {
      id: 'b003',
      accommodationName: '롯데호텔 서울',
      accommodationImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      checkInDate: '2023-12-24',
      checkOutDate: '2023-12-26',
      guests: 4,
      totalPrice: 780000,
      status: 'completed',
    },
  ];

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      weekday: 'long' 
    });
  };

  // Get status label in Korean
  const getStatusLabel = (status: BookingType['status']) => {
    switch (status) {
      case 'upcoming': return '예정된 예약';
      case 'completed': return '이용 완료';
      case 'cancelled': return '취소됨';
      default: return '';
    }
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-72 bg-white rounded-lg shadow-md p-6 h-fit">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={user.profileImage} 
                alt={user.name} 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-sm text-gray-500">{user.level} 회원</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg mb-6">
              <span className="text-gray-700">NOL 포인트</span>
              <span className="font-bold text-blue-600">{user.points.toLocaleString()} P</span>
            </div>
            
            <nav>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    내 정보
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('bookings')}
                    className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    예약 내역
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'reviews' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    내 리뷰
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('points')}
                    className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'points' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    포인트 내역
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-6">내 정보</h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">이름</p>
                      <p className="font-medium">{user.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">이메일</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">전화번호</p>
                      <p className="font-medium">{user.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">가입일</p>
                      <p className="font-medium">{user.joinDate}</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 mt-4">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mr-3">
                      회원정보 수정
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                      비밀번호 변경
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'bookings' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-6">예약 내역</h2>
                
                {bookings.length > 0 ? (
                  <div className="space-y-6">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="border rounded-lg overflow-hidden">
                        <div className={`px-4 py-2 text-white ${
                          booking.status === 'upcoming' ? 'bg-blue-600' : 
                          booking.status === 'completed' ? 'bg-green-600' : 'bg-gray-600'
                        }`}>
                          <span className="font-medium">{getStatusLabel(booking.status)}</span>
                        </div>
                        <div className="p-4 flex flex-col md:flex-row gap-4">
                          <img 
                            src={booking.accommodationImage} 
                            alt={booking.accommodationName}
                            className="w-full md:w-32 h-24 object-cover rounded-md"
                          />
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-1">{booking.accommodationName}</h3>
                            <p className="text-gray-600 mb-2">
                              {formatDate(booking.checkInDate)} ~ {formatDate(booking.checkOutDate)}
                            </p>
                            <p className="text-gray-600 mb-2">인원: {booking.guests}명</p>
                            <p className="font-bold text-lg">₩{booking.totalPrice.toLocaleString()}</p>
                          </div>
                          <div className="flex md:flex-col gap-2 justify-end">
                            <Link href={`/booking/details/${booking.id}`}>
                              <button className="px-3 py-1 border border-blue-600 text-blue-600 rounded-md text-sm hover:bg-blue-50 whitespace-nowrap">
                                상세 보기
                              </button>
                            </Link>
                            {booking.status === 'upcoming' && (
                              <button className="px-3 py-1 border border-red-600 text-red-600 rounded-md text-sm hover:bg-red-50 whitespace-nowrap">
                                예약 취소
                              </button>
                            )}
                            {booking.status === 'completed' && (
                              <Link href={`/review/write/${booking.id}`}>
                                <button className="px-3 py-1 border border-green-600 text-green-600 rounded-md text-sm hover:bg-green-50 whitespace-nowrap">
                                  리뷰 작성
                                </button>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-xl font-medium mb-2">예약 내역이 없습니다</h3>
                    <p className="text-gray-500 mb-4">아직 NOL에서 예약한 숙소가 없습니다.</p>
                    <Link href="/search">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        숙소 둘러보기
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-6">내 리뷰</h2>
                
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <h3 className="text-xl font-medium mb-2">작성한 리뷰가 없습니다</h3>
                  <p className="text-gray-500 mb-4">숙소 이용 후 리뷰를 작성해 보세요.</p>
                </div>
              </div>
            )}
            
            {activeTab === 'points' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-6">포인트 내역</h2>
                
                <div className="bg-blue-50 rounded-lg p-4 flex justify-between items-center mb-6">
                  <span className="text-gray-700">사용 가능한 포인트</span>
                  <span className="text-2xl font-bold text-blue-600">{user.points.toLocaleString()} P</span>
                </div>
                
                <div className="border rounded-lg divide-y">
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">회원가입 축하 포인트</h3>
                      <p className="text-sm text-gray-500">2023.05.15</p>
                    </div>
                    <span className="font-medium text-blue-600">+5,000 P</span>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">첫 예약 보너스</h3>
                      <p className="text-sm text-gray-500">2023.05.20</p>
                    </div>
                    <span className="font-medium text-blue-600">+3,000 P</span>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">롯데호텔 서울 예약</h3>
                      <p className="text-sm text-gray-500">2023.12.20</p>
                    </div>
                    <span className="font-medium text-blue-600">+4,500 P</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 