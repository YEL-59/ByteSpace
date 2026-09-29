"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const RAIN_LEFT_ITEMS = [
  {
    id: "l1",
    src: "/svgs/spine-lime.svg",
    alt: "Lime Spring",
    left: "-2%",
    size: "w-28 sm:w-36 md:w-48 lg:w-60",
    duration: 13,
    delay: -1.5,
    rotateDelta: 180,
    zIndex: 14,
  },
  {
    id: "l2",
    src: "/svgs/spine-white.svg",
    alt: "White Spring",
    left: "17%",
    size: "w-18 sm:w-24 md:w-30 lg:w-38",
    duration: 10.5,
    delay: -5.5,
    rotateDelta: -210,
    zIndex: 12,
  },
  {
    id: "l3",
    src: "/svgs/circle-lime.svg",
    alt: "Lime Donut",
    left: "5%",
    size: "w-32 sm:w-44 md:w-56 lg:w-68",
    duration: 16,
    delay: -9.5,
    rotateDelta: 240,
    zIndex: 15,
  },
  {
    id: "l4",
    src: "/svgs/pyramid-white.svg",
    alt: "White Pyramid",
    left: "24%",
    size: "w-22 sm:w-28 md:w-38 lg:w-46",
    duration: 12,
    delay: -3.8,
    rotateDelta: -160,
    zIndex: 11,
  },
  {
    id: "l5",
    src: "/svgs/spine-lime.svg",
    alt: "Lime Spring",
    left: "10%",
    size: "w-24 sm:w-32 md:w-44 lg:w-52",
    duration: 14.5,
    delay: -11.5,
    rotateDelta: 160,
    zIndex: 13,
  },
  {
    id: "l6",
    src: "/svgs/circle-lime.svg",
    alt: "Lime Donut",
    left: "20%",
    size: "w-26 sm:w-36 md:w-48 lg:w-56",
    duration: 17,
    delay: -7.5,
    rotateDelta: -190,
    zIndex: 12,
  },
];

const RAIN_RIGHT_ITEMS = [
  {
    id: "r1",
    src: "/svgs/cylinder-white.svg",
    alt: "White Cylinder",
    right: "-1%",
    size: "w-32 sm:w-44 md:w-58 lg:w-72",
    duration: 15,
    delay: -2.2,
    rotateDelta: -170,
    zIndex: 15,
  },
  {
    id: "r2",
    src: "/svgs/piramid-ime.svg",
    alt: "Lime Pyramid",
    right: "19%",
    size: "w-22 sm:w-30 md:w-40 lg:w-48",
    duration: 11.5,
    delay: -6.5,
    rotateDelta: 200,
    zIndex: 12,
  },
  {
    id: "r3",
    src: "/svgs/spine-lime.svg",
    alt: "Lime Spring",
    right: "7%",
    size: "w-28 sm:w-38 md:w-50 lg:w-60",
    duration: 13.5,
    delay: -10.2,
    rotateDelta: 220,
    zIndex: 14,
  },
  {
    id: "r4",
    src: "/svgs/spine-white.svg",
    alt: "White Spring",
    right: "26%",
    size: "w-18 sm:w-24 md:w-32 lg:w-38",
    duration: 10,
    delay: -4.5,
    rotateDelta: -200,
    zIndex: 11,
  },
  {
    id: "r5",
    src: "/svgs/circle-lime.svg",
    alt: "Lime Donut",
    right: "4%",
    size: "w-28 sm:w-40 md:w-52 lg:w-64",
    duration: 16,
    delay: -12.5,
    rotateDelta: 200,
    zIndex: 13,
  },
  {
    id: "r6",
    src: "/svgs/cylinder-white.svg",
    alt: "White Cylinder",
    right: "16%",
    size: "w-26 sm:w-36 md:w-46 lg:w-56",
    duration: 13,
    delay: -8.5,
    rotateDelta: -150,
    zIndex: 12,
  },
];

export default function CreatorCtaBanner() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#003be2] hero-grid-bg text-white"
      id="creator-cta"
    >
      {/* ===================================================================== */}
      {/* Left Side Raining 3D SVGs: Varied Positions, Big Sizes & Instant Rain */}
      {/* ===================================================================== */}
      <div className="absolute inset-y-0 left-0 w-[42%] lg:w-[40%] pointer-events-none z-10 overflow-hidden">
        {RAIN_LEFT_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`absolute pointer-events-none select-none ${item.size}`}
            style={{
              left: item.left,
              top: 0,
              zIndex: item.zIndex,
              animation: `cta-rain ${item.duration}s linear infinite`,
              animationDelay: `${item.delay}s`,
              ["--rot" as string]: `${item.rotateDelta}deg`,
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={280}
              height={280}
              className="w-full h-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
              priority
            />
          </div>
        ))}
      </div>

      {/* ===================================================================== */}
      {/* Right Side Raining 3D SVGs: Varied Positions, Big Sizes & Instant Rain*/}
      {/* ===================================================================== */}
      <div className="absolute inset-y-0 right-0 w-[42%] lg:w-[40%] pointer-events-none z-10 overflow-hidden">
        {RAIN_RIGHT_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`absolute pointer-events-none select-none ${item.size}`}
            style={{
              right: item.right,
              top: 0,
              zIndex: item.zIndex,
              animation: `cta-rain ${item.duration}s linear infinite`,
              animationDelay: `${item.delay}s`,
              ["--rot" as string]: `${item.rotateDelta}deg`,
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={280}
              height={280}
              className="w-full h-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
            />
          </div>
        ))}
      </div>

      {/* ===================================================================== */}
      {/* Central Content with Expanded max-w for Perfect Line Hierarchy       */}
      {/* ===================================================================== */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20 sm:py-24 md:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-4xl lg:max-w-5xl mx-auto flex flex-col items-center"
        >
          {/* Main Headline */}
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[50px] text-white tracking-tight leading-[1.14] max-w-4xl mx-auto">
            Unlock Your Potential as a <br className="hidden sm:inline" />
            Creator with ByteSpace
          </h2>

          {/* Subtext with generous max-w for 3 clean lines matching design */}
          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-[16px] lg:text-[17px] text-white/95 leading-relaxed font-normal max-w-2xl sm:max-w-[760px] md:max-w-[820px] lg:max-w-[880px] mx-auto text-balance">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          {/* Call to Action Button */}
          <div className="mt-8 sm:mt-9">
            <Link href="/register?role=creator">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-[#CEF001] hover:bg-[#bde000] text-neutral-950 font-extrabold text-sm sm:text-base transition-all duration-200 shadow-xl cursor-pointer hover:shadow-2xl"
              >
                Join as Creator
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
