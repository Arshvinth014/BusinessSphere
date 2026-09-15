import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="w-full py-10 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800/80 p-6 sm:p-8 rounded-2xl border border-slate-700/60 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Mail className="w-4 h-4" />
              The Business Brief
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              The most important business knowledge, delivered once a week.
            </h3>
          </div>

          {subscribed ? (
            <div className="flex items-center gap-2 text-emerald-400 font-bold bg-emerald-500/10 px-4 py-3 rounded-xl border border-emerald-500/20">
              <CheckCircle2 className="w-5 h-5" />
              <span>Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full md:w-auto max-w-md">
              <div className="relative w-full">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full py-2.5 pl-10 pr-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm shadow-md transition-all flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};
