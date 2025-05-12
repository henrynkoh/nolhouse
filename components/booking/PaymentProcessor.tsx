"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BookingDetails, PaymentInfo } from "../../types";

interface PaymentStatus {
  status: 'idle' | 'processing' | 'success' | 'error';
  message?: string;
}

interface PaymentProcessorProps {
  bookingDetails: Omit<BookingDetails, 'id' | 'status' | 'createdAt' | 'paymentInfo'>;
  onSuccess: (bookingId: string) => void;
  onError: (message: string) => void;
}

export const PaymentProcessor: React.FC<PaymentProcessorProps> = ({
  bookingDetails,
  onSuccess,
  onError,
}) => {
  const router = useRouter();
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });
  const [status, setStatus] = useState<PaymentStatus>({ status: 'idle' });
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'cardNumber') {
      // Format card number with spaces
      const cleaned = value.replace(/\D/g, '');
      const formatted = cleaned.replace(/(\d{4})(?=\d)/g, '$1 ');
      setPaymentInfo(prev => ({ ...prev, [name]: formatted.substring(0, 19) }));
    } 
    else if (name === 'expiryDate') {
      // Format expiry date as MM/YY
      const cleaned = value.replace(/\D/g, '');
      let formatted = cleaned;
      
      if (cleaned.length > 2) {
        formatted = `${cleaned.substring(0, 2)}/${cleaned.substring(2, 4)}`;
      }
      
      setPaymentInfo(prev => ({ ...prev, [name]: formatted.substring(0, 5) }));
    }
    else if (name === 'cvv') {
      // Only allow 3-4 digits for CVV
      const cleaned = value.replace(/\D/g, '');
      setPaymentInfo(prev => ({ ...prev, [name]: cleaned.substring(0, 4) }));
    }
    else {
      setPaymentInfo(prev => ({ ...prev, [name]: value }));
    }
  };

  const validatePaymentInfo = (): boolean => {
    // Basic validation
    if (
      paymentInfo.cardNumber.replace(/\s/g, '').length < 16 ||
      !paymentInfo.cardHolder ||
      paymentInfo.expiryDate.length < 5 ||
      paymentInfo.cvv.length < 3 ||
      !termsAccepted
    ) {
      return false;
    }
    
    // Additional validation could be added here (Luhn algorithm, expiry date validation, etc.)
    return true;
  };

  const processPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePaymentInfo()) {
      setStatus({
        status: 'error',
        message: '결제 정보를 모두 올바르게 입력해주세요.'
      });
      return;
    }
    
    setStatus({ status: 'processing' });
    
    try {
      // In a real application, this would be an API call to your payment processor
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate a booking ID (would normally come from the backend)
      const bookingId = `BK${Date.now()}`;
      
      // Simulate successful payment
      setStatus({
        status: 'success',
        message: '결제가 성공적으로 처리되었습니다.'
      });
      
      // Call the success callback with the booking ID
      onSuccess(bookingId);
    } catch (error) {
      setStatus({
        status: 'error',
        message: '결제 처리 중 오류가 발생했습니다. 다시 시도해주세요.'
      });
      
      // Call the error callback
      onError('결제 처리 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">결제 정보</h2>
        
        {status.status === 'error' && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
            {status.message}
          </div>
        )}
        
        {status.status === 'success' && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md">
            {status.message}
          </div>
        )}
        
        <form onSubmit={processPayment}>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
              카드 번호
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="0000 0000 0000 0000"
              value={paymentInfo.cardNumber}
              onChange={handleInputChange}
              className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={status.status === 'processing'}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="cardHolder" className="block text-sm font-medium text-gray-700 mb-1">
              카드 소유자
            </label>
            <input
              type="text"
              id="cardHolder"
              name="cardHolder"
              placeholder="홍길동"
              value={paymentInfo.cardHolder}
              onChange={handleInputChange}
              className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={status.status === 'processing'}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                유효기간 (MM/YY)
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                value={paymentInfo.expiryDate}
                onChange={handleInputChange}
                className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={status.status === 'processing'}
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
                placeholder="123"
                value={paymentInfo.cvv}
                onChange={handleInputChange}
                className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={status.status === 'processing'}
                required
              />
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="termsAccepted"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className="mt-1 mr-2"
                disabled={status.status === 'processing'}
                required
              />
              <label htmlFor="termsAccepted" className="text-sm text-gray-600">
                본인은 결제 진행에 동의하며, <a href="#" className="text-blue-600 hover:underline">이용약관</a>과 <a href="#" className="text-blue-600 hover:underline">개인정보 처리방침</a>을 읽고 이해했습니다.
              </label>
            </div>
          </div>
          
          <div className="mt-6">
            <button
              type="submit"
              disabled={status.status === 'processing' || status.status === 'success'}
              className={`w-full py-3 font-medium rounded-md flex justify-center items-center ${
                status.status === 'processing' || status.status === 'success'
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {status.status === 'processing' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  결제 처리 중...
                </>
              ) : status.status === 'success' ? (
                '결제 완료'
              ) : (
                `${bookingDetails.totalPrice.toLocaleString()}원 결제하기`
              )}
            </button>
          </div>
        </form>
        
        <div className="mt-6 pt-6 border-t">
          <h3 className="font-medium mb-2">안전한 결제</h3>
          <p className="text-sm text-gray-600 mb-2">
            모든 거래는 SSL 암호화되어 안전하게 처리됩니다. 카드 정보는 저장되지 않으며, 결제 시에만 사용됩니다.
          </p>
          <div className="flex items-center gap-2">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/visa-logo.png" alt="Visa" className="h-8" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/mastercard-logo.png" alt="Mastercard" className="h-8" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/amex-logo.png" alt="American Express" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcessor; 