import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import testimonialsData from "@/data/testimonials.json";
import { Testimonial } from "@/types";

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="testimonials">
      <Container size="wide">
        <SectionHeading
          badge="Student Success Stories"
          title="Discover What Our Community Is Saying"
          subtitle="Real reviews from real students who advanced their careers and built industry-standard projects with ByteSpace."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(testimonialsData as Testimonial[]).map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 hover:border-primary-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-primary-300 opacity-60" />
                </div>

                <p className="text-body-m text-neutral-700 italic leading-relaxed">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-neutral-200 shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading text-label-s font-semibold text-neutral-900">
                    {t.name}
                  </h4>
                  <p className="text-body-xs text-neutral-500">{t.role}</p>
                  <p className="text-[11px] text-primary-600 font-medium truncate max-w-[200px]">
                    {t.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
