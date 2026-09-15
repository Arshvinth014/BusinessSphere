import React from 'react';
import {
  MessageSquare,
  Users,
  Radio,
  ChevronRight,
  Play,
  Eye,
  CircleDollarSign,
  Lightbulb,
  TrendingUp,
  Calculator,
  PiggyBank,
  GraduationCap,
} from 'lucide-react';
import {
  COMMUNITY_QUESTIONS,
  POPULAR_COMMUNITIES,
  PODCAST_EPISODES,
} from '../../mock/mockData';

const getCommunityIcon = (name: string) => {
  switch (name) {
    case 'CircleDollarSign': return <CircleDollarSign className="w-4 h-4 text-emerald-600" />;
    case 'Lightbulb': return <Lightbulb className="w-4 h-4 text-amber-500" />;
    case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-blue-600" />;
    case 'Calculator': return <Calculator className="w-4 h-4 text-purple-600" />;
    case 'PiggyBank': return <PiggyBank className="w-4 h-4 text-rose-500" />;
    case 'GraduationCap': return <GraduationCap className="w-4 h-4 text-sky-500" />;
    default: return <Users className="w-4 h-4 text-blue-600" />;
  }
};

export const CommunityPodcastSection: React.FC = () => {
  return (
    <section id="community" className="w-full py-14 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Community Questions & Groups (Spans 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">
                  <MessageSquare className="w-4 h-4" />
                  From the Community
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  Digital discussions from real business people
                </h2>
              </div>
              <a href="#community-all" className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-0.5">
                View all <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Q&A Cards */}
            <div className="space-y-3">
              {COMMUNITY_QUESTIONS.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 cursor-pointer">
                      {item.question}
                    </h3>
                    <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-semibold flex-shrink-0">
                      Question
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 pt-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-700">{item.author}</span>
                      <span>•</span>
                      {item.tags.map((t, idx) => (
                        <span key={idx} className="bg-slate-200/70 text-slate-700 px-2 py-0.5 rounded text-[11px]">
                          #{t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-slate-500">
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5 text-blue-500" />
                        <strong>{item.answersCount}</strong> answers
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-slate-400" />
                        {item.viewsCount}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Popular Communities List */}
            <div className="pt-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                Popular Communities
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {POPULAR_COMMUNITIES.map((c) => (
                  <div
                    key={c.id}
                    className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all flex items-center gap-2.5 cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-slate-100">
                      {getCommunityIcon(c.iconName)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{c.name}</div>
                      <div className="text-[11px] text-slate-500">{c.membersCount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: BusinessSphere Podcasts (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">
                  <Radio className="w-4 h-4" />
                  BusinessSphere Podcasts
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  Listen to expert insights on the go
                </h2>
              </div>
              <a href="#podcasts" className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-0.5">
                View all <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Podcast Episode Cards */}
            <div className="space-y-4">
              {PODCAST_EPISODES.map((pod) => (
                <div
                  key={pod.id}
                  className="p-3.5 bg-slate-900 text-white rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all flex items-center gap-4 group cursor-pointer shadow-md"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={pod.imageUrl}
                      alt={pod.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-1">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {pod.episodeNumber}
                    </span>
                    <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                      {pod.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {pod.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
