import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, Star } from "lucide-react";
import losarImage from "@/assets/losar-festival.jpg";
import sagaDawaImage from "@/assets/saga-dawa.jpg";
import bumchuImage from "@/assets/bumchu-festival.jpg";

const FeaturedCelebrations = () => {
  const festivals = [
    {
      id: 1,
      name: "Losar Festival",
      type: "Tibetan New Year",
      date: "February 2024",
      location: "Gangtok & Monasteries",
      duration: "15 days",
      participants: "5000+",
      rating: 4.9,
      price: "₹12,500",
      image: losarImage,
      color: "bg-festival-orange",
      description: "Celebrate the Tibetan New Year with traditional dances, monastery visits, and authentic cultural experiences.",
      highlights: ["Traditional Cham Dance", "Monastery Ceremonies", "Local Cuisine", "Cultural Workshops"]
    },
    {
      id: 2,
      name: "Saga Dawa",
      type: "Buddha's Enlightenment",
      date: "May 2024",
      location: "Tashiding Monastery",
      duration: "3 days",
      participants: "3000+",
      rating: 4.8,
      price: "₹8,500",
      image: sagaDawaImage,
      color: "bg-festival-blue",
      description: "Witness the sacred celebration of Buddha's birth, enlightenment, and death at the holiest monastery in Sikkim.",
      highlights: ["Sacred Butter Lamps", "Merit Accumulation", "Spiritual Teachings", "Meditation Sessions"]
    },
    {
      id: 3,
      name: "Bumchu Festival",
      type: "Sacred Water Ceremony",
      date: "March 2024",
      location: "Tashiding Monastery",
      duration: "2 days",
      participants: "2500+",
      rating: 4.7,
      price: "₹6,500",
      image: bumchuImage,
      color: "bg-festival-purple",
      description: "Experience the mystical ceremony of sacred water that predicts the upcoming year's fortune for Sikkim.",
      highlights: ["Sacred Water Blessing", "Fortune Predictions", "Ancient Rituals", "Himalayan Views"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-festival-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-festival-purple rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-festival-blue rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-festival-gold/20 to-yellow-400/20 text-festival-gold font-medium rounded-full text-sm border border-festival-gold/30">
              ✨ Sacred Experiences
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-festival-purple to-primary bg-clip-text text-transparent mb-8 leading-tight">
            Featured Sacred Celebrations
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Immerse yourself in Sikkim's most sacred and vibrant festivals. Each celebration offers a unique window 
            into the rich Buddhist culture and ancient traditions of the 
            <span className="text-festival-gold font-semibold"> Himalayas</span>.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-festival-gold to-yellow-400 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Enhanced Festival Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {festivals.map((festival, index) => (
            <Card key={festival.id} className={`group overflow-hidden shadow-2xl hover:shadow-festival-gold/20 transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 ${index === 1 ? 'lg:scale-105 lg:z-10' : ''} bg-gradient-to-br from-white via-white to-muted/30 border-0 animate-fade-in-up-delayed`} style={{animationDelay: `${index * 0.2}s`}}>
              {/* Enhanced Festival Image */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <img 
                  src={festival.image} 
                  alt={festival.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                />
                <div className={`absolute top-6 left-6 px-4 py-2 rounded-2xl text-white text-sm font-bold backdrop-blur-md ${festival.color} shadow-lg z-20 transform group-hover:scale-110 transition-transform duration-300`}>
                  {festival.type}
                </div>
                <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-md text-white px-3 py-2 rounded-xl flex items-center space-x-2 shadow-lg z-20 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-bold">{festival.rating}</span>
                </div>
              </div>

              {/* Enhanced Festival Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-festival-purple bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300">{festival.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {festival.description}
                </p>

                {/* Enhanced Festival Details */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-festival-orange/10 to-festival-orange/5 border border-festival-orange/20 group-hover:border-festival-orange/40 transition-colors duration-300">
                    <div className="p-2 bg-festival-orange/20 rounded-lg">
                      <Calendar className="w-5 h-5 text-festival-orange" />
                    </div>
                    <span className="font-medium">{festival.date} • {festival.duration}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-festival-blue/10 to-festival-blue/5 border border-festival-blue/20 group-hover:border-festival-blue/40 transition-colors duration-300">
                    <div className="p-2 bg-festival-blue/20 rounded-lg">
                      <MapPin className="w-5 h-5 text-festival-blue" />
                    </div>
                    <span className="font-medium">{festival.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-festival-purple/10 to-festival-purple/5 border border-festival-purple/20 group-hover:border-festival-purple/40 transition-colors duration-300">
                    <div className="p-2 bg-festival-purple/20 rounded-lg">
                      <Users className="w-5 h-5 text-festival-purple" />
                    </div>
                    <span className="font-medium">{festival.participants} participants expected</span>
                  </div>
                </div>

                {/* Enhanced Highlights */}
                <div className="mb-8">
                  <h4 className="font-bold text-primary mb-4 text-lg">✨ Festival Highlights:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {festival.highlights.map((highlight, idx) => (
                      <span key={idx} className="px-4 py-2 bg-gradient-to-r from-muted to-muted/50 text-sm rounded-xl font-medium border border-muted-foreground/10 hover:border-festival-gold/30 hover:bg-festival-gold/5 transition-all duration-300 text-center">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center animate-fade-in-up-delayed-4">
          <Button size="lg" className="bg-gradient-to-r from-festival-gold to-yellow-400 hover:from-yellow-400 hover:to-festival-gold text-primary font-bold px-12 py-4 rounded-2xl shadow-2xl hover:shadow-festival-gold/50 transform hover:scale-105 transition-all duration-300 text-lg">
            <Calendar className="w-5 h-5 mr-3" />
            View All Festivals
            <Users className="w-5 h-5 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCelebrations;