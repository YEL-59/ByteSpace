import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, Clock, BookOpen, ShieldCheck, CheckCircle2, PlayCircle, ArrowLeft } from "lucide-react";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import coursesData from "@/data/courses.json";
import { Course } from "@/types";

interface CourseDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { id } = await params;
  const course = (coursesData as Course[]).find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  const SYLLABUS = [
    { title: "Module 1: Foundations & Architecture Setup", duration: "2h 15m", lessons: 6 },
    { title: "Module 2: Advanced Design Patterns & State Management", duration: "3h 40m", lessons: 10 },
    { title: "Module 3: Full-Stack Integration & API Design", duration: "4h 10m", lessons: 12 },
    { title: "Module 4: Performance Optimization & Edge Caching", duration: "2h 30m", lessons: 8 },
    { title: "Module 5: Production Deployment & Observability", duration: "1h 55m", lessons: 6 },
  ];

  return (
    <div className="bg-neutral-50/50 pb-20">
      {/* Course Hero Banner */}
      <section className="bg-primary-600 text-white py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-primary-200 hover:text-white text-body-s mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Courses</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-white/10 text-secondary-400 text-label-xs font-semibold backdrop-blur-xs">
                  {course.category}
                </span>
                {course.badge && (
                  <Badge variant="secondary" size="sm">
                    {course.badge}
                  </Badge>
                )}
              </div>

              <h1 className="font-heading text-heading-s sm:text-heading-m font-semibold tracking-tight text-white leading-tight">
                {course.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-body-s text-primary-100">
                <div className="flex items-center gap-1.5">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-white">{course.rating.toFixed(1)}</span>
                  <span>({course.reviewsCount.toLocaleString()} ratings)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration} total duration</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  <span>{course.lessonsCount} lessons</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 pt-6 border-t border-primary-500/40">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-200">
                  <Image
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-label-s font-semibold text-white">
                    Created by {course.instructor.name}
                  </p>
                  <p className="text-body-xs text-primary-200">{course.instructor.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Pricing Sticky Card */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Details Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* What you'll learn */}
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-xs">
              <h2 className="font-heading text-heading-xs font-semibold text-neutral-900 mb-6">
                What you will master in this course
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Architect and build full production-ready applications from scratch",
                  "Integrate secure authentication, state management, and API layers",
                  "Master responsive UI/UX principles with Tailwind CSS design systems",
                  "Optimize performance, SEO, accessibility, and Core Web Vitals",
                  "Deploy CI/CD pipelines to Vercel and production cloud providers",
                  "Gain lifetime access to code repositories and developer Discord",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-body-s text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Syllabus */}
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-xs">
              <h2 className="font-heading text-heading-xs font-semibold text-neutral-900 mb-6">
                Course Curriculum
              </h2>
              <div className="space-y-3">
                {SYLLABUS.map((mod, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 flex items-center justify-between hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <PlayCircle className="w-5 h-5 text-primary-600" />
                      <span className="font-heading text-label-s font-semibold text-neutral-900">
                        {mod.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-body-xs text-neutral-500">
                      <span>{mod.lessons} lessons</span>
                      <span>{mod.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sticky Card */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-xl overflow-hidden sticky top-28">
              <div className="relative aspect-16/9 w-full bg-neutral-100">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-heading-s font-bold text-neutral-900">
                    ${course.price.toFixed(2)}
                  </span>
                  {course.originalPrice > course.price && (
                    <span className="text-body-m text-neutral-400 line-through">
                      ${course.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <Badge variant="hot" size="sm">
                    {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                  </Badge>
                </div>

                <Button variant="secondary" size="lg" className="w-full mb-3">
                  Enroll Now
                </Button>
                <Button variant="outline" size="md" className="w-full">
                  Add to Wishlist
                </Button>

                <div className="mt-6 pt-6 border-t border-neutral-100 space-y-3 text-body-xs text-neutral-600">
                  <p className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> 30-Day Money-Back Guarantee
                  </p>
                  <p className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary-600" /> Full Lifetime Access
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-600" /> Certificate of Completion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
