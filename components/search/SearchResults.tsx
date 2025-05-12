"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AccommodationItem } from "../../types";

interface SearchResultsProps {
  initialResults: AccommodationItem[];
  searchLocation?: string;
  checkInDate?: string;
  checkOutDate?: string;
  guests?: number;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  initialResults,
  searchLocation,
  checkInDate,
  checkOutDate,
  guests
}) => {
  const router = useRouter();
  const [results, setResults] = useState(initialResults);
  const [sortOption, setSortOption] = useState<'recommended' | 'price-asc' | 'price-desc' | 'rating'>('recommended');
  const [filterPrice, setFilterPrice] = useState<[number, number]>([0, 1000000]);
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [filterAmenities, setFilterAmenities] = useState<string[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Available amenities for filtering
  const amenities = [
    { id: 'wifi', label: '무료 와이파이' },
    { id: 'parking', label: '주차 가능' },
    { id: 'pool', label: '수영장' },
    { id: 'breakfast', label: '조식 포함' },
    { id: 'spa', label: '스파' },
    { id: 'gym', label: '피트니스 센터' },
    { id: 'ac', label: '에어컨' },
    { id: 'restaurant', label: '레스토랑' },
  ];

  useEffect(() => {
    // Apply sorting and filtering
    let filteredResults = [...initialResults];
    
    // Apply price filter
    filteredResults = filteredResults.filter(
      item => item.price >= filterPrice[0] && item.price <= filterPrice[1]
    );
    
    // Apply rating filter
    if (filterRating !== null) {
      filteredResults = filteredResults.filter(item => item.rating >= filterRating);
    }
    
    // Apply amenities filter (in a real app, your accommodation items would have amenities property)
    if (filterAmenities.length > 0) {
      // This is a simplified example - in a real app, you'd filter based on actual amenities
      // For now, we'll just randomly filter out some items to simulate this
      if (filterAmenities.includes('wifi')) {
        filteredResults = filteredResults.filter((_, i) => i % 2 !== 0);
      }
      if (filterAmenities.includes('pool')) {
        filteredResults = filteredResults.filter((_, i) => i % 3 !== 0);
      }
      // Add other amenity filters as needed
    }
    
    // Apply sorting
    filteredResults.sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'recommended':
        default:
          // For recommended, let's use a combination of rating and price
          return (b.rating * 10000 - b.price) - (a.rating * 10000 - a.price);
      }
    });
    
    setResults(filteredResults);
  }, [initialResults, sortOption, filterPrice, filterRating, filterAmenities]);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  const handleToggleAmenity = (amenityId: string) => {
    setFilterAmenities(prev => 
      prev.includes(amenityId) 
        ? prev.filter(id => id !== amenityId) 
        : [...prev, amenityId]
    );
  };

  const handleClearFilters = () => {
    setFilterPrice([0, 1000000]);
    setFilterRating(null);
    setFilterAmenities([]);
  };

  const handleItemClick = (id: string) => {
    router.push(`/accommodation/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search Summary */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">
          {searchLocation ? `${searchLocation} 숙소` : '모든 숙소'}
        </h1>
        {(checkInDate && checkOutDate) && (
          <p className="text-gray-600">
            {formatDate(checkInDate)} - {formatDate(checkOutDate)}
            {guests && ` · 게스트 ${guests}명`}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters - Desktop */}
        <div className="hidden lg:block">
          <div className="bg-white border rounded-lg p-6 sticky top-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">필터</h2>
              <button 
                onClick={handleClearFilters}
                className="text-sm text-blue-600 hover:underline"
              >
                필터 초기화
              </button>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">가격 범위</h3>
              <div className="flex items-center gap-2 mb-2">
                <input 
                  type="range" 
                  min="0" 
                  max="1000000" 
                  step="50000"
                  value={filterPrice[1]}
                  onChange={e => setFilterPrice([filterPrice[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between">
                <span>￦0</span>
                <span className="font-medium">최대 ￦{filterPrice[1].toLocaleString()}</span>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">평점</h3>
              <div className="space-y-2">
                {[null, 3, 4, 4.5].map((rating, i) => (
                  <div key={i} className="flex items-center">
                    <input
                      type="radio"
                      id={`rating-${rating || 'any'}`}
                      name="rating"
                      checked={filterRating === rating}
                      onChange={() => setFilterRating(rating)}
                      className="mr-2"
                    />
                    <label htmlFor={`rating-${rating || 'any'}`} className="text-sm">
                      {rating === null 
                        ? '모든 평점'
                        : rating === 4.5
                          ? '4.5 이상 - 최고!'
                          : `${rating} 이상`
                      }
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities Filter */}
            <div>
              <h3 className="font-medium mb-2">편의 시설</h3>
              <div className="space-y-2">
                {amenities.map(amenity => (
                  <div key={amenity.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`amenity-${amenity.id}`}
                      checked={filterAmenities.includes(amenity.id)}
                      onChange={() => handleToggleAmenity(amenity.id)}
                      className="mr-2"
                    />
                    <label htmlFor={`amenity-${amenity.id}`} className="text-sm">
                      {amenity.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center px-4 py-2 bg-white border rounded-full shadow-sm text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
            필터
          </button>
        </div>

        {/* Mobile Filter Modal */}
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-end lg:hidden">
            <div className="bg-white w-full h-5/6 rounded-t-xl overflow-auto">
              <div className="sticky top-0 bg-white p-4 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold">필터</h2>
                  <button onClick={() => setIsMobileFilterOpen(false)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                {/* Price Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">가격 범위</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <input 
                      type="range" 
                      min="0" 
                      max="1000000" 
                      step="50000"
                      value={filterPrice[1]}
                      onChange={e => setFilterPrice([filterPrice[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between">
                    <span>￦0</span>
                    <span className="font-medium">최대 ￦{filterPrice[1].toLocaleString()}</span>
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">평점</h3>
                  <div className="space-y-2">
                    {[null, 3, 4, 4.5].map((rating, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          id={`m-rating-${rating || 'any'}`}
                          name="mobile-rating"
                          checked={filterRating === rating}
                          onChange={() => setFilterRating(rating)}
                          className="mr-2"
                        />
                        <label htmlFor={`m-rating-${rating || 'any'}`} className="text-sm">
                          {rating === null 
                            ? '모든 평점'
                            : rating === 4.5
                              ? '4.5 이상 - 최고!'
                              : `${rating} 이상`
                          }
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">편의 시설</h3>
                  <div className="space-y-2">
                    {amenities.map(amenity => (
                      <div key={amenity.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`m-amenity-${amenity.id}`}
                          checked={filterAmenities.includes(amenity.id)}
                          onChange={() => handleToggleAmenity(amenity.id)}
                          className="mr-2"
                        />
                        <label htmlFor={`m-amenity-${amenity.id}`} className="text-sm">
                          {amenity.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="sticky bottom-0 bg-white p-4 border-t flex justify-between">
                <button 
                  onClick={handleClearFilters}
                  className="px-4 py-2 text-blue-600 underline"
                >
                  초기화
                </button>
                <button 
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md"
                >
                  결과 보기 ({results.length})
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Results Column */}
        <div className="lg:col-span-3">
          {/* Sorting Options */}
          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-600">{results.length}개의 숙소</p>
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as any)}
                className="pl-4 pr-10 py-2 text-sm border rounded-md appearance-none bg-white"
              >
                <option value="recommended">추천순</option>
                <option value="price-asc">가격 낮은순</option>
                <option value="price-desc">가격 높은순</option>
                <option value="rating">평점 높은순</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Results List */}
          <div className="space-y-6">
            {results.length > 0 ? (
              results.map(item => (
                <div 
                  key={item.id} 
                  onClick={() => handleItemClick(item.id)}
                  className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      {item.tags && item.tags.length > 0 && (
                        <div className="absolute top-2 left-2">
                          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                            {item.tags[0]}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h2 className="text-xl font-bold mb-1">{item.name}</h2>
                          <div className="flex items-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400">
                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                            </svg>
                            <span className="ml-1 font-medium">{item.rating.toFixed(1)}</span>
                            <span className="ml-1 text-gray-500">({item.reviewCount})</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-2">{item.location}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {item.tags?.map((tag, i) => (
                            <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-end">
                        <div>
                          {item.originalPrice && (
                            <span className="text-sm line-through text-gray-400 block">
                              {item.originalPrice.toLocaleString()}원
                            </span>
                          )}
                          <div className="flex items-center">
                            <span className="text-xl font-bold">
                              {item.price.toLocaleString()}원
                            </span>
                            {item.discountRate && (
                              <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">
                                {item.discountRate}% 할인
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">1박 기준</span>
                        </div>
                        
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                          예약하기
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-500">검색 결과가 없습니다.</p>
                <p className="text-gray-500 mt-2">다른 날짜나 위치로 시도해보세요.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults; 