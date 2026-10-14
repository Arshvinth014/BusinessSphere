import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronDown,
  ShieldCheck,
  BarChart3,
  Sparkles,
} from 'lucide-react';
import {
  SIMULATION_GOAL_OPTIONS,
  MACRO_RETURN_SCENARIOS,
} from '../../mock/goalsData';

export const InteractiveGlidepathSection: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState<string>(SIMULATION_GOAL_OPTIONS[0]);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(850);
  const [selectedMacro, setSelectedMacro] = useState<string>('historic');
  const [isDeRiskingActive, setIsDeRiskingActive] = useState<boolean>(true);

  // Dynamic calculations based on slider and macro scenario
  const scenarioMultiplier =
    selectedMacro === 'bearish' ? 0.9 : selectedMacro === 'bull' ? 1.15 : 1.0;
  const baseProjected = Math.round((68400 + monthlyContribution * 36 * 1.15) * scenarioMultiplier);
  const targetAmount = 120000;
  const surplus = baseProjected - targetAmount;
  const surplusPercent = ((surplus / targetAmount) * 100).toFixed(1);

  return (
    <section className="w-full bg-white py-8 sm:py-12 border-b border-slate-100">
      <div className="w-full max-w-[1700px] 2xl:max-w-[2400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Simulation Control Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 bg-[#091728] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-6">
              {/* Target Goal Dropdown */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  SIMULATED TARGET GOAL
                </label>
                <div className="relative">
                  <select
                    value={selectedGoal}
                    onChange={(e) => setSelectedGoal(e.target.value)}
                    className="w-full bg-[#040c16] border border-slate-700/80 rounded-xl py-3 px-4 text-white text-xs sm:text-sm 2xl:text-base font-semibold appearance-none focus:outline-none focus:border-[#00E599] transition-colors pr-10"
                  >
                    {SIMULATION_GOAL_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#091728] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                </div>
              </div>

              {/* Monthly Contribution Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-mono font-bold text-slate-400 uppercase tracking-wider">
                    MONTHLY CONTRIBUTION
                  </label>
                  <span className="text-lg sm:text-xl font-extrabold font-mono text-[#00E599]">
                    ${monthlyContribution.toLocaleString()}
                  </span>
                </div>

                <div className="space-y-1">
                  <input
                    type="range"
                    min="450"
                    max="3000"
                    step="50"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00E599]"
                  />
                  <div className="flex justify-between text-[11px] sm:text-xs font-mono text-slate-500 font-semibold pt-1">
                    <span>$450 / mo</span>
                    <span>$1,700 / mo</span>
                    <span>$3,000 / mo</span>
                  </div>
                </div>
              </div>

              {/* Macroeconomic Return Assumptions */}
              <div className="space-y-2.5">
                <label className="text-xs sm:text-sm font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  MACROECONOMIC RETURN ASSUMPTIONS
                </label>

                <div className="grid grid-cols-3 gap-2.5">
                  {MACRO_RETURN_SCENARIOS.map((scenario) => {
                    const isSelected = selectedMacro === scenario.id;
                    return (
                      <button
                        key={scenario.id}
                        type="button"
                        onClick={() => setSelectedMacro(scenario.id)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          isSelected
                            ? 'bg-[#00E599]/10 border-[#00E599] shadow-md shadow-emerald-500/10'
                            : 'bg-[#040c16] border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <span className="block text-[11px] sm:text-xs font-semibold text-slate-300">
                          {scenario.label}
                        </span>
                        <span
                          className={`block text-xs sm:text-sm font-extrabold font-mono mt-0.5 ${
                            isSelected ? 'text-[#00E599]' : 'text-slate-400'
                          }`}
                        >
                          {scenario.cagr}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Automated Horizon De-risking Toggle */}
              <div className="pt-2 flex items-center justify-between gap-4 border-t border-slate-800/80">
                <div className="space-y-0.5">
                  <span className="text-xs sm:text-sm 2xl:text-base font-bold text-white block">
                    Automated Horizon De-risking
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-400 block leading-tight">
                    Converts equities to T-bills 18 months prior to date
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsDeRiskingActive(!isDeRiskingActive)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                    isDeRiskingActive ? 'bg-[#00E599]' : 'bg-slate-700'
                  }`}
                  aria-label="Toggle De-risking"
                >
                  <div
                    className={`bg-slate-950 w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                      isDeRiskingActive ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Bottom Projected & Surplus Output */}
            <div className="pt-6 mt-6 border-t border-slate-800 flex items-end justify-between">
              <div>
                <span className="text-[10px] 2xl:text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  PROJECTED VALUE (P50)
                </span>
                <span className="text-3xl sm:text-4xl 2xl:text-5xl font-extrabold font-mono text-[#00E599]">
                  ${baseProjected.toLocaleString()}
                </span>
              </div>

              <div className="text-right">
                <span className="text-[10px] 2xl:text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  SURPLUS BUFFER
                </span>
                <span className="text-sm sm:text-base 2xl:text-lg font-bold font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                  {surplus >= 0 ? `+$${surplus.toLocaleString()}` : `-$${Math.abs(surplus).toLocaleString()}`}{' '}
                  ({surplusPercent}%)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right SVG Glidepath & Monte Carlo Graph Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7 bg-[#050f1a] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
          >
            {/* Top Legend and Simulation Count */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800/80 text-xs 2xl:text-sm font-mono">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#00E599]" />
                  <span className="text-slate-300">Median Forecast (P50)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-sm bg-blue-500/40" />
                  <span className="text-slate-300">Conservative Bounds (P95)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-0.5 border-t-2 border-dashed border-sky-400" />
                  <span className="text-slate-300">Goal Target ($120k)</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-[11px] 2xl:text-xs font-bold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#00E599] animate-ping" />
                <span>10,000 Simulations</span>
              </div>
            </div>

            {/* High-Resolution SVG Glidepath Simulation Chart */}
            <div className="w-full py-6 relative">
              <svg
                viewBox="0 0 700 280"
                className="w-full h-auto overflow-visible select-none"
              >
                <defs>
                  {/* Confidence Cone Gradient */}
                  <linearGradient id="p95Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00E599" stopOpacity="0.15" />
                    <stop offset="50%" stopColor="#0284c7" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.08" />
                  </linearGradient>

                  {/* Median Line Gradient */}
                  <linearGradient id="medianGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00E599" />
                    <stop offset="70%" stopColor="#2dd4bf" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>

                {/* Horizontal Grid lines with Dollar Labels */}
                <g className="text-[11px] font-mono fill-slate-500">
                  {/* $160k line */}
                  <line x1="50" y1="30" x2="680" y2="30" stroke="#1e293b" strokeDasharray="3 3" />
                  <text x="15" y="34">$160k</text>

                  {/* $120k target line */}
                  <line x1="50" y1="90" x2="680" y2="90" stroke="#0369a1" strokeDasharray="5 5" strokeWidth="1.5" />
                  <text x="15" y="94" className="fill-sky-400 font-bold">$120k</text>

                  {/* $80k line */}
                  <line x1="50" y1="160" x2="680" y2="160" stroke="#1e293b" strokeDasharray="3 3" />
                  <text x="15" y="164">$80k</text>

                  {/* $40k line */}
                  <line x1="50" y1="230" x2="680" y2="230" stroke="#1e293b" strokeDasharray="3 3" />
                  <text x="15" y="234">$40k</text>
                </g>

                {/* Shaded P95 Confidence Cone Area */}
                {/* 2024=60, 2025=200, 2026=350, 2027=500, 2028=660 */}
                <polygon
                  points="
                    80,185
                    210,140
                    360,95
                    510,45
                    660,15
                    660,170
                    510,145
                    360,165
                    210,180
                    80,185
                  "
                  fill="url(#p95Gradient)"
                />

                {/* Upper and Lower P95 Bounds Boundary lines */}
                <path
                  d="M 80 185 Q 360 85 660 15"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.2"
                  strokeOpacity="0.4"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 80 185 Q 360 165 660 170"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.2"
                  strokeOpacity="0.3"
                  strokeDasharray="4 4"
                />

                {/* Target $120k horizontal line indicator */}
                <circle cx="510" cy="90" r="4" fill="#38bdf8" />
                <rect x="520" y="78" width="125" height="22" rx="4" fill="#041b33" stroke="#0284c7" strokeWidth="1" />
                <text x="528" y="93" fill="#38bdf8" className="text-[10px] font-mono font-bold">$120,000 Target</text>

                {/* P50 Median Smooth Rising Curve */}
                <path
                  d="M 80 185 C 220 180, 350 120, 510 90 S 600 70, 660 62"
                  fill="none"
                  stroke="url(#medianGlow)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Today Marker Dot (2024) */}
                <g transform="translate(80, 185)">
                  <circle r="6" fill="#00E599" />
                  <circle r="12" fill="#00E599" fillOpacity="0.25" className="animate-ping" />
                  <rect x="-45" y="-38" width="90" height="22" rx="6" fill="#091a2e" stroke="#00E599" strokeWidth="1" />
                  <text x="0" y="-23" textAnchor="middle" fill="#00E599" className="text-[10px] font-mono font-bold">
                    TODAY ($68.4k)
                  </text>
                </g>

                {/* Target Achieved Point at 2027 */}
                <circle cx="510" cy="90" r="6" fill="#00E599" stroke="#ffffff" strokeWidth="2" />

                {/* X-Axis Years Labels */}
                <g className="text-[11px] font-mono fill-slate-400">
                  <text x="80" y="265" textAnchor="middle">2024 (Now)</text>
                  <text x="210" y="265" textAnchor="middle">2025</text>
                  <text x="360" y="265" textAnchor="middle">2026</text>
                  <text x="510" y="265" textAnchor="middle" className="fill-[#00E599] font-bold">
                    P50 2027 (Achieved)
                  </text>
                  <text x="660" y="265" textAnchor="middle">2028</text>
                </g>
              </svg>
            </div>

            {/* Bottom 3 Risk / Execution Metric Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 border-t border-slate-800/80">
              <div className="bg-[#091728] p-3 rounded-xl border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] 2xl:text-xs font-mono font-bold uppercase text-slate-400 block">
                    MAX DRAWDOWN GATE
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold font-mono text-slate-200 block">
                    -4.2% Max Loss
                  </span>
                </div>
              </div>

              <div className="bg-[#091728] p-3 rounded-xl border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 flex-shrink-0">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] 2xl:text-xs font-mono font-bold uppercase text-slate-400 block">
                    SHARPE VOLATILITY
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold font-mono text-slate-200 block">
                    7.8% Sharpe 1.42
                  </span>
                </div>
              </div>

              <div className="bg-[#091728] p-3 rounded-xl border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-[#00E599] flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] 2xl:text-xs font-mono font-bold uppercase text-slate-400 block">
                    TAX-DRAG ALPHA
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold font-mono text-[#00E599] block">
                    +$640 / yr Est.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
