"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CreatorCtaBanner() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#003be2] hero-grid-bg text-white"
      id="creator-cta"
    >
      {/* ===================================================================== */}
      {/* Floating 3D SVGs: Left Side Animated Group                           */}
      {/* ===================================================================== */}

      {/* 1. Lime Spiral Spring (Top-Left corner) */}
      <motion.div
        initial={{ x: -140, opacity: 0, scale: 0.7, rotate: -25 }}
        whileInView={{ x: 0, opacity: 1, scale: 1, rotate: -8 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", damping: 18, stiffness: 80, delay: 0.1 }}
        className="absolute -top-6 -left-6 sm:top-1 sm:left-2 md:top-3 md:left-6 lg:top-4 lg:left-8 w-24 sm:w-32 md:w-40 lg:w-48 z-10 pointer-events-none select-none"
      >
        <motion.div
          animate={{ y: [-8, 8, -8], rotate: [-8, -3, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/svgs/spine-lime.svg"
            alt="Decorative Lime Spring"
            width={190}
            height={190}
            className="w-full h-auto drop-shadow-xl"
            priority
          />
        </motion.div>
      </motion.div>

      {/* 2. White Squiggle / Spring (Top-Left, closer to center) */}
      <motion.div
        initial={{ x: -120, opacity: 0, scale: 0.7, rotate: 10 }}
        whileInView={{ x: 0, opacity: 1, scale: 1, rotate: 20 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", damping: 18, stiffness: 85, delay: 0.25 }}
        className="absolute top-4 left-20 sm:top-8 sm:left-32 md:left-44 lg:left-56 w-14 sm:w-18 md:w-24 lg:w-28 z-10 pointer-events-none select-none"
      >
        <motion.div
          animate={{ y: [6, -6, 6], rotate: [20, 25, 20] }}
          transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/svgs/spine-white.svg"
            alt="Decorative White Spring"
            width={110}
            height={110}
            className="w-full h-auto drop-shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* 3. White Pyramid (Bottom-Left corner) */}
      <motion.div
        initial={{ x: -120, y: 50, opacity: 0, scale: 0.7 }}
        whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", damping: 18, stiffness: 85, delay: 0.18 }}
        className="absolute -bottom-4 left-0 sm:bottom-0 sm:left-4 md:left-8 lg:left-12 w-20 sm:w-28 md:w-36 lg:w-40 z-10 pointer-events-none select-none"
      >
        <motion.div
          animate={{ y: [5, -5, 5], rotate: [-2, 3, -2] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/svgs/pyramid-white.svg"
            alt="Decorative White Pyramid"
            width={160}
            height={160}
            className="w-full h-auto drop-shadow-xl"
          />
        </motion.div>
      </motion.div>

      {/* 4. Lime Donut / Torus (Bottom-Left, closer to center) */}
      <motion.div
        initial={{ x: -130, y: 60, opacity: 0, scale: 0.7, rotate: -20 }}
        whileInView={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", damping: 19, stiffness: 85, delay: 0.32 }}
        className="absolute -bottom-10 left-16 sm:-bottom-8 sm:left-28 md:left-40 lg:left-52 w-28 sm:w-36 md:w-44 lg:w-52 z-10 pointer-events-none select-none"
      >
        <motion.div
          animate={{ y: [-7, 7, -7], rotate: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/svgs/circle-lime.svg"
            alt="Decorative Lime Donut"
            width={200}
            height={200}
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* ===================================================================== */}
      {/* Floating 3D SVGs: Right Side Animated Group                          */}
      {/* ===================================================================== */}

      {/* 5. Lime Pyramid (Top-Right, closer to center) */}
      <motion.div
        initial={{ x: 120, opacity: 0, scale: 0.7, rotate: -15 }}
        whileInView={{ x: 0, opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", damping: 18, stiffness: 85, delay: 0.2 }}
        className="absolute top-2 right-20 sm:top-6 sm:right-32 md:right-48 lg:right-60 w-20 sm:w-28 md:w-36 lg:w-40 z-10 pointer-events-none select-none"
      >
        <motion.div
          animate={{ y: [-6, 6, -6], rotate: [0, 4, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/svgs/piramid-ime.svg"
            alt="Decorative Lime Pyramid"
            width={160}
            height={160}
            className="w-full h-auto drop-shadow-xl"
          />
        </motion.div>
      </motion.div>

      {/* 6. White 3D Cylinder (Top-Right corner) */}
      <motion.div
        initial={{ x: 140, y: -40, opacity: 0, scale: 0.7, rotate: 20 }}
        whileInView={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", damping: 20, stiffness: 90, delay: 0.12 }}
        className="absolute -top-10 -right-6 sm:-top-8 sm:right-0 lg:top-0 lg:right-6 w-28 sm:w-36 md:w-48 lg:w-56 z-10 pointer-events-none select-none"
      >
        <motion.div
          animate={{ y: [8, -8, 8], rotate: [0, -3, 0] }}
          transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/svgs/cylinder-white.svg"
            alt="Decorative White Cylinder"
            width={220}
            height={220}
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* 7. Lime Spiral Spring (Bottom-Right corner) */}
      <motion.div
        initial={{ x: 130, y: 60, opacity: 0, scale: 0.7, rotate: 25 }}
        whileInView={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 15 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", damping: 19, stiffness: 85, delay: 0.28 }}
        className="absolute -bottom-8 -right-4 sm:-bottom-6 sm:right-4 lg:bottom-0 lg:right-8 w-24 sm:w-32 md:w-40 lg:w-48 z-10 pointer-events-none select-none"
      >
        <motion.div
          animate={{ y: [-8, 8, -8], rotate: [15, 10, 15] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/svgs/spine-lime.svg"
            alt="Decorative Lime Spring"
            width={190}
            height={190}
            className="w-full h-auto drop-shadow-xl"
          />
        </motion.div>
      </motion.div>

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
