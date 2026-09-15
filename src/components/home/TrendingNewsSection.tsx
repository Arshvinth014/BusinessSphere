import React from 'react';
import { TrendingUp, Newspaper, ChevronRight, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { TRENDING_TOPICS, LATEST_NEWS, MARKET_SNAPSHOT } from '../../mock/mockData';

export const TrendingNewsSection: React.FC = () => {
  return (
    <section id="news" className="w-full py-14 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Trending Topics (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">
                  <TrendingUp className="w-4 h-4" />
                  Trending Topics
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  Explore the most popular topics in business and finance
                </h2>
              </div>
              <a href="#topics" className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-0.5">
                View all <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Topics Pills Grid */}
            <div className="flex flex-wrap gap-2.5">
              {TRENDING_TOPICS.map((topic, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-medium text-xs border border-slate-200 shadow-sm transition-all hover:border-blue-300 hover:shadow"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Latest Business News & Market Snapshot (Spans 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">
                  <Newspaper className="w-4 h-4" />
                  Latest Business News
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  Global news, markets, and updates from around the world
                </h2>
              </div>
              <a href="#all-news" className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-0.5">
                View all <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* News Items List (8 cols on md) */}
              <div className="md:col-span-7 space-y-3">
                {LATEST_NEWS.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex gap-3 items-center group cursor-pointer"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[11px] font-bold">
                        <span className="text-blue-600">{item.category}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-400 font-normal">{item.timeAgo}</span>
                      </div>
                      <h4 className="text-xs font-semibold text-slate-900 group-hover:text-blue-600 line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Market Snapshot Card (5 cols on md) */}
              <div className="md:col-span-5 bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Market Snapshot</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </div>

                <div className="space-y-2">
                  {MARKET_SNAPSHOT.map((m) => (
                    <div key={m.id} className="flex items-center justify-between text-xs py-1 border-b border-slate-50 last:border-0">
                      <span className="font-semibold text-slate-700">{m.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-slate-900 font-medium">{m.value}</span>
                        <span
                          className={`flex items-center font-bold text-[11px] ${
                            m.isPositive ? 'text-emerald-600' : 'text-rose-600'
                          }`}
                        >
                          {m.isPositive ? (
                            <ArrowUpRight className="w-3 h-3" />
                          ) : (
                            <ArrowDownRight className="w-3 h-3" />
                          )}
                          {m.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
