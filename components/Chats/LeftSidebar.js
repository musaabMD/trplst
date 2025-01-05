'use client';

import React, { useState } from 'react';
import { ChevronDown, Hash, ChevronRight } from 'lucide-react';

const LeftSidebar = ({ showDMList, setShowDMList, currentChannel, setCurrentChannel }) => {
  const [showChannels, setShowChannels] = useState(true);
  const [showDirectMessages, setShowDirectMessages] = useState(true);
  
  const users = [
    { id: 1, name: 'John Doe', status: 'online', avatar: 'https://i.pravatar.cc/301' },
    { id: 2, name: 'Jane Smith', status: 'offline', avatar: 'https://i.pravatar.cc/302' },
    { id: 3, name: 'Mike Johnson', status: 'online', avatar: 'https://i.pravatar.cc/303' }
  ];

  const channels = [
    { id: 'general', name: 'general' },
    { id: 'random', name: 'random' },
    { id: 'team', name: 'team' }
  ];

  return (
    <aside className={`${
      showDMList ? 'fixed inset-y-0 left-0 z-50 w-64 sm:w-72' : 'hidden'
    } md:relative md:flex md:w-72 lg:w-80 flex-col bg-gray-900`}>
      <div className="p-4 sm:p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="bg-red-500 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-xl sm:text-2xl font-bold">
            T
          </div>
          <h1 className="text-white text-xl sm:text-2xl font-bold">Triplst</h1>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-3 sm:p-4">
          {/* Channels */}
          <button 
            className="w-full text-left mb-2 group"
            onClick={() => setShowChannels(!showChannels)}
          >
            <h2 className="text-gray-400 text-base sm:text-lg font-bold flex items-center">
              {showChannels ? (
                <ChevronDown size={16} className="mr-1 transition-transform" />
              ) : (
                <ChevronRight size={16} className="mr-1 transition-transform" />
              )}
              <span className="group-hover:text-gray-300">Channels</span>
            </h2>
          </button>

          {showChannels && (
            <ul className="space-y-1 mb-6">
              {channels.map(channel => (
                <li 
                  key={channel.id}
                  onClick={() => {
                    setCurrentChannel(channel.id);
                    if (window.innerWidth < 768) {
                      setShowDMList(false);
                    }
                  }}
                  className={`flex items-center text-gray-300 hover:bg-gray-800 px-2 py-1.5 sm:px-3 sm:py-2 text-base sm:text-lg font-semibold rounded cursor-pointer ${
                    currentChannel === channel.id ? 'bg-gray-800' : ''
                  }`}
                >
                  <Hash size={16} className="mr-2 flex-shrink-0" />
                  <span className="truncate">{channel.name}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Direct Messages */}
          <button 
            className="w-full text-left mb-2 group"
            onClick={() => setShowDirectMessages(!showDirectMessages)}
          >
            <h2 className="text-gray-400 text-base sm:text-lg font-bold flex items-center">
              {showDirectMessages ? (
                <ChevronDown size={16} className="mr-1 transition-transform" />
              ) : (
                <ChevronRight size={16} className="mr-1 transition-transform" />
              )}
              <span className="group-hover:text-gray-300">Direct Messages</span>
            </h2>
          </button>

          {showDirectMessages && (
            <ul className="space-y-1">
              {users.map(user => (
                <li 
                  key={user.id}
                  className="flex items-center text-gray-300 hover:bg-gray-800 px-2 py-1.5 sm:px-3 sm:py-2 rounded cursor-pointer"
                >
                  <div className="relative flex-shrink-0">
                    <img 
                      src={user.avatar} 
                      alt="" 
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded"
                    />
                    <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ${
                      user.status === 'online' ? 'bg-green-500' : 
                      user.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                    }`} />
                  </div>
                  <span className="ml-2 text-sm sm:text-base font-medium truncate">
                    {user.name}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;