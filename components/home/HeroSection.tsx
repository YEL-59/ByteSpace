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
    <section className="relative w-full min-h-[760px] sm:min-h-[840px] lg:min-h-[920px] xl:h-[960px] flex flex-col justify-between items-center bg-[#003be2] hero-grid-bg text-white overflow-hidden select-none">
      {/* ========================================================= */}
      {/* LAYER 1: 3D Floating SVGs anchored to viewport edges       */}
      {/* ========================================================= */}

      {/* 1. Spiral Lime (Top-Left - Peeking over left edge) */}
      <div className="absolute -left-6 sm:-left-8 lg:-left-12 top-[19%] sm:top-[21%] w-32 sm:w-44 md:w-56 lg:w-68 xl:w-76 aspect-square pointer-events-none animate-float-slow z-10">
        <Image
          src="/svgs/spiral-lime.svg"
          alt="Lime 3D Spiral"
          fill
          className="object-contain"
        />
      </div>

      {/* 2. Spiral White 1 (Middle-Left) */}
      <div className="absolute left-[5%] sm:left-[7%] lg:left-[9%] xl:left-[11%] top-[42%] sm:top-[44%] w-18 sm:w-24 md:w-30 lg:w-36 aspect-square pointer-events-none animate-float-reverse z-10">
        <Image
          src="/svgs/spiral-white-1.svg"
          alt="White 3D Spring"
          fill
          className="object-contain"
        />
      </div>

      {/* 3. Donut Torus White (Bottom-Left - Peeking over bottom-left edge) */}
      <div className="absolute -left-6 sm:-left-8 lg:-left-12 bottom-[2%] sm:bottom-[3%] w-36 sm:w-50 md:w-64 lg:w-76 xl:w-88 aspect-square pointer-events-none animate-float-slow z-10">
        <Image
          src="/svgs/donut-white.svg"
          alt="White 3D Donut"
          fill
          className="object-contain"
        />
      </div>

      {/* 4. Cylinder Lime / Grey (Top-Right - Peeking over right edge) */}
      <div className="absolute -right-6 sm:-right-8 lg:-right-25 top-[16%] sm:top-[18%] w-36 sm:w-50 md:w-64 lg:w-76 xl:w-88 aspect-square pointer-events-none animate-float-slow z-10">
        <Image
          src="/svgs/cylinder-lime.svg"
          alt="Lime 3D Cylinder"
          fill
          className="object-contain"
        />
      </div>

      {/* 5. Pyramid Prism White (Middle-Right) */}
      <div className="absolute right-[5%] sm:right-[7%] lg:right-[9%] xl:right-[11%] top-[42%] sm:top-[44%] w-18 sm:w-24 md:w-30 lg:w-36 aspect-square pointer-events-none animate-float-reverse z-10">
        <Image
          src="/svgs/pyramid-white.svg"
          alt="White 3D Pyramid"
          fill
          className="object-contain"
        />
      </div>

      {/* 6. Spiral White 2 (Bottom-Right - Peeking over bottom-right edge) */}
      <div className="absolute -right-6 sm:-right-8 lg:-right-12 bottom-[2%] sm:bottom-[3%] w-32 sm:w-46 md:w-58 lg:w-70 xl:w-80 aspect-square pointer-events-none animate-float-slow z-10">
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

      {/* ========================================================= */}
      {/* LAYER 3: Razor-Sharp Student Visual & Floating Cards       */}
      {/* ========================================================= */}
      <div className="relative z-20 w-full max-w-[740px] sm:max-w-[820px] lg:max-w-[900px] xl:max-w-[960px] aspect-[1130/489] mt-6 sm:mt-8 mx-auto px-4 flex items-end justify-center">
        {/* Crystal-Clear Isolated Student + Lime Disc Visual (Native resolution, no blur/stretching) */}
        <Image
          src="/hero_student_transparent.png"
          alt="ByteSpace Student Learning"
          fill
          priority
          className="object-contain object-bottom pointer-events-none"
          sizes="(max-width: 960px) 100vw, 960px"
        />

        {/* Card 1: UI/UX Design (Positioned cleanly at left shoulder) */}
        <div className="absolute left-[4%] sm:left-[7%] lg:left-[10%] top-[4%] sm:top-[7%] lg:top-[9%] z-30 bg-white text-neutral-900 rounded-xl sm:rounded-2xl shadow-xl shadow-blue-950/20 px-3.5 py-2 sm:px-4 sm:py-2.5 border border-white/90 hover:scale-105 transition-transform cursor-pointer">
          <h3 className="font-heading text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
            UI/UX Design
          </h3>
          <p className="text-[9px] sm:text-xs text-neutral-500 font-medium whitespace-nowrap mt-0.5">
            200 Courses &bull; 1000+ Students
          </p>
        </div>

        {/* Card 2: Learning Progress 55% (Positioned cleanly at right headphone) */}
        <div className="absolute right-[4%] sm:right-[7%] lg:right-[9%] top-[7%] sm:top-[11%] lg:top-[13%] z-30 bg-white text-neutral-900 rounded-xl sm:rounded-2xl shadow-xl shadow-blue-950/20 px-3.5 py-2.5 sm:px-5 sm:py-3.5 border border-white/90 min-w-[125px] sm:min-w-[165px] md:min-w-[190px] hover:scale-105 transition-transform">
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

        {/* Card 3: Happy Students (Positioned cleanly at bottom-left over lime disc) */}
        <div className="absolute left-[0%] sm:left-[2%] lg:left-[4%] bottom-[8%] sm:bottom-[12%] lg:bottom-[14%] z-30 bg-white text-neutral-900 rounded-xl sm:rounded-2xl shadow-xl shadow-blue-950/20 px-3 py-2 sm:px-4 sm:py-3 border border-white/90 hover:scale-105 transition-transform">
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
