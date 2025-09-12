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
  Calendar
} from "lucide-react";
import ancientManuscripts from "@/assets/ancient-manuscripts.jpg";

const DigitalArchives = () => {
  const archiveCategories = [
    {
      title: "Ancient Manuscripts",
      count: "450+",
      icon: BookOpen,
      description: "Sacred texts, prayers, and historical documents",
      color: "monastery-gold"
    },
    {
      title: "Temple Murals",
      count: "200+", 
      icon: Image,
      description: "High-resolution digital captures of monastery art",
      color: "prayer-red"
    },
    {
      title: "Historical Records",
      count: "180+",
      icon: FileText,
      description: "Administrative documents and chronicles",
      color: "prayer-blue"
    },
    {
      title: "Artifacts",
      count: "120+",
      icon: Eye,
      description: "3D scans of ritual objects and sculptures",
      color: "prayer-green"
    }
  ];

  const featuredArchives = [
    {
      title: "Pemayangtse Monastery Chronicles",
      type: "Manuscript",
      language: "Tibetan",
      year: "17th Century",
      pages: "150 pages",
      status: "Digitized",
      image: ancientManuscripts
    },
    {
      title: "Rumtek Monastery Murals",
      type: "Visual Archive",
      language: "Visual",
      year: "16th Century", 
      pages: "45 pieces",
      status: "AI Tagged",
      image: ancientManuscripts
    },
    {
      title: "Tashiding Sacred Texts",
      type: "Religious Text",
      language: "Sanskrit",
      year: "15th Century",
      pages: "200 pages",
      status: "OCR Complete",
      image: ancientManuscripts
    }
  ];

  const aiFeatures = [
    {
      icon: Zap,
      title: "AI-Powered Search",
      description: "Natural language queries across all archives"
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Tibetan, Sanskrit, Hindi, English, and more"
    },
    {
      icon: Eye,
      title: "Visual Recognition",
      description: "Search by image content and artistic styles"
    },
    {
      icon: Filter,
      title: "Smart Categorization",
      description: "Automatic tagging and metadata generation"
    }
  ];

  return (
    <section id="archives" className="relative">
      {/* Header Section - Dark Theme with Pattern */}
      <div className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Decorative Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-800/50 to-indigo-900/30"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='0' cy='30' r='4'/%3E%3Ccircle cx='60' cy='30' r='4'/%3E%3Ccircle cx='30' cy='0' r='4'/%3E%3Ccircle cx='30' cy='60' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-yellow-400">Digital Heritage </span><span className="text-yellow-400">Archives</span>
            </h2>
            <p className="text-xl text-yellow-300 max-w-3xl mx-auto mb-12">
              A comprehensive digital platform dedicated to preserving, researching, and sharing cultural heritage through advanced AI-powered tools and community collaboration.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">10,000+</div>
                <div className="text-sm text-gray-400">Artifacts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-sm text-gray-400">Collections</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-sm text-gray-400">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">25+</div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Light Wooden Background Section - From 2nd section onwards */}
      <div className="relative bg-wooden-light">
        {/* Subtle wooden texture overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-wooden-cream via-wooden-warm to-wooden-beige"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-wooden-light/50 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 pb-24">

          {/* Search Interface */}
          <div className="bg-wooden-cream/80 backdrop-blur-sm rounded-2xl p-8 border border-wooden-beige/50 shadow-monastery mb-16 relative overflow-hidden">
            {/* Subtle wood grain pattern */}
            <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-wooden-warm via-transparent to-wooden-beige"></div>
            <div className="relative max-w-4xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search ancient manuscripts, murals, artifacts... (e.g., 'Tibetan prayer wheels' or 'Rumtek monastery history')"
                  className="pl-12 h-14 text-lg border-monastery-gold/20 focus:border-monastery-gold bg-white/70"
                />
                <Button variant="monastery" size="lg" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Zap className="mr-2 h-4 w-4" />
                  AI Search
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-monastery-gold/10 bg-white/60">Ancient Manuscripts</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-monastery-gold/10 bg-white/60">Temple Murals</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-monastery-gold/10 bg-white/60">17th Century</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-monastery-gold/10 bg-white/60">Tibetan Scripts</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-monastery-gold/10 bg-white/60">Ritual Objects</Badge>
              </div>
            </div>
          </div>

          {/* Archive Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {archiveCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-all duration-300 text-center bg-wooden-cream/60 backdrop-blur-sm border-wooden-beige/30 hover:bg-wooden-cream/80">
                <CardHeader className="pb-4">
                  <div className={`mx-auto p-4 rounded-2xl bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-colors duration-300 w-fit`}>
                    <category.icon className={`h-8 w-8 text-${category.color}`} />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <div className={`text-3xl font-bold text-${category.color}`}>{category.count}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Archives */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Archives</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArchives.map((archive, index) => (
                <Card key={index} className="group hover:shadow-elevated transition-all duration-300 overflow-hidden bg-wooden-cream/70 backdrop-blur-sm border-wooden-beige/40 hover:bg-wooden-cream/90">
                  <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${archive.image})` }}>
                    <div className="absolute inset-0 bg-gradient-monastery opacity-80"></div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-prayer-white/90 text-monastery-burgundy">
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
          <div className="bg-wooden-warm/50 backdrop-blur-sm rounded-2xl p-8 border border-wooden-beige/30 relative overflow-hidden">
            {/* Decorative wooden pattern overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-br from-wooden-cream/30 via-transparent to-wooden-beige/30"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-wooden-light/20 to-transparent transform rotate-45"></div>
            </div>
            
            <div className="relative text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                AI-Powered Archive Intelligence
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Advanced machine learning and natural language processing make our archives searchable and accessible
              </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="mx-auto p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 w-fit mb-4 backdrop-blur-sm border border-wooden-beige/20">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalArchives;





