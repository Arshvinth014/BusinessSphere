import React from 'react';
import { FEATURED_COLUMNISTS } from '../../mock/blogsData';
import { Quote, BookOpen } from 'lucide-react';

export const OpinionSpotlight: React.FC = () => {
  return (
    <section className="w-full py-12 sm:py-16 bg-slate-100/80 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-2">
              <Quote className="w-4 h-4 text-blue-600" />
              Opinion & Analysis Spotlight
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Perspectives from BusinessSphere Columnists
            </h2>
          </div>
          <span className="hidden sm:inline-flex text-xs sm:text-sm font-bold text-slate-800 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            Exclusive Commentary
          </span>
        </div>

        {/* Columnists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FEATURED_COLUMNISTS.map((columnist) => (
            <div
              key={columnist.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4 sm:space-y-5">
                {/* Author Avatar & Name */}
                <div className="flex items-center gap-3.5">
                  <img
                    src={columnist.avatar}
                    alt={columnist.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-blue-100 group-hover:ring-blue-500 transition-all"
                  />
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {columnist.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold">{columnist.title}</p>
                  </div>
                </div>

                {/* Quote Box */}
                <div className="relative bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80">
                  <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600/50 mb-2" />
                  <p className="text-xs sm:text-sm lg:text-base text-slate-800 italic leading-relaxed font-medium">
                    "{columnist.quote}"
                  </p>
                </div>
              </div>

              {/* Latest Topic Footer */}
              <div className="pt-4 sm:pt-5 border-t border-slate-100 mt-4 sm:mt-5 flex items-center justify-between text-xs sm:text-sm text-slate-600 font-medium">
                <div className="flex items-center gap-2 text-slate-800">
                  <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate max-w-[160px] sm:max-w-[180px] font-bold text-xs sm:text-sm">{columnist.latestTopic}</span>
                </div>
                <span className="text-xs text-slate-500">{columnist.articlesCount} columns</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
