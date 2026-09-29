"use client";

import React from "react";
import Image from "next/image";
import { Search, Star } from "lucide-react";
import { motion } from "framer-motion";

const STUDENT_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80",
];

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] xs:h-[640px] sm:h-[760px] md:h-[880px] lg:h-[960px] flex flex-col items-center bg-[#003be2] hero-grid-bg text-white overflow-hidden select-none">
      {/* ========================================================= */}
      {/* LAYER 1: 3D Floating SVGs (Desktop/Tablet Flanks Only)     */}
      {/* ========================================================= */}

      {/* 1. Spiral Lime (Flies in from LEFT) */}
      <motion.div
        initial={{ opacity: 0, x: -280, rotate: -25 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 70, delay: 0.15 }}
        className="hidden md:block absolute -left-6 sm:-left-8 lg:-left-12 top-[18%] sm:top-[20%] w-32 sm:w-44 md:w-56 lg:w-68 xl:w-76 aspect-square pointer-events-none z-10"
      >
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/svgs/spiral-lime.svg"
            alt="Lime 3D Spiral"
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* 2. Spiral White 1 (Flies in from LEFT) */}
      <motion.div
        initial={{ opacity: 0, x: -220, scale: 0.7 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 70, delay: 0.25 }}
        className="hidden md:block absolute left-[4%] sm:left-[6%] lg:left-[18%] top-[38%] sm:top-[40%] w-18 sm:w-24 md:w-30 lg:w-36 aspect-square pointer-events-none z-10"
      >
        <motion.div
          animate={{ y: [0, 10, -6, 0], rotate: [0, -6, 6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="relative w-full h-full"
        >
          <Image
            src="/svgs/spiral-white-1.svg"
            alt="White 3D Spring"
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* 3. Cylinder Lime / Grey (Flies in from RIGHT) */}
      <motion.div
        initial={{ opacity: 0, x: 280, rotate: 25 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 70, delay: 0.15 }}
        className="hidden md:block absolute -right-6 sm:-right-8 lg:-right-40 top-[14%] sm:top-[16%] w-36 sm:w-50 md:w-64 lg:w-76 xl:w-88 aspect-square pointer-events-none z-10"
      >
        <motion.div
          animate={{ y: [0, 14, -4, 0], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/svgs/cylinder-lime.svg"
            alt="Lime 3D Cylinder"
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* 4. Pyramid Prism White (Flies in from RIGHT) */}
      <motion.div
        initial={{ opacity: 0, x: 220, scale: 0.7 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 70, delay: 0.25 }}
        className="hidden md:block absolute right-[4%] sm:right-[6%] lg:right-[25%] top-[38%] sm:top-[40%] w-18 sm:w-24 md:w-30 lg:w-36 aspect-square pointer-events-none z-10"
      >
        <motion.div
          animate={{ y: [0, -10, 8, 0], rotate: [0, 6, -6, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="relative w-full h-full"
        >
          <Image
            src="/svgs/pyramid-white.svg"
            alt="White 3D Pyramid"
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* 5. Spiral White 2 (Flies in from RIGHT) */}
      <motion.div
        initial={{ opacity: 0, x: 260, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 70, delay: 0.35 }}
        className="hidden md:block absolute -right-6 sm:-right-8 lg:right-48 bottom-0 w-32 sm:w-46 md:w-58 lg:w-70 aspect-square pointer-events-none z-10"
      >
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, -8, 4, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="relative w-full h-full"
        >
          <Image
            src="/svgs/spiral-white-2.svg"
            alt="White 3D Coil"
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* ========================================================= */}
      {/* LAYER 2: Foreground Headline, Subtitle & Search Bar       */}
      {/* ========================================================= */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 pt-20 xs:pt-22 sm:pt-24 md:pt-28 lg:pt-32 max-w-4xl mx-auto w-full">
        {/* Main Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.18] sm:leading-[1.14] drop-shadow-sm max-w-xs xs:max-w-md sm:max-w-none"
        >
          Get Access to Hundreds<br className="hidden xs:inline" /> Courses Available
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-2.5 sm:mt-3.5 text-xs sm:text-base lg:text-[17px] text-white/90 max-w-xs xs:max-w-md sm:max-w-xl mx-auto font-normal leading-relaxed drop-shadow-xs px-2"
        >
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </motion.p>

        {/* Centered Search Pill Bar */}
        <motion.form
          initial={{ opacity: 0, y: 20, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          action="/courses"
          method="GET"
          className="mt-3.5 sm:mt-6 w-full max-w-[300px] xs:max-w-[340px] sm:max-w-md md:max-w-lg mx-auto"
        >
          <div className="flex items-center bg-white rounded-full pl-3.5 sm:pl-4 pr-1 sm:pr-1.5 py-1 sm:py-1.5 shadow-2xl transition-all hover:shadow-primary-950/20 focus-within:ring-2 focus-within:ring-[#CEF001]">
            <Search className="w-3.5 h-3.5 sm:w-5 h-5 text-neutral-400 shrink-0 mr-2" />
            <input
              type="text"
              name="q"
              placeholder="Course, topic, creator"
              className="w-full min-w-0 bg-transparent text-neutral-800 placeholder-neutral-400 text-xs sm:text-sm md:text-[15px] focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="bg-[#CEF001] hover:bg-[#bde200] text-neutral-950 font-bold px-3.5 sm:px-7 py-1.5 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-[15px] transition-colors shrink-0 cursor-pointer shadow-sm"
            >
              Search
            </motion.button>
          </div>
        </motion.form>
      </div>

      {/* ========================================================================= */}
      {/* LAYER 3: Bottom Visual Assembly (Person, Arc, & Responsive Cards)         */}
      {/* ========================================================================= */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1149px] h-[310px] xs:h-[340px] sm:h-[420px] md:h-[460px] lg:h-[500px] flex items-end justify-center pointer-events-none z-20 overflow-hidden sm:overflow-visible">
        
        {/* 1. Vector Lime Arc (bottomcircle.svg - Appears by RISING from deep BOTTOM) */}
        <motion.div
          initial={{ opacity: 0, y: 380, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", damping: 22, stiffness: 65, delay: 0.2 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130%] xs:w-[115%] sm:w-full max-w-[620px] sm:max-w-[1000px] lg:max-w-[1080px] pointer-events-none z-10"
        >
          <Image
            src="/svgs/bottomcircle.svg"
            alt="ByteSpace Lime Arc"
            width={1149}
            height={442}
            className="w-full h-auto object-bottom"
            priority
          />
        </motion.div>

        {/* 2. White 3D Donut (Flies in from the LEFT side - Desktop/Tablet only) */}
        <motion.div
          initial={{ opacity: 0, x: -240, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 75, delay: 0.3 }}
          className="hidden sm:block absolute left-[3%] sm:left-[6%] lg:left-[-5%] bottom-1 sm:bottom-2 w-28 sm:w-38 md:w-50 lg:w-62 aspect-square pointer-events-none z-15"
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 8, -6, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="relative w-full h-full"
          >
            <Image
              src="/svgs/donut-white.svg"
              alt="White 3D Donut"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        {/* 3. Middle Overlay Person (Appears by RISING up majestically from BOTTOM) */}
        <motion.div
          initial={{ opacity: 0, y: 480 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 22, stiffness: 60, delay: 0.35 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[72%] xs:w-[68%] sm:w-[85%] max-w-[310px] sm:max-w-[500px] lg:max-w-[550px] pointer-events-none z-20"
        >
          <Image
            src="/svgs/person.svg"
            alt="ByteSpace Student"
            width={722}
            height={544}
            className="w-full h-auto object-bottom"
            priority
          />
        </motion.div>

        {/* 4. Card 1: UI/UX Design (Flies in from LEFT side) */}
        <motion.div
          initial={{ opacity: 0, x: -140, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", damping: 18, stiffness: 85, delay: 0.55 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="absolute left-1 xs:left-2 sm:left-[11%] lg:left-[23%] top-[10%] sm:top-[22%] lg:top-[26%] z-30 bg-white text-neutral-900 rounded-xl sm:rounded-2xl shadow-xl shadow-blue-950/20 px-2.5 py-1.5 xs:px-3 xs:py-2 sm:px-4 sm:py-2.5 border border-white/90 cursor-pointer pointer-events-auto scale-[0.78] xs:scale-[0.88] sm:scale-100 origin-top-left"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          >
            <h3 className="font-heading text-[11px] xs:text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
              UI/UX Design
            </h3>
            <p className="text-[8px] xs:text-[9px] sm:text-xs text-neutral-500 font-medium whitespace-nowrap mt-0.5">
              200 Courses &bull; 1000+ Students
            </p>
          </motion.div>
        </motion.div>

        {/* 5. Card 2: Learning Progress 55% (Flies in from RIGHT side) */}
        <motion.div
          initial={{ opacity: 0, x: 140, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", damping: 18, stiffness: 85, delay: 0.65 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="absolute right-1 xs:right-2 sm:right-[11%] lg:right-[26%] top-[14%] sm:top-[26%] lg:top-[30%] z-30 bg-white text-neutral-900 rounded-xl sm:rounded-2xl shadow-xl shadow-blue-950/20 px-2.5 py-2 xs:px-3.5 xs:py-2.5 sm:px-5 sm:py-3.5 border border-white/90 min-w-[105px] xs:min-w-[125px] sm:min-w-[165px] md:min-w-[190px] cursor-pointer pointer-events-auto scale-[0.78] xs:scale-[0.88] sm:scale-100 origin-top-right"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <p className="text-[8px] xs:text-[9px] sm:text-xs text-neutral-500 font-medium">
              Learning Progress
            </p>
            <p className="font-heading text-sm xs:text-base sm:text-2xl md:text-3xl font-bold text-neutral-900 my-0.5 sm:my-1">
              55%
            </p>
            <div className="w-full h-1 xs:h-1.5 sm:h-2 rounded-full bg-neutral-100 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "55%" }}
                transition={{ duration: 1.2, delay: 1.1, ease: "easeOut" }}
                className="h-full bg-[#CEF001] rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* 6. Card 3: Happy Students (Flies in from LEFT side - visible on laptop/desktop/tablet, hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -160, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", damping: 18, stiffness: 85, delay: 0.75 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="hidden sm:block absolute left-[3%] sm:left-[6%] lg:left-[16%] xl:left-[18%] bottom-[8%] sm:bottom-[11%] lg:bottom-[14%] z-30 bg-white text-neutral-900 rounded-xl sm:rounded-2xl shadow-xl shadow-blue-950/20 px-3 py-2 sm:px-4 sm:py-3 border border-white/90 cursor-pointer pointer-events-auto max-w-[260px]"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
          >
            <div>
              <p className="font-heading text-xs sm:text-sm font-bold text-neutral-900 leading-none">
                Happy Students
              </p>
              <div className="flex items-center gap-1 mt-1 text-[9px] sm:text-xs text-neutral-600 font-semibold">
                <span>4.5</span>
                <span className="text-neutral-400 font-normal">(240)</span>
                <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400 ml-0.5" />
              </div>
            </div>

            {/* Overlapping User Avatars + 2K+ pill */}
            <div className="flex items-center -space-x-1.5 sm:-space-x-2 mt-1.5 sm:mt-2">
              {STUDENT_AVATARS.map((avatarUrl, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 + idx * 0.08 }}
                  className="relative w-5 h-5 sm:w-7 sm:h-7 rounded-full overflow-hidden ring-2 ring-white shrink-0"
                >
                  <Image
                    src={avatarUrl}
                    alt="Student avatar"
                    fill
                    sizes="28px"
                    className="object-cover"
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.5 }}
                className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#CEF001] text-neutral-950 font-bold text-[8px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shrink-0"
              >
                2K+
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
