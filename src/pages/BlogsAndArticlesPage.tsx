import React, { useState, useMemo } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { BLOG_ARTICLES } from '../mock/blogsData';
import { BlogsCategoryNav } from '../components/blogs/BlogsCategoryNav';
import { BlogsHero } from '../components/blogs/BlogsHero';
import { OpinionSpotlight } from '../components/blogs/OpinionSpotlight';
import { BlogsGrid } from '../components/blogs/BlogsGrid';
import { NewsletterSection } from '../components/home/NewsletterSection';

export const BlogsAndArticlesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());

  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  // Featured Lead Story
  const leadStory = useMemo(() => {
    return BLOG_ARTICLES.find((article) => article.isFeaturedLead) || BLOG_ARTICLES[0];
  }, []);

  // Editor's Picks (Top 4 ranked)
  const editorsPicks = useMemo(() => {
    return BLOG_ARTICLES.filter((article) => article.isEditorsPick).slice(0, 4);
  }, []);

  // Filtered Articles Grid
  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category.toLowerCase() === selectedCategory.toLowerCase();

      const queryLower = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !queryLower ||
        article.title.toLowerCase().includes(queryLower) ||
        article.excerpt.toLowerCase().includes(queryLower) ||
        article.category.toLowerCase().includes(queryLower) ||
        article.tags.some((tag) => tag.toLowerCase().includes(queryLower));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <Header />

      {/* Interactive Category & Topic Search Bar */}
      <BlogsCategoryNav
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Forbes-Style Content Section */}
      <main className="flex-1">
        {/* Editorial Hero Showcase */}
        <BlogsHero
          leadArticle={leadStory}
          editorsPicks={editorsPicks}
          bookmarkedIds={bookmarkedIds}
          onToggleBookmark={handleToggleBookmark}
        />

        {/* Forbes-Style Opinion & Columnist Spotlight */}
        <OpinionSpotlight />

        {/* Filtered Articles Grid */}
        <BlogsGrid
          articles={filteredArticles}
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          bookmarkedIds={bookmarkedIds}
          onToggleBookmark={handleToggleBookmark}
        />

        {/* Newsletter Signup */}
        <NewsletterSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
