import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { View, Check, Play, Lock, MapPin, Search, Zap, Map, Navigation, MapPin as MapPinIcon, Share, Bookmark, Camera, Mountain } from "lucide-react";

const Features = () => {
  const [hoveredMonastery, setHoveredMonastery] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const filterOptions = [
    "Ancient Manuscripts",
    "Temple Murals", 
    "17th Century",
    "Tibetan Scripts",
    "Ritual Objects"
  ];

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    // Simulate AI search with mock results
    setTimeout(() => {
      const mockResults = [
        {
          title: "Rumtek Monastery Chronicles",
          type: "Manuscript",
          description: "Historical records of Rumtek Monastery from 17th century",
          relevance: 95
        },
        {
          title: "Tibetan Prayer Wheel Artifacts",
          type: "Ritual Objects", 
          description: "Collection of ancient prayer wheels from various monasteries",
          relevance: 88
        },
        {
          title: "Pemayangtse Temple Murals",
          type: "Temple Murals",
          description: "High-resolution digital captures of monastery wall paintings",
          relevance: 82
        }
      ];
      
      setSearchResults(mockResults);
      setIsSearching(false);
    }, 1500);
  };

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const arVrExperiences = [
    {
      id: "dassam-falls",
      title: "Dassam Falls VR",
      description: "360° Virtual Experience",
      icon: View,
      action: "Watch Preview"
    },
    {
      id: "tribal-dance",
      title: "Tribal Dance AR",
      description: "Interactive Cultural Show",
      icon: Camera,
      action: "Experience Now"
    },
    {
      id: "netarhat-sunrise",
      title: "Netarhat Sunrise",
      description: "Time-lapse Virtual Tour",
      icon: Mountain,
      action: "View Sunrise"
    }
  ];

  const monasteries = [
    {
      id: "rumtek",
      name: "Rumtek",
      status: "selected",
      icon: Check,
      color: "orange",
      position: { top: "25%", left: "45%" },
      info: {
        title: "Rumtek Monastery",
        description: "The largest monastery in Sikkim, also known as the Dharma Chakra Centre. Founded in 1966, it serves as the seat of the Karmapa lineage.",
        history: "Originally built in 1740, destroyed by fire, and rebuilt in 1966. Houses precious artifacts and serves as a major center for Tibetan Buddhism.",
        features: ["Golden Stupa", "Prayer Wheels", "Ancient Manuscripts", "Monk Quarters"]
      }
    },
    {
      id: "pemayangtse",
      name: "Pemayangtse",
      status: "playable",
      icon: Play,
      color: "blue",
      position: { top: "65%", left: "75%" },
      info: {
        title: "Pemayangtse Monastery",
        description: "One of the oldest monasteries in Sikkim, established in 1705. Known for its beautiful architecture and spiritual significance.",
        history: "Founded by Lhatsun Chenpo, this monastery is the seat of the Nyingma sect and houses the famous seven-tiered wooden structure.",
        features: ["Seven-tiered Structure", "Ancient Paintings", "Sacred Relics", "Prayer Hall"]
      }
    },
    {
      id: "enchey",
      name: "Enchey",
      status: "locked",
      icon: Lock,
      color: "gray",
      position: { top: "70%", left: "25%" },
      info: {
        title: "Enchey Monastery",
        description: "A beautiful monastery located near Gangtok, known for its annual Chaam dance festival and stunning mountain views.",
        history: "Built in 1909, this monastery follows the Nyingma tradition and is famous for its annual mask dance festival held in January.",
        features: ["Chaam Dance Festival", "Mountain Views", "Prayer Flags", "Sacred Tree"]
      }
    },
    {
      id: "dubdi",
      name: "Dubdi",
      status: "locked",
      icon: Lock,
      color: "gray",
      position: { top: "20%", left: "80%" },
      info: {
        title: "Dubdi Monastery",
        description: "The oldest monastery in Sikkim, built in 1701. Located at an altitude of 2,100 meters, offering panoramic views.",
        history: "Established by Chogyal Chakdor Namgyal, this monastery is the first monastery built in Sikkim and holds great historical significance.",
        features: ["Oldest Monastery", "Panoramic Views", "Ancient Architecture", "Sacred Texts"]
      }
    },
    {
      id: "tashiding",
      name: "Tashiding",
      status: "locked",
      icon: Lock,
      color: "gray",
      position: { top: "45%", left: "90%" },
      info: {
        title: "Tashiding Monastery",
        description: "A sacred monastery known for its annual Bumchu festival and the sacred water ceremony that predicts the year's fortune.",
        history: "Founded in 1641, this monastery is famous for its Bumchu festival where sacred water is opened to predict the year's events.",
        features: ["Bumchu Festival", "Sacred Water", "Prayer Wheels", "Mountain Setting"]
      }
    }
  ];

    return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interactive Maps & AR/VR Previews
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore destinations virtually before you visit. Our interactive maps provide real-time transport info, nearby amenities, and immersive previews.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Interactive Map (2/3 width) */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-2xl p-8 h-full">
              {/* Map Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span className="text-white text-sm">Live Updates</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Map className="h-6 w-6 text-white" />
                  <Navigation className="h-6 w-6 text-white" />
                  <MapPinIcon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Map Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
                  <Map className="h-12 w-12 text-gray-800" />
                </div>
              </div>

              {/* Map Title */}
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                Interactive Sikkim Tourism Map
              </h3>

              {/* Location Info Panel */}
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">Rumtek Monastery</h4>
                  <Button variant="outline" size="sm" className="text-gray-600">
                    Open
                  </Button>
                </div>
                
                <p className="text-gray-600 mb-4">
                  45 km from Gangtok • Best time: 6 AM - 6 PM
                </p>
                
                <div className="flex items-center justify-between">
                  <Button className="bg-gray-800 hover:bg-gray-900 text-white flex items-center space-x-2">
                    <View className="h-4 w-4" />
                    <span>VR Preview</span>
                  </Button>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" className="p-2">
                      <Share className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="p-2">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - AR/VR Experiences (1/3 width) */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-2xl p-6 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-6">AR/VR Experiences</h3>
              
              <div className="space-y-4">
                {arVrExperiences.map((experience) => {
                  const IconComponent = experience.icon;
                  return (
                    <div key={experience.id} className="bg-white rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">{experience.title}</h4>
                          <p className="text-gray-600 text-sm mb-3">{experience.description}</p>
                          
                          <Button variant="outline" size="sm" className="flex items-center space-x-1">
                            <Play className="h-3 w-3" />
                            <span>{experience.action}</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* AI Search Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Search ancient manuscripts, murals, artifacts... (e.g., 'Tibetan prayer wheels' or 'Rumtek monastery history')"
                className="pl-12 h-14 text-lg border-gray-200 focus:border-purple-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button 
                onClick={handleSearch}
                disabled={isSearching}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-6 py-2 rounded-lg"
              >
                {isSearching ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Searching...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4" />
                    <span>AI Search</span>
                  </div>
                )}
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((filter) => (
                <Badge 
                  key={filter}
                  variant={selectedFilters.includes(filter) ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    selectedFilters.includes(filter) 
                      ? "bg-purple-600 text-white hover:bg-purple-700" 
                      : "hover:bg-purple-100"
                  }`}
                  onClick={() => toggleFilter(filter)}
                >
                  {filter}
                </Badge>
              ))}
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="mt-8 space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Search Results</h4>
                {searchResults.map((result, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-900 mb-1">{result.title}</h5>
                        <p className="text-gray-600 text-sm mb-2">{result.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>Type: {result.type}</span>
                          <span>Relevance: {result.relevance}%</span>
                        </div>
                      </div>
                      <Button size="sm" className="ml-4 bg-purple-600 hover:bg-purple-700 text-white">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;