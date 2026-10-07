import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroBannerSection } from '../components/investment-plans/HeroBannerSection';
import { CuratedPlansSection } from '../components/investment-plans/CuratedPlansSection';
import { CompoundingSimulatorSection } from '../components/investment-plans/CompoundingSimulatorSection';
import { DiagnosticAdvisoryCtaSection } from '../components/investment-plans/DiagnosticAdvisoryCtaSection';
import { SafeguardsSection } from '../components/investment-plans/SafeguardsSection';

export const InvestmentPlansPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-[#00E599] selection:text-slate-950">
      {/* Header */}
      <Header />

      {/* Main Page Sections */}
      <main className="flex-1">
        <HeroBannerSection />
        <CuratedPlansSection />
        <CompoundingSimulatorSection />
        <DiagnosticAdvisoryCtaSection />
        <SafeguardsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
