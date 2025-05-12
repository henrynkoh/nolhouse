'use client';

import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';

export default function FlightSearchPage() {
  const [tripType, setTripType] = useState<'round' | 'oneway'>('round');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [cabinClass, setCabinClass] = useState('economy');
  
  // Popular destinations
  const popularDestinations = [
    { code: 'ICN', name: '인천', country: '대한민국' },
    { code: 'NRT', name: '도쿄', country: '일본' },
    { code: 'HKG', name: '홍콩', country: '홍콩' },
    { code: 'BKK', name: '방콕', country: '태국' },
    { code: 'TPE', name: '타이페이', country: '대만' },
    { code: 'LAX', name: '로스앤젤레스', country: '미국' },
    { code: 'JFK', name: '뉴욕', country: '미국' },
    { code: 'SIN', name: '싱가포르', country: '싱가포르' },
    { code: 'CDG', name: '파리', country: '프랑스' },
    { code: 'LHR', name: '런던', country: '영국' },
  ];
  
  // Format date for input min attribute
  const today = new Date();
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert('항공권 검색 기능은 준비 중입니다.');
  };
  
  const handleDestinationSelect = (code: string, name: string) => {
    setDestination(name);
  };
  
  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">항공권 최저가 검색</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex space-x-6 mb-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  checked={tripType === 'round'}
                  onChange={() => setTripType('round')}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="ml-2">왕복</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  checked={tripType === 'oneway'}
                  onChange={() => setTripType('oneway')}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="ml-2">편도</span>
              </label>
            </div>
            
            <form onSubmit={handleSearch}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">출발지</label>
                  <input
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="도시 또는 공항"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">도착지</label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="도시 또는 공항"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">가는 날</label>
                  <input
                    type="date"
                    value={departureDate}
                    min={formatDate(today)}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">오는 날</label>
                  <input
                    type="date"
                    value={returnDate}
                    min={departureDate || formatDate(today)}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={tripType === 'oneway'}
                    required={tripType === 'round'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">승객</label>
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                      <option key={num} value={num}>{num}명</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">좌석 등급</label>
                  <select
                    value={cabinClass}
                    onChange={(e) => setCabinClass(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="economy">일반석</option>
                    <option value="premium">프리미엄 일반석</option>
                    <option value="business">비즈니스석</option>
                    <option value="first">일등석</option>
                  </select>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full md:w-auto md:px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
              >
                항공권 검색
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">인기 여행지</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {popularDestinations.map((dest) => (
            <div
              key={dest.code}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleDestinationSelect(dest.code, dest.name)}
            >
              <div className="h-32 bg-gray-300 relative">
                <img
                  src={`https://source.unsplash.com/300x300/?${dest.name},travel`}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white font-bold">{dest.name}</p>
                  <p className="text-white text-sm">{dest.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">특가 항공권</h2>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-medium mb-3">7월 국내선 특가</h3>
            <p className="text-gray-700 mb-4">7월 한 달간 제주도 왕복 항공권 35% 할인 프로모션</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              자세히 보기
            </button>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">여름 휴가 해외 특가</h3>
            <p className="text-gray-700 mb-4">일본, 동남아, 유럽 등 인기 여행지 최대 23% 할인</p>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              자세히 보기
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 