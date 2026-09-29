"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { loginAction } from "../actions";

const STUDENT_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80",
];

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#003be2] hero-grid-bg text-white relative overflow-hidden py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-center">
      <div className="w-full max-w-[1560px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-20 items-center">
          {/* ======================================================================= */}
          {/* Left Column: Logo, Heading & Floating 3D Visual Composition             */}
          {/* ======================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Top-left ByteSpace Lime 'B' Icon Logo */}
            <Link href="/" className="inline-flex items-center mb-6 group w-fit">
              <div className="w-9 h-9 sm:w-10 sm:h-10 relative transition-transform duration-200 group-hover:scale-105">
                <svg viewBox="0 0 30 32" fill="none" className="w-full h-full">
                  <path
                    d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z"
                    fill="#CEF001"
                  />
                  <path
                    d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z"
                    fill="#CEF001"
                  />
                  <path
                    d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z"
                    fill="#CEF001"
                  />
                </svg>
              </div>
            </Link>

            {/* Left Header Title & Subtitle */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
            >
              Sign in with ease
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-3 text-white/90 text-sm sm:text-base lg:text-[17px] max-w-lg leading-relaxed font-normal"
            >
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </motion.p>

            {/* =================================================================== */}
            {/* Visual Assembly: auth1, auth2, auth3, auth4, auth5 & Happy Students */}
            {/* =================================================================== */}
            <div className="relative w-full max-w-[600px] xl:max-w-[650px] h-[480px] sm:h-[540px] lg:h-[580px] xl:h-[620px] mt-10 select-none">
              {/* 1. Back Course Card (auth2.svg - Build Digital...) */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute top-10 sm:top-14 left-0 w-[310px] sm:w-[370px] lg:w-[410px] xl:w-[450px] aspect-[373/384] z-10 drop-shadow-xl"
              >
                <Image
                  src="/svgs/auth2.svg"
                  alt="Build Digital Course Card"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* 2. Front Course Card (auth1.svg - the Power of Big Data) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute top-0 left-16 sm:left-24 lg:left-28 xl:left-32 w-[320px] sm:w-[380px] lg:w-[420px] xl:w-[460px] aspect-[373/384] z-20 drop-shadow-2xl"
              >
                <Image
                  src="/svgs/auth1.svg"
                  alt="the Power of Big Data Course Card"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* 3. Lime 3D Donut / Circle (auth5.svg) - Top-Left Overlap */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: "spring", damping: 18, stiffness: 80, delay: 0.4 }}
                className="absolute top-4 sm:top-8 left-10 sm:left-14 z-30 w-26 sm:w-32 lg:w-36 xl:w-40 aspect-square pointer-events-none"
              >
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 6, -6, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/svgs/auth5.svg"
                    alt="Lime 3D Donut Circle"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>

              {/* 4. Lime 3D Pyramid / Prisma (auth4.svg) - Bottom-Left Overlap */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", damping: 18, stiffness: 80, delay: 0.45 }}
                className="absolute bottom-2 sm:bottom-4 left-0 sm:left-2 z-30 w-32 sm:w-40 lg:w-48 xl:w-52 aspect-square pointer-events-none"
              >
                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/svgs/auth4.svg"
                    alt="Lime 3D Prisma"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>

              {/* 5. White 3D Squiggle / Coil (auth3.svg) - Bottom-Right Background */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ type: "spring", damping: 18, stiffness: 80, delay: 0.5 }}
                className="absolute bottom-10 sm:bottom-14 right-2 sm:right-6 z-20 w-30 sm:w-38 lg:w-44 xl:w-48 aspect-square pointer-events-none"
              >
                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/svgs/auth3.svg"
                    alt="White 3D Squiggle Coil"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>

              {/* 6. Happy Students Lime Card - Bottom-Right Overlap */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", damping: 18, stiffness: 90, delay: 0.55 }}
                whileHover={{ scale: 1.03 }}
                className="absolute bottom-4 sm:bottom-8 left-32 sm:left-44 lg:left-52 xl:left-56 z-30 bg-[#CEF001] text-neutral-950 rounded-2xl sm:rounded-3xl shadow-2xl px-5 py-4 sm:px-6 sm:py-4.5 border border-white/50 min-w-[230px] sm:min-w-[260px]"
              >
                <p className="font-heading text-sm sm:text-base font-bold text-neutral-950 leading-tight">
                  Happy Students
                </p>
                <div className="flex items-center gap-1.5 mt-0.5 text-xs sm:text-sm text-neutral-800 font-semibold">
                  <span>4.5</span>
                  <span className="text-neutral-600 font-normal">(240)</span>
                  {/* Inline vector star icon */}
                  <svg className="w-3.5 h-3.5 fill-blue-900 text-blue-900 ml-0.5" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>

                {/* Overlapping User Avatars + 2K+ pill */}
                <div className="flex items-center -space-x-1.5 sm:-space-x-2 mt-2.5">
                  {STUDENT_AVATARS.map((avatarUrl, idx) => (
                    <div
                      key={idx}
                      className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden ring-2 ring-[#CEF001]"
                    >
                      <Image
                        src={avatarUrl}
                        alt="Student avatar"
                        fill
                        sizes="28px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-neutral-950 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-[#CEF001]">
                    2K+
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ======================================================================= */}
          {/* Right Column: Clean White Rounded Sign In Card (Next.js Server Action)  */}
          {/* ======================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white text-neutral-900 rounded-[36px] sm:rounded-[44px] xl:rounded-[48px] p-8 sm:p-12 lg:p-14 xl:p-16 shadow-2xl w-full max-w-[560px] xl:max-w-[620px] min-h-[580px] sm:min-h-[660px] xl:min-h-[720px] flex flex-col justify-between border border-white/20"
            >
              <div>
                {/* Top Label */}
                <p className="text-[#003be2] font-semibold text-sm sm:text-base tracking-wide">
                  Sign In
                </p>

                {/* Main Headline */}
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold text-neutral-900 leading-[1.12] mt-2 mb-8 xl:mb-10 tracking-tight">
                  Welcome Back
                </h2>

                {/* Form handled with Next.js Server Action (no useState needed) */}
                <form action={loginAction} className="space-y-5 sm:space-y-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-neutral-700 mb-2">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="designer@example.com"
                      className="w-full px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl border border-neutral-200 text-neutral-900 text-sm sm:text-base placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#003be2] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-neutral-700 mb-2">
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      required
                      placeholder="********"
                      className="w-full px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl border border-neutral-200 text-neutral-900 text-sm sm:text-base placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#003be2] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Right-Aligned Sign In Button */}
                  <div className="flex justify-end pt-2 sm:pt-4">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      type="submit"
                      className="bg-[#CEF001] hover:bg-[#bde200] text-neutral-950 font-bold px-10 sm:px-14 py-3.5 sm:py-4 rounded-full text-base sm:text-lg transition-colors shadow-sm cursor-pointer"
                    >
                      Sign In
                    </motion.button>
                  </div>

                  {/* Divider Line with "or" */}
                  <div className="relative py-4 sm:py-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-neutral-200" />
                    </div>
                    <div className="relative flex justify-center text-xs sm:text-sm text-neutral-400">
                      <span className="bg-white px-4">or</span>
                    </div>
                  </div>

                  {/* Social Login Buttons (Facebook & Google) */}
                  <div className="flex items-center justify-center gap-5 sm:gap-6">
                    {/* Facebook Button */}
                    <button
                      type="button"
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 hover:border-neutral-300 transition-all cursor-pointer shadow-xs group"
                      aria-label="Sign in with Facebook"
                    >
                      <svg
                        className="w-7 h-7 text-neutral-950 transition-transform group-hover:scale-110"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.002C18.343 21.144 22 17.002 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </button>

                    {/* Google Button */}
                    <button
                      type="button"
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 hover:border-neutral-300 transition-all cursor-pointer shadow-xs group"
                      aria-label="Sign in with Google"
                    >
                      <svg
                        className="w-6 h-6 sm:w-7 sm:h-7 text-neutral-950 transition-transform group-hover:scale-110"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              {/* Bottom Link to Register */}
              <p className="text-center text-xs sm:text-sm text-neutral-500 pt-8 sm:pt-10">
                New user?{" "}
                <Link
                  href="/register"
                  className="text-[#003be2] font-semibold hover:underline"
                >
                  Create an account
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
