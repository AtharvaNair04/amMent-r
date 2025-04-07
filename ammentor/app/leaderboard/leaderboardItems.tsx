import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface LeaderboardItemProps {
  position: number;
  name: string;
  points: string;
}

export const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ position, name, points }) => {

  const getMedalEmoji = (pos: number) => {
    if (pos === 1) return "🥇";
    if (pos === 2) return "🥈";
    if (pos === 3) return "🥉";
    return "";
  };
  const displayPosition = (pos: number) => {
    if (pos <= 3) return getMedalEmoji(pos);
    return pos;
  };

  return (
    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-100 bg-white hover:bg-gray-50">
      <div className="flex items-center">
        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-gray-700">
          {displayPosition(position)}
        </div>
        
        <div className="ml-4 flex items-center">
          <div className="w-10 h-10 bg-gray-200 rounded-md overflow-hidden flex items-center justify-center text-xl">
            {getMedalEmoji(position)}
          </div>
          <div className="ml-3">
            <span className="font-medium text-gray-800">{name}</span>
            <p className="text-xs text-gray-500">Ranked #{position}</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center">
        <span className="text-gray-700 font-semibold mr-3">{points}</span>
        <CheckCircle2 className="text-green-500" size={20} />
      </div>
    </div>
  );
};