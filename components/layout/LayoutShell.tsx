"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface LayoutShellProps {
  children: React.ReactNode;
}

export default function LayoutShell({ children }: LayoutShellProps) {
  const pathname = usePathname();

  // Detect if current route is an authentication route (e.g., /login, /register)
  const isAuthRoute =
    pathname?.startsWith("/login") ||
    pathname?.startsWith("/register");

  if (isAuthRoute) {
    // Auth routes have their own dedicated layout with no Navbar or Footer
    return <main className="min-h-screen w-full flex flex-col">{children}</main>;
  }

  // Standard public and marketing pages include Navbar and Footer
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
