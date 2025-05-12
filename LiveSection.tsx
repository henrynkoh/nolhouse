"use client";

import React from "react";
import { LiveItem } from "./types";

interface LiveSectionProps {
  liveItems: LiveItem[];
}

export const LiveSection: React.FC<LiveSectionProps> = ({ liveItems }) => {
  return (
    <section className="flex flex-col gap-6 items-center max-md:gap-4 max-sm:gap-3">
      <header className="flex justify-between items-center w-full">
        <div className="flex gap-2 items-center">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/be3bbbe54475e7b68863d4dbd8ca55adcec6cc90" alt="" className="w-[24px] h-[24px]" />
          <h2 className="text-2xl font-bold text-zinc-900">
            NOL 라이브 놀라운 혜택!
          </h2>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex items-center px-2 py-1.5 rounded-full bg-slate-50">
            <span className="text-sm font-bold text-zinc-900">02</span>
            <span className="text-xs text-zinc-900">/</span>
            <span className="text-sm text-zinc-900">07</span>
          </div>
          <button aria-label="Add">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px]">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.7767 7.5C11.7767 7.61603 11.7306 7.72731 11.6486 7.80936C11.5665 7.89141 11.4552 7.9375 11.3392 7.9375H2.88086C2.76483 7.9375 2.65355 7.89141 2.5715 7.80936C2.48945 7.72731 2.44336 7.61603 2.44336 7.5C2.44336 7.38397 2.48945 7.27269 2.5715 7.19064C2.65355 7.10859 2.76483 7.0625 2.88086 7.0625H11.3392C11.4552 7.0625 11.5665 7.10859 11.6486 7.19064C11.7306 7.27269 11.7767 7.38397 11.7767 7.5Z" fill="#1B1C1F" />
              <path fillRule="evenodd" clipRule="evenodd" d="M7.10999 2.83331C7.22602 2.83331 7.3373 2.87941 7.41934 2.96145C7.50139 3.0435 7.54749 3.15478 7.54749 3.27081V11.7291C7.54749 11.8452 7.50139 11.9565 7.41934 12.0385C7.3373 12.1206 7.22602 12.1666 7.10999 12.1666C6.99395 12.1666 6.88267 12.1206 6.80063 12.0385C6.71858 11.9565 6.67249 11.8452 6.67249 11.7291V3.27081C6.67249 3.15478 6.71858 3.0435 6.80063 2.96145C6.88267 2.87941 6.99395 2.83331 7.10999 2.83331Z" fill="#1B1C1F" />
            </svg>
          </button>
        </div>
      </header>

      <div className="flex overflow-x-auto gap-4 w-full">
        {liveItems.map((item, index) => (
          <article key={index} className="relative rounded-2xl min-w-60">
            <img src={item.imageUrl} alt={item.title} className="w-full h-[320px] object-cover rounded-[16px]" />

            <div className="absolute bottom-0 left-0 w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_40%,rgba(0,0,0,0.60)_80%)] h-[131px]">
              {index === 0 && (
                <svg width="186" height="132" viewBox="0 0 186 132" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[186px] h-[131px]">
                  <g clipPath="url(#clip0_1_240)">
                    <mask id="mask0_1_240" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="186" height="132">
                      <path d="M186 0.5H0V131.5H186V0.5Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_1_240)">
                      <path d="M74.1526 57.5042H30C13.4315 57.5042 0 44.0728 0 27.5042V131.5H157.079C146.318 131.5 136.381 125.736 131.038 116.395L108.874 77.6447C101.751 65.1895 88.5011 57.5042 74.1526 57.5042Z" fill="white" />
                      <path d="M33.2852 117.5L45.248 61.6895H44.9551L24.3984 73.9941L27.377 59.5898L48.2754 47.041H63.0215L48.0312 117.5H33.2852Z" fill="#1B1C1F" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_240">
                      <rect width="186" height="131" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </div>

            <div className="flex absolute top-2 left-2 gap-1 items-center">
              <span className="px-2 py-1.5 text-xs font-bold bg-white rounded-md text-zinc-900">
                {item.status}
              </span>
            </div>

            <h3 className="absolute left-4 text-base font-bold text-white bottom-[68px]">
              {item.title}
            </h3>

            <div className="flex absolute left-2 bottom-4 items-center p-5 bg-white rounded-lg">
              <span className="text-base font-bold text-zinc-900">내일</span>
              <span className="ml-1 text-base text-zinc-900">{item.time}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
