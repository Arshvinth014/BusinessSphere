import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { MARKET_TICKERS } from '../../mock/mockData';

export const MarketTicker: React.FC = () => {
  return (
    <div className="w-full bg-[#070D18] border-b border-slate-800 text-slate-300 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto scrollbar-none py-1">
        {MARKET_TICKERS.map((ticker) => (
          <div
            key={ticker.id}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800/80 flex-shrink-0 text-xs hover:border-slate-700 transition-colors"
          >
            <span className="font-bold text-white uppercase tracking-wider">{ticker.symbol}</span>
            <span className="text-slate-300 font-mono font-medium">{ticker.value}</span>
            <span
              className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[11px] font-semibold ${
                ticker.isPositive
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                  : 'bg-rose-500/15 text-rose-400 border border-rose-500/20'
              }`}
            >
              {ticker.isPositive ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {ticker.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
