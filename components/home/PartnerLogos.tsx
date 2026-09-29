import React from "react";
import Image from "next/image";
import partnersData from "@/data/partners.json";
import { Partner } from "@/types";

export default function PartnerLogos() {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-[#F8F9FA] border-y border-[#ECEEF2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          {(partnersData as Partner[]).map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer opacity-90 hover:opacity-100"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={168}
                height={41}
                priority
                className="h-7 sm:h-8 md:h-9 w-auto object-contain select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
