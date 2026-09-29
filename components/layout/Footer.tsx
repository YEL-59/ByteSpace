"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import footerLinksData from "@/data/footerLinks.json";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      alert("Thank you for subscribing to ByteSpace updates!");
      setEmail("");
    }
  };

  return (
    <footer className="bg-white text-neutral-900 pt-16 pb-10 border-t border-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 pb-12">
          {/* Left Column: Brand & Newsletter */}
          <div className="max-w-md">
            <Link href="/" className="inline-block">
              <Image
                src="/svgs/logo_dark.svg"
                alt="ByteSpace"
                width={152}
                height={33}
                priority
              />
            </Link>

            <p className="mt-4 text-xs sm:text-[13px] text-neutral-600 leading-relaxed max-w-sm">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input + Search/Subscribe Button */}
            <form onSubmit={handleSubscribe} className="mt-5 flex items-center gap-2.5">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-5 py-2.5 rounded-full border border-neutral-300 text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-500 w-56 sm:w-64 bg-white transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#CEF001] text-neutral-950 font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-sm shadow-[#CEF001]/25 cursor-pointer shrink-0"
              >
                Search
              </button>
            </form>

            <p className="mt-3 text-[10px] sm:text-[11px] text-neutral-400 leading-normal max-w-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: 3 Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            {footerLinksData.map((col, colIdx) => (
              <div key={colIdx}>
                <ul className="space-y-3 sm:space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-[13px] text-neutral-600 hover:text-neutral-950 font-medium transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-neutral-500">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6 sm:gap-8">
            <Link href="/privacy" className="hover:text-neutral-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-neutral-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-neutral-900 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
