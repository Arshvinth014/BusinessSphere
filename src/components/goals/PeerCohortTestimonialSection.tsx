import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle2 } from 'lucide-react';
import { PEER_COHORT_DATA } from '../../mock/goalsData';

export const PeerCohortTestimonialSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-14 border-b border-slate-100">
      <div className="w-full max-w-[1700px] 2xl:max-w-[2400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="bg-[#091728] border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Subheader */}
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-4 h-4 text-[#00E599] stroke-[2.5]" />
            <span className="font-mono text-xs sm:text-sm font-bold text-[#00E599] uppercase tracking-widest">
              // PEER COHORT METRICS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
                {PEER_COHORT_DATA.headline}{' '}
                <span className="text-[#00E599] block sm:inline">
                  {PEER_COHORT_DATA.multiplier}.
                </span>
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm lg:text-base 2xl:text-lg leading-relaxed max-w-2xl font-normal">
                {PEER_COHORT_DATA.description}
              </p>
            </div>

            {/* Right Testimonial Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#040c16] border border-slate-700/80 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl">
                {/* Client Avatar and Identity */}
                <div className="flex items-center gap-3.5">
                  <img
                    src={PEER_COHORT_DATA.client.avatar}
                    alt={PEER_COHORT_DATA.client.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-[#00E599]/60 shadow-md"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-white text-sm sm:text-base 2xl:text-lg">
                        {PEER_COHORT_DATA.client.name}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-[#00E599] fill-[#00E599]/20" />
                    </div>
                    <span className="text-xs 2xl:text-sm text-slate-400 font-mono block">
                      {PEER_COHORT_DATA.client.goalCompleted}
                    </span>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm 2xl:text-base text-slate-200 italic leading-relaxed">
                  {PEER_COHORT_DATA.client.quote}
                </p>

                {/* Footer Status */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] 2xl:text-xs font-mono">
                  <span className="text-slate-400">
                    Target Met: 4 Months Ahead of Schedule
                  </span>
                  <span className="text-[#00E599] font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
                    Verified Client
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
