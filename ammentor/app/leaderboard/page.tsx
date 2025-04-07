"use client";

import React, { useState } from 'react';
import { Leaderboard } from './leaderboard';
import { LeaderboardEntry } from './leaderboard';
import { Sidebar } from '../components/sidebar';

const overallLeaderboardData: LeaderboardEntry[] = [
  { position: 1, name: "Alex Johnson", points: "200" },
  { position: 2, name: "Taylor Smith", points: "100" },
  { position: 3, name: "Jordan Lee", points: "50" },
  { position: 4, name: "Casey Brown", points: "25" },
  { position: 5, name: "Morgan Taylor", points: "10" },
];


export default function LeaderboardPage() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
 
      <Sidebar 
        currentPage="leaderboard"
        isMobileOpen={isMobileSidebarOpen}
        toggleMobile={toggleMobileSidebar}
      />
      
      <div className="lg:ml-64 transition-all duration-300 min-h-screen">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 mr-auto ml-8 lg:ml-0">
                Overall Leaderboard
              </h1>
            </div>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Leaderboard title="Overall Leaderboard" entries={overallLeaderboardData} />

        </main>
      </div>
    </div>
  );
}