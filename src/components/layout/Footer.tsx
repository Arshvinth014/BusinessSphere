import React from 'react';
import {
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#050B16] text-slate-400 border-t border-slate-800/80">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* Brand Info Column (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-400 p-0.5 shadow-md">
                <div className="w-full h-full bg-[#0B1528] rounded-[10px] flex items-center justify-center">
                  <Globe className="w-4 h-4 text-blue-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Business<span className="text-blue-400">Sphere</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The world's premier knowledge platform for business intelligence, investment strategies, financial modeling, and career growth.
            </p>

            {/* Social Links with inline SVGs */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#twitter"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-blue-600/30 hover:text-white flex items-center justify-center transition-colors text-slate-400 border border-slate-700/50"
                aria-label="X / Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#linkedin"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-blue-600/30 hover:text-white flex items-center justify-center transition-colors text-slate-400 border border-slate-700/50"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
                </svg>
              </a>
              <a
                href="#youtube"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-red-600/30 hover:text-white flex items-center justify-center transition-colors text-slate-400 border border-slate-700/50"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                </svg>
              </a>
              <a
                href="#github"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-slate-700 hover:text-white flex items-center justify-center transition-colors text-slate-400 border border-slate-700/50"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                </svg>
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" /> ISO 27001 Certified Security
              </span>
            </div>
          </div>

          {/* Column 1: Learn */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Learn</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Courses</a></li>
              <li><a href="#dictionary" className="hover:text-blue-400 transition-colors">Dictionary</a></li>
              <li><a href="#articles" className="hover:text-blue-400 transition-colors">Research Articles</a></li>
              <li><a href="#events" className="hover:text-blue-400 transition-colors">Global Events</a></li>
              <li><a href="#cases" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#dictionary" className="hover:text-blue-400 transition-colors">Financial Terms</a></li>
              <li><a href="#entrepreneurship" className="hover:text-blue-400 transition-colors">Entrepreneurship</a></li>
              <li><a href="#companies" className="hover:text-blue-400 transition-colors">Company Profiles</a></li>
              <li><a href="#community" className="hover:text-blue-400 transition-colors">Join Community</a></li>
              <li><a href="#news" className="hover:text-blue-400 transition-colors">Market News</a></li>
            </ul>
          </div>

          {/* Column 3: Tools & Models */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Tools & Models</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#markets" className="hover:text-blue-400 transition-colors">Valuation Calculator</a></li>
              <li><a href="#markets" className="hover:text-blue-400 transition-colors">Financial Metrics</a></li>
              <li><a href="#markets" className="hover:text-blue-400 transition-colors">Portfolio Tracker</a></li>
              <li>
                <a href="#ai-engine" className="hover:text-blue-400 transition-colors flex items-center gap-1 text-emerald-400 font-medium">
                  AI Analytics Engine <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li><a href="#certifications" className="hover:text-blue-400 transition-colors">Certifications</a></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-blue-400 transition-colors">Careers <span className="text-[10px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded ml-1">Hiring</span></a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Support</a></li>
              <li><a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Disclaimer */}
      <div className="border-t border-slate-800/80 bg-[#030710] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2025 BusinessSphere. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-slate-400 transition-colors">Terms</a>
            <a href="#cookies" className="hover:text-slate-400 transition-colors">Cookie Preferences</a>
            <a href="#security" className="hover:text-slate-400 transition-colors">Security</a>
          </div>
          <div className="text-right flex items-center gap-1 text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Empowering global investors for a smarter tomorrow.
          </div>
        </div>
      </div>

    </footer>
  );
};
