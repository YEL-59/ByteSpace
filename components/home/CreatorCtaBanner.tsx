import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CreatorCtaBanner() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0A4CEE]"
      id="creator-cta"
    >
      {/* Background Image Overlay - sits at z-0 above section background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/svgs/cta_bg.svg"
          alt="Creator CTA background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-white tracking-tight leading-[1.2]">
            Unlock Your Potential as a <br className="hidden sm:inline" />
            Creator with ByteSpace
          </h2>

          <p className="mt-4 sm:mt-5 text-xs sm:text-[13px] md:text-sm text-white/90 leading-relaxed font-normal max-w-xl mx-auto">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          <div className="mt-7 sm:mt-8">
            <Link href="/register?role=creator">
              <button
                type="button"
                className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-[#CEF001] hover:bg-[#bde000] text-neutral-950 font-bold text-xs sm:text-sm transition-all duration-200 shadow-md cursor-pointer hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                Join as Creator
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
