# ByteSpace — Project Specification, Design System & Data Store

> **Project Name:** ByteSpace  
> **Repository:** [https://github.com/YEL-59/ByteSpace](https://github.com/YEL-59/ByteSpace)  
> **Target Framework:** Next.js (App Router) + TypeScript + Tailwind CSS  
> **Deployment Target:** Vercel (Public URL)

---

## 1. Project Requirements & Job Task Guidelines

### A. Core Deliverables
1. **Landing Page (Required):**
   - High-fidelity, pixel-perfect implementation of the Figma Home design.
   - Fully responsive across Desktop (1440px+), Tablet (768px - 1024px), and Mobile (<768px).
   - Dynamic micro-interactions, smooth hover states, and accessible structure.
2. **Login & Signup Pages (Bonus / Extra Credit):**
   - Full authentication split-screen views from the Figma file.
   - Clean forms with validation states and social login options.
3. **Frontend-Only Architecture:**
   - Powered by modular, structured mock JSON data (`src/data/`).
   - Clean TypeScript interfaces (`src/types/`).
4. **Git & Workflow Rules:**
   - Public repository on GitHub: `https://github.com/YEL-59/ByteSpace.git`.
   - Feature branching workflow (never code directly on `main`).
   - Create a Pull Request (PR) from `feat/landing-page-and-auth` to `main`.
5. **Deployment:**
   - Production deployment on Vercel with a verified live public link.

---

## 2. Design System Tokens

### A. Color Palette Matrix

#### 1. Neutral (Dark / Slate Grayscale)
| Scale | Hex Code | Purpose & Application |
| :--- | :--- | :--- |
| **50** | `#F2F3F6` | Light background surfaces, subtle container tints |
| **100** | `#E4E6EB` | Dividers, subtle borders, card outlines |
| **200** | `#CAD0D7` | Light borders, input borders, disabled outlines |
| **300** | `#ACB6BE` | Placeholder text, secondary icons |
| **400** | `#8F9CA7` | Muted captions, metadata labels, tertiary text |
| **500** | `#6E8090` | Body text (light mode), secondary content |
| **600** | `#546573` | Dark muted text, icons |
| **700** | `#404C57` | Subheadings, card titles, table headers |
| **800** | `#313A43` | Main dark text, primary body reading color |
| **900** | `#262D34` | Headings, primary dark contrast elements |
| **950** | `#1A1E23` | Deep dark backgrounds, footer background |

#### 2. Primary (Electric Violet / Blue)
| Scale | Hex Code | Purpose & Application |
| :--- | :--- | :--- |
| **50** | `#E7F0FF` | Badge backgrounds, active pill highlights |
| **100** | `#C1DCFF` | Hover states on light pill elements |
| **200** | `#94C4FF` | Soft blue highlights |
| **300** | `#63A7FF` | Interactive card borders, focus rings |
| **400** | `#3B8AFF` | Interactive link hover, bright accents |
| **500** | `#166FFF` | Primary brand accent / interactive buttons |
| **600** | `#0057E8` | **Main Hero Banner / Primary Brand Hue** |
| **700** | `#0043BF` | Button hover states, active pressed states |
| **800** | `#003399` | Dark brand elements, deep badges |
| **900** | `#00267A` | Deep contrast brand blue |
| **950** | `#00164D` | Midnight blue text & card contrast |

#### 3. Secondary (Neon Lime / Yellow-Green Accent)
| Scale | Hex Code | Purpose & Application |
| :--- | :--- | :--- |
| **50** | `#F6FFE4` | Subtle lime badge background |
| **100** | `#ECFFC1` | Light lime pills, active filter badges |
| **200** | `#DEFF92` | Soft highlight accents |
| **300** | `#CCFF5C` | Glows, decorative stickers |
| **400** | `#BAFF26` | Vibrant badge accents |
| **500** | `#CEF001` | **Hero 3D doodles, key CTAs, "Get Started" buttons** |
| **600** | `#A7CE00` | Secondary button hover state |
| **700** | `#84A900` | Muted secondary accents |
| **800** | `#648500` | High-contrast borders |
| **900** | `#486300` | Deep secondary text on light lime |
| **950** | `#2F4200` | Darkest secondary contrast |

---

### B. Typography Specifications

- **Heading Font:** `Poppins` (SemiBold / Weight `600`)
- **Body & Label Font:** `Satoshi` (Regular `400` & Medium `500`)

| Style Token | Font Family | Weight | Font Size | Line Height | CSS Utility |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Heading L** | Poppins | 600 (SemiBold) | `72px` (4.5rem) | `120%` (1.2) | `text-heading-l` |
| **Heading M** | Poppins | 600 (SemiBold) | `48px` (3.0rem) | `120%` (1.2) | `text-heading-m` |
| **Heading S** | Poppins | 600 (SemiBold) | `36px` (2.25rem) | `120%` (1.2) | `text-heading-s` |
| **Heading XS** | Poppins | 600 (SemiBold) | `20px` (1.25rem) | `120%` (1.2) | `text-heading-xs` |
| **Body L** | Satoshi | 400 (Regular) | `18px` (1.125rem) | `160%` (1.6) | `text-body-l` |
| **Body M** | Satoshi | 400 (Regular) | `16px` (1.0rem) | `160%` (1.6) | `text-body-m` |
| **Body S** | Satoshi | 400 (Regular) | `14px` (0.875rem) | `160%` (1.6) | `text-body-s` |
| **Body XS** | Satoshi | 400 (Regular) | `12px` (0.75rem) | `160%` (1.6) | `text-body-xs` |
| **Label L** | Satoshi | 500 (Medium) | `18px` (1.125rem) | `120%` (1.2) | `text-label-l` |
| **Label M** | Satoshi | 500 (Medium) | `16px` (1.0rem) | `120%` (1.2) | `text-label-m` |
| **Label S** | Satoshi | 500 (Medium) | `14px` (0.875rem) | `120%` (1.2) | `text-label-s` |
| **Label XS** | Satoshi | 500 (Medium) | `12px` (0.75rem) | `120%` (1.2) | `text-label-xs` |

---

## 3. Figma Screen & Section Breakdown

### Screen 1: Home (Landing Page)
1. **Header / Navbar:**
   - Brand logo with gradient icon: `ByteSpace`
   - Navigation links: `Home`, `Courses`, `Mentors`, `About Us`, `FAQ`
   - Search bar / quick modal trigger
   - Cart icon with item count badge
   - Auth actions: `Log In` (Ghost / Outline) and `Sign Up` (Secondary Lime CTA: `#CEF001`)
2. **Hero Section:**
   - Background: Primary `#0057E8` (Electric Blue) with geometric 3D shapes (cylinders, spheres, stars, zigzags) in secondary lime (`#CEF001`)
   - Headline: *"Get Access to Hundreds Courses Available"*
   - Subtitle: *"Master in-demand skills with interactive courses led by top industry professionals."*
   - Interactive search bar: Category dropdown + input + "Search Course" CTA button
   - Floating social proof badge: *"16k+ Students Active"* with stacked student avatars
   - High-energy hero student visual with floating interactive cards
3. **Partner Brand Logos:**
   - Trusted by industry leaders: Coursera, Udemy, edX, Skillshare, Masterclass, Pluralsight
4. **"Discover Your Passion, Build Your Skills" (Featured Courses):**
   - Filter Tabs: `All`, `Web Development`, `UI/UX Design`, `Artificial Intelligence`, `Business & Marketing`, `Data Science`
   - Course Card Grid (reusable `CourseCard` component):
     - Thumbnail image with Category & Difficulty badge (e.g., "Bestseller", "Beginner")
     - Rating star (4.9), review count (1,240 reviews)
     - Course Title (e.g. "Build Digital Asset: A Comprehensive Guide")
     - Mentor avatar + Instructor name
     - Pricing: Current price (`$49.99`), struck-through original price (`$89.99`)
     - Bookmark & "Enroll Now" actions
   - "Explore More Courses" secondary button
5. **"Explore Diverse Learning Paths at ByteSpace":**
   - Category cards with custom icons, badge counters (`120+ Courses`), and hover scale animations
   - Categories: Web Development, Artificial Intelligence, UI/UX Design, Data & Cloud, Business, Creative Arts
6. **"Your Path to Professional Growth Starts Here!" (Value Proposition):**
   - Value pillars: Expert-led curricula, practical projects, recognized certificates
   - Key platform metrics:
     - `50k+` Active Learners
     - `300+` Expert Mentors
     - `15+` Accredited Certifications
     - `95%` Course Completion Rate
   - High-quality student visual with verified badge floating widgets
7. **"Create & Manage Courses Easily" (Creator / Mentor Section):**
   - Highlights for instructors: intuitive course builder, automated revenue payouts, community discussion forums
   - CTA button: "Join as Creator"
8. **"Unlock Your Potential as a Creator With ByteSpace" (Banner):**
   - Full-width callout section with bold electric blue background and 3D lime shapes
   - Actionable CTA: "Start Teaching Today"
9. **"Discover What Our Community Is Saying" (Testimonials):**
   - Student testimonials with 5-star ratings, quotes, student photos, job titles, and enrolled course names
10. **Footer:**
    - Brand description & mission
    - Newsletter subscribe input: "Enter your email" + "Subscribe" button
    - Multi-column navigation: Explore, Categories, Company, Support, Legal
    - Social links: GitHub, Twitter/X, LinkedIn, Discord, YouTube
    - Copyright & status indicators

---

### Screen 2 & 3: Register & Login (Bonus / Extra Credit)
- **Split Screen Layout:**
  - Left: Electric Blue hero panel with 3D lime doodle elements, value proposition headline, and testimonial card
  - Right: Clean, modern auth card
- **Login Form:** Email, Password, Remember Me checkbox, Forgot Password link, "Sign In" button, Social OAuth buttons (Google, GitHub)
- **Register Form:** Full Name, Email, Password, Confirm Password, Terms of Service checkbox, "Create Account" button

---

### Screen 4 to 8: Catalog, Course Details, Lessons, Reviews, Creator Profile, 404
- Included in mock data schemas and routing structure for future expansion and complete coverage.

---

## 4. Master Mock Data Store

### A. Platform Stats (`stats.json`)
```json
{
  "activeStudents": "50,000+",
  "expertMentors": "300+",
  "certifiedCourses": "1,200+",
  "completionRate": "95%",
  "satisfactionScore": "4.9/5"
}
```

### B. Partner Brands (`partners.json`)
```json
[
  { "id": "p1", "name": "Coursera", "logo": "/images/partners/coursera.svg" },
  { "id": "p2", "name": "Udemy", "logo": "/images/partners/udemy.svg" },
  { "id": "p3", "name": "Skillshare", "logo": "/images/partners/skillshare.svg" },
  { "id": "p4", "name": "edX", "logo": "/images/partners/edx.svg" },
  { "id": "p5", "name": "Masterclass", "logo": "/images/partners/masterclass.svg" },
  { "id": "p6", "name": "Pluralsight", "logo": "/images/partners/pluralsight.svg" }
]
```

### C. Course Categories (`categories.json`)
```json
[
  {
    "id": "web-dev",
    "name": "Web Development",
    "icon": "Code",
    "courseCount": 142,
    "description": "Full-stack, React, Next.js, Node.js & modern web architecture."
  },
  {
    "id": "ai-ml",
    "name": "Artificial Intelligence",
    "icon": "Cpu",
    "courseCount": 98,
    "description": "Machine learning, LLMs, prompt engineering & computer vision."
  },
  {
    "id": "ui-ux",
    "name": "UI/UX Design",
    "icon": "Figma",
    "courseCount": 85,
    "description": "User experience, design systems, Figma & interaction prototyping."
  },
  {
    "id": "data-cloud",
    "name": "Data & Cloud",
    "icon": "Database",
    "courseCount": 76,
    "description": "AWS, GCP, Big Data pipelines, SQL, and data analytics."
  },
  {
    "id": "business",
    "name": "Business & Strategy",
    "icon": "TrendingUp",
    "courseCount": 64,
    "description": "Product management, entrepreneurship, agile & digital marketing."
  },
  {
    "id": "mobile-dev",
    "name": "Mobile App Development",
    "icon": "Smartphone",
    "courseCount": 52,
    "description": "React Native, Flutter, iOS Swift & Android Kotlin."
  }
]
```

### D. Featured Courses (`courses.json`)
```json
[
  {
    "id": "course-1",
    "title": "Build Digital Asset: A Comprehensive Guide",
    "slug": "build-digital-asset-comprehensive-guide",
    "category": "Web Development",
    "categoryId": "web-dev",
    "badge": "Bestseller",
    "rating": 4.9,
    "reviewsCount": 1280,
    "price": 49.99,
    "originalPrice": 89.99,
    "level": "Intermediate",
    "duration": "14h 30m",
    "lessonsCount": 42,
    "instructor": {
      "id": "inst-1",
      "name": "Alex Johnson",
      "role": "Lead Architect at ByteSpace",
      "avatar": "/images/mentors/alex-johnson.webp"
    },
    "thumbnail": "/images/courses/course-digital-asset.webp"
  },
  {
    "id": "course-2",
    "title": "Next.js 15 & Modern Full-Stack Mastery",
    "slug": "nextjs-15-modern-fullstack-mastery",
    "category": "Web Development",
    "categoryId": "web-dev",
    "badge": "Hot",
    "rating": 4.95,
    "reviewsCount": 940,
    "price": 54.99,
    "originalPrice": 99.99,
    "level": "All Levels",
    "duration": "18h 15m",
    "lessonsCount": 58,
    "instructor": {
      "id": "inst-2",
      "name": "Sarah Chen",
      "role": "Senior Full-Stack Engineer",
      "avatar": "/images/mentors/sarah-chen.webp"
    },
    "thumbnail": "/images/courses/course-nextjs.webp"
  },
  {
    "id": "course-3",
    "title": "Enterprise UI/UX Design System in Figma",
    "slug": "enterprise-uiux-design-system-figma",
    "category": "UI/UX Design",
    "categoryId": "ui-ux",
    "badge": "Popular",
    "rating": 4.88,
    "reviewsCount": 820,
    "price": 39.99,
    "originalPrice": 74.99,
    "level": "Beginner to Pro",
    "duration": "12h 45m",
    "lessonsCount": 36,
    "instructor": {
      "id": "inst-3",
      "name": "Marcus Aurel",
      "role": "Product Design Director",
      "avatar": "/images/mentors/marcus-aurel.webp"
    },
    "thumbnail": "/images/courses/course-design-system.webp"
  },
  {
    "id": "course-4",
    "title": "AI Engineering & Practical LLM Application Development",
    "slug": "ai-engineering-practical-llm-applications",
    "category": "Artificial Intelligence",
    "categoryId": "ai-ml",
    "badge": "Trending",
    "rating": 4.92,
    "reviewsCount": 1150,
    "price": 64.99,
    "originalPrice": 119.99,
    "level": "Advanced",
    "duration": "16h 00m",
    "lessonsCount": 48,
    "instructor": {
      "id": "inst-4",
      "name": "Elena Rostova",
      "role": "AI Research Engineer",
      "avatar": "/images/mentors/elena-rostova.webp"
    },
    "thumbnail": "/images/courses/course-ai-engineer.webp"
  },
  {
    "id": "course-5",
    "title": "Data Engineering Pipelines with Python & Snowflake",
    "slug": "data-engineering-pipelines-python-snowflake",
    "category": "Data & Cloud",
    "categoryId": "data-cloud",
    "badge": "Top Rated",
    "rating": 4.85,
    "reviewsCount": 670,
    "price": 44.99,
    "originalPrice": 79.99,
    "level": "Intermediate",
    "duration": "15h 20m",
    "lessonsCount": 38,
    "instructor": {
      "id": "inst-5",
      "name": "David Miller",
      "role": "Principal Data Architect",
      "avatar": "/images/mentors/david-miller.webp"
    },
    "thumbnail": "/images/courses/course-data-pipeline.webp"
  },
  {
    "id": "course-6",
    "title": "Tech Product Management & Growth Hacking",
    "slug": "tech-product-management-growth-hacking",
    "category": "Business & Strategy",
    "categoryId": "business",
    "badge": "Bestseller",
    "rating": 4.91,
    "reviewsCount": 890,
    "price": 49.99,
    "originalPrice": 89.99,
    "level": "All Levels",
    "duration": "11h 10m",
    "lessonsCount": 30,
    "instructor": {
      "id": "inst-6",
      "name": "Jessica Taylor",
      "role": "VP of Growth & Strategy",
      "avatar": "/images/mentors/jessica-taylor.webp"
    },
    "thumbnail": "/images/courses/course-product-management.webp"
  }
]
```

### E. Testimonials (`testimonials.json`)
```json
[
  {
    "id": "t1",
    "name": "Emily Watson",
    "role": "Frontend Developer at Vercel",
    "avatar": "/images/testimonials/emily.webp",
    "rating": 5,
    "course": "Build Digital Asset: A Comprehensive Guide",
    "content": "ByteSpace completely transformed how I learn and apply modern architecture. The bite-sized lessons, interactive projects, and real-world instructor feedback helped me land my dream role."
  },
  {
    "id": "t2",
    "name": "Liam Vance",
    "role": "Product Designer at Stripe",
    "avatar": "/images/testimonials/liam.webp",
    "rating": 5,
    "course": "Enterprise UI/UX Design System in Figma",
    "content": "The design systems curriculum was hands-down the best structured program I have taken online. Extremely polished and immediately applicable to high-scale production design."
  },
  {
    "id": "t3",
    "name": "Sophia Ramirez",
    "role": "Machine Learning Engineer",
    "avatar": "/images/testimonials/sophia.webp",
    "rating": 5,
    "course": "AI Engineering & Practical LLM Application Development",
    "content": "From theory to production deployment of LLM agents, ByteSpace provided exactly the cutting-edge content missing from traditional courses. 10/10 recommended!"
  }
]
```

---

## 5. Submission Checklist

- [x] Initialized Git repository on `main` and pushed to `https://github.com/YEL-59/ByteSpace.git`.
- [x] Created and checked out feature branch `feat/landing-page-and-auth`.
- [x] Complete design system tokens documented in `docs/PROJECT_SPEC.md`.
- [ ] Scaffold Next.js project with Tailwind CSS & TypeScript.
- [ ] Implement Tailwind configuration with exact Figma colors & typography.
- [ ] Store mock data JSON files in `src/data/`.
- [ ] Implement reusable components and Home landing page sections.
- [ ] Implement Login & Register bonus pages.
- [ ] Test build (`npm run build`) and verify responsiveness.
- [ ] Push feature branch and create Pull Request on GitHub.
- [ ] Deploy live URL to Vercel and verify accessibility.
