import React, { useState, useEffect } from "react";
import Header from "./Header";
import SideBarComponent from "./SideBarComponent";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(false); // Automatically close on desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="min-h-screen flex bg-gray-50 relative">
      <SideBarComponent
        isMobile={isMobile}
        isOpen={sidebarOpen}
        onClose={closeSidebar}
      />

      {/* Overlay for sidebar on mobile */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}

      <div
        className={`flex flex-col flex-1 min-h-screen transition-all duration-300 ${
          !isMobile ? "md:ml-72" : ""
        }`}
      >
        <Header onMenuClick={toggleSidebar} isMobile={isMobile} />
        <main className="flex-1 px-4 md:px-14 py-8">{children}</main>
      </div>
    </div>
  );
}
