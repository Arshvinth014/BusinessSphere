import React, { useState } from 'react';
import { Search, Globe, ChevronRight, BookOpen, Newspaper, GraduationCap, Building2, TrendingUp } from 'lucide-react';
import { HERO_STATS } from '../../mock/mockData';

export const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'dictionary' | 'articles' | 'courses' | 'companies'>('dictionary');

  return (
    <section className="relative w-full bg-[#0B1528] text-white overflow-hidden pt-8 pb-14 border-b border-slate-800">
      {/* Dynamic Background Glows & Network Graphics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] left-[45%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />
        
        {/* Globe image background overlay on right side matching reference image */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-25 mix-blend-screen pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80"
            alt="World Network background"
            className="w-full h-full object-cover object-right"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/70 text-slate-300 text-xs font-semibold backdrop-blur-md shadow-inner">
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>Global Business Knowledge Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              The World's Knowledge Platform for{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Business & Investment
              </span>
            </h1>

            {/* Subtitle Slogan */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-300 tracking-wide flex items-center gap-3">
              <span>Learn.</span>
              <span className="text-blue-400">•</span>
              <span>Practice.</span>
              <span className="text-blue-400">•</span>
              <span>Connect.</span>
              <span className="text-blue-400">•</span>
              <span className="text-emerald-400">Grow.</span>
            </p>

            {/* Interactive Search Bar Box */}
            <div className="mt-8 bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-2xl border border-slate-200/20 max-w-3xl">
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
                <div className="pl-3 text-slate-400">
                  <Search className="w-6 h-6 text-slate-500" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search anything in business, finance, companies, terms..."
                  className="w-full py-3 px-2 text-slate-900 placeholder:text-slate-400 text-base font-medium focus:outline-none bg-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Search className="w-4 h-4" />
                  <span className="hidden sm:inline">Search</span>
                </button>
              </form>
            </div>

            {/* Quick Category Filter Pills underneath Search */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <button
                onClick={() => setActiveTab('dictionary')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all font-medium ${
                  activeTab === 'dictionary'
                    ? 'bg-blue-600/30 text-white border border-blue-400/50 shadow-md'
                    : 'bg-slate-900/60 text-slate-300 border border-slate-800 hover:bg-slate-800'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                Dictionary
              </button>

              <button
                onClick={() => setActiveTab('articles')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all font-medium ${
                  activeTab === 'articles'
                    ? 'bg-blue-600/30 text-white border border-blue-400/50 shadow-md'
                    : 'bg-slate-900/60 text-slate-300 border border-slate-800 hover:bg-slate-800'
                }`}
              >
                <Newspaper className="w-3.5 h-3.5 text-emerald-400" />
                Articles
              </button>

              <button
                onClick={() => setActiveTab('courses')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all font-medium ${
                  activeTab === 'courses'
                    ? 'bg-blue-600/30 text-white border border-blue-400/50 shadow-md'
                    : 'bg-slate-900/60 text-slate-300 border border-slate-800 hover:bg-slate-800'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                Courses
              </button>

              <button
                onClick={() => setActiveTab('companies')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all font-medium ${
                  activeTab === 'companies'
                    ? 'bg-blue-600/30 text-white border border-blue-400/50 shadow-md'
                    : 'bg-slate-900/60 text-slate-300 border border-slate-800 hover:bg-slate-800'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                Companies
              </button>
            </div>

          </div>

          {/* Right Floating Highlights Card */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-3 justify-end items-end text-right pr-4">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/60 backdrop-blur-md shadow-xl text-xs max-w-xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider">
                 Global Insights
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Real-time data, expert perspectives, and comprehensive business term definitions for a smarter future.
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Better Decisions</span>
                <span className="text-blue-400 flex items-center gap-0.5 font-semibold">
                  Greater Opportunities <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Global Business Intelligence Stats Counter Row */}
        <div className="mt-14 pt-8 border-t border-slate-800/80">
          <div className="mb-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              Global Business Intelligence
            </h3>
            <p className="text-xs text-slate-400">
              Real-time data, expert insights, and comprehensive knowledge for a smarter labor force.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.id}
                className="bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 rounded-xl p-4 transition-all duration-200 hover:scale-[1.02]"
              >
                <div className="text-2xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
