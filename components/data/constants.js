// // 'use client';

// // export const CATEGORIES = {
// //   costs: { emoji: '💰', color: 'bg-blue-100/80', border: 'border-blue-200' },
// //   lifestyle: { emoji: '🏡', color: 'bg-purple-100/80', border: 'border-purple-200' },
// //   transport: { emoji: '🚅', color: 'bg-green-100/80', border: 'border-green-200' },
// //   food: { emoji: '🍱', color: 'bg-orange-100/80', border: 'border-orange-200' },
// //   entertainment: { emoji: '🎭', color: 'bg-pink-100/80', border: 'border-pink-200' },
// //   utilities: { emoji: '💡', color: 'bg-yellow-100/80', border: 'border-yellow-200' }
// // };

// // // Stats that can be voted on
// // export const TOKYO_STATS = [
// //   {
// //     id: 1,
// //     name: 'Lunch Cost1',
// //     category: 'food',
// //     options: ['¥800-1000', '¥1000-1500', '¥1500-2000', '¥2000+'],
// //     votes: [450, 820, 340, 120],
// //     ratings: {
// //       helpful: 800,
// //       totalHelpful: 1222,
// //       happy: 620,
// //       neutral: 380,
// //       sad: 200
// //     },
// //     lastUpdate: new Date('2024-01-07')
// //   },
// //   {
// //     id: 2,
// //     name: 'Rent 1BR',
// //     category: 'costs',
// //     options: ['¥80k-100k', '¥100k-150k', '¥150k-200k', '¥200k+'],
// //     votes: [220, 780, 450, 180],
// //     ratings: {
// //       helpful: 600,
// //       totalHelpful: 950,
// //       happy: 420,
// //       neutral: 280,
// //       sad: 150
// //     },
// //     lastUpdate: new Date('2024-01-07')
// //   }
// // ].map(stat => ({
// //   ...stat,
// //   totalVotes: stat.votes.reduce((a, b) => a + b, 0),
// //   percentages: stat.votes.map(votes =>
// //     (votes / stat.votes.reduce((a, b) => a + b, 0)) * 100
// //   ),
// //   mostVoted: Math.max(...stat.votes),
// //   mostVotedOption: function() {
// //     return this.options[this.votes.indexOf(this.mostVoted)];
// //   }
// // }));

// // // Facts that can't be voted on
// // export const TOKYO_FACTS = [
// //   {
// //     id: 1,
// //     name: 'Population',
// //     category: 'lifestyle',
// //     value: '37.4M',
// //     subtitle: 'Greater Tokyo Area',
// //     details: 'Tokyo is the most populous metropolitan area in the world.',
// //     source: 'UN World Urbanization Prospects 2023',
// //     ratings: {
// //       helpful: 845,
// //       totalHelpful: 1000
// //     },
// //     lastUpdate: new Date('2024-01-07')
// //   },
// //   {
// //     id: 2,
// //     name: 'Average Temperature',
// //     category: 'utilities',
// //     value: '15.4°C',
// //     subtitle: 'Annual Average',
// //     details: 'Tokyo has a humid subtropical climate with hot summers and mild winters.',
// //     source: 'Japan Meteorological Agency',
// //     ratings: {
// //       helpful: 720,
// //       totalHelpful: 900
// //     },
// //     lastUpdate: new Date('2024-01-07')
// //   }
// // ];


// const CATEGORY_COLORS = {
//     costs: { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200', icon: CircleDollarSign },
//     lifestyle: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', icon: Coffee },
//     transport: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', icon: Train },
//     tech: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', icon: Laptop },
//     health: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', icon: Heart },
//     environment: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', icon: Sun }
//   };

// triplst/components/data/constants.js

export const TOKYO_METRICS = [
    // Costs Category
    { 
      id: 1, 
      name: 'Lunch Cost', 
      emoji: '🍱', 
      category: 'costs',
      options: ['¥800-1000', '¥1000-1500', '¥1500-2000', '¥2000+'],
      votes: [450, 820, 340, 120],
      lastUpdate: '2024-01-08'
    },
    { 
      id: 2, 
      name: 'Rent 1BR', 
      emoji: '🏢', 
      category: 'costs',
      options: ['¥80k-100k', '¥100k-150k', '¥150k-200k', '¥200k+'],
      votes: [220, 780, 450, 180],
      lastUpdate: '2024-01-09'
    },
    // Transport Category
    { 
      id: 3, 
      name: 'Metro', 
      emoji: '🚇', 
      category: 'transport',
      options: ['Crowded', 'Very Crowded', 'Packed', 'Extremely'],
      votes: [150, 480, 720, 280],
      lastUpdate: '2024-01-09'
    },
    { 
      id: 4, 
      name: 'Walk Score', 
      emoji: '🚶', 
      category: 'transport',
      options: ['Good', 'Very Good', 'Excellent', 'Perfect'],
      votes: [180, 420, 850, 320],
      lastUpdate: '2024-01-07'
    },
    // Tech Category
    { 
      id: 5, 
      name: 'Internet', 
      emoji: '📶', 
      category: 'tech',
      options: ['50Mbps', '100Mbps', '500Mbps', '1Gbps+'],
      votes: [120, 280, 580, 780],
      lastUpdate: '2024-01-09'
    },
    { 
      id: 6, 
      name: 'Cashless', 
      emoji: '💳', 
      category: 'tech',
      options: ['Rare', 'Common', 'Very Common', 'Everywhere'],
      votes: [680, 420, 280, 180],
      lastUpdate: '2024-01-05'
    },
    // Environment Category
    { 
      id: 7, 
      name: 'Air Quality', 
      emoji: '💨', 
      category: 'environment',
      options: ['Poor', 'Moderate', 'Good', 'Excellent'],
      votes: [180, 480, 720, 280],
      lastUpdate: '2024-01-09'
    },
    { 
      id: 8, 
      name: 'Green Space', 
      emoji: '🌳', 
      category: 'environment',
      options: ['Limited', 'Some', 'Many', 'Abundant'],
      votes: [280, 580, 420, 180],
      lastUpdate: '2023-12-25'
    }
  ].map(metric => ({
    ...metric,
    totalVotes: metric.votes.reduce((a, b) => a + b, 0),
    percentages: metric.votes.map(votes => 
      (votes / metric.votes.reduce((a, b) => a + b, 0)) * 100
    ),
    helpfulVotes: { up: 0, down: 0 }
  }));