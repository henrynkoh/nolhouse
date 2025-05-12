'use client';

import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">회사소개</h1>
        
        {/* Hero Section */}
        <div className="relative h-80 rounded-xl overflow-hidden mb-12">
          <Image 
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
            alt="NOL Company Office"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-indigo-600/40 flex items-center">
            <div className="px-8 text-white">
              <h2 className="text-4xl font-bold mb-4">세상을 연결하는 여행 플랫폼</h2>
              <p className="text-xl max-w-2xl">더 나은, 더 즐거운 여행 경험을 위한 NOL의 여정에 함께해 주세요.</p>
            </div>
          </div>
        </div>
        
        {/* Company Vision */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">회사 비전</h2>
              <p className="text-gray-700 mb-4">
                NOL은 "모두를 위한 여행 경험" 이라는 비전을 가지고 2020년에 설립되었습니다. 
                우리는
                복잡한 여행 계획을 간편하게 만들고, 더 넓은 세상을 경험할 수 있도록 돕는 것을 목표로 합니다.
              </p>
              <p className="text-gray-700">
                최고의 숙소부터 항공권, 액티비티까지 - NOL은 여행의 모든 순간을 특별하게 만들기 위해 최선을 다하고 있습니다.
                혁신적인 기술과 고객 중심의 서비스로 여행의 새로운 기준을 제시합니다.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-800">NOL의 핵심 가치</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium">혁신</span>
                      <p className="text-sm text-gray-600">끊임없는 도전과 혁신으로 더 나은 서비스를 제공합니다.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium">신뢰</span>
                      <p className="text-sm text-gray-600">정확하고 투명한 정보로 고객의 신뢰를 얻습니다.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium">포용성</span>
                      <p className="text-sm text-gray-600">모든 사람이 즐길 수 있는 여행 경험을 제공합니다.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium">지속가능성</span>
                      <p className="text-sm text-gray-600">환경과 지역사회를 고려한 책임 있는 여행을 지향합니다.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Company History */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">회사 연혁</h2>
          <div className="border-l-2 border-blue-500 ml-3">
            <div className="relative pl-8 pb-8">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-blue-600"></div>
              <h3 className="text-lg font-bold mb-1">2020년</h3>
              <p className="text-gray-700 mb-1">• NOL 주식회사 설립</p>
              <p className="text-gray-700 mb-1">• 베타 서비스 출시</p>
              <p className="text-gray-700">• 시드 투자 유치 (50억원)</p>
            </div>
            <div className="relative pl-8 pb-8">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-blue-600"></div>
              <h3 className="text-lg font-bold mb-1">2021년</h3>
              <p className="text-gray-700 mb-1">• 국내 숙소 예약 서비스 정식 출시</p>
              <p className="text-gray-700 mb-1">• 월간 사용자 100만명 돌파</p>
              <p className="text-gray-700">• 주요 호텔 체인과 파트너십 체결</p>
            </div>
            <div className="relative pl-8 pb-8">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-blue-600"></div>
              <h3 className="text-lg font-bold mb-1">2022년</h3>
              <p className="text-gray-700 mb-1">• 항공권 예약 서비스 출시</p>
              <p className="text-gray-700 mb-1">• 시리즈 A 투자 유치 (200억원)</p>
              <p className="text-gray-700">• 아시아 여행 테크 어워드 수상</p>
            </div>
            <div className="relative pl-8 pb-8">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-blue-600"></div>
              <h3 className="text-lg font-bold mb-1">2023년</h3>
              <p className="text-gray-700 mb-1">• 해외 숙소 예약 서비스 출시</p>
              <p className="text-gray-700 mb-1">• 누적 사용자 500만명 돌파</p>
              <p className="text-gray-700">• 동남아시아 시장 진출</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-blue-600"></div>
              <h3 className="text-lg font-bold mb-1">2024년</h3>
              <p className="text-gray-700 mb-1">• 현지 액티비티 예약 서비스 출시</p>
              <p className="text-gray-700 mb-1">• AI 기반 여행 추천 시스템 도입</p>
              <p className="text-gray-700">• 일본, 유럽 시장 진출 준비 중</p>
            </div>
          </div>
        </section>
        
        {/* Team & Leadership */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">리더십</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="CEO"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">김성민</h3>
                <p className="text-gray-600 mb-2">대표이사 (CEO)</p>
                <p className="text-sm text-gray-700">
                  15년간의 IT 및 여행 산업 경험을 바탕으로 NOL을 이끌고 있습니다. 사용자 중심의 혁신적인 서비스를 통해 여행의 미래를 만들어가고 있습니다.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                  alt="CTO"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">이지원</h3>
                <p className="text-gray-600 mb-2">기술이사 (CTO)</p>
                <p className="text-sm text-gray-700">
                  실리콘밸리 경험을 가진 기술 전문가로, NOL의 기술적 비전과 혁신을 주도합니다. 인공지능과 빅데이터를 활용한 맞춤형 여행 경험 개발에 주력하고 있습니다.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="COO"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">박지영</h3>
                <p className="text-gray-600 mb-2">운영이사 (COO)</p>
                <p className="text-sm text-gray-700">
                  글로벌 호텔 체인 출신으로, 10년 이상의 환대 산업 경험을 보유하고 있습니다. 고객 만족과 운영 효율성 향상을 통해 NOL의 성장을 이끌고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Location & Contact */}
        <section>
          <h2 className="text-2xl font-bold mb-6">오시는 길</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-80 relative">
              <Image 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2374&q=80"
                alt="NOL Office Building"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-lg font-bold mb-3">본사</h3>
                  <p className="text-gray-700 mb-1">서울특별시 강남구 테헤란로 123</p>
                  <p className="text-gray-700 mb-1">NOL 타워 15층</p>
                  <p className="text-gray-700 mb-4">우편번호: 06234</p>
                  
                  <h4 className="font-medium mb-2">교통안내</h4>
                  <p className="text-gray-700 mb-1">• 지하철: 2호선 강남역 4번 출구에서 도보 5분</p>
                  <p className="text-gray-700 mb-1">• 버스: 강남역 정류장 하차</p>
                  <p className="text-gray-700 mb-4">• 주차: 건물 내 지하주차장 이용 가능</p>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-lg font-bold mb-3">문의하기</h3>
                  <p className="text-gray-700 mb-1">고객센터: 1234-5678</p>
                  <p className="text-gray-700 mb-1">이메일: contact@nol.com</p>
                  <p className="text-gray-700 mb-4">운영시간: 평일 09:00-18:00 (점심시간 12:00-13:00)</p>
                  
                  <div className="mt-4">
                    <Link 
                      href="/contact" 
                      className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      1:1 문의하기
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
} 