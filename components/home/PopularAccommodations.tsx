"use client";

import React from "react";
import { AccommodationItem } from "../../types";

interface PopularAccommodationsProps {
  accommodations: AccommodationItem[];
  title?: string;
}

export const PopularAccommodations: React.FC<PopularAccommodationsProps> = ({
  accommodations,
  title = "인기 숙소",
}) => {
  return (
    <section className="my-10">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-zinc-900">{title}</h2>
        <button className="text-blue-600 text-sm font-medium">더보기</button>
      </header>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {accommodations.map((item) => (
          <article key={item.id} className="rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="relative">
              <img src={item.imageUrl} alt={item.name} className="w-full h-[200px] object-cover" />
              {item.discountRate && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                  {item.discountRate}% OFF
                </div>
              )}
              <button className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M26.1867 8.084C25.6605 7.55769 25.0358 7.14018 24.3482 6.85533C23.6606 6.57049 22.9236 6.42388 22.1794 6.42388C21.4351 6.42388 20.6982 6.57049 20.0106 6.85533C19.323 7.14018 18.6983 7.55769 18.1721 8.084L16.0014 10.256L13.8294 8.084C12.7626 7.04173 11.3278 6.46208 9.83639 6.47076C8.34495 6.47945 6.91707 7.07577 5.86245 8.1304C4.80783 9.18502 4.2115 10.6129 4.20282 12.1043C4.19413 13.5958 4.77379 15.0305 5.81606 16.0973L14.9601 25.2427C15.0249 25.3067 15.0929 25.3631 15.1641 25.412L15.1867 25.428L15.2081 25.4453C15.4623 25.6421 15.7797 25.7393 16.1006 25.7187C16.4214 25.6981 16.7237 25.561 16.9507 25.3333L26.1854 16.0987C27.2479 15.036 27.8448 13.5948 27.8448 12.092C27.8448 10.5892 27.2479 9.14802 26.1854 8.08534" stroke="#6E6F73" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
            
            <div className="p-4">
              <div className="flex items-center gap-1 mb-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" />
                </svg>
                <span className="text-sm font-medium">{item.rating}</span>
                <span className="text-xs text-gray-500">({item.reviewCount})</span>
              </div>
              
              <h3 className="font-medium text-lg mb-1">{item.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{item.location}</p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {item.tags?.map((tag, index) => (
                  <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-end justify-between">
                {item.originalPrice && (
                  <div className="flex flex-col">
                    <span className="text-sm line-through text-gray-400">
                      {item.originalPrice.toLocaleString()}원
                    </span>
                    <span className="text-lg font-bold text-black">
                      {item.price.toLocaleString()}원
                    </span>
                  </div>
                )}
                {!item.originalPrice && (
                  <span className="text-lg font-bold text-black">
                    {item.price.toLocaleString()}원
                  </span>
                )}
                <span className="text-xs text-gray-500">1박</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PopularAccommodations; 