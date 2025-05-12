import React from "react";

export const NotificationBanner: React.FC = () => {
  return (
    <section className="flex gap-2 items-center px-5 py-3 mb-6 rounded-xl bg-slate-50">
      <span className="px-2 py-1.5 text-xs font-bold text-white bg-indigo-600 rounded-full">
        공지
      </span>
      <p className="text-base text-black">
        새로워진 NOL을 소개합니다!
      </p>
    </section>
  );
};
