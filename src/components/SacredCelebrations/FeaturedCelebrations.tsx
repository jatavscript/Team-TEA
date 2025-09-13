import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, Star } from "lucide-react";
import losarImage from "@/assets/losar-festival.jpg";
import sagaDawaImage from "@/assets/saga-dawa.jpg";
import bumchuImage from "@/assets/bumchu-festival.jpg";
import styles from './SacredCelebrations.module.css';
import { useState, useEffect } from "react";

const FeaturedCelebrations = () => {
  const festivals = [
    {
      id: 1,
      name: "Losar Festival",
      date: "February 10-12, 2024",
      location: "Rumtek Monastery, Gangtok",
      duration: "3 Days",
      status: "Upcoming",
      statusColor: "bg-red-500",
      price: "Starting from ₹2,500",
      image: losarImage,
      description: "Celebrate the Tibetan New Year with traditional cham dances, butter sculpture displays, and sacred rituals that mark the beginning of the lunar calendar."
    },
    {
      id: 2,
      name: "Saga Dawa Festival",
      date: "May 23, 2024",
      location: "Multiple Monasteries",
      duration: "1 Day",
      status: "This Month",
      statusColor: "bg-green-500",
      price: "Starting from ₹1,800",
      image: sagaDawaImage,
      description: "The holiest Buddhist festival commemorating Buddha's birth, enlightenment, and death. Experience sacred rituals and prayer wheel ceremonies."
    },
    {
      id: 3,
      name: "Bumchu Festival",
      date: "March 15-16, 2024",
      location: "Tashiding Monastery",
      duration: "2 Days",
      status: "Annual",
      statusColor: "bg-purple-500",
      price: "Starting from ₹3,200",
      image: bumchuImage,
      description: "Witness the sacred water ceremony where holy water levels predict the year ahead. A mystical experience unique to Sikkim's spiritual traditions."
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
    <section className="py-24 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating Lotus */}
        <div className="absolute top-20 left-10 animate-float-slow">
          <svg width="80" height="80" viewBox="0 0 80 80" className="text-purple-400">
            <circle cx="40" cy="40" r="35" fill="currentColor" opacity="0.3"/>
            <circle cx="40" cy="40" r="25" fill="currentColor" opacity="0.5"/>
            <circle cx="40" cy="40" r="15" fill="currentColor" opacity="0.7"/>
            <circle cx="40" cy="40" r="8" fill="currentColor" opacity="0.9"/>
          </svg>
        </div>

        {/* Floating Prayer Flags */}
        <div className="absolute top-32 right-16 animate-float-reverse">
          <svg width="100" height="50" viewBox="0 0 100 50" className="text-indigo-400">
            <rect x="0" y="10" width="18" height="12" fill="currentColor" opacity="0.8"/>
            <rect x="20" y="10" width="18" height="12" fill="currentColor" opacity="0.6"/>
            <rect x="40" y="10" width="18" height="12" fill="currentColor" opacity="0.7"/>
            <rect x="60" y="10" width="18" height="12" fill="currentColor" opacity="0.5"/>
            <rect x="80" y="10" width="18" height="12" fill="currentColor" opacity="0.9"/>
            <line x1="0" y1="5" x2="100" y2="5" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        {/* Floating Mandala */}
        <div className="absolute bottom-32 left-20 animate-pulse-glow">
          <svg width="90" height="90" viewBox="0 0 90 90" className="text-blue-400">
            <circle cx="45" cy="45" r="40" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
            <circle cx="45" cy="45" r="30" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
            <circle cx="45" cy="45" r="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
            <circle cx="45" cy="45" r="10" fill="currentColor" opacity="0.6"/>
            <path d="M45 10 L50 30 L45 45 L40 30 Z" fill="currentColor" opacity="0.5"/>
            <path d="M80 45 L60 50 L45 45 L60 40 Z" fill="currentColor" opacity="0.5"/>
            <path d="M45 80 L40 60 L45 45 L50 60 Z" fill="currentColor" opacity="0.5"/>
            <path d="M10 45 L30 40 L45 45 L30 50 Z" fill="currentColor" opacity="0.5"/>
          </svg>
        </div>

        {/* Floating Stupa */}
        <div className="absolute top-40 right-32 animate-float-slow">
          <svg width="60" height="70" viewBox="0 0 60 70" className="text-purple-500">
            <rect x="25" y="55" width="10" height="15" fill="currentColor"/>
            <circle cx="30" cy="50" r="10" fill="currentColor" opacity="0.8"/>
            <rect x="20" y="45" width="20" height="8" fill="currentColor" opacity="0.9"/>
            <polygon points="30,10 40,35 20,35" fill="currentColor" opacity="0.7"/>
          </svg>
        </div>

        {/* Floating Dharma Wheel */}
        <div className="absolute bottom-40 right-10 animate-float-reverse">
          <svg width="70" height="70" viewBox="0 0 70 70" className="text-indigo-500">
            <circle cx="35" cy="35" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="35" cy="35" r="6" fill="currentColor"/>
            <line x1="35" y1="5" x2="35" y2="65" stroke="currentColor" strokeWidth="2"/>
            <line x1="5" y1="35" x2="65" y2="35" stroke="currentColor" strokeWidth="2"/>
            <line x1="10" y1="10" x2="60" y2="60" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="60" y1="10" x2="10" y2="60" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </div>

        {/* Floating Mountain Silhouette */}
        <div className="absolute bottom-20 right-24 animate-float-delayed">
          <svg width="120" height="60" viewBox="0 0 120 60" className="text-blue-300">
            <path d="M0 60 L15 25 L25 35 L35 15 L45 25 L55 10 L65 20 L75 15 L85 25 L95 20 L105 25 L120 60 Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-1/3 left-1/4 animate-bounce">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full blur-sm"></div>
        </div>
        <div className="absolute top-2/3 right-1/3 animate-pulse">
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full blur-sm"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-festival-gold/20 to-yellow-400/20 text-festival-gold font-medium rounded-full text-sm border border-festival-gold/30">
              ✨ Sacred Experiences
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent mb-8 leading-tight">
            Featured Sacred Celebrations
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Immerse yourself in Sikkim's most sacred and vibrant festivals. Each celebration offers a unique window 
            into the rich Buddhist culture and ancient traditions of the 
            <span className="text-purple-600 font-semibold"> Himalayas</span>.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-festival-gold to-yellow-400 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Festival Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {festivals.map((festival, index) => (
            <Card key={festival.id} className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-gray-200 rounded-lg">
              {/* Festival Image with Badges */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={festival.image} 
                  alt={festival.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium ${festival.statusColor}`}>
                  {festival.status}
                </div>
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {festival.duration}
                </div>
              </div>

              {/* Festival Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{festival.name}</h3>
                
                {/* Date */}
                <div className="flex items-center mb-2">
                  <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-gray-600">{festival.date}</span>
                </div>
                
                {/* Location */}
                <div className="flex items-center mb-4">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-gray-600">{festival.location}</span>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {festival.description}
                </p>
                
                {/* Price */}
                <div className="text-lg font-semibold text-gray-900 mb-4">
                  {festival.price}
                </div>
                
                {/* Join Festival Button */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors duration-200">
                  Join Festival
                </Button>
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
    </div>
  );
};

export default FeaturedCelebrations;
