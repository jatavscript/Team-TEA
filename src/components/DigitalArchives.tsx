import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  BookOpen,
  Image,
  FileText,
  Download,
  Eye,
  Filter,
  Zap,
  Globe,
  Calendar,
} from "lucide-react";
import ancientManuscripts from "@/assets/ancient-manuscripts.jpg";

const DigitalArchives = () => {
  const archiveCategories = [
    {
      title: "Ancient Manuscripts",
      count: "450+",
      icon: BookOpen,
      description: "Sacred texts, prayers, and historical documents",
      color: "monastery-gold",
    },
    {
      title: "Temple Murals",
      count: "200+",
      icon: Image,
      description: "High-resolution digital captures of monastery art",
      color: "prayer-red",
    },
    {
      title: "Historical Records",
      count: "180+",
      icon: FileText,
      description: "Administrative documents and chronicles",
      color: "prayer-blue",
    },
    {
      title: "Artifacts",
      count: "120+",
      icon: Eye,
      description: "3D scans of ritual objects and sculptures",
      color: "prayer-green",
    },
  ];

  const featuredArchives = [
    {
      title: "Pemayangtse Monastery Chronicles",
      type: "Manuscript",
      language: "Tibetan",
      year: "17th Century",
      pages: "150 pages",
      status: "Digitized",
      image: ancientManuscripts,
    },
    {
      title: "Rumtek Monastery Murals",
      type: "Visual Archive",
      language: "Visual",
      year: "16th Century",
      pages: "45 pieces",
      status: "AI Tagged",
      image: ancientManuscripts,
    },
    {
      title: "Tashiding Sacred Texts",
      type: "Religious Text",
      language: "Sanskrit",
      year: "15th Century",
      pages: "200 pages",
      status: "OCR Complete",
      image: ancientManuscripts,
    },
  ];

  const aiFeatures = [
    {
      icon: Zap,
      title: "AI-Powered Search",
      description: "Natural language queries across all archives",
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Tibetan, Sanskrit, Hindi, English, and more",
    },
    {
      icon: Eye,
      title: "Visual Recognition",
      description: "Search by image content and artistic styles",
    },
    {
      icon: Filter,
      title: "Smart Categorization",
      description: "Automatic tagging and metadata generation",
    },
  ];

  return (
    <section id="archives" className="py-24 bg-background">
      <div className="max-w-[1400px] sm:px-12 mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Digital{" "}
            <span className="bg-gradient-monastery bg-clip-text text-transparent">
              Archives
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Preserving centuries of spiritual heritage through advanced
            digitization and AI-powered search
          </p>
        </div>

        {/* Search Interface */}
        <div className="bg-card rounded-2xl p-8 border shadow-monastery mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search ancient manuscripts, murals, artifacts... (e.g., 'Tibetan prayer wheels' or 'Rumtek monastery history')"
                className="pl-12 h-14 text-lg border-monastery-gold/20 focus:border-monastery-gold"
              />
              <Button
                variant="monastery"
                size="lg"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <Zap className="mr-2 h-4 w-4" />
                AI Search
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-monastery-gold/10"
              >
                Ancient Manuscripts
              </Badge>
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-monastery-gold/10"
              >
                Temple Murals
              </Badge>
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-monastery-gold/10"
              >
                17th Century
              </Badge>
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-monastery-gold/10"
              >
                Tibetan Scripts
              </Badge>
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-monastery-gold/10"
              >
                Ritual Objects
              </Badge>
            </div>
          </div>
        </div>

        {/* Archive Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {archiveCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-elevated transition-all duration-300 text-center"
            >
              <CardHeader className="pb-4">
                <div
                  className={`mx-auto p-4 rounded-2xl bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-colors duration-300 w-fit`}
                >
                  <category.icon className={`h-8 w-8 text-${category.color}`} />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <div className={`text-3xl font-bold text-${category.color}`}>
                  {category.count}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Archives */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Featured Archives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArchives.map((archive, index) => (
              <Card
                key={index}
                className="group hover:shadow-elevated transition-all duration-300 overflow-hidden"
              >
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${archive.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-monastery opacity-80"></div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="bg-prayer-white/90 text-monastery-burgundy"
                    >
                      {archive.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-prayer-white">
                    <div className="text-sm opacity-90">{archive.type}</div>
                    <div className="text-xs opacity-75">{archive.year}</div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-3 group-hover:text-primary transition-colors">
                    {archive.title}
                  </CardTitle>

                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex justify-between">
                      <span>Language:</span>
                      <span className="font-medium">{archive.language}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Content:</span>
                      <span className="font-medium">{archive.pages}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Features */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              AI-Powered Archive Intelligence
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced machine learning and natural language processing make our
              archives searchable and accessible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalArchives;
