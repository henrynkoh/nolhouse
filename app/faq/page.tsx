'use client';

import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeItemId, setActiveItemId] = useState<number | null>(null);
  
  const toggleItem = (id: number) => {
    setActiveItemId(activeItemId === id ? null : id);
  };
  
  const faqItems: FaqItem[] = [
    {
      question: '예약 취소는 어떻게 하나요?',
      answer: '예약 취소는 [마이페이지 > 예약 내역]에서 가능합니다. 취소 수수료는 각 숙소별 취소 정책에 따라 다르며, 예약 시 안내된 취소 정책을 참고해 주시기 바랍니다. 체크인 날짜가 임박한 경우 취소 수수료가 발생할 수 있으니 유의하시기 바랍니다.',
      category: '예약 및 결제',
    },
    {
      question: '결제 방법은 어떤 것이 있나요?',
      answer: 'NOL에서는 신용카드, 체크카드, 계좌이체, 무통장입금, 페이 서비스(카카오페이, 네이버페이, 페이코) 등 다양한 결제 방법을 제공하고 있습니다. 결제 시 원하시는 방법을 선택하시면 됩니다.',
      category: '예약 및 결제',
    },
    {
      question: '회원가입은 어떻게 하나요?',
      answer: '회원가입은 NOL 웹사이트 또는 앱에서 [회원가입] 버튼을 클릭하여 진행할 수 있습니다. 이메일 주소, 비밀번호, 이름, 휴대폰 번호 등을 입력하시면 간단하게 가입이 완료됩니다. 소셜 계정(카카오, 네이버, 구글)을 통한 간편 가입도 가능합니다.',
      category: '회원 정보',
    },
    {
      question: '비밀번호를 잊어버렸어요.',
      answer: '로그인 페이지에서 [비밀번호 찾기] 버튼을 클릭하여 가입 시 등록한 이메일 주소를 입력하시면, 비밀번호 재설정 링크가 포함된 이메일을 보내드립니다. 이메일 수신이 안 되는 경우 스팸 메일함을 확인해 보시거나 고객센터로 문의해 주세요.',
      category: '회원 정보',
    },
    {
      question: 'NOL 포인트는 어떻게 적립되나요?',
      answer: 'NOL 포인트는 예약 완료 후 숙박 이용이 완료된 시점에 적립됩니다. 기본 적립률은 결제 금액의 1%이며, 회원 등급에 따라 적립률이 달라질 수 있습니다. 또한 이벤트, 프로모션 참여 시에도 추가 포인트가 적립될 수 있습니다.',
      category: '포인트 및 혜택',
    },
    {
      question: '적립된 포인트는 어떻게 사용하나요?',
      answer: '적립된 포인트는 예약 시 결제 수단으로 사용 가능합니다. 결제 페이지에서 [포인트 사용] 항목에 사용할 포인트 금액을 입력하시면 됩니다. 포인트는 1포인트부터 1원 단위로 현금처럼 사용 가능합니다.',
      category: '포인트 및 혜택',
    },
    {
      question: '숙소 이용 중 불편사항이 있으면 어떻게 하나요?',
      answer: '숙소 이용 중 불편사항은 먼저 해당 숙소의 프론트 데스크나 담당자에게 문의해 주시는 것이 가장 빠른 해결 방법입니다. 추가적인 도움이 필요하시면 NOL 고객센터(1234-5678)로 연락 주시거나, 앱/웹사이트의 [1:1 문의하기]를 통해 문의해 주세요.',
      category: '이용 문의',
    },
    {
      question: '예약 확인서는 어디서 출력하나요?',
      answer: '예약 확인서는 [마이페이지 > 예약 내역]에서 해당 예약을 선택한 후 [예약 확인서 인쇄] 버튼을 클릭하여 출력하실 수 있습니다. 또한 예약 완료 시 발송되는 이메일에도 예약 확인 정보가 포함되어 있습니다.',
      category: '예약 및 결제',
    },
  ];
  
  const categories = ['all', ...Array.from(new Set(faqItems.map(item => item.category)))];
  
  const filteredItems = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);
  
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">자주 묻는 질문</h1>
        
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? '전체' : category}
            </button>
          ))}
        </div>
        
        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <span className="text-blue-600 font-bold mr-3">Q</span>
                  <span className="font-medium">{item.question}</span>
                </div>
                <svg 
                  className={`w-5 h-5 transition-transform ${activeItemId === index ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeItemId === index && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex">
                    <span className="text-red-600 font-bold mr-3">A</span>
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* More Help Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">더 궁금한 점이 있으신가요?</h2>
          <p className="text-gray-700 mb-4">찾으시는 답변이 없다면 아래 방법으로 문의해 주세요.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
            >
              1:1 문의하기
            </a>
            <a 
              href="tel:1234-5678" 
              className="inline-block px-6 py-3 border border-gray-300 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-50"
            >
              고객센터 전화하기 (1234-5678)
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 