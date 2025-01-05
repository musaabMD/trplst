// 'use client';

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

"use client"
import React from 'react';
import { Menu, Search, Settings, Hash } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Header = ({ currentChannel, showDMList, setShowDMList }) => {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-200 px-4 sm:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden text-gray-600 hover:text-gray-900" />
        <Separator orientation="vertical" className="hidden md:block h-6" />
        
        <div>
          <h2 className="text-xl font-semibold flex items-center">
            <Hash className="mr-2 h-6 w-6" />
            <span className="truncate">{currentChannel}</span>
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">Team discussions and updates</p>
        </div>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search messages"
            className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-base w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="text-gray-600 hover:text-gray-900">
          <Settings className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;