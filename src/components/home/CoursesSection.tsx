import React from 'react';
import { GraduationCap, ChevronRight, Star, Clock } from 'lucide-react';
import { COURSES } from '../../mock/mockData';

export const CoursesSection: React.FC = () => {
  return (
    <section id="courses" className="w-full py-16 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              Featured Courses
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Build in-demand skills with expert-led courses and learning paths
            </h2>
          </div>
          <a
            href="#all-courses"
            className="hidden sm:flex items-center gap-1.5 text-base sm:text-lg font-bold text-blue-600 hover:text-blue-800 transition-colors shrink-0"
          >
            Explore courses <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {/* 4 Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-2xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image & Badge Overlay */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-blue-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-md">
                    {course.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {course.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600 font-semibold">
                    <span className="bg-slate-100 text-slate-800 px-2.5 py-1 rounded-lg font-bold">
                      {course.level}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-slate-400" />
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 text-amber-500 font-extrabold">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>{course.rating}</span>
                      <span className="text-slate-500 font-medium">({course.studentsCount} students)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Price & CTA */}
              <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-slate-100 mt-2">
                <span className="text-xl sm:text-2xl font-black text-slate-900">{course.price}</span>
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-md transition-all hover:scale-[1.02]"
                >
                  View Course
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Mobile Link */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href="#all-courses"
            className="inline-flex items-center gap-1.5 text-base font-bold text-blue-600 hover:text-blue-800"
          >
            Explore all courses <ChevronRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
