"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/common/Container";
import testimonialsData from "@/data/testimonials.json";
import { Testimonial } from "@/types";

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden" id="testimonials">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
        <Image
          src="/testimonials_bg.png"
          alt="Testimonials background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <Container size="wide" className="relative z-10">
        {/* Split Header: Title on Left, Paragraph on Right */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-16 mb-14 lg:mb-16">
          <div className="max-w-xl">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-neutral-900 tracking-tight leading-[1.15]">
              Discover What Our <br className="hidden sm:inline" />
              Community Is Saying
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="text-xs sm:text-[13px] md:text-sm text-neutral-600 leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3-Column Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {(testimonialsData as Testimonial[]).map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Circular Avatar */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden mb-5 bg-neutral-100 ring-2 ring-white shadow-xs">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="font-heading text-base sm:text-lg font-bold text-neutral-900 leading-tight">
                  {t.name}
                </h3>
                <p className="text-xs sm:text-[13px] font-medium text-primary-500 mt-1 mb-5">
                  {t.role}
                </p>

                {/* Quote Text */}
                <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
