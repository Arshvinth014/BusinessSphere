import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/home/HeroSection';
import { OverviewGridSection } from '../components/home/OverviewGridSection';
import { FeaturedCoursesSection } from '../components/home/FeaturedCoursesSection';
import { LatestArticlesSection } from '../components/home/LatestArticlesSection';
import { PopularPlansSection } from '../components/home/PopularPlansSection';
import { NewsExpertsTestimonialSection } from '../components/home/NewsExpertsTestimonialSection';
import { CtaBannerSection } from '../components/home/CtaBannerSection';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* 1. Header Component - 100% FULL WIDTH EDGE-TO-EDGE */}
      <Header />

      {/* 2. Hero Section - 100% FULL WIDTH EDGE-TO-EDGE */}
      <HeroSection />

      {/* 3. Main Content - CONTAINED WITH LEFT & RIGHT MARGINS */}
      <main className="flex-1 w-full max-w-[1700px] 2xl:max-w-[2200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 py-8 sm:py-10 space-y-8 sm:space-y-10 lg:space-y-12">
        <OverviewGridSection />
        <FeaturedCoursesSection />
        <LatestArticlesSection />
        <PopularPlansSection />
        <NewsExpertsTestimonialSection />
        <CtaBannerSection />
      </main>

      {/* 4. Footer Component - 100% FULL WIDTH EDGE-TO-EDGE */}
      <Footer />
    </div>
  );
};
