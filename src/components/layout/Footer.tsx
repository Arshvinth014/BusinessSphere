import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#050B14] text-slate-400 border-t border-slate-800/80">

      {/* Main Links Container */}
      <div className="w-full max-w-[1700px] 2xl:max-w-[2200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Brand Info */}
          <div className="lg:col-span-1 space-y-3">
            <a href="/" className="flex items-center gap-2.5 group">
              <img
                src="/LogoBSphere.png"
                alt="BusinessSphere"
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-xl sm:text-2xl 2xl:text-3xl font-extrabold tracking-tight text-white">
                Invest<span className="text-emerald-400">Wise</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm 2xl:text-base text-slate-400">
              Plan. Grow. Prosper.
            </p>
          </div>

          {/* Column 1: PRODUCT */}
          <div className="space-y-3">
            <h3 className="text-xs sm:text-sm 2xl:text-base font-bold text-white uppercase tracking-wider">PRODUCT</h3>
            <ul className="space-y-2.5 text-sm sm:text-base 2xl:text-lg">
              <li><a href="#plans" className="hover:text-white transition-colors">Investment Plans</a></li>
              <li><a href="#markets" className="hover:text-white transition-colors">Markets</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#goals" className="hover:text-white transition-colors">Goals</a></li>
            </ul>
          </div>

          {/* Column 2: LEARN */}
          <div className="space-y-3">
            <h3 className="text-xs sm:text-sm 2xl:text-base font-bold text-white uppercase tracking-wider">LEARN</h3>
            <ul className="space-y-2.5 text-sm sm:text-base 2xl:text-lg">
              <li><a href="#courses" className="hover:text-white transition-colors">Courses</a></li>
              <li><a href="#articles" className="hover:text-white transition-colors">Articles</a></li>
              <li><a href="#glossary" className="hover:text-white transition-colors">Glossary</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div className="space-y-3">
            <h3 className="text-xs sm:text-sm 2xl:text-base font-bold text-white uppercase tracking-wider">COMPANY</h3>
            <ul className="space-y-2.5 text-sm sm:text-base 2xl:text-lg">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>

          {/* Column 4: STAY UPDATED */}
          <div className="space-y-3 lg:col-span-1">
            <h3 className="text-xs sm:text-sm 2xl:text-base font-bold text-white uppercase tracking-wider">STAY UPDATED</h3>
            <p className="text-xs sm:text-sm 2xl:text-base text-slate-400">
              Get market insights and learning tips.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-1.5 text-emerald-400 text-sm sm:text-base 2xl:text-lg font-semibold">
                <CheckCircle2 className="w-5 h-5" /> Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full py-2.5 px-3.5 rounded-lg bg-slate-900 border border-slate-800 text-sm sm:text-base 2xl:text-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base 2xl:text-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 py-4 px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <div className="w-full max-w-[1700px] 2xl:max-w-[2200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm 2xl:text-base text-slate-500">
          <div>© 2025 BusinessSphere. All rights reserved.</div>
          <div>Educational platform • Not financial advice</div>
        </div>
      </div>

    </footer>
  );
};
