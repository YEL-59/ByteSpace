export interface Instructor {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: string;
  categoryId: string;
  badge?: "Bestseller" | "Hot" | "Popular" | "Trending" | "Top Rated" | "New";
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice: number;
  level: string;
  duration: string;
  lessonsCount: number;
  commentsCount?: number;
  studentAvatars?: string[];
  instructor: Instructor;
  thumbnail: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  courseCount: number;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  avatarBg?: string;
  rating?: number;
  course?: string;
  content: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface PlatformStats {
  activeStudents: string;
  expertMentors: string;
  certifiedCourses: string;
  completionRate: string;
  satisfactionScore: string;
}
