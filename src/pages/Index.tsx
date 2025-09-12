import { HeritageHeader } from "@/components/ui/heritage-header";
import { HeritageHero } from "@/components/ui/heritage-hero";
import { ArchiveOverview } from "@/components/ui/archive-overview";
import { AiSearch } from "@/components/ui/ai-search";
import { FeaturedItems } from "@/components/ui/featured-items";
import { ResearchPortal } from "@/components/ui/research-portal";
import { HeritageCommunity } from "@/components/ui/heritage-community";
import { HeritageFooter } from "@/components/ui/heritage-footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeritageHeader />
      <HeritageHero />
      <ArchiveOverview />
      <AiSearch />
      <FeaturedItems />
      <ResearchPortal />
      <HeritageCommunity />
      <HeritageFooter />
    </div>
  );
};

export default Index;
