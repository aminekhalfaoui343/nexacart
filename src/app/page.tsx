import BenefitsSection from "@/components/home/BenefitsSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSection from "@/components/home/HeroSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import PromoBanner from "@/components/home/PromoBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <PromoBanner />
      <BenefitsSection />
      <NewsletterSection />
    </>
  );
}