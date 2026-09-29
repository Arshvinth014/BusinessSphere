import React from 'react';
import { ChevronRight } from 'lucide-react';
import { INVESTMENT_PLANS } from '../../mock/mockData';

export const PopularPlansSection: React.FC = () => {
  return (
    <section id="plans" className="w-full py-8 sm:py-10 bg-[#f0f4f8] text-slate-900 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
      <div className="w-full space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-slate-900">Popular Investment Plans</h2>
            <p className="text-base sm:text-lg 2xl:text-xl text-slate-600 mt-1">
              Choose from our flexible plans designed for different goals and risk levels.
            </p>
          </div>

          <a
            href="#all-plans"
            className="text-base sm:text-lg 2xl:text-xl font-bold text-emerald-600 hover:underline flex items-center gap-0.5"
          >
            View all plans <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INVESTMENT_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm flex flex-col justify-between group hover:shadow-lg transition-all"
            >
              <div>
                {/* Image */}
                <div className="h-48 sm:h-52 2xl:h-60 overflow-hidden relative">
                  <img
                    src={plan.imageUrl}
                    alt={plan.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Body */}
                <div className="p-5 2xl:p-6 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl 2xl:text-2xl font-extrabold text-slate-900">{plan.title}</h3>
                    <span className={`px-2.5 py-1 rounded text-xs sm:text-sm 2xl:text-base font-bold border ${plan.riskColor}`}>
                      {plan.riskLevel}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base 2xl:text-lg text-slate-600 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="pt-3 space-y-1.5 text-sm sm:text-base 2xl:text-lg border-t border-slate-100">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Expected Return</span>
                      <span className="font-bold text-slate-800">{plan.expectedReturn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Min. Investment</span>
                      <span className="font-bold text-slate-800">{plan.minInvestment}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Emerald Button */}
              <div className="p-5 2xl:p-6 pt-0">
                <button
                  type="button"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base 2xl:text-lg transition-all shadow"
                >
                  View Plan
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
