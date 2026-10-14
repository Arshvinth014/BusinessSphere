import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ShieldCheck, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import {
  LIVE_TERMINAL_TICKER,
  MARKET_ASSET_TABS,
  TIME_HORIZON_BUTTONS,
  HEALTH_GAUGES,
} from '../../mock/marketsData';

export const MarketsHeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeHorizon, setActiveHorizon] = useState('1D');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="w-full bg-[#06111f] text-white border-b border-slate-800/80 pt-6 pb-12">
      
      {/* Top Live Terminal Ticker Strip */}
      <div className="w-full bg-[#030a14] border-b border-slate-800/90 py-3 px-4 mb-8">
        <div className="w-full max-w-[1700px] 2xl:max-w-[2400px] mx-auto flex items-center justify-between gap-6 overflow-x-auto scrollbar-none text-xs sm:text-sm 2xl:text-base font-mono">
          <div className="flex items-center gap-2 font-bold text-[#00E599] flex-shrink-0 uppercase tracking-widest text-xs sm:text-sm 2xl:text-base">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00E599] animate-pulse" />
            LIVE TERMINAL
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
        </div>
      </div>

      <div className="w-full max-w-[1700px] 2xl:max-w-[2400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 space-y-8">
        
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
              <span className="font-mono uppercase tracking-wider text-xs sm:text-sm 2xl:text-base">REAL-TIME MARKET INTELLIGENCE</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 font-normal">Institutional-Paper • Personalized Execution</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-extrabold tracking-tight leading-[1.12] text-white">
              Global Markets &{' '}
              <span className="bg-gradient-to-r from-[#00E599] via-emerald-300 to-teal-400 bg-clip-text text-transparent block mt-1">
                Institutional Asset Intelligence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl max-w-3xl leading-relaxed font-normal">
              Track real-time pricing, macro indicators, sector rotations, and algorithmic volatility across equities, fixed income, commodities, and digital assets.
            </p>
          </motion.div>

          {/* Right Risk Exposure Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <div className="bg-[#091b30]/90 border border-slate-700/80 rounded-2xl p-5 sm:p-6 2xl:p-8 shadow-xl backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm 2xl:text-base font-mono font-bold text-slate-300 uppercase tracking-widest">
                  MOHAMMED'S RISK EXPOSURE
                </span>
                <span className="px-3 py-1 rounded text-xs sm:text-sm 2xl:text-base font-bold bg-emerald-500/15 text-[#00E599] border border-emerald-500/30">
                  Risk: Med-High
                </span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-xl bg-[#00E599]/15 flex items-center justify-center text-[#00E599]">
                    <ShieldCheck className="w-5 h-5 2xl:w-6 2xl:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg 2xl:text-xl font-extrabold text-white leading-tight">Aggressive Growth (Beta 1.18)</h3>
                    <span className="text-xs sm:text-sm 2xl:text-base text-slate-300">Equity & Tech overweight</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Search Input & Asset Category Filter Tabs Bar */}
        <div className="bg-[#0a182b] p-4 2xl:p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Left Search Input */}
          <div className="relative w-full lg:w-96 2xl:w-[480px]">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search ticker e.g. NVDA, AAPL, QQQ, US10Y, BTC..."
              className="w-full py-3 pl-12 pr-4 rounded-xl bg-[#040c16] border border-slate-700/80 text-sm sm:text-base 2xl:text-lg text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-[#00E599]"
            />
          </div>

          {/* Center Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto scrollbar-none">
            {MARKET_ASSET_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm 2xl:text-base font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#00E599] text-slate-950 shadow-md'
                    : 'text-slate-200 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right Horizon Buttons */}
          <div className="flex items-center gap-1.5 bg-[#040c16] p-1.5 rounded-xl border border-slate-800 text-xs sm:text-sm 2xl:text-base font-mono">
            {TIME_HORIZON_BUTTONS.map((h) => (
              <button
                key={h}
                onClick={() => setActiveHorizon(h)}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  activeHorizon === h
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {h}
              </button>
            ))}
          </div>

        </div>

        {/* 4 Market Health Gauge Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Market Breadth */}
          <div className="bg-[#091a2e] p-5 2xl:p-6 rounded-2xl border border-slate-800 shadow-md space-y-3">
            <div className="flex justify-between items-center text-xs sm:text-sm 2xl:text-base">
              <span className="text-slate-300 font-semibold">{HEALTH_GAUGES[0].title}</span>
              <span className={`px-2.5 py-1 rounded text-xs sm:text-sm font-bold border ${HEALTH_GAUGES[0].badgeClass}`}>
                {HEALTH_GAUGES[0].badgeText}
              </span>
            </div>
            <div className="text-xl sm:text-2xl 2xl:text-3xl font-extrabold text-white flex items-center justify-between">
              <span>{HEALTH_GAUGES[0].primaryValue}</span>
              <span className="text-slate-300 text-xs sm:text-sm 2xl:text-base">{HEALTH_GAUGES[0].secondaryValue}</span>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden flex">
              <div className="h-full bg-emerald-500 w-[75%]" />
              <div className="h-full bg-rose-500 w-[25%]" />
            </div>
          </div>

          {/* Card 2: Volatility Index */}
          <div className="bg-[#091a2e] p-5 2xl:p-6 rounded-2xl border border-slate-800 shadow-md space-y-3">
            <div className="flex justify-between items-center text-xs sm:text-sm 2xl:text-base">
              <span className="text-slate-300 font-semibold">{HEALTH_GAUGES[1].title}</span>
              <span className={`px-2.5 py-1 rounded text-xs sm:text-sm font-bold border ${HEALTH_GAUGES[1].badgeClass}`}>
                {HEALTH_GAUGES[1].badgeText}
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl 2xl:text-4xl font-extrabold text-white">{HEALTH_GAUGES[1].primaryValue}</span>
              <span className="text-sm sm:text-base 2xl:text-lg font-bold text-emerald-400">{HEALTH_GAUGES[1].changeText}</span>
            </div>
            <span className="text-xs sm:text-sm 2xl:text-base text-slate-300 block">{HEALTH_GAUGES[1].subNote}</span>
          </div>

          {/* Card 3: S&P 500 > 200-DMA */}
          <div className="bg-[#091a2e] p-5 2xl:p-6 rounded-2xl border border-slate-800 shadow-md space-y-3">
            <div className="flex justify-between items-center text-xs sm:text-sm 2xl:text-base">
              <span className="text-slate-300 font-semibold">{HEALTH_GAUGES[2].title}</span>
              <span className={`px-2.5 py-1 rounded text-xs sm:text-sm font-bold border ${HEALTH_GAUGES[2].badgeClass}`}>
                {HEALTH_GAUGES[2].badgeText}
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl 2xl:text-4xl font-extrabold text-white">{HEALTH_GAUGES[2].primaryValue}</span>
              <span className="text-sm sm:text-base 2xl:text-lg font-bold text-emerald-400">{HEALTH_GAUGES[2].changeText}</span>
            </div>
            <span className="text-xs sm:text-sm 2xl:text-base text-slate-300 block">{HEALTH_GAUGES[2].subNote}</span>
          </div>

          {/* Card 4: Total Options Volume */}
          <div className="bg-[#091a2e] p-5 2xl:p-6 rounded-2xl border border-slate-800 shadow-md space-y-3">
            <div className="flex justify-between items-center text-xs sm:text-sm 2xl:text-base">
              <span className="text-slate-300 font-semibold">{HEALTH_GAUGES[3].title}</span>
              <span className={`px-2.5 py-1 rounded text-xs sm:text-sm font-bold border ${HEALTH_GAUGES[3].badgeClass}`}>
                {HEALTH_GAUGES[3].badgeText}
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl 2xl:text-4xl font-extrabold text-white">{HEALTH_GAUGES[3].primaryValue}</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-[#00E599] text-xs sm:text-sm font-bold">
                {HEALTH_GAUGES[3].secondaryBadge}
              </span>
            </div>
            <span className="text-xs sm:text-sm 2xl:text-base text-slate-300 block">{HEALTH_GAUGES[3].subNote}</span>
          </div>

        </div>

      </div>
    </section>
  );
};
