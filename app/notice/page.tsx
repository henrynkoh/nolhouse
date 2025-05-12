'use client';

import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import Link from 'next/link';

interface NoticeItem {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
  isImportant?: boolean;
}

export default function NoticePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [noticeItems] = useState<NoticeItem[]>([
    {
      id: '1',
      title: '[공지] NOL 서비스 개인정보처리방침 개정 안내',
      content: `안녕하세요, NOL입니다.
      
      회원님께 보다 나은 서비스를 제공하기 위하여 개인정보처리방침이 일부 개정됨을 안내해 드립니다.
      
      ■ 개정 사항
      1. 개인정보 수집 항목 추가: 서비스 개선을 위한 이용자 활동 정보 수집
      2. 개인정보 보관 기간 명확화: 회원 탈퇴 후 개인정보 보관 정책 상세화
      3. 개인정보 처리 위탁 업체 변경: 클라우드 서비스 제공업체 변경
      
      ■ 시행일
      2024년 3월 1일부터 시행
      
      자세한 내용은 개인정보처리방침 페이지를 통해 확인하실 수 있습니다.
      변경된 약관에 대해 궁금하신 점이 있으시면 고객센터로 문의해 주세요.`,
      date: '2024-02-15',
      category: '서비스 공지',
      isImportant: true,
    },
    {
      id: '2',
      title: '[안내] 2월 시스템 점검 안내',
      content: `안녕하세요, NOL입니다.
      
      서비스 품질 향상을 위한 시스템 점검이 진행될 예정입니다.
      점검 시간 동안에는 서비스 이용이 일시적으로 제한될 수 있으니 양해 부탁드립니다.
      
      ■ 점검 일시
      2024년 2월 20일(화) 새벽 02:00 ~ 05:00 (3시간)
      
      ■ 점검 영향
      - 웹사이트 및 앱 서비스 일시 중단
      - 예약 및 결제 시스템 이용 불가
      
      점검 완료 후에는 정상적으로 서비스를 이용하실 수 있습니다.
      이용에 불편을 드려 죄송합니다.`,
      date: '2024-02-13',
      category: '시스템 점검',
    },
    {
      id: '3',
      title: '[발표] 1월 이벤트 당첨자 발표',
      content: `안녕하세요, NOL입니다.
      
      '새해맞이 특별 이벤트' 당첨자를 발표합니다.
      
      ■ 당첨자 목록
      - 1등 (제주 숙박권): 김** (회원번호: 1234XX)
      - 2등 (상품권 10만원): 이** (회원번호: 5678XX) 외 4명
      - 3등 (스타벅스 기프티콘): 박** (회원번호: 9012XX) 외 19명
      
      당첨되신 모든 분들께 축하드립니다!
      경품은 등록된 연락처 또는 이메일로 순차적으로 발송될 예정입니다.
      
      앞으로도 NOL의 다양한 이벤트에 많은 참여 부탁드립니다.`,
      date: '2024-01-31',
      category: '이벤트',
    },
    {
      id: '4',
      title: '[안내] 설 연휴 고객센터 운영 안내',
      content: `안녕하세요, NOL입니다.
      
      설 연휴 기간 동안 고객센터 운영 시간이 다음과 같이 변경됩니다.
      
      ■ 변경 기간
      2024년 2월 9일(금) ~ 2월 12일(월)
      
      ■ 운영 시간
      - 2월 9일(금): 09:00 ~ 17:00 (단축 운영)
      - 2월 10일(토) ~ 2월 11일(일): 휴무
      - 2월 12일(월): 09:00 ~ 17:00 (단축 운영)
      - 2월 13일(화): 정상 운영
      
      연휴 기간 중 문의사항은 [1:1 문의하기]를 이용해 주시면 순차적으로 답변 드리겠습니다.
      즐거운 설 연휴 보내시기 바랍니다.`,
      date: '2024-02-05',
      category: '고객센터',
    },
    {
      id: '5',
      title: '[공지] 앱 업데이트 안내 (v2.3.0)',
      content: `안녕하세요, NOL입니다.
      
      더 나은 서비스 제공을 위해 앱이 업데이트되었습니다.
      
      ■ 업데이트 버전: v2.3.0
      
      ■ 주요 변경사항
      1. 숙소 검색 기능 개선
      2. 예약 확인 페이지 리뉴얼
      3. 위시리스트 관리 기능 추가
      4. 여러 가지 버그 수정 및 성능 개선
      
      앱스토어 또는 플레이스토어에서 최신 버전으로 업데이트하시면 새로운 기능을 이용하실 수 있습니다.
      
      항상 NOL을 이용해 주셔서 감사합니다.`,
      date: '2024-01-25',
      category: '서비스 공지',
    },
  ]);
  
  const categories = ['all', ...Array.from(new Set(noticeItems.map(item => item.category)))];
  
  const filteredItems = activeCategory === 'all' 
    ? noticeItems 
    : noticeItems.filter(item => item.category === activeCategory);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">공지사항</h1>
        
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
        
        {/* Notice List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="border-b">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">분류</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">등록일</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredItems.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-24">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      item.isImportant ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <Link href={`/notice/${item.id}`} className="text-gray-900 hover:text-blue-600">
                      {item.isImportant && (
                        <span className="text-red-600 font-bold mr-2">[중요]</span>
                      )}
                      {item.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                    {formatDate(item.date)}
                  </td>
                </tr>
              ))}
              
              {filteredItems.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-6 py-10 text-center text-gray-500">
                    해당 카테고리에 공지사항이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        {noticeItems.length > 0 && (
          <div className="flex justify-center mt-8">
            <nav className="inline-flex rounded-md shadow">
              <a href="#" className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                이전
              </a>
              <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-blue-600 text-white">
                1
              </a>
              <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                2
              </a>
              <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                3
              </a>
              <a href="#" className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                다음
              </a>
            </nav>
          </div>
        )}
      </div>
    </MainLayout>
  );
} 