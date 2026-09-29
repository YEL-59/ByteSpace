import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, Zap, ShieldCheck } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

import growthBenefitsData from "@/data/growthBenefits.json";

export default function GrowthSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="about">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual & Floating Overlays */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl aspect-4/3 max-w-lg mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                alt="Professional learning with ByteSpace"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Card 1: 95% Completion Rate */}
            <div className="absolute -bottom-6 left-4 sm:left-12 bg-white rounded-2xl p-4 shadow-xl border border-neutral-100 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-secondary-100 text-neutral-900 flex items-center justify-center font-bold">
                <Zap className="w-6 h-6 text-neutral-900 fill-secondary-500" />
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-neutral-900">95% Rate</p>
                <p className="text-body-xs text-neutral-500">Graduation & Placement</p>
              </div>
            </div>

            {/* Floating Card 2: Accredited Certificate */}
            <div className="absolute -top-6 right-4 sm:right-12 bg-neutral-900 text-white rounded-2xl p-4 shadow-xl border border-neutral-800 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center font-bold">
                <Award className="w-6 h-6 text-secondary-400" />
              </div>
              <div>
                <p className="font-heading text-sm font-bold text-white">Accredited</p>
                <p className="text-[11px] text-neutral-400">Recognized Worldwide</p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-100 text-neutral-900 text-label-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4 text-neutral-900" />
              <span>Proven Career Acceleration</span>
            </div>

            <h2 className="text-heading-s sm:text-heading-m font-semibold text-neutral-900 tracking-tight leading-tight">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="mt-4 text-body-l text-neutral-500">
              ByteSpace equips ambitious professionals with the skills, tools, and direct guidance needed to thrive in modern tech ecosystems.
            </p>

            <ul className="mt-8 space-y-4">
              {growthBenefitsData.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                  <span className="text-body-m text-neutral-700 font-medium">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/courses">
                <Button variant="primary" size="lg">
                  Get Started Today
                </Button>
              </Link>
              <Link href="#creators">
                <Button variant="outline" size="lg">
                  Explore Creator Paths
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
