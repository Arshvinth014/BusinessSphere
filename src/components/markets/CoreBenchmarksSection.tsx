import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2 } from 'lucide-react';
import { CORE_BENCHMARKS } from '../../mock/marketsData';

export const CoreBenchmarksSection: React.FC = () => {
  return (
    <section className="w-full py-10 bg-white border-b border-slate-100">
      <div className="w-full max-w-[1700px] 2xl:max-w-[2400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        {/* Outer Dark Container Box */}
        <div className="bg-[#091728] p-6 sm:p-8 2xl:p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm sm:text-base 2xl:text-lg mb-1">
                <div className="p-1.5 rounded bg-emerald-500/15">
                  <BarChart2 className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#00E599]" />
                </div>
                <h2 className="text-xl sm:text-3xl 2xl:text-4xl 3xl:text-5xl font-extrabold text-white">Core Market Benchmarks</h2>
              </div>
              <p className="text-xs sm:text-sm 2xl:text-base text-slate-300">
                Live consolidated pricing & 52-week statistical envelopes.
              </p>
            </div>

            <div className="flex items-center gap-6 text-xs sm:text-sm 2xl:text-base font-semibold">
              <span className="flex items-center gap-2 text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00E599]" /> Up Trend
              </span>
              <span className="flex items-center gap-2 text-rose-400">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Down Trend
              </span>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_BENCHMARKS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#050f1a] p-6 2xl:p-8 rounded-2xl border border-slate-800 space-y-5 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs sm:text-sm 2xl:text-base font-mono uppercase font-bold text-slate-400 block">{item.name}</span>
                      <h3 className="text-lg sm:text-xl 2xl:text-2xl font-extrabold text-white">{item.symbol}</h3>
                    </div>
                    <span
                      className={`px-3 py-1 rounded text-xs sm:text-sm 2xl:text-base font-bold ${
                        item.isPositive
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                          : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                      }`}
                    >
                      {item.changePercent}
                    </span>
                  </div>

                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="text-2xl sm:text-3xl 2xl:text-4xl 3xl:text-5xl font-extrabold text-white">{item.price}</span>
                    <span className={`text-xs sm:text-sm 2xl:text-base font-bold ${item.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {item.changePts}
                    </span>
                  </div>

                  {/* Sparkline Curve Graphic */}
                  <div className="h-20 w-full pt-3">
                    <svg className="w-full h-full" viewBox="0 0 200 60" fill="none">
                      <path
                        d={
                          item.isPositive
                            ? 'M 0 50 Q 50 40, 100 25 T 200 10'
                            : 'M 0 15 Q 50 25, 100 35 T 200 50'
                        }
                        stroke={item.isPositive ? '#00E599' : '#f43f5e'}
                        strokeWidth="3.5"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>

                {/* 52-Week Range Bar */}
                <div className="space-y-1.5 pt-3 border-t border-slate-900 text-xs sm:text-sm 2xl:text-base text-slate-300 font-mono">
                  <div className="flex justify-between">
                    <span>52W: {item.low52w}</span>
                    <span>{item.high52w}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.isPositive ? 'bg-[#00E599]' : 'bg-rose-500'}`}
                      style={{ width: `${item.currentPercent52w}%` }}
                    />
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

          {/* Bottom Feed Notice Strip */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs sm:text-sm 2xl:text-base text-slate-300 font-mono">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00E599] animate-pulse" />
              <span>LIVE MARKETS</span>
              <span>•</span>
              <span>NYSE & NASDAQ Open • 10:24 AM EST</span>
            </div>
            <span>Accredited Feed</span>
          </div>

        </div>

      </div>
    </section>
  );
};
