"use client";

import React from "react";
import { Navigation } from "./components/Navigation";
import { NotificationBanner } from "./NotificationBanner";
import { CategoryNavigation } from "./CategoryNavigation";
import { LiveSection } from "./LiveSection";
import { CategoryItem, LiveItem, AccommodationItem } from "./types";
import { HeroSection } from "./components/HeroSection";
import { SearchForm } from "./components/SearchForm";
import { PromotionBanner } from "./components/PromotionBanner";
import { PopularAccommodations } from "./components/PopularAccommodations";
import { RegionRecommendation } from "./components/RegionRecommendation";
import { Footer } from "./components/Footer";
import Link from "next/link";

export const NolHomepage: React.FC = () => {
  // Sample data for categories
  const categories: CategoryItem[] = [
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/58ec38a368453d2e3a586eb9804dac24b69229c9", title: "호텔/리조트" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/593723e58ac3b1ee9b3dd213c0ff18f45c612513", title: "펜션/풀빌라" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2eb4d0cf48018777e59d8f08246d66a7bf831f6", title: "프리미엄" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/60e41835a56f49da37ff486ca76d13e179811765", title: "글램핑/캠핑" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/231ef8911b824d9e63ef4788026c79f32f7b5efd", title: "모텔" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9190667b423f91318f3eda2449c8675bdac574fd", title: "항공" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5b58f91edfce6391ebe76e557b6ec820aa20ae8", title: "해외숙소" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd7b5e3465b2d038f73d9506c6788141e1368395", title: "교통" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/db2a4a70385e2baaca7525fa9a57b8a6d92b5347", title: "레저/티켓" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/102824c46629138c00474934feb50c51c90f39c1", title: "공연/전시" },
  ];

  // Sample data for live items
  const liveItems: LiveItem[] = [
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/128d89ae34af432320a8556ff19eccee8d12c319",
      status: "방송예정",
      title: "[에어캐나다] 북미 유일 4성급 국제 항공사 특가",
      time: "11:00",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      status: "방송예정",
      title: "[제주 신라호텔] 2박 특가 패키지",
      time: "14:00",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      status: "다시보기",
      title: "[강원 숙소] 평창 알펜시아 리조트 특가",
      time: "어제",
    },
  ];

  // Sample data for popular accommodations
  const popularAccommodations: AccommodationItem[] = [
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
    },
  ];

  // Sample data for popular regions
  const popularRegions = [
    {
      id: "1",
      name: "서울",
      imageUrl: "https://images.unsplash.com/photo-1538485399081-7c8ba554d693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2374&q=80",
      count: 3245,
    },
    {
      id: "2",
      name: "부산",
      imageUrl: "https://images.unsplash.com/photo-1583868838589-f6ff29244631?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      count: 1823,
    },
    {
      id: "3",
      name: "제주",
      imageUrl: "https://images.unsplash.com/photo-1625675200928-fb094ff539f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      count: 2156,
    },
    {
      id: "4",
      name: "강원",
      imageUrl: "https://images.unsplash.com/photo-1662949293679-3f7749a66cc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      count: 1569,
    },
    {
      id: "5",
      name: "경주",
      imageUrl: "https://images.unsplash.com/photo-1573670103119-9c4792e7e6c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80",
      count: 987,
    },
  ];

  return (
    <main className="w-full bg-white min-h-screen">
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <Navigation />
      <HeroSection />
      
      <div className="px-80 max-md:px-10 max-sm:px-5">
        <SearchForm />
      </div>

      <section className="px-80 py-4 w-full bg-white shadow-sm max-md:px-10 max-sm:px-5">
        <NotificationBanner />
        <CategoryNavigation categories={categories} />

        <div className="mb-6 w-full h-px bg-gray-200" />

        <LiveSection liveItems={liveItems} />
      </section>

      <section className="px-80 py-8 w-full bg-gray-50 max-md:px-10 max-sm:px-5">
        <PromotionBanner 
          imageUrl="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80"
          title="여름 휴가 얼리버드 프로모션"
          subtitle="지금 예약하면 최대 30% 할인"
          buttonText="예약하기"
        />

        <RegionRecommendation regions={popularRegions} />
        
        <PopularAccommodations accommodations={popularAccommodations} />
      </section>

      <div className="px-80 max-md:px-10 max-sm:px-5 bg-gray-900">
        <Footer />
      </div>
    </main>
  );
};

export default NolHomepage;
