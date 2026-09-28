import React from "react";
import Container from "@/components/common/Container";
import partnersData from "@/data/partners.json";

export default function PartnerLogos() {
  return (
    <section className="py-12 bg-neutral-50 border-b border-neutral-100">
      <Container size="wide">
        <p className="text-center text-label-xs uppercase font-semibold text-neutral-400 tracking-wider mb-8">
          Trusted by learners and enterprise teams from world-leading organizations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          {partnersData.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center gap-2 group cursor-pointer transition-transform hover:scale-105"
            >
              <div className="w-8 h-8 rounded-lg bg-neutral-200 group-hover:bg-primary-600 flex items-center justify-center text-neutral-700 group-hover:text-white transition-colors font-bold text-xs">
                {partner.name.slice(0, 2).toUpperCase()}
              </div>
              <span className="font-heading font-bold text-lg sm:text-xl text-neutral-700 group-hover:text-primary-600 transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
