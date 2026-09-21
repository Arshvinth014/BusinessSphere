import React from 'react';
import { BLOG_CATEGORIES } from '../../mock/blogsData';
import { Flame, Search } from 'lucide-react';

interface BlogsCategoryNavProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const BlogsCategoryNav: React.FC<BlogsCategoryNavProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="w-full bg-white border-y border-slate-200 sticky top-16 sm:top-20 z-40 backdrop-blur-md bg-opacity-95 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Categories Pill Slider */}
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1 scroll-smooth flex-1">
            <span className="inline-flex items-center gap-1.5 text-red-600 text-xs sm:text-sm font-black uppercase tracking-wider pr-3 border-r border-slate-200 shrink-0">
              <Flame className="w-4 h-4 text-red-600 animate-pulse" />
              Topics
            </span>

            {BLOG_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => onSelectCategory(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-[1.02]'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/80'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search articles & topics..."
              className="w-full pl-10 pr-4 py-2 bg-slate-100 text-slate-900 text-xs sm:text-sm rounded-full border border-slate-200 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 transition-all placeholder:text-slate-400 font-semibold"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-sm font-bold"
              >
                ×
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
