import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { User, Leaf, Heart, ArrowRight, Star } from "lucide-react";

const CommunityConservation = () => {
  const [selectedArtisan, setSelectedArtisan] = useState(0);
  const [selectedOpportunity, setSelectedOpportunity] = useState(0);

  const artisans = [
    {
      name: "Pema Lhamo",
      location: "Gangtok Painter",
      rating: 5,
      specialty: "Thangka Art",
    },
    {
      name: "Tenzin Norbu",
      location: "Wood Carver",
      rating: 5,
      specialty: "Traditional Woodcraft",
    },
    {
      name: "Dolma Sherpa",
      location: "Mask Artist",
      rating: 5,
      specialty: "Ceremonial Masks",
    },
  ];

  const conservationStats = [
    {
      label: "Manuscripts Digitized",
      value: 1247,
      max: 1500,
      color: "bg-monastery-gold",
    },
    { label: "Murals Restored", value: 956, max: 1200, color: "bg-green-500" },
    {
      label: "Local Jobs Created",
      value: 83,
      max: 100,
      color: "bg-orange-500",
    },
  ];

  const opportunities = [
    {
      title: "Digital Documentation",
      description: "Help photograph and catalog monastery artifacts",
      status: "Remote Available",
      difficulty: "Beginner",
    },
    {
      title: "Translation Services",
      description: "Translate ancient texts and inscriptions",
      status: "Skills Required",
      difficulty: "Advanced",
    },
    {
      title: "Cultural Education",
      description: "Teach digital literacy to local communities",
      status: "On-site Only",
      difficulty: "Intermediate",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Community & Conservation
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Supporting local communities while preserving sacred heritage for
            future generations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-[1400px] sm:px-12 mx-auto">
          {/* Local Artisans Card */}
          <Card className="shadow-monastery border-monastery-gold/20 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
            <CardHeader className="text-center pb-3">
              <div className="w-16 h-16 rounded-full bg-monastery-gold/20 flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-monastery-gold" />
              </div>
              <CardTitle className="text-xl text-monastery-burgundy">
                Local Artisans
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {artisans.map((artisan, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                    selectedArtisan === index
                      ? "bg-white/80 dark:bg-gray-800/80 hover:shadow-md"
                      : "bg-white/80 dark:bg-gray-800/80 hover:shadow-md"
                  }`}
                  onClick={() => setSelectedArtisan(index)}
                >
                  <div className="w-10 h-10 rounded-full bg-monastery-gold/30 flex items-center justify-center">
                    <span className="text-sm font-semibold text-monastery-burgundy">
                      {artisan.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-foreground">
                      {artisan.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {artisan.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-monastery-gold text-monastery-gold" />
                    <span className="text-xs text-monastery-gold">
                      {artisan.rating}
                    </span>
                  </div>
                </div>
              ))}

              <Button
                variant="monastery"
                className="w-full mt-6"
                onClick={() => console.log("Support artisans clicked")}
              >
                Support Artisans
              </Button>
            </CardContent>
          </Card>

          {/* Conservation Impact Card */}
          <Card className="shadow-monastery border-monastery-gold/20 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
            <CardHeader className="text-center pb-3">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-xl text-monastery-burgundy">
                Conservation Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {conservationStats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">
                      {stat.label}
                    </span>
                    <span className="text-sm font-bold text-foreground">
                      {stat.value.toLocaleString()}
                    </span>
                  </div>
                  <Progress
                    value={(stat.value / stat.max) * 100}
                    className="h-2"
                  />
                </div>
              ))}

              <Button
                variant="outline"
                className="w-full mt-6 border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-950/20"
                onClick={() => console.log("Learn more clicked")}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Get Involved Card */}
          <Card className="shadow-monastery border-monastery-gold/20 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20">
            <CardHeader className="text-center pb-3">
              <div className="w-16 h-16 rounded-full bg-red-600/20 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-xl text-monastery-burgundy">
                Get Involved
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {opportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all border ${
                    selectedOpportunity === index
                      ? "bg-white/80 dark:bg-gray-800/80 shadow-md border-red-200 dark:border-red-800"
                      : "bg-white/40 dark:bg-gray-800/40 hover:bg-white/60 dark:hover:bg-gray-800/60 border-transparent"
                  }`}
                  onClick={() => setSelectedOpportunity(index)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm text-foreground">
                      {opportunity.title}
                    </h4>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    {opportunity.description}
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {opportunity.status}
                    </Badge>
                    <Badge
                      variant={
                        opportunity.difficulty === "Beginner"
                          ? "default"
                          : opportunity.difficulty === "Advanced"
                          ? "destructive"
                          : "secondary"
                      }
                      className="text-xs"
                    >
                      {opportunity.difficulty}
                    </Badge>
                  </div>
                </div>
              ))}

              <Button
                variant="monastery"
                className="w-full mt-6"
                onClick={() => console.log("Apply to volunteer clicked")}
              >
                Apply to Volunteer
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunityConservation;
