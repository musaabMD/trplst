import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const themes = [
  { name: 'Dark', bgColor: 'bg-gray-900', textColor: 'text-gray-100' },
  { name: 'Blue', bgColor: 'bg-blue-900', textColor: 'text-blue-100' },
  { name: 'Green', bgColor: 'bg-green-900', textColor: 'text-green-100' },
  { name: 'Purple', bgColor: 'bg-purple-900', textColor: 'text-purple-100' },
  { name: 'Red', bgColor: 'bg-red-900', textColor: 'text-red-100' },
];

export function ThemePicker({ onThemeChange }) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg" className="text-base">
              <Palette className="h-5 w-5" />
              <span>Change Theme</span>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {themes.map((theme) => (
              <DropdownMenuItem
                key={theme.name}
                onClick={() => onThemeChange(theme)}
                className="flex items-center gap-2"
              >
                <div className={`w-4 h-4 rounded ${theme.bgColor}`} />
                <span>{theme.name}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}