import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Bell } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const isHomeActive = location.pathname === '/';
  const isPlansActive = location.pathname === '/investment-plans';
  const isBlogsActive = location.pathname === '/blogs-and-articles';
  const isNewsActive = location.pathname === '/news';

  return (
    <header className="w-full bg-[#0B1728] text-white border-b border-slate-800/80 sticky top-0 z-50 shadow-md">
      {/* Full width container with generous edge padding for TV & desktop */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <div className="flex items-center justify-between h-20 gap-6">

          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/LogoBSphere.png"
                alt="BusinessSphere Logo"
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Invest<span className="text-emerald-400">Wise</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm xl:text-base 2xl:text-lg font-medium text-slate-300">
              <Link
                to="/"
                className={`transition-colors py-1 px-3 rounded-lg ${isHomeActive ? 'text-white font-bold' : 'hover:text-white'
                  }`}
              >
                Discover
              </Link>

              <Link
                to="/investment-plans"
                className={`transition-colors py-1 px-3 rounded-lg relative ${isPlansActive
                  ? 'text-[#00E599] font-bold bg-emerald-500/10 border border-emerald-500/30'
                  : 'hover:text-white'
                  }`}
              >
                Investment Plans
              </Link>

              <Link to="/" className="hover:text-white transition-colors py-1 px-3">
                Markets
              </Link>

              <Link to="/" className="hover:text-white transition-colors py-1 px-3">
                Courses
              </Link>

              <Link
                to="/blogs-and-articles"
                className={`transition-colors py-1 px-3 rounded-lg ${isBlogsActive ? 'text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20' : 'hover:text-white'
                  }`}
              >
                Blogs & Articles
              </Link>

              <Link
                to="/news"
                className={`transition-colors py-1 px-3 rounded-lg ${isNewsActive ? 'text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20' : 'hover:text-white'
                  }`}
              >
                News
              </Link>
            </nav>
          </div>

          {/* Search bar, Notification Bell & User Avatar */}
          <div className="hidden md:flex items-center gap-5">
            <div className="relative w-64 lg:w-80 xl:w-[360px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search anything in business, finance, companies, terms..."
                className="w-full py-2 pl-10 pr-4 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs xl:text-sm text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            {/* Notification Bell */}
            <button
              type="button"
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition-colors relative"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="w-2 h-2 rounded-full bg-[#00E599] absolute top-1.5 right-1.5 ring-2 ring-[#0B1728]" />
            </button>

            {/* User Profile Avatar */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 cursor-pointer shadow-md">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="User Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1222] border-b border-slate-800 px-6 py-6 space-y-4">
          <div className="relative w-full mb-4">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full py-2 pl-10 pr-4 rounded-full bg-slate-900 border border-slate-700 text-sm text-slate-200"
            />
          </div>
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-200 hover:text-white">Discover</Link>
          <Link to="/investment-plans" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-bold text-[#00E599]">Investment Plans</Link>
          <Link to="/blogs-and-articles" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-200 hover:text-white">Blogs & Articles</Link>
          <Link to="/news" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-200 hover:text-white">News</Link>
        </div>
      )}
    </header>
  );
};