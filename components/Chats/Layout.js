'use client';

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import ChatArea from './ChatArea';

const Layout = () => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentChannel, setCurrentChannel] = useState('general');
  const [showDMList, setShowDMList] = useState(false);
  const [hoveredMessageId, setHoveredMessageId] = useState(null);
  const [showReactionPicker, setShowReactionPicker] = useState(false);
  const [selectedMessageForReaction, setSelectedMessageForReaction] = useState(null);

  // Common emoji reactions
  const quickReactions = ['👍', '❤️', '😊', '🎉', '👀', '🚀'];

  const handleAddReaction = (messageId, emoji) => {
    // Here you would update your messages state with the new reaction
    console.log('Adding reaction', emoji, 'to message', messageId);
    setShowReactionPicker(false);
    setSelectedMessageForReaction(null);
  };

  return (
    <div className="h-screen w-full flex">
      {/* Left Sidebar - always at full height */}
      <LeftSidebar 
        showDMList={showDMList}
        setShowDMList={setShowDMList}
        currentChannel={currentChannel}
        setCurrentChannel={setCurrentChannel}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header - above both chat and right sidebar */}
        <Header 
          currentChannel={currentChannel} 
          showDMList={showDMList}
          setShowDMList={setShowDMList}
        />
        
        {/* Chat and Right Sidebar Container */}
        <div className="flex-1 flex overflow-hidden">
          {/* Chat Area */}
          <div className="flex-1 flex flex-col min-w-0">
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
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;