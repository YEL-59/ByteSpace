"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Lock, Mail, User } from "lucide-react";
import Button from "@/components/common/Button";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert("Please agree to the Terms of Service.");
      return;
    }
    alert(`Account created for: ${fullName} (${email})`);
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 px-4 bg-neutral-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-white max-w-4xl mx-auto">
          {/* Left Visual Panel */}
          <div className="lg:col-span-5 bg-primary-600 p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
            {/* 3D Shapes */}
            <div className="absolute top-4 left-4 w-12 h-12 text-secondary-500/80 pointer-events-none rotate-12">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <polygon points="50,0 65,35 100,50 65,65 50,100 35,65 0,50 35,35" />
              </svg>
            </div>
            <div className="absolute bottom-6 right-6 w-20 h-20 text-secondary-400/50 pointer-events-none">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8">
                <rect x="20" y="20" width="60" height="60" rx="15" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-secondary-400 mb-6">
                <Sparkles className="w-5 h-5 fill-secondary-400" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold leading-tight">
                Start your journey with ByteSpace
              </h2>
              <p className="mt-3 text-body-s text-primary-100">
                Join over 50,000 students and professionals mastering technical skills with recognized certifications.
              </p>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-primary-500/50">
              <div className="bg-primary-700/60 rounded-2xl p-4 backdrop-blur-xs border border-primary-500/30">
                <p className="text-body-xs text-primary-100">
                  ✨ Instant access to 20+ free foundation workshops upon registration.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
            <h1 className="font-heading text-heading-xs sm:text-heading-s font-bold text-neutral-900">
              Create an Account
            </h1>
            <p className="mt-1 text-body-s text-neutral-500">
              Already have an account?{" "}
              <Link href="/login" className="text-primary-600 font-semibold hover:underline">
                Sign in
              </Link>
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="block text-label-xs font-semibold text-neutral-700 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-neutral-200 text-body-s text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-label-xs font-semibold text-neutral-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-neutral-200 text-body-s text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-label-xs font-semibold text-neutral-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 8 characters"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-neutral-200 text-body-s text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
                  />
                </div>
              </div>

              <div className="flex items-start pt-1">
                <input
                  id="agree-terms"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                />
                <label htmlFor="agree-terms" className="ml-2 text-body-xs text-neutral-600 leading-tight">
                  I agree to the{" "}
                  <Link href="#" className="text-primary-600 underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-primary-600 underline">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="w-full mt-2"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Create Account
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
