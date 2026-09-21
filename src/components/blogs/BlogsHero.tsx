import React from 'react';
import type { BlogArticle } from '../../mock/blogsData';
import { Clock, Eye, Bookmark, TrendingUp, Sparkles } from 'lucide-react';

interface BlogsHeroProps {
  leadArticle: BlogArticle;
  editorsPicks: BlogArticle[];
  bookmarkedIds: Set<string>;
  onToggleBookmark: (id: string) => void;
}

export const BlogsHero: React.FC<BlogsHeroProps> = ({
  leadArticle,
  editorsPicks,
  bookmarkedIds,
  onToggleBookmark,
}) => {
  const isLeadBookmarked = bookmarkedIds.has(leadArticle.id);

  return (
    <section className="w-full py-8 sm:py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Label */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse" />
            <span className="text-sm sm:text-base font-extrabold text-slate-900 uppercase tracking-widest">
              BusinessSphere Cover Story & Top Stories
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm sm:text-base text-slate-600 font-semibold">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Updated Daily by Global Editorial Team</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Main Lead Story (Spans 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative">
            
            {/* Background Cover Image with Image Overlay */}
            <div className="relative h-80 sm:h-[420px] overflow-hidden">
              <img
                src={leadArticle.imageUrl}
                alt={leadArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />

              {/* Top Badges */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-lg bg-blue-600 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md">
                  {leadArticle.category}
                </span>

                <button
                  onClick={() => onToggleBookmark(leadArticle.id)}
                  className={`p-2.5 rounded-2xl backdrop-blur-md transition-all ${
                    isLeadBookmarked
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-900/70 text-white hover:bg-slate-900'
                  }`}
                  title={isLeadBookmarked ? 'Remove Bookmark' : 'Bookmark Article'}
                >
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>

              {/* Cover Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <span className="text-xs sm:text-sm font-extrabold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  Featured Editorial Lead
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight drop-shadow-lg group-hover:text-blue-200 transition-colors">
                  {leadArticle.title}
                </h2>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 bg-white">
              <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed font-normal">
                {leadArticle.excerpt}
              </p>

              {/* Author & Meta Bar */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100 text-sm sm:text-base text-slate-600">
                <div className="flex items-center gap-3">
                  <img
                    src={leadArticle.author.avatar}
                    alt={leadArticle.author.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100"
                  />
                  <div>
                    <div className="font-extrabold text-slate-900 text-base sm:text-lg">{leadArticle.author.name}</div>
                    <div className="text-xs sm:text-sm text-slate-500 font-medium">{leadArticle.author.role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-600 font-semibold text-sm sm:text-base">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-600" />
                    {leadArticle.readTime}
                  </span>
                  {leadArticle.viewsCount && (
                    <span className="hidden sm:flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-emerald-600" />
                      {leadArticle.viewsCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editor's Picks (Spans 5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                Editor's Picks & Trending
              </h3>
              <span className="text-xs sm:text-sm text-slate-500 font-semibold">Ranked by Engagement</span>
            </div>

            <div className="space-y-4 flex-1">
              {editorsPicks.map((article, idx) => {
                const isBookmarked = bookmarkedIds.has(article.id);
                return (
                  <div
                    key={article.id}
                    className="group relative flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg hover:border-blue-400 transition-all"
                  >
                    {/* Rank Number Counter */}
                    <div className="text-2xl sm:text-3xl font-black text-blue-600 w-7 shrink-0 pt-0.5">
                      0{idx + 1}
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-extrabold text-blue-600 uppercase tracking-wider">
                          {article.category}
                        </span>
                        <span className="text-slate-500 font-medium">{article.publishedAt}</span>
                      </div>

                      <h4 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </h4>

                      <div className="flex items-center justify-between pt-1 text-xs sm:text-sm text-slate-600 font-medium">
                        <span>By {article.author.name}</span>
                        <span className="text-slate-500">{article.readTime}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onToggleBookmark(article.id)}
                      className={`p-2 rounded-xl transition-colors shrink-0 ${
                        isBookmarked ? 'text-blue-600' : 'text-slate-400 hover:text-slate-700'
                      }`}
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
