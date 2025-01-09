// components/LocalUsers.js
import React from 'react';
import { MapPin } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const LocalUserItem = ({ user }) => (
  <div className="px-3 py-2 cursor-pointer hover:bg-gray-100">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img 
            src={user.avatar} 
            alt={user.name}
            className="w-10 h-10 object-cover"
          />
          <span 
            className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full ${
              user.active ? 'bg-green-500' : 'bg-gray-300'
            }`}
          />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{user.name}</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <MapPin size={14} />
            <span>{user.location}</span>
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-500">
        {user.distance}
      </div>
    </div>
  </div>
);

const LocalUsers = ({ users }) => {
  // Mock data if no users provided
  const mockUsers = [
    { 
      id: 1, 
      name: 'Alice Cooper', 
      distance: '0.5km', 
      active: true,
      location: 'Tokyo, Japan',
      avatar: 'https://i.pravatar.cc/150?u=alice'
    },
    { 
      id: 2, 
      name: 'Bob Wilson', 
      distance: '1.2km', 
      active: false,
      location: 'Tokyo, Japan',
      avatar: 'https://i.pravatar.cc/150?u=bob'
    },
    { 
      id: 3, 
      name: 'Carol Smith', 
      distance: '2.1km', 
      active: true,
      location: 'Tokyo, Japan',
      avatar: 'https://i.pravatar.cc/150?u=carol'
    },
    { 
      id: 4, 
      name: 'David Lee', 
      distance: '2.8km', 
      active: true,
      location: 'Tokyo, Japan',
      avatar: 'https://i.pravatar.cc/150?u=david'
    }
  ];

  const displayUsers = users?.length > 0 ? users : mockUsers;

  return (
    <div className="h-full bg-white">
      <div className="h-16 px-4 border-b flex items-center">
        <h1 className="text-xl font-semibold">Nearby Travelers</h1>
      </div>
      <ScrollArea className="h-[calc(100%-4rem)]">
        <div className="py-2">
          {displayUsers.map((user) => (
            <LocalUserItem key={user.id} user={user} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default LocalUsers;