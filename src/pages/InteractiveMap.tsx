import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Search, 
  Plus, 
  Minus, 
  Layers, 
  Navigation as NavigationIcon,
  Mountain,
  Calendar,
  Building,
  ChevronDown,
  Compass,
  Map as MapIcon,
  Satellite,
  Globe
} from 'lucide-react';
import NavigationComponent from "@/components/Navigation";
import monasteryHero from "@/assets/monastery-hero.jpg";
import monasteryInterior from "@/assets/monastery-interior.jpg";
import ancientManuscripts from "@/assets/ancient-manuscripts.jpg";

const InteractiveMapPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [mapType, setMapType] = useState('map');
  const [selectedMarker, setSelectedMarker] = useState<any>(null);
  const [showLegend, setShowLegend] = useState(true);

  const categories = [
    { value: 'monasteries', label: 'Monasteries' },
    { value: 'festivals', label: 'Festivals' },
    { value: 'cultural-sites', label: 'Cultural Sites' }
  ];

  const districts = [
    { value: 'east', label: 'East Sikkim' },
    { value: 'west', label: 'West Sikkim' },
    { value: 'north', label: 'North Sikkim' },
    { value: 'south', label: 'South Sikkim' }
  ];

  const difficultyLevels = [
    { value: 'easy', label: 'Easy Access' },
    { value: 'moderate', label: 'Moderate Trek' },
    { value: 'difficult', label: 'Challenging Route' }
  ];

  const mapMarkers = [
    {
      id: 1,
      name: 'Rumtek Monastery',
      category: 'monasteries',
      district: 'east',
      difficulty: 'easy',
      position: { x: 65, y: 35 },
      image: monasteryInterior,
      description: 'The largest monastery in Sikkim, seat of the Karmapa',
      details: 'Built in 1960s | Kagyu Tradition | 24 km from Gangtok'
    },
    {
      id: 2,
      name: 'Enchey Monastery',
      category: 'monasteries',
      district: 'east',
      difficulty: 'easy',
      position: { x: 55, y: 30 },
      image: ancientManuscripts,
      description: 'Ancient monastery with rich Nyingma traditions',
      details: '200+ years old | Nyingma Tradition | Gangtok'
    },
    {
      id: 3,
      name: 'Losar Festival',
      category: 'festivals',
      district: 'west',
      difficulty: 'easy',
      position: { x: 40, y: 45 },
      image: monasteryHero,
      description: 'Tibetan New Year celebration',
      details: 'February/March | Traditional Dances | Community Celebration'
    },
    {
      id: 4,
      name: 'Tashiding Monastery',
      category: 'monasteries',
      district: 'west',
      difficulty: 'moderate',
      position: { x: 35, y: 55 },
      image: monasteryInterior,
      description: 'Sacred monastery on hilltop',
      details: 'Founded in 1641 | Nyingma Tradition | Holy Water Source'
    },
    {
      id: 5,
      name: 'Pemayangtse Monastery',
      category: 'monasteries',
      district: 'west',
      difficulty: 'easy',
      position: { x: 25, y: 60 },
      image: ancientManuscripts,
      description: 'One of the oldest monasteries in Sikkim',
      details: 'Founded in 1705 | Nyingma Tradition | Pelling'
    }
  ];

  const legendItems = [
    { category: 'monasteries', icon: Building, color: 'bg-red-500', label: 'Monasteries' },
    { category: 'festivals', icon: Calendar, color: 'bg-blue-500', label: 'Festivals' },
    { category: 'cultural-sites', icon: Mountain, color: 'bg-green-500', label: 'Cultural Sites' }
  ];

  const filteredMarkers = mapMarkers.filter(marker => {
    const matchesSearch = marker.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || !selectedCategory || marker.category === selectedCategory;
    const matchesDistrict = selectedDistrict === 'all' || !selectedDistrict || marker.district === selectedDistrict;
    const matchesDifficulty = selectedDifficulty === 'all' || !selectedDifficulty || marker.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDistrict && matchesDifficulty;
  });

  const handleMarkerClick = (marker: any) => {
    setSelectedMarker(marker);
  };

  const getMarkerIcon = (category: string) => {
    switch (category) {
      case 'monasteries': return Building;
      case 'festivals': return Calendar;
      case 'cultural-sites': return Mountain;
      default: return MapPin;
    }
  };

  const getMarkerColor = (category: string) => {
    switch (category) {
      case 'monasteries': return 'bg-red-500';
      case 'festivals': return 'bg-blue-500';
      case 'cultural-sites': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationComponent />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${monasteryHero})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Explore Sikkim's Sacred
            <br />
            Cultural Landscape
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            Journey through ancient monasteries, vibrant festivals, and living traditions. 
            Discover the spiritual heart of the Himalayas through our interactive cultural map.
          </p>
          
          {/* Animated Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/80" />
          </div>
        </div>
      </section>

      {/* Interactive Filter & Map Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Filter Section */}
          <div className="bg-card rounded-2xl shadow-lg p-6 mb-8 border">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
              
              {/* Search Box */}
              <div className="lg:col-span-2">
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Search Sites
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Find monasteries, festivals, sites..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Category
                </label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map(cat => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* District Filter */}
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  District
                </label>
                <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Districts" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Districts</SelectItem>
                    {districts.map(district => (
                      <SelectItem key={district.value} value={district.value}>
                        {district.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Difficulty Filter */}
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Access Level
                </label>
                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Levels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    {difficultyLevels.map(level => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Summary */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredMarkers.length} of {mapMarkers.length} locations
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedDistrict('all');
                  setSelectedDifficulty('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Map Controls Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Map Type Controls */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Layers className="h-4 w-4 mr-2" />
                    Map View
                  </h3>
                  <div className="space-y-2">
                    {[
                      { value: 'map', label: 'Map', icon: MapIcon },
                      { value: 'satellite', label: 'Satellite', icon: Satellite },
                      { value: 'terrain', label: 'Terrain', icon: Globe }
                    ].map(type => {
                      const IconComponent = type.icon;
                      return (
                        <Button
                          key={type.value}
                          variant={mapType === type.value ? "default" : "outline"}
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => setMapType(type.value)}
                        >
                          <IconComponent className="h-4 w-4 mr-2" />
                          {type.label}
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Legend */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Legend</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowLegend(!showLegend)}
                    >
                      {showLegend ? 'Hide' : 'Show'}
                    </Button>
                  </div>
                  {showLegend && (
                    <div className="space-y-3">
                      {legendItems.map(item => {
                        const IconComponent = item.icon;
                        return (
                          <div key={item.category} className="flex items-center space-x-3">
                            <div className={`w-4 h-4 rounded-full ${item.color}`} />
                            <IconComponent className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{item.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Active Filters */}
              {(selectedCategory || selectedDistrict || selectedDifficulty || searchQuery) && (
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-3">Active Filters</h3>
                    <div className="flex flex-wrap gap-2">
                      {searchQuery && (
                        <Badge variant="secondary" className="text-xs">
                          Search: {searchQuery}
                        </Badge>
                      )}
                      {selectedCategory && (
                        <Badge variant="secondary" className="text-xs">
                          {categories.find(c => c.value === selectedCategory)?.label}
                        </Badge>
                      )}
                      {selectedDistrict && (
                        <Badge variant="secondary" className="text-xs">
                          {districts.find(d => d.value === selectedDistrict)?.label}
                        </Badge>
                      )}
                      {selectedDifficulty && (
                        <Badge variant="secondary" className="text-xs">
                          {difficultyLevels.find(l => l.value === selectedDifficulty)?.label}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Main Map Area */}
            <div className="lg:col-span-3">
              <div className="relative bg-muted rounded-2xl overflow-hidden h-[700px] border">
                
                {/* Map Background */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  mapType === 'satellite' 
                    ? 'bg-gradient-to-br from-green-800 via-green-600 to-blue-800' 
                    : mapType === 'terrain'
                    ? 'bg-gradient-to-br from-amber-200 via-green-200 to-blue-200'
                    : 'bg-gradient-to-br from-green-100 via-green-200 to-blue-200'
                }`}>
                  
                  {/* Topographical Features */}
                  <div className="absolute top-10 left-20 w-32 h-20 bg-green-300/60 rounded-full" />
                  <div className="absolute top-32 right-16 w-24 h-16 bg-green-400/50 rounded-full" />
                  <div className="absolute bottom-20 left-32 w-40 h-24 bg-blue-300/40 rounded-full" />
                  <div className="absolute bottom-32 right-24 w-28 h-18 bg-green-300/50 rounded-full" />
                  
                  {/* Mountain Ranges */}
                  <div className="absolute top-0 right-0 w-48 h-32 bg-gradient-to-b from-gray-400/30 to-gray-500/40 rounded-tl-full" />
                  <div className="absolute bottom-0 left-0 w-40 h-24 bg-gradient-to-t from-gray-400/30 to-gray-500/40 rounded-br-full" />
                </div>

                {/* Roads/Paths */}
                <svg className="absolute inset-0 w-full h-full">
                  <path 
                    d="M 100 200 Q 200 150 300 180 T 500 200" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none" 
                    opacity="0.6"
                    className="text-amber-500"
                  />
                  <path 
                    d="M 150 300 Q 250 250 350 280 T 550 300" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none" 
                    opacity="0.6"
                    className="text-amber-500"
                  />
                </svg>

                {/* Map Markers */}
                {filteredMarkers.map((marker) => {
                  const IconComponent = getMarkerIcon(marker.category);
                  const markerColor = getMarkerColor(marker.category);
                  
                  return (
                    <div
                      key={marker.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-110"
                      style={{
                        left: `${marker.position.x}%`,
                        top: `${marker.position.y}%`
                      }}
                      onClick={() => handleMarkerClick(marker)}
                    >
                      <div className={`w-8 h-8 ${markerColor} rounded-full border-2 border-white shadow-lg flex items-center justify-center`}>
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  );
                })}

                {/* Selected Marker Info Card */}
                {selectedMarker && (
                  <Card className="absolute top-4 left-4 max-w-sm shadow-xl">
                    <CardContent className="p-0">
                      <img 
                        src={selectedMarker.image} 
                        alt={selectedMarker.name}
                        className="w-full h-32 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">{selectedMarker.name}</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {selectedMarker.description}
                        </p>
                        <p className="text-xs text-muted-foreground mb-4">
                          {selectedMarker.details}
                        </p>
                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1">
                            <NavigationIcon className="h-3 w-3 mr-1" />
                            Directions
                          </Button>
                          <Button size="sm" variant="outline">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Map Navigation Controls */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                    <Compass className="h-4 w-4" />
                  </Button>
                </div>

                {/* Close Info Card Button */}
                {selectedMarker && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-4 right-16"
                    onClick={() => setSelectedMarker(null)}
                  >
                    ×
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteractiveMapPage;