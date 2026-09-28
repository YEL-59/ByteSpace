"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Course } from "@/types";

interface CourseCardProps {
  course: Course;
}

const DEFAULT_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
];

export default function CourseCard({ course }: CourseCardProps) {
  const avatars = course.studentAvatars || DEFAULT_AVATARS;
  const commentsCount = course.commentsCount || 59;

  return (
    <div className="group bg-white rounded-[24px] sm:rounded-[28px] border border-[#ECEEF1] p-3.5 sm:p-4 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between">
      {/* Top Thumbnail with Frosted Pills */}
      <div className="relative aspect-[16/10.5] w-full rounded-[18px] sm:rounded-[20px] overflow-hidden bg-neutral-100">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Bottom Frosted Overlay Badges */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5 overflow-x-auto scrollbar-none pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/95 text-[11px] font-medium whitespace-nowrap border border-white/10 shadow-xs">
            {course.lessonsCount} Lessons
          </span>
          <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/95 text-[11px] font-medium whitespace-nowrap border border-white/10 shadow-xs">
            {course.duration}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/95 text-[11px] font-medium whitespace-nowrap border border-white/10 shadow-xs">
            {commentsCount} Comments
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-4 px-1 pb-1 flex flex-col justify-between flex-1">
        <div>
          {/* Title & Rating */}
          <div className="flex items-start justify-between gap-2">
            <Link href={`/courses/${course.id}`} className="flex-1">
              <h3 className="font-heading text-base sm:text-lg font-bold text-neutral-900 group-hover:text-primary-500 transition-colors line-clamp-1 leading-snug">
                {course.title}
              </h3>
            </Link>
            <div className="flex items-center gap-1 shrink-0 text-[#546573] text-sm font-semibold pt-0.5">
              <span>{course.rating.toFixed(1)}</span>
              <Star className="w-3.5 h-3.5 fill-[#ACB6BE] text-[#ACB6BE]" />
            </div>
          </div>

          {/* Instructor Byline */}
          <p className="text-xs text-neutral-400 mt-1">
            by{" "}
            <span className="text-primary-500 font-medium hover:underline cursor-pointer">
              {course.instructor?.name?.toLowerCase() || "purepearl studio"}
            </span>
          </p>
        </div>

        {/* Level Badge + Student Avatars */}
        <div className="mt-4 flex items-center justify-between gap-2">
          {/* Level Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F2F3F6] text-[#546573] text-xs font-semibold">
            <svg
              className="w-3.5 h-3.5 text-neutral-600 shrink-0"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <rect x="2" y="10" width="2.5" height="4" rx="0.5" />
              <rect x="6.5" y="6" width="2.5" height="8" rx="0.5" />
              <rect x="11" y="2" width="2.5" height="12" rx="0.5" />
            </svg>
            <span>{course.level || "Beginner"}</span>
          </div>

          {/* Student Avatars Stack */}
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {avatars.slice(0, 4).map((avatar, idx) => (
                <div
                  key={idx}
                  className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden ring-2 ring-white shrink-0 bg-neutral-200"
                >
                  <Image
                    src={avatar}
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#CEF001] text-neutral-950 font-bold text-[10px] sm:text-[11px] flex items-center justify-center -ml-2 ring-2 ring-white shrink-0 shadow-xs">
              26+
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-4 flex items-baseline">
          <span className="text-primary-500 font-extrabold text-xl sm:text-2xl tracking-tight">
            ${Math.round(course.price)}
          </span>
          <span className="text-neutral-400 text-xs font-normal ml-1">
            /lifetime
          </span>
        </div>
      </div>
    </div>
  );
}
