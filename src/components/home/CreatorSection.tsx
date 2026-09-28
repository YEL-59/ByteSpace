import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Video, BarChart3, DollarSign, Sparkles } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

const CREATOR_PERKS = [
  {
    icon: <Video className="w-5 h-5 text-primary-600" />,
    title: "Intuitive Course Builder",
    description: "Upload high-definition video modules, interactive quizzes, and downloadable assets in minutes.",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-primary-600" />,
    title: "Real-Time Student Analytics",
    description: "Track completion rates, quiz scores, and student engagement with live data visualizers.",
  },
  {
    icon: <DollarSign className="w-5 h-5 text-primary-600" />,
    title: "Automated Global Payouts",
    description: "Earn industry-leading creator royalties with direct, hassle-free monthly payments worldwide.",
  },
];

export default function CreatorSection() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50/60 border-t border-neutral-100" id="creators">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Creator Information */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-label-xs font-semibold uppercase tracking-wider mb-4 border border-primary-200">
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span>For Mentors & Educators</span>
            </span>

            <h2 className="text-heading-s sm:text-heading-m font-semibold text-neutral-900 tracking-tight leading-tight">
              Create & Manage Courses Easily
            </h2>

            <p className="mt-4 text-body-l text-neutral-500">
              Share your expertise with a global audience of eager learners. We handle hosting, video streaming, payments, and marketing so you can focus on teaching.
            </p>

            <div className="mt-8 space-y-6">
              {CREATOR_PERKS.map((perk, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 shadow-xs">
                    {perk.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-label-l font-semibold text-neutral-900">
                      {perk.title}
                    </h3>
                    <p className="text-body-s text-neutral-500 mt-1">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/register?role=creator">
                <Button variant="secondary" size="lg">
                  Become a Creator
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual of Creator Dashboard */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl bg-white p-4 sm:p-6 aspect-4/3 max-w-lg mx-auto">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="ByteSpace creator presenting lessons"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Creator Earning Widget Overlay */}
              <div className="absolute bottom-8 right-8 bg-neutral-900/95 backdrop-blur-md text-white p-4 rounded-2xl shadow-xl border border-neutral-700 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary-500 text-neutral-950 flex items-center justify-center font-bold">
                  $
                </div>
                <div>
                  <p className="text-body-xs text-neutral-400">Monthly Creator Earning</p>
                  <p className="font-heading text-lg font-bold text-white">$12,480.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
