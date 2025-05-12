"use client";

import React from "react";

interface RegionItem {
  id: string;
  name: string;
  imageUrl: string;
  count: number;
}

interface RegionRecommendationProps {
  regions: RegionItem[];
}

export const RegionRecommendation: React.FC<RegionRecommendationProps> = ({ regions }) => {
  return (
    <section className="my-10">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-zinc-900">인기 지역</h2>
        <button className="text-blue-600 text-sm font-medium">전체보기</button>
      </header>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {regions.map((region) => (
          <article 
            key={region.id} 
            className="relative rounded-xl overflow-hidden h-[180px] group cursor-pointer"
          >
            <img
              src={region.imageUrl}
              alt={region.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <h3 className="text-white font-bold text-lg">{region.name}</h3>
              <p className="text-white/80 text-sm">{region.count}개 숙소</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RegionRecommendation; 