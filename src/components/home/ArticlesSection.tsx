import React from 'react';
import { Newspaper, ChevronRight, Clock } from 'lucide-react';
import { ARTICLES } from '../../mock/mockData';

export const ArticlesSection: React.FC = () => {
  const featuredArticle = ARTICLES.find((a) => a.isFeatured) || ARTICLES[0];
  const sideArticles = ARTICLES.filter((a) => !a.isFeatured);

  return (
    <section id="articles" className="w-full py-16 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-2">
              <Newspaper className="w-4 h-4 text-blue-600" />
              Latest Articles
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              In-depth analytics, practical insights, and expert perspectives
            </h2>
          </div>
          <a
            href="#all-articles"
            className="hidden sm:flex items-center gap-1.5 text-base sm:text-lg font-bold text-blue-600 hover:text-blue-800 transition-colors shrink-0"
          >
            View all <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Featured Large Card (Spans 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200/80 hover:shadow-2xl transition-all duration-300 flex flex-col group">
            <div className="relative h-72 sm:h-96 overflow-hidden">
              <img
                src={featuredArticle.imageUrl}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-lg bg-blue-600 text-white font-extrabold text-xs sm:text-sm shadow-md">
                  {featuredArticle.category}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/85 backdrop-blur-md text-white font-bold text-xs sm:text-sm flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-300" />
                  {featuredArticle.readTime}
                </span>
              </div>
            </div>

            <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {featuredArticle.title}
                </h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-slate-100 text-sm sm:text-base text-slate-600 font-medium">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredArticle.author.avatar}
                    alt={featuredArticle.author.name}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-blue-100"
                  />
                  <span className="font-extrabold text-slate-900 text-base sm:text-lg">{featuredArticle.author.name}</span>
                </div>
                <span>{featuredArticle.date}</span>
              </div>
            </div>
          </div>

          {/* Right Column Side Articles (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            {sideArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-blue-400 transition-all duration-200 flex gap-5 items-center group cursor-pointer"
              >
                <div className="w-32 h-28 sm:w-36 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold">
                    <span className="text-blue-600 uppercase tracking-wider">{article.category}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 font-medium">{article.readTime}</span>
                  </div>

                  <h4 className="text-base sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 font-normal">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href="#all-articles"
            className="inline-flex items-center gap-1.5 text-base font-bold text-blue-600 hover:text-blue-800"
          >
            View all articles <ChevronRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
