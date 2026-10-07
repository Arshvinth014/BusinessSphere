import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Activity } from 'lucide-react';
import { HERO_STATS, LIVE_MARKETS_TICKER } from '../../mock/investmentPlansData';

export const HeroBannerSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#071322] text-white overflow-hidden pt-8 pb-12 border-b border-slate-800">
      
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[5%] w-[500px] h-[500px] bg-[#00E599]/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-[1700px] 2xl:max-w-[2200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content (Spans 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse" />
              <span className="font-mono uppercase tracking-wider text-[11px]">CURATED WEALTH STRATEGIES</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 text-[11px] font-normal">Institutional-Paper • Personalized Execution</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-tight leading-[1.12] text-white">
              Tailored Investment Plans for{' '}
              <span className="bg-gradient-to-r from-[#00E599] via-emerald-300 to-teal-400 bg-clip-text text-transparent block mt-1">
                Every Stage of Growth.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base xl:text-lg max-w-2xl leading-relaxed font-normal">
              Discover institutional-grade investment portfolios, automated algorithmic rebalancing, and dividend-focused strategies curated by seasoned Wall Street veterans.
            </p>

            {/* Stats Row (4 Metric Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {HERO_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#0b1b30]/80 border border-slate-700/60 rounded-xl p-3.5 backdrop-blur-md"
                >
                  <div className="text-xl sm:text-2xl 2xl:text-3xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-400 uppercase mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Risk Profile Widget (Spans 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#0a1e36]/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-5">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00E599]/15 border border-[#00E599]/30 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#00E599]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">Your Risk Profile</h3>
                    <span className="text-xs text-slate-400">Assessed 12 days ago</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-[#00E599] border border-emerald-500/30">
                  Moderate Risk
                </span>
              </div>

              {/* Progress Model Compatibility */}
              <div className="space-y-2 bg-[#061426] p-4 rounded-2xl border border-slate-800">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-400">Model Compatibility</span>
                  <span className="text-[#00E599]">Balanced Growth (84%)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-[#00E599] rounded-full w-[84%]" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Based on your time horizon of 15+ years and moderate volatility tolerance, hybrid dividend and equity plans suit your portfolio trajectory best.
              </p>

              <button
                type="button"
                className="w-full py-3.5 px-4 rounded-2xl bg-[#00E599] hover:bg-[#00c885] text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.01]"
              >
                <span>Retake Risk Questionnaire</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </motion.div>

        </div>

        {/* Live Markets Ticker Strip */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2 font-bold text-[#00E599] uppercase tracking-wider text-[11px]">
            <Activity className="w-4 h-4" />
            <span>LIVE MARKETS</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 overflow-x-auto font-mono text-xs">
            {LIVE_MARKETS_TICKER.map((m, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-slate-400">{m.symbol}</span>
                <span className="font-bold text-white">{m.value}</span>
                {m.change && (
                  <span className={`font-semibold ${m.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {m.change}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
