import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { NewsHeroHeader } from '../components/news/NewsHeroHeader';
import { NewsLeadStorySection } from '../components/news/NewsLeadStorySection';
import { NewsArticlesGridSection } from '../components/news/NewsArticlesGridSection';
import { NewsColumnistsSection } from '../components/news/NewsColumnistsSection';

export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All News');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* 1. Header Component */}
      <Header />

      {/* 2. News Banner Header */}
      <NewsHeroHeader
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 3. Main Content Container - CONTAINED WITH LEFT & RIGHT MARGINS */}
      <main className="flex-1 w-full max-w-[1700px] 2xl:max-w-[2200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 py-8 sm:py-10 space-y-8 sm:space-y-10 lg:space-y-12">
        <NewsLeadStorySection />
        <NewsArticlesGridSection />
        <NewsColumnistsSection />
      </main>

      {/* 4. Footer Component - 100% FULL WIDTH */}
      <Footer />
    </div>
  );
};
