import React, { useState } from 'react';
import { Building2, ChevronRight, Check, Plus } from 'lucide-react';
import { POPULAR_COMPANIES } from '../../mock/mockData';

export const CompaniesSection: React.FC = () => {
  const [followingState, setFollowingState] = useState<{ [key: string]: boolean }>({});

  const toggleFollow = (id: string) => {
    setFollowingState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="companies" className="w-full py-16 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-2">
              <Building2 className="w-4 h-4 text-blue-600" />
              Popular Companies
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Explore top companies, industries and their latest updates
            </h2>
          </div>
          <a
            href="#all-companies"
            className="hidden sm:flex items-center gap-1.5 text-base sm:text-lg font-bold text-blue-600 hover:text-blue-800 transition-colors shrink-0"
          >
            View all <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {/* 6 Companies Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {POPULAR_COMPANIES.map((company) => {
            const isFollowing = followingState[company.id];

            return (
              <div
                key={company.id}
                className="bg-slate-50/70 p-6 rounded-3xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between space-y-4 group"
              >
                {/* Logo badge */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black shadow-md ${company.logoBg}`}>
                  {company.logoText}
                </div>

                <div className="space-y-1.5 w-full">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold">
                    {company.category}
                  </p>
                  <div className="pt-2 text-xs sm:text-sm font-semibold text-slate-700">
                    <span className="text-slate-900 font-extrabold">{company.marketCap}</span>{' '}
                    <span className="text-slate-500 font-medium">Market Cap</span>
                  </div>
                </div>

                {/* Follow Button */}
                <button
                  type="button"
                  onClick={() => toggleFollow(company.id)}
                  className={`w-full py-2 px-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-1.5 ${
                    isFollowing
                      ? 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                      : 'bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white shadow-xs'
                  }`}
                >
                  {isFollowing ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" /> Following
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" /> Follow
                    </>
                  )}
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
