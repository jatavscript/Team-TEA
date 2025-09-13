import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Calendar, MapPin, Camera, Heart, Star } from "lucide-react";
import styles from './SacredCelebrations.module.css';
import { useState, useEffect } from "react";

const ParticipationGuide = () => {
  const guides = [
    {
      id: 1,
      icon: Calendar,
      title: "Plan Your Visit",
      color: "bg-festival-blue",
      items: [
        "Book 2-3 months in advance",
        "Check weather conditions",
        "Verify festival dates",
        "Plan accommodation early"
      ]
    },
    {
      id: 2,
      icon: Users,
      title: "Cultural Etiquette",
      color: "bg-festival-purple",
      items: [
        "Dress modestly in monasteries",
        "Remove shoes before entering temples",
        "Photography restrictions apply",
        "Maintain respectful silence during prayers"
      ]
    },
    {
      id: 3,
      icon: MapPin,
      title: "What to Bring",
      color: "bg-festival-orange",
      items: [
        "Warm clothes for high altitudes",
        "Comfortable walking shoes",
        "Camera with extra batteries",
        "Small offerings like white scarves (khata)"
      ]
    },
    {
      id: 4,
      icon: Camera,
      title: "Photography Tips",
      color: "bg-festival-green",
      items: [
        "Ask permission before photographing people",
        "No flash photography in temples",
        "Capture authentic moments respectfully",
        "Focus on cultural details and expressions"
      ]
    },
    {
      id: 5,
      icon: Heart,
      title: "Health & Safety",
      color: "bg-festival-red",
      items: [
        "Carry altitude sickness medication",
        "Stay hydrated at high altitudes",
        "Have travel insurance",
        "Keep emergency contacts handy"
      ]
    },
    {
      id: 6,
      icon: Star,
      title: "Make It Special",
      color: "bg-festival-gold",
      items: [
        "Participate in community meals",
        "Learn basic Buddhist prayers",
        "Interact with local monks",
        "Try traditional Sikkimese cuisine"
      ]
    }
  ];

  const useDarkMode = () => {
    const [isDark, setIsDark] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = () => setIsDark(mediaQuery.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    return isDark;
  }

  const isDarkMode = useDarkMode();
  const themeClass = isDarkMode ? styles.dark : '';

  return (
    <div className={`${styles.SacredCelebrations} ${themeClass}`}>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Festival Participation Guide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know to respectfully participate in Sikkim's sacred celebrations. 
            Follow these guidelines to make your spiritual journey meaningful and authentic.
          </p>
        </div>

        {/* Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {guides.map((guide) => {
            const IconComponent = guide.icon;
            return (
              <Card key={guide.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                {/* Card Header */}
                <div className={`${guide.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold">{guide.title}</h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {guide.items.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-festival-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Spiritual Journey?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of travelers who have experienced the magic of Sikkim's sacred celebrations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-glow">
              Download Complete Guide
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              Book a Festival Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ParticipationGuide;
