import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

export const DiagnosticAdvisoryCtaSection: React.FC = () => {
  return (
    <section className="w-full py-12 bg-white text-white border-b border-slate-200">
      <div className="w-full max-w-[1700px] 2xl:max-w-[2200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        <div className="bg-gradient-to-r from-[#09172A] via-[#0D1F38] to-[#0A1A2E] rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-emerald-400" />
              PERSONALIZED ADVISORY DIAGNOSTIC
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Not sure which plan matches your goals?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Complete our intuitive 2-minute diagnostic. We analyze your timeline, liquidity demands, tax jurisdiction, and loss appetite to engineer your custom allocation.
            </p>
          </div>

          {/* 3 Steps Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#071322] p-5 rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-[#00E599] text-slate-950 font-extrabold text-base flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white">Define Target Horizon</h3>
                <p className="text-xs text-slate-400 leading-normal">
                  Structure liquidity for 25-year wealth engine.
                </p>
              </div>
            </div>

            <div className="bg-[#071322] p-5 rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-[#00E599] text-slate-950 font-extrabold text-base flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white">Gauge Volatility</h3>
                <p className="text-xs text-slate-400 leading-normal">
                  Rebalance your comfort during market swings.
                </p>
              </div>
            </div>

            <div className="bg-[#071322] p-5 rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-[#00E599] text-slate-950 font-extrabold text-base flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white">Instant Allocation</h3>
                <p className="text-xs text-slate-400 leading-normal">
                  Receive benchmark direct indexed portfolio.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <button
              type="button"
              className="px-6 py-3.5 rounded-2xl bg-[#00E599] hover:bg-[#00c885] text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
            >
              <span>Take 2-Minute Risk Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-400 font-medium">
              Used by over 35,000+ certified self-directed investors
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
