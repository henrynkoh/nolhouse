import React from 'react';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NOL - 여행 & 숙박 예약',
  description: '국내외 호텔, 리조트, 항공권, 액티비티 등을 검색하고 예약하세요.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
} 