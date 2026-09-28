"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/courses");
    }
  };

  return (
    <section className="relative w-full text-white overflow-hidden select-none hero-grid-bg">
      {/* Full-width container with seamless 120px grid extending edge to edge */}
      <div className="relative w-full flex flex-col items-center">

        {/* Main Artwork Canvas - Preserves 1440:1024 Aspect Ratio */}
        <div className="relative w-full max-w-[1440px] aspect-[1440/1024]">
          {/* Base Hero Background (Grid, Lime Disc & Student with Laptop) */}
          <Image
            src="/hero_bg.png"
            alt="ByteSpace Learning"
            fill
            priority
            className="object-contain object-bottom pointer-events-none"
            sizes="(max-width: 1440px) 100vw, 1440px"
          />

          {/* ========================================================= */}
          {/* LAYER 2: 3D Floating SVG Shapes positioned around canvas */}
          {/* ========================================================= */}

          {/* 1. Spiral Lime (Top-Left) */}
          <div className="absolute left-[0%] top-[25%] w-[18%] aspect-square pointer-events-none animate-float-slow">
            <Image
              src="/svgs/spiral-lime.svg"
              alt="Lime 3D Spiral"
              fill
              className="object-contain"
            />
          </div>

          {/* 2. Spiral White 1 (Middle-Left) */}
          <div className="absolute left-[13%] top-[47%] w-[9%] aspect-square pointer-events-none animate-float-reverse">
            <Image
              src="/svgs/spiral-white-1.svg"
              alt="White 3D Spring"
              fill
              className="object-contain"
            />
          </div>

          {/* 3. Donut Torus White (Bottom-Left) */}
          <div className="absolute left-[2%] top-[69%] w-[17.5%] aspect-square pointer-events-none animate-float-slow">
            <Image
              src="/svgs/donut-white.svg"
              alt="White 3D Donut"
              fill
              className="object-contain"
            />
          </div>

          {/* 4. Cylinder Lime / Grey (Top-Right) */}
          <div className="absolute right-[0%] top-[24%] w-[18.5%] aspect-square pointer-events-none animate-float-slow">
            <Image
              src="/svgs/cylinder-lime.svg"
              alt="Lime 3D Cylinder"
              fill
              className="object-contain"
            />
          </div>

          {/* 5. Pyramid Prism White (Middle-Right) */}
          <div className="absolute right-[12.5%] top-[46%] w-[9.5%] aspect-square pointer-events-none animate-float-reverse">
            <Image
              src="/svgs/pyramid-white.svg"
              alt="White 3D Pyramid"
              fill
              className="object-contain"
            />
          </div>

          {/* 6. Spiral White 2 (Bottom-Right) */}
          <div className="absolute right-[2%] top-[67%] w-[16.5%] aspect-square pointer-events-none animate-float-slow">
            <Image
              src="/svgs/spiral-white-2.svg"
              alt="White 3D Coil"
              fill
              className="object-contain"
            />
          </div>

          {/* ========================================================= */}
          {/* LAYER 3: Interactive Floating UI Cards                    */}
          {/* ========================================================= */}

          {/* Card 1: UI/UX Design (Top-Left of student) */}
          <div className="absolute left-[26%] top-[58%] z-20 bg-white text-neutral-900 rounded-xl sm:rounded-2xl shadow-xl shadow-blue-950/20 px-3 py-2 sm:px-4 sm:py-3 border border-white/90 hover:scale-105 transition-transform cursor-pointer">
            <h3 className="font-heading text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
              UI/UX Design
            </h3>
            <p className="text-[9px] sm:text-xs text-neutral-500 font-medium whitespace-nowrap mt-0.5">
              200 Courses &bull; 1000+ Students
            </p>
          </div>

          {/* Card 2: Learning Progress 55% (Top-Right of student) */}
          <div className="absolute left-[58%] top-[59%] z-20 bg-white text-neutral-900 rounded-xl sm:rounded-2xl shadow-xl shadow-blue-950/20 px-3.5 py-2.5 sm:px-5 sm:py-4 border border-white/90 min-w-[125px] sm:min-w-[185px] md:min-w-[210px] hover:scale-105 transition-transform">
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

          {/* Card 3: Happy Students (Bottom-Left of student) */}
          <div className="absolute left-[21%] top-[77%] z-20 bg-white text-neutral-900 rounded-xl sm:rounded-2xl shadow-xl shadow-blue-950/20 px-3 py-2 sm:px-4 sm:py-3 border border-white/90 hover:scale-105 transition-transform">
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

          {/* ========================================================= */}
          {/* LAYER 4: Foreground Headline, Subtitle & Search Bar       */}
          {/* ========================================================= */}
          <div className="absolute inset-x-0 top-0 z-30 flex flex-col items-center text-center px-4 pt-24 sm:pt-28 md:pt-32 lg:pt-36">
            {/* Main Hero Headline */}
            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.12] max-w-xs sm:max-w-xl lg:max-w-4xl mx-auto drop-shadow-sm">
              Get Access to Hundreds<br className="hidden sm:inline" /> Courses Available
            </h1>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-xs px-2">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
            </p>

            {/* Centered Search Pill Bar */}
            <form
              onSubmit={handleSearch}
              className="mt-5 sm:mt-7 md:mt-8 w-full max-w-[320px] sm:max-w-md md:max-w-xl mx-auto"
            >
              <div className="flex items-center bg-white rounded-full pl-3 sm:pl-4 pr-1 sm:pr-1.5 py-1 sm:py-1.5 shadow-2xl transition-all hover:shadow-primary-950/20 focus-within:ring-2 focus-within:ring-[#CEF001]">
                <Search className="w-4 h-4 sm:w-5 h-5 text-neutral-400 shrink-0 mr-1.5 sm:mr-2" />
                <input
                  type="text"
                  placeholder="Course, topic, creator"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full min-w-0 bg-transparent text-neutral-800 placeholder-neutral-400 text-xs sm:text-sm md:text-base focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#CEF001] hover:bg-[#bde200] active:scale-95 text-neutral-950 font-bold px-3.5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base transition-all duration-150 shrink-0 cursor-pointer shadow-sm"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}




