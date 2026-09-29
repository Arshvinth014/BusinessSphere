import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CtaBannerSection: React.FC = () => {
  return (
    <section className="w-full">
      <div className="w-full">
        
        <div className="bg-[#0A182B] rounded-3xl p-8 sm:p-12 2xl:p-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs sm:text-sm 2xl:text-base font-mono font-bold text-emerald-400 uppercase tracking-widest block">
              YOUR FINANCIAL FUTURE STARTS HERE
            </span>
            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-extrabold text-white tracking-tight">
              Plan today. Grow tomorrow.
            </h2>
            <p className="text-sm sm:text-base 2xl:text-xl text-slate-300 font-normal max-w-2xl">
              Create a personalized plan and take the next step toward your goals.
            </p>
          </div>

          <button
            type="button"
            className="px-8 py-4 rounded-2xl bg-[#00E599] hover:bg-[#00c885] text-slate-950 font-bold text-base sm:text-lg 2xl:text-xl flex items-center gap-2.5 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] flex-shrink-0"
          >
            <span>Create My Plan</span>
            <ArrowRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
};
