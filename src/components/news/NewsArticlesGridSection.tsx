import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bookmark, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { INVESTIGATIVE_ARTICLES } from '../../mock/newsData';

export const NewsArticlesGridSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState('All Topics');
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarks, setBookmarks] = useState<{ [key: string]: boolean }>({});

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full bg-[#f0f4f8] p-6 sm:p-8 2xl:p-10 rounded-3xl border border-slate-200/80 space-y-6 shadow-sm">

      {/* Header & Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-slate-900 font-extrabold text-xl sm:text-2xl 2xl:text-3xl">
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <h2>Latest Investigative & Educational Articles</h2>
          </div>
          <p className="text-xs sm:text-sm 2xl:text-base text-slate-500 mt-1 font-normal">
            Written by CFA charter holders, licensed financial advisors, and senior analysts.
          </p>
        </div>

        {/* Filter Dropdown */}
        <div className="flex items-center gap-2 text-xs sm:text-sm 2xl:text-base text-slate-600 font-semibold self-end sm:self-auto flex-shrink-0">
          <span>Filter by topic:</span>
          <div className="relative">
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="bg-white border border-slate-300 rounded-lg px-3 py-1.5 pr-8 text-xs sm:text-sm 2xl:text-base text-slate-800 font-medium focus:outline-none focus:border-emerald-500 cursor-pointer shadow-2xs appearance-none"
            >
              <option value="All Topics">All Topics</option>
              <option value="Finance">Finance</option>
              <option value="Global Markets">Global Markets</option>
              <option value="Retirement">Retirement</option>
              <option value="FinTech & AI">FinTech & AI</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {INVESTIGATIVE_ARTICLES.map((article, idx) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Image & Badge */}
              <div className="relative h-48 sm:h-52 2xl:h-60 overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow">
                  {article.category}
                </span>
              </div>

              {/* Body Content */}
              <div className="p-5 2xl:p-6 space-y-3">
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  {article.readTime} • {article.subCategory}
                </div>

                <h3 className="text-base sm:text-lg 2xl:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2 cursor-pointer">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </div>

            {/* Author Footer */}
            <div className="px-5 2xl:px-6 pb-5 pt-3 flex items-center justify-between border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-7 h-7 rounded-full object-cover"
                />
                <span className="text-xs sm:text-sm font-bold text-slate-800">{article.author.name}</span>
              </div>

              <button
                type="button"
                onClick={() => toggleBookmark(article.id)}
                className="text-slate-400 hover:text-emerald-600 p-1"
                aria-label="Bookmark article"
              >
                <Bookmark className={`w-4 h-4 ${bookmarks[article.id] ? 'fill-emerald-600 text-emerald-600' : ''}`} />
              </button>
            </div>

          </motion.div>
        ))}
      </div>

      {/* Pagination Bar matching reference */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/80">
        <span className="text-xs sm:text-sm 2xl:text-base text-slate-500 font-medium">
          Showing <span className="font-bold text-slate-800">1-8</span> of <span className="font-bold text-slate-800">142</span> curated articles
        </span>

        {/* Page numbers */}
        <div className="flex items-center gap-1.5 text-xs sm:text-sm 2xl:text-base text-slate-600">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-50 font-semibold flex items-center gap-1 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-lg font-bold flex items-center justify-center cursor-pointer ${currentPage === page
                  ? 'bg-emerald-500 text-slate-950 shadow'
                  : 'bg-white border border-slate-300 hover:bg-slate-100 text-slate-700'
                }`}
            >
              {page}
            </button>
          ))}

          <span className="px-1 text-slate-400 font-bold">..</span>

          <button
            type="button"
            onClick={() => setCurrentPage(18)}
            className={`w-8 h-8 rounded-lg font-bold flex items-center justify-center cursor-pointer ${currentPage === 18
                ? 'bg-emerald-500 text-slate-950 shadow'
                : 'bg-white border border-slate-300 hover:bg-slate-100 text-slate-700'
              }`}
          >
            18
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 font-semibold flex items-center gap-1 cursor-pointer"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
