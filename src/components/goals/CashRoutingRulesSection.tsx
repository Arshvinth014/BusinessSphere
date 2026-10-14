import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GitBranch,
  Coins,
  GitFork,
  Repeat,
  CheckCircle2,
} from 'lucide-react';
import { CASH_ROUTING_PROTOCOLS } from '../../mock/goalsData';
import type { CashRoutingProtocol } from '../../types';

export const CashRoutingRulesSection: React.FC = () => {
  const [activeRules, setActiveRules] = useState<Record<string, boolean>>({
    'spare-change': true,
    'paycheck-windfall': true,
    'dynamic-drip': true,
  });

  const toggleRule = (id: string) => {
    setActiveRules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getProtocolIcon = (name: string) => {
    switch (name) {
      case 'Coins':
        return <Coins className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#00E599]" />;
      case 'GitFork':
        return <GitFork className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#00E599]" />;
      case 'Repeat':
        return <Repeat className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#00E599]" />;
      default:
        return <Coins className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#00E599]" />;
    }
  };

  return (
    <section className="w-full bg-white py-8 sm:py-12 border-b border-slate-100">
      <div className="w-full max-w-[1700px] 2xl:max-w-[2400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        {/* Outer Dark Container Box */}
        <div className="bg-[#091728] border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-8">
          {/* Section Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-emerald-400 stroke-[2.5]" />
              <span className="font-mono text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-widest">
                // EXECUTION PROTOCOLS
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-white tracking-tight">
                Automated Cash Routing Rules
              </h2>
              <p className="text-xs sm:text-sm 2xl:text-base text-slate-300 max-w-2xl leading-relaxed">
                Programmatic algorithmic rules sweep fractional capital, paycheck windfalls, and dividends without requiring manual human reallocations.
              </p>
            </div>
          </div>

          {/* 3 Protocol Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASH_ROUTING_PROTOCOLS.map((protocol: CashRoutingProtocol, index: number) => {
              const isRunning = activeRules[protocol.id] ?? true;

              return (
                <motion.div
                  key={protocol.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="bg-[#050f1a] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:border-slate-700 transition-all hover:shadow-2xl"
                >
                <div className="space-y-4">
                  {/* Top Row: Icon + Active Badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      {getProtocolIcon(protocol.iconName)}
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-[10px] 2xl:text-xs font-mono font-bold text-[#00E599]">
                      <span className={`w-1.5 h-1.5 rounded-full ${isRunning ? 'bg-[#00E599] animate-pulse' : 'bg-slate-500'}`} />
                      <span>{isRunning ? protocol.statusText : 'PAUSED'}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-base sm:text-lg 2xl:text-xl font-bold text-white tracking-tight">
                      {protocol.title}
                    </h3>
                    <p className="text-xs 2xl:text-sm text-slate-400 mt-1.5 leading-relaxed">
                      {protocol.description}
                    </p>
                  </div>

                  {/* Lockstep directory tag if spare-change */}
                  {protocol.id === 'spare-change' && (
                    <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-semibold">
                      LOCKSTEP DIRECTORY
                    </div>
                  )}

                  {/* Metric Block */}
                  <div className="bg-[#050f1a] p-4 rounded-xl border border-slate-800/90 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] 2xl:text-xs font-mono font-bold uppercase text-slate-400 block">
                        {protocol.metricLabel}
                      </span>
                      <span className="text-2xl 2xl:text-3xl font-extrabold font-mono text-[#00E599]">
                        {protocol.metricValue}
                      </span>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400/60" />
                  </div>
                </div>

                {/* Footer Row: Target info + Toggle link */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs 2xl:text-sm">
                  <span className="text-slate-400 font-mono font-medium">
                    {protocol.targetLabel}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleRule(protocol.id)}
                    className="text-xs font-mono font-semibold text-slate-400 hover:text-white transition-colors underline underline-offset-4"
                  >
                    {isRunning ? 'Pause Rule' : 'Resume Rule'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
};
