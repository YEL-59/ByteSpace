"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SlidersHorizontal,
  BarChart2,
  LayoutGrid,
  ArrowUpDown,
  ChevronDown,
  Check,
  CheckCircle2,
  UserPlus,
  RotateCcw,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CourseCard from "@/components/home/CourseCard";
import coursesData from "@/data/courses.json";
import { Course } from "@/types";

const LEVEL_OPTIONS = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const CATEGORY_OPTIONS = [
  "All Categories",
  "UI/UX Design",
  "Marketing",
  "Creative Marketing",
  "Social Media",
  "Animation",
  "Drawing & Painting",
  "Music",
  "Cooking",
];

const SORT_OPTIONS = [
  { id: "relevant", label: "Most relevant" },
  { id: "rating", label: "Highest rated" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
];

export default function CreatorProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(12);

  // Filters & sorting state
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [sortBy, setSortBy] = useState("relevant");
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [minRating, setMinRating] = useState<number | null>(null);

  // Dropdown menus state
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);

  const controlsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (controlsRef.current && !controlsRef.current.contains(e.target as Node)) {
        setLevelDropdownOpen(false);
        setCategoryDropdownOpen(false);
        setSortDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowersCount((prev) => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowersCount((prev) => prev + 1);
    }
  };

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedLevel) count++;
    if (selectedCategory !== "All Categories") count++;
    if (maxPrice !== null) count++;
    if (minRating !== null) count++;
    return count;
  }, [selectedLevel, selectedCategory, maxPrice, minRating]);

  const resetAllFilters = () => {
    setSelectedLevel(null);
    setSelectedCategory("All Categories");
    setMaxPrice(null);
    setMinRating(null);
    setSortBy("relevant");
    setFilterPanelOpen(false);
  };

  // Filter creator's courses (up to 6 items matching screenshot)
  const creatorCourses = useMemo(() => {
    const result = (coursesData as Course[]).filter((c) => {
      const matchesLevel =
        !selectedLevel ||
        selectedLevel === "All Levels" ||
        c.level?.toLowerCase() === selectedLevel.toLowerCase();

      const matchesCategory =
        selectedCategory === "All Categories" ||
        c.category?.toLowerCase() === selectedCategory.toLowerCase();

      const matchesPrice = maxPrice === null || c.price <= maxPrice;
      const matchesRating = minRating === null || c.rating >= minRating;

      return matchesLevel && matchesCategory && matchesPrice && matchesRating;
    });

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result.slice(0, 6);
  }, [selectedLevel, selectedCategory, maxPrice, minRating, sortBy]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      {/* ======================================================================= */}
      {/* SECTION 1: Royal Blue Creator Profile Hero Section                      */}
      {/* ======================================================================= */}
      <section className="bg-[#003be2] hero-grid-bg text-white pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          {/* Creator Profile Header */}
          <div className="flex items-start gap-4 sm:gap-5">
            {/* Creator Photo Avatar */}
            <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-lg shrink-0 border border-white/20 bg-neutral-200">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80"
                alt="PurePearl Studio"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Creator Name, Badge & Title */}
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  PurePearl Studio
                </h1>
                <span className="bg-[#CEF001] text-neutral-950 font-bold px-3 py-0.5 rounded-full text-xs shadow-xs">
                  Creator
                </span>
              </div>
              <p className="text-white/85 text-xs sm:text-sm mt-1 font-normal">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          {/* Creator Bio Paragraphs */}
          <div className="mt-5 sm:mt-6 text-xs sm:text-sm text-white/90 leading-relaxed max-w-3xl space-y-2.5 font-normal">
            <p>
              Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
            </p>
            <p>
              Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>
          </div>

          {/* Action Row: Products, Followers & Follow Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-white/15">
            {/* Products & Followers Stats Pills */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="bg-white text-neutral-900 font-bold px-5 py-2 rounded-full text-xs sm:text-sm shadow-xs">
                3 Products
              </div>
              <div className="bg-white text-neutral-900 font-bold px-5 py-2 rounded-full text-xs sm:text-sm shadow-xs">
                {followersCount} Followers
              </div>
            </div>

            {/* Follow Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="button"
              onClick={handleFollowToggle}
              className={`font-bold px-7 py-2.5 rounded-full text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-1.5 ${
                isFollowing
                  ? "bg-white text-[#003be2]"
                  : "bg-[#CEF001] hover:bg-[#bde200] text-neutral-950"
              }`}
            >
              {isFollowing ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#003be2]" />
                  <span>Following</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-3.5 h-3.5 text-neutral-950" />
                  <span>Follow</span>
                </>
              )}
            </motion.button>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* SECTION 2: Catalog Products / Courses Grid                              */}
      {/* ======================================================================= */}
      <section className="py-10 sm:py-14 bg-white flex-1">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Top Control Bar: Filters & Sorting */}
          <div
            ref={controlsRef}
            className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100 relative"
          >
            {/* Left Filter Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {/* 1. Filter Button (Toggles Advanced Filters Drawer) */}
              <button
                type="button"
                onClick={() => setFilterPanelOpen(!filterPanelOpen)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  filterPanelOpen || activeFiltersCount > 0
                    ? "bg-neutral-900 text-white border-neutral-900 shadow-xs"
                    : "border-neutral-200 text-neutral-700 hover:bg-neutral-50"
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
                      : "border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>{selectedLevel || "Level"}</span>
                  <ChevronDown className={`w-3.5 h-3.5 ml-0.5 transition-transform ${levelDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {levelDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-30">
                    <div className="px-4 py-1.5 text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                      Select Level
                    </div>
                    {LEVEL_OPTIONS.map((lvl) => {
                      const isSelected =
                        lvl === "All Levels" ? !selectedLevel : selectedLevel === lvl;
                      return (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => {
                            setSelectedLevel(lvl === "All Levels" ? null : lvl);
                            setLevelDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-4 py-2 text-xs sm:text-sm text-left hover:bg-neutral-50 transition-colors cursor-pointer ${
                            isSelected
                              ? "font-semibold text-neutral-950 bg-neutral-50"
                              : "text-neutral-700"
                          }`}
                        >
                          <span>{lvl}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#003be2]" />}
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
                    selectedCategory !== "All Categories"
                      ? "bg-neutral-900 text-white border-neutral-900 shadow-xs"
                      : "border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>{selectedCategory === "All Categories" ? "Category" : selectedCategory}</span>
                  <ChevronDown className={`w-3.5 h-3.5 ml-0.5 transition-transform ${categoryDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {categoryDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-30">
                    <div className="px-4 py-1.5 text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                      Select Category
                    </div>
                    {CATEGORY_OPTIONS.map((cat) => {
                      const isSelected = selectedCategory === cat;
                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => {
                            setSelectedCategory(cat);
                            setCategoryDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-4 py-2 text-xs sm:text-sm text-left hover:bg-neutral-50 transition-colors cursor-pointer ${
                            isSelected
                              ? "font-semibold text-neutral-950 bg-neutral-50"
                              : "text-neutral-700"
                          }`}
                        >
                          <span>{cat}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#003be2]" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Clear Filters Reset Button */}
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 text-xs sm:text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                <ArrowUpDown className="w-3.5 h-3.5 text-neutral-600" />
                <span>{SORT_OPTIONS.find((s) => s.id === sortBy)?.label}</span>
                <ChevronDown className={`w-3.5 h-3.5 ml-0.5 transition-transform ${sortDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {sortDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-30">
                  <div className="px-4 py-1.5 text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                    Sort Courses
                  </div>
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setSortBy(opt.id);
                        setSortDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-2 text-xs sm:text-sm text-left hover:bg-neutral-50 transition-colors cursor-pointer ${
                        sortBy === opt.id ? "font-semibold text-neutral-950 bg-neutral-50" : "text-neutral-700"
                      }`}
                    >
                      <span>{opt.label}</span>
                      {sortBy === opt.id && <Check className="w-3.5 h-3.5 text-[#003be2]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Advanced Collapsible Filter Drawer */}
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
                      {[25, 30, 40].map((price) => (
                        <button
                          key={price}
                          type="button"
                          onClick={() => setMaxPrice(maxPrice === price ? null : price)}
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
                          onClick={() => setMinRating(minRating === rating ? null : rating)}
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

                  {/* Reset Actions */}
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

          {/* Results Count Bar */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-500 pt-4 pb-2">
            <p>
              Showing <span className="font-bold text-neutral-900">{creatorCourses.length}</span> courses
              {selectedCategory !== "All Categories" && (
                <span> in <strong className="text-neutral-900">{selectedCategory}</strong></span>
              )}
              {selectedLevel && (
                <span> • Level: <strong className="text-neutral-900">{selectedLevel}</strong></span>
              )}
            </p>
          </div>

          {/* Course Cards Grid (6 courses matching the screenshot) */}
          {creatorCourses.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6"
            >
              {creatorCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-neutral-50 rounded-3xl border border-neutral-200 my-8">
              <p className="font-heading text-lg font-bold text-neutral-800">
                No courses found matching selected filters
              </p>
              <p className="text-sm text-neutral-500 mt-2">
                Try selecting a different level or category.
              </p>
              <button
                type="button"
                onClick={resetAllFilters}
                className="mt-5 px-6 py-2.5 rounded-full bg-[#CEF001] text-neutral-950 font-bold text-sm hover:bg-[#bde200] transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
