"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const SearchForm: React.FC = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [searchType, setSearchType] = useState<"accommodation" | "flight" | "activity">("accommodation");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build the search URL with query parameters
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (checkInDate) params.append("checkIn", checkInDate);
    if (checkOutDate) params.append("checkOut", checkOutDate);
    params.append("guests", guests.toString());
    params.append("type", searchType);
    
    // Navigate to search results page
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 -mt-12 relative z-10">
      <div className="flex gap-4 mb-4">
        <button
          className={`py-2 px-4 rounded-md font-medium ${searchType === "accommodation" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          onClick={() => setSearchType("accommodation")}
        >
          숙소
        </button>
        <button
          className={`py-2 px-4 rounded-md font-medium ${searchType === "flight" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          onClick={() => setSearchType("flight")}
        >
          항공권
        </button>
        <button
          className={`py-2 px-4 rounded-md font-medium ${searchType === "activity" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          onClick={() => setSearchType("activity")}
        >
          액티비티
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* Location */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              어디로 떠나시나요?
            </label>
            <input
              type="text"
              placeholder={searchType === "accommodation" ? "도시, 지역 이름" : searchType === "flight" ? "도시, 공항 이름" : "액티비티 검색"}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {/* Check-in and Check-out Dates */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {searchType === "flight" ? "출발일" : "체크인"}
            </label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {searchType === "flight" ? "도착일" : searchType === "accommodation" ? "체크아웃" : "종료일"}
            </label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {/* Guests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {searchType === "flight" ? "인원" : "게스트"}
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value={1}>1명</option>
              <option value={2}>2명</option>
              <option value={3}>3명</option>
              <option value={4}>4명</option>
              <option value={5}>5명</option>
              <option value={6}>6명 이상</option>
            </select>
          </div>
        </div>
        
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            검색하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm; 