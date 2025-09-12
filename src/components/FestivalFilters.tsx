import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Sparkles, Calendar, Clock, MapPin, Star, Search } from "lucide-react";

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

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-20 h-20 bg-festival-gold rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-festival-purple rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-festival-gold/20 to-yellow-400/20 text-festival-gold font-medium rounded-full text-sm border border-festival-gold/30 flex items-center space-x-2">
              <Search className="w-4 h-4" />
              <span>Find Your Perfect Festival</span>
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-festival-purple to-primary bg-clip-text text-transparent mb-6 leading-tight">
            Discover Sacred Celebrations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Filter festivals by type, month, or location to plan your 
            <span className="text-festival-gold font-semibold"> spiritual journey</span> through the Himalayas
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
                    ? `${filter.color} text-white hover:opacity-90 shadow-xl scale-105` 
                    : "hover:border-festival-gold/50 hover:bg-festival-gold/5"
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
              <Search className="h-5 w-5 text-muted-foreground group-hover:text-festival-gold transition-colors duration-300" />
            </div>
            <Input
              type="text"
              placeholder="Search festivals by name, location, or description..."
              className="pl-12 pr-4 py-4 text-lg border-2 border-muted-foreground/20 rounded-xl bg-background/80 backdrop-blur-sm hover:border-festival-gold/50 focus:border-festival-gold focus:ring-2 focus:ring-festival-gold/20 transition-all duration-300 font-medium placeholder:text-muted-foreground/60"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
              <div className="text-xs text-muted-foreground/60 bg-muted/50 px-2 py-1 rounded-md">
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
  );
};

export default FestivalFilters;