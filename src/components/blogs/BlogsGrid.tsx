import React, { useState } from 'react';
import type { BlogArticle } from '../../mock/blogsData';
import { Clock, Bookmark, ArrowUpRight, Newspaper, Hash } from 'lucide-react';

interface BlogsGridProps {
  articles: BlogArticle[];
  selectedCategory: string;
  searchQuery: string;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (id: string) => void;
}

export const BlogsGrid: React.FC<BlogsGridProps> = ({
  articles,
  selectedCategory,
  searchQuery,
  bookmarkedIds,
  onToggleBookmark,
}) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleArticles = articles.slice(0, visibleCount);

  return (
    <section className="w-full py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Bar */}
        <div className="flex items-center justify-between mb-8 sm:mb-10 pb-4 sm:pb-5 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-2">
              <Newspaper className="w-5 h-5 text-blue-600" />
              Latest Articles & Insights
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              {selectedCategory === 'All' ? 'All Editorial Articles' : `${selectedCategory} Articles`}
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-slate-600 font-semibold">
            Showing <span className="text-slate-900 font-bold">{Math.min(visibleCount, articles.length)}</span> of{' '}
            <span className="text-slate-900 font-bold">{articles.length}</span> results
          </div>
        </div>

        {/* Empty State */}
        {articles.length === 0 ? (
          <div className="bg-slate-50 rounded-3xl p-12 sm:p-16 text-center border border-slate-200 max-w-2xl mx-auto space-y-4">
            <Newspaper className="w-12 h-12 sm:w-14 sm:h-14 text-slate-400 mx-auto" />
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">No articles found</h3>
            <p className="text-slate-600 text-sm sm:text-base">
              We couldn't find any articles matching "{searchQuery}" in category "{selectedCategory}".
            </p>
          </div>
        ) : (
          <>
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {visibleArticles.map((article) => {
                const isBookmarked = bookmarkedIds.has(article.id);
                return (
                  <div
                    key={article.id}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Cover Image */}
                      <div className="relative h-52 sm:h-60 lg:h-64 overflow-hidden">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />

                        {/* Top Badges */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                          <span className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md">
                            {article.category}
                          </span>

                          <button
                            onClick={() => onToggleBookmark(article.id)}
                            className={`p-2 rounded-xl backdrop-blur-md transition-all ${
                              isBookmarked
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-900/60 text-white hover:bg-slate-900'
                            }`}
                            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Article'}
                          >
                            <Bookmark className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-6 sm:p-7 space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-500 font-semibold">
                          <span className="flex items-center gap-1.5 text-blue-600 font-bold">
                            <Clock className="w-4 h-4 text-blue-600" />
                            {article.readTime}
                          </span>
                          <span>•</span>
                          <span>{article.publishedAt}</span>
                        </div>

                        <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                          {article.title}
                        </h3>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-3 font-normal">
                          {article.excerpt}
                        </p>

                        {/* Topic Tags */}
                        {article.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-1 sm:pt-2">
                            {article.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs text-slate-700 font-semibold border border-slate-200 flex items-center gap-1"
                              >
                                <Hash className="w-3 h-3 text-blue-600" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Footer: Author Metadata */}
                    <div className="px-6 sm:px-7 py-4 sm:py-5 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between text-xs sm:text-sm text-slate-700 font-medium">
                      <div className="flex items-center gap-3">
                        <img
                          src={article.author.avatar}
                          alt={article.author.name}
                          className="w-8 h-8 rounded-full object-cover ring-2 ring-blue-100"
                        />
                        <span className="font-extrabold text-slate-900 text-sm sm:text-base">{article.author.name}</span>
                      </div>

                      <span className="group-hover:translate-x-1 transition-transform text-blue-600 font-extrabold">
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </span>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Load More Button */}
            {visibleCount < articles.length && (
              <div className="mt-12 sm:mt-16 text-center">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3.5 sm:px-10 sm:py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-base sm:text-lg shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Load More Articles
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
};
