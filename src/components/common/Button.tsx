import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  icon,
  iconPosition = "right",
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow active:scale-[0.99]",
    secondary:
      "bg-secondary-500 text-neutral-950 font-semibold hover:bg-secondary-400 shadow-sm hover:shadow-md active:scale-[0.99]",
    outline:
      "border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50 active:scale-[0.99]",
    ghost:
      "text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100",
    dark:
      "bg-neutral-900 text-white hover:bg-neutral-800 active:scale-[0.99]",
  };

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-label-xs rounded-full gap-1.5",
    md: "px-5 py-2.5 text-label-s rounded-full gap-2",
    lg: "px-7 py-3.5 text-label-m rounded-full gap-2.5",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
