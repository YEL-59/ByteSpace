"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function GrowthSection() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-50/40 py-20 sm:py-28 lg:py-36" id="about">
      {/* ========================================================================= */}
      {/* Continuous Unified Gradient Background Overlay                           */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/gradient_bg.png"
          alt="Atmospheric Background Gradient"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 space-y-28 sm:space-y-36 lg:space-y-44">
        {/* ======================================================================= */}
        {/* SECTION 1: Professional Growth (Left: Copy & Stats, Right: Image + SVG) */}
        {/* ======================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Headline, Paragraph & Stats */}
          <div className="lg:col-span-6 order-1 flex flex-col justify-center self-center items-center text-center lg:items-start lg:text-left max-w-2xl mx-auto lg:mx-0 w-full">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px] font-extrabold text-neutral-900 tracking-tight leading-[1.12]"
            >
              Your Path to Professional<br className="hidden sm:inline" /> Growth Starts Here!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 sm:mt-7 text-neutral-600 text-base sm:text-lg lg:text-[19px] xl:text-[20px] leading-relaxed font-normal"
            >
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </motion.p>

            {/* Metrics & Student Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-11 flex items-center justify-center lg:justify-start gap-8 sm:gap-12 lg:gap-16 w-full"
            >
              <div>
                <p className="font-heading text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold text-[#003be2] leading-none">
                  12K
                </p>
                <p className="text-neutral-600 text-sm sm:text-base lg:text-[17px] font-medium mt-2">
                  Students
                </p>
              </div>

              <div>
                <p className="font-heading text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold text-[#003be2] leading-none">
                  70+
                </p>
                <p className="text-neutral-600 text-sm sm:text-base lg:text-[17px] font-medium mt-2">
                  Courses
                </p>
              </div>

              <div>
                <p className="font-heading text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold text-[#003be2] leading-none">
                  16
                </p>
                <p className="text-neutral-600 text-sm sm:text-base lg:text-[17px] font-medium mt-2">
                  Creators
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual (Bigger advertise1.png + animated advertise1.svg) */}
          <div className="lg:col-span-6 order-2 flex items-center justify-center relative">
            {/* Green 3D SVG Coil (Positioned & Floating) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 18, stiffness: 75, delay: 0.2 }}
              className="absolute -right-2 sm:-right-4 lg:right-0 xl:right-2 top-2 sm:top-6 lg:top-8 z-0 w-36 sm:w-44 md:w-52 lg:w-60 xl:w-64 aspect-square pointer-events-none"
            >
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 6, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src="/svgs/advertise1.svg"
                  alt="3D Lime Coil"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Main Visual: Bigger advertise1.png */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.015, transition: { duration: 0.25 } }}
              className="relative z-10 w-full max-w-[580px] lg:max-w-[680px] xl:max-w-[740px]"
            >
              <Image
                src="/advertise1.png"
                alt="Your Path to Professional Growth"
                width={721}
                height={697}
                className="w-full h-auto object-contain select-none drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* SECTION 2: Course Creation (Left: Image + SVG, Right: Copy & Checklist) */}
        {/* ======================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center" id="creators">
          {/* Left Column: Visual (Bigger advertise2.png + animated advertise2.svg) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex items-center justify-center relative">
            {/* Green 3D SVG Coil (Positioned & Floating) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 18, stiffness: 75, delay: 0.2 }}
              className="absolute right-2 sm:right-6 lg:right-8 xl:right-12 top-6 sm:top-10 lg:top-14 z-0 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-60 aspect-square pointer-events-none"
            >
              <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -6, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src="/svgs/advertise2.svg"
                  alt="3D Lime Coil"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Main Visual: Bigger advertise2.png */}
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.015, transition: { duration: 0.25 } }}
              className="relative z-10 w-full max-w-[480px] lg:max-w-[560px] xl:max-w-[620px]"
            >
              <Image
                src="/advertise2.png"
                alt="Create & Manage Courses Easily"
                width={587}
                height={744}
                className="w-full h-auto object-contain select-none drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>

          {/* Right Column: Headline, Paragraph & Checklist */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center self-center items-center text-center lg:items-start lg:text-left max-w-2xl mx-auto lg:mx-0 w-full">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px] font-extrabold text-neutral-900 tracking-tight leading-[1.12]"
            >
              Create & Manage<br className="hidden sm:inline" /> Courses Easily.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 sm:mt-7 text-neutral-600 text-base sm:text-lg lg:text-[19px] xl:text-[20px] leading-relaxed font-normal"
            >
              <strong className="font-bold text-neutral-900">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </motion.p>

            {/* Feature Checklist */}
            <ul className="mt-8 sm:mt-10 space-y-4 sm:space-y-5 w-full flex flex-col items-center lg:items-start">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.25 + idx * 0.08 }}
                  className="flex items-center gap-3.5 sm:gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-[#003be2] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-neutral-900 text-base sm:text-lg lg:text-[19px] font-semibold">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
