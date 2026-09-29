import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col max-w-3xl", alignClasses[align], className)}>
      {badge && (
        <span
          className={cn(
            "mb-3 px-3.5 py-1 rounded-full text-label-xs font-semibold uppercase tracking-wider",
            light
              ? "bg-secondary-500/20 text-secondary-300 border border-secondary-400/30"
              : "bg-secondary-100 text-neutral-900 border border-secondary-300"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-heading-s sm:text-heading-m font-semibold tracking-tight",
          light ? "text-white" : "text-neutral-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-body-m sm:text-body-l max-w-2xl",
            light ? "text-neutral-200" : "text-neutral-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
