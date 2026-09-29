import React from "react";
import Image from "next/image";
import { Search, Star } from "lucide-react";

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
    <section className="relative w-full min-h-[720px] sm:min-h-[800px] lg:min-h-[880px] xl:h-[940px] flex flex-col items-center bg-[#003be2] hero-grid-bg text-white overflow-hidden select-none">
      {/* ========================================================= */}
      {/* LAYER 1: 3D Floating SVGs anchored to edges               */}
      {/* ========================================================= */}

      {/* 1. Spiral Lime (Top-Left) */}
      <div className="absolute -left-6 sm:-left-8 lg:-left-12 top-[18%] sm:top-[20%] w-32 sm:w-44 md:w-56 lg:w-68 xl:w-76 aspect-square pointer-events-none animate-float-slow z-10">
        <Image
          src="/svgs/spiral-lime.svg"
          alt="Lime 3D Spiral"
          fill
          className="object-contain"
        />
      </div>

      {/* 2. Spiral White 1 (Middle-Left) */}
      <div className="absolute left-[4%] sm:left-[6%] lg:left-[8%] top-[38%] sm:top-[40%] w-18 sm:w-24 md:w-30 lg:w-36 aspect-square pointer-events-none animate-float-reverse z-10">
        <Image
          src="/svgs/spiral-white-1.svg"
          alt="White 3D Spring"
          fill
          className="object-contain"
        />
      </div>

      {/* 3. Cylinder Lime / Grey (Top-Right) */}
      <div className="absolute -right-6 sm:-right-8 lg:-right-12 top-[14%] sm:top-[16%] w-36 sm:w-50 md:w-64 lg:w-76 xl:w-88 aspect-square pointer-events-none animate-float-slow z-10">
        <Image
          src="/svgs/cylinder-lime.svg"
          alt="Lime 3D Cylinder"
          fill
          className="object-contain"
        />
      </div>

      {/* 4. Pyramid Prism White (Middle-Right) */}
      <div className="absolute right-[4%] sm:right-[6%] lg:right-[8%] top-[38%] sm:top-[40%] w-18 sm:w-24 md:w-30 lg:w-36 aspect-square pointer-events-none animate-float-reverse z-10">
        <Image
          src="/svgs/pyramid-white.svg"
          alt="White 3D Pyramid"
          fill
          className="object-contain"
        />
      </div>

      {/* 5. Spiral White 2 (Bottom-Right) */}
      <div className="absolute -right-6 sm:-right-8 lg:-right-12 bottom-0 w-32 sm:w-46 md:w-58 lg:w-70 xl:w-80 aspect-square pointer-events-none animate-float-slow z-10">
        <Image
          src="/svgs/spiral-white-2.svg"
          alt="White 3D Coil"
          fill
          className="object-contain"
        />
      </div>

      {/* ========================================================= */}
      {/* LAYER 2: Foreground Headline, Subtitle & Search Bar       */}
      {/* ========================================================= */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 pt-24 sm:pt-28 md:pt-32 lg:pt-36 max-w-4xl mx-auto w-full">
        {/* Main Hero Headline */}
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.14] drop-shadow-sm">
          Get Access to Hundreds<br />Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-3.5 sm:mt-4 text-sm sm:text-base lg:text-[17px] text-white/90 max-w-xl mx-auto font-normal leading-relaxed drop-shadow-xs px-2">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Centered Search Pill Bar (Server-rendered Next.js GET form) */}
        <form
          action="/courses"
          method="GET"
          className="mt-6 sm:mt-7 w-full max-w-[340px] sm:max-w-md md:max-w-lg mx-auto"
        >
          <div className="flex items-center bg-white rounded-full pl-4 pr-1.5 py-1.5 shadow-2xl transition-all hover:shadow-primary-950/20 focus-within:ring-2 focus-within:ring-[#CEF001]">
            <Search className="w-4 h-4 sm:w-5 h-5 text-neutral-400 shrink-0 mr-2.5" />
            <input
              type="text"
              name="q"
              placeholder="Course, topic, creator"
              className="w-full min-w-0 bg-transparent text-neutral-800 placeholder-neutral-400 text-xs sm:text-sm md:text-[15px] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#CEF001] hover:bg-[#bde200] active:scale-95 text-neutral-950 font-bold px-4 sm:px-7 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-[15px] transition-all duration-150 shrink-0 cursor-pointer shadow-sm"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* ========================================================================= */}
      {/* LAYER 3: Bottom Visual Assembly (bottomcircle.svg + person.svg + cards)  */}
      {/* Pinned to bottom-0 of the coded royal blue grid background               */}
      {/* ========================================================================= */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1149px] h-[360px] sm:h-[420px] md:h-[460px] lg:h-[500px] flex items-end justify-center pointer-events-none z-20">
        
        {/* 1. Vector Lime Arc (bottomcircle.svg) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1149px] pointer-events-none z-10">
          <Image
            src="/svgs/bottomcircle.svg"
            alt="ByteSpace Lime Arc"
            width={1149}
            height={442}
            className="w-full h-auto object-bottom"
            priority
          />
        </div>

        {/* 2. White 3D Donut (Overlapping bottom-left arc of the circle) */}
        <div className="absolute left-[0%] sm:left-[2%] lg:left-[4%] bottom-0 w-32 sm:w-46 md:w-58 lg:w-72 aspect-square pointer-events-none animate-float-slow z-15">
          <Image
            src="/svgs/donut-white.svg"
            alt="White 3D Donut"
            fill
            className="object-contain"
          />
        </div>

        {/* 3. Middle Overlay Person with Laptop & Headphones (person.svg) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] max-w-[500px] sm:max-w-[560px] md:max-w-[620px] lg:max-w-[660px] pointer-events-none z-20">
          <Image
            src="/svgs/person.svg"
            alt="ByteSpace Student"
            width={722}
            height={689}
            className="w-full h-auto object-bottom"
            priority
          />
        </div>

        {/* 4. Card 1: UI/UX Design (Left of student) */}
        <div className="absolute left-[4%] sm:left-[8%] md:left-[12%] lg:left-[16%] top-[10%] sm:top-[14%] lg:top-[18%] z-30 bg-white text-neutral-900 rounded-xl sm:rounded-2xl shadow-xl shadow-blue-950/20 px-3.5 py-2 sm:px-4 sm:py-2.5 border border-white/90 hover:scale-105 transition-transform cursor-pointer pointer-events-auto">
          <h3 className="font-heading text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
            UI/UX Design
          </h3>
          <p className="text-[9px] sm:text-xs text-neutral-500 font-medium whitespace-nowrap mt-0.5">
            200 Courses &bull; 1000+ Students
          </p>
        </div>

        {/* 5. Card 2: Learning Progress 55% (Right of student) */}
        <div className="absolute right-[4%] sm:right-[8%] md:right-[12%] lg:right-[16%] top-[14%] sm:top-[18%] lg:top-[22%] z-30 bg-white text-neutral-900 rounded-xl sm:rounded-2xl shadow-xl shadow-blue-950/20 px-3.5 py-2.5 sm:px-5 sm:py-3.5 border border-white/90 min-w-[125px] sm:min-w-[165px] md:min-w-[190px] hover:scale-105 transition-transform pointer-events-auto">
          <p className="text-[9px] sm:text-xs text-neutral-500 font-medium">
            Learning Progress
          </p>
          <p className="font-heading text-base sm:text-2xl md:text-3xl font-bold text-neutral-900 my-0.5 sm:my-1">
            55%
          </p>
          <div className="w-full h-1.5 sm:h-2 rounded-full bg-neutral-100 overflow-hidden">
            <div className="w-[55%] h-full bg-[#CEF001] rounded-full" />
          </div>
        </div>

        {/* 6. Card 3: Happy Students (Bottom-Left over lime arc & donut) */}
        <div className="absolute left-[2%] sm:left-[5%] md:left-[8%] lg:left-[11%] bottom-[8%] sm:bottom-[12%] lg:bottom-[15%] z-30 bg-white text-neutral-900 rounded-xl sm:rounded-2xl shadow-xl shadow-blue-950/20 px-3 py-2 sm:px-4 sm:py-3 border border-white/90 hover:scale-105 transition-transform pointer-events-auto max-w-[250px]">
          <div>
            <p className="font-heading text-[11px] sm:text-sm font-bold text-neutral-900 leading-none">
              Happy Students
            </p>
            <div className="flex items-center gap-1 mt-1 text-[9px] sm:text-xs text-neutral-600 font-semibold">
              <span>4.5</span>
              <span className="text-neutral-400 font-normal">(240)</span>
              <Star className="w-3 h-3 fill-amber-400 text-amber-400 ml-0.5" />
            </div>
          </div>

          {/* Overlapping User Avatars + 2K+ pill */}
          <div className="flex items-center -space-x-1.5 sm:-space-x-2 mt-1.5 sm:mt-2">
            {STUDENT_AVATARS.map((avatarUrl, idx) => (
              <div
                key={idx}
                className="relative w-5 h-5 sm:w-7 sm:h-7 rounded-full overflow-hidden ring-2 ring-white"
              >
                <Image
                  src={avatarUrl}
                  alt="Student avatar"
                  fill
                  sizes="28px"
                  className="object-cover"
                />
              </div>
            ))}
            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#CEF001] text-neutral-950 font-bold text-[8px] sm:text-[10px] flex items-center justify-center ring-2 ring-white">
              2K+
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
