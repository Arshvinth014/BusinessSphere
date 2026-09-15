import React from 'react';
import { Newspaper, ChevronRight, Clock } from 'lucide-react';
import { ARTICLES } from '../../mock/mockData';

export const ArticlesSection: React.FC = () => {
  const featuredArticle = ARTICLES.find((a) => a.isFeatured) || ARTICLES[0];
  const sideArticles = ARTICLES.filter((a) => !a.isFeatured);

  return (
    <section id="articles" className="w-full py-14 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">
              <Newspaper className="w-4 h-4" />
              Latest Articles
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              In-depth analytics, practical insights, and expert perspectives
            </h2>
          </div>
          <a
            href="#all-articles"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            View all <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Featured Large Card (Spans 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src={featuredArticle.imageUrl}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-blue-600 text-white font-bold text-xs shadow-md">
                  {featuredArticle.category}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-white font-medium text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-300" />
                  {featuredArticle.readTime}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {featuredArticle.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredArticle.author.avatar}
                    alt={featuredArticle.author.name}
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-blue-100"
                  />
                  <span className="font-semibold text-slate-700">{featuredArticle.author.name}</span>
                </div>
                <span>{featuredArticle.date}</span>
              </div>
            </div>
          </div>

          {/* Right Column Side Articles (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {sideArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 hover:shadow-md hover:border-blue-300 transition-all duration-200 flex gap-4 items-center group cursor-pointer"
              >
                <div className="w-28 h-24 sm:w-32 sm:h-28 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] font-bold">
                    <span className="text-blue-600">{article.category}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-400 font-normal">{article.readTime}</span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-xs text-slate-500 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile View All Link */}
        <div className="mt-6 text-center sm:hidden">
          <a
            href="#all-articles"
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            View all articles <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
