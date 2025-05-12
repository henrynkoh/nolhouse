"use client";

import React from "react";

export const SearchForm: React.FC = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 -mt-8 relative z-20 mx-auto max-w-5xl">
      <form>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-1">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              지역
            </label>
            <div className="relative">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <path 
                  d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" 
                  fill="currentColor"
                />
              </svg>
              <select
                id="location"
                name="location"
                className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">위치 선택</option>
                <option value="seoul">서울</option>
                <option value="busan">부산</option>
                <option value="jeju">제주</option>
                <option value="gangwon">강원</option>
                <option value="gyeonggi">경기</option>
              </select>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">
              체크인
            </label>
            <div className="relative">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <path 
                  d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20ZM7 11H12V16H7V11Z" 
                  fill="currentColor"
                />
              </svg>
              <input
                type="date"
                id="check-in"
                name="check-in"
                className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="md:col-span-1">
            <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">
              체크아웃
            </label>
            <div className="relative">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <path 
                  d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20ZM7 11H12V16H7V11Z" 
                  fill="currentColor"
                />
              </svg>
              <input
                type="date"
                id="check-out"
                name="check-out"
                className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="md:col-span-1">
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
              인원
            </label>
            <div className="relative">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <path 
                  d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" 
                  fill="currentColor"
                />
              </svg>
              <select
                id="guests"
                name="guests"
                className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="1">성인 1명</option>
                <option value="2">성인 2명</option>
                <option value="3">성인 3명</option>
                <option value="4">성인 4명</option>
                <option value="5">성인 5명 이상</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex justify-center">
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            숙소 검색
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchForm; 