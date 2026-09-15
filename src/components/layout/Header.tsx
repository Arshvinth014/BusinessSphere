import React, { useState } from 'react';
import {
  Globe,
  ChevronDown,
  Search,
  User,
  Menu,
  X,
  BookOpen,
  Sparkles,
  Layers,
  Users,
  Newspaper,
  Calculator,
  Compass,
} from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="w-full bg-[#0B1528] text-white border-b border-slate-800 sticky top-0 z-50 shadow-lg backdrop-blur-md bg-opacity-95">
      {/* Top Banner Bar */}
      <div className="bg-[#070E1B] text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[11px] font-medium">
              <Globe className="w-3 h-3 text-blue-400 animate-pulse" />
              Global Business Knowledge Platform
            </span>
            <span className="hidden sm:inline text-slate-400">
              Trusted by 500,000+ financial analysts & business professionals
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#dictionary" className="hover:text-blue-400 transition-colors">Global Insights</a>
            <span className="text-slate-700">•</span>
            <a href="#courses" className="hover:text-blue-400 transition-colors">Market Data</a>
            <span className="text-slate-700">•</span>
            <a href="#experts" className="hover:text-blue-400 transition-colors">Career Pathways</a>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-400 p-0.5 shadow-md group-hover:shadow-blue-500/20 transition-all">
                <div className="w-full h-full bg-[#0B1528] rounded-[10px] flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  Business<span className="text-blue-400">Sphere</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase -mt-1">
                  Knowledge Platform
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium">
              
              {/* Learn Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('learn')}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  Learn
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>
                {activeDropdown === 'learn' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-[#0E1A30] border border-slate-700/60 rounded-xl shadow-2xl p-2 z-50 text-slate-200 animate-in fade-in slide-in-from-top-2 duration-150">
                    <a href="#dictionary" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-blue-600/20 hover:text-white transition-colors">
                      <BookOpen className="w-4 h-4 text-blue-400" />
                      <div>
                        <div className="text-sm font-semibold">Dictionary</div>
                        <div className="text-xs text-slate-400">125k+ Business terms</div>
                      </div>
                    </a>
                    <a href="#articles" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-blue-600/20 hover:text-white transition-colors">
                      <Newspaper className="w-4 h-4 text-emerald-400" />
                      <div>
                        <div className="text-sm font-semibold">Articles</div>
                        <div className="text-xs text-slate-400">In-depth insights</div>
                      </div>
                    </a>
                    <a href="#courses" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-blue-600/20 hover:text-white transition-colors">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <div>
                        <div className="text-sm font-semibold">Courses</div>
                        <div className="text-xs text-slate-400">Expert-led training</div>
                      </div>
                    </a>
                  </div>
                )}
              </div>

              <a href="#dictionary" className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">
                Dictionary
              </a>

              <a href="#courses" className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">
                Courses
              </a>

              {/* Practice Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('practice')}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  Practice
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>
                {activeDropdown === 'practice' && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-[#0E1A30] border border-slate-700/60 rounded-xl shadow-2xl p-2 z-50 text-slate-200">
                    <a href="#cases" className="block px-3 py-2 rounded-lg hover:bg-blue-600/20 hover:text-white">Case Studies</a>
                    <a href="#quizzes" className="block px-3 py-2 rounded-lg hover:bg-blue-600/20 hover:text-white">Financial Models</a>
                    <a href="#simulations" className="block px-3 py-2 rounded-lg hover:bg-blue-600/20 hover:text-white">Market Practice</a>
                  </div>
                )}
              </div>

              {/* Tools Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('tools')}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  Tools
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>
                {activeDropdown === 'tools' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-[#0E1A30] border border-slate-700/60 rounded-xl shadow-2xl p-2 z-50 text-slate-200">
                    <a href="#markets" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-600/20 hover:text-white">
                      <Calculator className="w-4 h-4 text-blue-400" /> Valuation Calculator
                    </a>
                    <a href="#markets" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-600/20 hover:text-white">
                      <Layers className="w-4 h-4 text-emerald-400" /> Portfolio Tracker
                    </a>
                  </div>
                )}
              </div>

              {/* Community Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('community')}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  Community
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>
                {activeDropdown === 'community' && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-[#0E1A30] border border-slate-700/60 rounded-xl shadow-2xl p-2 z-50 text-slate-200">
                    <a href="#community" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-600/20 hover:text-white">
                      <Users className="w-4 h-4 text-indigo-400" /> Q&A Forum
                    </a>
                    <a href="#community" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-600/20 hover:text-white">
                      <Compass className="w-4 h-4 text-sky-400" /> Study Groups
                    </a>
                  </div>
                )}
              </div>

              <a href="#experts" className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">
                Experts
              </a>

              <a href="#companies" className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">
                Companies
              </a>

              <a href="#news" className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">
                News
              </a>

            </nav>
          </div>

          {/* Right Header Controls */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
              title="Search BusinessSphere"
            >
              <Search className="w-5 h-5" />
            </button>

            <a
              href="#login"
              className="px-4 py-2 text-sm font-semibold text-slate-200 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <User className="w-4 h-4 text-slate-400" />
              Login
            </a>

            <a
              href="#get-started"
              className="px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1222] border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <a href="#dictionary" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800">Dictionary</a>
          <a href="#articles" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800">Articles</a>
          <a href="#courses" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800">Courses</a>
          <a href="#experts" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800">Experts</a>
          <a href="#companies" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800">Companies</a>
          <a href="#news" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800">News</a>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <a href="#login" className="w-full py-2.5 text-center rounded-xl bg-slate-800 text-white font-medium">Login</a>
            <a href="#get-started" className="w-full py-2.5 text-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
};
