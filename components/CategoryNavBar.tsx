'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CategoryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  path: string;
}

export const CategoryNavBar: React.FC = () => {
  const pathname = usePathname();
  
  const categories: CategoryItem[] = [
    {
      id: 'hotel',
      name: '호텔/리조트',
      icon: (
        <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 7H5V17H19V7Z" fill="#8B5CF6" fillOpacity="0.2" />
          <path d="M2 8C2 7.44772 2.44772 7 3 7H21C21.5523 7 22 7.44772 22 8V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V8Z" stroke="currentColor" strokeWidth="2" />
          <path d="M12 7V3C12 2.44772 12.4477 2 13 2H19C19.5523 2 20 2.44772 20 3V7" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      path: '/search?category=hotel',
    },
    {
      id: 'pension',
      name: '펜션/풀빌라',
      icon: (
        <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21H21V7L12 3L3 7V21Z" fill="#10B981" fillOpacity="0.2" />
          <path d="M3 7L12 3L21 7V21H3V7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      path: '/search?category=pension',
    },
    {
      id: 'premium',
      name: '프리미엄',
      icon: (
        <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#EAB308" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      path: '/search?category=premium',
    },
    {
      id: 'camping',
      name: '글램핑/캠핑',
      icon: (
        <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L2 19H22L12 3Z" fill="#F59E0B" fillOpacity="0.2" />
          <path d="M12 3L2 19H22L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 19V13C8 11.8954 8.89543 11 10 11H14C15.1046 11 16 11.8954 16 13V19" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      path: '/search?category=camping',
    },
    {
      id: 'motel',
      name: '모텔',
      icon: (
        <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V7Z" fill="#EC4899" fillOpacity="0.2" />
          <path d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V7Z" stroke="currentColor" strokeWidth="2" />
          <path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      path: '/search?category=motel',
    },
    {
      id: 'flight',
      name: '항공',
      icon: (
        <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.5 18H20.5L12 4L3.5 18Z" fill="#60A5FA" fillOpacity="0.2" />
          <path d="M22 16.9L14.2 9.1C13.8 8.7 13.4 8 12.7 8H11.5C10.9 8 10.5 8.4 10.2 8.9L8.1 12H4.8C4.3 12 4 12.3 4 12.8C4 13 4.1 13.2 4.2 13.4L6 16H3V17H21V16H18L19.8 13.4C19.9 13.2 20 13 20 12.8C20 12.3 19.7 12 19.2 12H15.9L16.2 11.6L19.3 14.7C19.5 14.9 19.8 15 20 15C20.6 15 21 14.6 21 14C21 13.7 20.9 13.5 20.7 13.3L17.6 10.2C17.5 10.1 17.3 10 17.1 9.9L22 16.9Z" fill="#60A5FA" />
        </svg>
      ),
      path: '/search?category=flight',
    },
    {
      id: 'overseas',
      name: '해외숙소',
      icon: (
        <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="#3B82F6" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
          <path d="M3.6 9H20.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M3.6 15H20.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 3C10.0707 5.58128 9 8.69906 9 12C9 15.3009 10.0707 18.4187 12 21" stroke="currentColor" strokeWidth="2" />
          <path d="M12 3C13.9293 5.58128 15 8.69906 15 12C15 15.3009 13.9293 18.4187 12 21" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      path: '/search?category=overseas',
    },
    {
      id: 'transport',
      name: '교통',
      icon: (
        <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 6H19V16H5V6Z" fill="#F97316" fillOpacity="0.2" />
          <path d="M5 13H19V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V13Z" fill="#F97316" fillOpacity="0.2" />
          <path d="M9 19H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 6C6 4.89543 6.89543 4 8 4H16C17.1046 4 18 4.89543 18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6Z" stroke="currentColor" strokeWidth="2" />
          <path d="M6 9H18" stroke="currentColor" strokeWidth="2" />
          <path d="M6 14H18" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      path: '/search?category=transport',
    },
    {
      id: 'activity',
      name: '레저/티켓',
      icon: (
        <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 6H19V16H5V6Z" fill="#EC4899" fillOpacity="0.2" />
          <path d="M11.1 4C11.2 3.4 11.8 3 12.4 3H20.6C21.3 3 21.8 3.6 21.7 4.3L20.6 11.3C20.5 11.7 20.1 12 19.6 12H13C12.4 12 12 11.6 12 11V4.5C12 4.3 12 4.2 11.1 4Z" fill="#EC4899" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M14 12V13C14 14.1 13.1 15 12 15H3C1.9 15 1 14.1 1 13V5C1 3.9 1.9 3 3 3H12.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.2 15L19 18.5C18.9 18.8 18.6 19 18.3 19H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      path: '/search?category=activity',
    },
    {
      id: 'exhibition',
      name: '공연/전시',
      icon: (
        <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 5H20V19H4V5Z" fill="#8B5CF6" fillOpacity="0.2" />
          <path d="M14 5H4V19H20V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 3L21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 3L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 14V11C10 9.89543 10.8954 9 12 9V9C13.1046 9 14 9.89543 14 11V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 14V12.5C6 11.6716 6.67157 11 7.5 11V11C8.32843 11 9 11.6716 9 12.5V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 14V12.5C15 11.6716 15.6716 11 16.5 11V11C17.3284 11 18 11.6716 18 12.5V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      path: '/search?category=exhibition',
    },
  ];

  return (
    <div className="bg-white py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id}
              href={category.path}
              className={`flex flex-col items-center justify-center ${
                pathname === category.path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {category.icon}
              <span className="text-xs text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNavBar; 