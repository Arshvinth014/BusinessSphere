import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, TrendingUp, TrendingDown } from 'lucide-react';
import { LIVE_TICKER_BAR, NEWS_CATEGORIES } from '../../mock/newsData';

interface NewsHeroHeaderProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const NewsHeroHeader: React.FC<NewsHeroHeaderProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const [sortBy, setSortBy] = useState('Most Recent');

  return (
    <div className="w-full bg-[#0B1728] text-white pt-8 pb-6 border-b border-slate-800/80">
      <div className="w-full max-w-[1700px] 2xl:max-w-[2200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 space-y-6">
        
        {/* Top Header Banner Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pt-2">
          
          {/* Left Title Area */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3 max-w-3xl"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>INVESTWISE EDITORIAL INTELLIGENCE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Market News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Insights</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg 2xl:text-xl font-normal leading-relaxed">
              Stay ahead with verified reporting, macroeconomic policy teardowns, market analysis, and actionable personal finance strategies.
            </p>
          </motion.div>

          {/* Right Stats Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-8 lg:gap-12 bg-slate-900/80 border border-slate-800/90 rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-xl self-stretch lg:self-auto justify-around"
          >
            <div className="text-center sm:text-left space-y-0.5">
              <span className="text-3xl sm:text-4xl 2xl:text-5xl font-extrabold text-white block">128+</span>
              <span className="text-xs sm:text-sm 2xl:text-base text-slate-400 font-medium block">Published This Week</span>
            </div>

            <div className="h-10 w-[1px] bg-slate-800" />

            <div className="text-center sm:text-left space-y-0.5">
              <span className="text-3xl sm:text-4xl 2xl:text-5xl font-extrabold text-emerald-400 block">14 min</span>
              <span className="text-xs sm:text-sm 2xl:text-base text-slate-400 font-medium block">Avg. Fresh Update</span>
            </div>
          </motion.div>

        </div>

        {/* Live Market Ticker Row */}
        <div className="pt-2 border-t border-slate-800/60 flex items-center gap-4 overflow-x-auto no-scrollbar text-xs sm:text-sm 2xl:text-base text-slate-300 py-2">
          <div className="flex items-center gap-2 font-bold text-emerald-400 flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{LIVE_TICKER_BAR.status}</span>
          </div>

          <span className="text-slate-600 font-bold">•</span>

          {LIVE_TICKER_BAR.items.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="text-slate-400 font-medium">{item.label}:</span>
                <span className="font-bold text-white">{item.value}</span>
                {item.change && (
                  <span
                    className={`font-bold flex items-center gap-0.5 ${
                      item.positive === true
                        ? 'text-emerald-400'
                        : item.positive === false
                        ? 'text-rose-400'
                        : 'text-amber-400'
                    }`}
                  >
                    {item.positive === true && <TrendingUp className="w-3.5 h-3.5" />}
                    {item.positive === false && <TrendingDown className="w-3.5 h-3.5" />}
                    {item.change}
                  </span>
                )}
              </div>
              {idx < LIVE_TICKER_BAR.items.length - 1 && <span className="text-slate-700 font-bold">•</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Filter Pills & Sort Dropdown */}
        <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar w-full sm:w-auto pb-1 sm:pb-0">
            {NEWS_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => onSelectCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm 2xl:text-base font-bold transition-all flex-shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                      : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700/70 hover:border-slate-600'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 text-xs sm:text-sm 2xl:text-base text-slate-400 self-end sm:self-auto flex-shrink-0">
            <span>Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-900 border border-slate-700/80 rounded-lg px-3 py-1.5 pr-8 text-xs sm:text-sm 2xl:text-base text-slate-200 focus:outline-none focus:border-emerald-500 cursor-pointer appearance-none"
              >
                <option value="Most Recent">Most Recent</option>
                <option value="Most Popular">Most Popular</option>
                <option value="Highest Rated">Highest Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
