import React from "react";
import Link from "next/link";
import { Code, Cpu, Palette, Database, TrendingUp, Smartphone, ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import categoriesData from "@/data/categories.json";

const ICON_MAP: Record<string, React.ReactNode> = {
  Code: <Code className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
};

export default function CategoryGrid() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50/70 border-y border-neutral-100">
      <Container size="wide">
        <SectionHeading
          badge="Specialized Tracks"
          title="Explore Diverse Learning Paths at ByteSpace"
          subtitle="Whether you want to build modern web apps, design intuitive interfaces, or train AI models, find your exact career track."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesData.map((cat) => (
            <Link
              key={cat.id}
              href={`/courses?cat=${cat.id}`}
              className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors flex items-center justify-center mb-6 shadow-sm">
                  {ICON_MAP[cat.icon] || <Code className="w-6 h-6" />}
                </div>
                <h3 className="font-heading text-heading-xs font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="mt-2 text-body-s text-neutral-500 line-clamp-2">
                  {cat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-label-xs font-semibold text-neutral-700 bg-neutral-100 px-3 py-1 rounded-full">
                  {cat.courseCount} Courses
                </span>
                <span className="text-primary-600 text-label-xs font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
