// components/Chat.js
import React, { useState, useEffect } from 'react';
import { Users2, Pin, PinOff, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import ChatDetail from './ChatDetail';

const ChatItem = ({ chat, onPin, onSelect, isActive }) => (
  <div 
    className={`px-3 py-2 cursor-pointer ${
      isActive ? 'bg-blue-50' : 'hover:bg-gray-50'
    }`}
    onClick={() => onSelect(chat)}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <span className="text-xl">
          {getFlagEmoji(chat.country)}
        </span>
        <div>
          <h3 className="font-medium text-gray-900">{chat.city}</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Users2 size={14} />
            <span>{formatNumber(chat.members)}</span>
            <span>•</span>
            <span>{chat.lastActive}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        {chat.trending && (
          <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full mr-2">
            Trending
          </span>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            onPin(chat.id);
          }}
          className={chat.isPinned ? 'text-blue-600' : 'text-gray-400'}
        >
          {chat.isPinned ? <Pin size={16} /> : <PinOff size={16} />}
        </Button>
      </div>
    </div>
  </div>
);

const ChatSidebar = ({ cityChats = [], pinnedChats = [], togglePin, onSelectChat, selectedChatId }) => (
  <div className="flex flex-col h-full bg-[#F8F9FA]">
    <div className="p-3">
      <div className="relative">
        <Input
          placeholder="Search channels..."
          className="pl-8 bg-white"
        />
        <Search className="w-4 h-4 absolute left-2 top-3 text-gray-500" />
      </div>
    </div>
    
    <ScrollArea className="flex-1">
      {pinnedChats.length > 0 && (
        <div className="mb-2">
          <div className="px-3 py-2 bg-[#EBEDF0] text-xs font-bold text-[#1D1C1D] uppercase flex items-center justify-between">
            <span>Pinned Cities</span>
          </div>
          {pinnedChats.map((chat) => (
            <ChatItem 
              key={`pinned-${chat.id}`} 
              chat={chat} 
              onPin={togglePin}
              onSelect={onSelectChat}
              isActive={selectedChatId === chat.id}
            />
          ))}
        </div>
      )}

      <div className="px-3 py-2 bg-[#EBEDF0] text-xs font-bold text-[#1D1C1D] uppercase flex items-center justify-between">
        <span>All Cities</span>
      </div>
      {cityChats.filter(chat => !chat.isPinned).map((chat) => (
        <ChatItem 
          key={chat.id} 
          chat={chat} 
          onPin={togglePin}
          onSelect={onSelectChat}
          isActive={selectedChatId === chat.id}
        />
      ))}
    </ScrollArea>
  </div>
);

const Chat = ({ cityChats = [], pinnedChats = [], togglePin }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Changed breakpoint to md
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleSelectChat = (chat) => {
    setSelectedChat({
      ...chat,
      flag: getFlagEmoji(chat.country)
    });
  };

  // For mobile, show only chat detail when a chat is selected
  if (isMobile && selectedChat) {
    return (
      <ChatDetail 
        chat={selectedChat} 
        onBack={() => setSelectedChat(null)}
        isMobile={true}
      />
    );
  }

  // Desktop layout
  if (!isMobile) {
    return (
      <div className="flex h-full">
        <div className="w-80 border-r flex-shrink-0">
          <ChatSidebar 
            cityChats={cityChats}
            pinnedChats={pinnedChats}
            togglePin={togglePin}
            onSelectChat={handleSelectChat}
            selectedChatId={selectedChat?.id}
          />
        </div>
        <div className="flex-1 bg-white">
          {selectedChat ? (
            <ChatDetail chat={selectedChat} />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              Select a chat to start messaging
            </div>
          )}
        </div>
      </div>
    );
  }

  // Mobile layout (chat list)
  return (
    <ChatSidebar 
      cityChats={cityChats}
      pinnedChats={pinnedChats}
      togglePin={togglePin}
      onSelectChat={handleSelectChat}
      selectedChatId={selectedChat?.id}
    />
  );
};

const getFlagEmoji = (countryCode) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
};

const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US', { 
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(num);
};

export default Chat;