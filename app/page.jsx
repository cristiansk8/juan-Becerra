// /app/page.jsx

import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "@/components/Newsletter";
import InstagramFeed from "@/components/InstagramFeed";


export default function HomePage() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <Newsletter />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
