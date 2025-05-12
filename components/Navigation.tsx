'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export const Navigation: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?location=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="w-full bg-[linear-gradient(269deg,#4BA2F6_8%,#3C7BFD_30%,#3E5FEA_50%,#4052EB_70%,#643EDF_100%)] py-4">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-80 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-white flex items-center">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8005affa2aa7fe83aa836119d3f754ee1e77fab7" alt="NOL Logo" className="w-[64px] h-[64px] md:w-[98px] md:h-[100px]" />
        </Link>
        
        <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="오늘도 NOL에서 즐겁게"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white text-gray-800 px-12 py-3 rounded-full w-full focus:outline-none"
            />
            <svg 
              className="absolute left-4 w-5 h-5 text-gray-500" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </form>
        
        <div className="flex items-center space-x-6">
          <Link href="/wishlist" className="flex flex-col items-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xs mt-1">찜</span>
          </Link>
          
          <Link href="/user/account" className="flex flex-col items-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs mt-1">마이</span>
          </Link>
          
          <Link href="/cart" className="flex flex-col items-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-xs mt-1">장바구니</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation; 