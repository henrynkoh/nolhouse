'use client';

import React, { useState } from 'react';
import { MainLayout } from '../../../components/layout/MainLayout';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface RoomType {
  id: string;
  name: string;
  description: string;
  maxGuests: number;
  price: number;
  amenities: string[];
  images: string[];
}

export default function AccommodationDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [selectedDates, setSelectedDates] = useState<{ checkIn: string; checkOut: string }>({
    checkIn: '',
    checkOut: '',
  });
  const [guests, setGuests] = useState<number>(2);
  
  // Mock data for the accommodation
  // In a real app, this would come from an API call using the params.id
  const accommodation = {
    id: params.id,
    name: '그랜드 하얏트 서울',
    location: '서울 용산구 소월로 322',
    description: '남산에 위치한 그랜드 하얏트 서울은 서울 도심의 탁 트인 전망과 함께 최고급 서비스와 시설을 제공합니다. 시내 중심에 위치해 있어 비즈니스와 레저 모두에 편리한 접근성을 자랑합니다.',
    rating: 4.8,
    reviewCount: 832,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      'https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    ],
    amenities: ['수영장', '피트니스 센터', '사우나', '레스토랑', '바/라운지', '룸서비스', '주차', '컨시어지', '비즈니스 센터'],
    rooms: [
      {
        id: 'room1',
        name: '디럭스 킹룸',
        description: '킹사이즈 침대 1개가 있는 넓은 객실로, 도시의 전망을 감상할 수 있습니다.',
        maxGuests: 2,
        price: 280000,
        amenities: ['킹 사이즈 침대', '무료 와이파이', '미니바', '욕조', '샤워 부스', '평면 TV', '에어컨', '금고'],
        images: [
          'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
          'https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2358&q=80',
        ],
      },
      {
        id: 'room2',
        name: '그랜드 스위트',
        description: '거실과 침실이 분리된 넓은 스위트룸으로, 프라이빗한 공간에서 도시 전망을 즐길 수 있습니다.',
        maxGuests: 4,
        price: 550000,
        amenities: ['킹 사이즈 침대', '거실', '다이닝 공간', '무료 와이파이', '미니바', '욕조', '샤워 부스', '평면 TV', '에어컨', '금고', '드레싱 룸'],
        images: [
          'https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
          'https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        ],
      },
      {
        id: 'room3',
        name: '트윈 룸',
        description: '싱글 침대 2개가 있는 객실로, 도시의 전망을 감상할 수 있습니다.',
        maxGuests: 2,
        price: 260000,
        amenities: ['싱글 침대 2개', '무료 와이파이', '미니바', '욕조', '샤워 부스', '평면 TV', '에어컨', '금고'],
        images: [
          'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2374&q=80',
          'https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        ],
      },
    ],
  };
  
  // Format date for input min attribute
  const today = new Date();
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  const handleBookNow = (roomId: string) => {
    if (!selectedDates.checkIn || !selectedDates.checkOut) {
      alert('체크인/체크아웃 날짜를 선택해주세요.');
      return;
    }
    
    const selectedRoom = accommodation.rooms.find(room => room.id === roomId);
    if (!selectedRoom) return;
    
    // In a real app, this would add the room to cart or navigate to checkout with details
    // For demo, we'll just navigate to cart
    router.push('/cart');
  };
  
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {accommodation.images.map((img, index) => (
            <div key={index} className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}>
              <img 
                src={img} 
                alt={`${accommodation.name} - ${index + 1}`} 
                className="w-full h-full object-cover rounded-lg"
                style={{ maxHeight: index === 0 ? '500px' : '250px' }}
              />
            </div>
          ))}
        </div>
        
        {/* Accommodation details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-2">{accommodation.name}</h1>
            <p className="text-gray-600 mb-4">{accommodation.location}</p>
            
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="font-medium">{accommodation.rating}</span>
              <span className="text-gray-500 ml-1">({accommodation.reviewCount} 리뷰)</span>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">소개</h2>
              <p className="text-gray-700">{accommodation.description}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">편의 시설</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {accommodation.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
              <h2 className="text-xl font-bold mb-4">예약하기</h2>
              
              <div className="space-y-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">체크인</label>
                  <input
                    type="date"
                    min={formatDate(today)}
                    value={selectedDates.checkIn}
                    onChange={(e) => setSelectedDates({ ...selectedDates, checkIn: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">체크아웃</label>
                  <input
                    type="date"
                    min={selectedDates.checkIn || formatDate(today)}
                    value={selectedDates.checkOut}
                    onChange={(e) => setSelectedDates({ ...selectedDates, checkOut: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">인원</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>{num}명</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-2">객실과 날짜를 선택하시면 가격이 표시됩니다.</p>
              
              <button
                onClick={() => selectedRoomId && handleBookNow(selectedRoomId)}
                disabled={!selectedRoomId || !selectedDates.checkIn || !selectedDates.checkOut}
                className={`w-full py-3 rounded-lg font-medium ${
                  selectedRoomId && selectedDates.checkIn && selectedDates.checkOut
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                예약하기
              </button>
            </div>
          </div>
        </div>
        
        {/* Room options */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">객실 선택</h2>
          
          <div className="space-y-6">
            {accommodation.rooms.map((room) => (
              <div key={room.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img
                      src={room.images[0]}
                      alt={room.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">{room.name}</h3>
                    <p className="text-gray-700 mb-3">{room.description}</p>
                    
                    <div className="mb-3">
                      <span className="text-sm text-gray-600">최대 {room.maxGuests}인</span>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="font-medium mb-1">편의 시설</h4>
                      <div className="flex flex-wrap gap-2">
                        {room.amenities.slice(0, 5).map((amenity, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {amenity}
                          </span>
                        ))}
                        {room.amenities.length > 5 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{room.amenities.length - 5}개 더보기
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div>
                        <p className="text-2xl font-bold">₩{room.price.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">1박 기준 (세금 별도)</p>
                      </div>
                      
                      <button
                        onClick={() => setSelectedRoomId(room.id)}
                        className={`px-6 py-2 rounded-lg ${
                          selectedRoomId === room.id
                            ? 'bg-blue-600 text-white'
                            : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        {selectedRoomId === room.id ? '선택됨' : '선택하기'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Reviews */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">리뷰</h2>
            <span className="text-gray-600">{accommodation.reviewCount}개 리뷰</span>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold mr-2">{accommodation.rating}</span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${i < Math.floor(accommodation.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <Link href="#reviews">
              <button className="w-full py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                모든 리뷰 보기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 