"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Sparkles, Star, Users, ArrowUpRight } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function HeroSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/courses?q=${encodeURIComponent(searchQuery)}&cat=${selectedCategory}`;
    }
  };

  return (
    <section className="relative overflow-hidden bg-primary-600 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Decorative SVG Geometric Elements (Lime / Neon 3D Doodles) */}
      <div className="absolute top-10 left-6 sm:left-16 w-14 h-14 text-secondary-500/80 animate-pulse pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <polygon points="50,0 65,35 100,50 65,65 50,100 35,65 0,50 35,35" />
        </svg>
      </div>
      <div className="absolute top-20 right-10 sm:right-24 w-16 h-16 text-secondary-400/90 pointer-events-none rotate-12">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="12" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-12 left-1/4 w-20 h-10 text-secondary-500/70 pointer-events-none -rotate-12">
        <svg viewBox="0 0 120 40" fill="none" stroke="currentColor" strokeWidth="8">
          <path d="M 0,20 Q 30,0 60,20 T 120,20" />
        </svg>
      </div>

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-7 z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-700/80 border border-primary-500/40 text-secondary-400 text-label-s mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 fill-secondary-400" />
              <span>Over 1,200+ Verified Courses</span>
            </div>

            <h1 className="text-heading-l text-white font-semibold tracking-tight max-w-2xl leading-[1.15]">
              Get Access to <span className="text-secondary-400 underline decoration-secondary-500 decoration-wavy decoration-2">Hundreds</span> Courses Available
            </h1>

            <p className="mt-6 text-body-l text-primary-100 max-w-xl mx-auto lg:mx-0">
              Master cutting-edge software engineering, UI/UX design, and AI technologies with courses created by world-class leaders.
            </p>

            {/* Interactive Hero Search Form */}
            <form
              onSubmit={handleSearch}
              className="mt-8 p-2 sm:p-2.5 rounded-2xl sm:rounded-full bg-white shadow-2xl flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-2xl mx-auto lg:mx-0"
            >
              <div className="flex items-center pl-4 pr-2 text-neutral-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="What skill do you want to learn today?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-2 py-2.5 text-neutral-800 placeholder-neutral-400 text-body-s focus:outline-none"
              />
              <div className="h-6 w-[1px] bg-neutral-200 hidden sm:block" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Course Category"
                className="px-4 py-2.5 bg-transparent text-neutral-700 text-body-s font-medium focus:outline-none cursor-pointer"
              >
                <option value="all">All Categories</option>
                <option value="web-dev">Web Development</option>
                <option value="ai-ml">Artificial Intelligence</option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="data-cloud">Data & Cloud</option>
              </select>
              <Button
                type="submit"
                variant="secondary"
                size="md"
                className="shrink-0"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Explore
              </Button>
            </form>

            {/* Metrics Ticker */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6 border-t border-primary-500/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-500 text-neutral-950 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-heading text-xl font-bold text-white leading-tight">50K+</p>
                  <p className="text-body-xs text-primary-200">Active Students</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center font-bold">
                  <Star className="w-5 h-5 fill-secondary-400 text-secondary-400" />
                </div>
                <div>
                  <p className="font-heading text-xl font-bold text-white leading-tight">4.9/5</p>
                  <p className="text-body-xs text-primary-200">Student Rating</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5 text-secondary-300" />
                </div>
                <div>
                  <p className="font-heading text-xl font-bold text-white leading-tight">95%</p>
                  <p className="text-body-xs text-primary-200">Completion Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-secondary-500/20 rounded-full blur-3xl" />

            <div className="relative w-full max-w-md">
              {/* Main Student Visual Card */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl bg-primary-700/50 aspect-4/5">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="ByteSpace student learning"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent" />
              </div>

              {/* Floating Badge 1: 16k+ Students Active */}
              <div className="absolute -top-6 -left-6 sm:-left-8 bg-white text-neutral-900 rounded-2xl p-4 shadow-xl border border-neutral-100 flex items-center gap-3 animate-bounce [animation-duration:3s]">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80"
                    alt="Student"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80"
                    alt="Student"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
                    alt="Student"
                  />
                </div>
                <div>
                  <p className="text-label-xs font-bold text-neutral-900">16K+ Students</p>
                  <p className="text-[11px] text-neutral-500">Currently Learning</p>
                </div>
              </div>

              {/* Floating Badge 2: Course Completed Pill */}
              <div className="absolute -bottom-6 -right-6 sm:-right-8 bg-neutral-900 text-white rounded-2xl p-4 shadow-xl border border-neutral-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary-500 text-neutral-950 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <p className="text-label-xs font-bold text-white">Full-Stack Certified</p>
                  <p className="text-[11px] text-neutral-400">ByteSpace Accreditation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
