import React from 'react';
import { TrendingUp, Newspaper, ChevronRight, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { TRENDING_TOPICS, LATEST_NEWS, MARKET_SNAPSHOT } from '../../mock/mockData';

export const TrendingNewsSection: React.FC = () => {
  return (
    <section id="news" className="w-full py-16 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Trending Topics (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-blue-600 font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-2">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  Trending Topics
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900">
                  Explore the most popular topics in business and finance
                </h2>
              </div>
              <a href="#topics" className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 shrink-0">
                View all <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Topics Pills Grid */}
            <div className="flex flex-wrap gap-3">
              {TRENDING_TOPICS.map((topic, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-blue-50 text-slate-800 hover:text-blue-700 font-bold text-sm sm:text-base border border-slate-200 shadow-sm transition-all hover:border-blue-300 hover:shadow"
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
                <div className="flex items-center gap-2 text-blue-600 font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-2">
                  <Newspaper className="w-4 h-4 text-blue-600" />
                  Latest Business News
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900">
                  Global news, markets, and updates from around the world
                </h2>
              </div>
              <a href="#all-news" className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 shrink-0">
                View all <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* News Items List (7 cols on md) */}
              <div className="md:col-span-7 space-y-4">
                {LATEST_NEWS.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex gap-4 items-center group cursor-pointer"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-20 h-20 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-extrabold">
                        <span className="text-blue-600 uppercase tracking-wider">{item.category}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500 font-medium">{item.timeAgo}</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Market Snapshot Card (5 cols on md) */}
              <div className="md:col-span-5 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-sm sm:text-base font-extrabold text-slate-900 uppercase tracking-wider">Market Snapshot</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                </div>

                <div className="space-y-3">
                  {MARKET_SNAPSHOT.map((m) => (
                    <div key={m.id} className="flex items-center justify-between text-sm py-1.5 border-b border-slate-100 last:border-0">
                      <span className="font-bold text-slate-800">{m.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-slate-900 font-extrabold">{m.value}</span>
                        <span
                          className={`flex items-center font-bold text-xs sm:text-sm ${
                            m.isPositive ? 'text-emerald-600' : 'text-rose-600'
                          }`}
                        >
                          {m.isPositive ? (
                            <ArrowUpRight className="w-4 h-4" />
                          ) : (
                            <ArrowDownRight className="w-4 h-4" />
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
