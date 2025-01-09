// // "use client"

// // import React, { useState } from 'react';
// // import Header from './Header';
// // import Footer from './Footer';
// // import LeftSidebar from './LeftSidebar';
// // import RightSidebar from './RightSidebar';
// // import ChatArea from './ChatArea';
// // import MobileTabBar from './MobileTabBar';
// // import { cn } from '@/lib/utils';
// // import {
// //   Sidebar,
// //   SidebarContent,
// //   SidebarFooter,
// //   SidebarHeader,
// //   SidebarProvider,
// //   SidebarTrigger,
// //   SidebarInset
// // } from "@/components/ui/sidebar";
// // import { Separator } from "@/components/ui/separator";

// // const Layout = () => {
// //   const [message, setMessage] = useState('');
// //   const [isTyping, setIsTyping] = useState(false);
// //   const [currentChannel, setCurrentChannel] = useState('general');
// //   const [showDMList, setShowDMList] = useState(false);
// //   const [hoveredMessageId, setHoveredMessageId] = useState(null);
// //   const [showReactionPicker, setShowReactionPicker] = useState(false);
// //   const [selectedMessageForReaction, setSelectedMessageForReaction] = useState(null);
// //   const [activeTab, setActiveTab] = useState('chat');

// //   const quickReactions = ['👍', '❤️', '😊', '🎉', '👀', '🚀'];

// //   const handleAddReaction = (messageId, emoji) => {
// //     console.log('Adding reaction', emoji, 'to message', messageId);
// //     setShowReactionPicker(false);
// //     setSelectedMessageForReaction(null);
// //   };

// //   return (
// //     <SidebarProvider>
// //       <div className="h-screen w-full flex flex-col md:flex-row">
// //         {/* Left Sidebar - hidden on mobile unless explicitly shown */}
// //         <div className={cn(
// //           showDMList ? 'block' : 'hidden',
// //           'md:block'
// //         )}>
// //           <LeftSidebar 
// //             showDMList={showDMList}
// //             setShowDMList={setShowDMList}
// //             currentChannel={currentChannel}
// //             setCurrentChannel={setCurrentChannel}
// //           />
// //         </div>
        
// //         {/* Main Content Area */}
// //         <div className="flex-1 flex flex-col min-w-0">
// //           <Header 
// //             currentChannel={currentChannel} 
// //             showDMList={showDMList}
// //             setShowDMList={setShowDMList}
// //           />
          
// //           {/* Chat and Right Sidebar Container */}
// //           <div className="flex-1 flex overflow-hidden">
// //             {/* Chat Area - shown when chat tab is active on mobile */}
// //             <div className={cn(
// //               "flex-1 flex flex-col min-w-0",
// //               activeTab !== 'chat' && 'hidden md:flex'
// //             )}>
// //               <ChatArea 
// //                 hoveredMessageId={hoveredMessageId}
// //                 setHoveredMessageId={setHoveredMessageId}
// //                 showReactionPicker={showReactionPicker}
// //                 setShowReactionPicker={setShowReactionPicker}
// //                 selectedMessageForReaction={selectedMessageForReaction}
// //                 setSelectedMessageForReaction={setSelectedMessageForReaction}
// //                 quickReactions={quickReactions}
// //                 handleAddReaction={handleAddReaction}
// //               />
// //               <Footer 
// //                 message={message}
// //                 setMessage={setMessage}
// //                 isTyping={isTyping}
// //                 setIsTyping={setIsTyping}
// //               />
// //             </div>
            
// //             {/* Right Sidebar - hidden on mobile */}
// //             <div className="hidden lg:block">
// //               <RightSidebar />
// //             </div>
// //           </div>

// //           {/* Mobile Tab Bar - adjust margin-bottom to account for mobile tab bar */}
// //           <div className="pb-16 md:pb-0">
// //             <MobileTabBar activeTab={activeTab} setActiveTab={setActiveTab} />
// //           </div>
// //         </div>
// //       </div>
// //     </SidebarProvider>
// //   );
// // };

// // export default Layout;
// // components/Chats/Layout.jsx
// 'use client';

// import React, { useState } from 'react';
// import { SidebarProvider } from "@/components/UI/sidebar";
// import LeftSidebar from './sidebar/LeftSidebar';
// import Header from './Header';
// import Footer from './Footer';
// import ChatArea from './ChatArea';
// import RightSidebar from './RightSidebar';
// import MobileTabBar from './MobileTabBar';
// import { cn } from '@/lib/utils';

// function Layout() {
//   const [message, setMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const [currentChannel, setCurrentChannel] = useState('general');
//   const [showDMList, setShowDMList] = useState(false);
//   const [hoveredMessageId, setHoveredMessageId] = useState(null);
//   const [showReactionPicker, setShowReactionPicker] = useState(false);
//   const [selectedMessageForReaction, setSelectedMessageForReaction] = useState(null);
//   const [activeTab, setActiveTab] = useState('chat');

//   const quickReactions = ['👍', '❤️', '😊', '🎉', '👀', '🚀'];

//   const handleAddReaction = (messageId, emoji) => {
//     console.log('Adding reaction', emoji, 'to message', messageId);
//     setShowReactionPicker(false);
//     setSelectedMessageForReaction(null);
//   };

//   return (
//     <SidebarProvider>
//       <div className="h-screen w-full flex flex-col md:flex-row relative">
//         {/* Left Sidebar */}
//         <LeftSidebar 
//           showDMList={showDMList}
//           setShowDMList={setShowDMList}
//           currentChannel={currentChannel}
//           setCurrentChannel={setCurrentChannel}
//         />
        
//         {/* Main Content Area */}
//         <div className="flex-1 flex flex-col min-w-0">
//           <Header 
//             currentChannel={currentChannel} 
//             showDMList={showDMList}
//             setShowDMList={setShowDMList}
//           />
          
//           {/* Chat and Right Sidebar Container */}
//           <div className="flex-1 flex overflow-hidden">
//             {/* Chat Area */}
//             <div className={cn(
//               "flex-1 flex flex-col min-w-0 relative",
//               activeTab !== 'chat' && 'hidden md:flex'
//             )}>
//               <ChatArea 
//                 hoveredMessageId={hoveredMessageId}
//                 setHoveredMessageId={setHoveredMessageId}
//                 showReactionPicker={showReactionPicker}
//                 setShowReactionPicker={setShowReactionPicker}
//                 selectedMessageForReaction={selectedMessageForReaction}
//                 setSelectedMessageForReaction={setSelectedMessageForReaction}
//                 quickReactions={quickReactions}
//                 handleAddReaction={handleAddReaction}
//               />
              
//               {/* Footer/Input positioned above mobile tab bar */}
//               <div className="relative z-20">
//                 <Footer 
//                   message={message}
//                   setMessage={setMessage}
//                   isTyping={isTyping}
//                   setIsTyping={setIsTyping}
//                 />
//               </div>
//             </div>
            
//             {/* Right Sidebar */}
//             <div className="hidden lg:block w-64 xl:w-72">
//               <RightSidebar />
//             </div>
//           </div>

//           {/* Mobile Tab Bar - fixed to bottom */}
//           <div className="md:hidden fixed bottom-0 left-0 right-0 z-10 bg-white border-t border-gray-200">
//             <MobileTabBar activeTab={activeTab} setActiveTab={setActiveTab} />
//           </div>
//         </div>
//       </div>
//     </SidebarProvider>
//   );
// }

// export default Layout;