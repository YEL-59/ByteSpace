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
    size: "w-28 sm:w-36 md:w-48 lg:w-56",
    duration: 13,
    delay: 0,
    rotateDelta: 180,
    sway: [0, 18, -12, 0],
    zIndex: 14,
  },
  {
    id: "l2",
    src: "/svgs/spine-white.svg",
    alt: "White Spring",
    left: "18%",
    size: "w-18 sm:w-24 md:w-30 lg:w-36",
    duration: 10.5,
    delay: 3.5,
    rotateDelta: -210,
    sway: [0, -14, 14, 0],
    zIndex: 12,
  },
  {
    id: "l3",
    src: "/svgs/circle-lime.svg",
    alt: "Lime Donut",
    left: "6%",
    size: "w-32 sm:w-42 md:w-54 lg:w-64",
    duration: 16,
    delay: 6.8,
    rotateDelta: 240,
    sway: [0, 22, -18, 0],
    zIndex: 15,
  },
  {
    id: "l4",
    src: "/svgs/pyramid-white.svg",
    alt: "White Pyramid",
    left: "26%",
    size: "w-22 sm:w-28 md:w-38 lg:w-44",
    duration: 12,
    delay: 1.5,
    rotateDelta: -160,
    sway: [0, -14, 12, 0],
    zIndex: 11,
  },
  {
    id: "l5",
    src: "/svgs/spine-lime.svg",
    alt: "Lime Spring",
    left: "12%",
    size: "w-24 sm:w-32 md:w-42 lg:w-48",
    duration: 14.5,
    delay: 9.2,
    rotateDelta: 160,
    sway: [0, 16, -14, 0],
    zIndex: 13,
  },
  {
    id: "l6",
    src: "/svgs/circle-lime.svg",
    alt: "Lime Donut",
    left: "22%",
    size: "w-26 sm:w-34 md:w-46 lg:w-52",
    duration: 17,
    delay: 11.5,
    rotateDelta: -190,
    sway: [0, -12, 16, 0],
    zIndex: 12,
  },
];

const RAIN_RIGHT_ITEMS = [
  {
    id: "r1",
    src: "/svgs/cylinder-white.svg",
    alt: "White Cylinder",
    right: "-1%",
    size: "w-32 sm:w-44 md:w-56 lg:w-68",
    duration: 15,
    delay: 0.8,
    rotateDelta: -170,
    sway: [0, -18, 14, 0],
    zIndex: 15,
  },
  {
    id: "r2",
    src: "/svgs/piramid-ime.svg",
    alt: "Lime Pyramid",
    right: "20%",
    size: "w-22 sm:w-30 md:w-38 lg:w-46",
    duration: 11.5,
    delay: 4,
    rotateDelta: 200,
    sway: [0, 14, -14, 0],
    zIndex: 12,
  },
  {
    id: "r3",
    src: "/svgs/spine-lime.svg",
    alt: "Lime Spring",
    right: "8%",
    size: "w-28 sm:w-38 md:w-48 lg:w-56",
    duration: 13.5,
    delay: 7.5,
    rotateDelta: 220,
    sway: [0, -16, 12, 0],
    zIndex: 14,
  },
  {
    id: "r4",
    src: "/svgs/spine-white.svg",
    alt: "White Spring",
    right: "28%",
    size: "w-18 sm:w-24 md:w-30 lg:w-36",
    duration: 10,
    delay: 2.2,
    rotateDelta: -200,
    sway: [0, 10, -12, 0],
    zIndex: 11,
  },
  {
    id: "r5",
    src: "/svgs/circle-lime.svg",
    alt: "Lime Donut",
    right: "5%",
    size: "w-28 sm:w-38 md:w-50 lg:w-60",
    duration: 16,
    delay: 9.8,
    rotateDelta: 200,
    sway: [0, 16, -14, 0],
    zIndex: 13,
  },
  {
    id: "r6",
    src: "/svgs/cylinder-white.svg",
    alt: "White Cylinder",
    right: "17%",
    size: "w-26 sm:w-34 md:w-44 lg:w-52",
    duration: 13,
    delay: 5.8,
    rotateDelta: -150,
    sway: [0, -14, 14, 0],
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
      {/* Left Side Raining 3D SVGs: Varied Spread, Larger Sizes & Depth Layers */}
      {/* ===================================================================== */}
      <div className="absolute inset-y-0 left-0 w-[42%] lg:w-[40%] pointer-events-none z-10 overflow-hidden">
        {RAIN_LEFT_ITEMS.map((item) => (
          <motion.div
            key={item.id}
            className={`absolute pointer-events-none select-none ${item.size}`}
            style={{ left: item.left, top: 0, zIndex: item.zIndex }}
            initial={{ y: -240, opacity: 0 }}
            animate={{
              y: [-240, 780],
              opacity: [0, 1, 1, 0.85, 0],
              x: item.sway,
              rotate: [0, item.rotateDelta],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "linear",
              delay: item.delay,
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={260}
              height={260}
              className="w-full h-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
              priority={item.delay === 0}
            />
          </motion.div>
        ))}
      </div>

      {/* ===================================================================== */}
      {/* Right Side Raining 3D SVGs: Varied Spread, Larger Sizes & Depth Layers*/}
      {/* ===================================================================== */}
      <div className="absolute inset-y-0 right-0 w-[42%] lg:w-[40%] pointer-events-none z-10 overflow-hidden">
        {RAIN_RIGHT_ITEMS.map((item) => (
          <motion.div
            key={item.id}
            className={`absolute pointer-events-none select-none ${item.size}`}
            style={{ right: item.right, top: 0, zIndex: item.zIndex }}
            initial={{ y: -240, opacity: 0 }}
            animate={{
              y: [-240, 780],
              opacity: [0, 1, 1, 0.85, 0],
              x: item.sway,
              rotate: [0, item.rotateDelta],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "linear",
              delay: item.delay,
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={260}
              height={260}
              className="w-full h-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
            />
          </motion.div>
        ))}
      </div>

      {/* ===================================================================== */}
      {/* Central Content                                                       */}
      {/* ===================================================================== */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20 sm:py-24 md:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto flex flex-col items-center"
        >
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-white tracking-tight leading-[1.2]">
            Unlock Your Potential as a <br className="hidden sm:inline" />
            Creator with ByteSpace
          </h2>

          <p className="mt-4 sm:mt-5 text-xs sm:text-[13px] md:text-sm text-white/90 leading-relaxed font-normal max-w-xl mx-auto">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          <div className="mt-7 sm:mt-8">
            <Link href="/register?role=creator">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="px-7 py-3 sm:px-9 sm:py-3.5 rounded-full bg-[#CEF001] hover:bg-[#bde000] text-neutral-950 font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg cursor-pointer hover:shadow-xl"
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
