"use client";

import React, { ReactNode } from "react";
import { Navigation } from "../Navigation";
import { Footer } from "../Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow bg-gray-50">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 