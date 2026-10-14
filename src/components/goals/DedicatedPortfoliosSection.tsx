import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  ExternalLink,
  Settings,
  Rocket,
  Plus,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import {
  DEDICATED_GOAL_CARDS,
  GOALS_FILTER_TABS,
} from '../../mock/goalsData';
import type { DedicatedGoalCard } from '../../types';

export const DedicatedPortfoliosSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredGoals =
    activeTab === 'all'
      ? DEDICATED_GOAL_CARDS
      : DEDICATED_GOAL_CARDS.filter((goal) => goal.category === activeTab);

  const renderCircularGauge = (percent: number, isCompleted?: boolean) => {
    const radius = 22;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (circumference * percent) / 100;

    return (
      <div className="relative w-14 h-14 2xl:w-16 2xl:h-16 flex-shrink-0 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 52 52">
          {/* Background circle */}
          <circle
            cx="26"
            cy="26"
            r={radius}
            className="stroke-slate-700/60"
            strokeWidth="4"
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx="26"
            cy="26"
            r={radius}
            className="stroke-[#00E599] transition-all duration-700 ease-out"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          {isCompleted ? (
            <CheckCircle2 className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#00E599]" />
          ) : (
            <span className="text-xs 2xl:text-sm font-extrabold text-white font-mono">
              {percent}%
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-white py-8 sm:py-12 border-b border-slate-100">
      <div className="w-full max-w-[1700px] 2xl:max-w-[2400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        {/* Soft Grey/Ice Container surrounding Dedicated Portfolios */}
        <div className="w-full bg-[#eef3f8] rounded-3xl p-6 sm:p-8 xl:p-10 shadow-xl border border-slate-200">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-teal-600 stroke-[2.5]" />
              <span className="font-mono text-xs sm:text-sm 2xl:text-base font-bold text-teal-700 uppercase tracking-widest">
                // DEDICATED PORTFOLIO
              </span>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-200/90 p-1 rounded-xl">
              {GOALS_FILTER_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm 2xl:text-base font-semibold transition-all ${
                      isActive
                        ? 'bg-[#091728] text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4 Dedicated Goal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredGoals.map((card: DedicatedGoalCard, index: number) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="bg-[#091728] text-white rounded-2xl border border-slate-800 shadow-lg overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-2xl"
              >
                <div>
                  {/* Top Image or Header Block */}
                  {card.imageUrl ? (
                    <div className="relative h-36 sm:h-40 w-full overflow-hidden">
                      <img
                        src={card.imageUrl}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#091728] via-[#091728]/40 to-black/60" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono font-bold">
                        <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-slate-200 border border-slate-700/60 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
                          {card.badge}
                        </span>
                        <span className="px-2 py-1 rounded-md bg-black/75 backdrop-blur-md text-slate-300 border border-slate-700/60">
                          {card.targetBadge}
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Emergency Liquidity Vault style header without picture */
                    <div className="p-4 sm:p-5 pb-0">
                      <div className="flex items-center justify-between text-[11px] font-mono font-bold mb-4">
                        <span className="px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-200 border border-slate-700/70 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
                          {card.badge}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 text-[#00E599] border border-emerald-500/30">
                          {card.targetBadge}
                        </span>
                      </div>

                      {card.yieldApy && (
                        <div className="mb-2 bg-[#050e18] p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] 2xl:text-xs uppercase font-mono text-slate-400 block font-semibold">
                              CURRENT YIELD APY
                            </span>
                            <span className="text-xl 2xl:text-2xl font-extrabold text-[#00E599] font-mono">
                              {card.yieldApy}
                            </span>
                          </div>
                          <Clock className="w-5 h-5 text-[#00E599]" />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Body Content */}
                  <div className="p-4 sm:p-5 space-y-4">
                    <div>
                      <h3 className="text-base sm:text-lg 2xl:text-xl font-bold text-white tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs 2xl:text-sm text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Progress Gauge & Stats */}
                    <div className="flex items-center gap-4 bg-[#050f1b] p-3 rounded-xl border border-slate-800/90">
                      {renderCircularGauge(card.progressPercent, card.isCompleted)}
                      <div className="space-y-0.5">
                        <span className="text-[10px] 2xl:text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                          {card.isCompleted ? 'VAULT BALANCE' : 'FUNDED VS GOAL'}
                        </span>
                        <div className="text-lg 2xl:text-xl font-extrabold text-white font-mono leading-none">
                          {card.fundedAmount}
                        </div>
                        <span
                          className={`text-xs 2xl:text-sm block font-medium ${
                            card.isCompleted ? 'text-[#00E599] font-semibold' : 'text-slate-400'
                          }`}
                        >
                          {card.targetAmount}
                        </span>
                      </div>
                    </div>

                    {/* Protection Status if present */}
                    {card.protectionStatus && (
                      <div className="flex items-center justify-between text-xs 2xl:text-sm text-slate-400 font-medium">
                        <span>Protection Status:</span>
                        <span className="text-[#00E599] font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
                          {card.protectionStatus}
                        </span>
                      </div>
                    )}

                    {/* Asset Mix Pills */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-[10px] 2xl:text-xs font-mono">
                        <span className="text-slate-400 font-bold uppercase">Asset Mix:</span>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {card.assetMix.map((mix, mIdx) => (
                            <span
                              key={mIdx}
                              className={`px-2 py-0.5 rounded text-[10px] 2xl:text-xs font-bold font-mono ${
                                mix.label.includes('EQ') || mix.label.includes('T-BILLS')
                                  ? 'bg-emerald-500/15 text-[#00E599] border border-emerald-500/30'
                                  : mix.label.includes('FI') || mix.label.includes('MUNI') || mix.label.includes('SOV')
                                  ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                                  : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                              }`}
                            >
                              {mix.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer with Deposit info & Action Button */}
                <div className="p-4 sm:p-5 pt-3 border-t border-slate-800/80 bg-[#06101c] flex items-center justify-between gap-2">
                  <div className="text-[11px] 2xl:text-xs text-slate-400 leading-tight">
                    <span className="block text-[10px] uppercase font-mono text-slate-400">
                      {card.id === 'emergency-vault' ? 'Autorebalance Sweep:' : 'Autopilot Deposit:'}
                    </span>
                    <span className="font-bold text-white font-mono text-xs 2xl:text-sm">
                      {card.depositText.replace('Autopilot Deposit: ', '').replace('Autorebalance Sweep: ', '')}
                    </span>
                  </div>

                  {card.buttonVariant === 'green' ? (
                    <button
                      type="button"
                      className="px-3.5 py-2 rounded-xl bg-[#00E599] hover:bg-[#00c885] text-slate-950 font-bold text-xs 2xl:text-sm flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all hover:scale-105"
                    >
                      <span>{card.buttonLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>
                  ) : card.buttonLabel === 'Settings' ? (
                    <button
                      type="button"
                      className="px-3 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 text-white font-bold text-xs 2xl:text-sm flex items-center gap-1.5 transition-all"
                    >
                      <span>{card.buttonLabel}</span>
                      <Settings className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="px-3 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 text-white font-bold text-xs 2xl:text-sm flex items-center gap-1.5 transition-all"
                    >
                      <span>{card.buttonLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Milestone Banner */}
          <div className="mt-8 bg-[#091728] border border-slate-800 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-[#00E599]">
                <Rocket className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg 2xl:text-xl font-bold text-white tracking-tight">
                  Ready to fund another chapter?
                </h4>
                <p className="text-xs sm:text-sm 2xl:text-base text-slate-400 font-normal">
                  Set up dedicated glidepaths for Angel Syndicates, Luxury Sabbaticals, or Venture Pre-seed Capital.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="px-5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white font-mono text-xs sm:text-sm 2xl:text-base uppercase tracking-wider font-bold flex items-center gap-2 whitespace-nowrap shadow-md transition-all hover:border-slate-500"
            >
              <Plus className="w-4 h-4 text-[#00E599] stroke-[2.5]" />
              <span>Add Custom Milestone</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
