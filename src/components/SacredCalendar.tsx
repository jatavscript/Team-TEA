import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, Camera, ArrowRight, Search, Calendar, Timer, MapPin as Location } from 'lucide-react';

const VectorShape1 = () => (
  <svg width="404" height="404" fill="none" viewBox="0 0 404 404" role="img" aria-labelledby="vector-shape-1-title">
    <title id="vector-shape-1-title">Decorative Vector Shape</title>
    <defs>
      <pattern id="_pattern_a" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect>
      </pattern>
    </defs>
    <rect width="404" height="404" fill="url(#_pattern_a)"></rect>
  </svg>
);

const VectorShape2 = () => (
    <svg width="320" height="420" fill="none" viewBox="0 0 320 420"  role="img" aria-labelledby="vector-shape-2-title">
        <title id="vector-shape-2-title">Decorative Mountain Vector Shape</title>
        <path d="M0 420V0l320 210L0 420z" className="text-purple-50" fill="currentColor" />
    </svg>
);

const SacredCalendar = () => {
  const [selectedFilter, setSelectedFilter] = useState('All Festivals');
  const [searchQuery, setSearchQuery] = useState('');

  const filterButtons = ['All Festivals', 'Buddhist', 'Hindu', 'Traditional', 'Seasonal'];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 min-h-screen overflow-hidden">
      {/* Decorative Vectors */}
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-50">
        <VectorShape1 />
      </div>
      <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 z-0 opacity-30">
        <VectorShape2 />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Find Your Perfect Festival Button */}
        <div className="text-center mb-8">
          <Button 
            variant="outline" 
            className="border border-yellow-400 text-yellow-600 hover:bg-yellow-50 rounded-full px-6 py-2 text-sm bg-yellow-100"
          >
            <Search className="w-4 h-4 mr-2" />
            Find Your Perfect Festival
          </Button>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-4">
            Discover Sacred Celebrations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Filter festivals by type, month, or location to plan your <span className="text-yellow-500 font-medium">spiritual journey</span> through the Himalayas
          </p>
          {/* Yellow underline */}
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filterButtons.map((filter) => (
            <Button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              variant={selectedFilter === filter ? "default" : "outline"}
              className={`rounded-full px-6 py-2 text-sm transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-purple-600 text-white border-purple-600 hover:bg-purple-700'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100 bg-white'
              }`}
            >
              {filter === 'All Festivals' && selectedFilter === 'All Festivals' && <span className="mr-2">✨</span>}
              {filter}
            </Button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search festivals by name, location, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-20 py-4 bg-white border-gray-300 text-gray-800 placeholder-gray-400 rounded-lg text-lg focus:border-purple-500 focus:ring-purple-500"
            />
            <Button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-600 px-4 py-2 rounded-md"
            >
              Press Enter
            </Button>
          </div>
        </div>

        {/* Filter Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {/* Month Filter */}
          <div className="space-y-2">
            <div className="flex items-center text-gray-700 text-sm font-medium">
              <Calendar className="w-4 h-4 mr-2 text-orange-500" />
              Month
            </div>
            <Select>
              <SelectTrigger className="bg-white border-gray-300 text-gray-800">
                <SelectValue placeholder="All Months" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-300">
                <SelectItem value="all">All Months</SelectItem>
                <SelectItem value="jan">January</SelectItem>
                <SelectItem value="feb">February</SelectItem>
                <SelectItem value="mar">March</SelectItem>
                <SelectItem value="apr">April</SelectItem>
                <SelectItem value="may">May</SelectItem>
                <SelectItem value="jun">June</SelectItem>
                <SelectItem value="jul">July</SelectItem>
                <SelectItem value="aug">August</SelectItem>
                <SelectItem value="sep">September</SelectItem>
                <SelectItem value="oct">October</SelectItem>
                <SelectItem value="nov">November</SelectItem>
                <SelectItem value="dec">December</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Duration Filter */}
          <div className="space-y-2">
            <div className="flex items-center text-gray-700 text-sm font-medium">
              <Timer className="w-4 h-4 mr-2 text-purple-500" />
              Duration
            </div>
            <Select>
              <SelectTrigger className="bg-white border-gray-300 text-gray-800">
                <SelectValue placeholder="All Durations" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-300">
                <SelectItem value="all">All Durations</SelectItem>
                <SelectItem value="1day">1 Day</SelectItem>
                <SelectItem value="2-3days">2-3 Days</SelectItem>
                <SelectItem value="week">1 Week</SelectItem>
                <SelectItem value="month">1 Month</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Location Filter */}
          <div className="space-y-2">
            <div className="flex items-center text-gray-700 text-sm font-medium">
              <Location className="w-4 h-4 mr-2 text-blue-500" />
              Location
            </div>
            <Select>
              <SelectTrigger className="bg-white border-gray-300 text-gray-800">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-300">
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="gangtok">Gangtok</SelectItem>
                <SelectItem value="pelling">Pelling</SelectItem>
                <SelectItem value="yuksom">Yuksom</SelectItem>
                <SelectItem value="lachung">Lachung</SelectItem>
                <SelectItem value="namchi">Namchi</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Festival Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Chaam Dance Festival */}
          <Card className="overflow-hidden bg-white border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="relative h-48">
              <img 
                src="/lovable-uploads/3949632f-b024-4fb8-8f52-2f819d0741e5.png"
                alt="Chaam Dance Festival performers in colorful masks and costumes"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  UPCOMING | Dec 28-29
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Chaam Dance Festival</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Witness the sacred masked dance at Rumtek Monastery, where monks perform ancient ritual masks to ward off evil spirits.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                  Rumtek Monastery, East Sikkim
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="h-4 w-4 mr-2 text-gray-500" />
                  9:00 AM - 5:00 PM (Both Days)
                </div>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Learn More
              </Button>
            </div>
          </Card>

          {/* Losar Festival */}
          <Card className="overflow-hidden bg-white border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="relative h-48">
              <img 
                src="/lovable-uploads/3949632f-b024-4fb8-8f52-2f819d0741e5.png"
                alt="Prayer flags for Losar Festival"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  FEB 10-12
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Losar Festival</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Tibetan New Year celebration with traditional dances, prayers, and community feasts across all monasteries.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                  Multiple Monasteries
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="h-4 w-4 mr-2 text-gray-500" />
                  3 Days Festival
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Learn More
              </Button>
            </div>
          </Card>

          {/* Saga Dawa */}
          <Card className="overflow-hidden bg-white border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="relative h-48">
              <img 
                src="/lovable-uploads/3949632f-b024-4fb8-8f52-2f819d0741e5.png"
                alt="Saga Dawa celebration"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  MAY 23
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Saga Dawa</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Sacred month commemorating Buddha's birth, enlightenment, and parinirvana with special prayers and ceremonies.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                  All Major Monasteries
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="h-4 w-4 mr-2 text-gray-500" />
                  Full Month Celebration
                </div>
              </div>
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                Learn More
              </Button>
            </div>
          </Card>

          {/* Daily Pujas */}
          <Card className="overflow-hidden bg-white border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="relative h-48">
              <img 
                src="/lovable-uploads/3949632f-b024-4fb8-8f52-2f819d0741e5.png"
                alt="Monks performing daily prayers"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  ONGOING
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Daily Pujas</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Morning and evening prayer sessions open to visitors at major monasteries throughout Sikkim.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                  Major Monasteries
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="h-4 w-4 mr-2 text-gray-500" />
                  Daily 6 AM & 6 PM
                </div>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                View Schedule
              </Button>
            </div>
          </Card>

          {/* Bumchu Festival */}
          <Card className="overflow-hidden bg-white border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="relative h-48">
              <img 
                src="/lovable-uploads/3949632f-b024-4fb8-8f52-2f819d0741e5.png"
                alt="Bumchu Festival sacred water ceremony"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  JAN 15
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Bumchu Festival</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Sacred water ceremony at Tashiding Monastery where holy water predicts the year's fortune for Sikkim.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                  Tashiding Monastery
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="h-4 w-4 mr-2 text-gray-500" />
                  Full Day Event
                </div>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Learn More
              </Button>
            </div>
          </Card>

          {/* Drukpa Kunley Festival */}
          <Card className="overflow-hidden bg-white border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="relative h-48">
              <img 
                src="/lovable-uploads/3949632f-b024-4fb8-8f52-2f819d0741e5.png"
                alt="Drukpa Kunley Festival celebration"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  SEP 10
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Drukpa Kunley Festival</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Celebration honoring the Divine Madman with traditional folk dances and spiritual teachings.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                  Pemayangtse Monastery
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="h-4 w-4 mr-2 text-gray-500" />
                  2 Days Festival
                </div>
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                Learn More
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SacredCalendar;