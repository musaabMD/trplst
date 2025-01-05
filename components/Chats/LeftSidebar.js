import React, { useState } from 'react';
import { ChevronDown, Hash, ChevronRight, Users } from 'lucide-react';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

const LeftSidebar = ({ showDMList, setShowDMList, currentChannel, setCurrentChannel }) => {
  const [showChannels, setShowChannels] = useState(true);
  const [showDirectMessages, setShowDirectMessages] = useState(true);
  
  const users = [
    { id: 1, name: 'John Doe', status: 'online', avatar: '/api/placeholder/32/32' },
    { id: 2, name: 'Jane Smith', status: 'offline', avatar: '/api/placeholder/32/32' },
    { id: 3, name: 'Mike Johnson', status: 'online', avatar: '/api/placeholder/32/32' }
  ];

  const channels = [
    { id: 'general', name: 'general' },
    { id: 'random', name: 'random' },
    { id: 'team', name: 'team' }
  ];

  return (
    <div className="w-64 lg:w-72 h-full bg-gray-900">
      <ScrollArea className="h-full">
        <div className="p-4">
          {/* Channels Section */}
          <SidebarGroup>
            <SidebarGroupLabel 
              onClick={() => setShowChannels(!showChannels)}
              className="cursor-pointer flex items-center text-gray-400 hover:text-gray-300"
            >
              {showChannels ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              <span className="ml-1">Channels</span>
            </SidebarGroupLabel>
            
            {showChannels && (
              <SidebarGroupContent>
                <SidebarMenu>
                  {channels.map(channel => (
                    <SidebarMenuItem key={channel.id}>
                      <SidebarMenuButton
                        onClick={() => {
                          setCurrentChannel(channel.id);
                          if (window.innerWidth < 768) {
                            setShowDMList(false);
                          }
                        }}
                        className={currentChannel === channel.id ? 'bg-gray-800' : ''}
                      >
                        <Hash className="h-4 w-4" />
                        <span>{channel.name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>

          {/* Direct Messages Section */}
          <SidebarGroup className="mt-6">
            <SidebarGroupLabel 
              onClick={() => setShowDirectMessages(!showDirectMessages)}
              className="cursor-pointer flex items-center text-gray-400 hover:text-gray-300"
            >
              {showDirectMessages ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              <span className="ml-1">Direct Messages</span>
            </SidebarGroupLabel>
            
            {showDirectMessages && (
              <SidebarGroupContent>
                <SidebarMenu>
                  {users.map(user => (
                    <SidebarMenuItem key={user.id}>
                      <SidebarMenuButton className="flex items-center space-x-2">
                        <div className="relative flex-shrink-0">
                          <img 
                            src={user.avatar} 
                            alt="" 
                            className="w-6 h-6 rounded"
                          />
                          <span className={`absolute bottom-0 right-0 w-2 h-2 rounded-full ${
                            user.status === 'online' ? 'bg-green-500' : 
                            user.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                          }`} />
                        </div>
                        <span>{user.name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>
        </div>
      </ScrollArea>
    </div>
  );
};

export default LeftSidebar;