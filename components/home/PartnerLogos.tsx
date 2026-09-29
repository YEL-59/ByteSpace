"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import partnersData from "@/data/partners.json";
import { Partner } from "@/types";

export default function PartnerLogos() {
  const partners = partnersData as Partner[];

  return (
    <section className="relative py-8 sm:py-10 md:py-12 bg-[#F8F9FA] border-y border-[#ECEEF2] overflow-hidden select-none">
      <div className="w-full">
        <Marquee
          direction="left"
          speed={45}
          pauseOnHover={true}
          autoFill={true}
          gradient={true}
          gradientColor="#F8F9FA"
          gradientWidth={100}
          className="overflow-hidden"
        >
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="mx-6 sm:mx-8 md:mx-12 lg:mx-16 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer opacity-80 hover:opacity-100"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={168}
                height={41}
                priority
                className="h-7 sm:h-8 md:h-9 w-auto object-contain pointer-events-none"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
