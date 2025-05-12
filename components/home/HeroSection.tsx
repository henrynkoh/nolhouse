"use client";

import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[500px] w-full">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          alt="여행 배경"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
      </div>
      
      <div className="relative pt-32 px-80 max-md:px-10 max-sm:px-5 flex flex-col items-center text-center z-10">
        <h1 className="text-5xl font-bold text-white mb-4 max-w-4xl">
          특별한 여행을 NOL과 함께 떠나보세요
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl">
          전국 최대 규모의 숙소와 특별한 혜택으로 여러분의 여행을 더욱 특별하게 만들어 드립니다
        </p>
      </div>
    </section>
  );
};

export default HeroSection; 