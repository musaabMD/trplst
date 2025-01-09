// // "use client"
// // import React, { useState } from 'react';
// // import { MessageCircle, Users, MapPin, User, Crown, Pin, PinOff, Users2, Mail, Settings, LogOut, Bell } from 'lucide-react';
// // import { Button } from "@/components/ui/button";
// // import { Card } from "@/components/ui/card";
// // import { ScrollArea } from "@/components/ui/scroll-area";
// // import { Separator } from "@/components/ui/separator";

// // const App = () => {
// //   const [activeTab, setActiveTab] = useState('chat');
// //   const [cityChats] = useState([
// //     { 
// //       id: 1, 
// //       city: 'Tokyo', 
// //       country: 'JP', 
// //       members: 2451,
// //       isPinned: true,
// //       lastActive: '2m ago',
// //       trending: true
// //     },
// //     { 
// //       id: 2, 
// //       city: 'New York', 
// //       country: 'US', 
// //       members: 1832,
// //       isPinned: false,
// //       lastActive: '5m ago',
// //       trending: true
// //     },
// //     { 
// //       id: 3, 
// //       city: 'London', 
// //       country: 'GB', 
// //       members: 1654,
// //       isPinned: false,
// //       lastActive: '12m ago',
// //       trending: false
// //     }
// //   ]);

// //   const [pinnedChats, setPinnedChats] = useState(
// //     cityChats.filter(chat => chat.isPinned)
// //   );

// //   const [dms] = useState([
// //     { 
// //       id: 1, 
// //       name: 'John Doe', 
// //       lastMessage: 'Hey, are you in Tokyo?', 
// //       time: '2m ago',
// //       unread: true,
// //       avatar: '🧑‍💻'
// //     },
// //     { 
// //       id: 2, 
// //       name: 'Sarah Wilson', 
// //       lastMessage: 'The weather is great here in NY!', 
// //       time: '5m ago',
// //       unread: false,
// //       avatar: '👩'
// //     },
// //     { 
// //       id: 3, 
// //       name: 'Mike Chen', 
// //       lastMessage: 'Let me know when you arrive', 
// //       time: '1h ago',
// //       unread: false,
// //       avatar: '👨'
// //     }
// //   ]);

// //   const [localUsers] = useState([
// //     { 
// //       id: 1, 
// //       name: 'Alice Cooper', 
// //       distance: '0.5km', 
// //       active: true,
// //       location: 'Tokyo, Japan',
// //       avatar: '👩'
// //     },
// //     { 
// //       id: 2, 
// //       name: 'Bob Wilson', 
// //       distance: '1.2km', 
// //       active: false,
// //       location: 'Tokyo, Japan',
// //       avatar: '👨'
// //     },
// //     { 
// //       id: 3, 
// //       name: 'Carol Smith', 
// //       distance: '2.1km', 
// //       active: true,
// //       location: 'Tokyo, Japan',
// //       avatar: '👩'
// //     }
// //   ]);

// //   const togglePin = (chatId) => {
// //     const updatedChats = cityChats.map(chat => {
// //       if (chat.id === chatId) {
// //         return { ...chat, isPinned: !chat.isPinned };
// //       }
// //       return chat;
// //     });
// //     setPinnedChats(updatedChats.filter(chat => chat.isPinned));
// //   };

// //   const ChatItem = ({ chat, onPin }) => (
// //     <Card className="bg-white hover:bg-gray-50 transition-colors border">
// //       <div className="p-4 flex items-center justify-between">
// //         <div className="flex items-center space-x-4">
// //           <span className="text-2xl">
// //             {getFlagEmoji(chat.country)}
// //           </span>
// //           <div>
// //             <h3 className="font-medium text-gray-900">{chat.city}</h3>
// //             <div className="flex items-center space-x-2 text-sm text-gray-500">
// //               <Users2 size={14} />
// //               <span>{formatNumber(chat.members)}</span>
// //               <span>•</span>
// //               <span>{chat.lastActive}</span>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="flex items-center space-x-2">
// //           {chat.trending && (
// //             <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
// //               Trending
// //             </span>
// //           )}
// //           <Button
// //             variant="ghost"
// //             size="icon"
// //             onClick={() => onPin(chat.id)}
// //             className={chat.isPinned ? 'text-blue-600' : 'text-gray-400'}
// //           >
// //             {chat.isPinned ? <Pin size={20} /> : <PinOff size={20} />}
// //           </Button>
// //         </div>
// //       </div>
// //     </Card>
// //   );

// //   const DirectMessageItem = ({ dm }) => (
// //     <Card className="bg-white hover:bg-gray-50 transition-colors border">
// //       <div className="p-4 flex items-center justify-between">
// //         <div className="flex items-center space-x-4">
// //           <span className="text-2xl">{dm.avatar}</span>
// //           <div>
// //             <h3 className="font-medium text-gray-900">{dm.name}</h3>
// //             <p className="text-sm text-gray-500">{dm.lastMessage}</p>
// //           </div>
// //         </div>
// //         <div className="flex flex-col items-end space-y-2">
// //           <span className="text-xs text-gray-500">{dm.time}</span>
// //           {dm.unread && (
// //             <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
// //           )}
// //         </div>
// //       </div>
// //     </Card>
// //   );

// //   const LocalUserItem = ({ user }) => (
// //     <Card className="bg-white hover:bg-gray-50 transition-colors border">
// //       <div className="p-4 flex items-center justify-between">
// //         <div className="flex items-center space-x-4">
// //           <span className="text-2xl">{user.avatar}</span>
// //           <div>
// //             <h3 className="font-medium text-gray-900">{user.name}</h3>
// //             <div className="flex items-center space-x-2 text-sm text-gray-500">
// //               <MapPin size={14} />
// //               <span>{user.location}</span>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="flex flex-col items-end space-y-2">
// //           <span className="text-xs text-gray-500">{user.distance}</span>
// //           <span className={`w-2 h-2 rounded-full ${user.active ? 'bg-green-500' : 'bg-gray-300'}`}></span>
// //         </div>
// //       </div>
// //     </Card>
// //   );

// //   const renderContent = () => {
// //     switch (activeTab) {
// //       case 'chat':
// //         return (
// //           <ScrollArea className="h-full">
// //             <div className="p-4 space-y-4">
// //               <h1 className="text-2xl font-bold text-gray-900 mb-6">Triplst</h1>
              
// //               {pinnedChats.length > 0 && (
// //                 <>
// //                   <h2 className="text-sm font-semibold text-gray-500 uppercase">Pinned Cities</h2>
// //                   {pinnedChats.map((chat) => (
// //                     <ChatItem key={`pinned-${chat.id}`} chat={chat} onPin={togglePin} />
// //                   ))}
// //                   <Separator className="my-4" />
// //                 </>
// //               )}

// //               <h2 className="text-sm font-semibold text-gray-500 uppercase">All Cities</h2>
// //               {cityChats.filter(chat => !chat.isPinned).map((chat) => (
// //                 <ChatItem key={chat.id} chat={chat} onPin={togglePin} />
// //               ))}
// //             </div>
// //           </ScrollArea>
// //         );

// //       case 'dm':
// //         return (
// //           <ScrollArea className="h-full">
// //             <div className="p-4 space-y-4">
// //               <h1 className="text-2xl font-bold text-gray-900 mb-6">Messages</h1>
// //               {dms.map((dm) => (
// //                 <DirectMessageItem key={dm.id} dm={dm} />
// //               ))}
// //             </div>
// //           </ScrollArea>
// //         );

// //       case 'local':
// //         return (
// //           <ScrollArea className="h-full">
// //             <div className="p-4 space-y-4">
// //               <h1 className="text-2xl font-bold text-gray-900 mb-6">Nearby Travelers</h1>
// //               {localUsers.map((user) => (
// //                 <LocalUserItem key={user.id} user={user} />
// //               ))}
// //             </div>
// //           </ScrollArea>
// //         );

// //       case 'profile':
// //         return (
// //           <ScrollArea className="h-full">
// //             <div className="p-4 space-y-6">
// //               <div className="flex items-center justify-between">
// //                 <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
// //                 <Button variant="ghost" size="icon">
// //                   <Settings size={24} />
// //                 </Button>
// //               </div>
              
// //               <div className="flex flex-col items-center space-y-4">
// //                 <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-4xl">
// //                   👤
// //                 </div>
// //                 <h2 className="text-xl font-semibold">Alex Johnson</h2>
// //                 <p className="text-gray-500">@alexj</p>
// //               </div>

// //               <div className="space-y-4">
// //                 <Button className="w-full justify-start" variant="ghost">
// //                   <Bell className="mr-2" size={20} />
// //                   Notifications
// //                 </Button>
// //                 <Button className="w-full justify-start" variant="ghost">
// //                   <Mail className="mr-2" size={20} />
// //                   Messages
// //                 </Button>
// //                 <Button className="w-full justify-start" variant="ghost">
// //                   <Settings className="mr-2" size={20} />
// //                   Settings
// //                 </Button>
// //                 <Separator />
// //                 <Button className="w-full justify-start text-red-600" variant="ghost">
// //                   <LogOut className="mr-2" size={20} />
// //                   Log Out
// //                 </Button>
// //               </div>
// //             </div>
// //           </ScrollArea>
// //         );

// //       case 'upgrade':
// //         return (
// //           <ScrollArea className="h-full">
// //             <div className="p-4 space-y-6">
// //               <h1 className="text-2xl font-bold text-gray-900 mb-6">Upgrade to Pro</h1>
              
// //               <Card className="p-6 bg-gradient-to-r from-blue-500 to-purple-500">
// //                 <div className="text-white space-y-4">
// //                   <Crown size={40} />
// //                   <h2 className="text-2xl font-bold">Triplst Pro</h2>
// //                   <p className="text-white/90">Get access to all premium features and connect with more travelers worldwide.</p>
// //                   <Button className="w-full bg-white text-blue-600 hover:bg-white/90">
// //                     Upgrade Now
// //                   </Button>
// //                 </div>
// //               </Card>

// //               <div className="space-y-4">
// //                 <h3 className="font-semibold text-gray-900">Pro Features</h3>
// //                 <div className="space-y-2">
// //                   {[
// //                     'Unlimited city chats',
// //                     'Ad-free experience',
// //                     'Priority support',
// //                     'Custom profile themes',
// //                     'Extended search radius'
// //                   ].map((feature, index) => (
// //                     <div key={index} className="flex items-center space-x-2 text-gray-600">
// //                       <Crown size={16} className="text-blue-600" />
// //                       <span>{feature}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </ScrollArea>
// //         );
// //     }
// //   };

// //   const getFlagEmoji = (countryCode) => {
// //     const codePoints = countryCode
// //       .toUpperCase()
// //       .split('')
// //       .map(char => 127397 + char.charCodeAt());
// //     return String.fromCodePoint(...codePoints);
// //   };

// //   const formatNumber = (num) => {
// //     return new Intl.NumberFormat('en-US', { 
// //       notation: 'compact',
// //       maximumFractionDigits: 1
// //     }).format(num);
// //   };

// //   return (
// //     <div className="h-screen flex flex-col bg-gray-50">
// //       <div className="flex-1 overflow-hidden">
// //         {renderContent()}
// //       </div>
      
// //       <nav className="bg-white border-t border-gray-200">
// //         <div className="flex justify-between px-6 py-4">
// //           {[
// //             { id: 'chat', icon: MessageCircle, label: 'Chat' },
// //             { id: 'dm', icon: Users, label: 'DM' },
// //             { id: 'local', icon: MapPin, label: 'Local' },
// //             { id: 'profile', icon: User, label: 'Profile' },
// //             { id: 'upgrade', icon: Crown, label: 'Upgrade' }
// //           ].map(tab => (
// //             <Button
// //               key={tab.id}
// //               variant="ghost"
// //               size="sm"
// //               onClick={() => setActiveTab(tab.id)}
// //               className={`flex flex-col items-center space-y-1 h-auto ${
// //                 activeTab === tab.id 
// //                   ? 'text-blue-600' 
// //                   : 'text-gray-400 hover:text-gray-600'
// //               }`}
// //             >
// //               <tab.icon size={24} />
// //               <span className="text-xs">{tab.label}</span>
// //             </Button>
// //           ))}
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default App;
// // app/page.js
 
// // app/page.js// app/page.js
// // app/page.js
// 'use client'

// import React, { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';
// import Header from '@/components/Header';
// import Profile from '@/components/Profile';
// import Upgrade from '@/components/Upgrade';
// import LocalUsers from '@/components/LocalUsers';
// import Chat from '@/components/Chat';
// import Lists from '@/components/Lists';

// // Initialize Supabase client (if using)
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// );

// // Initial mock data (you can replace this with Supabase data later)
// const initialCityChats = [
//   { 
//     id: 1, 
//     city: 'Tokyo', 
//     country: 'JP', 
//     members: 2451,
//     isPinned: true,
//     lastActive: '2m ago',
//     trending: true
//   },
//   { 
//     id: 2, 
//     city: 'New York', 
//     country: 'US', 
//     members: 1832,
//     isPinned: false,
//     lastActive: '5m ago',
//     trending: true
//   },
//   { 
//     id: 3, 
//     city: 'London', 
//     country: 'GB', 
//     members: 1654,
//     isPinned: false,
//     lastActive: '12m ago',
//     trending: false
//   },
//   { 
//     id: 4, 
//     city: 'Paris', 
//     country: 'FR', 
//     members: 1432,
//     isPinned: false,
//     lastActive: '15m ago',
//     trending: true
//   },
//   { 
//     id: 5, 
//     city: 'Seoul', 
//     country: 'KR', 
//     members: 1223,
//     isPinned: false,
//     lastActive: '20m ago',
//     trending: false
//   }
// ];

// const initialDMs = [
//   { 
//     id: 1, 
//     name: 'John Doe', 
//     lastMessage: 'Hey, are you in Tokyo?', 
//     time: '2m ago',
//     unread: true,
//     avatar: 'https://i.pravatar.cc/201'
//   },
//   { 
//     id: 2, 
//     name: 'Sarah Wilson', 
//     lastMessage: 'The weather is great here in NY!', 
//     time: '5m ago',
//     unread: false,
//     avatar: 'https://i.pravatar.cc/202'
//   },
//   { 
//     id: 3, 
//     name: 'Mike Chen', 
//     lastMessage: 'Let me know when you arrive', 
//     time: '1h ago',
//     unread: false,
//     avatar: 'https://i.pravatar.cc/203'
//   },
//   { 
//     id: 4, 
//     name: 'Emma Davis', 
//     lastMessage: 'Did you see that new café?', 
//     time: '2h ago',
//     unread: true,
//     avatar: 'https://i.pravatar.cc/204'
//   },
//   { 
//     id: 5, 
//     name: 'Alex Kim', 
//     lastMessage: 'Meet up tomorrow?', 
//     time: '3h ago',
//     unread: false,
//     avatar: 'https://i.pravatar.cc/205'
//   }
// ];

// const initialLocalUsers = [
//   { 
//     id: 1, 
//     name: 'Alice Cooper', 
//     distance: '0.5km', 
//     active: true,
//     location: 'Tokyo, Japan',
//     avatar: 'https://i.pravatar.cc/301'
//   },
//   { 
//     id: 2, 
//     name: 'Bob Wilson', 
//     distance: '1.2km', 
//     active: false,
//     location: 'Tokyo, Japan',
//     avatar: 'https://i.pravatar.cc/302'
//   },
//   { 
//     id: 3, 
//     name: 'Carol Smith', 
//     distance: '2.1km', 
//     active: true,
//     location: 'Tokyo, Japan',
//     avatar: 'https://i.pravatar.cc/303'
//   },
//   { 
//     id: 4, 
//     name: 'David Lee', 
//     distance: '2.8km', 
//     active: true,
//     location: 'Tokyo, Japan',
//     avatar: 'https://i.pravatar.cc/304'
//   },
//   { 
//     id: 5, 
//     name: 'Eve Johnson', 
//     distance: '3.2km', 
//     active: false,
//     location: 'Tokyo, Japan',
//     avatar: 'https://i.pravatar.cc/305'
//   }
// ];

// export default function Home() {
//   const [activeTab, setActiveTab] = useState('chat');
//   const [cityChats, setCityChats] = useState(initialCityChats);
//   const [pinnedChats, setPinnedChats] = useState(
//     initialCityChats.filter(chat => chat.isPinned)
//   );
//   const [dms, setDms] = useState(initialDMs);
//   const [localUsers, setLocalUsers] = useState(initialLocalUsers);

//   // If using Supabase, uncomment this
//   /*
//   useEffect(() => {
//     fetchInitialData();
//   }, []);

//   const fetchInitialData = async () => {
//     try {
//       // Fetch city chats
//       const { data: chats, error: chatsError } = await supabase
//         .from('city_chats')
//         .select('*')
//         .order('members', { ascending: false });

//       if (chatsError) throw chatsError;
//       setCityChats(chats);
//       setPinnedChats(chats.filter(chat => chat.isPinned));

//       // Fetch DMs
//       const { data: messages, error: messagesError } = await supabase
//         .from('direct_messages')
//         .select('*')
//         .order('created_at', { ascending: false });

//       if (messagesError) throw messagesError;
//       setDms(messages);

//       // Fetch local users
//       const { data: users, error: usersError } = await supabase
//         .from('local_users')
//         .select('*')
//         .order('distance', { ascending: true });

//       if (usersError) throw usersError;
//       setLocalUsers(users);

//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
//   */

//   const togglePin = async (chatId) => {
//     // For now, update local state only
//     const updatedChats = cityChats.map(chat => {
//       if (chat.id === chatId) {
//         return { ...chat, isPinned: !chat.isPinned };
//       }
//       return chat;
//     });

//     setCityChats(updatedChats);
//     setPinnedChats(updatedChats.filter(chat => chat.isPinned));

//     // If using Supabase, uncomment this
//     /*
//     try {
//       const { error } = await supabase
//         .from('city_chats')
//         .update({ isPinned: !chat.isPinned })
//         .eq('id', chatId);

//       if (error) throw error;
//     } catch (error) {
//       console.error('Error toggling pin:', error);
//     }
//     */
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'chat':
//         return (
//           <Chat 
//             cityChats={cityChats}
//             pinnedChats={pinnedChats}
//             togglePin={togglePin}
//           />
//         );
//       case 'dm':
//         return <Lists dms={dms} />;
//       case 'local':
//         return <LocalUsers users={localUsers} />;
//       case 'profile':
//         return <Profile />;
//       case 'upgrade':
//         return <Upgrade />;
//       default:
//         return <Chat cityChats={cityChats} pinnedChats={pinnedChats} togglePin={togglePin} />;
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <Header activeTab={activeTab} setActiveTab={setActiveTab} />
//       <main className="flex-1 overflow-hidden px-4 pt-4 pb-20 lg:pb-4">
//         {renderContent()}
//       </main>
//     </div>
//   );
// }
// app/page.js
// app/page.js
'use client'

import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import Upgrade from '@/components/Upgrade';
import LocalUsers from '@/components/LocalUsers';
import Chat from '@/components/Chat';
import Lists from '@/components/Lists';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Initial mock data
const initialCityChats = [
  { 
    id: 1, 
    city: 'Tokyo', 
    country: 'JP', 
    members: 2451,
    isPinned: true,
    lastActive: '2m ago',
    trending: true
  },
  { 
    id: 2, 
    city: 'New York', 
    country: 'US', 
    members: 1832,
    isPinned: false,
    lastActive: '5m ago',
    trending: true
  },
  { 
    id: 3, 
    city: 'London', 
    country: 'GB', 
    members: 1654,
    isPinned: false,
    lastActive: '12m ago',
    trending: false
  },
  { 
    id: 4, 
    city: 'Paris', 
    country: 'FR', 
    members: 1432,
    isPinned: false,
    lastActive: '15m ago',
    trending: true
  },
  { 
    id: 5, 
    city: 'Seoul', 
    country: 'KR', 
    members: 1223,
    isPinned: false,
    lastActive: '20m ago',
    trending: false
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('chat');
  const [cityChats, setCityChats] = useState(initialCityChats);
  const [pinnedChats, setPinnedChats] = useState(
    initialCityChats.filter(chat => chat.isPinned)
  );
  const [dms, setDms] = useState([]);
  const [localUsers, setLocalUsers] = useState([]);

  const togglePin = async (chatId) => {
    const updatedChats = cityChats.map(chat => {
      if (chat.id === chatId) {
        return { ...chat, isPinned: !chat.isPinned };
      }
      return chat;
    });

    setCityChats(updatedChats);
    setPinnedChats(updatedChats.filter(chat => chat.isPinned));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'chat':
        return (
          <Chat 
            cityChats={cityChats ?? []}
            pinnedChats={pinnedChats ?? []}
            togglePin={togglePin}
          />
        );
      case 'dm':
        return <Lists dms={dms ?? []} />;
      case 'local':
        return <LocalUsers users={localUsers ?? []} />;
      case 'profile':
        return <Profile />;
      case 'upgrade':
        return <Upgrade />;
      default:
        return <Chat 
          cityChats={cityChats ?? []} 
          pinnedChats={pinnedChats ?? []} 
          togglePin={togglePin}
        />;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-hidden">
        {renderContent()}
      </main>
    </div>
  );
}