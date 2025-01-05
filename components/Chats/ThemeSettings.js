import React from 'react';
import { 
  Palette, 
  Type, 
  Sun, 
  Moon,
  Check 
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const themes = [
  { name: 'Light', value: 'light', bgColor: 'bg-white', textColor: 'text-gray-900' },
  { name: 'Dark', value: 'dark', bgColor: 'bg-gray-900', textColor: 'text-gray-100' },
  { name: 'Travel Blue', value: 'travel-blue', bgColor: 'bg-blue-900', textColor: 'text-blue-100' },
  { name: 'Forest', value: 'forest', bgColor: 'bg-green-900', textColor: 'text-green-100' },
  { name: 'Sunset', value: 'sunset', bgColor: 'bg-orange-900', textColor: 'text-orange-100' },
];

const fontSizes = [
  { name: 'Small', value: 'text-sm' },
  { name: 'Medium', value: 'text-base' },
  { name: 'Large', value: 'text-lg' },
];

export function ThemeSettings({ 
  currentTheme, 
  setTheme, 
  fontSize,
  setFontSize,
  fontWeight,
  setFontWeight 
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg" className="text-base">
              <Palette className="h-5 w-5" />
              <span>Appearance</span>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Theme</DropdownMenuLabel>
            {themes.map((theme) => (
              <DropdownMenuItem
                key={theme.value}
                onClick={() => setTheme(theme.value)}
                className="flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded ${theme.bgColor}`} />
                  <span>{theme.name}</span>
                </div>
                {currentTheme === theme.value && (
                  <Check className="h-4 w-4" />
                )}
              </DropdownMenuItem>
            ))}
            
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Font Size</DropdownMenuLabel>
            {fontSizes.map((size) => (
              <DropdownMenuItem
                key={size.value}
                onClick={() => setFontSize(size.value)}
                className="flex items-center justify-between"
              >
                <span>{size.name}</span>
                {fontSize === size.value && (
                  <Check className="h-4 w-4" />
                )}
              </DropdownMenuItem>
            ))}
            
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Font Weight</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => setFontWeight(fontWeight === 'font-normal' ? 'font-semibold' : 'font-normal')}
              className="flex items-center justify-between"
            >
              <span>Bold Text</span>
              {fontWeight === 'font-semibold' && (
                <Check className="h-4 w-4" />
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}