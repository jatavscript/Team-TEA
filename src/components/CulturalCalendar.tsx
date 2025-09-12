import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";

const CulturalCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(2); // February (0-indexed)
  
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const festivals = {
    0: [ // January
      { name: "Makar Sankranti", date: 14, type: "Hindu", location: "Gangtok" },
    ],
    1: [ // February
      { name: "Losar Festival", date: 10, type: "Buddhist", location: "All Monasteries" },
      { name: "Shiva Ratri", date: 18, type: "Hindu", location: "Temples" },
    ],
    2: [ // March
      { name: "Bumchu Festival", date: 8, type: "Buddhist", location: "Tashiding" },
      { name: "Holi", date: 14, type: "Hindu", location: "Statewide" },
    ],
    3: [ // April
      { name: "Chaitra Dasain", date: 15, type: "Hindu", location: "Gangtok" },
    ],
    4: [ // May
      { name: "Saga Dawa", date: 15, type: "Buddhist", location: "Tashiding" },
      { name: "Buddha Purnima", date: 23, type: "Buddhist", location: "All Monasteries" },
    ],
    5: [ // June
      { name: "Guru Rinpoche", date: 10, type: "Buddhist", location: "Monasteries" },
    ],
    6: [ // July
      { name: "Gunla", date: 20, type: "Buddhist", location: "Statewide" },
    ],
    7: [ // August
      { name: "Pang Lhabsol", date: 15, type: "Traditional", location: "Gangtok" },
    ],
    8: [ // September
      { name: "Dashain", date: 25, type: "Hindu", location: "Statewide" },
    ],
    9: [ // October
      { name: "Diwali", date: 12, type: "Hindu", location: "Statewide" },
      { name: "Lhabab Duchen", date: 22, type: "Buddhist", location: "Monasteries" },
    ],
    10: [ // November
      { name: "Chhath Puja", date: 8, type: "Hindu", location: "Gangtok" },
    ],
    11: [ // December
      { name: "Christmas", date: 25, type: "Christian", location: "Statewide" },
    ],
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Buddhist": return "bg-festival-orange text-white";
      case "Hindu": return "bg-festival-purple text-white";
      case "Traditional": return "bg-festival-green text-white";
      case "Christian": return "bg-festival-blue text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const navigateMonth = (direction: number) => {
    setCurrentMonth((prev) => {
      const newMonth = prev + direction;
      if (newMonth < 0) return 11;
      if (newMonth > 11) return 0;
      return newMonth;
    });
  };

  const getDaysInMonth = (month: number, year: number = 2024) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number = 2024) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];
    const monthFestivals = festivals[currentMonth] || [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const festivalOnDay = monthFestivals.find(f => f.date === day);
      
      days.push(
        <div key={day} className="h-12 relative">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm mx-auto ${
            festivalOnDay ? 'bg-festival-gold text-primary font-bold' : 'hover:bg-muted'
          }`}>
            {day}
          </div>
          {festivalOnDay && (
            <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full ${getTypeColor(festivalOnDay.type).split(' ')[0]}`}></div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <section className="py-20 relative overflow-hidden text-white" style={{
      background: 'var(--gradient-cultural-main)',
      backgroundSize: '400% 400%',
      animation: 'gradient-shift 15s ease infinite'
    }}>
      {/* Floating Vector Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Lotus */}
        <div className="absolute top-20 left-10 animate-float-slow">
          <svg width="60" height="60" viewBox="0 0 60 60" className="text-white/20">
            <path d="M30 10c-5 0-10 5-10 10s5 10 10 10 10-5 10-10-5-10-10-10zm0 15c-2.5 0-5-2.5-5-5s2.5-5 5-5 5 2.5 5 5-2.5 5-5 5z" fill="currentColor"/>
            <path d="M30 20c0-5-5-10-10-10s-10 5-10 10 5 10 10 10c0-5 5-10 10-10z" fill="currentColor" opacity="0.7"/>
            <path d="M30 20c0-5 5-10 10-10s10 5 10 10-5 10-10 10c0-5-5-10-10-10z" fill="currentColor" opacity="0.7"/>
            <path d="M30 20c5 0 10 5 10 10s-5 10-10 10-10-5-10-10 5-10 10-10z" fill="currentColor" opacity="0.5"/>
          </svg>
        </div>

        {/* Floating Prayer Flags */}
        <div className="absolute top-32 right-16 animate-float-reverse">
          <svg width="80" height="40" viewBox="0 0 80 40" className="text-white/15">
            <rect x="0" y="5" width="15" height="10" fill="currentColor" opacity="0.8"/>
            <rect x="16" y="5" width="15" height="10" fill="currentColor" opacity="0.6"/>
            <rect x="32" y="5" width="15" height="10" fill="currentColor" opacity="0.7"/>
            <rect x="48" y="5" width="15" height="10" fill="currentColor" opacity="0.5"/>
            <rect x="64" y="5" width="15" height="10" fill="currentColor" opacity="0.9"/>
            <line x1="0" y1="0" x2="80" y2="0" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>

        {/* Floating Mandala */}
        <div className="absolute bottom-32 left-20 animate-pulse-glow">
          <svg width="70" height="70" viewBox="0 0 70 70" className="text-white/10">
            <circle cx="35" cy="35" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="35" cy="35" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="35" cy="35" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
            <path d="M35 5 L40 25 L35 35 L30 25 Z" fill="currentColor" opacity="0.6"/>
            <path d="M65 35 L45 40 L35 35 L45 30 Z" fill="currentColor" opacity="0.6"/>
            <path d="M35 65 L30 45 L35 35 L40 45 Z" fill="currentColor" opacity="0.6"/>
            <path d="M5 35 L25 30 L35 35 L25 40 Z" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>

        {/* Floating Mountain Silhouette */}
        <div className="absolute bottom-20 right-24 animate-float-delayed">
          <svg width="90" height="50" viewBox="0 0 90 50" className="text-white/12">
            <path d="M0 50 L20 20 L35 30 L50 10 L65 25 L80 15 L90 50 Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Floating Stupa */}
        <div className="absolute top-40 right-32 animate-float-slow">
          <svg width="50" height="60" viewBox="0 0 50 60" className="text-white/18">
            <rect x="20" y="45" width="10" height="15" fill="currentColor"/>
            <circle cx="25" cy="40" r="8" fill="currentColor" opacity="0.8"/>
            <rect x="15" y="35" width="20" height="8" fill="currentColor" opacity="0.9"/>
            <polygon points="25,5 35,30 15,30" fill="currentColor" opacity="0.7"/>
          </svg>
        </div>

        {/* Floating Dharma Wheel */}
        <div className="absolute bottom-40 right-10 animate-float-reverse">
          <svg width="55" height="55" viewBox="0 0 55 55" className="text-white/14">
            <circle cx="27.5" cy="27.5" r="25" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="27.5" cy="27.5" r="5" fill="currentColor"/>
            <line x1="27.5" y1="2.5" x2="27.5" y2="52.5" stroke="currentColor" strokeWidth="1"/>
            <line x1="2.5" y1="27.5" x2="52.5" y2="27.5" stroke="currentColor" strokeWidth="1"/>
            <line x1="8" y1="8" x2="47" y2="47" stroke="currentColor" strokeWidth="1"/>
            <line x1="47" y1="8" x2="8" y2="47" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Cultural Calendar 2024
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Plan your spiritual journey with our comprehensive festival calendar. 
            Discover the perfect time to witness Sikkim's most sacred celebrations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Calendar */}
            <Card className="p-6 bg-white/95 backdrop-blur-sm">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigateMonth(-1)}
                  className="hover:bg-primary hover:text-white"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <h3 className="text-2xl font-bold text-primary">
                  {months[currentMonth]} 2024
                </h3>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigateMonth(1)}
                  className="hover:bg-primary hover:text-white"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Calendar Grid */}
              <div className="mb-4">
                {/* Day Headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="h-8 flex items-center justify-center text-sm font-medium text-muted-foreground">
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-1">
                  {renderCalendarDays()}
                </div>
              </div>

              {/* Legend */}
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold text-primary mb-3">Festival Types:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-festival-orange"></div>
                    <span>Buddhist</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-festival-purple"></div>
                    <span>Hindu</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-festival-green"></div>
                    <span>Traditional</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-festival-blue"></div>
                    <span>Christian</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Festival List */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">
                {months[currentMonth]} Festivals
              </h3>
              
              {(festivals[currentMonth] || []).length > 0 ? (
                <div className="space-y-4">
                  {(festivals[currentMonth] || []).map((festival, index) => (
                    <Card key={index} className="p-4 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-lg text-white">{festival.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs ${getTypeColor(festival.type)}`}>
                          {festival.type}
                        </span>
                      </div>
                      
                      <div className="space-y-2 text-white/80">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{months[currentMonth]} {festival.date}, 2024</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{festival.location}</span>
                        </div>
                      </div>
                      
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        className="mt-3 w-full"
                      >
                        Learn More
                      </Button>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-center">
                  <p className="text-white/80">No major festivals in {months[currentMonth]}</p>
                  <p className="text-white/60 text-sm mt-2">Check other months for upcoming celebrations</p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalCalendar;