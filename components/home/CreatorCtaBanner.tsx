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
    left: "2%",
    size: "w-22 sm:w-28 md:w-34 lg:w-40",
    duration: 11,
    delay: 0,
    rotateDelta: 160,
    sway: [0, 12, -8, 0],
  },
  {
    id: "l2",
    src: "/svgs/spine-white.svg",
    alt: "White Spring",
    left: "14%",
    size: "w-14 sm:w-18 md:w-22 lg:w-26",
    duration: 9.5,
    delay: 3,
    rotateDelta: -180,
    sway: [0, -10, 10, 0],
  },
  {
    id: "l3",
    src: "/svgs/circle-lime.svg",
    alt: "Lime Donut",
    left: "7%",
    size: "w-24 sm:w-30 md:w-36 lg:w-44",
    duration: 13,
    delay: 5.8,
    rotateDelta: 200,
    sway: [0, 14, -14, 0],
  },
  {
    id: "l4",
    src: "/svgs/pyramid-white.svg",
    alt: "White Pyramid",
    left: "18%",
    size: "w-18 sm:w-22 md:w-26 lg:w-32",
    duration: 10.5,
    delay: 1.8,
    rotateDelta: -140,
    sway: [0, -12, 8, 0],
  },
  {
    id: "l5",
    src: "/svgs/spine-lime.svg",
    alt: "Lime Spring",
    left: "11%",
    size: "w-20 sm:w-26 md:w-30 lg:w-36",
    duration: 12,
    delay: 8.2,
    rotateDelta: 140,
    sway: [0, 10, -12, 0],
  },
  {
    id: "l6",
    src: "/svgs/circle-lime.svg",
    alt: "Lime Donut",
    left: "16%",
    size: "w-20 sm:w-26 md:w-32 lg:w-38",
    duration: 14,
    delay: 10.5,
    rotateDelta: -160,
    sway: [0, -8, 12, 0],
  },
];

const RAIN_RIGHT_ITEMS = [
  {
    id: "r1",
    src: "/svgs/cylinder-white.svg",
    alt: "White Cylinder",
    right: "3%",
    size: "w-24 sm:w-30 md:w-36 lg:w-44",
    duration: 12.5,
    delay: 0.5,
    rotateDelta: -150,
    sway: [0, -12, 12, 0],
  },
  {
    id: "r2",
    src: "/svgs/piramid-ime.svg",
    alt: "Lime Pyramid",
    right: "15%",
    size: "w-18 sm:w-22 md:w-28 lg:w-34",
    duration: 10,
    delay: 3.5,
    rotateDelta: 180,
    sway: [0, 10, -10, 0],
  },
  {
    id: "r3",
    src: "/svgs/spine-lime.svg",
    alt: "Lime Spring",
    right: "8%",
    size: "w-22 sm:w-28 md:w-34 lg:w-40",
    duration: 11.5,
    delay: 6.8,
    rotateDelta: 210,
    sway: [0, -14, 10, 0],
  },
  {
    id: "r4",
    src: "/svgs/spine-white.svg",
    alt: "White Spring",
    right: "19%",
    size: "w-14 sm:w-18 md:w-22 lg:w-26",
    duration: 9,
    delay: 2.2,
    rotateDelta: -170,
    sway: [0, 8, -12, 0],
  },
  {
    id: "r5",
    src: "/svgs/circle-lime.svg",
    alt: "Lime Donut",
    right: "6%",
    size: "w-22 sm:w-28 md:w-34 lg:w-40",
    duration: 13.5,
    delay: 8.8,
    rotateDelta: 180,
    sway: [0, 12, -10, 0],
  },
  {
    id: "r6",
    src: "/svgs/cylinder-white.svg",
    alt: "White Cylinder",
    right: "14%",
    size: "w-20 sm:w-26 md:w-30 lg:w-36",
    duration: 11,
    delay: 5.2,
    rotateDelta: -130,
    sway: [0, -10, 10, 0],
  },
];

export default function CreatorCtaBanner() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#003be2] hero-grid-bg text-white"
      id="creator-cta"
    >
      {/* ===================================================================== */}
      {/* Left Side Raining 3D SVGs (falling smoothly from top to bottom)       */}
      {/* ===================================================================== */}
      <div className="absolute inset-y-0 left-0 w-1/3 pointer-events-none z-10 overflow-hidden">
        {RAIN_LEFT_ITEMS.map((item) => (
          <motion.div
            key={item.id}
            className={`absolute pointer-events-none select-none ${item.size}`}
            style={{ left: item.left, top: 0 }}
            initial={{ y: -160, opacity: 0 }}
            animate={{
              y: [-160, 680],
              opacity: [0, 1, 1, 0.8, 0],
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
              width={180}
              height={180}
              className="w-full h-auto drop-shadow-xl"
              priority={item.delay === 0}
            />
          </motion.div>
        ))}
      </div>

      {/* ===================================================================== */}
      {/* Right Side Raining 3D SVGs (falling smoothly from top to bottom)      */}
      {/* ===================================================================== */}
      <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none z-10 overflow-hidden">
        {RAIN_RIGHT_ITEMS.map((item) => (
          <motion.div
            key={item.id}
            className={`absolute pointer-events-none select-none ${item.size}`}
            style={{ right: item.right, top: 0 }}
            initial={{ y: -160, opacity: 0 }}
            animate={{
              y: [-160, 680],
              opacity: [0, 1, 1, 0.8, 0],
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
              width={180}
              height={180}
              className="w-full h-auto drop-shadow-xl"
            />
          </motion.div>
        ))}
      </div>

      {/* ===================================================================== */}
      {/* Central Content                                                       */}
      {/* ===================================================================== */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-16 sm:py-20 md:py-24 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto flex flex-col items-center"
        >
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-white tracking-tight leading-[1.2]">
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
                className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-[#CEF001] hover:bg-[#bde000] text-neutral-950 font-bold text-xs sm:text-sm transition-all duration-200 shadow-md cursor-pointer hover:shadow-lg"
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
