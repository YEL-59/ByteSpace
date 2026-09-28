"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Lock, Mail, Eye, EyeOff } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logged in as: ${email}`);
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 px-4 bg-neutral-50/50">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-white max-w-4xl mx-auto">
          {/* Left Visual Panel (Electric Blue + Lime 3D accents) */}
          <div className="lg:col-span-5 bg-primary-600 p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background 3D Lime Doodle */}
            <div className="absolute top-4 right-4 w-12 h-12 text-secondary-500/80 pointer-events-none rotate-45">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <polygon points="50,0 65,35 100,50 65,65 50,100 35,65 0,50 35,35" />
              </svg>
            </div>
            <div className="absolute bottom-4 left-4 w-16 h-16 text-secondary-400/60 pointer-events-none">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-secondary-400 mb-6">
                <Sparkles className="w-5 h-5 fill-secondary-400" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold leading-tight">
                Welcome back to ByteSpace
              </h2>
              <p className="mt-3 text-body-s text-primary-100">
                Continue your learning streak, unlock lesson challenges, and connect with mentors.
              </p>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-primary-500/50">
              <div className="bg-primary-700/60 rounded-2xl p-4 backdrop-blur-xs border border-primary-500/30">
                <p className="text-body-xs text-primary-100 italic">
                  &ldquo;ByteSpace helped me transition to a senior full-stack engineer within 6 months.&rdquo;
                </p>
                <p className="text-label-xs font-semibold text-secondary-400 mt-2">
                  — Alex Rivera, Stripe
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
            <h1 className="font-heading text-heading-xs sm:text-heading-s font-bold text-neutral-900">
              Sign In
            </h1>
            <p className="mt-1 text-body-s text-neutral-500">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-primary-600 font-semibold hover:underline">
                Create an account
              </Link>
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-label-xs font-semibold text-neutral-700">
                    Password
                  </label>
                  <Link href="#" className="text-label-xs text-primary-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-11 py-3 rounded-xl border border-neutral-200 text-body-s text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                />
                <label htmlFor="remember-me" className="ml-2 text-body-xs text-neutral-600">
                  Remember me for 30 days
                </label>
              </div>

              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="w-full"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Sign In to Account
              </Button>

              <div className="relative my-6 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200" />
                </div>
                <span className="relative bg-white px-4 text-body-xs text-neutral-400 uppercase tracking-wider">
                  Or continue with
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-neutral-200 text-label-s text-neutral-700 hover:bg-neutral-50 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5.1 3.7-8.9z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.8s.2-2.1.4-2.8L1.9 6.3C.7 8.7 0 10.3 0 12s.7 3.3 1.9 5.7l3.7-2.9z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z"
                    />
                  </svg>
                  <span>Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-neutral-200 text-label-s text-neutral-700 hover:bg-neutral-50 transition-colors"
                >
                  <svg className="w-4 h-4 fill-neutral-900" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
