'use client';

import React from 'react';
import { Users } from 'lucide-react';

const RightSidebar = () => {
  const users = [
    { id: 1, name: 'John Doe', status: 'online', avatar: 'https://i.pravatar.cc/301' },
    { id: 2, name: 'Jane Smith', status: 'offline', avatar: 'https://i.pravatar.cc/302' },
    { id: 3, name: 'Mike Johnson', status: 'online', avatar: 'https://i.pravatar.cc/303' },
    { id: 4, name: 'Sarah Williams', status: 'away', avatar: 'https://i.pravatar.cc/304' },
    { id: 5, name: 'Alex Brown', status: 'online', avatar: 'https://i.pravatar.cc/305' }
  ];

  return (
    <div className="hidden lg:block w-64 xl:w-72 border-l border-gray-200 overflow-y-auto bg-white">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Users size={18} className="text-gray-500" />
          <h3 className="font-semibold text-gray-700 text-sm">Users</h3>
        </div>
        <ul className="space-y-2">
          {users.map(user => (
            <li key={user.id} className="flex items-center space-x-2 py-1">
              <div className="relative flex-shrink-0">
                <img 
                  src={user.avatar} 
                  alt="" 
                  className="w-8 h-8 rounded"
                />
                <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ${
                  user.status === 'online' ? 'bg-green-500' : 
                  user.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                }`} />
              </div>
              <span className="text-gray-700 text-sm font-medium truncate">
                {user.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;