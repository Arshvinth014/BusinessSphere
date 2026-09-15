import React, { useState } from 'react';
import { Users, ChevronRight, Check, Plus, BookOpen, GraduationCap } from 'lucide-react';
import { FEATURED_EXPERTS } from '../../mock/mockData';

export const ExpertsSection: React.FC = () => {
  const [followingState, setFollowingState] = useState<{ [key: string]: boolean }>({});

  const toggleFollow = (id: string) => {
    setFollowingState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="experts" className="w-full py-14 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">
              <Users className="w-4 h-4" />
              Featured Experts
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Learn from top business leaders and industry experts
            </h2>
          </div>
          <a
            href="#all-experts"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            View all <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* 5 Experts Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {FEATURED_EXPERTS.map((expert) => {
            const isFollowing = followingState[expert.id];

            return (
              <div
                key={expert.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between items-center text-center space-y-4 group"
              >
                {/* Avatar */}
                <div className="relative">
                  <img
                    src={expert.avatar}
                    alt={expert.name}
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-slate-100 group-hover:ring-emerald-200 transition-all"
                  />
                  <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-[10px]">
                    ✓
                  </div>
                </div>

                <div className="space-y-2 w-full">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {expert.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium line-clamp-1">
                    {expert.role}
                  </p>

                  {/* Skill tags */}
                  <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                    {expert.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Counts */}
                  <div className="flex justify-center gap-3 pt-2 text-xs text-slate-500 border-t border-slate-100 mt-2">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-blue-500" />
                      <strong className="text-slate-800">{expert.articlesCount}</strong> Articles
                    </span>
                    <span className="flex items-center gap-1">
                      <GraduationCap className="w-3 h-3 text-emerald-500" />
                      <strong className="text-slate-800">{expert.coursesCount}</strong> Courses
                    </span>
                  </div>
                </div>

                {/* Follow CTA */}
                <button
                  type="button"
                  onClick={() => toggleFollow(expert.id)}
                  className={`w-full py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm ${
                    isFollowing
                      ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                      : 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-600/20'
                  }`}
                >
                  {isFollowing ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Following
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" /> Follow Expert
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
