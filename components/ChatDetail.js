// components/ChatDetail.js
import React, { useState } from 'react';
import { ArrowLeft, Send, Paperclip, SmilePlus, Users2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import ChatMessage from './ChatMessage';

const ChatHeader = ({ chat, onBack, isMobile }) => (
  <div className="h-20 px-6 flex items-center justify-between border-b bg-white sticky top-0">
    <div className="flex items-center gap-4">
      {isMobile && (
        <Button 
          variant="ghost" 
          size="icon"
          onClick={onBack}
          className="h-12 w-12"
        >
          <ArrowLeft size={24} />
        </Button>
      )}
      <div>
        <h2 className="font-semibold text-2xl flex items-center gap-3">
          {chat.city}
          <span className="text-3xl">{chat.flag}</span>
        </h2>
        <div className="flex items-center gap-2 text-base text-gray-500">
          <Users2 size={18} />
          <span>{chat.members} members</span>
          <span className="mx-2">•</span>
          <span>{chat.lastActive}</span>
        </div>
      </div>
    </div>
    <Button variant="ghost" size="icon" className="h-12 w-12">
      <Users2 size={24} />
    </Button>
  </div>
);

const ChatInput = ({ messageInput, setMessageInput, handleSend, handleKeyPress }) => (
  <div className="p-4 border-t bg-white sticky bottom-0">
    <div className="flex gap-3 items-end">
      <div className="flex-1 bg-gray-50 rounded-lg p-3">
        <Input
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          className="border-0 bg-transparent focus:ring-0 text-lg"
          multiline="true"
          rows={1}
        />
        <div className="flex items-center gap-3 mt-2 text-gray-500">
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <Paperclip size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <SmilePlus size={20} />
          </Button>
        </div>
      </div>
      <Button 
        onClick={handleSend}
        disabled={!messageInput.trim()}
        size="icon"
        className="h-12 w-12"
      >
        <Send size={24} />
      </Button>
    </div>
  </div>
);

const ChatDetail = ({ chat, onBack, isMobile = false }) => {
  const [messageInput, setMessageInput] = useState('');
  
  // Mock messages data with larger square avatars
  const messages = [
    {
      id: 1,
      author: 'System',
      content: 'Welcome to Tokyo Travel Community! 🗼',
      time: '2:25 PM',
      type: 'system'
    },
    {
      id: 2,
      author: 'John Doe',
      content: 'Hey everyone! Just arrived in Tokyo. Super excited to explore the city! 🇯🇵',
      time: '2:30 PM',
      avatar: '/api/placeholder/100/100',
    },
    {
      id: 3,
      author: 'You',
      content: 'Welcome to Tokyo! How was your flight?',
      time: '2:31 PM',
      avatar: null,
    },
    {
      id: 4,
      author: 'Sarah Wilson',
      content: 'The cherry blossoms are beautiful this time of year! Make sure to check out Ueno Park, it\'s absolutely stunning right now. 🌸',
      time: '2:33 PM',
      avatar: '/api/placeholder/100/100',
    },
    {
      id: 5,
      author: 'John Doe',
      content: 'Flight was long but comfortable! Thanks for asking.',
      time: '2:34 PM',
      avatar: '/api/placeholder/100/100',
    },
    {
      id: 6,
      author: 'John Doe',
      content: '@Sarah thanks for the tip! Any other must-visit spots?',
      time: '2:34 PM',
      avatar: '/api/placeholder/100/100',
    },
    {
      id: 7,
      author: 'Mike Chen',
      content: 'If you\'re into photography, you should definitely check out the Shibuya Crossing at night. The neon lights are incredible! 📸',
      time: '2:36 PM',
      avatar: '/api/placeholder/100/100',
    },
    {
      id: 8,
      author: 'You',
      content: 'And don\'t forget to try the ramen at Ichiran! It\'s a life-changing experience 🍜',
      time: '2:37 PM',
      avatar: null,
    },
    {
      id: 9,
      author: 'System',
      content: 'John Doe shared a location',
      time: '2:38 PM',
      type: 'system'
    },
    {
      id: 10,
      author: 'Sarah Wilson',
      content: 'Oh also, if you\'re into anime and manga, you must visit Akihabara! The whole district is like stepping into another world ✨',
      time: '2:39 PM',
      avatar: '/api/placeholder/100/100',
    },
    {
      id: 11,
      author: 'John Doe',
      content: 'Thanks everyone! You\'re all so helpful. I\'ve added all these places to my itinerary 📝',
      time: '2:40 PM',
      avatar: '/api/placeholder/100/100',
    },
    {
      id: 12,
      author: 'Emma Davis',
      content: 'Hey John! If you need a guide, I\'m free this weekend. Been living here for 3 years now! 🙋‍♀️',
      time: '2:42 PM',
      avatar: '/api/placeholder/100/100',
    },
    {
      id: 13,
      author: 'You',
      content: 'That\'s so kind of you Emma! John, you should definitely take her up on that offer!',
      time: '2:43 PM',
      avatar: null,
    }
  ];

  const handleSend = () => {
    if (messageInput.trim()) {
      // Handle sending message
      setMessageInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const getSequentialMessages = () => {
    return messages.map((message, index) => {
      const isSequential = index > 0 && 
        messages[index - 1].author === message.author &&
        new Date(message.time) - new Date(messages[index - 1].time) < 300000;
      return { ...message, isSequential };
    });
  };

  if (!chat) return null;

  return (
    <div className="flex flex-col h-screen bg-white">
      <ChatHeader chat={chat} onBack={onBack} isMobile={isMobile} />
      
      <ScrollArea className="flex-1">
        <div className="px-6 py-4">
          {getSequentialMessages().map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              isSequential={message.isSequential}
            />
          ))}
        </div>
      </ScrollArea>

      <ChatInput
        messageInput={messageInput}
        setMessageInput={setMessageInput}
        handleSend={handleSend}
        handleKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default ChatDetail;