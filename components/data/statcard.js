import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, Pin, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const StatCard = ({
  metric,
  isPinned,
  onPin,
  onVoteHelpful,
}) => {
  const helpfulPercent =
    metric.ratings.totalHelpful > 0
      ? ((metric.ratings.helpful / metric.ratings.totalHelpful) * 100).toFixed(0)
      : 0;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Card
          className={`h-40 relative border shadow-sm hover:shadow-md cursor-pointer ${metric.category.color} ${metric.category.border}`}
        >
          <div className="p-4 h-full">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{metric.category.emoji}</span>
                <span className="font-medium text-gray-900">{metric.name}</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={(e) => {
                  e.stopPropagation();
                  onPin(metric);
                }}
              >
                <Pin className={`w-4 h-4 ${isPinned ? "fill-current" : ""}`} />
              </Button>
            </div>

            <div>
              <div className="text-3xl font-light text-blue-600 mb-1">
                {metric.mostVotedOption()}
              </div>
              <div className="text-sm text-gray-600">
                {metric.totalVotes.toLocaleString()} votes
              </div>
            </div>

            <div className="absolute bottom-4 right-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  onVoteHelpful(metric.id, true);
                }}
              >
                <ThumbsUp className="w-4 h-4 mr-2" />
                {metric.ratings.helpful}/{metric.ratings.totalHelpful} ({helpfulPercent}%) found it helpful
              </Button>
            </div>
          </div>
        </Card>
      </SheetTrigger>

      <SheetContent side="right" className="w-full sm:w-[540px]">
        <SheetHeader className="space-y-0 pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-2">
              <span className="text-xl">{metric.category.emoji}</span>
              {metric.name}
            </SheetTitle>
            <SheetClose className="rounded-full opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </SheetClose>
          </div>
        </SheetHeader>

        <div className="space-y-6">
          <div className="py-4">
            <div className="text-4xl font-light text-blue-600 mb-2">
              {metric.mostVotedOption()}
            </div>
            <div className="text-sm text-gray-600">
              Based on {metric.totalVotes.toLocaleString()} votes
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default StatCard;
