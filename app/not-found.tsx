import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import Button from "@/components/common/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          {/* Big Stylized 404 */}
          <div className="relative inline-block mb-6">
            <h1 className="font-heading text-8xl sm:text-9xl font-extrabold tracking-tight text-primary-600 select-none">
              4<span className="text-secondary-500">0</span>4
            </h1>
            <div className="absolute -top-3 -right-4 w-10 h-10 text-secondary-500/80 pointer-events-none animate-bounce">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <polygon points="50,0 65,35 100,50 65,65 50,100 35,65 0,50 35,35" />
              </svg>
            </div>
          </div>

          <h2 className="text-heading-s font-semibold text-neutral-900">
            The page you are looking for doesn&apos;t exist
          </h2>
          <p className="mt-3 text-body-m text-neutral-500">
            The page might have been removed, had its name changed, or is temporarily unavailable. Let&apos;s get you back on track!
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/">
              <Button
                variant="primary"
                size="md"
                icon={<Home className="w-4 h-4" />}
                iconPosition="left"
              >
                Back to Home
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                variant="outline"
                size="md"
                icon={<ArrowLeft className="w-4 h-4" />}
                iconPosition="left"
              >
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
