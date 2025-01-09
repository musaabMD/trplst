import React from 'react';
import { Search } from 'lucide-react';
import { CATEGORIES } from './constants';

const Hero = () => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-5xl font-bold mb-4">Where to?</h1>
      <div className="flex items-center justify-center gap-2">
        <h2 className="text-2xl font-light">Tokyo</h2>
        <span className="text-2xl">🗼</span>
      </div>
    </div>
  );
};

const FilterSearch = ({ searchTerm, setSearchTerm, activeFilter, setActiveFilter }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      
      {/* Categories */}
      <div className="flex justify-start md:justify-center overflow-x-auto gap-3 mb-6 pb-2 scrollbar-hide px-2">
        <button
          onClick={() => setActiveFilter('all')}
          className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap transition-all ${
            activeFilter === 'all'
              ? 'bg-black text-white'
              : 'bg-white border border-gray-200 hover:bg-gray-50'
          }`}
        >
          <span className="mr-2">📊</span>
          <span>All</span>
        </button>
        
        {Object.entries(CATEGORIES).map(([category, { emoji }]) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              activeFilter === category
                ? 'bg-black text-white'
                : 'bg-white border border-gray-200 hover:bg-gray-50'
            }`}
          >
            <span className="mr-2">{emoji}</span>
            <span className="capitalize">
              {category}
            </span>
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative w-full max-w-3xl mx-auto mb-8">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search metrics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-28 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent shadow-sm text-base"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <button className="px-6 py-2.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors text-sm sm:text-base">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;