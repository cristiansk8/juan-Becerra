// /app/page.jsx

import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "@/components/Newsletter";
import InstagramFeed from "@/components/InstagramFeed";
import PromotionBanner from "@/components/PromotionBanner";
import SeasonalBanner from "@/components/SeasonalBanner";
import BrandPhilosophy from "@/components/BrandPhilosophy";


export default function HomePage() {
  return (
    <main>
      <AnnouncementBar />
      <PromotionBanner />
      <Navbar />
      <HeroSection />
      <SeasonalBanner />
      <CategorySection />
      <FeaturedProducts />
      <BrandPhilosophy />
      <Newsletter />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
