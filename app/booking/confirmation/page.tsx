'use client';

import React from 'react';
import { MainLayout } from '../../../components/layout/MainLayout';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function BookingConfirmationPage() {
  const router = useRouter();
  
  // In a real app, this would be coming from the server or query parameters
  const confirmationDetails = {
    confirmationNumber: 'NOL-24072518',
    bookingDate: new Date().toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
    customerName: '김영희',
    customerEmail: 'younghee.kim@example.com',
    totalAmount: 1320000,
    paymentMethod: '신한카드 (****4567)',
    items: [
      {
        id: 'item1',
        accommodationName: '그랜드 하얏트 서울',
        roomType: '디럭스 킹룸',
        checkInDate: '2024년 7월 15일',
        checkOutDate: '2024년 7월 17일',
        guests: 2,
        nights: 2,
        price: 280000,
        totalPrice: 560000,
      },
      {
        id: 'item2',
        accommodationName: '파라다이스 호텔 부산',
        roomType: '오션뷰 스위트',
        checkInDate: '2024년 8월 10일',
        checkOutDate: '2024년 8월 13일',
        guests: 3,
        nights: 3,
        price: 350000,
        totalPrice: 1050000,
      },
    ],
  };

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-16 w-16 bg-green-100 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold mb-2">예약이 완료되었습니다!</h1>
            <p className="text-gray-600">확인 이메일이 {confirmationDetails.customerEmail}로 발송되었습니다.</p>
          </div>
          
          <div className="border rounded-lg overflow-hidden mb-6">
            <div className="bg-blue-600 text-white px-4 py-3">
              <h2 className="font-bold">예약 정보</h2>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">예약 번호</p>
                  <p className="font-bold">{confirmationDetails.confirmationNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">예약 일시</p>
                  <p>{confirmationDetails.bookingDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">예약자 성명</p>
                  <p>{confirmationDetails.customerName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">이메일</p>
                  <p>{confirmationDetails.customerEmail}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">결제 금액</p>
                  <p className="font-bold">₩{confirmationDetails.totalAmount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">결제 수단</p>
                  <p>{confirmationDetails.paymentMethod}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden mb-6">
            <div className="bg-blue-600 text-white px-4 py-3">
              <h2 className="font-bold">예약 상세 내역</h2>
            </div>
            <div className="divide-y">
              {confirmationDetails.items.map((item) => (
                <div key={item.id} className="p-4">
                  <h3 className="font-bold text-lg mb-2">{item.accommodationName}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                    <div>
                      <p className="text-sm text-gray-500">객실 타입</p>
                      <p>{item.roomType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">숙박 인원</p>
                      <p>{item.guests}명</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">체크인</p>
                      <p>{item.checkInDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">체크아웃</p>
                      <p>{item.checkOutDate}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t">
                    <div>
                      <p className="text-sm text-gray-500">1박 요금: ₩{item.price.toLocaleString()}</p>
                      <p className="text-sm text-gray-500">{item.nights}박 숙박</p>
                    </div>
                    <p className="font-bold">₩{item.totalPrice.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-bold mb-2">중요 정보</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>체크인은 오후 3시 이후, 체크아웃은 오전 11시까지입니다.</li>
              <li>예약 취소는 체크인 3일 전까지 100% 환불 가능합니다.</li>
              <li>체크인 시 본인 확인을 위해 신분증이 필요합니다.</li>
              <li>문의사항은 NOL 고객센터 (1234-5678)로 연락해 주세요.</li>
            </ul>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/user/account">
              <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                예약 내역 확인
              </button>
            </Link>
            <Link href="/">
              <button className="w-full md:w-auto px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50">
                홈으로 이동
              </button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 