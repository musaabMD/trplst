'use client'

import React, { useState, useEffect } from 'react';
import { ChevronDown, Hash, ChevronRight, Menu, X, Settings } from 'lucide-react';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const LeftSidebar = ({ showDMList, setShowDMList, currentChannel, setCurrentChannel }) => {
  const [showChannels, setShowChannels] = useState(true);
  const [showDirectMessages, setShowDirectMessages] = useState(true);
  const [sidebarColor, setSidebarColor] = useState('bg-[#19171D]');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const colorOptions = [
    { name: 'Default Dark', color: 'bg-[#19171D]', textColor: 'text-gray-100' },
    { name: 'Midnight Blue', color: 'bg-[#1a1d24]', textColor: 'text-gray-100' },
    { name: 'Forest', color: 'bg-[#1a241f]', textColor: 'text-gray-100' },
    { name: 'Aubergine', color: 'bg-[#1f1a24]', textColor: 'text-gray-100' },
    { name: 'Maroon', color: 'bg-[#241a1a]', textColor: 'text-gray-100' },
  ];

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.sidebar-content')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const WorkspaceHeader = () => (
    <div className="px-4 py-3 border-b border-gray-800">
      <h1 className="text-lg font-semibold text-white flex items-center justify-between">
        Triplst
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X className="h-5 w-5" />
        </Button>
      </h1>
    </div>
  );

  const UserProfile = () => (
    <div className="p-3 border-b border-gray-800">
      <div className="flex items-center space-x-2">
        <div className="relative">
          <Avatar className="h-6 w-6">
            <AvatarImage src="/api/placeholder/24/24" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-500 border-2 border-[#19171D]" />
        </div>
        <span className="text-sm font-medium text-gray-200">Your Name</span>
      </div>
    </div>
  );

  const handleChannelClick = (channelId) => {
    setCurrentChannel(channelId);
    if (window.innerWidth < 768) {
      setIsMobileMenuOpen(false);
    }
  };

  const MobileMenuButton = () => (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-gray-200 hover:bg-gray-800"
    >
      <Menu className="h-5 w-5" />
    </button>
  );

  const ThemeSettings = () => (
    <div className="px-3 py-2 border-t border-gray-800 mt-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm"
            className="w-full justify-start text-sm text-gray-300 hover:text-gray-100 hover:bg-gray-800"
          >
            <Settings className="h-4 w-4 mr-2" />
            Change Theme
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top" className="w-56">
          <DropdownMenuLabel>Sidebar Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {colorOptions.map((option) => (
            <DropdownMenuItem
              key={option.color}
              onClick={() => setSidebarColor(option.color)}
              className="flex items-center space-x-2"
            >
              <div className={`w-4 h-4 rounded ${option.color}`} />
              <span>{option.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );

  const mainContent = (
    <div className={`${sidebarColor} h-full flex flex-col transition-colors duration-200 sidebar-content`}>
      <WorkspaceHeader />
      <UserProfile />
      
      <ScrollArea className="flex-1">
        <div className="p-2">
          {/* Channels Section */}
          <SidebarGroup>
            <SidebarGroupLabel 
              onClick={() => setShowChannels(!showChannels)}
              className="cursor-pointer flex items-center px-2 py-1 text-gray-300 hover:text-gray-100 text-sm"
            >
              {showChannels ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              <span className="ml-1 font-medium">Channels</span>
            </SidebarGroupLabel>
            
            {showChannels && (
              <SidebarGroupContent>
                <SidebarMenu>
                  {channels.map(channel => (
                    <SidebarMenuItem key={channel.id}>
                      <SidebarMenuButton
                        onClick={() => handleChannelClick(channel.id)}
                        className={`group px-2 py-1 w-full rounded text-sm transition-colors duration-100 ${
                          currentChannel === channel.id 
                            ? 'bg-[#1164A3] text-white' 
                            : 'text-gray-300 hover:bg-gray-800/50 hover:text-gray-100'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <Hash className="h-4 w-4" />
                          <span>{channel.name}</span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>

          {/* Direct Messages Section */}
          <SidebarGroup className="mt-4">
            <SidebarGroupLabel 
              onClick={() => setShowDirectMessages(!showDirectMessages)}
              className="cursor-pointer flex items-center px-2 py-1 text-gray-300 hover:text-gray-100 text-sm"
            >
              {showDirectMessages ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              <span className="ml-1 font-medium">Direct Messages</span>
            </SidebarGroupLabel>
            
            {showDirectMessages && (
              <SidebarGroupContent>
                <SidebarMenu>
                  {users.map(user => (
                    <SidebarMenuItem key={user.id}>
                      <SidebarMenuButton 
                        className="group px-2 py-1 w-full rounded text-sm text-gray-300 hover:bg-gray-800/50 hover:text-gray-100 transition-colors duration-100"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="relative flex-shrink-0">
                            <Avatar className="h-5 w-5">
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className={`absolute bottom-0 right-0 w-2 h-2 rounded-full border-2 ${sidebarColor} ${
                              user.status === 'online' ? 'bg-green-500' : 'bg-gray-500'
                            }`} />
                          </div>
                          <span>{user.name}</span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>
        </div>
      </ScrollArea>

      <ThemeSettings />
    </div>
  );

  return (
    <>
      <MobileMenuButton />
      <div className={`
        ${isMobileMenuOpen ? 'block' : 'hidden'}
        md:block
        w-64 lg:w-72 h-full fixed md:relative z-40
      `}>
        {mainContent}
      </div>
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default LeftSidebar;