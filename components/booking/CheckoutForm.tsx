"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface CheckoutFormProps {
  accommodationName: string;
  accommodationImage: string;
  roomType: string;
  checkInDate: string;
  checkOutDate: string;
  nights: number;
  guests: number;
  pricePerNight: number;
  totalPrice: number;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({
  accommodationName,
  accommodationImage,
  roomType,
  checkInDate,
  checkOutDate,
  nights,
  guests,
  pricePerNight,
  totalPrice,
}) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<'personal' | 'payment'>('personal');
  const [isLoading, setIsLoading] = useState(false);

  // Form state
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });
  
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === 'cardNumber') {
      // Remove all non-digits
      const cleaned = value.replace(/\D/g, '');
      // Add spaces after every 4 digits
      const formatted = cleaned.replace(/(\d{4})(?=\d)/g, '$1 ');
      // Limit to 19 characters (16 digits + 3 spaces)
      const limited = formatted.slice(0, 19);
      setPaymentInfo(prev => ({ ...prev, [name]: limited }));
    } 
    // Format expiry date as MM/YY
    else if (name === 'expiryDate') {
      // Remove all non-digits
      const cleaned = value.replace(/\D/g, '');
      // Add slash after month
      const formatted = cleaned.length > 2 
        ? `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`
        : cleaned;
      // Limit to 5 characters (MM/YY)
      const limited = formatted.slice(0, 5);
      setPaymentInfo(prev => ({ ...prev, [name]: limited }));
    }
    // Limit CVV to 3 or 4 digits
    else if (name === 'cvv') {
      const cleaned = value.replace(/\D/g, '');
      setPaymentInfo(prev => ({ ...prev, [name]: cleaned.slice(0, 4) }));
    }
    else {
      setPaymentInfo(prev => ({ ...prev, [name]: value }));
    }
  };

  const isPersonalInfoComplete = () => {
    return (
      personalInfo.firstName.trim() !== "" &&
      personalInfo.lastName.trim() !== "" &&
      personalInfo.email.trim() !== "" &&
      personalInfo.phone.trim() !== ""
    );
  };

  const isPaymentInfoComplete = () => {
    return (
      paymentInfo.cardNumber.replace(/\s/g, '').length === 16 &&
      paymentInfo.cardHolder.trim() !== "" &&
      paymentInfo.expiryDate.length === 5 &&
      paymentInfo.cvv.length >= 3
    );
  };

  const handleNextStep = () => {
    if (currentStep === 'personal' && isPersonalInfoComplete()) {
      setCurrentStep('payment');
    }
  };

  const handlePrevStep = () => {
    if (currentStep === 'payment') {
      setCurrentStep('personal');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isPaymentInfoComplete()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    try {
      // In a real app, you would send the booking data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // After successful booking, redirect to confirmation page
      router.push(`/booking/confirmation?id=${Date.now()}`);
    } catch (error) {
      console.error('Payment failed:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Left Column (Checkout Form) */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-6">예약 확인 및 결제</h1>
          
          <div className="mb-8">
            <div className="flex mb-4">
              <div className={`flex-1 pb-4 text-center font-medium ${currentStep === 'personal' ? 'border-b-2 border-blue-600 text-blue-600' : 'border-b text-gray-500'}`}>
                1. 예약자 정보
              </div>
              <div className={`flex-1 pb-4 text-center font-medium ${currentStep === 'payment' ? 'border-b-2 border-blue-600 text-blue-600' : 'border-b text-gray-500'}`}>
                2. 결제 정보
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {currentStep === 'personal' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        이름
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={personalInfo.firstName}
                        onChange={handlePersonalInfoChange}
                        className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        성
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={personalInfo.lastName}
                        onChange={handlePersonalInfoChange}
                        className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      이메일
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={personalInfo.email}
                      onChange={handlePersonalInfoChange}
                      className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      예약 확인서가 이 이메일로 전송됩니다.
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      전화번호
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={personalInfo.phone}
                      onChange={handlePersonalInfoChange}
                      className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      긴급 상황 시 연락 가능한 번호를 입력해주세요.
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                      특별 요청사항 (선택)
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={personalInfo.specialRequests}
                      onChange={handlePersonalInfoChange}
                      rows={3}
                      className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      숙소에 전달할 요청사항이 있다면 입력해주세요. (늦은 체크인, 층수 요청 등)
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      disabled={!isPersonalInfoComplete()}
                      className={`w-full py-3 font-medium rounded-md transition-colors ${isPersonalInfoComplete() ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    >
                      다음: 결제 정보
                    </button>
                  </div>
                </div>
              )}
              
              {currentStep === 'payment' && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      카드 번호
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={paymentInfo.cardNumber}
                      onChange={handlePaymentInfoChange}
                      placeholder="0000 0000 0000 0000"
                      className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cardHolder" className="block text-sm font-medium text-gray-700 mb-1">
                      카드 소유자 이름
                    </label>
                    <input
                      type="text"
                      id="cardHolder"
                      name="cardHolder"
                      value={paymentInfo.cardHolder}
                      onChange={handlePaymentInfoChange}
                      className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                        만료일 (MM/YY)
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={paymentInfo.expiryDate}
                        onChange={handlePaymentInfoChange}
                        placeholder="MM/YY"
                        className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                        CVV/CVC
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={paymentInfo.cvv}
                        onChange={handlePaymentInfoChange}
                        placeholder="123"
                        className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4 flex gap-4">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="flex-1 py-3 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 transition-colors"
                    >
                      이전
                    </button>
                    
                    <button
                      type="submit"
                      disabled={!isPaymentInfoComplete() || isLoading}
                      className={`flex-1 py-3 font-medium rounded-md transition-colors flex justify-center items-center ${isPaymentInfoComplete() && !isLoading ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          처리 중...
                        </>
                      ) : (
                        `${totalPrice.toLocaleString()}원 결제하기`
                      )}
                    </button>
                  </div>
                  
                  <div className="mt-4 text-xs text-gray-500 text-center">
                    <p>
                      "결제하기" 버튼을 클릭하면 당사의{" "}
                      <a href="#" className="text-blue-600 hover:underline">이용약관</a> 및{" "}
                      <a href="#" className="text-blue-600 hover:underline">개인정보 처리방침</a>에 동의하게 됩니다.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Right Column (Booking Summary) */}
        <div className="md:col-span-1">
          <div className="sticky top-8 border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 p-4 border-b">
              <h2 className="text-xl font-bold">예약 요약</h2>
            </div>
            
            <div className="p-4">
              <div className="flex gap-4 mb-4">
                <div className="relative w-24 h-20 rounded-md overflow-hidden">
                  <img 
                    src={accommodationImage} 
                    alt={accommodationName} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{accommodationName}</h3>
                  <p className="text-gray-600 text-sm">{roomType}</p>
                </div>
              </div>
              
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">체크인</span>
                  <span>{formatDate(checkInDate)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">체크아웃</span>
                  <span>{formatDate(checkOutDate)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">투숙 기간</span>
                  <span>{nights}박</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">인원</span>
                  <span>{guests}명</span>
                </div>
              </div>
              
              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">객실 요금</span>
                  <span>{pricePerNight.toLocaleString()}원 x {nights}박</span>
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
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm; 