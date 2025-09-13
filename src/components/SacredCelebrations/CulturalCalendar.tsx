import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import styles from './SacredCelebrations.module.css';

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

  const getDaysInMonth = (month: number, year: number = 2025) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number = 2025) => {
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
        <div key={day} className="h-12 relative flex items-center justify-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            festivalOnDay ? 'bg-orange-500 text-white font-bold' : 'text-gray-700 hover:bg-gray-100'
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
    <section className="py-24 bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Cultural Calendar 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Plan your spiritual journey with our comprehensive festival calendar. 
            Discover the perfect time to witness Sikkim's most sacred celebrations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Calendar */}
            <Card className="p-6 bg-white shadow-xl border-0">
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
                
                <h3 className="text-2xl font-bold text-gray-800">
                  {months[currentMonth]} 2025
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
                    <div key={day} className="h-8 flex items-center justify-center text-sm font-semibold text-gray-600">
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
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">Festival Types:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <span className="text-gray-700">Buddhist</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-gray-700">Hindu</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-gray-700">Traditional</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-gray-700">Christian</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Festival List */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                {months[currentMonth]} Festivals
              </h3>
              
              {(festivals[currentMonth] || []).length > 0 ? (
                <div className="space-y-4">
                  {(festivals[currentMonth] || []).map((festival, index) => (
                    <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border border-purple-200 hover:border-purple-300 transition-colors shadow-lg">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="font-bold text-lg text-gray-800">{festival.name}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(festival.type)}`}>
                          {festival.type}
                        </span>
                      </div>
                      
                      <div className="space-y-3 text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-purple-600" />
                          <span className="text-sm">{months[currentMonth]} {festival.date}, 2025</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <span className="text-sm">{festival.location}</span>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 rounded-lg transition-all duration-300"
                      >
                        Learn More
                      </Button>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-8 bg-white/60 backdrop-blur-sm border border-gray-200 text-center shadow-lg">
                  <p className="text-gray-600">No major festivals in {months[currentMonth]}</p>
                  <p className="text-gray-500 text-sm mt-2">Check other months for upcoming celebrations</p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default CulturalCalendar;
