"use client";

import { useState } from "react";
import { Sidebar } from "../components/sidebar";

export default function Dashboard() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <Sidebar 
        currentPage="dashboard"
        isMobileOpen={isMobileSidebarOpen}
        toggleMobile={toggleMobileSidebar}
      />
      
      <div className="lg:ml-64 transition-all duration-300 min-h-screen">

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 mr-auto ml-8 lg:ml-0">
                Dashboard
              </h1>
            </div>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Welcome to your Dashboard</h2>
            <p className="text-gray-600">Dashboard content will go here...</p>
          </div>
        </main>
      </div>
    </div>
  );
}