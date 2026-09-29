"use client";

import React, { useState, useMemo, useRef, useEffect, Suspense } from "react";
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
  X,
  Check,
  RotateCcw,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

const LEVEL_OPTIONS = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const SORT_OPTIONS = [
  { id: "relevant", label: "Most relevant" },
  { id: "rating", label: "Highest rated" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
  { id: "popular", label: "Most popular" },
];

const ITEMS_PER_PAGE = 9;

function CourseCatalogContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [search, setSearch] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState("featured");
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("relevant");
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [minRating, setMinRating] = useState<number | null>(null);

  // Dropdown states
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [heroDropdownOpen, setHeroDropdownOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  // Ref for click-outside
  const controlBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        controlBarRef.current &&
        !controlBarRef.current.contains(event.target as Node)
      ) {
        setLevelDropdownOpen(false);
        setCategoryDropdownOpen(false);
        setSortDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Calculate active filter count
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (activeTab !== "featured") count++;
    if (selectedLevel) count++;
    if (maxPrice !== null) count++;
    if (minRating !== null) count++;
    if (search.trim() !== "") count++;
    return count;
  }, [activeTab, selectedLevel, maxPrice, minRating, search]);

  const resetAllFilters = () => {
    setSearch("");
    setActiveTab("featured");
    setSelectedLevel(null);
    setMaxPrice(null);
    setMinRating(null);
    setSortBy("relevant");
    setCurrentPage(1);
    setFilterPanelOpen(false);
  };

  // Filter and sort courses
  const filteredAndSortedCourses = useMemo(() => {
    const result = (coursesData as Course[]).filter((course) => {
      // 1. Category filter
      const matchesCategory =
        activeTab === "featured" ||
        course.categoryId === activeTab ||
        course.category.toLowerCase().includes(activeTab.replace("-", " "));

      // 2. Search keyword filter
      const query = search.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        course.title.toLowerCase().includes(query) ||
        course.instructor.name.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query);

      // 3. Level filter
      const matchesLevel =
        !selectedLevel ||
        selectedLevel === "All Levels" ||
        course.level?.toLowerCase() === selectedLevel.toLowerCase();

      // 4. Max price filter
      const matchesPrice = maxPrice === null || course.price <= maxPrice;

      // 5. Min rating filter
      const matchesRating = minRating === null || course.rating >= minRating;

      return (
        matchesCategory &&
        matchesSearch &&
        matchesLevel &&
        matchesPrice &&
        matchesRating
      );
    });

    // Apply Sorting
    return [...result].sort((a, b) => {
      if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      if (sortBy === "price-low") {
        return a.price - b.price;
      }
      if (sortBy === "price-high") {
        return b.price - a.price;
      }
      if (sortBy === "popular") {
        return (b.reviewsCount || 0) - (a.reviewsCount || 0);
      }
      return 0; // "relevant" default
    });
  }, [search, activeTab, selectedLevel, maxPrice, minRating, sortBy]);

  // Pagination calculation
  const totalPages = Math.max(
    1,
    Math.ceil(filteredAndSortedCourses.length / ITEMS_PER_PAGE)
  );

  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedCourses.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );
  }, [filteredAndSortedCourses, currentPage]);

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
          <div className="mt-8 flex items-center justify-center gap-2.5 sm:gap-3 w-full max-w-2xl mx-auto relative">
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
                className="w-full pl-11 sm:pl-13 pr-10 py-3 sm:py-3.5 rounded-full bg-white text-neutral-900 placeholder:text-neutral-400 text-sm sm:text-base focus:outline-none shadow-xl border border-white/20 transition-all"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Lime "Courses ▾" Dropdown Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setHeroDropdownOpen(!heroDropdownOpen)}
                className="bg-[#CEF001] hover:bg-[#bde200] text-neutral-950 font-bold px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-base flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-xl transition-transform active:scale-95 shrink-0"
              >
                <span>Courses</span>
                <ChevronDown className={`w-4 h-4 text-neutral-950 stroke-[2.5] transition-transform ${heroDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {heroDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-neutral-100 py-2 z-40 text-left text-neutral-900">
                  <div className="px-4 py-2 text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    Browse Categories
                  </div>
                  {CATEGORY_TABS.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        handleTabChange(cat.id);
                        setHeroDropdownOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-4 py-2 text-xs sm:text-sm text-neutral-700 hover:bg-[#F4F6F8] transition-colors cursor-pointer"
                    >
                      <span>{cat.label}</span>
                      {activeTab === cat.id && <Check className="w-3.5 h-3.5 text-[#003be2]" />}
                    </button>
                  ))}
                </div>
              )}
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
          <div
            ref={controlBarRef}
            className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100 relative"
          >
            {/* Left Filter Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {/* 1. Filter Button (Toggles Advanced Filters Panel) */}
              <button
                type="button"
                onClick={() => setFilterPanelOpen(!filterPanelOpen)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  filterPanelOpen || activeFiltersCount > 0
                    ? "bg-neutral-900 text-white border-neutral-900 shadow-xs"
                    : "border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300"
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filter</span>
                {activeFiltersCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-[#CEF001] text-neutral-950 font-bold text-[10px] flex items-center justify-center -mr-1">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {/* 2. Level Dropdown Button */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setLevelDropdownOpen(!levelDropdownOpen);
                    setCategoryDropdownOpen(false);
                    setSortDropdownOpen(false);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    selectedLevel
                      ? "bg-neutral-900 text-white border-neutral-900 shadow-xs"
                      : "border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300"
                  }`}
                >
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>{selectedLevel || "Level"}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 ml-0.5 transition-transform ${
                      levelDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {levelDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-30">
                    <div className="px-4 py-1.5 text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                      Select Level
                    </div>
                    {LEVEL_OPTIONS.map((lvl) => {
                      const isSelected =
                        lvl === "All Levels"
                          ? !selectedLevel
                          : selectedLevel === lvl;
                      return (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => {
                            setSelectedLevel(lvl === "All Levels" ? null : lvl);
                            setLevelDropdownOpen(false);
                            setCurrentPage(1);
                          }}
                          className={`w-full flex items-center justify-between text-left px-4 py-2 text-xs sm:text-sm hover:bg-neutral-50 transition-colors cursor-pointer ${
                            isSelected
                              ? "font-semibold text-neutral-950 bg-neutral-50"
                              : "text-neutral-700"
                          }`}
                        >
                          <span>{lvl}</span>
                          {isSelected && (
                            <Check className="w-3.5 h-3.5 text-[#003be2]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 3. Category Dropdown Button */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setCategoryDropdownOpen(!categoryDropdownOpen);
                    setLevelDropdownOpen(false);
                    setSortDropdownOpen(false);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    activeTab !== "featured"
                      ? "bg-neutral-900 text-white border-neutral-900 shadow-xs"
                      : "border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300"
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>
                    {activeTab === "featured"
                      ? "Category"
                      : CATEGORY_TABS.find((t) => t.id === activeTab)?.label}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 ml-0.5 transition-transform ${
                      categoryDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {categoryDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-30">
                    <div className="px-4 py-1.5 text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                      Select Category
                    </div>
                    {CATEGORY_TABS.map((cat) => {
                      const isSelected = activeTab === cat.id;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => {
                            handleTabChange(cat.id);
                            setCategoryDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between text-left px-4 py-2 text-xs sm:text-sm hover:bg-neutral-50 transition-colors cursor-pointer ${
                            isSelected
                              ? "font-semibold text-neutral-950 bg-neutral-50"
                              : "text-neutral-700"
                          }`}
                        >
                          <span>{cat.label}</span>
                          {isSelected && (
                            <Check className="w-3.5 h-3.5 text-[#003be2]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Reset Clear Filters Button (When active) */}
              {activeFiltersCount > 0 && (
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear All</span>
                </button>
              )}
            </div>

            {/* Right Sort Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setSortDropdownOpen(!sortDropdownOpen);
                  setLevelDropdownOpen(false);
                  setCategoryDropdownOpen(false);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 text-xs sm:text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-colors cursor-pointer"
              >
                <ArrowUpDown className="w-3.5 h-3.5 text-neutral-600" />
                <span>
                  {SORT_OPTIONS.find((s) => s.id === sortBy)?.label}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 ml-0.5 transition-transform ${
                    sortDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {sortDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-30">
                  <div className="px-4 py-1.5 text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                    Sort Courses
                  </div>
                  {SORT_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => {
                        setSortBy(option.id);
                        setSortDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between text-left px-4 py-2 text-xs sm:text-sm hover:bg-neutral-50 transition-colors cursor-pointer ${
                        sortBy === option.id
                          ? "font-semibold text-neutral-950 bg-neutral-50"
                          : "text-neutral-700"
                      }`}
                    >
                      <span>{option.label}</span>
                      {sortBy === option.id && (
                        <Check className="w-3.5 h-3.5 text-[#003be2]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Collapsible Advanced Filter Drawer Panel */}
          <AnimatePresence>
            {filterPanelOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden border-b border-neutral-100"
              >
                <div className="py-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Price Filter */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                      Max Price: {maxPrice ? `$${maxPrice}` : "Any"}
                    </label>
                    <div className="flex items-center gap-2 flex-wrap">
                      {[25, 35, 50].map((price) => (
                        <button
                          key={price}
                          type="button"
                          onClick={() =>
                            setMaxPrice(maxPrice === price ? null : price)
                          }
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer border transition-colors ${
                            maxPrice === price
                              ? "bg-neutral-950 text-white border-neutral-950"
                              : "border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                          }`}
                        >
                          Under ${price}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Rating Filter */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                      Minimum Rating
                    </label>
                    <div className="flex items-center gap-2 flex-wrap">
                      {[4.5, 4.8].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          onClick={() =>
                            setMinRating(minRating === rating ? null : rating)
                          }
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer border transition-colors ${
                            minRating === rating
                              ? "bg-neutral-950 text-white border-neutral-950"
                              : "border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                          }`}
                        >
                          ★ {rating}+
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Reset */}
                  <div className="flex items-end justify-start sm:justify-end">
                    <button
                      type="button"
                      onClick={resetAllFilters}
                      className="px-4 py-2 rounded-full border border-neutral-200 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
                    >
                      Reset All Filters
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Category Tabs Row (100% Functional Category Filtering) */}
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
                      ? "bg-[#CEF001] text-neutral-950 font-bold shadow-xs scale-102"
                      : "bg-[#F3F4F6] text-neutral-700 hover:bg-[#E5E7EB] font-medium"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-500 pt-2 pb-4">
            <p>
              Showing{" "}
              <span className="font-bold text-neutral-900">
                {filteredAndSortedCourses.length}
              </span>{" "}
              courses
              {activeTab !== "featured" && (
                <span>
                  {" "}
                  in{" "}
                  <strong className="text-neutral-900">
                    {CATEGORY_TABS.find((t) => t.id === activeTab)?.label}
                  </strong>
                </span>
              )}
              {selectedLevel && (
                <span>
                  {" "}
                  • Level:{" "}
                  <strong className="text-neutral-900">{selectedLevel}</strong>
                </span>
              )}
            </p>
          </div>

          {/* =================================================================== */}
          {/* Course Cards Grid (9 items per page, 3x3 layout)                    */}
          {/* =================================================================== */}
          {paginatedCourses.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-4"
            >
              {paginatedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-24 bg-neutral-50 rounded-3xl border border-neutral-200 my-8">
              <p className="font-heading text-lg font-bold text-neutral-800">
                No courses found matching your filters
              </p>
              <p className="text-sm text-neutral-500 mt-2 max-w-md mx-auto">
                Try selecting a different level, category badge, or clearing search keywords.
              </p>
              <button
                type="button"
                onClick={resetAllFilters}
                className="mt-6 px-6 py-2.5 rounded-full bg-[#CEF001] text-neutral-950 font-bold text-sm hover:bg-[#bde200] transition-colors cursor-pointer shadow-xs"
              >
                Reset All Filters
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
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNum) => {
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
                }
              )}

              {/* Next Button */}
              <button
                type="button"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
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
