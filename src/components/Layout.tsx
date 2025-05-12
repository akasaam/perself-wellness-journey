
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Smooth scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-background/90">
      <Navbar />
      <main className="flex-grow pt-16 overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
