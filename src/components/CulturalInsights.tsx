import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Heart, Star, Clock, Globe } from "lucide-react";

const CulturalInsights = () => {
  const insights = [
    {
      id: 1,
      icon: BookOpen,
      title: "Buddhist Philosophy in Daily Life",
      category: "Spirituality",
      readTime: "5 min read",
      excerpt: "Discover how Buddhist teachings shape the everyday lives of Sikkimese people and influence their celebration of festivals.",
      color: "bg-festival-orange"
    },
    {
      id: 2,
      icon: Users,
      title: "The Significance of Community in Festivals",
      category: "Community",
      readTime: "7 min read",
      excerpt: "Explore how Sikkimese festivals bring together diverse communities and strengthen social bonds across ethnic groups.",
      color: "bg-festival-purple"
    },
    {
      id: 3,
      icon: Heart,
      title: "Sacred Symbols and Their Meanings",
      category: "Symbolism",
      readTime: "4 min read",
      excerpt: "Learn about the profound meanings behind prayer flags, prayer wheels, and other sacred symbols used in celebrations.",
      color: "bg-festival-blue"
    },
    {
      id: 4,
      icon: Star,
      title: "Traditional Arts and Crafts",
      category: "Arts",
      readTime: "6 min read",
      excerpt: "Delve into the intricate world of traditional Sikkimese arts, from thangka paintings to hand-carved woodwork.",
      color: "bg-festival-green"
    },
    {
      id: 5,
      icon: Clock,
      title: "Ancient Calendars and Festival Timing",
      category: "Tradition",
      readTime: "8 min read",
      excerpt: "Understand how lunar calendars and astronomical events determine the precise timing of sacred celebrations.",
      color: "bg-festival-red"
    },
    {
      id: 6,
      icon: Globe,
      title: "Sikkim's Cultural Diversity",
      category: "Heritage",
      readTime: "10 min read",
      excerpt: "Discover how Lepcha, Bhutia, and Nepali cultures harmoniously blend to create Sikkim's unique festival traditions.",
      color: "bg-festival-gold"
    }
  ];

  const traditions = [
    {
      title: "Prayer Flag Traditions",
      description: "Five colors representing elements: blue (space), white (air), red (fire), green (water), yellow (earth)",
      icon: "🎏"
    },
    {
      title: "Butter Lamp Offerings",
      description: "Sacred light offerings symbolizing wisdom dispelling ignorance and bringing enlightenment",
      icon: "🕯️"
    },
    {
      title: "Khada Ceremony",
      description: "White scarves offered as symbols of goodwill, purity, and respect during religious ceremonies",
      icon: "🤍"
    },
    {
      title: "Monastery Etiquette",
      description: "Traditional customs for respectful monastery visits during festival celebrations",
      icon: "🏛️"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Cultural Insights & Traditions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Deepen your understanding of Sikkim's rich cultural heritage. Explore the profound meanings, 
            ancient traditions, and spiritual significance behind the festivals.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {insights.map((insight) => {
              const IconComponent = insight.icon;
              return (
                <Card key={insight.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 group">
                  {/* Header */}
                  <div className={`${insight.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="w-8 h-8" />
                      <span className="text-sm opacity-80">{insight.category}</span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight">{insight.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {insight.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{insight.readTime}</span>
                      <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-white">
                        Read More
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Traditions Section */}
          <Card className="p-8 md:p-12 bg-gradient-hero text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Sacred Traditions</h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Essential cultural elements that make Sikkim's festivals deeply meaningful and spiritually enriching
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {traditions.map((tradition, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl flex-shrink-0">{tradition.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{tradition.title}</h4>
                    <p className="opacity-90 leading-relaxed">{tradition.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="secondary" className="shadow-glow">
                Explore Cultural Guide
              </Button>
            </div>
          </Card>

          {/* Quote Section */}
          <div className="mt-16 text-center">
            <Card className="p-8 md:p-12 bg-white shadow-elegant max-w-4xl mx-auto">
              <div className="text-6xl text-festival-gold mb-6">"</div>
              <blockquote className="text-2xl md:text-3xl font-light text-primary leading-relaxed mb-6">
                In the festivals of Sikkim, we don't just celebrate traditions—we live the very essence 
                of our ancestors' wisdom and connect with the eternal rhythm of the Himalayas.
              </blockquote>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <cite className="font-semibold text-primary">Lama Tenzin Norbu</cite>
                <span className="text-muted-foreground">Cultural Heritage Keeper, Rumtek Monastery</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalInsights;