import HeroSection from "@/components/home/HeroSection";
import PartnerLogos from "@/components/home/PartnerLogos";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import CategoryGrid from "@/components/home/CategoryGrid";
import GrowthSection from "@/components/home/GrowthSection";
import CreatorCtaBanner from "@/components/home/CreatorCtaBanner";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnerLogos />
      <FeaturedCourses />
      <CategoryGrid />
      <GrowthSection />
      <CreatorCtaBanner />
      <TestimonialsSection />
    </>
  );
}
