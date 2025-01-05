'use client';

import React from 'react';
import { Send, Plus } from 'lucide-react';

const Footer = ({ message, setMessage, isTyping, setIsTyping }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message submission
      setMessage('');
      setIsTyping(false);
    }
  };

  return (
    <footer className="flex-none bg-white border-t border-gray-200 px-4 py-3 sm:px-6">
      <div className="max-w-full mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg p-1.5 sm:p-2">
            <div className="flex space-x-2">
              <button type="button" className="p-1.5 sm:p-2 hover:bg-gray-100 rounded">
                <Plus size={18} className="text-gray-500" />
              </button>
            </div>
            <input
              type="text"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setIsTyping(e.target.value.length > 0);
              }}
              placeholder="Jot something down"
              className="flex-1 px-2 py-1.5 focus:outline-none text-sm sm:text-base"
            />
            <button
              type="submit"
              disabled={!isTyping}
              className={`p-1.5 sm:p-2 rounded-full transition-all duration-200 ${
                isTyping 
                  ? 'bg-blue-500 text-white hover:bg-blue-600' 
                  : 'text-gray-400'
              }`}
            >
              <Send size={18} className={isTyping ? 'transform rotate-45' : ''} />
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;