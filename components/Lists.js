// components/Lists.js
import React from 'react';
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const DirectMessageItem = ({ dm }) => (
  <div className="px-3 py-2 cursor-pointer hover:bg-gray-100">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img 
          src={dm.avatar} 
          alt={dm.name}
          className="w-10 h-10 object-cover"
        />
        <div>
          <h3 className="font-medium text-gray-900">{dm.name}</h3>
          <p className="text-sm text-gray-500">{dm.lastMessage}</p>
        </div>
      </div>
      <div className="flex flex-col items-end space-y-2">
        <span className="text-xs text-gray-500">{dm.time}</span>
        {dm.unread && (
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        )}
      </div>
    </div>
  </div>
);

const Lists = ({ dms }) => {
  // Use mock data if no DMs provided
  const mockDms = [
    { 
      id: 1, 
      name: 'John Doe', 
      lastMessage: 'Hey, are you in Tokyo?', 
      time: '2m ago',
      unread: true,
      avatar: 'https://i.pravatar.cc/150?u=john'
    },
    { 
      id: 2, 
      name: 'Sarah Wilson', 
      lastMessage: 'The weather is great here in NY!', 
      time: '5m ago',
      unread: false,
      avatar: 'https://i.pravatar.cc/150?u=sarah'
    },
    { 
      id: 3, 
      name: 'Mike Chen', 
      lastMessage: 'Let me know when you arrive', 
      time: '1h ago',
      unread: false,
      avatar: 'https://i.pravatar.cc/150?u=mike'
    },
    { 
      id: 4, 
      name: 'Emma Davis', 
      lastMessage: 'Great! See you tomorrow', 
      time: '3h ago',
      unread: true,
      avatar: 'https://i.pravatar.cc/150?u=emma'
    }
  ];

  const displayDms = dms?.length > 0 ? dms : mockDms;

  return (
    <div className="h-full bg-white">
      <div className="h-16 px-4 border-b flex items-center">
        <h1 className="text-xl font-semibold">Messages</h1>
      </div>
      <ScrollArea className="h-[calc(100%-4rem)]">
        <div className="py-2">
          {displayDms.map((dm) => (
            <DirectMessageItem key={dm.id} dm={dm} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Lists;