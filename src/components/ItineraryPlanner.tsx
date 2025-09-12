import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bus, Bed, User, Sparkles } from "lucide-react";

const JourneyPlanner = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["Meditation"]);
  const [selectedBudget, setSelectedBudget] = useState("Mid-Range");
  const [duration, setDuration] = useState("");
  const [groupSize, setGroupSize] = useState("");

  const interests = [
    "Meditation",
    "Architecture", 
    "Photography",
    "Trekking",
    "Culture Learning"
  ];

  const budgetOptions = [
    { id: "Budget", label: "Budget", range: "₹2,000-5000" },
    { id: "Mid-Range", label: "Mid-Range", range: "₹5,000-12,000" },
    { id: "Luxury", label: "Luxury", range: "₹12,000+" }
  ];

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Plan Your Sacred Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Complete travel solutions with local transport, accommodation, and authentic cultural experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Side - AI Trip Planner */}
          <Card className="shadow-monastery border-monastery-gold/20">
            <CardHeader>
              <CardTitle className="text-2xl text-monastery-burgundy flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-monastery-gold" />
                AI Trip Planner
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Duration and Group Size */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Duration
                  </label>
                  <Select value={duration} onValueChange={setDuration}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="1-2 Days" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border">
                      <SelectItem value="1-2">1-2 Days</SelectItem>
                      <SelectItem value="3-5">3-5 Days</SelectItem>
                      <SelectItem value="1-week">1 Week</SelectItem>
                      <SelectItem value="2-weeks">2 Weeks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Group Size
                  </label>
                  <Select value={groupSize} onValueChange={setGroupSize}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Solo Traveler" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border">
                      <SelectItem value="solo">Solo Traveler</SelectItem>
                      <SelectItem value="couple">Couple</SelectItem>
                      <SelectItem value="family">Family</SelectItem>
                      <SelectItem value="group">Group (5+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Interests
                </label>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Button
                      key={interest}
                      variant={selectedInterests.includes(interest) ? "monastery" : "outline"}
                      size="sm"
                      onClick={() => toggleInterest(interest)}
                      className="rounded-full"
                    >
                      {interest}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Budget Range
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {budgetOptions.map((budget) => (
                    <Button
                      key={budget.id}
                      variant={selectedBudget === budget.id ? "monastery" : "outline"}
                      className="h-auto p-3 flex flex-col items-center"
                      onClick={() => setSelectedBudget(budget.id)}
                    >
                      <span className="font-medium text-sm">{budget.label}</span>
                      <span className="text-xs opacity-80">{budget.range}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <Button 
                variant="monastery" 
                size="lg" 
                className="w-full"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Personalized Itinerary
              </Button>
            </CardContent>
          </Card>

          {/* Right Side - Service Cards */}
          <div className="space-y-6">
            {/* Transport Services */}
            <Card className="shadow-monastery border-monastery-gold/20">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-monastery-gold/20 flex items-center justify-center">
                    <Bus className="w-5 h-5 text-monastery-gold" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-monastery-burgundy">Transport Services</CardTitle>
                    <p className="text-sm text-muted-foreground">Reliable local transport options</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <p className="font-medium text-sm">Private Taxi</p>
                    <p className="text-monastery-gold font-semibold">₹15/km</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <p className="font-medium text-sm">Shared Jeep</p>
                    <p className="text-monastery-gold font-semibold">₹50/seat</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accommodation */}
            <Card className="shadow-monastery border-monastery-gold/20">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-monastery-gold/20 flex items-center justify-center">
                    <Bed className="w-5 h-5 text-monastery-gold" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-monastery-burgundy">Accommodation</CardTitle>
                    <p className="text-sm text-muted-foreground">Homestays and hotels near monasteries</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium text-sm">Monastery Guesthouse</p>
                    <p className="text-xs text-muted-foreground">Basic accommodation</p>
                  </div>
                  <p className="text-monastery-gold font-semibold">₹800/night</p>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium text-sm">Local Homestay</p>
                    <p className="text-xs text-muted-foreground">Cultural immersion</p>
                  </div>
                  <p className="text-monastery-gold font-semibold">₹1,500/night</p>
                </div>
              </CardContent>
            </Card>

            {/* Local Guides */}
            <Card className="shadow-monastery border-monastery-gold/20">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-monastery-gold/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-monastery-gold" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-monastery-burgundy">Local Guides</CardTitle>
                    <p className="text-sm text-muted-foreground">Certified cultural interpreters</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium text-sm">Expert Guide Service</p>
                    <p className="text-xs text-muted-foreground">Multi-language support</p>
                  </div>
                  <p className="text-monastery-gold font-semibold">₹2,000/day</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyPlanner;