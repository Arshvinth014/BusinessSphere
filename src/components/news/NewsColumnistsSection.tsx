import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, ChevronRight } from 'lucide-react';
import { FEATURED_COLUMNISTS } from '../../mock/newsData';

export const NewsColumnistsSection: React.FC = () => {
  const [followingState, setFollowingState] = useState<{ [key: string]: boolean }>({});
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const toggleFollow = (id: string) => {
    setFollowingState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Columnists (8 cols) */}
        <div className="lg:col-span-8 bg-[#f0f4f8] p-6 sm:p-8 2xl:p-10 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-extrabold text-slate-900">
                  Featured Columnists & Analysts
                </h2>
                <p className="text-xs sm:text-sm 2xl:text-base text-slate-500 mt-1">
                  Direct insights from market veterans, authors, and registered advisors.
                </p>
              </div>

              <a
                href="#contributors"
                className="text-xs sm:text-sm 2xl:text-base font-bold text-emerald-600 hover:underline flex items-center gap-1 flex-shrink-0"
              >
                View All Contributors <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* 3 Columnists Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6">
              {FEATURED_COLUMNISTS.map((col, idx) => {
                const isFollowing = followingState[col.id];
                return (
                  <motion.div
                    key={col.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-white p-5 rounded-2xl border border-slate-200/90 text-center space-y-3 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all"
                  >
                    <div className="space-y-2">
                      <img
                        src={col.avatar}
                        alt={col.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mx-auto ring-2 ring-emerald-100 shadow"
                      />
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">{col.name}</h3>
                        <span className="text-xs sm:text-sm text-emerald-600 font-semibold block">{col.specialty}</span>
                      </div>
                      <span className="text-[11px] sm:text-xs text-slate-400 block pt-1">
                        {col.articlesCount} Articles • {col.followersCount} Followers
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleFollow(col.id)}
                      className={`w-full py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        isFollowing
                          ? 'bg-slate-200 text-slate-700'
                          : 'bg-white border border-slate-300 hover:bg-slate-100 text-slate-800'
                      }`}
                    >
                      {isFollowing ? 'Following' : '+ Follow'}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Daily Market Briefing Newsletter Card (4 cols) */}
        <div className="lg:col-span-4 bg-[#0A182B] text-white p-6 sm:p-8 2xl:p-10 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <Mail className="w-6 h-6 text-emerald-400" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-extrabold text-white">
                Daily Market Briefing
              </h2>
              <p className="text-xs sm:text-sm 2xl:text-base text-slate-300 leading-relaxed font-normal">
                Get morning market intelligence, earnings previews, and macroeconomic takeaways delivered to your inbox 30 minutes before market opening bell.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-bold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Subscribed! Check your inbox for morning briefings.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email address"
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 border border-slate-700/80 text-xs sm:text-sm 2xl:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#00E599] hover:bg-[#00c885] text-slate-950 font-extrabold text-xs sm:text-sm 2xl:text-base shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.01] cursor-pointer"
                >
                  Subscribe to Morning Brief
                </button>
              </form>
            )}

            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-400 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>No spam. One-click unsubscribe at any time.</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
