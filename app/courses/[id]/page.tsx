"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Star,
  Play,
  Share2,
  Users,
  BarChart2,
  CheckCircle2,
  FileText,
  Video,
  Award,
  MessageSquare,
  ArrowLeft,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import coursesData from "@/data/courses.json";
import { Course } from "@/types";

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params?.id as string;

  // Find course or fallback to first course
  const course =
    (coursesData as Course[]).find((c) => c.id === courseId) || coursesData[0];

  const [activeTab, setActiveTab] = useState<"about" | "lessons" | "reviews">("about");
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [selectedReviewRating, setSelectedReviewRating] = useState<number | null>(null);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  const SAMPLE_LESSONS = [
    { num: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
    { num: "02", title: "Design Principles for Impacts", duration: "21 mins" },
    { num: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
    { num: "04", title: "Workflow Automation & Vector Systems", duration: "28 mins" },
    { num: "05", title: "Asset Packaging & Export Strategies", duration: "19 mins" },
  ];

  const KEY_POINTS = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ];

  const SNEAK_PEEK_IMAGES = [
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      {/* ======================================================================= */}
      {/* SECTION 1: Blue Hero Section with Video & Course Overview               */}
      {/* ======================================================================= */}
      <section className="bg-[#003be2] hero-grid-bg text-white pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          {/* Top Breadcrumb & Share */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Courses</span>
            </Link>

            {/* Share Button */}
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#CEF001] hover:bg-[#bde200] text-neutral-950 font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer shrink-0"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedShare ? "Link Copied!" : "Share"}</span>
            </button>
          </div>

          {/* Main Title & Subtitle */}
          <div className="max-w-3xl">
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-tight">
              {course.title || "Build Digital Asset: A Comprehensive Guide"}
            </h1>
            <p className="mt-2 text-white/90 text-sm sm:text-base font-normal leading-relaxed">
              Unlock the Power of Digital Creation with Expert Guidance
            </p>

            <p className="mt-2 text-xs sm:text-sm text-white/80">
              by{" "}
              <span className="text-[#CEF001] font-semibold hover:underline cursor-pointer">
                {course.instructor?.name || "purepearl studio"}
              </span>
            </p>

            {/* Three Info Badges (Pills) */}
            <div className="flex items-center gap-2.5 sm:gap-3 mt-4 flex-wrap">
              {/* Level Pill */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-neutral-800 text-xs sm:text-sm font-semibold shadow-xs">
                <BarChart2 className="w-3.5 h-3.5 text-neutral-600" />
                <span>{course.level || "Intermediate"}</span>
              </div>

              {/* Rating Pill */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-neutral-800 text-xs sm:text-sm font-semibold shadow-xs">
                <Star className="w-3.5 h-3.5 fill-[#003be2] text-[#003be2]" />
                <span>{course.rating.toFixed(1)} ({course.reviewsCount || 172} reviews)</span>
              </div>

              {/* Students Count Pill */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-neutral-800 text-xs sm:text-sm font-semibold shadow-xs">
                <Users className="w-3.5 h-3.5 text-neutral-600" />
                <span>199 Students</span>
              </div>
            </div>
          </div>

          {/* Video Preview Card placed in Hero */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full rounded-[28px] overflow-hidden shadow-2xl bg-neutral-900 border border-white/10 group">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                  alt="Course Video Preview"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                {/* Center Glass Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.94 }}
                    type="button"
                    onClick={() => setIsPlayingVideo(true)}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/75 backdrop-blur-md flex items-center justify-center text-neutral-900 shadow-2xl cursor-pointer hover:bg-white transition-all pl-1"
                    aria-label="Play Course Video Preview"
                  >
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-neutral-900 text-neutral-900" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* SECTION 2: Body Content (Left: Tabs & Info, Right: Sticky Sidebar Card) */}
      {/* ======================================================================= */}
      <section className="py-10 sm:py-14 bg-white flex-1 relative">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
            {/* =================================================================== */}
            {/* Left Column: Tabs, Description, Sneak Peek, Key Points              */}
            {/* =================================================================== */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-10">
              {/* Category / Section Tabs */}
              <div className="flex items-center gap-2.5">
                {[
                  { id: "about", label: "About" },
                  { id: "lessons", label: "Lesson" },
                  { id: "reviews", label: "Reviews" },
                ].map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id as typeof activeTab)}
                      className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#CEF001] text-neutral-950 shadow-xs"
                          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab 1: ABOUT CONTENT */}
              {activeTab === "about" && (
                <div className="space-y-10">
                  {/* Description Section */}
                  <div>
                    <h2 className="font-heading text-lg sm:text-xl font-bold text-neutral-900 mb-3.5">
                      Description
                    </h2>
                    <div className="space-y-3.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      <p>
                        Embark on an enlightening exploration into the world of digital creation with our comprehensive
                        course, &ldquo;Build Digital Assets: A Comprehensive Guide.&rdquo; This transformative learning experience invites
                        you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork
                        with foundational concepts to mastering advanced techniques, this guide is meticulously curated to
                        empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                      </p>
                      <p>
                        In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational
                        concepts that form the backbone of digital asset creation. Understand the fundamental elements that
                        constitute compelling digital content and gain proficiency in leveraging these elements to communicate
                        effectively in the digital realm.
                      </p>
                      <p>
                        As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances
                        of design principles that drive impactful creations. Uncover the secrets behind effective visual
                        communication, exploring color theory, typography, and layout strategies that elevate your digital assets
                        to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply
                        these principles in practical scenarios.
                      </p>
                    </div>
                  </div>

                  {/* Sneak Peek Section */}
                  <div>
                    <h2 className="font-heading text-base sm:text-lg font-bold text-neutral-900 mb-3.5">
                      Sneak Peek
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                      {SNEAK_PEEK_IMAGES.map((imgUrl, i) => (
                        <div
                          key={i}
                          className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow group bg-neutral-100 border border-neutral-100"
                        >
                          <Image
                            src={imgUrl}
                            alt={`Sneak peek ${i + 1}`}
                            fill
                            sizes="(max-width: 640px) 50vw, 25vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Points Section */}
                  <div>
                    <h2 className="font-heading text-base sm:text-lg font-bold text-neutral-900 mb-3.5">
                      Key Points
                    </h2>
                    <div className="space-y-2.5">
                      {KEY_POINTS.map((point, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700">
                          <CheckCircle2 className="w-4 h-4 text-[#003be2] fill-[#003be2] text-white shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: LESSON TAB CONTENT */}
              {activeTab === "lessons" && (
                <div className="space-y-8 animate-fadeIn">
                  {/* Explore the Modules Header */}
                  <div>
                    <h2 className="font-heading text-lg sm:text-xl font-bold text-neutral-900 mb-2">
                      Explore the Modules
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-2xl">
                      Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                    </p>
                  </div>

                  {/* Lesson List */}
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-neutral-900 mb-5">
                      Lesson List
                    </h3>

                    <div className="space-y-5">
                      {[
                        {
                          module: "Module 1: Introduction to Digital Assets",
                          desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
                        },
                        {
                          module: "Module 2: Design Principles for Impact",
                          desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
                        },
                        {
                          module: "Module 4: User-Centric Design Strategies",
                          desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
                        },
                        {
                          module: "Module 5: Interactive Media and Engagement",
                          desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
                        },
                        {
                          module: "Module 6: Project Showcase and Critique",
                          desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
                        },
                        {
                          module: "Module 7: Optimizing Digital Assets for Various Platforms",
                          desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
                        },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3.5 sm:gap-4 group">
                          {/* Lime Camcorder Icon Box */}
                          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#CEF001] flex items-center justify-center shrink-0 text-neutral-950 shadow-xs transition-transform group-hover:scale-105">
                            <Video className="w-5 h-5 fill-neutral-950 text-neutral-950" />
                          </div>

                          <div className="flex-1">
                            <h4 className="font-heading text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                              {item.module}
                            </h4>
                            <p className="text-xs text-neutral-500 leading-relaxed mt-1">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lesson Content Section */}
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-neutral-900 mb-2">
                      Lesson Content
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-2xl">
                      Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                    </p>
                  </div>

                  {/* Lesson Progress Tracking */}
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-neutral-900 mb-2">
                      Lesson Progress Tracking
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-2xl mb-4">
                      Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                    </p>

                    {/* Progress Card (55%) */}
                    <div className="border border-neutral-200 rounded-2xl p-5 sm:p-6 bg-white shadow-xs max-w-xl">
                      <p className="text-xs font-semibold text-neutral-600">
                        Learning Progress
                      </p>
                      <p className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1 mb-3">
                        55%
                      </p>
                      <div className="w-full bg-neutral-100 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-[#CEF001] h-full rounded-full transition-all duration-500"
                          style={{ width: "55%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: REVIEWS TAB CONTENT */}
              {activeTab === "reviews" && (
                <div className="space-y-8 animate-fadeIn">
                  {/* Header */}
                  <div>
                    <h2 className="font-heading text-lg sm:text-xl font-bold text-neutral-900 mb-2">
                      What Learners Are Saying
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-2xl">
                      Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                    </p>
                  </div>

                  {/* Ratings Summary Card */}
                  <div className="border border-neutral-200 rounded-3xl p-6 sm:p-7 bg-white shadow-xs flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                    {/* Left Lime Block */}
                    <div className="w-26 h-26 sm:w-28 sm:h-28 rounded-2xl bg-[#CEF001] flex flex-col items-center justify-center shrink-0 text-neutral-950 shadow-xs">
                      <span className="text-xs font-semibold text-neutral-800">
                        Ratings
                      </span>
                      <span className="text-3xl sm:text-4xl font-black text-neutral-950 mt-0.5">
                        4.7
                      </span>
                    </div>

                    {/* Right Star Breakdown Bars */}
                    <div className="flex-1 w-full space-y-2">
                      {[
                        { stars: 5, percent: "82%", count: 720 },
                        { stars: 4, percent: "35%", count: 120 },
                        { stars: 3, percent: "12%", count: 21 },
                        { stars: 2, percent: "5%", count: 12 },
                        { stars: 1, percent: "6%", count: 16 },
                      ].map((row) => (
                        <div key={row.stars} className="flex items-center gap-3 text-xs">
                          {/* Progress bar */}
                          <div className="flex-1 bg-neutral-100 rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-[#CEF001] h-full rounded-full"
                              style={{ width: row.percent }}
                            />
                          </div>

                          {/* 5 black stars */}
                          <div className="flex items-center gap-0.5 text-neutral-900 shrink-0">
                            {Array.from({ length: 5 }).map((_, s) => (
                              <Star
                                key={s}
                                className={`w-3.5 h-3.5 ${
                                  s < row.stars
                                    ? "fill-neutral-900 text-neutral-900"
                                    : "fill-neutral-200 text-neutral-200"
                                }`}
                              />
                            ))}
                          </div>

                          {/* Review count */}
                          <span className="font-mono text-neutral-600 text-right w-8 shrink-0">
                            {row.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Individual Reviews Filter Chips */}
                  <div className="space-y-4 pt-2">
                    <h3 className="font-heading text-sm sm:text-base font-bold text-neutral-900">
                      Individual Reviews:
                    </h3>

                    <div className="flex items-center gap-2 flex-wrap">
                      {[
                        { id: null, label: "All rating" },
                        { id: 5, label: "★ 5" },
                        { id: 4, label: "★ 4" },
                        { id: 3, label: "★ 3" },
                        { id: 2, label: "★ 2" },
                        { id: 1, label: "★ 1" },
                      ].map((filter) => {
                        const isSelected = selectedReviewRating === filter.id;
                        return (
                          <button
                            key={filter.label}
                            type="button"
                            onClick={() => setSelectedReviewRating(filter.id)}
                            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#CEF001] text-neutral-950 shadow-xs"
                                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                            }`}
                          >
                            {filter.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Reviews Cards List */}
                  <div className="space-y-4">
                    {[
                      {
                        name: "PurePearl Studio",
                        role: "UI/UX Designer",
                        time: "a year ago",
                        rating: 5,
                        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
                        text: "“This course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!”",
                      },
                      {
                        name: "Albert Flores",
                        role: "UI/UX Designer",
                        time: "a year ago",
                        rating: 5,
                        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
                        text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I’ve learned!",
                      },
                      {
                        name: "Cody Fisher",
                        role: "UI/UX Designer",
                        time: "a year ago",
                        rating: 5,
                        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
                        text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
                      },
                      {
                        name: "Brooklyn Simmons",
                        role: "UI/UX Designer",
                        time: "a year ago",
                        rating: 5,
                        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80",
                        text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
                      },
                    ]
                      .filter(
                        (rev) =>
                          selectedReviewRating === null ||
                          rev.rating === selectedReviewRating
                      )
                      .map((rev, idx) => (
                        <div
                          key={idx}
                          className="border border-neutral-200 rounded-3xl p-6 sm:p-7 bg-white shadow-xs space-y-3.5"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-neutral-200 shrink-0">
                                <Image
                                  src={rev.avatar}
                                  alt={rev.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-heading text-xs sm:text-sm font-bold text-neutral-900">
                                  {rev.name}
                                </h4>
                                <p className="text-[11px] text-neutral-500">
                                  {rev.role}
                                </p>
                              </div>
                            </div>

                            <span className="text-[11px] text-neutral-400 font-normal">
                              {rev.time}
                            </span>
                          </div>

                          {/* 5 black stars */}
                          <div className="flex items-center gap-0.5 text-neutral-900">
                            {Array.from({ length: 5 }).map((_, s) => (
                              <Star
                                key={s}
                                className="w-3.5 h-3.5 fill-neutral-900 text-neutral-900"
                              />
                            ))}
                          </div>

                          {/* Review Body */}
                          <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal">
                            {rev.text}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* =================================================================== */}
            {/* Right Column: Sticky Sidebar Enrollment & Course Summary Card       */}
            {/* =================================================================== */}
            <div className="lg:col-span-5 xl:col-span-4 lg:-mt-64 relative z-20">
              <div className="bg-white rounded-[32px] p-6 sm:p-7 shadow-2xl border border-neutral-100 flex flex-col justify-between">
                {/* Header */}
                <h3 className="font-heading text-base sm:text-lg font-bold text-neutral-900 mb-4">
                  112 Lessons (24 hours)
                </h3>

                {/* Lessons Sample List */}
                <div className="space-y-3 pb-4 border-b border-neutral-100">
                  {SAMPLE_LESSONS.slice(0, 3).map((lesson) => (
                    <div key={lesson.num} className="flex items-center justify-between text-xs sm:text-[13px] gap-2">
                      <span className="text-neutral-800 line-clamp-1">
                        <strong className="font-mono text-neutral-400 mr-2">{lesson.num}</strong>
                        {lesson.title}
                      </span>
                      <span className="font-semibold text-[#003be2] shrink-0">
                        {lesson.duration}
                      </span>
                    </div>
                  ))}
                  <p className="text-[11px] text-neutral-400 font-medium pt-1">
                    99 more videos
                  </p>
                </div>

                {/* Callout Text */}
                <p className="text-xs text-neutral-500 mt-4 leading-relaxed">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                {/* Price Display */}
                <div className="mt-4 mb-4 flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#003be2] tracking-tight">
                    ${Math.round(course.price || 25)}
                  </span>
                  <span className="text-xs text-neutral-400 font-normal">/lifetime</span>
                </div>

                {/* Enroll Now Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => alert(`Enrolled in ${course.title} for $${Math.round(course.price || 25)}`)}
                  className="bg-[#CEF001] hover:bg-[#bde200] text-neutral-950 font-bold py-3.5 rounded-full text-sm sm:text-base w-full text-center shadow-md cursor-pointer transition-colors"
                >
                  Enroll Now
                </motion.button>

                {/* "This course include" Checklist */}
                <div className="mt-6 pt-5 border-t border-neutral-100">
                  <h4 className="font-heading text-xs sm:text-sm font-bold text-neutral-900 mb-3">
                    This course include
                  </h4>
                  <div className="space-y-2.5 text-xs text-neutral-600">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-[#003be2]" />
                      <span>Learning Resources</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Video className="w-4 h-4 text-[#003be2]" />
                      <span>Quality Lesson Videos</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-[#003be2]" />
                      <span>Certificate of Completion</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MessageSquare className="w-4 h-4 text-[#003be2]" />
                      <span>Private Consultation</span>
                    </div>
                  </div>
                </div>

                {/* Creator Profile Box */}
                <div className="mt-6 pt-5 border-t border-neutral-100">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden bg-neutral-200 shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                        alt="PurePearl Studio"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-heading text-xs sm:text-sm font-bold text-neutral-900">
                        PurePearl Studio
                      </h5>
                      <p className="text-[11px] text-neutral-400">Professional Creator</p>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-500 mt-3 leading-relaxed">
                    Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                  </p>

                  <Link
                    href="/profile"
                    className="mt-3.5 inline-block border border-neutral-200 hover:border-neutral-300 rounded-full px-5 py-2 text-xs font-semibold text-neutral-800 hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    See Full Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Preview Modal */}
      <AnimatePresence>
        {isPlayingVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-4xl bg-neutral-950 rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video flex items-center justify-center">
              <button
                type="button"
                onClick={() => setIsPlayingVideo(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
              >
                ✕
              </button>
              <div className="text-center p-6 text-white space-y-3">
                <Play className="w-16 h-16 mx-auto text-[#CEF001]" />
                <h3 className="text-xl font-bold">{course.title}</h3>
                <p className="text-sm text-neutral-400">Preview Video Demo</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
