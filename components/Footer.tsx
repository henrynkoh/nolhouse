import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  // Function to handle link clicks and ensure full page navigation
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // This is to ensure we're doing a full navigation, not just a client-side route
    // which might be causing the scroll-to-top issue
    window.location.href = href;
    e.preventDefault();
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between max-md:flex-col max-md:gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NOL 정보</h3>
              <div className="flex flex-col gap-3">
                <a 
                  href="/about" 
                  onClick={(e) => handleLinkClick(e, '/about')}
                  className="text-gray-400 hover:text-white"
                >
                  회사소개
                </a>
                <a 
                  href="/terms" 
                  onClick={(e) => handleLinkClick(e, '/terms')}
                  className="text-gray-400 hover:text-white"
                >
                  이용약관
                </a>
                <a 
                  href="/privacy" 
                  onClick={(e) => handleLinkClick(e, '/privacy')}
                  className="text-gray-400 hover:text-white"
                >
                  개인정보처리방침
                </a>
                <a 
                  href="/privacy/settings" 
                  onClick={(e) => handleLinkClick(e, '/privacy/settings')}
                  className="text-gray-400 hover:text-white"
                >
                  개인정보취급방침
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">고객지원</h3>
              <div className="flex flex-col gap-3">
                <a 
                  href="/notice" 
                  onClick={(e) => handleLinkClick(e, '/notice')}
                  className="text-gray-400 hover:text-white"
                >
                  공지사항
                </a>
                <a 
                  href="/faq" 
                  onClick={(e) => handleLinkClick(e, '/faq')}
                  className="text-gray-400 hover:text-white"
                >
                  자주묻는질문
                </a>
                <a 
                  href="/contact" 
                  onClick={(e) => handleLinkClick(e, '/contact')}
                  className="text-gray-400 hover:text-white"
                >
                  1:1 문의
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-sm text-gray-400">© 2024 NOL Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 