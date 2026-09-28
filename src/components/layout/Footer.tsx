"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";

import footerLinksData from "@/data/footerLinks.json";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-12 border-t border-neutral-800">
      <Container size="wide">
        {/* Newsletter Callout */}
        <div className="bg-primary-900/50 rounded-3xl p-8 sm:p-12 mb-16 border border-primary-800/60 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary-500/20 text-secondary-400 text-label-xs font-semibold uppercase tracking-wider mb-3">
              Stay Ahead of the Curve
            </span>
            <h3 className="text-heading-s font-semibold text-white">
              Subscribe to ByteSpace Weekly
            </h3>
            <p className="text-body-m text-neutral-300 mt-2">
              Receive hand-picked tutorials, emerging tech updates, and exclusive student discounts directly to your inbox.
            </p>
          </div>
          <div className="w-full md:w-auto z-10">
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address..."
                className="px-5 py-3.5 rounded-full bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-400 text-body-s focus:outline-none focus:border-secondary-500 w-full sm:w-80"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-full bg-secondary-500 text-neutral-950 font-semibold hover:bg-secondary-400 transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-neutral-800">
          {/* Brand Info */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-secondary-500 shadow-md">
                <Sparkles className="w-5 h-5 fill-secondary-500" />
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-white">
                Byte<span className="text-primary-400">Space</span>
              </span>
            </Link>
            <p className="text-body-m text-neutral-400 max-w-sm mb-6">
              ByteSpace is the premier learning accelerator for digital creators, engineers, and designers. Empowering modern careers worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/YEL-59/ByteSpace"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinksData.map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="font-heading text-label-m font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-s text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-body-xs text-neutral-500">
          <p>© {new Date().getFullYear()} ByteSpace Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-neutral-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-neutral-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-neutral-400 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
