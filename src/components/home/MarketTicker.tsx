import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { MARKET_TICKERS } from '../../mock/mockData';

export const MarketTicker: React.FC = () => {
  return (
    <div className="w-full bg-[#070D18] border-b border-slate-800 text-slate-300 py-3.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto scrollbar-none py-1">
        {MARKET_TICKERS.map((ticker) => (
          <div
            key={ticker.id}
            className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 flex-shrink-0 text-sm hover:border-slate-700 transition-colors shadow-xs"
          >
            <span className="font-extrabold text-white uppercase tracking-wider">{ticker.symbol}</span>
            <span className="text-slate-200 font-mono font-bold">{ticker.value}</span>
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs sm:text-sm font-extrabold ${
                ticker.isPositive
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                  : 'bg-rose-500/15 text-rose-400 border border-rose-500/20'
              }`}
            >
              {ticker.isPositive ? (
                <TrendingUp className="w-3.5 h-3.5" />
              ) : (
                <TrendingDown className="w-3.5 h-3.5" />
              )}
              {ticker.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
