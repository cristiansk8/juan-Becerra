// /app/page.jsx

import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FeaturedProducts from "../components/FeaturedProducts";


export default function HomePage() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}
