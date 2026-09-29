import React, { useState } from 'react';
import { Newspaper, Users, ChevronRight, Quote } from 'lucide-react';
import { LATEST_NEWS_ITEMS, FEATURED_EXPERTS_LIST } from '../../mock/mockData';

export const NewsExpertsTestimonialSection: React.FC = () => {
  const [followingState, setFollowingState] = useState<{ [key: string]: boolean }>({});

  const toggleFollow = (id: string) => {
    setFollowingState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full py-8 sm:py-10 bg-white text-slate-900 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
      <div className="w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Column 1: Latest Business News (Spans 4 cols in grid) */}
          <div className="lg:col-span-4 bg-slate-50 p-6 2xl:p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm sm:text-base 2xl:text-lg">
                  <Newspaper className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-lg sm:text-xl 2xl:text-2xl font-extrabold text-slate-900">Latest Business News</h3>
                </div>
                <a href="#all-news" className="text-sm sm:text-base 2xl:text-lg font-bold text-emerald-600 hover:underline flex items-center">
                  View all <ChevronRight className="w-4 h-4" />
                </a>
              </div>
              <p className="text-sm sm:text-base 2xl:text-lg text-slate-500 mb-4">
                Global news, markets and updates from around the world.
              </p>

              <div className="space-y-3">
                {LATEST_NEWS_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-3.5 group cursor-pointer hover:border-blue-300"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="space-y-1">
                      <span className="text-xs sm:text-sm 2xl:text-base font-bold text-blue-600 uppercase tracking-wider block">
                        {item.category} • {item.timeAgo}
                      </span>
                      <h4 className="text-sm sm:text-base 2xl:text-lg font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-blue-600">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Featured Experts (Spans 5 cols in grid) */}
          <div className="lg:col-span-5 bg-slate-50 p-6 2xl:p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm sm:text-base 2xl:text-lg">
                  <Users className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-lg sm:text-xl 2xl:text-2xl font-extrabold text-slate-900">Featured Experts</h3>
                </div>
                <a href="#all-experts" className="text-sm sm:text-base 2xl:text-lg font-bold text-emerald-600 hover:underline flex items-center">
                  View all <ChevronRight className="w-4 h-4" />
                </a>
              </div>
              <p className="text-sm sm:text-base 2xl:text-lg text-slate-500 mb-4">
                Learn from verified professionals and industry leaders.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FEATURED_EXPERTS_LIST.map((expert) => {
                  const isFollowing = followingState[expert.id];

                  return (
                    <div
                      key={expert.id}
                      className="bg-white p-5 2xl:p-6 rounded-2xl border border-slate-200/90 text-center space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <img
                          src={expert.avatar}
                          alt={expert.name}
                          className="w-16 h-16 sm:w-18 sm:h-18 rounded-full object-cover mx-auto ring-2 ring-emerald-100"
                        />
                        <div>
                          <h4 className="text-base sm:text-lg 2xl:text-xl font-bold text-slate-900">{expert.name}</h4>
                          <span className="text-xs sm:text-sm 2xl:text-base text-slate-500 font-medium block">{expert.role}</span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-1">
                          {expert.tags.map((t, idx) => (
                            <span key={idx} className="bg-slate-100 text-slate-600 text-xs sm:text-sm 2xl:text-base px-2.5 py-0.5 rounded font-medium">
                              {t}
                            </span>
                          ))}
                        </div>

                        <span className="text-xs sm:text-sm 2xl:text-base text-slate-400 block pt-1">
                          {expert.articlesCount} Articles • {expert.coursesCount} Courses
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleFollow(expert.id)}
                        className={`w-full py-2.5 rounded-xl text-sm sm:text-base 2xl:text-lg font-bold transition-all ${
                          isFollowing
                            ? 'bg-slate-200 text-slate-700'
                            : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                        }`}
                      >
                        {isFollowing ? 'Following' : 'Follow'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 3: Testimonial Card (Spans 3 cols in grid) */}
          <div className="lg:col-span-3 bg-slate-50 p-6 2xl:p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Quote className="w-6 h-6 fill-emerald-600" />
              </div>

              <p className="text-base sm:text-lg 2xl:text-xl text-slate-700 leading-relaxed italic font-normal">
                "InvestWise helped me build a plan for my family's future. The tools are easy to use and the insights are really helpful."
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-slate-200/80">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm sm:text-base">
                AP
              </div>
              <div>
                <span className="font-bold text-slate-900 text-sm sm:text-base 2xl:text-lg block">Ayesha Perera</span>
                <span className="text-xs sm:text-sm 2xl:text-base text-emerald-600 font-medium block">Verified Investor</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
