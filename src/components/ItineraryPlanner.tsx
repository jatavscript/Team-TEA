import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Bus, Bed, User, Sparkles } from "lucide-react";

// ✅ Helper: Predefined fallback plans
const getFallbackPlan = (duration: string) => {
  switch (duration) {
    case "1-2":
      return `📅 2-Day Sample Itinerary:
Day 1:
- Morning: Visit a monastery for meditation
- Afternoon: Explore nearby cultural sites
- Evening: Dinner at a traditional restaurant

Day 2:
- Morning: Trek to a scenic viewpoint
- Afternoon: Photography session of landscapes
- Evening: Relax at a local homestay`;

    case "3-5":
      return `📅 5-Day Sample Itinerary:
Day 1-2: Monastery visits & meditation
Day 3: Short trek & cultural learning
Day 4: Photography tour & evening folk dance
Day 5: Shopping & leisure day`;

    case "1-week":
      return `📅 7-Day Sample Itinerary:
- Days 1-2: Monastery exploration & meditation
- Day 3: Trekking adventure
- Day 4: Cultural immersion with locals
- Day 5: Photography & relaxation
- Day 6: Local guided tour
- Day 7: Departure & shopping`;

    case "2-weeks":
      return `📅 14-Day Sample Itinerary:
Week 1: Monastery visits, meditation & short treks
Week 2: Local homestays, cultural learning, long treks & photography`;

    default:
      return `📅 Default Plan (2 Days):
Day 1: Visit monastery & local sightseeing
Day 2: Trekking + cultural activities`;
  }
};

const JourneyPlanner = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["Meditation"]);
  const [selectedBudget, setSelectedBudget] = useState("Mid-Range");
  const [duration, setDuration] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const interests = ["Meditation", "Architecture", "Photography", "Trekking", "Culture Learning"];

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

  // ✅ AI Itinerary Generator using OpenAI (with fallback)
  const generateItinerary = async () => {
    setLoading(true);
    setShowPopup(true);

    const userPrompt = `
Generate a personalized travel itinerary with these details:
- Duration: ${duration || "2 days"}
- Group Size: ${groupSize || "2 people"}
- Interests: ${selectedInterests.join(", ")}
- Budget: ${selectedBudget}
Return the plan in a clear day-wise format with suggestions for activities, stay, and transport.
    `;

    try {
      const response = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-5-nano",
          input: userPrompt,
          max_output_tokens: 500
        })
      });

      const data = await response.json();
      console.log("API response:", data);

      // Handle OpenAI Responses API structure
      const text = data.output?.[0]?.content?.[0]?.text;

      setAiResponse(
        text && text.trim().length > 0
          ? text
          : `⚠️ AI could not generate a plan. Here's a fallback:\n\n${getFallbackPlan(duration)}`
      );
    } catch (error) {
      console.error(error);
      setAiResponse(`⚠️ Something went wrong. Here's a fallback plan:\n\n${getFallbackPlan(duration)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20" id="plan">
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
                  <label className="text-sm font-medium text-foreground mb-2 block">Duration</label>
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
                  <label className="text-sm font-medium text-foreground mb-2 block">Group Size</label>
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
                <label className="text-sm font-medium text-foreground mb-3 block">Interests</label>
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
                <label className="text-sm font-medium text-foreground mb-3 block">Budget Range</label>
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
              <Button variant="monastery" size="lg" className="w-full" onClick={generateItinerary}>
                <Sparkles className="w-4 h-4 mr-2" />
                {loading ? "Generating..." : "Generate Personalized Itinerary"}
              </Button>
            </CardContent>
          </Card>

          {/* Right Side - Service Cards (unchanged) */}
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

      {/* AI Response Popup */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="sm:max-w-lg bg-background border-monastery-gold/30 shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-monastery-burgundy">Your AI Itinerary</DialogTitle>
          </DialogHeader>
          <div className="whitespace-pre-wrap text-sm text-foreground">
            {loading ? "✨ Crafting your personalized itinerary..." : aiResponse}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default JourneyPlanner;
