import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { SECTOR_PERFORMANCES } from '../../mock/marketsData';

export const SectorPerformanceSection: React.FC = () => {
  const [activeMatrixTab, setActiveMatrixTab] = useState<'perf' | 'weight' | 'flows'>('perf');

  return (
    <section className="w-full py-10 bg-white border-b border-slate-100">
      <div className="w-full max-w-[1700px] 2xl:max-w-[2400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 space-y-6">
        
        {/* Outer Dark Container */}
        <div className="bg-[#091728] p-6 sm:p-8 2xl:p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-xs sm:text-sm 2xl:text-base font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                CAPITAL FLOW MATRIX
              </span>
              <h2 className="text-xl sm:text-3xl 2xl:text-4xl 3xl:text-5xl font-extrabold text-white tracking-tight">
                S&P 500 Sector Performance & Leaders
              </h2>
            </div>

            {/* Right Tabs */}
            <div className="bg-[#040c16] p-1.5 rounded-xl border border-slate-800 flex items-center gap-1.5 text-xs sm:text-sm 2xl:text-base">
              <button
                onClick={() => setActiveMatrixTab('perf')}
                className={`px-4 py-2 rounded-lg font-bold transition-all ${
                  activeMatrixTab === 'perf'
                    ? 'bg-[#00E599] text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Sector Performance
              </button>
              <button
                onClick={() => setActiveMatrixTab('weight')}
                className={`px-4 py-2 rounded-lg font-bold transition-all ${
                  activeMatrixTab === 'weight'
                    ? 'bg-[#00E599] text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Market Cap Weight
              </button>
              <button
                onClick={() => setActiveMatrixTab('flows')}
                className={`px-4 py-2 rounded-lg font-bold transition-all ${
                  activeMatrixTab === 'flows'
                    ? 'bg-[#00E599] text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                ETF Net Flows
              </button>
            </div>
          </div>

          {/* 7 Sector Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTOR_PERFORMANCES.map((sec, idx) => (
              <motion.div
                key={sec.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-6 2xl:p-8 rounded-2xl border transition-all flex flex-col justify-between space-y-5 ${
                  sec.isPositive
                    ? 'bg-gradient-to-br from-[#061824] to-[#081a29] border-emerald-500/25 hover:border-emerald-500/50'
                    : 'bg-gradient-to-br from-[#1c0a12] to-[#170810] border-rose-500/25 hover:border-rose-500/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm 2xl:text-base font-mono font-bold text-slate-300 tracking-wider">
                      {sec.sectorName}
                    </span>
                    <span
                      className={`text-sm sm:text-base 2xl:text-lg font-extrabold flex items-center ${
                        sec.isPositive ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {sec.isPositive ? <ArrowUpRight className="w-4 h-4 2xl:w-5 2xl:h-5" /> : <ArrowDownRight className="w-4 h-4 2xl:w-5 2xl:h-5" />}
                      {sec.changePercent}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl font-extrabold text-white mt-2">
                    {sec.labelStatus}
                  </h3>
                </div>

                {/* Stock Chips */}
                <div className="flex flex-wrap gap-2.5 pt-3 border-t border-slate-800/80 text-xs sm:text-sm 2xl:text-base">
                  {sec.stocks.map((st, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 rounded-lg font-mono font-bold border ${
                        st.isPositive
                          ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                          : 'bg-rose-500/15 text-rose-300 border-rose-500/30'
                      }`}
                    >
                      {st.symbol} {st.change}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
