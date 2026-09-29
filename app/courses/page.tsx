"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import CourseCard from "@/components/home/CourseCard";
import coursesData from "@/data/courses.json";
import { Course } from "@/types";

const CATEGORIES = [
  { id: "all", label: "All Categories" },
  { id: "web-dev", label: "Web Development" },
  { id: "ai-ml", label: "Artificial Intelligence" },
  { id: "ui-ux", label: "UI/UX Design" },
  { id: "data-cloud", label: "Data & Cloud" },
  { id: "business", label: "Business & Growth" },
];

function CourseCatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("cat") || "all";
  const initialQuery = searchParams.get("q") || "";

  const [search, setSearch] = useState(initialQuery);
  const [selectedCat, setSelectedCat] = useState(initialCategory);

  const filteredCourses = useMemo(() => {
    return (coursesData as Course[]).filter((course) => {
      const matchesCategory =
        selectedCat === "all" || course.categoryId === selectedCat;
      const matchesSearch =
        search.trim() === "" ||
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.instructor.name.toLowerCase().includes(search.toLowerCase()) ||
        course.category.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCat]);

  return (
    <div className="py-12 lg:py-16 bg-white min-h-[80vh]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Course Catalog"
          title="Find Your Next Course"
          subtitle="Explore all in-demand courses, search by topic, and elevate your technical skills."
          className="mb-10"
        />

        {/* Search & Filter Bar */}
        <div className="max-w-3xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search courses, instructors, or topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full border border-neutral-200 text-body-m text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-primary-600 shadow-sm"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 justify-center flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-4 py-1.5 rounded-full text-label-xs font-medium transition-colors cursor-pointer ${
                  selectedCat === cat.id
                    ? "bg-primary-600 text-white shadow-xs"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-100">
          <p className="text-body-s text-neutral-500">
            Showing <span className="font-bold text-neutral-900">{filteredCourses.length}</span>{" "}
            courses
          </p>
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-neutral-50 rounded-3xl border border-neutral-200">
            <p className="text-heading-xs font-semibold text-neutral-800">
              No courses found matching &ldquo;{search}&rdquo;
            </p>
            <p className="text-body-s text-neutral-500 mt-2">
              Try adjusting your search keywords or choosing a different category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedCat("all");
              }}
              className="mt-6 px-6 py-2.5 rounded-full bg-primary-600 text-white text-label-s font-semibold hover:bg-primary-700"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center text-neutral-500">Loading catalog...</div>}>
      <CourseCatalogContent />
    </Suspense>
  );
}
