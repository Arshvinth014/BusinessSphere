import React from 'react';
import { motion } from 'framer-motion';
import {
  Plus,
  Sliders,
  Wallet,
  RefreshCw,
  ShieldCheck,
  Flag,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import { GOALS_METRIC_CARDS } from '../../mock/goalsData';
import { LIVE_TERMINAL_TICKER } from '../../mock/marketsData';

export const GoalsHeroSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Wallet':
        return <Wallet className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#00E599]" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#00E599]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#00E599]" />;
      case 'Flag':
        return <Flag className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#00E599]" />;
      default:
        return <Wallet className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#00E599]" />;
    }
  };

  return (
    <section className="w-full bg-[#06111f] text-white border-b border-slate-800/80 pt-6 pb-12">
      {/* Top Live Terminal Ticker Strip */}
      <div className="w-full bg-[#030a14] border-b border-slate-800/90 py-3 px-4 mb-8">
        <div className="w-full max-w-[1700px] 2xl:max-w-[2400px] mx-auto flex items-center justify-between gap-6 overflow-x-auto scrollbar-none text-xs sm:text-sm 2xl:text-base font-mono">
          <div className="flex items-center gap-2 font-bold text-[#00E599] flex-shrink-0 uppercase tracking-widest text-xs sm:text-sm 2xl:text-base">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00E599] animate-pulse" />
            LIVE MARKETS
          </div>

          <div className="flex items-center gap-8 flex-shrink-0">
            {LIVE_TERMINAL_TICKER.map((t, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-slate-400 font-sans font-medium">{t.symbol}:</span>
                <span className="font-bold text-white">{t.value}</span>
                <span className={`font-semibold flex items-center ${t.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {t.isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  {t.change}
                </span>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-slate-400 text-xs sm:text-sm font-sans flex-shrink-0">
            <span>NYSE & NASDAQ Open • 10:24 AM EST</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1700px] 2xl:max-w-[2400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 space-y-10">
        {/* Main Hero Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-5"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm 2xl:text-base font-semibold text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00E599] animate-pulse" />
              <span className="font-mono uppercase tracking-wider text-xs sm:text-sm 2xl:text-base">
                ALGORITHMIC GLIDEPATHS • MONTE CARLO RISK ENGINE
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-tight leading-[1.12] text-white">
              Map your Aspirations{' '}
              <span className="bg-gradient-to-r from-[#00E599] via-emerald-300 to-teal-400 bg-clip-text text-transparent block mt-1">
                Fund Every Life Milestone.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base xl:text-lg 2xl:text-xl max-w-3xl leading-relaxed font-normal">
              Stay ahead with verified reporting, macroeconomic policy teardowns, market analysis, and actionable personal finance strategies.
            </p>
          </motion.div>

          {/* Action Buttons Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-row items-stretch lg:items-center justify-end gap-4"
          >
            <button
              type="button"
              className="px-6 py-3.5 rounded-2xl bg-[#00E599] hover:bg-[#00c885] text-slate-950 font-extrabold text-sm sm:text-base 2xl:text-lg flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02]"
            >
              <Plus className="w-5 h-5 2xl:w-6 2xl:h-6 stroke-[2.5]" />
              <span>Create New Goal</span>
            </button>

            <button
              type="button"
              className="px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white font-bold text-sm sm:text-base 2xl:text-lg flex items-center justify-center gap-2 shadow-md transition-all hover:border-slate-500"
            >
              <Sliders className="w-4 h-4 2xl:w-5 2xl:h-5 text-emerald-400" />
              <span>Simulate Scenarios</span>
            </button>
          </motion.div>
        </div>

        {/* 4 Stat Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GOALS_METRIC_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#091a2e] p-5 2xl:p-6 rounded-2xl border border-slate-800 shadow-md space-y-3 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center text-xs sm:text-sm 2xl:text-base">
                <span className="text-slate-400 font-bold uppercase tracking-wider font-mono">
                  {card.title}
                </span>
                <div className="p-1.5 rounded-lg bg-emerald-500/10">
                  {getIcon(card.iconName)}
                </div>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl 2xl:text-4xl font-extrabold text-white">
                  {card.value}
                </span>
                {card.subValue && (
                  <span
                    className={`text-xs sm:text-sm 2xl:text-base font-semibold ${
                      card.subValue.startsWith('+') ? 'text-emerald-400' : 'text-slate-400'
                    }`}
                  >
                    {card.subValue}
                  </span>
                )}
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs sm:text-sm 2xl:text-base text-slate-400">
                <span className={card.id === 'total-capital' ? 'text-emerald-400 font-semibold' : ''}>
                  {card.fundedText}
                </span>
                {card.badge ? (
                  <span className={`px-2 py-0.5 rounded text-[11px] 2xl:text-xs font-bold border ${card.badgeClass}`}>
                    {card.badge}
                  </span>
                ) : (
                  <span>{card.horizonText}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
