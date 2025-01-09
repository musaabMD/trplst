// "use client";
// import React from 'react';
// import { Menu, Search, Settings, Hash } from 'lucide-react';

// const Header = ({ currentChannel, showDMList, setShowDMList }) => {
//   return (
//     <header className="flex-none bg-white border-b border-gray-200 px-4 py-3 sm:px-6 flex items-center justify-between shadow-sm">
//       <div className="flex items-center space-x-4">
//         <button 
//           className="md:hidden text-gray-600 hover:text-gray-900" 
//           onClick={() => setShowDMList(!showDMList)}
//         >
//           <Menu size={20} />
//         </button>
//         <div>
//           <h2 className="text-lg sm:text-xl font-semibold flex items-center">
//             <Hash size={20} className="mr-2" />
//             <span className="truncate"> {currentChannel}</span>
//           </h2>
//           <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Team discussions and updates</p>
//         </div>
//       </div>
//       <div className="flex items-center space-x-3 sm:space-x-6">
//         <div className="relative hidden sm:block">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
//           <input
//             type="text"
//             placeholder="Search messages"
//             className="pl-10 pr-4 py-1.5 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 sm:w-64 hidden sm:block"
//           />
//         </div>
//         <button className="text-gray-600 hover:text-gray-900">
//           <Settings size={20} />
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;
// components/Header.js
import React from 'react';
import { MessageCircle, Users, MapPin, User, Crown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = ({ activeTab, setActiveTab }) => {
  const navigationItems = [
    { id: 'chat', icon: MessageCircle, label: 'Chat' },
    { id: 'dm', icon: Users, label: 'Messages' },
    { id: 'local', icon: MapPin, label: 'Local' },
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'upgrade', icon: Crown, label: 'Upgrade' }
  ];

  return (
    <>
      {/* Desktop Header - Only visible on lg screens */}
      <header className="hidden lg:block sticky top-0 z-50">
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="flex h-16 items-center justify-center">
              {/* Logo - Left */}
              <div className="absolute left-4">
                <span className="text-xl font-semibold">Triplst</span>
              </div>

              {/* Navigation - Center */}
              <div className="flex items-center gap-8">
                {navigationItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                      activeTab === item.id
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Auth Buttons - Right */}
              <div className="absolute right-4 flex items-center gap-2">
                <Button variant="ghost" className="text-sm font-medium">
                  Log in
                </Button>
                <Button className="text-sm font-medium">
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Tab Bar - Only visible below lg screens */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t">
        <div className="flex justify-between items-center px-6 py-2">
          {navigationItems.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center py-1 min-w-[4rem] ${
                activeTab === tab.id 
                  ? 'text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <tab.icon size={20} />
              <span className="text-xs mt-1">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;