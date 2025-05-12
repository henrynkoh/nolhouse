"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface BookingConfirmationProps {
  bookingId: string;
  accommodationName: string;
  accommodationImage: string;
  roomType: string;
  checkInDate: string;
  checkOutDate: string;
  nights: number;
  guests: number;
  pricePerNight: number;
  totalPrice: number;
  userName: string;
  userEmail: string;
  userPhone: string;
}

export const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  bookingId,
  accommodationName,
  accommodationImage,
  roomType,
  checkInDate,
  checkOutDate,
  nights,
  guests,
  pricePerNight,
  totalPrice,
  userName,
  userEmail,
  userPhone,
}) => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-green-50 rounded-lg p-6 mb-8 flex items-center">
        <div className="mr-4 bg-green-100 rounded-full p-3">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-green-800 mb-1">예약이 완료되었습니다!</h1>
          <p className="text-green-700">예약 확인 이메일이 {userEmail}로 발송되었습니다.</p>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden shadow-sm mb-8">
        <div className="bg-gray-50 p-4 border-b">
          <h2 className="text-xl font-bold">예약 정보</h2>
          <p className="text-gray-500">예약번호: {bookingId}</p>
        </div>

        <div className="p-6">
          <div className="flex gap-4 mb-6">
            <div className="relative w-32 h-24 rounded-md overflow-hidden">
              <img 
                src={accommodationImage} 
                alt={accommodationName} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">{accommodationName}</h3>
              <p className="text-gray-600">{roomType}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-sm text-gray-500 mb-1">체크인</h4>
              <p className="font-medium">{formatDate(checkInDate)}</p>
              <p className="text-gray-600">15:00 이후</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 mb-1">체크아웃</h4>
              <p className="font-medium">{formatDate(checkOutDate)}</p>
              <p className="text-gray-600">11:00 이전</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-sm text-gray-500 mb-1">투숙 정보</h4>
            <p className="font-medium">{nights}박 • 성인 {guests}명</p>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-bold mb-2">가격 세부 정보</h4>
            <div className="flex justify-between mb-1">
              <span className="text-gray-600">{pricePerNight.toLocaleString()}원 x {nights}박</span>
              <span>{(pricePerNight * nights).toLocaleString()}원</span>
            </div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-600">세금 및 수수료</span>
              <span>{(totalPrice - (pricePerNight * nights)).toLocaleString()}원</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t">
              <span>총 금액</span>
              <span>{totalPrice.toLocaleString()}원</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden shadow-sm mb-8">
        <div className="bg-gray-50 p-4 border-b">
          <h2 className="text-xl font-bold">예약자 정보</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm text-gray-500 mb-1">이름</h4>
              <p className="font-medium">{userName}</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 mb-1">이메일</h4>
              <p className="font-medium">{userEmail}</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 mb-1">전화번호</h4>
              <p className="font-medium">{userPhone}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden shadow-sm mb-8">
        <div 
          className="bg-gray-50 p-4 border-b flex justify-between items-center cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h2 className="text-xl font-bold">숙소 이용 안내</h2>
          <svg 
            className={`w-5 h-5 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        
        {isExpanded && (
          <div className="p-6">
            <div className="mb-4">
              <h3 className="font-bold mb-2">체크인/체크아웃 안내</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>체크인: 15:00 이후</li>
                <li>체크아웃: 11:00 이전</li>
                <li>프론트 데스크 24시간 운영</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="font-bold mb-2">예약 변경 및 취소 규정</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>체크인 3일 전까지: 전액 환불</li>
                <li>체크인 1-2일 전: 50% 환불</li>
                <li>체크인 당일 및 노쇼: 환불 불가</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">유의사항</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>전 객실 금연</li>
                <li>반려동물 동반 불가</li>
                <li>객실 내 취사 금지</li>
                <li>추가 인원 발생 시 현장에서 추가 요금이 발생할 수 있습니다.</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <button 
          onClick={() => router.push('/')}
          className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors"
        >
          홈으로 돌아가기
        </button>
        
        <button 
          onClick={() => window.print()}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
          </svg>
          예약 내역 인쇄
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation; 