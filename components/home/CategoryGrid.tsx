import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/common/Container";
import categoriesData from "@/data/categories.json";
import { Category } from "@/types";

export default function CategoryGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white" id="categories">
      <Container size="wide">
        {/* Centered Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#1A1E23] tracking-tight leading-[1.15]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-3.5 sm:mt-4 text-xs sm:text-[13px] md:text-sm text-[#6E8090] leading-relaxed max-w-2xl mx-auto">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
          {(categoriesData as Category[]).map((cat) => (
            <Link
              key={cat.id}
              href={`/courses?q=${encodeURIComponent(cat.name)}`}
              className="group flex flex-col items-center justify-center p-6 sm:p-7 rounded-[22px] bg-white border border-[#E5E7EB] hover:border-neutral-300 hover:shadow-lg transition-all duration-200 cursor-pointer text-center"
            >
              {/* Circular Lime Icon Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#CEF001] flex items-center justify-center mb-4 sm:mb-5 shrink-0 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src={cat.icon || "/svgs/svg1.svg"}
                  alt={cat.name}
                  width={28}
                  height={28}
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />
              </div>

              {/* Category Name */}
              <h3 className="font-heading font-semibold text-sm sm:text-base text-[#1A1E23] tracking-tight group-hover:text-neutral-950 transition-colors">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
