import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/home/HeroSection';
import { MarketTicker } from '../components/home/MarketTicker';
import { ArticlesSection } from '../components/home/ArticlesSection';
import { CoursesSection } from '../components/home/CoursesSection';
import { TrendingNewsSection } from '../components/home/TrendingNewsSection';
import { CompaniesSection } from '../components/home/CompaniesSection';
import { ExpertsSection } from '../components/home/ExpertsSection';
import { MarketsSection } from '../components/home/MarketsSection';
import { CareerPathsSection } from '../components/home/CareerPathsSection';
import { CommunityPodcastSection } from '../components/home/CommunityPodcastSection';
import { AiBannerSection } from '../components/home/AiBannerSection';
import { NewsletterSection } from '../components/home/NewsletterSection';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-blue-500 selection:text-white">
      {/* Separate Header Component */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <MarketTicker />
        <ArticlesSection />
        <CoursesSection />
        <TrendingNewsSection />
        <CompaniesSection />
        <ExpertsSection />
        <MarketsSection />
        <CareerPathsSection />
        <CommunityPodcastSection />
        <AiBannerSection />
        <NewsletterSection />
      </main>

      {/* Separate Footer Component */}
      <Footer />
    </div>
  );
};
