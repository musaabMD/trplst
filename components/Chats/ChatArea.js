'use client';

import React from 'react';
import { Smile, MoreHorizontal } from 'lucide-react';

const ChatArea = ({ 
  hoveredMessageId, 
  setHoveredMessageId, 
  showReactionPicker, 
  setShowReactionPicker,
  selectedMessageForReaction,
  setSelectedMessageForReaction,
  quickReactions,
  handleAddReaction
}) => {
  const messages = [
    {
      id: 1,
      user: 'John Doe',
      avatar: 'https://i.pravatar.cc/306',
      message: 'Hey team! How is everyone doing today? We should discuss the upcoming project deadlines and make sure we are all aligned on the goals.',
      timestamp: '11:57 PM',
      reactions: [{emoji: '👍', count: 2, users: ['Jane Smith', 'Mike Johnson']}]
    },
    {
      id: 2,
      user: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/307',
      message: 'Working on the new feature implementation. Making good progress! 🚀',
      timestamp: '11:58 PM',
      reactions: [{emoji: '🚀', count: 1, users: ['John Doe']}]
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-white">
      <div className="p-3 sm:p-4 space-y-2">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className="group relative flex items-start space-x-2 sm:space-x-3 hover:bg-gray-50 p-2 sm:p-3 rounded-lg"
            onMouseEnter={() => setHoveredMessageId(msg.id)}
            onMouseLeave={() => setHoveredMessageId(null)}
          >
            <img
              src={msg.avatar}
              alt={msg.user}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline space-x-2">
                <span className="font-semibold text-base sm:text-lg">{msg.user}</span>
                <span className="text-xs sm:text-sm text-gray-500">{msg.timestamp}</span>
              </div>
              <p className="text-sm sm:text-base text-gray-800 mt-1 break-words">
                {msg.message}
              </p>
              
              {msg.reactions.length > 0 && (
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-2">
                  {msg.reactions.map((reaction, index) => (
                    <button
                      key={index}
                      onClick={() => handleAddReaction(msg.id, reaction.emoji)}
                      className="inline-flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 rounded-full px-2 py-0.5 sm:px-3 sm:py-1 text-sm"
                      title={reaction.users.join(', ')}
                    >
                      <span>{reaction.emoji}</span>
                      <span className="text-gray-600 text-xs sm:text-sm">{reaction.count}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {hoveredMessageId === msg.id && (
              <div className="absolute right-2 top-2 sm:right-4 sm:top-4 flex items-center space-x-1 bg-white shadow-lg rounded-lg px-1 py-0.5 sm:px-2 sm:py-1">
                <button 
                  onClick={() => {
                    setSelectedMessageForReaction(msg.id);
                    setShowReactionPicker(true);
                  }}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Smile size={14} className="sm:w-4 sm:h-4" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <MoreHorizontal size={14} className="sm:w-4 sm:h-4" />
                </button>
              </div>
            )}

            {/* Reaction Picker */}
            {showReactionPicker && selectedMessageForReaction === msg.id && (
              <div className="absolute right-2 top-10 sm:right-4 sm:top-12 bg-white shadow-lg rounded-lg p-2 z-50">
                <div className="flex space-x-2">
                  {quickReactions.map((emoji, index) => (
                    <button
                      key={index}
                      onClick={() => handleAddReaction(msg.id, emoji)}
                      className="hover:bg-gray-100 p-2 rounded text-lg"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatArea;