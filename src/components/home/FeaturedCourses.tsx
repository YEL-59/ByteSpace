"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import CourseCard from "@/components/home/CourseCard";
import coursesData from "@/data/courses.json";
import { Course } from "@/types";

const TABS = [
  { id: "all", label: "All Courses" },
  { id: "web-dev", label: "Web Development" },
  { id: "ui-ux", label: "UI/UX Design" },
  { id: "ai-ml", label: "Artificial Intelligence" },
  { id: "data-cloud", label: "Data & Cloud" },
  { id: "business", label: "Business & Growth" },
];

export default function FeaturedCourses() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCourses: Course[] =
    activeTab === "all"
      ? (coursesData as Course[])
      : (coursesData as Course[]).filter((c) => c.categoryId === activeTab);

  return (
    <section className="py-20 lg:py-28 bg-white" id="courses">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            align="left"
            badge="Top Trending"
            title="Discover Your Passion, Build Your Skills"
            subtitle="Explore our top-rated, industry-verified courses taught by seasoned professionals and tech leaders."
          />
          <Link href="/courses">
            <Button
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore All Courses
            </Button>
          </Link>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-label-s whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-primary-600 text-white font-semibold shadow-md shadow-primary-600/20"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
