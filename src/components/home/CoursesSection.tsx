import React from 'react';
import { GraduationCap, ChevronRight, Star, Clock } from 'lucide-react';
import { COURSES } from '../../mock/mockData';

export const CoursesSection: React.FC = () => {
  return (
    <section id="courses" className="w-full py-14 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">
              <GraduationCap className="w-4 h-4" />
              Featured Courses
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Build in-demand skills with expert-led courses and learning paths
            </h2>
          </div>
          <a
            href="#all-courses"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            Explore courses <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image & Badge Overlay */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-blue-600/90 text-white font-bold text-[11px] shadow-sm uppercase tracking-wider">
                    {course.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {course.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                      {course.level}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2 text-xs">
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{course.rating}</span>
                      <span className="text-slate-400 font-normal">({course.studentsCount} students)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Price & CTA */}
              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-100 mt-2">
                <span className="text-lg font-extrabold text-slate-900">{course.price}</span>
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-md transition-all hover:scale-[1.02]"
                >
                  View Course
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Mobile Link */}
        <div className="mt-6 text-center sm:hidden">
          <a
            href="#all-courses"
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            Explore all courses <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
