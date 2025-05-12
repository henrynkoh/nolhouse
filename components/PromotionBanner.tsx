"use client";

import React from "react";

interface PromotionBannerProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
}

export const PromotionBanner: React.FC<PromotionBannerProps> = ({
  imageUrl,
  title,
  subtitle,
  buttonText = "자세히 보기",
}) => {
  return (
    <section className="w-full my-6 relative h-[200px] rounded-xl overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
      <div className="relative z-20 h-full flex flex-col justify-center px-10 max-w-[50%] text-white">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        {subtitle && <p className="text-lg mb-4">{subtitle}</p>}
        <button className="bg-white text-blue-600 py-2 px-4 rounded-md font-medium w-fit hover:bg-blue-50 transition-colors">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default PromotionBanner; 