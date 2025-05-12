'use client';

import React, { useState } from 'react';
import { MainLayout } from '../../../components/layout/MainLayout';
import { useRouter } from 'next/navigation';

interface PaymentMethod {
  id: string;
  name: string;
  last4?: string;
  icon: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'info' | 'payment' | 'review'>('info');
  
  // Form values
  const [firstName, setFirstName] = useState('김');
  const [lastName, setLastName] = useState('영희');
  const [email, setEmail] = useState('younghee.kim@example.com');
  const [phone, setPhone] = useState('010-1234-5678');
  const [specialRequests, setSpecialRequests] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('card1');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  // Sample cart items for checkout summary
  const checkoutItems = [
    {
      id: 'item1',
      accommodationName: '그랜드 하얏트 서울',
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
      roomType: '오션뷰 스위트',
      checkInDate: '2024-08-10',
      checkOutDate: '2024-08-13',
      guests: 3,
      price: 350000,
      nights: 3,
    },
  ];
  
  // Available payment methods
  const paymentMethods: PaymentMethod[] = [
    {
      id: 'card1',
      name: '신한카드',
      last4: '4567',
      icon: '💳',
    },
    {
      id: 'card2',
      name: '삼성카드',
      last4: '9012',
      icon: '💳',
    },
    {
      id: 'bank',
      name: '무통장 입금',
      icon: '🏦',
    },
  ];
  
  // Calculate totals
  const subtotal = checkoutItems.reduce((sum, item) => sum + (item.price * item.nights), 0);
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
  
  const handleContinue = () => {
    if (step === 'info') {
      setStep('payment');
    } else if (step === 'payment') {
      setStep('review');
    } else if (step === 'review') {
      handleSubmitOrder();
    }
  };
  
  const handleBack = () => {
    if (step === 'payment') {
      setStep('info');
    } else if (step === 'review') {
      setStep('payment');
    }
  };
  
  const handleSubmitOrder = () => {
    if (!agreedToTerms) {
      alert('이용약관에 동의해주세요.');
      return;
    }
    
    setLoading(true);
    
    // Simulate API call to create order
    setTimeout(() => {
      setLoading(false);
      router.push('/booking/confirmation');
    }, 1500);
  };
  
  const isInfoStepValid = () => {
    return firstName.trim() !== '' && 
           lastName.trim() !== '' && 
           email.trim() !== '' && 
           phone.trim() !== '';
  };
  
  const isPaymentStepValid = () => {
    return selectedPaymentMethod !== '';
  };
  
  const isReviewStepValid = () => {
    return agreedToTerms;
  };
  
  const isCurrentStepValid = () => {
    if (step === 'info') return isInfoStepValid();
    if (step === 'payment') return isPaymentStepValid();
    if (step === 'review') return isReviewStepValid();
    return false;
  };
  
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">예약 결제</h1>
        
        {/* Progress steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div className={`rounded-full h-8 w-8 flex items-center justify-center ${step === 'info' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}>1</div>
            <span className={`ml-2 ${step === 'info' ? 'font-semibold' : ''}`}>예약자 정보</span>
          </div>
          <div className="h-px w-12 bg-gray-300 mx-4"></div>
          <div className="flex items-center">
            <div className={`rounded-full h-8 w-8 flex items-center justify-center ${step === 'payment' ? 'bg-blue-600 text-white' : step === 'review' ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'}`}>2</div>
            <span className={`ml-2 ${step === 'payment' ? 'font-semibold' : ''}`}>결제 정보</span>
          </div>
          <div className="h-px w-12 bg-gray-300 mx-4"></div>
          <div className="flex items-center">
            <div className={`rounded-full h-8 w-8 flex items-center justify-center ${step === 'review' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>3</div>
            <span className={`ml-2 ${step === 'review' ? 'font-semibold' : ''}`}>최종 확인</span>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              {step === 'info' && (
                <div>
                  <h2 className="text-xl font-bold mb-4">예약자 정보</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">성</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">전화번호</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">특별 요청사항 (선택)</label>
                    <textarea
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                    ></textarea>
                  </div>
                </div>
              )}
              
              {step === 'payment' && (
                <div>
                  <h2 className="text-xl font-bold mb-4">결제 정보</h2>
                  <div className="space-y-3 mb-4">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="border rounded-md p-3">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method.id}
                            checked={selectedPaymentMethod === method.id}
                            onChange={() => setSelectedPaymentMethod(method.id)}
                            className="h-5 w-5 text-blue-600"
                          />
                          <span className="ml-2 flex items-center">
                            <span className="mr-2 text-2xl">{method.icon}</span>
                            <span>
                              {method.name}
                              {method.last4 && <span className="text-sm text-gray-500 ml-1">****{method.last4}</span>}
                            </span>
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
                      결제 수단 추가하기
                    </button>
                  </div>
                </div>
              )}
              
              {step === 'review' && (
                <div>
                  <h2 className="text-xl font-bold mb-4">예약 정보 확인</h2>
                  
                  <div className="space-y-6 mb-6">
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">예약자 정보</h3>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <p><span className="text-gray-500">이름:</span> {lastName}{firstName}</p>
                        <p><span className="text-gray-500">이메일:</span> {email}</p>
                        <p><span className="text-gray-500">전화번호:</span> {phone}</p>
                        {specialRequests && (
                          <p><span className="text-gray-500">특별 요청사항:</span> {specialRequests}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">결제 수단</h3>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <p>
                          {paymentMethods.find(m => m.id === selectedPaymentMethod)?.icon} {paymentMethods.find(m => m.id === selectedPaymentMethod)?.name}
                          {paymentMethods.find(m => m.id === selectedPaymentMethod)?.last4 && 
                            <span> (****{paymentMethods.find(m => m.id === selectedPaymentMethod)?.last4})</span>
                          }
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">예약 상품</h3>
                      <div className="bg-gray-50 p-3 rounded-md space-y-3">
                        {checkoutItems.map((item, index) => (
                          <div key={item.id} className={index !== 0 ? "pt-3 border-t" : ""}>
                            <p className="font-medium">{item.accommodationName} - {item.roomType}</p>
                            <p>{formatDate(item.checkInDate)} ~ {formatDate(item.checkOutDate)} ({item.nights}박)</p>
                            <p>인원: {item.guests}명</p>
                            <p className="font-medium mt-1">
                              {item.price.toLocaleString()}원 x {item.nights}박 = {(item.price * item.nights).toLocaleString()}원
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={() => setAgreedToTerms(!agreedToTerms)}
                        className="h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2">
                        이용약관, 개인정보 수집 및 이용, 결제 진행 동의 
                        <a href="#" className="text-blue-600 underline ml-1">상세보기</a>
                      </span>
                    </label>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex justify-between">
              {step !== 'info' ? (
                <button
                  onClick={handleBack}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
                >
                  이전 단계
                </button>
              ) : (
                <div></div> // empty div to maintain flex spacing
              )}
              
              <button
                onClick={handleContinue}
                disabled={!isCurrentStepValid() || loading}
                className={`px-6 py-3 rounded-lg font-medium ${isCurrentStepValid() ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    처리 중...
                  </span>
                ) : (
                  step === 'review' ? '결제하기' : '다음 단계'
                )}
              </button>
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4">예약 요약</h2>
              
              <div className="space-y-4 mb-6">
                {checkoutItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <p className="font-medium">{item.accommodationName}</p>
                      <p className="text-sm text-gray-500">{item.roomType}</p>
                      <p className="text-sm text-gray-500">
                        {formatDate(item.checkInDate)} ~ {formatDate(item.checkOutDate)} ({item.nights}박)
                      </p>
                    </div>
                    <p className="font-medium">₩{(item.price * item.nights).toLocaleString()}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">소계</span>
                  <span>₩{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">세금 (10%)</span>
                  <span>₩{tax.toLocaleString()}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>총 결제금액</span>
                    <span>₩{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 