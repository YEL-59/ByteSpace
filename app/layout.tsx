import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/layout/LayoutShell";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace — Empowering Your Learning Journey",
  description: "Get access to hundreds of courses led by industry experts. Discover your passion, build your skills, and unlock your potential with ByteSpace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-body bg-white text-neutral-800">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
