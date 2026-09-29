import React from 'react';
import { ShieldCheck, ChevronRight, Home, Umbrella, Plane } from 'lucide-react';
import { GOALS_DATA } from '../../mock/mockData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[640px] 2xl:min-h-[720px] text-white overflow-hidden py-12 lg:py-20 flex items-center">
      
      {/* Clear, natural mountain background image from public/homepageHero.png - NO BLUR, NO DARK FILTER */}
      <div className="absolute inset-0 z-0">
        <img
          src="/homepageHero.png"
          alt="Mountain landscape"
          className="w-full h-full object-cover object-[center_bottom]"
        />
      </div>

      {/* Inner Content Container */}
      <div className="w-full max-w-[1700px] 2xl:max-w-[2200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold tracking-tight leading-[1.15] text-white drop-shadow-md">
              Plan your Money.{' '}
              <span className="text-[#00E599] block mt-2 drop-shadow-md">
                Invest with confidence.
              </span>
            </h1>

            <p className="text-white text-base sm:text-lg lg:text-xl 2xl:text-2xl max-w-xl leading-relaxed font-medium drop-shadow-sm">
              Build a personalized investment plan, grow your wealth and get the knowledge you need for a secure future.
            </p>
          </div>

          {/* Right Floating Cards Row */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Card 1: Your Risk Profile (Translucent Dark Teal/Blue Glass Card) */}
            <div className="bg-[#12334d]/80 border border-white/20 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl text-white space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-sm sm:text-base text-slate-100 font-semibold mb-4">
                  <div className="p-1.5 rounded-full bg-white/20">
                    <ShieldCheck className="w-4 h-4 text-white" />
                  </div>
                  <span>Your Risk profile</span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-[#00E599] flex-shrink-0">
                      <ShieldCheck className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-none">Balanced</h3>
                      <p className="text-xs sm:text-sm text-slate-200 mt-1 font-normal line-clamp-2">
                        You're comfortable with some market fluctuations for higher long-term returns.
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-slate-100 border border-white/25 flex-shrink-0 whitespace-nowrap self-start">
                    Moderate Risk
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/15">
                <a
                  href="#risk-assessment"
                  className="text-xs sm:text-sm font-bold text-[#00E599] hover:underline inline-flex items-center gap-1"
                >
                  View Full Assessment <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 2: Your Goals (White Glass Card) */}
            <div className="bg-white/95 border border-white/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl text-slate-900 space-y-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Your Goals</h3>
                <a href="#goals" className="text-xs sm:text-sm text-emerald-600 font-bold hover:underline flex items-center gap-0.5">
                  View details <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              <div className="space-y-3.5">
                {GOALS_DATA.map((goal) => (
                  <div key={goal.id} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm gap-2">
                      <div className="flex items-center gap-2 font-bold text-slate-800 min-w-0">
                        <div className="p-1.5 rounded-full bg-emerald-100 text-emerald-600 flex-shrink-0">
                          {goal.iconName === 'Home' && <Home className="w-4 h-4" />}
                          {goal.iconName === 'Umbrella' && <Umbrella className="w-4 h-4" />}
                          {goal.iconName === 'Plane' && <Plane className="w-4 h-4" />}
                        </div>
                        <span className="truncate">{goal.title}</span>
                      </div>
                      <span className="text-xs text-slate-500 font-semibold flex-shrink-0 whitespace-nowrap">{goal.subtitle}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${goal.progressPercent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

