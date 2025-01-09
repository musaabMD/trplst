import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, Pin, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

const RatingEmojis = ({ onRate, selectedRating }) => {
  const ratings = [
    { emoji: '😊', value: 'happy' },
    { emoji: '😐', value: 'neutral' },
    { emoji: '😔', value: 'sad' }
  ];

  return (
    <div className="flex gap-4 items-center">
      {ratings.map(({ emoji, value }) => (
        <button
          key={value}
          onClick={() => onRate(value)}
          className={`text-2xl transition-transform ${
            selectedRating === value ? 'transform scale-125' : 'opacity-70'
          }`}
        >
          {emoji}
        </button>
      ))}
    </div>
  );
};

const FactCard = ({ 
  fact, 
  isPinned,
  onPin, 
  onRate,
  onVoteHelpful,
  userRating 
}) => {
  const category = fact.category;
  const helpfulPercentage = ((fact.ratings.helpful / fact.ratings.totalHelpful) * 100).toFixed(0);
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Card className={`h-40 border shadow-sm hover:shadow-md cursor-pointer ${category.color} ${category.border}`}>
          <div className="p-4 h-full">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{category.emoji}</span>
                <span className="font-medium text-gray-900">{fact.name}</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                className="h-8 w-8"
                onClick={(e) => {
                  e.stopPropagation();
                  onPin(fact);
                }}
              >
                <Pin className={`w-4 h-4 ${isPinned ? 'fill-current' : ''}`} />
              </Button>
            </div>

            <div>
              <div className="text-3xl font-light mb-1">{fact.value}</div>
              {fact.subtitle && (
                <div className="text-sm text-gray-600">{fact.subtitle}</div>
              )}
            </div>

            <div className="absolute bottom-4 right-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600"
              >
                <ThumbsUp className="w-4 h-4 mr-2" />
                {helpfulPercentage}% found helpfulfdsfsdfdsfsd
              </Button>
            </div>
          </div>
        </Card>
      </SheetTrigger>

      <SheetContent side="right" className="w-full sm:w-[540px]">
        <SheetHeader className="space-y-0 pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-2">
              <span className="text-xl">{category.emoji}</span>
              {fact.name}
            </SheetTitle>
            <SheetClose className="rounded-full opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </SheetClose>
          </div>
        </SheetHeader>

        <div className="space-y-6">
          <div className="py-4">
            <div className="text-4xl font-light mb-2">{fact.value}</div>
            {fact.subtitle && (
              <div className="text-sm text-gray-600">{fact.subtitle}</div>
            )}
          </div>

          {fact.details && (
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">{fact.details}</p>
            </div>
          )}

          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <h4 className="font-medium text-sm text-gray-900">Your Rating</h4>
            <RatingEmojis onRate={onRate} selectedRating={userRating} />
          </div>

          {fact.source && (
            <div className="text-xs text-gray-500">
              Source: {fact.source}
            </div>
          )}

          <div className="flex items-center justify-end pt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onVoteHelpful(true)}
              className="text-gray-600"
            >
              <ThumbsUp className="w-4 h-4 mr-2" />
              {helpfulPercentage}% found helpful
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FactCard;