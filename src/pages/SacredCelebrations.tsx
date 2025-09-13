import HeroSection from "@/components/SacredCelebrations/HeroSection";
import FestivalFilters from "@/components/SacredCelebrations/FestivalFilters";
import FeaturedCelebrations from "@/components/SacredCelebrations/FeaturedCelebrations";
import CulturalCalendar from "@/components/SacredCelebrations/CulturalCalendar";
import ParticipationGuide from "@/components/SacredCelebrations/ParticipationGuide";
import FestivalMemories from "@/components/SacredCelebrations/FestivalMemories";
import CulturalInsights from "@/components/SacredCelebrations/CulturalInsights";
import Testimonials from "@/components/SacredCelebrations/Testimonials";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
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