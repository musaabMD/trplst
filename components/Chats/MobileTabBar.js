import React from 'react';
import { MessageSquare, Users, Map, Plus, User } from 'lucide-react';
import { cn } from "@/lib/utils";

const MobileTabBar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'chat', icon: MessageSquare, label: 'Chat' },
    { id: 'dm', icon: Users, label: 'DM' },
    { id: 'local', icon: Map, label: 'Local' },
    { id: 'plus', icon: Plus, label: 'Plus' },
    { id: 'profile', icon: User, label: 'Profile' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div className="flex justify-between items-center px-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex flex-col items-center p-3 flex-1",
              activeTab === tab.id ? "text-blue-500" : "text-gray-500"
            )}
          >
            <tab.icon className="h-6 w-6" />
            <span className="text-xs mt-1">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileTabBar;