# ByteSpace — Modern EdTech Learning Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployment-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

ByteSpace is a high-performance, pixel-perfect frontend implementation of a modern EdTech learning platform, built with **Next.js (App Router)**, **Tailwind CSS v4**, and **TypeScript** based strictly on the provided Figma design system.

---

## 🌟 What Was Built

### 1. Landing Page (Required)
- **Header & Navbar:** Interactive navigation, quick search, shopping bag badge, and login/register action buttons.
- **Hero Section:** High-energy Electric Blue canvas (`#0057E8`) with 3D Lime geometric doodles (`#CEF001`), course search bar with category selector, and floating live metrics badge (*"16k+ Students Active"*).
- **Partner Brands:** Ticker featuring trusted industry partners (Coursera, Udemy, Skillshare, edX, Masterclass, Pluralsight).
- **Featured Courses ("Discover Your Passion, Build Your Skills"):** Interactive category filter tabs (`All`, `Web Development`, `UI/UX Design`, `AI`, `Data & Cloud`, `Business`) dynamically filtering responsive course cards with ratings, instructor information, and pricing.
- **Diverse Learning Paths:** Grid of 6 career tracks with custom icons, badge counters, and interactive elevation states.
- **Professional Growth Section ("Your Path to Professional Growth Starts Here!"):** Platform value propositions, 95% completion rate metric, and accredited certification highlights.
- **Creator Platform ("Create & Manage Courses Easily"):** Dedicated tools highlight for instructors and mentors with earnings preview.
- **Creator CTA Banner ("Unlock Your Potential as a Creator"):** Electric Blue & Neon Lime banner with direct action CTA.
- **Community Testimonials ("Discover What Our Community Is Saying"):** Verified student review cards with 5-star ratings and student roles.
- **Footer:** Brand mission, newsletter subscription, multi-column links, social links, and copyright.

### 2. Authentication Pages (Bonus / Extra Credit)
- **Login Page (`/login`):** Split-screen layout featuring high-contrast blue/lime visual hero panel, form with password toggle, remember-me checkbox, and Google/GitHub OAuth actions.
- **Register Page (`/register`):** Split-screen account registration form with name, email, password, and Terms agreement.

### 3. Extended Features
- **Course Catalog & Search (`/courses`):** Live keyword search, category filter pills, course counters, and empty state handler.
- **Course Details Page (`/courses/[id]`):** Dynamic route featuring course overview, syllabus curriculum list, instructor biography, and sticky pricing card.
- **Custom 404 Page (`/not-found`):** Matching the Figma screen with custom typography and navigation back to Home.

---

## 🎨 Design System & Tokens

### Color Palette Matrix
- **Primary (Electric Violet / Blue):**
  - `50`: `#E7F0FF` | `100`: `#C1DCFF` | `200`: `#94C4FF` | `300`: `#63A7FF` | `400`: `#3B8AFF`
  - `500`: `#166FFF` | `600`: `#0057E8` (Main Brand) | `700`: `#0043BF` | `800`: `#003399` | `900`: `#00267A` | `950`: `#00164D`
- **Secondary (Neon Lime Accent):**
  - `50`: `#F6FFE4` | `100`: `#ECFFC1` | `200`: `#DEFF92` | `300`: `#CCFF5C` | `400`: `#BAFF26`
  - `500`: `#CEF001` (Key CTAs & Doodles) | `600`: `#A7CE00` | `700`: `#84A900` | `800`: `#648500` | `900`: `#486300` | `950`: `#2F4200`
- **Neutral (Grayscale):**
  - `50`: `#F2F3F6` | `100`: `#E4E6EB` | `200`: `#CAD0D7` | `300`: `#ACB6BE` | `400`: `#8F9CA7`
  - `500`: `#6E8090` | `600`: `#546573` | `700`: `#404C57` | `800`: `#313A43` | `900`: `#262D34` | `950`: `#1A1E23`

### Typography System
- **Headings:** `Poppins` (SemiBold `600`) — Heading L (`72px`), M (`48px`), S (`36px`), XS (`20px`) with 120% line-height.
- **Body & Labels:** `Satoshi` (Regular `400` & Medium `500`) — Body L (`18px`), M (`16px`), S (`14px`), XS (`12px`) with 160% line-height.

---

## 📁 Project Architecture

```text
ByteSpace/
├── docs/
│   └── PROJECT_SPEC.md             # Complete design tokens, mock data & requirement docs
├── public/                         # Static assets & icons
├── src/
│   ├── app/
│   │   ├── (auth)/                 # Route group for authentication
│   │   │   ├── login/page.tsx      # Split-screen Login (Bonus)
│   │   │   └── register/page.tsx   # Split-screen Register (Bonus)
│   │   ├── courses/
│   │   │   ├── page.tsx            # Course Search & Catalog
│   │   │   └── [id]/page.tsx       # Dynamic Course Details
│   │   ├── not-found.tsx           # Custom 404 screen
│   │   ├── layout.tsx              # Root Layout (Poppins font, Navbar, Footer)
│   │   ├── page.tsx                # Complete Landing Page (10 sections)
│   │   └── globals.css             # Tailwind v4 theme, tokens & typography utilities
│   ├── components/
│   │   ├── common/                 # Reusable UI primitives (Button, Badge, Container, SectionHeading)
│   │   ├── layout/                 # Navbar, Footer
│   │   └── home/                   # HeroSection, PartnerLogos, FeaturedCourses, CourseCard,
│   │                               # CategoryGrid, GrowthSection, CreatorSection,
│   │                               # CreatorCtaBanner, TestimonialsSection
│   ├── data/                       # Modular mock JSON data (Frontend-only)
│   │   ├── courses.json
│   │   ├── categories.json
│   │   ├── testimonials.json
│   │   ├── partners.json
│   │   └── stats.json
│   ├── types/                      # TypeScript definitions (Course, Category, Testimonial, etc.)
│   └── lib/                        # Utility functions (cn / clsx / tailwind-merge)
├── next.config.ts
├── tailwind.config.ts / globals.css
└── tsconfig.json
```

---

## 🌿 Git Branching Strategy & Pull Requests

This repository follows industry-standard Git flow without committing directly to `main`:

1. **`main`**: Initial repository root.
2. **`feature/project-setup-and-tokens`**: Next.js scaffolding, Tailwind v4 design tokens, Poppins/Satoshi typography, mock JSON datasets, and reusable layout components.
3. **`feature/landing-page`**: Complete 10-section landing page implementation.
4. **`feature/auth-and-catalog`**: Split-screen Login and Register pages (Bonus), Course Search catalog, Dynamic Course Details, and 404 page.

👉 **Active Pull Request**: [Pull Request #2: feat: landing page, authentication split-screens, course catalog, and design system](https://github.com/YEL-59/ByteSpace/pull/2)

---

## 🚀 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YEL-59/ByteSpace.git
   cd ByteSpace
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build production bundle:**
   ```bash
   npm run build
   ```

---

## 🌐 Deployment to Vercel

1. Import the repository `https://github.com/YEL-59/ByteSpace` on [Vercel](https://vercel.com).
2. Framework preset: **Next.js** (automatically detected).
3. Root directory: `./`.
4. Click **Deploy**.
