import React from 'react';
import { ChevronRight } from 'lucide-react';
import { PORTFOLIO_ALLOCATION, POPULAR_STOCKS } from '../../mock/mockData';

export const OverviewGridSection: React.FC = () => {
  return (
    <section className="w-full py-8 sm:py-10 bg-white text-slate-900 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
      <div className="w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Portfolio Allocation */}
          <div className="bg-slate-50 p-6 sm:p-7 2xl:p-8 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-extrabold text-slate-900">Portfolio Allocation</h3>
              </div>
              <p className="text-sm sm:text-base 2xl:text-lg text-slate-500 mb-6">
                Diversified asset allocation to manage risk and capture growth
              </p>

              <div className="flex items-center gap-6">
                {/* Donut Chart Visual */}
                <div className="relative w-36 h-36 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                    {/* Funds 55% */}
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#00E599" strokeWidth="4" strokeDasharray="48.3 88" strokeDashoffset="0" />
                    {/* Stocks 20% */}
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#3B82F6" strokeWidth="4" strokeDasharray="17.5 88" strokeDashoffset="-48.3" />
                    {/* Cash 15% */}
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#6366F1" strokeWidth="4" strokeDasharray="13.2 88" strokeDashoffset="-65.8" />
                    {/* Real Estate 5% */}
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#F59E0B" strokeWidth="4" strokeDasharray="4.4 88" strokeDashoffset="-79" />
                    {/* Other 5% */}
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#EC4899" strokeWidth="4" strokeDasharray="4.4 88" strokeDashoffset="-83.4" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-sm sm:text-base 2xl:text-xl font-extrabold text-slate-900">$49,320</span>
                    <span className="text-xs sm:text-sm 2xl:text-base text-slate-400 font-semibold">Total</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="space-y-2.5 text-sm sm:text-base 2xl:text-lg">
                  {PORTFOLIO_ALLOCATION.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-slate-700 font-medium">{item.name}</span>
                      </div>
                      <span className="font-bold text-slate-900">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 text-right">
              <a href="#portfolio" className="text-sm sm:text-base 2xl:text-lg font-bold text-emerald-600 hover:underline">
                View details
              </a>
            </div>
          </div>

          {/* Card 2: Market Overview */}
          <div className="bg-slate-50 p-6 sm:p-7 2xl:p-8 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-extrabold text-slate-900">Market Overview</h3>
                <a href="#markets" className="text-sm sm:text-base 2xl:text-lg font-bold text-emerald-600 hover:underline">
                  View all markets
                </a>
              </div>
              <p className="text-sm sm:text-base 2xl:text-lg text-slate-500 mb-5">
                Live Market Data: 10:24 AM
              </p>

              {/* Line Chart Graphic */}
              <div className="h-40 w-full pt-2">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" fill="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="300" y2="20" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="0" y1="50" x2="300" y2="50" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="0" y1="80" x2="300" y2="80" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="3 3" />
                  
                  {/* Y Axis Labels */}
                  <text x="0" y="15" fill="#94a3b8" fontSize="10">6,000</text>
                  <text x="0" y="45" fill="#94a3b8" fontSize="10">5,800</text>
                  <text x="0" y="75" fill="#94a3b8" fontSize="10">5,600</text>

                  {/* Smooth Green Curve */}
                  <path
                    d="M 30 70 Q 70 30, 110 65 T 190 20 T 270 50"
                    stroke="#00E599"
                    strokeWidth="3.5"
                    fill="none"
                  />
                  {/* Peak Marker Dot */}
                  <circle cx="190" cy="20" r="5" fill="#00E599" stroke="#ffffff" strokeWidth="2.5" />
                </svg>
                {/* Timeline X-Labels */}
                <div className="flex justify-between text-xs sm:text-sm 2xl:text-base text-slate-500 pt-2 px-4 font-semibold">
                  <span>9AM</span>
                  <span>11AM</span>
                  <span>1PM</span>
                  <span>3PM</span>
                  <span>5PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Popular Companies */}
          <div className="bg-slate-50 p-6 sm:p-7 2xl:p-8 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-extrabold text-slate-900">Popular Companies</h3>
                <a href="#watchlist" className="text-sm sm:text-base 2xl:text-lg font-bold text-emerald-600 hover:underline">
                  Manage Watchlist
                </a>
              </div>
              <div className="space-y-4 mt-5">
                {POPULAR_STOCKS.map((stock, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm sm:text-base 2xl:text-lg py-2 border-b border-slate-200/70 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm sm:text-base ${stock.logoBg}`}>
                        {stock.logoText}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-base sm:text-lg 2xl:text-xl">{stock.name} <span className="text-slate-400 font-normal">[{stock.symbol}]</span></div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-bold text-slate-900 text-base sm:text-lg 2xl:text-xl">{stock.price}</div>
                      <div className="text-emerald-600 font-bold text-xs sm:text-sm 2xl:text-base">{stock.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

