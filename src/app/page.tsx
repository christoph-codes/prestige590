import HeroSection from "@/components/HeroSection";
import HighlightsBar from "@/components/HighlightsBar";
import GallerySection from "@/components/GallerySection";
import OverviewSection from "@/components/OverviewSection";
import SpecificationsSection from "@/components/SpecificationsSection";
import EngineSection from "@/components/EngineSection";
import FeaturesSection from "@/components/FeaturesSection";
import CalloutSection from "@/components/CalloutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HighlightsBar />
      <GallerySection />
      <OverviewSection />
      <SpecificationsSection />
      <EngineSection />
      <FeaturesSection />
      <CalloutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
