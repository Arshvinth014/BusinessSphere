import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Check } from 'lucide-react';
import { PLAN_CATEGORIES, CURATED_PLANS } from '../../mock/investmentPlansData';

export const CuratedPlansSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section className="w-full py-12 bg-white text-slate-900 border-b border-slate-200">
      <div className="w-full max-w-[1700px] 2xl:max-w-[2200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 space-y-8">
        
        {/* Category Filter Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
          <div className="bg-[#0b1728] p-1.5 rounded-2xl flex items-center gap-1 border border-slate-800 shadow-md">
            {PLAN_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-white text-slate-900 shadow'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Section Container with light grey background box matching the reference image */}
        <div className="bg-[#f0f4f8] p-6 sm:p-10 rounded-3xl space-y-8 border border-slate-200/80 shadow-sm">
          
          {/* Header & Badges */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest block mb-1">
                PORTFOLIO LINEUP
              </span>
              <h2 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-slate-900 tracking-tight">
                Active Curated Investment Plans
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Institutional rebalancing, direct indexed allocations, and transparent compounding metrics.
              </p>
            </div>

            {/* Top Right Status Indicators */}
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-2xs">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> 24/7 Enabled
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" /> Auto-Rebalance
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> Zero Exit Load
              </span>
            </div>
          </div>

          {/* 4 Plan Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CURATED_PLANS.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header Image & Overlay Badges */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={plan.imageUrl}
                      alt={plan.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className={`px-2.5 py-1 rounded-md font-extrabold text-[10px] tracking-wider uppercase border backdrop-blur-md ${plan.riskBadgeClass}`}>
                        {plan.riskBadge}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-black/60 text-white font-medium text-[11px] backdrop-blur-md">
                        {plan.subtitleTag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-lg font-extrabold leading-snug">{plan.title}</h3>
                      <p className="text-[11px] text-slate-200 line-clamp-1">{plan.description}</p>
                    </div>
                  </div>

                  {/* Card Body Metrics */}
                  <div className="p-5 space-y-4">
                    
                    <div className="grid grid-cols-2 gap-2 text-xs border-b border-slate-100 pb-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">EXPECTED RETURN</span>
                        <span className="text-base font-extrabold text-emerald-600">{plan.expectedReturn}</span>
                        <span className="text-[10px] text-slate-400 block">p.a.</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">MIN. DEPOSIT</span>
                        <span className="text-base font-extrabold text-slate-900">{plan.minDeposit}</span>
                      </div>
                    </div>

                    {/* Asset Allocation Progress Bar */}
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-400 font-semibold">Asset Allocation</span>
                        <span className="font-bold text-slate-800">{plan.assetAllocationText}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden flex">
                        {plan.allocationBreakdown.map((item, i) => (
                          <div
                            key={i}
                            className={`h-full ${item.color}`}
                            style={{ width: `${item.percent}%` }}
                            title={`${item.label}: ${item.percent}%`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Features checklist */}
                    <ul className="space-y-2 text-xs text-slate-600 pt-1">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="p-5 pt-0 flex items-center gap-2">
                  <button
                    type="button"
                    className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow ${
                      plan.buttonVariant === 'emerald'
                        ? 'bg-[#00E599] hover:bg-[#00c885] text-slate-950 shadow-emerald-500/10'
                        : 'bg-[#0B1728] hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{plan.buttonLabel}</span>
                  </button>
                  <button
                    type="button"
                    className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                    title="Quick Preview"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
