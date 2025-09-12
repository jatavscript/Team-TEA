import { HeritageHero } from "@/components/DigitalArchives/heritage-hero";
import { ArchiveOverview } from "@/components/DigitalArchives/archive-overview";
import { AiSearch } from "@/components/DigitalArchives/ai-search";
import { FeaturedItems } from "@/components/DigitalArchives/featured-items";
import { ResearchPortal } from "@/components/DigitalArchives/research-portal";
import { HeritageCommunity } from "@/components/DigitalArchives/heritage-community";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeritageHero />
      <ArchiveOverview />
      <AiSearch />
      <FeaturedItems />
      <ResearchPortal />
      <HeritageCommunity />
      <Footer />
    </div>
  );
};

export default Index;
