import React from 'react';
import {
  LineChart,
  TrendingUp,
  PieChart,
  BarChart3,
  Coins,
  Globe2,
  Building2,
  Activity,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';
import { MARKET_CATEGORIES } from '../../mock/mockData';

const getIcon = (name: string) => {
  switch (name) {
    case 'LineChart': return <LineChart className="w-5 h-5 text-blue-500" />;
    case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-500" />;
    case 'PieChart': return <PieChart className="w-5 h-5 text-purple-500" />;
    case 'BarChart3': return <BarChart3 className="w-5 h-5 text-sky-500" />;
    case 'Coins': return <Coins className="w-5 h-5 text-amber-500" />;
    case 'Globe2': return <Globe2 className="w-5 h-5 text-indigo-500" />;
    case 'Building2': return <Building2 className="w-5 h-5 text-teal-500" />;
    case 'Activity': return <Activity className="w-5 h-5 text-rose-500" />;
    default: return <LineChart className="w-5 h-5 text-blue-500" />;
  }
};

export const MarketsSection: React.FC = () => {
  return (
    <section id="markets" className="w-full py-14 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">
              <LineChart className="w-4 h-4" />
              Markets & Investing
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Track the market, analyze trends and make informed decisions
            </h2>
          </div>
          <a
            href="#all-markets"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            View all <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Layout Grid: 8 Items on Left, Highlight Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Categories Grid (Spans 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-4">
            {MARKET_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="p-4 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-300 transition-all duration-200 flex items-center gap-3 cursor-pointer group"
              >
                <div className="p-2.5 rounded-lg bg-white shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  {getIcon(cat.iconName)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {cat.title}
                  </h3>
                  {cat.description && (
                    <p className="text-xs text-slate-500 line-clamp-1">{cat.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Callout Card (Spans 5 cols) matching image */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B1528] via-[#0D1E3A] to-[#0A2540] p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden border border-slate-700/60 flex flex-col justify-between min-h-[300px]">
            
            {/* Chart Graphic background glow */}
            <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
              <svg width="300" height="180" viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 150 Q 50 120 100 130 T 200 60 T 300 10 L 300 180 L 0 180 Z" fill="url(#grad)" />
                <path d="M0 150 Q 50 120 100 130 T 200 60 T 300 10" stroke="#10B981" strokeWidth="4" fill="none" />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10 space-y-4 max-w-xs">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold text-xs border border-emerald-500/30">
                PRO ANALYTICS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                Understand before you invest.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Access deep financial ratio models, valuation benchmarks, and real-time market signals designed for smart investors.
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <button
                type="button"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-900/40 transition-all hover:scale-[1.02]"
              >
                Explore Tools <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
