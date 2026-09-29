import React from 'react';
import { GraduationCap, ChevronRight, Star } from 'lucide-react';
import { FEATURED_COURSES } from '../../mock/mockData';

export const FeaturedCoursesSection: React.FC = () => {
  return (
    <section id="courses" className="w-full py-8 sm:py-10 bg-[#f0f4f8] text-slate-900 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
      <div className="w-full space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-base sm:text-lg 2xl:text-xl mb-1.5">
              <div className="p-1.5 rounded-lg bg-emerald-500/10">
                <GraduationCap className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-slate-900">Featured Courses</h2>
            </div>
            <p className="text-base sm:text-lg 2xl:text-xl text-slate-600">
              Build in-demand skills with expert-led courses and learning paths.
            </p>
          </div>

          <a
            href="#all-courses"
            className="text-base sm:text-lg 2xl:text-xl font-bold text-emerald-600 hover:underline flex items-center gap-1"
          >
            Explore courses <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {/* 4 Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/90 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail & Badge */}
                <div className="relative h-48 sm:h-56 2xl:h-64 overflow-hidden">
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-blue-600 text-white font-bold text-xs sm:text-sm 2xl:text-base tracking-wider uppercase shadow">
                    {course.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 2xl:p-6 space-y-3">
                  <h3 className="text-lg sm:text-xl 2xl:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                    {course.title}
                  </h3>

                  <div className="text-sm sm:text-base 2xl:text-lg text-slate-500 flex items-center gap-2 font-medium">
                    <span>{course.level}</span>
                    <span>•</span>
                    <span>{course.duration}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-amber-500 font-bold text-base sm:text-lg 2xl:text-xl pt-1">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    <span>{course.rating}</span>
                    <span className="text-slate-400 font-normal text-sm sm:text-base 2xl:text-lg">({course.studentsCount} students)</span>
                  </div>
                </div>
              </div>

              {/* Footer Price & Emerald Button */}
              <div className="px-5 2xl:px-6 pb-5 pt-3 flex items-center justify-between border-t border-slate-100">
                <span className="text-xl sm:text-2xl 2xl:text-3xl font-extrabold text-slate-900">{course.price}</span>
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-xl text-sm sm:text-base 2xl:text-lg font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow transition-all"
                >
                  View Course
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

