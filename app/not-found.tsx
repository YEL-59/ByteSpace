"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] lg:min-h-screen bg-[#003be2] hero-grid-bg text-white relative overflow-hidden flex flex-col justify-center items-center pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center relative z-10 select-none">
        {/* ================================================================= */}
        {/* Giant Lime Gradient 404 Number                                    */}
        {/* ================================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center items-center"
        >
          <span className="font-heading font-black text-[180px] sm:text-[280px] md:text-[360px] lg:text-[440px] xl:text-[480px] leading-[0.78] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#CEF001] via-[#bbf212]/85 to-[#7cb324]/20 select-none">
            404
          </span>
        </motion.div>

        {/* ================================================================= */}
        {/* Overlapping Headline Text: "The page you are looking for doesn't exist" */}
        {/* ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="-mt-16 sm:-mt-24 md:-mt-32 lg:-mt-38 xl:-mt-44 relative z-10 flex flex-col items-center"
        >
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[76px] font-extrabold text-white text-center leading-[1.12] tracking-tight max-w-4xl px-4 drop-shadow-sm">
            The page you are looking<br className="hidden sm:inline" /> for doesn&apos;t exist
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-6 text-white/80 text-sm sm:text-base md:text-lg font-normal max-w-xl text-center px-4">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Back to Home Button */}
          <div className="mt-8 sm:mt-10">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="bg-[#CEF001] hover:bg-[#bde200] text-neutral-950 font-bold px-8 sm:px-10 py-3 sm:py-3.5 rounded-full text-sm sm:text-base transition-colors shadow-lg cursor-pointer"
              >
                Back to Home
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
