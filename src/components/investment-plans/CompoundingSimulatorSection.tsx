import React, { useState } from 'react';
import { Calculator, ArrowRight, Info } from 'lucide-react';

export const CompoundingSimulatorSection: React.FC = () => {
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500);
  const [horizonYears, setHorizonYears] = useState<number>(15);
  const [riskStrategy, setRiskStrategy] = useState<'conservative' | 'balanced' | 'aggressive'>('balanced');

  // Calculation rates
  const rateMap = {
    conservative: 0.045,
    balanced: 0.065,
    aggressive: 0.105,
  };

  const annualRate = rateMap[riskStrategy];

  // Calculate Compounding
  const months = horizonYears * 12;
  const monthlyRate = annualRate / 12;
  
  // Future value of a series of monthly deposits
  const totalFutureValue = Math.round(
    monthlyContribution * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))
  );

  const totalPrincipal = monthlyContribution * months;
  const estimatedEarnings = Math.max(0, totalFutureValue - totalPrincipal);

  return (
    <section className="w-full py-12 bg-white text-white border-b border-slate-200">
      <div className="w-full max-w-[1700px] 2xl:max-w-[2200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        <div className="bg-gradient-to-br from-[#071322] via-[#0A1A2E] to-[#050E1A] rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl space-y-8">
          
          {/* Header */}
          <div className="max-w-3xl space-y-2">
            <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
              <Calculator className="w-4 h-4 text-emerald-400" />
              INTERACTIVE PROJECTION TOOL
            </span>
            <h2 className="text-2xl sm:text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Simulate Your Long-Term Compounding Power.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Adjust monthly commitments and target risk thresholds to visualize exponential asset accumulation powered by InvestWise automated rebalancing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Control Panel (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Monthly Contribution */}
              <div className="space-y-2 bg-[#0a1b2f] p-4 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-400 uppercase">MONTHLY CONTRIBUTION</span>
                  <span className="text-xl font-extrabold text-[#00E599]">${monthlyContribution}/mo</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="3000"
                  step="50"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                  className="w-full accent-[#00E599] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono pt-1">
                  <button onClick={() => setMonthlyContribution(100)} className="hover:text-white">$100</button>
                  <button onClick={() => setMonthlyContribution(500)} className="hover:text-white">$500</button>
                  <button onClick={() => setMonthlyContribution(1000)} className="hover:text-white">$1,000</button>
                  <button onClick={() => setMonthlyContribution(2500)} className="hover:text-white">$2,500</button>
                </div>
              </div>

              {/* Horizon Years */}
              <div className="space-y-2 bg-[#0a1b2f] p-4 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-400 uppercase">INVESTMENT HORIZON</span>
                  <span className="text-lg font-extrabold text-white">{horizonYears} Years</span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {[5, 15, 25].map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setHorizonYears(yr)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all ${
                        horizonYears === yr
                          ? 'bg-slate-700 text-white border border-slate-500'
                          : 'bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      {yr} Yrs
                    </button>
                  ))}
                </div>
              </div>

              {/* Strategy Risk Level */}
              <div className="space-y-2 bg-[#0a1b2f] p-4 rounded-2xl border border-slate-800">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">STRATEGY RISK LEVEL</span>
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <button
                    onClick={() => setRiskStrategy('conservative')}
                    className={`p-2.5 rounded-xl text-xs font-bold text-center transition-all ${
                      riskStrategy === 'conservative'
                        ? 'bg-[#00E599] text-slate-950 font-extrabold shadow'
                        : 'bg-slate-900 text-slate-300 hover:text-white'
                    }`}
                  >
                    Conservative <span className="block text-[10px] font-normal opacity-80">4.5% p.a.</span>
                  </button>
                  <button
                    onClick={() => setRiskStrategy('balanced')}
                    className={`p-2.5 rounded-xl text-xs font-bold text-center transition-all ${
                      riskStrategy === 'balanced'
                        ? 'bg-[#00E599] text-slate-950 font-extrabold shadow'
                        : 'bg-slate-900 text-slate-300 hover:text-white'
                    }`}
                  >
                    Balanced <span className="block text-[10px] font-normal opacity-80">6.5% p.a.</span>
                  </button>
                  <button
                    onClick={() => setRiskStrategy('aggressive')}
                    className={`p-2.5 rounded-xl text-xs font-bold text-center transition-all ${
                      riskStrategy === 'aggressive'
                        ? 'bg-[#00E599] text-slate-950 font-extrabold shadow'
                        : 'bg-slate-900 text-slate-300 hover:text-white'
                    }`}
                  >
                    Aggressive <span className="block text-[10px] font-normal opacity-80">10.5% p.a.</span>
                  </button>
                </div>
              </div>

              {/* Summary Breakdown Cards */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-[#0a1b2f] p-3.5 rounded-2xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">TOTAL CONTRIBUTED</span>
                  <span className="text-lg font-extrabold text-white">${totalPrincipal.toLocaleString()}</span>
                </div>
                <div className="bg-[#0a1b2f] p-3.5 rounded-2xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">ESTIMATED EARNINGS</span>
                  <span className="text-lg font-extrabold text-[#00E599]">${estimatedEarnings.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full py-3.5 rounded-2xl bg-[#00E599] hover:bg-[#00c885] text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.01]"
              >
                <span>Lock In This Investment Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

            {/* Right Chart Visualization Panel (7 cols) */}
            <div className="lg:col-span-7 bg-[#061426] p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 flex flex-col justify-between min-h-[420px]">
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">PROJECTED PORTFOLIO TOTAL</span>
                  <div className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
                    ${totalFutureValue.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00E599]" /> Growth
                  </span>
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Principal
                  </span>
                </div>
              </div>

              {/* Compounding Chart Area SVG */}
              <div className="relative h-64 w-full pt-4">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200" fill="none">
                  <defs>
                    <linearGradient id="compoundingGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00E599" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#00E599" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="principalGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="0" y1="40" x2="500" y2="40" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="100" x2="500" y2="100" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="160" x2="500" y2="160" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Principal Base Area Line */}
                  <path
                    d="M 0 170 Q 250 140, 500 120 L 500 200 L 0 200 Z"
                    fill="url(#principalGrad)"
                  />
                  <path
                    d="M 0 170 Q 250 140, 500 120"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />

                  {/* Growth Compounding Exponential Curve */}
                  <path
                    d="M 0 170 Q 250 130, 500 30 L 500 200 L 0 200 Z"
                    fill="url(#compoundingGrad)"
                  />
                  <path
                    d="M 0 170 Q 250 130, 500 30"
                    stroke="#00E599"
                    strokeWidth="4.5"
                  />

                  {/* End Peak Marker Dot */}
                  <circle cx="500" cy="30" r="6" fill="#00E599" stroke="#ffffff" strokeWidth="2.5" />
                </svg>

                {/* X Axis Labels */}
                <div className="flex justify-between text-xs text-slate-400 font-mono pt-2">
                  <span>Year 0</span>
                  <span>Year {Math.round(horizonYears * 0.33)}</span>
                  <span>Year {Math.round(horizonYears * 0.66)}</span>
                  <span>Year {horizonYears}</span>
                </div>
              </div>

              {/* Bottom Notice */}
              <div className="p-3 bg-[#0a1d34] rounded-2xl border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                <Info className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="leading-normal">
                  Calculated using monthly compounding assumptions, annualized dividend reinvestments, and net of fee threshold yields. Past benchmark metrics do not guarantee future market returns.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
