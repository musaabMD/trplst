// components/Upgrade.js
import React from 'react';
import { Crown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Upgrade = () => {
  const proFeatures = [
    'Unlimited city chats',
    'Ad-free experience',
    'Priority support',
    'Custom profile themes',
    'Extended search radius'
  ];

  return (
    <ScrollArea className="h-full">
      <div className="p-4 space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Upgrade to Pro</h1>
        
        <Card className="p-6 bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="text-white space-y-4">
            <Crown size={40} />
            <h2 className="text-2xl font-bold">Triplst Pro</h2>
            <p className="text-white/90">Get access to all premium features and connect with more travelers worldwide.</p>
            <Button className="w-full bg-white text-blue-600 hover:bg-white/90">
              Upgrade Now
            </Button>
          </div>
        </Card>

        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Pro Features</h3>
          <div className="space-y-2">
            {proFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-600">
                <Crown size={16} className="text-blue-600" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Upgrade;