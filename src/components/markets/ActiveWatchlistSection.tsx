import React, { useState } from 'react';
import { Activity, ExternalLink } from 'lucide-react';
import { WATCHLIST_ITEMS } from '../../mock/marketsData';

export const ActiveWatchlistSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('most-active');

  return (
    <section className="w-full py-10 bg-white border-b border-slate-100">
      <div className="w-full max-w-[1700px] 2xl:max-w-[2400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 space-y-6">
        
        {/* Outer Dark Container Box */}
        <div className="bg-[#091728] p-6 sm:p-8 2xl:p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
          
          {/* Header & Filter Tabs */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm sm:text-base 2xl:text-lg mb-1">
                <div className="p-1.5 rounded bg-emerald-500/15">
                  <Activity className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#00E599]" />
                </div>
                <h2 className="text-xl sm:text-2xl 2xl:text-3xl 3xl:text-4xl font-extrabold text-white">Active Market Screen & Watchlist</h2>
              </div>
              <p className="text-xs sm:text-sm 2xl:text-base text-slate-300">
                Institutional depth quotes, liquidity metrics, and 7-day volatility trajectories.
              </p>
            </div>

            {/* Filter Tabs Pills */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none w-full lg:w-auto">
              <button
                onClick={() => setActiveFilter('most-active')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm 2xl:text-base font-bold transition-all whitespace-nowrap ${
                  activeFilter === 'most-active'
                    ? 'bg-[#00E599] text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Most Active
              </button>
              <button
                onClick={() => setActiveFilter('top-gainers')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm 2xl:text-base font-bold transition-all whitespace-nowrap ${
                  activeFilter === 'top-gainers'
                    ? 'bg-[#00E599] text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Top Gainers
              </button>
              <button
                onClick={() => setActiveFilter('top-losers')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm 2xl:text-base font-bold transition-all whitespace-nowrap ${
                  activeFilter === 'top-losers'
                    ? 'bg-[#00E599] text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Top Losers
              </button>
              <button
                onClick={() => setActiveFilter('52w-highs')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm 2xl:text-base font-bold transition-all whitespace-nowrap ${
                  activeFilter === '52w-highs'
                    ? 'bg-[#00E599] text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                52-Week Highs
              </button>
              <button
                onClick={() => setActiveFilter('watchlist')}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm 2xl:text-base font-bold bg-emerald-500/15 text-[#00E599] border border-emerald-500/30 whitespace-nowrap flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#00E599]" />
                Mohamed's Watchlist (8)
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto scrollbar-none rounded-2xl border border-slate-800 bg-[#050f1a]">
            <table className="w-full text-left text-xs sm:text-sm 2xl:text-base">
              <thead>
                <tr className="border-b border-slate-800 bg-[#040c16] text-slate-300 font-mono text-xs sm:text-sm 2xl:text-base uppercase tracking-wider">
                  <th className="py-4 px-5">ASSET / COMPANY</th>
                  <th className="py-4 px-5 text-right">LAST PRICE</th>
                  <th className="py-4 px-5 text-right">24H CHANGE</th>
                  <th className="py-4 px-5 text-center">24H DAY RANGE</th>
                  <th className="py-4 px-5 text-right">VOLUME / 30D AVG</th>
                  <th className="py-4 px-5 text-right">MARKET CAP</th>
                  <th className="py-4 px-5 text-right">P/E RATIO</th>
                  <th className="py-4 px-5 text-center">7-DAY TREND</th>
                  <th className="py-4 px-5 text-center">QUICK ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {WATCHLIST_ITEMS.map((row) => (
                  <tr key={row.id} className="hover:bg-[#091a2e] transition-colors group">
                    
                    {/* Asset Name */}
                    <td className="py-4 px-5 font-sans">
                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 2xl:w-10 2xl:h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center font-bold text-sm sm:text-base text-white">
                          {row.name.charAt(0)}
                        </div>
                        <div>
                          <span className="font-extrabold text-white text-sm sm:text-base 2xl:text-lg block group-hover:text-[#00E599] transition-colors">
                            {row.name}
                          </span>
                          <span className="text-xs sm:text-sm text-slate-400 font-mono">
                            {row.symbol} • {row.exchange}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Last Price */}
                    <td className="py-4 px-5 font-mono font-extrabold text-white text-base sm:text-lg 2xl:text-xl text-right">
                      {row.lastPrice}
                    </td>

                    {/* 24h Change */}
                    <td className="py-4 px-5 font-mono font-bold text-right text-sm sm:text-base 2xl:text-lg">
                      <span className={`inline-flex items-center gap-0.5 ${row.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {row.changePercent} ({row.changeValue})
                      </span>
                    </td>

                    {/* 24h Day Range */}
                    <td className="py-4 px-5 text-center">
                      <div className="w-32 2xl:w-40 mx-auto space-y-1 text-xs sm:text-sm font-mono text-slate-300">
                        <div className="flex justify-between">
                          <span>{row.dayRangeLow}</span>
                          <span>{row.dayRangeHigh}</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div
                            className="h-full bg-emerald-400 rounded-full"
                            style={{ width: `${row.rangePercent}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Volume */}
                    <td className="py-4 px-5 font-mono text-right text-sm sm:text-base 2xl:text-lg">
                      <span className="text-slate-100 font-bold block">{row.volume}</span>
                      <span className="text-xs text-slate-400 block">Avg {row.avgVolume}</span>
                    </td>

                    {/* Market Cap */}
                    <td className="py-4 px-5 font-mono font-bold text-slate-100 text-sm sm:text-base 2xl:text-lg text-right">
                      {row.marketCap}
                    </td>

                    {/* P/E Ratio */}
                    <td className="py-4 px-5 font-mono text-slate-300 text-sm sm:text-base 2xl:text-lg text-right">
                      {row.peRatio}
                    </td>

                    {/* 7-Day Trend Sparkline */}
                    <td className="py-4 px-5 text-center">
                      <div className="w-20 h-8 mx-auto">
                        <svg className="w-full h-full" viewBox="0 0 60 20" fill="none">
                          <path
                            d="M 0 15 Q 15 12, 30 8 T 60 4"
                            stroke="#00E599"
                            strokeWidth="2.5"
                            fill="none"
                          />
                        </svg>
                      </div>
                    </td>

                    {/* Quick Action */}
                    <td className="py-4 px-5 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          type="button"
                          className="px-4 py-2 rounded-xl bg-[#00E599] hover:bg-[#00c885] text-slate-950 font-extrabold text-xs sm:text-sm 2xl:text-base transition-all shadow-md"
                        >
                          Trade
                        </button>
                        <button
                          type="button"
                          className="p-2 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
                          title="Details"
                        >
                          <ExternalLink className="w-4 h-4 2xl:w-5 2xl:h-5" />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 text-xs sm:text-sm 2xl:text-base text-slate-300 font-mono">
            <div>
              Showing 8 of 500 US Large Cap Securities • Updated every 1,000ms
            </div>

            <div className="flex items-center gap-1.5">
              <button className="px-4 py-2 rounded-xl bg-[#050f1a] border border-slate-800 text-slate-300 hover:text-white font-bold">
                Previous
              </button>
              <button className="px-4 py-2 rounded-xl bg-[#00E599] text-slate-950 font-extrabold">
                1
              </button>
              <button className="px-4 py-2 rounded-xl bg-[#050f1a] border border-slate-800 text-slate-300 hover:text-white font-bold">
                2
              </button>
              <button className="px-4 py-2 rounded-xl bg-[#050f1a] border border-slate-800 text-slate-300 hover:text-white font-bold">
                3
              </button>
              <button className="px-4 py-2 rounded-xl bg-[#050f1a] border border-slate-800 text-slate-300 hover:text-white font-bold">
                Next
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
