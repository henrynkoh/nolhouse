"use client";

import React, { useState } from "react";
import Image from "next/image";

interface AccommodationDetailProps {
  id: string;
  name: string;
  description: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  discountRate?: number;
  originalPrice?: number;
  facilities: string[];
  images: string[];
  amenities: string[];
  roomTypes: {
    id: string;
    name: string;
    price: number;
    capacity: number;
    description: string;
    imageUrl: string;
  }[];
}

export const AccommodationDetail: React.FC<AccommodationDetailProps> = ({
  id,
  name,
  description,
  location,
  rating,
  reviewCount,
  price,
  discountRate,
  originalPrice,
  facilities,
  images,
  amenities,
  roomTypes,
}) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [selectedRoomType, setSelectedRoomType] = useState(roomTypes[0]?.id || "");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Left Column (Images and Details) */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" />
              </svg>
              <span className="ml-1 font-medium">{rating.toFixed(1)}</span>
            </div>
            <span className="text-gray-500">({reviewCount} 후기)</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">{location}</span>
          </div>

          {/* Main Image */}
          <div className="relative h-[400px] mb-2 rounded-lg overflow-hidden">
            <img src={selectedImage} alt={name} className="w-full h-full object-cover" />
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-5 gap-2 mb-8">
            {images.map((img, index) => (
              <div 
                key={index} 
                className={`relative h-20 rounded-md overflow-hidden cursor-pointer ${selectedImage === img ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`${name} ${index+1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">숙소 정보</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-bold mb-2">편의 시설</h3>
                <ul className="space-y-1">
                  {amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">시설</h3>
                <ul className="space-y-1">
                  {facilities.map((facility, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {facility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Room Types */}
          <div>
            <h2 className="text-xl font-bold mb-4">객실 타입</h2>
            <div className="space-y-4">
              {roomTypes.map((room) => (
                <div key={room.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="relative w-32 h-24 rounded-md overflow-hidden">
                      <img src={room.imageUrl} alt={room.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{room.name}</h3>
                      <p className="text-gray-700 text-sm mb-2">{room.description}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>최대 {room.capacity}인</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-bold text-lg">{room.price.toLocaleString()}원</span>
                      <span className="text-sm text-gray-500">1박</span>
                      <button 
                        className={`mt-2 px-4 py-2 rounded-md ${selectedRoomType === room.id ? 'bg-blue-600 text-white' : 'border border-blue-600 text-blue-600'}`}
                        onClick={() => setSelectedRoomType(room.id)}
                      >
                        {selectedRoomType === room.id ? '선택됨' : '선택하기'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Booking Form) */}
        <div className="md:col-span-1">
          <div className="sticky top-8 border rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">예약하기</h2>
            
            {originalPrice && (
              <div className="mb-4">
                <span className="text-lg line-through text-gray-400 block">{originalPrice.toLocaleString()}원</span>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">{price.toLocaleString()}원</span>
                  <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">
                    {discountRate}% 할인
                  </span>
                </div>
                <span className="text-sm text-gray-500">1박 기준</span>
              </div>
            )}
            
            {!originalPrice && (
              <div className="mb-4">
                <span className="text-2xl font-bold">{price.toLocaleString()}원</span>
                <span className="text-sm text-gray-500 block">1박 기준</span>
              </div>
            )}
            
            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">
                  체크인
                </label>
                <input
                  type="date"
                  id="check-in"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">
                  체크아웃
                </label>
                <input
                  type="date"
                  id="check-out"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                  인원
                </label>
                <select
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={1}>성인 1명</option>
                  <option value={2}>성인 2명</option>
                  <option value={3}>성인 3명</option>
                  <option value={4}>성인 4명</option>
                </select>
              </div>
            </div>
            
            <button
              className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              예약하기
            </button>
            
            <div className="mt-4 text-sm text-gray-500">
              지금 예약해도 취소 시 전액 환불됩니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationDetail; 