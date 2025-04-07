// src/components/auth/RoleSelector.tsx
import React from 'react';

type Role = 'mentor' | 'mentee';

interface RoleSelectorProps {
  selectedRole: Role;
  setSelectedRole: (role: Role) => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ selectedRole, setSelectedRole }) => {
  return (
    <div className="w-full max-w-xs mx-auto mb-6">
      <div className="relative bg-gray-200 rounded-full p-1">

        <div 
          className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-blue-600 transition-all duration-300 ease-in-out ${
            selectedRole === 'mentee' ? 'left-1' : 'left-1/2'
          }`}
        />
        
        <div className="relative flex">
          <button
            type="button"
            onClick={() => setSelectedRole('mentee')}
            className={`flex-1 py-2 rounded-full text-center z-10 transition-colors duration-300 ${
              selectedRole === 'mentee' ? 'text-white font-medium' : 'text-gray-700'
            }`}
          >
            Mentee
          </button>
          <button
            type="button"
            onClick={() => setSelectedRole('mentor')}
            className={`flex-1 py-2 rounded-full text-center z-10 transition-colors duration-300 ${
              selectedRole === 'mentor' ? 'text-white font-medium' : 'text-gray-700'
            }`}
          >
            Mentor
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelector;