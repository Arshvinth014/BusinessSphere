import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bookmark, TrendingUp } from 'lucide-react';
import { LEAD_STORY, SIDE_HIGHLIGHT_ARTICLES, STOCK_FEATURED_CARDS } from '../../mock/newsData';

export const NewsLeadStorySection: React.FC = () => {
  const [bookmarked, setBookmarked] = useState(false);
  const [bookmarkedSides, setBookmarkedSides] = useState<{ [key: string]: boolean }>({});

  const toggleSideBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedSides((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full space-y-8">

      {/* Light grey section container matching reference */}
      <div className="bg-[#f0f4f8] p-6 sm:p-8 2xl:p-10 rounded-3xl border border-slate-200/80 space-y-6 shadow-sm">

        {/* Section Title */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-900 font-extrabold text-xl sm:text-2xl 2xl:text-3xl">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <h2>Today's Lead Story & Highlights</h2>
          </div>
          <span className="text-xs sm:text-sm 2xl:text-base text-slate-500 font-semibold">
            Updated 18 minutes ago
          </span>
        </div>

        {/* Lead Story & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Large Lead Story Card (7.5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Image Container with Badge */}
              <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden">
                <img
                  src={LEAD_STORY.imageUrl}
                  alt={LEAD_STORY.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-blue-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg">
                  {LEAD_STORY.category} • {LEAD_STORY.readTime}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <span className="text-xs sm:text-sm 2xl:text-base font-bold text-emerald-600 uppercase tracking-wider block">
                  {LEAD_STORY.subCategory}
                </span>

                <h3 className="text-2xl sm:text-3xl 2xl:text-4xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight cursor-pointer">
                  {LEAD_STORY.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base 2xl:text-lg leading-relaxed">
                  {LEAD_STORY.excerpt}
                </p>
              </div>
            </div>

            {/* Author Footer */}
            <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
              <div className="flex items-center gap-3 pt-4">
                <img
                  src={LEAD_STORY.author.avatar}
                  alt={LEAD_STORY.author.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-100"
                />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base 2xl:text-lg leading-none">
                    {LEAD_STORY.author.name}
                  </h4>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium block mt-1">
                    {LEAD_STORY.date} • {LEAD_STORY.author.role}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setBookmarked(!bookmarked)}
                className="p-2 rounded-xl text-slate-400 hover:text-emerald-600 hover:bg-slate-100 transition-colors"
                aria-label="Bookmark article"
              >
                <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-emerald-600 text-emerald-600' : ''}`} />
              </button>
            </div>

          </motion.div>

          {/* Right Stacked Highlight Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {SIDE_HIGHLIGHT_ARTICLES.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-center gap-4 group cursor-pointer hover:border-blue-300 hover:shadow-md transition-all flex-1"
              >
                {/* Thumbnail */}
                <div className="w-28 sm:w-36 h-24 sm:h-28 rounded-xl overflow-hidden flex-shrink-0 relative">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 space-y-1.5 min-w-0">
                  <span className="text-blue-600 font-bold text-xs sm:text-sm 2xl:text-base uppercase tracking-wider block">
                    {article.category} • {article.readTime}
                  </span>

                  <h4 className="text-sm sm:text-base 2xl:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-500 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-400 pt-1">
                    <span>{article.author.name} • {article.publishedTimeAgo}</span>
                    <button
                      type="button"
                      onClick={(e) => toggleSideBookmark(article.id, e)}
                      className="text-slate-400 hover:text-emerald-600 p-0.5"
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${bookmarkedSides[article.id] ? 'fill-emerald-600 text-emerald-600' : ''}`} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* Stock Market Ticker Cards Row */}
      <div className="bg-[#0A182B] p-5 sm:p-7 rounded-3xl border border-slate-800 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {STOCK_FEATURED_CARDS.map((stock, idx) => (
            <div
              key={idx}
              className="bg-[#0E2238] p-4 sm:p-5 rounded-2xl border border-slate-700/60 shadow-md flex items-center justify-between group hover:border-emerald-500/50 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base ${stock.logoBg}`}>
                  {stock.logoText}
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-base sm:text-lg 2xl:text-xl leading-none">
                    {stock.name}
                  </h4>
                  <span className="text-xs sm:text-sm text-slate-400 font-medium block mt-1">
                    {stock.exchange}: {stock.symbol}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="font-extrabold text-white text-lg sm:text-xl 2xl:text-2xl block">
                  {stock.price}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mt-0.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {stock.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
