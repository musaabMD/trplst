// components/Profile.js
import React from 'react';
import { Bell, Mail, Settings, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  return (
    <ScrollArea className="h-full">
      <div className="p-4 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <Button variant="ghost" size="icon">
            <Settings size={24} />
          </Button>
        </div>
        
        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-4xl">
            👤
          </div>
          <h2 className="text-xl font-semibold">Alex Johnson</h2>
          <p className="text-gray-500">@alexj</p>
        </div>

        <div className="space-y-4">
          <Button className="w-full justify-start" variant="ghost">
            <Bell className="mr-2" size={20} />
            Notifications
          </Button>
          <Button className="w-full justify-start" variant="ghost">
            <Mail className="mr-2" size={20} />
            Messages
          </Button>
          <Button className="w-full justify-start" variant="ghost">
            <Settings className="mr-2" size={20} />
            Settings
          </Button>
          <Separator />
          <Button className="w-full justify-start text-red-600" variant="ghost">
            <LogOut className="mr-2" size={20} />
            Log Out
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Profile;