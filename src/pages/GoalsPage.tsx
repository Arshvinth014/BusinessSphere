import React, { useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { GoalsHeroSection } from '../components/goals/GoalsHeroSection';
import { DedicatedPortfoliosSection } from '../components/goals/DedicatedPortfoliosSection';
import { InteractiveGlidepathSection } from '../components/goals/InteractiveGlidepathSection';
import { CashRoutingRulesSection } from '../components/goals/CashRoutingRulesSection';
import { PeerCohortTestimonialSection } from '../components/goals/PeerCohortTestimonialSection';

export const GoalsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col selection:bg-[#00E599] selection:text-slate-950">
      {/* Existing Header Component */}
      <Header />

      {/* Main Goals Content */}
      <main className="flex-1 bg-white">
        {/* 1. Hero & Metrics Overview */}
        <GoalsHeroSection />

        {/* 2. Dedicated Portfolios Section */}
        <DedicatedPortfoliosSection />

        {/* 3. Interactive Glidepath Simulation & Chart */}
        <InteractiveGlidepathSection />

        {/* 4. Automated Cash Routing Rules */}
        <CashRoutingRulesSection />

        {/* 5. Peer Cohort Testimonial & Uplift Metrics */}
        <PeerCohortTestimonialSection />
      </main>

      {/* Existing Footer Component */}
      <Footer />
    </div>
  );
};
