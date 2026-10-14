import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MACRO_EVENTS } from '../../mock/marketsData';

export const MacroEventsFedWatchSection: React.FC = () => {
  return (
    <section className="w-full py-10 bg-white">
      <div className="w-full max-w-[1700px] 2xl:max-w-[2400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Macroeconomic Catalysts (7 cols) */}
          <div className="lg:col-span-7 bg-[#091728] p-6 sm:p-8 2xl:p-10 rounded-3xl border border-slate-800 shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs sm:text-sm 2xl:text-base font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                    MACROECONOMIC CATALYSTS
                  </span>
                  <h2 className="text-xl sm:text-3xl 2xl:text-4xl font-extrabold text-white">
                    High-Impact Market Events This Week
                  </h2>
                </div>

                <a href="#calendar" className="text-xs sm:text-sm 2xl:text-base font-bold text-[#00E599] hover:underline flex items-center gap-1.5">
                  Full Calendar (31 events) <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Event Cards */}
              <div className="space-y-4 pt-2">
                {MACRO_EVENTS.map((ev) => (
                  <div
                    key={ev.id}
                    className="p-5 bg-[#050f1a] rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:border-slate-700 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      {/* Date Badge */}
                      <div className="px-4 py-2.5 rounded-xl bg-[#0a1c30] border border-slate-700 text-center font-mono flex-shrink-0">
                        <span className="text-xs font-bold text-slate-400 block">{ev.day}</span>
                        <span className="text-sm sm:text-base font-extrabold text-white">{ev.time}</span>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex items-center gap-3">
                          <h3 className="text-base sm:text-lg 2xl:text-xl font-extrabold text-white group-hover:text-[#00E599] transition-colors">
                            {ev.title}
                          </h3>
                          <span
                            className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${
                              ev.importance === 'CRITICAL'
                                ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                                : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                            }`}
                          >
                            {ev.importance}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm 2xl:text-base text-slate-300 leading-normal">{ev.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 text-xs sm:text-sm 2xl:text-base font-mono self-end sm:self-center flex-shrink-0">
                      <div className="text-right">
                        <span className="text-xs text-slate-400 block">Forecast</span>
                        <span className="font-bold text-white text-sm sm:text-base 2xl:text-lg">{ev.forecast}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-400 block">Prev</span>
                        <span className="font-bold text-slate-300 text-sm sm:text-base 2xl:text-lg">{ev.previous}</span>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: CME FedWatch Probability (5 cols) */}
          <div className="lg:col-span-5 bg-[#091728] p-6 sm:p-8 2xl:p-10 rounded-3xl border border-slate-800 shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs sm:text-sm 2xl:text-base font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                    CME FEDWATCH PROBABILITY
                  </span>
                  <h2 className="text-xl sm:text-3xl 2xl:text-4xl font-extrabold text-white">
                    Fed Funds Target Probability
                  </h2>
                </div>
                <span className="px-3 py-1.5 rounded-md bg-blue-500/15 text-blue-400 border border-blue-500/30 font-mono text-xs sm:text-sm font-bold">
                  Nov 2025 Meeting
                </span>
              </div>

              <p className="text-xs sm:text-sm 2xl:text-base text-slate-300">
                Market expectation based on 30-Day Fed Fund Futures pricing.
              </p>

              {/* Radial Progress Gauge Container */}
              <div className="bg-[#050f1a] p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-around gap-6">
                
                {/* Circular Donut Gauge */}
                <div className="relative w-36 h-36 2xl:w-44 2xl:h-44 flex items-center justify-center flex-shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#1e293b" strokeWidth="3.5" />
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke="#00E599"
                      strokeWidth="4"
                      strokeDasharray="77.4 88"
                      strokeDashoffset="0"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl sm:text-4xl 2xl:text-5xl font-extrabold text-white tracking-tight">88%</span>
                    <span className="text-xs 2xl:text-sm font-mono font-bold text-emerald-400 uppercase">25 BPS CUT</span>
                  </div>
                </div>

                {/* Outcome Breakdown List */}
                <div className="space-y-4 flex-1 w-full">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs sm:text-sm 2xl:text-base font-semibold">
                      <span className="text-slate-200">25bps Cut (4.50-4.75%)</span>
                      <span className="text-emerald-400 font-bold">88.2%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-[#00E599] rounded-full w-[88.2%]" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs sm:text-sm 2xl:text-base font-semibold">
                      <span className="text-slate-200">Pause at (4.75-5.00%)</span>
                      <span className="text-slate-400 font-bold">11.8%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full w-[11.8%]" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Info */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm 2xl:text-base text-slate-300 font-mono">
              <span>Last Updated: 10:24 AM EST</span>
              <span className="text-emerald-400 font-bold">Overall Consensus</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
