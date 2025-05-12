'use client';

import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';

export default function TermsPage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">이용약관</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <p className="text-gray-700 mb-4">
            NOL 서비스 이용약관(이하 "약관")은 NOL 주식회사(이하 "회사")가 제공하는 모든 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 
            책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
          </p>
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">제1조 (목적)</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700">
                이 약관은 회사가 제공하는 서비스(이하 "서비스")를 이용함에 있어 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">제2조 (정의)</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                <li>"서비스"란 회사가 제공하는 모든 서비스를 의미합니다.</li>
                <li>"이용자"란 이 약관에 따라 회사가 제공하는 서비스를 이용하는 회원 및 비회원을 말합니다.</li>
                <li>"회원"이란 회사에 개인정보를 제공하고 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.</li>
                <li>"비회원"이란 회원에 가입하지 않고 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
                <li>"아이디(ID)"란 회원의 식별과 서비스 이용을 위하여 회원이 설정하고 회사가 승인하는 문자와 숫자의 조합을 말합니다.</li>
                <li>"비밀번호"란 회원의 개인정보 보호를 위하여 회원 자신이 설정한 문자와 숫자의 조합을 말합니다.</li>
                <li>"게시물"이란 이용자가 서비스를 이용함에 있어 서비스 상에 게시한 부호, 문자, 음성, 음향, 화상, 동영상 등의 정보 형태의 글, 사진, 동영상 및 각종 파일과 링크 등을 말합니다.</li>
              </ol>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">제3조 (약관의 게시와 개정)</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                <li>회사는 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소, 전화번호, 전자우편주소, 사업자등록번호, 통신판매업 신고번호, 개인정보관리책임자 등을 이용자가 쉽게 알 수 있도록 회사의 초기 서비스 화면에 게시합니다.</li>
                <li>회사는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「소비자기본법」 등 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</li>
                <li>회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 서비스 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.</li>
                <li>회원은 개정된 약관에 동의하지 않을 경우 회원 탈퇴를 요청할 수 있으며, 개정된 약관의 효력 발생일로부터 7일 이후에도 거부의사를 표시하지 않고 서비스를 계속 이용할 경우 약관의 변경 사항에 동의한 것으로 간주됩니다.</li>
              </ol>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">제4조 (서비스의 제공 및 변경)</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                <li>회사는 다음과 같은 서비스를 제공합니다.
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>숙박 시설 정보 제공 및 예약 서비스</li>
                    <li>항공권 정보 제공 및 예약 서비스</li>
                    <li>여행 관련 정보 제공 서비스</li>
                    <li>기타 회사가 정하는 서비스</li>
                  </ul>
                </li>
                <li>회사는 서비스의 내용 및 제공일자를 제공 일자 이전에 웹사이트 또는 앱 등을 통하여 공지합니다.</li>
                <li>회사는 서비스 변경 시 변경될 서비스의 내용 및 제공일자를 변경 전에 웹사이트 또는 앱 등을 통하여, 그리고 회원에게 이메일 또는 문자 메시지 등으로 공지합니다.</li>
              </ol>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">제5조 (서비스 이용계약의 성립)</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                <li>서비스 이용계약은 이용자가 약관의 내용에 대하여 동의를 한 다음 회원가입 신청을 하고 회사가 이러한 신청에 대하여 승낙함으로써 체결됩니다.</li>
                <li>회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않을 수 있습니다.
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>기술상 서비스 제공이 불가능한 경우</li>
                    <li>실명이 아니거나 타인의 명의를 이용한 경우</li>
                    <li>허위의 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우</li>
                    <li>이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하며 신청하는 경우</li>
                    <li>서비스 관련 설비의 여유가 없거나, 기술상 또는 업무상 문제가 있는 경우</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">제6조 (회원정보의 변경)</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                <li>회원은 개인정보 관리화면을 통하여 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다.</li>
                <li>회원은 회원가입 시 기재한 사항이 변경되었을 경우 온라인으로 수정을 하거나 전자우편 또는 기타 방법으로 회사에 대하여 그 변경사항을 알려야 합니다.</li>
                <li>제2항의 변경사항을 회사에 알리지 않아 발생한 불이익에 대하여 회사는 책임을 지지 않습니다.</li>
              </ol>
            </div>
          </section>
        </div>
        
        <div className="mt-12 rounded-lg bg-blue-50 p-6">
          <p className="text-gray-700 font-medium">
            이 약관은 2024년 1월 1일부터 적용됩니다.
          </p>
          <p className="text-gray-700 mt-2">
            ※ 이전 이용약관은 고객센터로 문의 부탁드립니다.
          </p>
        </div>
      </div>
    </MainLayout>
  );
} 