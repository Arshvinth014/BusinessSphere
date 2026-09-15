import React, { useState } from 'react';
import { Building2, ChevronRight, Check, Plus } from 'lucide-react';
import { POPULAR_COMPANIES } from '../../mock/mockData';

export const CompaniesSection: React.FC = () => {
  const [followingState, setFollowingState] = useState<{ [key: string]: boolean }>({});

  const toggleFollow = (id: string) => {
    setFollowingState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="companies" className="w-full py-14 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">
              <Building2 className="w-4 h-4" />
              Popular Companies
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Explore top companies, industries and their latest updates
            </h2>
          </div>
          <a
            href="#all-companies"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            View all <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6 Companies Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {POPULAR_COMPANIES.map((company) => {
            const isFollowing = followingState[company.id];

            return (
              <div
                key={company.id}
                className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center justify-between space-y-4 group"
              >
                {/* Logo badge */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl shadow-md ${company.logoBg}`}>
                  {company.logoText}
                </div>

                <div className="space-y-1 w-full">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {company.category}
                  </p>
                  <div className="pt-2 text-xs font-semibold text-slate-700">
                    <span className="text-slate-900 font-bold">{company.marketCap}</span>{' '}
                    <span className="text-slate-400 font-normal">Market Cap</span>
                  </div>
                </div>

                {/* Follow Button */}
                <button
                  type="button"
                  onClick={() => toggleFollow(company.id)}
                  className={`w-full py-1.5 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1 ${
                    isFollowing
                      ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                      : 'bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white'
                  }`}
                >
                  {isFollowing ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" /> Following
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" /> Follow
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
