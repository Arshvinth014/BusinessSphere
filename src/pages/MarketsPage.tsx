import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MarketsHeroSection } from '../components/markets/MarketsHeroSection';
import { CoreBenchmarksSection } from '../components/markets/CoreBenchmarksSection';
import { SectorPerformanceSection } from '../components/markets/SectorPerformanceSection';
import { ActiveWatchlistSection } from '../components/markets/ActiveWatchlistSection';
import { MacroEventsFedWatchSection } from '../components/markets/MacroEventsFedWatchSection';

export const MarketsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col selection:bg-[#00E599] selection:text-slate-950">
      {/* Header Component */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 bg-white">
        <MarketsHeroSection />
        <CoreBenchmarksSection />
        <SectorPerformanceSection />
        <ActiveWatchlistSection />
        <MacroEventsFedWatchSection />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};
