
// 'use client';

// import React, { useState, useCallback, useMemo } from 'react';
// import FilterSearch from '@/components/data/filter-search';
// import FactCard from '@/components/data/FactCard';
// import StatCard from '@/components/data/StatCard';
// import { TOKYO_STATS, TOKYO_FACTS } from '@/components/data/constants';

// const CityMetrics = () => {
//   const [stats, setStats] = useState(TOKYO_STATS);
//   const [facts] = useState(TOKYO_FACTS);
//   const [pinnedItems, setPinnedItems] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [userRatings, setUserRatings] = useState({});

//   const handlePin = useCallback((item) => {
//     setPinnedItems(prev => {
//       const isPinned = prev.find(i => i.id === item.id);
//       return isPinned 
//         ? prev.filter(i => i.id !== item.id)
//         : [...prev, item];
//     });
//   }, []);

//   const handleVote = useCallback((statId, optionIndex) => {
//     setStats(prevStats => prevStats.map(stat => {
//       if (stat.id === statId) {
//         const newVotes = [...stat.votes];
//         newVotes[optionIndex]++;
//         const totalVotes = newVotes.reduce((a, b) => a + b, 0);
//         return {
//           ...stat,
//           votes: newVotes,
//           totalVotes,
//           percentages: newVotes.map(votes => (votes / totalVotes) * 100)
//         };
//       }
//       return stat;
//     }));
//   }, []);

//   const handleRate = useCallback((itemId, rating) => {
//     setUserRatings(prev => ({ ...prev, [itemId]: rating }));
//   }, []);

//   const handleHelpfulVote = useCallback((itemId, isHelpful) => {
//     setStats((prevStats) =>
//       prevStats.map((stat) => {
//         if (stat.id === itemId) {
//           return {
//             ...stat,
//             ratings: {
//               ...stat.ratings,
//               helpful: isHelpful ? stat.ratings.helpful + 1 : stat.ratings.helpful,
//               totalHelpful: stat.ratings.totalHelpful + 1,
//             },
//           };
//         }
//         return stat;
//       })
//     );
//   }, []);
  

//   const filteredItems = useMemo(() => {
//     const allItems = [...stats, ...facts];
//     return allItems.filter(item => {
//       const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
//       return matchesSearch && matchesFilter;
//     });
//   }, [stats, facts, searchTerm, activeFilter]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="sticky top-0 bg-white/80 backdrop-blur-sm z-40 border-b">
//         <div className="container mx-auto px-4 py-4">
//           <FilterSearch 
//             searchTerm={searchTerm}
//             setSearchTerm={setSearchTerm}
//             activeFilter={activeFilter}
//             setActiveFilter={setActiveFilter}
//           />
//         </div>
//       </div>
      
//       <div className="container mx-auto px-4 py-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {/* Pinned items */}
//           {filteredItems
//             .filter(item => pinnedItems.find(i => i.id === item.id))
//             .map(item => (
//               'options' in item ? (
//                 <StatCard
//                   key={`pinned-${item.id}`}
//                   metric={item}
//                   isPinned={true}
//                   onPin={() => handlePin(item)}
//                   onVote={handleVote}
//                   onRate={(rating) => handleRate(item.id, rating)}
//                   onVoteHelpful={(isHelpful) => handleHelpfulVote(item.id, isHelpful, true)}
//                   userRating={userRatings[item.id]}
//                 />
//               ) : (
//                 <FactCard
//                   key={`pinned-${item.id}`}
//                   fact={item}
//                   isPinned={true}
//                   onPin={() => handlePin(item)}
//                   onRate={(rating) => handleRate(item.id, rating)}
//                   onVoteHelpful={(isHelpful) => handleHelpfulVote(item.id, isHelpful, false)}
//                   userRating={userRatings[item.id]}
//                 />
//               )
//             ))}
          
//           {/* Non-pinned filtered items */}
//           {filteredItems
//             .filter(item => !pinnedItems.find(i => i.id === item.id))
//             .map(item => (
//               'options' in item ? (
//                 <StatCard
//                   key={item.id}
//                   metric={item}
//                   isPinned={false}
//                   onPin={() => handlePin(item)}
//                   onVote={handleVote}
//                   onRate={(rating) => handleRate(item.id, rating)}
//                   onVoteHelpful={(isHelpful) => handleHelpfulVote(item.id, isHelpful, true)}
//                   userRating={userRatings[item.id]}
//                 />
//               ) : (
//                 <FactCard
//                   key={item.id}
//                   fact={item}
//                   isPinned={false}
//                   onPin={() => handlePin(item)}
//                   onRate={(rating) => handleRate(item.id, rating)}
//                   onVoteHelpful={(isHelpful) => handleHelpfulVote(item.id, isHelpful, false)}
//                   userRating={userRatings[item.id]}
//                 />
//               )
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CityMetrics;'use client';
'use client';

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { 
  Coffee, Train, Wifi, Sun, Heart,
  CircleDollarSign, Laptop
} from 'lucide-react';
import { TOKYO_METRICS } from '@/components/data/constants';

const CATEGORY_COLORS = {
  costs: { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200', icon: CircleDollarSign, emoji: '💰' },
  lifestyle: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', icon: Coffee, emoji: '🎯' },
  transport: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', icon: Train, emoji: '🚆' },
  tech: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', icon: Laptop, emoji: '💻' },
  health: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', icon: Heart, emoji: '❤️' },
  environment: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', icon: Sun, emoji: '🌱' }
};

const getRelativeTime = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 7) return `${diffDays}d`;
  if (diffDays < 30) return `${Math.floor(diffDays/7)}w`;
  if (diffDays < 365) return `${Math.floor(diffDays/30)}m`;
  return `last update (${Math.floor(diffDays/365)}y)`;
};

const MetricCard = ({ metric, isExpanded, onToggle }) => {
  const [selectedVote, setSelectedVote] = useState(null);
  const [helpfulVote, setHelpfulVote] = useState(null);
  const colors = CATEGORY_COLORS[metric.category];
  const IconComponent = colors.icon;

  const handleVote = (e, index) => {
    e.stopPropagation();
    setSelectedVote(index);
  };

  const handleHelpfulVote = (e, isHelpful) => {
    e.stopPropagation();
    setHelpfulVote(isHelpful);
  };

  const highestVoteIndex = metric.votes.indexOf(Math.max(...metric.votes));

  return (
    <Card 
      className={`${colors.bg} border-2 ${colors.border} hover:border-4 transition-all cursor-pointer`}
      onClick={onToggle}
    >
      <CardContent className="p-4">
        {isExpanded ? (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <IconComponent className={`w-6 h-6 ${colors.text}`} />
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold">{metric.name}</h2>
                <span className="text-sm text-gray-600 capitalize flex items-center gap-1">
                  {metric.category} {colors.emoji}
                </span>
              </div>
            </div>
            
            <div className="space-y-3">
              {metric.options.map((option, index) => (
                <Button 
                  key={index}
                  variant={selectedVote === index ? "default" : "outline"}
                  onClick={(e) => handleVote(e, index)}
                  size="sm"
                  className="w-full relative h-8 overflow-hidden group bg-white hover:bg-gray-50"
                >
                  <div 
                    className="absolute inset-0 bg-gray-100 opacity-50"
                    style={{width: `${metric.percentages[index]}%`}}
                  />
                  <div className="relative z-10 flex justify-between w-full px-2">
                    <span className="font-medium text-gray-900">{option}</span>
                    <span className="font-medium text-gray-700">{metric.votes[index]} votes</span>
                  </div>
                </Button>
              ))}
            </div>

            <div className="border-t pt-4 mt-4 text-center">
              <div className="text-sm mb-2">Was this helpful?</div>
              <div className="flex justify-center gap-4">
                <Button
                  variant={helpfulVote === true ? "default" : "outline"}
                  onClick={(e) => handleHelpfulVote(e, true)}
                  size="sm"
                  className="text-xs px-2 h-6 flex items-center gap-1"
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>{metric.helpfulVotes.up}</span>
                </Button>
                <Button
                  variant={helpfulVote === false ? "default" : "outline"}
                  onClick={(e) => handleHelpfulVote(e, false)}
                  size="sm"
                  className="text-xs px-2 h-6 flex items-center gap-1"
                >
                  <ThumbsDown className="w-3 h-3" />
                  <span>{metric.helpfulVotes.down}</span>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconComponent className={`w-6 h-6 ${colors.text}`} />
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">{metric.name}</h3>
                  <span className="text-sm text-gray-600 capitalize flex items-center gap-1">
                    {metric.category} {colors.emoji}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">
                  {getRelativeTime(metric.lastUpdate)}
                </div>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <div className="text-xl">
                {metric.options[highestVoteIndex]}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const CityMetricsPreview = () => {
  const [expandedCards, setExpandedCards] = useState(new Set());

  const toggleCard = (id) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold">Tokyo</h1>
          <span className="text-4xl">🗼</span>
        </div>
        <p className="text-xl text-gray-600">Explore and vote on various aspects of life in Tokyo</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TOKYO_METRICS.map((metric, index) => (
          <MetricCard 
            key={`${metric.id}-${index}`} 
            metric={metric}
            isExpanded={expandedCards.has(metric.id)}
            onToggle={() => toggleCard(metric.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CityMetricsPreview;