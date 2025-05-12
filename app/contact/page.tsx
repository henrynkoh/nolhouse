'use client';

import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';

interface FormData {
  category: string;
  title: string;
  content: string;
  email: string;
  phone: string;
  agreeToTerms: boolean;
  attachments: File[];
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    category: '',
    title: '',
    content: '',
    email: '',
    phone: '',
    agreeToTerms: false,
    attachments: [],
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files);
      setFormData(prev => ({ ...prev, attachments: fileList }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend here
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    // Reset form after submission
    setFormData({
      category: '',
      title: '',
      content: '',
      email: '',
      phone: '',
      agreeToTerms: false,
      attachments: [],
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };
  
  const isFormValid = () => {
    return (
      formData.category !== '' &&
      formData.title.trim() !== '' &&
      formData.content.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.agreeToTerms
    );
  };
  
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">1:1 문의</h1>
        
        {showSuccess && (
          <div className="mb-8 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="font-medium">문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.</p>
            </div>
          </div>
        )}
        
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">문의하기 전에 확인해 주세요</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>자주 묻는 질문에서 원하는 답변을 찾지 못하셨나요? 문의 전에 <a href="/faq" className="text-blue-600 hover:underline">자주 묻는 질문</a>을 확인해 보세요.</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>접수된 문의는 영업일 기준 24시간 내에 답변을 드리고 있습니다.</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>긴급한 문의는 고객센터(1234-5678)로 전화 주시기 바랍니다.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">문의 유형 <span className="text-red-600">*</span></label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">선택해주세요</option>
                  <option value="reservation">예약 문의</option>
                  <option value="payment">결제 문의</option>
                  <option value="cancel">취소/환불 문의</option>
                  <option value="account">계정 문의</option>
                  <option value="technical">기술 문의</option>
                  <option value="suggestion">서비스 제안</option>
                  <option value="other">기타 문의</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">제목 <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="문의 제목을 입력해주세요"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">내용 <span className="text-red-600">*</span></label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="문의 내용을 자세히 입력해주세요"
                  required
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일 <span className="text-red-600">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="답변 받을 이메일을 입력해주세요"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="선택 사항입니다"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="attachments" className="block text-sm font-medium text-gray-700 mb-1">첨부 파일</label>
                <input
                  type="file"
                  id="attachments"
                  name="attachments"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  multiple
                />
                <p className="text-xs text-gray-500 mt-1">최대 3개, 파일당 5MB (jpg, png, pdf, doc, docx)</p>
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 mt-1"
                  required
                />
                <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
                  개인정보 수집 및 이용에 동의합니다. <span className="text-red-600">*</span>
                  <a href="/privacy" className="text-blue-600 hover:underline ml-1">개인정보처리방침</a>
                </label>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={!isFormValid()}
                  className={`w-full py-3 px-4 rounded-md font-medium ${
                    isFormValid()
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  문의하기
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
} 