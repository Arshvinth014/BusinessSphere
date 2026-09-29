import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="w-full bg-[#0B1728] text-white border-b border-slate-800/80 sticky top-0 z-50 shadow-md">
      {/* Full width container with generous edge padding for TV & desktop */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <div className="flex items-center justify-between h-20 gap-6">

          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/LogoBusinessSphere.PNG"
                alt="BusinessSphere Logo"
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Invest<span className="text-emerald-400">Wise</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-6 text-base xl:text-lg 2xl:text-xl font-medium text-slate-300">
              {/* Commented out previous page navigations:
              <a href="#discover" className="hover:text-white transition-colors">Discover</a>
              <a href="#plans" className="hover:text-white transition-colors">Investment Plans</a>
              <a href="#markets" className="hover:text-white transition-colors">Markets</a>
              <a href="#learn" className="hover:text-white transition-colors">Learn</a>
              <a href="#courses" className="hover:text-white transition-colors">Courses</a>
              <a href="#goals" className="hover:text-white transition-colors">Goals</a>
              <a href="#community" className="hover:text-white transition-colors">Community</a>
              */}
              <Link to="/blogs-and-articles" className="hover:text-white transition-colors">Blogs and Articles</Link>
              <a href="#news" className="hover:text-white transition-colors">News</a>
            </nav>
          </div>

          {/* Search bar & User Avatar */}
          <div className="hidden md:flex items-center gap-5">
            <div className="relative w-72 lg:w-96 xl:w-[420px]">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search anything (investors, plans, companies, terms...)"
                className="w-full py-2.5 pl-11 pr-4 rounded-full bg-slate-900/90 border border-slate-700/80 text-sm lg:text-base text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
              />
            </div>

            {/* User Profile Avatar */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 cursor-pointer hover:scale-105 transition-transform flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="User Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1222] border-b border-slate-800 px-6 py-5 space-y-4">
          <div className="relative w-full mb-4">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full py-2.5 pl-11 pr-4 rounded-full bg-slate-900 border border-slate-700 text-sm text-slate-200"
            />
          </div>
          {/* Commented out previous page navigations:
          <a href="#discover" className="block px-2 py-2 text-base font-semibold text-slate-300 hover:text-white">Discover</a>
          <a href="#plans" className="block px-2 py-2 text-base font-semibold text-slate-300 hover:text-white">Investment Plans</a>
          <a href="#markets" className="block px-2 py-2 text-base font-semibold text-slate-300 hover:text-white">Markets</a>
          <a href="#learn" className="block px-2 py-2 text-base font-semibold text-slate-300 hover:text-white">Learn</a>
          <a href="#courses" className="block px-2 py-2 text-base font-semibold text-slate-300 hover:text-white">Courses</a>
          <a href="#goals" className="block px-2 py-2 text-base font-semibold text-slate-300 hover:text-white">Goals</a>
          <a href="#community" className="block px-2 py-2 text-base font-semibold text-slate-300 hover:text-white">Community</a>
          */}
          <Link to="/blogs-and-articles" className="block px-2 py-2 text-base font-semibold text-slate-300 hover:text-white">Blogs and Articles</Link>
          <a href="#news" className="block px-2 py-2 text-base font-semibold text-slate-300 hover:text-white">News</a>
        </div>
      )}
    </header>
  );
};