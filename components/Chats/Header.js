"use client";
import React from 'react';
import { Menu, Search, Settings, Hash } from 'lucide-react';

const Header = ({ currentChannel, showDMList, setShowDMList }) => {
  return (
    <header className="flex-none bg-white border-b border-gray-200 px-4 py-3 sm:px-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-4">
        <button 
          className="md:hidden text-gray-600 hover:text-gray-900" 
          onClick={() => setShowDMList(!showDMList)}
        >
          <Menu size={20} />
        </button>
        <div>
          <h2 className="text-lg sm:text-xl font-semibold flex items-center">
            <Hash size={20} className="mr-2" />
            <span className="truncate"> {currentChannel}</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Team discussions and updates</p>
        </div>
      </div>
      <div className="flex items-center space-x-3 sm:space-x-6">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search messages"
            className="pl-10 pr-4 py-1.5 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 sm:w-64 hidden sm:block"
          />
        </div>
        <button className="text-gray-600 hover:text-gray-900">
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
