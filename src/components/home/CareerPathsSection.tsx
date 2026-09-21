import React from 'react';
import { Briefcase, ChevronRight, Award, BookOpen, BarChart3, Rocket, Building } from 'lucide-react';
import { CAREER_PATHS } from '../../mock/mockData';

const getCareerIcon = (name: string) => {
  switch (name) {
    case 'Building': return <Building className="w-6 h-6 text-blue-600" />;
    case 'BarChart': return <BarChart3 className="w-6 h-6 text-emerald-600" />;
    case 'Rocket': return <Rocket className="w-6 h-6 text-purple-600" />;
    case 'Briefcase': return <Briefcase className="w-6 h-6 text-amber-600" />;
    default: return <Briefcase className="w-6 h-6 text-blue-600" />;
  }
};

export const CareerPathsSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-2">
              <Briefcase className="w-4 h-4 text-blue-600" />
              Build Your Professional Future
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Structured learning paths for your career goals
            </h2>
          </div>
          <a
            href="#all-paths"
            className="hidden sm:flex items-center gap-1.5 text-base sm:text-lg font-bold text-blue-600 hover:text-blue-800 transition-colors shrink-0"
          >
            View all <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {/* 4 Career Path Progress Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CAREER_PATHS.map((path) => (
            <div
              key={path.id}
              className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 space-y-5 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-slate-100 group-hover:bg-blue-50 transition-colors">
                    {getCareerIcon(path.iconName)}
                  </div>
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">PATH</span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {path.title}
                </h3>

                {/* Progress Bar */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-xs sm:text-sm font-bold">
                    <span className="text-slate-600">Curriculum Progress</span>
                    <span className="text-blue-600 font-extrabold">{path.progressPercent}%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-500"
                      style={{ width: `${path.progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Stats Footer */}
              <div className="flex items-center justify-between pt-5 border-t border-slate-100 text-xs sm:text-sm text-slate-600 font-bold">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  {path.coursesCount} Courses
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-500" />
                  {path.certificatesCount} Certificates
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
