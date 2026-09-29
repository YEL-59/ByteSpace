"use client";

import React, { useState } from "react";
import Link from "next/link";
import CourseCard from "@/components/home/CourseCard";
import coursesData from "@/data/courses.json";
import categoryTagsData from "@/data/categoryTags.json";
import { Course } from "@/types";

export default function FeaturedCourses() {
  const [activeTab, setActiveTab] = useState("featured");

  // Filter courses based on active tag
  const filteredCourses: Course[] =
    activeTab === "featured" || activeTab === "all"
      ? (coursesData as Course[])
      : (coursesData as Course[]).filter((c) => {
          const catId = c.categoryId?.toLowerCase() || "";
          const catName = c.category?.toLowerCase() || "";
          const searchKey = activeTab.toLowerCase().replace(/-/g, " ");
          return (
            catId === activeTab ||
            catName.includes(searchKey) ||
            searchKey.includes(catId) ||
            (activeTab === "data-science" && catId === "data-cloud") ||
            (activeTab === "marketing" && catId === "business")
          );
        });

  const displayCourses =
    filteredCourses.length > 0 ? filteredCourses : (coursesData as Course[]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white" id="courses">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1E23] tracking-tight leading-[1.15]">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>
          <p className="mt-4 text-[#6E8090] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* 3-Row Centered Filter Tags */}
        <div className="flex flex-col items-center gap-2.5 sm:gap-3 mb-14">
          {categoryTagsData.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
            >
              {row.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-[13px] md:text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#CEF001] text-neutral-950 font-bold shadow-sm shadow-[#CEF001]/30"
                        : "bg-[#F2F3F6] text-[#404C57] hover:bg-[#E4E6EB] hover:text-neutral-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
              {/* + More link on the last row */}
              {rowIdx === categoryTagsData.length - 1 && (
                <Link
                  href="/courses"
                  className="inline-flex items-center text-xs sm:text-[13px] md:text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors px-3 py-1.5 cursor-pointer ml-0.5 hover:underline"
                >
                  + More
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
