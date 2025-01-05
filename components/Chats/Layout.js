"use client"
import React, { useState } from 'react';
import { AppSidebar } from './AppSidebar';
import Header from './Header';
import Footer from './Footer';
import ChatArea from './ChatArea';
import RightSidebar from './RightSidebar';
import MobileTabBar from './MobileTabBar';
import { cn } from '@/lib/utils';
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

const Layout = () => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentChannel, setCurrentChannel] = useState('general');
  const [hoveredMessageId, setHoveredMessageId] = useState(null);
  const [showReactionPicker, setShowReactionPicker] = useState(false);
  const [selectedMessageForReaction, setSelectedMessageForReaction] = useState(null);
  const [activeTab, setActiveTab] = useState('chat');

  const quickReactions = ['👍', '❤️', '😊', '🎉', '👀', '🚀'];

  const handleAddReaction = (messageId, emoji) => {
    console.log('Adding reaction', emoji, 'to message', messageId);
    setShowReactionPicker(false);
    setSelectedMessageForReaction(null);
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-200">
          <div className="flex items-center gap-2 px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>{currentChannel}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex-1 flex flex-col min-w-0">
          {/* Chat and Right Sidebar Container */}
          <div className="flex-1 flex overflow-hidden">
            {/* Chat Area */}
            <div className={cn(
              "flex-1 flex flex-col min-w-0",
              activeTab !== 'chat' && 'hidden md:flex'
            )}>
              <ChatArea 
                hoveredMessageId={hoveredMessageId}
                setHoveredMessageId={setHoveredMessageId}
                showReactionPicker={showReactionPicker}
                setShowReactionPicker={setShowReactionPicker}
                selectedMessageForReaction={selectedMessageForReaction}
                setSelectedMessageForReaction={setSelectedMessageForReaction}
                quickReactions={quickReactions}
                handleAddReaction={handleAddReaction}
              />
              <Footer 
                message={message}
                setMessage={setMessage}
                isTyping={isTyping}
                setIsTyping={setIsTyping}
              />
            </div>
            
            {/* Right Sidebar */}
            <div className="hidden lg:block">
              <RightSidebar />
            </div>
          </div>

          {/* Mobile Tab Bar */}
          <div className="pb-16 md:pb-0">
            <MobileTabBar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;