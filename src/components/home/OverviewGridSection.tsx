import React from 'react';
import { PORTFOLIO_ALLOCATION, POPULAR_STOCKS } from '../../mock/mockData';

export const OverviewGridSection: React.FC = () => {
  return (
    <section className="w-full py-10 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Portfolio Allocation */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base font-bold text-slate-900">Portfolio Allocation</h3>
              </div>
              <p className="text-xs text-slate-500 mb-6">
                Diversified asset allocation to manage risk and capture growth
              </p>

              <div className="flex items-center gap-6">
                {/* Donut Chart Visual */}
                <div className="relative w-28 h-28 flex-shrink-0 flex items-center justify-center">
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
                    <span className="text-[11px] font-bold text-slate-900">$49,320</span>
                    <span className="text-[9px] text-slate-400">Total Portfolio</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="space-y-1.5 text-xs">
                  {PORTFOLIO_ALLOCATION.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-slate-600 font-medium">{item.name}</span>
                      </div>
                      <span className="font-bold text-slate-800">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-200/80 text-right">
              <a href="#portfolio" className="text-xs font-bold text-emerald-600 hover:underline">
                View details
              </a>
            </div>
          </div>

          {/* Card 2: Market Overview */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base font-bold text-slate-900">Market Overview</h3>
                <a href="#markets" className="text-xs font-bold text-emerald-600 hover:underline">
                  View all markets
                </a>
              </div>
              <p className="text-xs text-slate-500 mb-4">
                Live Market Data: 10:24 AM
              </p>

              {/* Line Chart Graphic */}
              <div className="h-32 w-full pt-2">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" fill="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="300" y2="20" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="0" y1="50" x2="300" y2="50" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="0" y1="80" x2="300" y2="80" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="3 3" />
                  
                  {/* Y Axis Labels */}
                  <text x="0" y="15" fill="#94a3b8" fontSize="8">6,000</text>
                  <text x="0" y="45" fill="#94a3b8" fontSize="8">5,800</text>
                  <text x="0" y="75" fill="#94a3b8" fontSize="8">5,600</text>

                  {/* Smooth Green Curve */}
                  <path
                    d="M 30 70 Q 70 30, 110 65 T 190 20 T 270 50"
                    stroke="#00E599"
                    strokeWidth="3"
                    fill="none"
                  />
                  {/* Peak Marker Dot */}
                  <circle cx="190" cy="20" r="4" fill="#00E599" stroke="#ffffff" strokeWidth="2" />
                </svg>
                {/* Timeline X-Labels */}
                <div className="flex justify-between text-[10px] text-slate-400 pt-1 px-4">
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
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base font-bold text-slate-900">Popular Companies</h3>
                <a href="#watchlist" className="text-xs font-bold text-emerald-600 hover:underline">
                  Manage Watchlist
                </a>
              </div>
              <div className="space-y-3 mt-4">
                {POPULAR_STOCKS.map((stock, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-slate-200/60 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${stock.logoBg}`}>
                        {stock.logoText}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{stock.name} <span className="text-slate-400 font-normal">[{stock.symbol}]</span></div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-bold text-slate-900">{stock.price}</div>
                      <div className="text-emerald-600 font-bold text-[11px]">{stock.change}</div>
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
