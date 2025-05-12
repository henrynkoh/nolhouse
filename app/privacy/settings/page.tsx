'use client';

import React from 'react';
import { MainLayout } from '../../../components/layout/MainLayout';

export default function PrivacySettingsPage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">개인정보취급방침</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <p className="text-gray-700 mb-4">
            NOL 주식회사(이하 "회사")는 이용자의 개인정보를 중요시하며, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 
            「개인정보 보호법」을 준수하기 위하여 노력하고 있습니다. 회사는 개인정보취급방침을 통하여 회사가 이용자로부터 
            수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 개인정보의 제3자 제공에 관한 사항을 
            알려드립니다.
          </p>
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. 수집하는 개인정보의 처리 목적</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                회사는 다음과 같은 목적으로 개인정보를 수집 및 이용합니다.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>회원 가입 및 관리</li>
                <li>서비스 제공 및 운영</li>
                <li>예약 및 결제 서비스</li>
                <li>맞춤형 서비스 제공</li>
                <li>마케팅 및 광고 활용</li>
                <li>서비스 개선 및 개발</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">2. 개인정보 수집 항목 및 방법</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">개인정보 수집 항목</h3>
              <div className="mb-4">
                <h4 className="font-medium mb-2">• 필수 정보</h4>
                <p className="text-gray-700 ml-4">- 이메일 주소, 비밀번호, 이름, 휴대폰 번호</p>
              </div>
              <div className="mb-4">
                <h4 className="font-medium mb-2">• 선택 정보</h4>
                <p className="text-gray-700 ml-4">- 생년월일, 성별, 프로필 이미지</p>
              </div>
              <div className="mb-4">
                <h4 className="font-medium mb-2">• 서비스 이용 과정에서 수집되는 정보</h4>
                <p className="text-gray-700 ml-4">- IP 주소, 쿠키, 방문 일시, 서비스 이용 기록, 불량 이용 기록</p>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 mt-6">개인정보 수집 방법</h3>
              <p className="text-gray-700 mb-2">회사는 다음과 같은 방법으로 개인정보를 수집합니다.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>홈페이지, 모바일 앱, 서면양식</li>
                <li>고객센터 문의, 이벤트 응모</li>
                <li>협력 회사로부터의 제공</li>
                <li>생성 정보 수집 툴을 통한 자동 수집</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">3. 개인정보의 보유 및 이용 기간</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                회사는 원칙적으로 이용자의 개인정보를 회원 탈퇴 시까지 보유합니다. 단, 관련 법령에 의하여 
                보존할 필요가 있는 경우 해당 기간 동안 보존합니다.
              </p>
              <div className="mb-4">
                <h4 className="font-medium mb-2">• 관련 법령에 따른 보존기간</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
                  <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
                  <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
                  <li>표시/광고에 관한 기록: 6개월</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">4. 개인정보의 제3자 제공</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>이용자가 사전에 동의한 경우</li>
                <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                <li>예약 및 서비스 이용을 위해 숙소, 항공사 등 파트너사에 제공이 필요한 경우</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">5. 개인정보 처리 위탁</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                회사는 서비스 향상을 위해 아래와 같이 개인정보 처리 업무를 위탁하고 있습니다.
              </p>
              <table className="w-full border-collapse border border-gray-300 mt-2">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">수탁업체</th>
                    <th className="border border-gray-300 p-2">위탁업무 내용</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">OO결제시스템</td>
                    <td className="border border-gray-300 p-2">결제 처리</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">OO클라우드</td>
                    <td className="border border-gray-300 p-2">고객 데이터 보관 및 빅데이터 분석</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">OO커뮤니케이션</td>
                    <td className="border border-gray-300 p-2">이메일, SMS 발송</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <p className="text-gray-700 font-medium">
            공고일자: 2024년 1월 1일<br/>
            시행일자: 2024년 1월 1일
          </p>
        </div>
      </div>
    </MainLayout>
  );
} 