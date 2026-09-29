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
        <section className="w-full py-12 sm:py-16 bg-slate-900 text-white border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-800/80 p-8 sm:p-10 rounded-3xl border border-slate-700/60 flex flex-col lg:flex-row items-center justify-between gap-8">

                    <div className="space-y-2 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-400 text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                            <Mail className="w-4 h-4" />
                            The Business Briefing
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                            The most important business knowledge, delivered once a week.
                        </h3>
                    </div>

                    {subscribed ? (
                        <div className="flex items-center gap-3 text-emerald-400 font-extrabold text-sm sm:text-base bg-emerald-500/10 px-6 py-3.5 rounded-2xl border border-emerald-500/20">
                            <CheckCircle2 className="w-5 h-5" />
                            <span>Thank you for subscribing to BusinessSphere!</span>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto max-w-xl">
                            <div className="relative w-full">
                                <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address..."
                                    className="w-full py-3 pl-11 pr-4 rounded-2xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 text-sm sm:text-base focus:outline-none focus:border-blue-500 font-medium"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-lg transition-all shrink-0"
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