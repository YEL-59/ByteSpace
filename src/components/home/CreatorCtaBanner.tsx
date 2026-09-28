import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function CreatorCtaBanner() {
  return (
    <section className="py-16 sm:py-20 bg-primary-600 text-white relative overflow-hidden">
      {/* Decorative Lime 3D Shapes */}
      <div className="absolute top-6 left-12 w-12 h-12 text-secondary-500/80 pointer-events-none rotate-45">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <polygon points="50,0 65,35 100,50 65,65 50,100 35,65 0,50 35,35" />
        </svg>
      </div>
      <div className="absolute bottom-6 right-16 w-20 h-20 text-secondary-400/70 pointer-events-none -rotate-12">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="10">
          <rect x="20" y="20" width="60" height="60" rx="15" />
        </svg>
      </div>

      <Container size="default">
        <div className="text-center relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-700 text-secondary-400 text-label-xs font-semibold uppercase tracking-wider mb-6 border border-primary-500/40">
            <Sparkles className="w-4 h-4 fill-secondary-400" />
            <span>Join 300+ Verified Instructors</span>
          </div>

          <h2 className="text-heading-s sm:text-heading-m font-semibold tracking-tight text-white leading-tight">
            Unlock Your Potential as a Creator With ByteSpace
          </h2>

          <p className="mt-4 text-body-l text-primary-100 max-w-xl mx-auto">
            Empower hundreds of thousands of students around the world while building your brand and recurring passive income.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/register?role=creator">
              <Button
                variant="secondary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Start Teaching Today
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                Browse All Courses
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
