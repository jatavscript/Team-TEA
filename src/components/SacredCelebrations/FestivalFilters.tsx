import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Sparkles, Calendar, Clock, MapPin, Star, Search } from "lucide-react";
import styles from './SacredCelebrations.module.css';

const FestivalFilters = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Festivals", color: "bg-gradient-to-r from-primary to-festival-purple", icon: Sparkles },
    { id: "buddhist", label: "Buddhist", color: "bg-gradient-to-r from-festival-orange to-yellow-400", icon: Calendar },
    { id: "hindu", label: "Hindu", color: "bg-gradient-to-r from-festival-purple to-pink-500", icon: Calendar },
    { id: "traditional", label: "Traditional", color: "bg-gradient-to-r from-festival-green to-emerald-400", icon: Calendar },
    { id: "seasonal", label: "Seasonal", color: "bg-gradient-to-r from-festival-blue to-blue-400", icon: Calendar },
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
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
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-6 py-3 bg-purple-600 text-white font-medium rounded-full text-sm shadow-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
              <Search className="w-4 h-4" />
              <span>Find Your Perfect Festival</span>
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
            Discover Sacred Celebrations
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Filter festivals by type, month, or location to plan your 
            <span className="text-purple-600 font-semibold"> spiritual journey</span> through the Himalayas
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-festival-gold to-yellow-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Enhanced Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up-delayed">
          {filters.map((filter, index) => {
            const IconComponent = filter.icon;
            return (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`${
                  activeFilter === filter.id 
                    ? "bg-purple-600 text-white hover:bg-purple-700 shadow-xl scale-105 border-purple-600" 
                    : "bg-white text-gray-700 border-gray-300 hover:border-purple-400 hover:bg-purple-50 hover:text-purple-700"
                } transition-all duration-300 px-6 py-3 rounded-xl font-medium transform hover:scale-105 hover:shadow-lg`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {filter.label}
              </Button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in-up-delayed-2">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500 group-hover:text-purple-600 transition-colors duration-300" />
            </div>
            <Input
              type="text"
              placeholder="Search festivals by name, location, or description..."
              className="pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-xl bg-white hover:border-purple-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all duration-300 font-medium placeholder:text-gray-500 shadow-lg"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
              <div className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                Press Enter
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Additional Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in-up-delayed-3">
          {/* Enhanced Month Filter */}
          <div className="space-y-4 group">
            <label className="flex items-center text-lg font-bold text-primary group-hover:text-festival-gold transition-colors duration-300">
              <div className="p-2 bg-festival-orange/20 rounded-lg mr-3 group-hover:bg-festival-gold/20 transition-colors duration-300">
                <Calendar className="w-5 h-5 text-festival-orange group-hover:text-festival-gold transition-colors duration-300" />
              </div>
              Month
            </label>
            <select className="w-full p-4 border-2 border-muted-foreground/20 rounded-xl bg-background/80 backdrop-blur-sm hover:border-festival-gold/50 focus:border-festival-gold focus:ring-2 focus:ring-festival-gold/20 transition-all duration-300 font-medium">
              <option>All Months</option>
              {months.map((month) => (
                <option key={month} value={month.toLowerCase()}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          {/* Enhanced Duration Filter */}
          <div className="space-y-4 group">
            <label className="flex items-center text-lg font-bold text-primary group-hover:text-festival-purple transition-colors duration-300">
              <div className="p-2 bg-festival-purple/20 rounded-lg mr-3 group-hover:bg-festival-purple/30 transition-colors duration-300">
                <Clock className="w-5 h-5 text-festival-purple transition-colors duration-300" />
              </div>
              Duration
            </label>
            <select className="w-full p-4 border-2 border-muted-foreground/20 rounded-xl bg-background/80 backdrop-blur-sm hover:border-festival-purple/50 focus:border-festival-purple focus:ring-2 focus:ring-festival-purple/20 transition-all duration-300 font-medium">
              <option>All Durations</option>
              <option value="1">1 Day</option>
              <option value="2-3">2-3 Days</option>
              <option value="4-7">4-7 Days</option>
              <option value="7+">7+ Days</option>
            </select>
          </div>

          {/* Enhanced Location Filter */}
          <div className="space-y-4 group">
            <label className="flex items-center text-lg font-bold text-primary group-hover:text-festival-blue transition-colors duration-300">
              <div className="p-2 bg-festival-blue/20 rounded-lg mr-3 group-hover:bg-festival-blue/30 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-festival-blue transition-colors duration-300" />
              </div>
              Location
            </label>
            <select className="w-full p-4 border-2 border-muted-foreground/20 rounded-xl bg-background/80 backdrop-blur-sm hover:border-festival-blue/50 focus:border-festival-blue focus:ring-2 focus:ring-festival-blue/20 transition-all duration-300 font-medium">
              <option>All Locations</option>
              <option value="gangtok">Gangtok</option>
              <option value="pelling">Pelling</option>
              <option value="yuksom">Yuksom</option>
              <option value="lachung">Lachung</option>
              <option value="namchi">Namchi</option>
            </select>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default FestivalFilters;
