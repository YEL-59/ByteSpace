"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  ChevronDown,
  SlidersHorizontal,
  BarChart2,
  LayoutGrid,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import CourseCard from "@/components/home/CourseCard";
import coursesData from "@/data/courses.json";
import { Course } from "@/types";

const CATEGORY_TABS = [
  { id: "featured", label: "Featured" },
  { id: "music", label: "Music" },
  { id: "drawing-painting", label: "Drawing & Painting" },
  { id: "marketing", label: "Marketing" },
  { id: "animation", label: "Animation" },
  { id: "social-media", label: "Social Media" },
  { id: "ui-ux", label: "UI/UX Design" },
  { id: "creative-marketing", label: "Creative Marketing" },
  { id: "cooking", label: "Cooking" },
];

const ITEMS_PER_PAGE = 9;

function CourseCatalogContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [search, setSearch] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("relevant");
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  // Filter courses based on search, active tab category, and level
  const filteredCourses = useMemo(() => {
    return (coursesData as Course[]).filter((course) => {
      // Category filter (if "featured", show all/featured)
      const matchesCategory =
        activeTab === "featured" ||
        course.categoryId === activeTab ||
        course.category.toLowerCase().includes(activeTab.replace("-", " "));

      // Search keyword filter
      const query = search.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        course.title.toLowerCase().includes(query) ||
        course.instructor.name.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query);

      // Level filter
      const matchesLevel =
        !selectedLevel ||
        course.level?.toLowerCase() === selectedLevel.toLowerCase();

      return matchesCategory && matchesSearch && matchesLevel;
    });
  }, [search, activeTab, selectedLevel]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / ITEMS_PER_PAGE));
  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ======================================================================= */}
      {/* SECTION 1: Blue Hero Section with Search & Dropdown                     */}
      {/* ======================================================================= */}
      <section className="bg-[#003be2] hero-grid-bg text-white pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-tight">
            Find Your Next Course
          </h1>

          {/* Unified Pill Search Bar */}
          <div className="mt-8 flex items-center justify-center gap-2.5 sm:gap-3 w-full max-w-2xl mx-auto">
            {/* White Search Input Pill */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 absolute left-4 sm:left-5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search"
                className="w-full pl-11 sm:pl-13 pr-5 py-3 sm:py-3.5 rounded-full bg-white text-neutral-900 placeholder:text-neutral-400 text-sm sm:text-base focus:outline-none shadow-xl border border-white/20 transition-all"
              />
            </div>

            {/* Lime "Courses ▾" Dropdown Button */}
            <div className="relative">
              <button
                type="button"
                className="bg-[#CEF001] hover:bg-[#bde200] text-neutral-950 font-bold px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-base flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-xl transition-transform active:scale-95 shrink-0"
              >
                <span>Courses</span>
                <ChevronDown className="w-4 h-4 text-neutral-950 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* SECTION 2: Filters, Category Pills, Course Grid & Pagination           */}
      {/* ======================================================================= */}
      <section className="py-10 sm:py-14 bg-white flex-1">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Top Control Bar: Filters & Sorting */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100">
            {/* Left Filter Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {/* Filter Button */}
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveTab("featured");
                  setSelectedLevel(null);
                  setCurrentPage(1);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 text-xs sm:text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-colors cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-600" />
                <span>Filter</span>
              </button>

              {/* Level Dropdown Button */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLevelDropdownOpen(!levelDropdownOpen)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                    selectedLevel
                      ? "bg-neutral-900 text-white border-neutral-900"
                      : "border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>{selectedLevel || "Level"}</span>
                  <ChevronDown className="w-3.5 h-3.5 ml-0.5" />
                </button>

                {levelDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-30">
                    {["All Levels", "Beginner", "Intermediate", "Advanced"].map(
                      (lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => {
                            setSelectedLevel(lvl === "All Levels" ? null : lvl);
                            setLevelDropdownOpen(false);
                            setCurrentPage(1);
                          }}
                          className="w-full text-left px-4 py-2 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50"
                        >
                          {lvl}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Category Dropdown Pill */}
              <button
                type="button"
                onClick={() => handleTabChange("featured")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 text-xs sm:text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-colors cursor-pointer"
              >
                <LayoutGrid className="w-3.5 h-3.5 text-neutral-600" />
                <span>Category</span>
              </button>
            </div>

            {/* Right Sort Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 text-xs sm:text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-colors cursor-pointer"
              >
                <ArrowUpDown className="w-3.5 h-3.5 text-neutral-600" />
                <span>
                  {sortBy === "relevant"
                    ? "Most relevant"
                    : sortBy === "rating"
                    ? "Highest rated"
                    : "Newest"}
                </span>
                <ChevronDown className="w-3.5 h-3.5 ml-0.5" />
              </button>

              {sortDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-30">
                  {[
                    { id: "relevant", label: "Most relevant" },
                    { id: "rating", label: "Highest rated" },
                    { id: "newest", label: "Newest" },
                  ].map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => {
                        setSortBy(option.id);
                        setSortDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Category Tabs Row */}
          <div className="flex items-center gap-2.5 overflow-x-auto scrollbar-none py-5">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#CEF001] text-neutral-950 font-bold shadow-xs"
                      : "bg-[#F3F4F6] text-neutral-700 hover:bg-[#E5E7EB] font-medium"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* =================================================================== */}
          {/* Course Cards Grid (9 items per page, 3x3 layout)                    */}
          {/* =================================================================== */}
          {paginatedCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
              {paginatedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-neutral-50 rounded-3xl border border-neutral-200 my-8">
              <p className="font-heading text-lg font-bold text-neutral-800">
                No courses found matching &ldquo;{search}&rdquo;
              </p>
              <p className="text-sm text-neutral-500 mt-2">
                Try searching for another keyword or select a different category tab.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveTab("featured");
                  setSelectedLevel(null);
                }}
                className="mt-6 px-6 py-2.5 rounded-full bg-[#CEF001] text-neutral-950 font-bold text-sm hover:bg-[#bde200] transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* =================================================================== */}
          {/* Pagination Controls                                                */}
          {/* =================================================================== */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-14 sm:mt-16 pt-6 border-t border-neutral-100">
              {/* Previous Button */}
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isCurrent = pageNum === currentPage;
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-full text-sm font-semibold transition-all cursor-pointer flex items-center justify-center ${
                      isCurrent
                        ? "bg-[#CEF001] text-neutral-950 shadow-xs font-bold"
                        : "text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Button */}
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#003be2] flex items-center justify-center text-white">
          Loading courses catalog...
        </div>
      }
    >
      <CourseCatalogContent />
    </Suspense>
  );
}
