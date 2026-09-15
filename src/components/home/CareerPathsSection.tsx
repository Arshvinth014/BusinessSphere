import React from 'react';
import { Briefcase, ChevronRight, Award, BookOpen, BarChart3, Rocket, Building } from 'lucide-react';
import { CAREER_PATHS } from '../../mock/mockData';

const getCareerIcon = (name: string) => {
  switch (name) {
    case 'Building': return <Building className="w-5 h-5 text-blue-600" />;
    case 'BarChart': return <BarChart3 className="w-5 h-5 text-emerald-600" />;
    case 'Rocket': return <Rocket className="w-5 h-5 text-purple-600" />;
    case 'Briefcase': return <Briefcase className="w-5 h-5 text-amber-600" />;
    default: return <Briefcase className="w-5 h-5 text-blue-600" />;
  }
};

export const CareerPathsSection: React.FC = () => {
  return (
    <section className="w-full py-14 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">
              <Briefcase className="w-4 h-4" />
              Build Your Professional Future
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Structured learning paths for your career goals
            </h2>
          </div>
          <a
            href="#all-paths"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            View all <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Career Path Progress Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAREER_PATHS.map((path) => (
            <div
              key={path.id}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-100 group-hover:bg-blue-50 transition-colors">
                    {getCareerIcon(path.iconName)}
                  </div>
                  <span className="text-xs font-bold text-slate-400">PATH</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {path.title}
                </h3>

                {/* Progress Bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-500">Curriculum Progress</span>
                    <span className="text-blue-600">{path.progressPercent}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-500"
                      style={{ width: `${path.progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Stats Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500">
                <span className="flex items-center gap-1 font-medium">
                  <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                  {path.coursesCount} Courses
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <Award className="w-3.5 h-3.5 text-emerald-500" />
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
