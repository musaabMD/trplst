// components/ChatMessage.js
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ChatMessage = ({ message, isSequential }) => {
  const isCurrentUser = message.author === 'You';
  const isSystem = message.type === 'system';

  if (isSystem) {
    return (
      <div className="flex justify-center my-6">
        <div className="bg-gray-100 text-gray-600 rounded-full px-4 py-2 text-sm">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-4 mb-6">
      {!isSequential && message.avatar && (
        <div className="flex-shrink-0">
          <Avatar className="h-14 w-14 rounded-lg">
            <AvatarImage src={message.avatar} alt={message.author} className="rounded-lg object-cover" />
            <AvatarFallback className="rounded-lg text-lg bg-gray-200 text-gray-600">
              {message.author[0]}
            </AvatarFallback>
          </Avatar>
        </div>
      )}
      {(!isSequential && !message.avatar) && (
        <div className="w-14" /> // Spacer for alignment when no avatar
      )}
      <div className="flex-1 min-w-0">
        {!isSequential && (
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-semibold text-lg truncate">
              {message.author}
            </span>
            <span className="text-sm text-gray-500 flex-shrink-0">{message.time}</span>
          </div>
        )}
        <div className={`rounded-lg px-4 py-3 text-lg break-words ${
          isCurrentUser
            ? 'bg-blue-600 text-white ml-14'
            : 'bg-gray-100 text-gray-900'
        }`}>
          {message.content}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;