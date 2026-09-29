import React from 'react';
import { Newspaper, ChevronRight } from 'lucide-react';
import { LATEST_ARTICLES } from '../../mock/mockData';

export const LatestArticlesSection: React.FC = () => {
  const featuredArticle = LATEST_ARTICLES.find((a) => a.isFeatured) || LATEST_ARTICLES[0];
  const sideArticles = LATEST_ARTICLES.filter((a) => !a.isFeatured);

  return (
    <section id="articles" className="w-full py-8 sm:py-10 bg-[#f0f4f8] text-slate-900 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
      <div className="w-full space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-base sm:text-lg 2xl:text-xl mb-1">
              <div className="p-1 rounded bg-emerald-500/10">
                <Newspaper className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-slate-900">Latest Articles</h2>
            </div>
            <p className="text-base sm:text-lg 2xl:text-xl text-slate-600">
              In-depth analysis, practical insights and expert perspectives.
            </p>
          </div>

          <a
            href="#all-articles"
            className="text-base sm:text-lg 2xl:text-xl font-bold text-emerald-600 hover:underline flex items-center gap-0.5"
          >
            View all <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Featured Article Left (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/90 flex flex-col justify-between group">
            <div className="relative h-64 sm:h-80 2xl:h-96 overflow-hidden">
              <img
                src={featuredArticle.imageUrl}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded bg-blue-600 text-white font-bold text-xs sm:text-sm 2xl:text-base uppercase tracking-wider shadow">
                {featuredArticle.category} • {featuredArticle.readTime}
              </span>
            </div>

            <div className="p-6 2xl:p-8 space-y-4">
              <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                {featuredArticle.title}
              </h3>
              <p className="text-sm sm:text-base 2xl:text-lg text-slate-600 leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 text-sm sm:text-base 2xl:text-lg text-slate-500">
                <img
                  src={featuredArticle.author.avatar}
                  alt={featuredArticle.author.name}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <span className="font-bold text-slate-800 block">{featuredArticle.author.name}</span>
                  <span className="text-xs sm:text-sm 2xl:text-base text-slate-400">{featuredArticle.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Side Articles Right (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {sideArticles.map((art) => (
              <div
                key={art.id}
                className="bg-white p-5 2xl:p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-center gap-4 group cursor-pointer hover:border-blue-300 transition-all"
              >
                <div className="flex-1 space-y-1.5">
                  <span className="text-blue-600 font-bold text-xs sm:text-sm 2xl:text-base uppercase tracking-wider block">
                    {art.category} • {art.readTime}
                  </span>
                  <h4 className="text-base sm:text-lg 2xl:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {art.title}
                  </h4>
                  <p className="text-sm sm:text-base 2xl:text-lg text-slate-500 line-clamp-2">
                    {art.excerpt}
                  </p>
                </div>

                <div className="w-28 h-24 sm:w-32 sm:h-28 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={art.imageUrl}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
