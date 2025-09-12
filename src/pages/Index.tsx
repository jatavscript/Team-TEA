import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FestivalFilters from "@/components/FestivalFilters";
import FeaturedCelebrations from "@/components/FeaturedCelebrations";
import CulturalCalendar from "@/components/CulturalCalendar";
import ParticipationGuide from "@/components/ParticipationGuide";
import FestivalMemories from "@/components/FestivalMemories";
import CulturalInsights from "@/components/CulturalInsights";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FestivalFilters />
      <FeaturedCelebrations />
      <CulturalCalendar />
      <ParticipationGuide />
      <FestivalMemories />
      <CulturalInsights />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;