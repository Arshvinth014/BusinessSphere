import React, { useState } from 'react';
import { Sparkles, Bot, ArrowRight } from 'lucide-react';

export const AiBannerSection: React.FC = () => {
  const [prompt, setPrompt] = useState('');

  const quickPrompts = [
    'Explore stocks',
    'Analyze ETF ratios',
    'Search real estate',
    'Compare companies',
    'Calculate ROI',
  ];

  return (
    <section className="w-full py-10 bg-[#070D1A] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0B172E] via-[#0E2042] to-[#0A1833] p-8 sm:p-12 overflow-hidden border border-slate-700/80 shadow-2xl">
          
          {/* AI Grid Nodes Background Effect */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative z-10 max-w-3xl space-y-6">
            
            {/* AI Engine Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-bold tracking-wider uppercase">
              <Bot className="w-4 h-4 text-blue-400" />
              &lt; OUR AI ENGINE &gt;
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Ask. Analyze. Decide.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Get instant answers, market analysis, business plans, and financial ratios powered by the world's largest financial knowledge graph.
            </p>

            {/* AI Search Box */}
            <div className="bg-white p-2 rounded-2xl shadow-xl flex items-center gap-2 max-w-2xl">
              <div className="pl-3 text-slate-400">
                <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
              </div>
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask BusinessSphere AI anything..."
                className="w-full py-2.5 px-2 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none"
              />
              <button
                type="button"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all hover:scale-[1.02]"
              >
                <span>Ask AI</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Prompts Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 font-medium mr-1">Try asking:</span>
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setPrompt(p)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-blue-600/30 text-slate-300 hover:text-white border border-slate-700/60 transition-all font-mono text-[11px]"
                >
                  {p}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
