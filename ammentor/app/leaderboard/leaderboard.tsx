import React from 'react';
import { LeaderboardItem } from './leaderboardItems';

export interface LeaderboardEntry {
  position: number;
  name: string;
  points: string;
}

interface LeaderboardProps {
  title: string;
  entries: LeaderboardEntry[];
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ title, entries }) => {
  const topEntries = entries.filter(entry => entry.position <= 3);
  
  const orderedPodium = [
    topEntries.find(entry => entry.position === 2),
    topEntries.find(entry => entry.position === 1),
    topEntries.find(entry => entry.position === 3)
  ].filter(Boolean) as LeaderboardEntry[];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">{title}</h2>
      
      <div className="flex justify-center items-end mb-12 px-4">
        {orderedPodium.map((entry) => {
          const position = entry.position;
          const podiumHeight = position === 1 ? "h-32" : position === 2 ? "h-24" : "h-16";
          const podiumColor = position === 1 ? "bg-yellow-400" : position === 2 ? "bg-gray-300" : "bg-amber-600";
          const medalEmoji = position === 1 ? "🥇" : position === 2 ? "🥈" : "🥉";
          
          return (
            <div key={position} className="flex flex-col items-center mx-2 w-1/3">
              <div className="flex flex-col items-center mb-2">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 mb-2 relative">
 
                  <div className="absolute inset-0 flex items-center justify-center text-3xl">
                    {medalEmoji}
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-medium text-sm truncate max-w-full">{entry.name}</p>
                  <p className="text-gray-600 font-bold">{entry.points}</p>
                </div>
              </div>
              <div className={`w-full rounded-t-lg ${podiumColor} ${podiumHeight} flex items-center justify-center text-white font-bold text-2xl`}>
                {position}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 border-t pt-6">
        <h3 className="text-lg font-medium mb-4">All Rankings</h3>
        <div className="flex justify-between items-center mb-4 text-gray-700 font-medium px-4">
          <div className="flex items-center">
            <div className="w-8">Rank</div>
            <div className="ml-16">Name</div>
          </div>
          <div>Points</div>
        </div>
        <div className="space-y-2">
          {entries.map((item) => (
            <LeaderboardItem 
              key={item.position} 
              position={item.position} 
              name={item.name} 
              points={item.points} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};