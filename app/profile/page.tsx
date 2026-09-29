"use client";

import React, { useState, useMemo, useRef, useEffect, Suspense } from "react";
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

  // Filter creator's courses (first 6 items by default matching screenshot)
  const creatorCourses = useMemo(() => {
    let result = (coursesData as Course[]).filter((c) => {
      const matchesLevel =
        !selectedLevel ||
        selectedLevel === "All Levels" ||
        c.level?.toLowerCase() === selectedLevel.toLowerCase();

      const matchesCategory =
        selectedCategory === "All Categories" ||
        c.category?.toLowerCase() === selectedCategory.toLowerCase();

      return matchesLevel && matchesCategory;
    });

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result.slice(0, 6);
  }, [selectedLevel, selectedCategory, sortBy]);

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
              {/* Filter Button */}
              <button
                type="button"
                onClick={() => setFilterPanelOpen(!filterPanelOpen)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  filterPanelOpen
                    ? "bg-neutral-900 text-white border-neutral-900 shadow-xs"
                    : "border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filter</span>
              </button>

              {/* Level Dropdown Button */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setLevelDropdownOpen(!levelDropdownOpen);
                    setCategoryDropdownOpen(false);
                    setSortDropdownOpen(false);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                    selectedLevel
                      ? "bg-neutral-900 text-white border-neutral-900 shadow-xs"
                      : "border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>{selectedLevel || "Level"}</span>
                  <ChevronDown className="w-3.5 h-3.5 ml-0.5" />
                </button>

                {levelDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-30">
                    {LEVEL_OPTIONS.map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(lvl === "All Levels" ? null : lvl);
                          setLevelDropdownOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-2 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 text-left cursor-pointer"
                      >
                        <span>{lvl}</span>
                        {(lvl === "All Levels" ? !selectedLevel : selectedLevel === lvl) && (
                          <Check className="w-3.5 h-3.5 text-[#003be2]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Dropdown Button */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setCategoryDropdownOpen(!categoryDropdownOpen);
                    setLevelDropdownOpen(false);
                    setSortDropdownOpen(false);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                    selectedCategory !== "All Categories"
                      ? "bg-neutral-900 text-white border-neutral-900 shadow-xs"
                      : "border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>{selectedCategory === "All Categories" ? "Category" : selectedCategory}</span>
                  <ChevronDown className="w-3.5 h-3.5 ml-0.5" />
                </button>

                {categoryDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-30">
                    {CATEGORY_OPTIONS.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setCategoryDropdownOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-2 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 text-left cursor-pointer"
                      >
                        <span>{cat}</span>
                        {selectedCategory === cat && (
                          <Check className="w-3.5 h-3.5 text-[#003be2]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
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
                <ChevronDown className="w-3.5 h-3.5 ml-0.5" />
              </button>

              {sortDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-30">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setSortBy(opt.id);
                        setSortDropdownOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-4 py-2 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 text-left cursor-pointer"
                    >
                      <span>{opt.label}</span>
                      {sortBy === opt.id && <Check className="w-3.5 h-3.5 text-[#003be2]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Course Cards Grid (6 courses matching the screenshot) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
            {creatorCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
