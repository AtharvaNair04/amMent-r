import React from 'react';
import { Home, CheckSquare, Trophy, Menu } from 'lucide-react';
import Link from 'next/link';

interface SidebarProps {
  currentPage: 'dashboard' | 'tasks' | 'leaderboard';
  isMobileOpen?: boolean;
  toggleMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  currentPage, 
  isMobileOpen = false,
  toggleMobile = () => {}
}) => {
  const navItems = [
    { name: 'Dashboard', icon: <Home size={20} />, path: '/dashboard', active: currentPage === 'dashboard' },
    { name: 'Tasks', icon: <CheckSquare size={20} />, path: '/tasks', active: currentPage === 'tasks' },
    { name: 'Leaderboard', icon: <Trophy size={20} />, path: '/leaderboard', active: currentPage === 'leaderboard' },
  ];

  return (
    <>
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-20 lg:hidden" 
          onClick={toggleMobile}
        />
      )}
      
      <div className={`
        fixed top-0 left-0 h-full bg-white shadow-lg z-30
        transform transition-transform duration-300 ease-in-out
        w-64 lg:translate-x-0
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-16 flex items-center px-6 border-b">
          <span className="text-xl font-bold text-blue-600">Mentee Portal</span>
        </div>
        
        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path}>
                  <div className={`
                    flex items-center px-4 py-3 rounded-lg cursor-pointer
                    ${item.active 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'}
                  `}>
                    <span className="mr-3">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <button 
        className="fixed top-4 left-4 z-40 lg:hidden bg-white p-2 rounded-md shadow-md"
        onClick={toggleMobile}
      >
        <Menu size={24} />
      </button>
    </>
  );
};