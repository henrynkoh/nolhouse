'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SearchResults } from '../../components/search/SearchResults';
import { MapSearch } from '../../components/search/MapSearch';
import { AccommodationItem } from '../../types';

// Sample data
const SAMPLE_RESULTS: AccommodationItem[] = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    name: "그랜드 하얏트 서울",
    location: "서울 용산구",
    rating: 4.8,
    reviewCount: 832,
    price: 280000,
    discountRate: 15,
    originalPrice: 329000,
    tags: ["호텔", "5성급", "수영장"],
    coordinates: { lat: 37.5388, lng: 126.9974 },
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    name: "신라스테이 광화문",
    location: "서울 종로구",
    rating: 4.6,
    reviewCount: 625,
    price: 180000,
    tags: ["호텔", "4성급", "조식포함"],
    coordinates: { lat: 37.5725, lng: 126.9762 },
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80",
    name: "파라다이스 호텔 부산",
    location: "부산 해운대구",
    rating: 4.9,
    reviewCount: 1024,
    price: 350000,
    discountRate: 20,
    originalPrice: 437500,
    tags: ["호텔", "5성급", "오션뷰", "스파"],
    coordinates: { lat: 35.1602, lng: 129.1631 },
  },
  {
    id: "4",
    imageUrl: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    name: "제주 신라 호텔",
    location: "제주 서귀포시",
    rating: 4.7,
    reviewCount: 938,
    price: 320000,
    tags: ["호텔", "5성급", "수영장", "조식포함"],
    coordinates: { lat: 33.2448, lng: 126.4107 },
  },
  {
    id: "5",
    imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    name: "롯데호텔 서울",
    location: "서울 중구",
    rating: 4.6,
    reviewCount: 702,
    price: 260000,
    tags: ["호텔", "5성급", "레스토랑"],
    coordinates: { lat: 37.5658, lng: 126.9807 },
  },
  {
    id: "6",
    imageUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    name: "평창 알펜시아 리조트",
    location: "강원 평창",
    rating: 4.5,
    reviewCount: 512,
    price: 220000,
    discountRate: 10,
    originalPrice: 244000,
    tags: ["리조트", "스키", "온천"],
    coordinates: { lat: 37.6656, lng: 128.6809 },
  },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [view, setView] = useState<'list' | 'map'>('list');
  const [results, setResults] = useState<AccommodationItem[]>([]);
  
  const location = searchParams.get('location') || '';
  const checkIn = searchParams.get('checkIn') || '';
  const checkOut = searchParams.get('checkOut') || '';
  const guests = searchParams.get('guests') ? parseInt(searchParams.get('guests')!) : 2;
  
  useEffect(() => {
    // In a real app, this would be an API call using the search parameters
    // For demo purposes, we'll just use our sample data
    const filtered = location 
      ? SAMPLE_RESULTS.filter(item => 
          item.location.toLowerCase().includes(location.toLowerCase())
        )
      : SAMPLE_RESULTS;
    
    setResults(filtered);
  }, [location]);
  
  const handleSelectAccommodation = (id: string) => {
    // In a real app, this would navigate to the accommodation detail page
    console.log(`Selected accommodation: ${id}`);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">NOL</h1>
            <div className="flex space-x-4">
              <button 
                onClick={() => setView('list')} 
                className={`px-3 py-1 rounded-md ${view === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
              >
                목록
              </button>
              <button 
                onClick={() => setView('map')} 
                className={`px-3 py-1 rounded-md ${view === 'map' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
              >
                지도
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {view === 'list' ? (
          <SearchResults 
            initialResults={results}
            searchLocation={location}
            checkInDate={checkIn}
            checkOutDate={checkOut}
            guests={guests}
          />
        ) : (
          <div className="h-[800px]">
            <MapSearch 
              accommodations={results}
              onSelectAccommodation={handleSelectAccommodation}
            />
          </div>
        )}
      </main>
    </div>
  );
} 