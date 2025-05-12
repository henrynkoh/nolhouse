'use client';

import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">개인정보처리방침</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <p className="text-gray-700 mb-4">
            NOL 주식회사(이하 "회사")는 이용자의 개인정보를 중요시하며, 「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 
            관련 법령을 준수하기 위하여 노력하고 있습니다. 회사는 개인정보처리방침을 통하여 회사가 이용자로부터 수집하는 개인정보의 항목, 수집 및 이용목적, 
            보유 및 이용기간, 제3자 제공에 관한 사항을 안내드립니다.
          </p>
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. 수집하는 개인정보의 항목 및 수집방법</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">가. 수집하는 개인정보의 항목</h3>
              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">• 회원가입 시 수집항목</h4>
                <p className="text-gray-700 ml-4 mb-1">- 필수: 이메일 주소, 비밀번호, 이름, 휴대폰 번호</p>
                <p className="text-gray-700 ml-4">- 선택: 생년월일, 성별, 프로필 이미지</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">• 서비스 이용 과정에서 생성되는 정보</h4>
                <p className="text-gray-700 ml-4 mb-1">- 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보, 결제기록</p>
                <p className="text-gray-700 ml-4 mb-1">- 스마트폰 서비스 이용 시: 단말기 정보(모델명, OS 버전)</p>
                <p className="text-gray-700 ml-4">- 위치 기반 서비스 이용 시: 위치정보</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">• 예약 서비스 이용 시 수집항목</h4>
                <p className="text-gray-700 ml-4 mb-1">- 예약자 정보: 이름, 연락처, 이메일</p>
                <p className="text-gray-700 ml-4">- 결제 정보: 신용카드 정보, 계좌정보(일부 결제 수단 이용 시)</p>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">나. 개인정보 수집방법</h3>
              <p className="text-gray-700 mb-2">회사는 다음과 같은 방법으로 개인정보를 수집합니다.</p>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>홈페이지, 모바일 애플리케이션, 서면양식, 팩스, 전화, 고객센터 문의, 이벤트 응모</li>
                <li>생성정보 수집 툴을 통한 자동 수집</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">2. 개인정보의 수집 및 이용목적</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
              <div className="space-y-3">
                <div>
                  <h4 className="text-lg font-medium mb-1">• 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산</h4>
                  <p className="text-gray-700 ml-4">콘텐츠 제공, 특정 맞춤 서비스 제공, 예약 및 예약 확인, 구매 및 요금 결제, 물품배송 또는 청구서 등 발송</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-1">• 회원 관리</h4>
                  <p className="text-gray-700 ml-4">회원제 서비스 제공, 개인식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 가입 및 가입횟수 제한, 분쟁 조정을 위한 기록보존, 불만처리 등 민원처리, 고지사항 전달</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-1">• 신규 서비스 개발 및 마케팅·광고에의 활용</h4>
                  <p className="text-gray-700 ml-4">신규 서비스 개발 및 맞춤 서비스 제공, 통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 접속빈도 파악, 회원의 서비스 이용에 대한 통계</p>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">3. 개인정보의 보유 및 이용기간</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 다만, 관련 법령에 의하여 보존할 필요가 있는 경우 아래와 같이 관련 법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
              </p>
              
              <div className="mt-4 space-y-2">
                <h4 className="text-lg font-medium mb-1">• 보존 항목: 이름, 로그인ID, 휴대전화번호, 이메일</h4>
                <div className="ml-4">
                  <p className="text-gray-700">- 계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)</p>
                  <p className="text-gray-700">- 대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)</p>
                  <p className="text-gray-700">- 소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래 등에서의 소비자보호에 관한 법률)</p>
                  <p className="text-gray-700">- 표시/광고에 관한 기록: 6개월 (전자상거래 등에서의 소비자보호에 관한 법률)</p>
                  <p className="text-gray-700">- 웹사이트 방문기록: 3개월 (통신비밀보호법)</p>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">4. 개인정보의 파기절차 및 방법</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                파기절차 및 방법은 다음과 같습니다.
              </p>
              
              <div className="mt-4 space-y-3">
                <div>
                  <h4 className="text-lg font-medium mb-1">• 파기절차</h4>
                  <p className="text-gray-700 ml-4">
                    회원이 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-1">• 파기방법</h4>
                  <p className="text-gray-700 ml-4">
                    전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">5. 개인정보 제3자 제공</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                회사는 원칙적으로 이용자의 개인정보를 제1조(개인정보의 수집 및 이용목적)에서 명시한 범위 내에서 처리하며, 이용자의 사전 동의 없이는 본래의 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다. 단, 다음의 경우에는 개인정보를 처리할 수 있습니다.
              </p>
              
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li>이용자가 사전에 제3자 제공에 동의한 경우</li>
                <li>법률에 특별한 규정이 있거나, 법령상 의무를 준수하기 위하여 불가피한 경우</li>
                <li>공공기관이 법령 등에서 정하는 소관 업무의 수행을 위하여 불가피한 경우</li>
                <li>이용자 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 이용자 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우</li>
              </ul>
              
              <div className="mt-4">
                <h4 className="text-lg font-medium mb-2">• 개인정보 제3자 제공 현황</h4>
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2">제공받는 자</th>
                      <th className="border border-gray-300 p-2">제공 목적</th>
                      <th className="border border-gray-300 p-2">제공 항목</th>
                      <th className="border border-gray-300 p-2">보유 기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">숙박 서비스 제공 업체</td>
                      <td className="border border-gray-300 p-2">숙박 예약 서비스 이용</td>
                      <td className="border border-gray-300 p-2">이름, 연락처, 이메일</td>
                      <td className="border border-gray-300 p-2">예약 완료 후 3개월</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">항공권 서비스 제공 업체</td>
                      <td className="border border-gray-300 p-2">항공권 예약 서비스 이용</td>
                      <td className="border border-gray-300 p-2">이름, 생년월일, 여권번호, 연락처, 이메일</td>
                      <td className="border border-gray-300 p-2">예약 완료 후 3개월</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">결제 대행사</td>
                      <td className="border border-gray-300 p-2">결제 서비스 제공</td>
                      <td className="border border-gray-300 p-2">이름, 연락처, 결제정보</td>
                      <td className="border border-gray-300 p-2">관련 법령에 따른 보존기간</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">6. 이용자 및 법정대리인의 권리와 그 행사방법</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 조회하거나 수정할 수 있으며, 회사의 개인정보 처리에 동의하지 않는 경우 동의를 철회할 수 있습니다. 다만, 그러한 경우 서비스의 일부 또는 전부 이용이 어려울 수 있습니다.
              </p>
              
              <p className="text-gray-700 mb-4">
                이용자 혹은 만 14세 미만 아동의 개인정보 조회, 수정을 위해서는 '개인정보변경'(또는 '회원정보수정' 등)을, 가입해지(동의철회)를 위해서는 '회원탈퇴'를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다.
              </p>
              
              <p className="text-gray-700">
                혹은 개인정보 보호책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다. 이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.
              </p>
            </div>
          </section>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-xl font-bold mb-4">7. 개인정보 보호책임자</h2>
          <p className="text-gray-700 mb-4">
            회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          
          <div className="ml-4 mb-6">
            <p className="text-gray-700">• 개인정보 보호책임자</p>
            <p className="text-gray-700 ml-4">- 성명: 이지원</p>
            <p className="text-gray-700 ml-4">- 직책: 개인정보보호팀장</p>
            <p className="text-gray-700 ml-4">- 연락처: privacy@nol.com</p>
          </div>
          
          <p className="text-gray-700">
            개인정보 관련 문의사항은 개인정보 보호책임자에게 연락해 주시기 바랍니다. 또는 <Link href="/contact" className="text-blue-600 hover:underline">1:1 문의하기</Link>를 통해 문의하실 수 있습니다.
          </p>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6 mt-8">
          <p className="text-gray-700 font-medium">
            공고일자: 2024년 1월 1일<br/>
            시행일자: 2024년 1월 1일
          </p>
          <p className="text-gray-700 mt-2">
            ※ 이전 개인정보처리방침은 <Link href="/privacy/settings" className="text-blue-600 hover:underline">여기</Link>에서 확인하실 수 있습니다.
          </p>
        </div>
      </div>
    </MainLayout>
  );
} 