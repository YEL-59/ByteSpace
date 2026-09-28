import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, BookOpen, Bookmark } from "lucide-react";
import { Course } from "@/types";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const badgeVariants: Record<string, "hot" | "primary" | "secondary"> = {
    Bestseller: "secondary",
    Hot: "hot",
    Popular: "primary",
    Trending: "primary",
    "Top Rated": "secondary",
  };

  return (
    <div className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary-300 transition-all duration-300 flex flex-col">
      {/* Thumbnail & Badges */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-100">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="absolute top-3 left-3 flex items-center gap-2">
          {course.badge && (
            <Badge variant={badgeVariants[course.badge] || "primary"} size="sm">
              {course.badge}
            </Badge>
          )}
          <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-neutral-800 text-[11px] font-medium shadow-xs">
            {course.category}
          </span>
        </div>

        <button
          aria-label="Bookmark course"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-neutral-600 hover:text-primary-600 shadow-sm transition-colors cursor-pointer"
        >
          <Bookmark className="w-4 h-4" />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating & Reviews */}
          <div className="flex items-center gap-1.5 mb-2.5">
            <div className="flex items-center text-amber-500">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <span className="text-label-xs font-bold text-neutral-900">
              {course.rating.toFixed(1)}
            </span>
            <span className="text-body-xs text-neutral-400">
              ({course.reviewsCount.toLocaleString()} reviews)
            </span>
          </div>

          {/* Title */}
          <Link href={`/courses/${course.id}`}>
            <h3 className="font-heading text-label-l font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2 leading-snug">
              {course.title}
            </h3>
          </Link>

          {/* Meta details */}
          <div className="mt-3 flex items-center gap-4 text-body-xs text-neutral-500 pb-3 border-b border-neutral-100">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              {course.lessonsCount} lessons
            </span>
            <span className="ml-auto text-neutral-400 font-medium">{course.level}</span>
          </div>

          {/* Instructor */}
          <div className="mt-3 flex items-center gap-2.5">
            <div className="relative w-7 h-7 rounded-full overflow-hidden bg-neutral-200 shrink-0">
              <Image
                src={course.instructor.avatar}
                alt={course.instructor.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-body-xs font-medium text-neutral-700 truncate">
              {course.instructor.name}
            </span>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-heading-xs font-bold text-neutral-900">
              ${course.price.toFixed(2)}
            </span>
            {course.originalPrice > course.price && (
              <span className="text-body-xs text-neutral-400 line-through">
                ${course.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Link href={`/courses/${course.id}`}>
            <Button variant="primary" size="sm">
              Enroll Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
