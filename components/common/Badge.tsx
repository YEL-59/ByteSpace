import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "neutral" | "hot" | "success";
  size?: "sm" | "md";
  children: React.ReactNode;
}

export default function Badge({
  variant = "primary",
  size = "sm",
  children,
  className,
  ...props
}: BadgeProps) {
  const variantClasses = {
    primary: "bg-primary-50 text-primary-700 border border-primary-200",
    secondary: "bg-secondary-100 text-neutral-900 border border-secondary-300 font-semibold",
    neutral: "bg-neutral-100 text-neutral-700 border border-neutral-200",
    hot: "bg-rose-50 text-rose-700 border border-rose-200 font-medium",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  };

  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-label-xs rounded-full",
    md: "px-3.5 py-1 text-label-s rounded-full",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-medium",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
