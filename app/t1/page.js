'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Hash, MessageSquare, Settings, User, Rocket, Globe2, Bookmark, ExternalLink } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const LeftSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true)
  const [bookmarks, setBookmarks] = useState(new Set())

  const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney']
  const countries = ['USA', 'UK', 'Japan', 'France', 'Australia']
  const dms = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']

  const toggleBookmark = (item) => {
    setBookmarks(prev => {
      const newBookmarks = new Set(prev)
      if (newBookmarks.has(item)) {
        newBookmarks.delete(item)
      } else {
        newBookmarks.add(item)
      }
      return newBookmarks
    })
  }

  const sidebarContent = (
    <div className={`fixed inset-y-0 left-0 z-30 flex flex-col bg-gray-900 text-white transition-all duration-300 ${
      isExpanded ? 'w-64' : 'w-16'
    } md:relative`}>
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center">
          {isExpanded ? (
            <span className="text-xl font-bold">Triplst</span>
          ) : (
            <span className="text-xl font-bold mx-auto">T</span>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-400 hover:text-white hover:bg-gray-800"
        >
          {isExpanded ? <ChevronLeft /> : <ChevronRight />}
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="px-3 py-2">
          <Collapsible defaultOpen>
            <CollapsibleTrigger className={`flex items-center gap-2 font-semibold mb-2 w-full px-3 py-2 hover:bg-gray-800 rounded-md ${!isExpanded && 'justify-center'}`}>
              {isExpanded ? (
                <>
                  <ChevronRight className="h-4 w-4" />
                  <span>Cities</span>
                </>
              ) : (
                <Hash className="h-5 w-5" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent>
              {cities.map((city) => (
                <Button 
                  key={city} 
                  variant="ghost" 
                  className={`w-full justify-start gap-3 mb-1 hover:bg-gray-800 group ${!isExpanded && 'justify-center'}`}
                >
                  <Hash className="h-5 w-5 min-w-[20px]" />
                  {isExpanded && (
                    <>
                      <span className="flex-1">{city}</span>
                      <Bookmark
                        className={`h-4 w-4 opacity-0 group-hover:opacity-100 cursor-pointer ${
                          bookmarks.has(city) ? 'fill-current opacity-100' : ''
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleBookmark(city)
                        }}
                      />
                    </>
                  )}
                </Button>
              ))}
              <Button 
                variant="ghost" 
                className={`w-full justify-start gap-3 mt-2 text-gray-400 hover:text-white hover:bg-gray-800 ${!isExpanded && 'justify-center'}`}
                onClick={() => window.open('/cities', '_blank')}
              >
                <ExternalLink className="h-4 w-4 min-w-[20px]" />
                {isExpanded && <span>View All Cities</span>}
              </Button>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible defaultOpen className="mt-6">
            <CollapsibleTrigger className={`flex items-center gap-2 font-semibold mb-2 w-full px-3 py-2 hover:bg-gray-800 rounded-md ${!isExpanded && 'justify-center'}`}>
              {isExpanded ? (
                <>
                  <ChevronRight className="h-4 w-4" />
                  <span>Countries</span>
                </>
              ) : (
                <Globe2 className="h-5 w-5" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent>
              {countries.map((country) => (
                <Button 
                  key={country} 
                  variant="ghost" 
                  className={`w-full justify-start gap-3 mb-1 hover:bg-gray-800 group ${!isExpanded && 'justify-center'}`}
                >
                  <Globe2 className="h-5 w-5 min-w-[20px]" />
                  {isExpanded && (
                    <>
                      <span className="flex-1">{country}</span>
                      <Bookmark
                        className={`h-4 w-4 opacity-0 group-hover:opacity-100 cursor-pointer ${
                          bookmarks.has(country) ? 'fill-current opacity-100' : ''
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleBookmark(country)
                        }}
                      />
                    </>
                  )}
                </Button>
              ))}
              <Button 
                variant="ghost" 
                className={`w-full justify-start gap-3 mt-2 text-gray-400 hover:text-white hover:bg-gray-800 ${!isExpanded && 'justify-center'}`}
                onClick={() => window.open('/countries', '_blank')}
              >
                <ExternalLink className="h-4 w-4 min-w-[20px]" />
                {isExpanded && <span>View All Countries</span>}
              </Button>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible defaultOpen className="mt-6">
            <CollapsibleTrigger className={`flex items-center gap-2 font-semibold mb-2 w-full px-3 py-2 hover:bg-gray-800 rounded-md ${!isExpanded && 'justify-center'}`}>
              {isExpanded ? (
                <>
                  <ChevronRight className="h-4 w-4" />
                  <span>Direct Messages</span>
                </>
              ) : (
                <MessageSquare className="h-5 w-5" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent>
              {dms.map((dm) => (
                <Button 
                  key={dm} 
                  variant="ghost" 
                  className={`w-full justify-start gap-3 mb-1 hover:bg-gray-800 group ${!isExpanded && 'justify-center'}`}
                >
                  <User className="h-5 w-5 min-w-[20px]" />
                  {isExpanded && (
                    <>
                      <span className="flex-1">{dm}</span>
                      <Bookmark
                        className={`h-4 w-4 opacity-0 group-hover:opacity-100 cursor-pointer ${
                          bookmarks.has(dm) ? 'fill-current opacity-100' : ''
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleBookmark(dm)
                        }}
                      />
                    </>
                  )}
                </Button>
              ))}
              <Button 
                variant="ghost" 
                className={`w-full justify-start gap-3 mt-2 text-gray-400 hover:text-white hover:bg-gray-800 ${!isExpanded && 'justify-center'}`}
                onClick={() => window.open('/messages', '_blank')}
              >
                <ExternalLink className="h-4 w-4 min-w-[20px]" />
                {isExpanded && <span>View All Messages</span>}
              </Button>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </ScrollArea>

      <div className="mt-auto border-t border-gray-800 p-3">
        <div className="flex flex-col gap-2">
          <Button 
            variant="ghost" 
            className={`justify-start gap-2 text-purple-400 hover:bg-gray-800 hover:text-purple-300 ${!isExpanded && 'justify-center'}`}
          >
            <Rocket className="h-5 w-5 min-w-[20px]" />
            {isExpanded && <span>Upgrade Plan</span>}
          </Button>
          <Button 
            variant="ghost" 
            className={`justify-start gap-2 hover:bg-gray-800 ${!isExpanded && 'justify-center'}`}
          >
            <Settings className="h-5 w-5 min-w-[20px]" />
            {isExpanded && <span>Local Settings</span>}
          </Button>
          <Button 
            variant="ghost" 
            className={`justify-start gap-2 hover:bg-gray-800 ${!isExpanded && 'justify-center'}`}
          >
            <Avatar className="h-5 w-5">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            {isExpanded && <span>John Doe</span>}
          </Button>
        </div>
      </div>
    </div>
  )

  return isExpanded ? sidebarContent : (
    <div className="flex h-screen">
      <div className="w-16 bg-gray-900">
        {sidebarContent}
      </div>
      <div className="w-4 cursor-pointer" onClick={() => setIsExpanded(true)} />
    </div>
  )
}

export default LeftSidebar

