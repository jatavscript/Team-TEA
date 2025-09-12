import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Plus, Minus, Compass, Car, Bus, Bike, Navigation } from 'lucide-react';
import monasteryInterior from "@/assets/monastery-interior.jpg";

const InteractiveMap = () => {
  const [selectedRegions, setSelectedRegions] = useState<string[]>(['east']);
  const [selectedTraditions, setSelectedTraditions] = useState<string[]>(['nyingma']);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const regions = [
    { id: 'east', name: 'East Sikkim', count: 45 },
    { id: 'west', name: 'West Sikkim', count: 38 },
    { id: 'north', name: 'North Sikkim', count: 25 },
    { id: 'south', name: 'South Sikkim', count: 32 }
  ];

  const traditions = [
    { id: 'nyingma', name: 'Nyingma' },
    { id: 'kagyu', name: 'Kagyu' },
    { id: 'gelug', name: 'Gelug' }
  ];

  const features = [
    { id: '360tour', name: '360° Tour Available' },
    { id: 'audioguide', name: 'Audio Guide' },
    { id: 'festivals', name: 'Festivals' }
  ];

  const transportOptions = [
    { type: 'Taxi', price: '₹800-1200', icon: Car },
    { type: 'Bus', route: 'Route 1A', price: '₹25', icon: Bus },
    { type: 'Bike Rental', price: '₹500/day', icon: Bike }
  ];

  const handleRegionToggle = (regionId: string) => {
    setSelectedRegions(prev => 
      prev.includes(regionId) 
        ? prev.filter(id => id !== regionId)
        : [...prev, regionId]
    );
  };

  const handleTraditionToggle = (traditionId: string) => {
    setSelectedTraditions(prev => 
      prev.includes(traditionId) 
        ? prev.filter(id => id !== traditionId)
        : [...prev, traditionId]
    );
  };

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interactive Monastery Map
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover monasteries across Sikkim with intelligent routing and local insights
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Filter Monasteries</h3>
              
              {/* Region Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Region</h4>
                <div className="space-y-3">
                  {regions.map((region) => (
                    <label key={region.id} className="flex items-center space-x-3 cursor-pointer">
                      <Checkbox
                        checked={selectedRegions.includes(region.id)}
                        onCheckedChange={() => handleRegionToggle(region.id)}
                        className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                      />
                      <span className="text-sm text-gray-700">
                        {region.name} ({region.count})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tradition Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Tradition</h4>
                <div className="space-y-3">
                  {traditions.map((tradition) => (
                    <label key={tradition.id} className="flex items-center space-x-3 cursor-pointer">
                      <Checkbox
                        checked={selectedTraditions.includes(tradition.id)}
                        onCheckedChange={() => handleTraditionToggle(tradition.id)}
                        className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                      />
                      <span className="text-sm text-gray-700">{tradition.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Features Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Features</h4>
                <div className="space-y-3">
                  {features.map((feature) => (
                    <label key={feature.id} className="flex items-center space-x-3 cursor-pointer">
                      <Checkbox
                        checked={selectedFeatures.includes(feature.id)}
                        onCheckedChange={() => handleFeatureToggle(feature.id)}
                        className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                      />
                      <span className="text-sm text-gray-700">{feature.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Apply Filters Button */}
              <Button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700">
                Apply Filters
              </Button>
            </div>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-3">
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden h-[600px]">
              
              {/* Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-200 to-blue-200">
                {/* Topographical elements */}
                <div className="absolute top-10 left-20 w-32 h-20 bg-green-300 rounded-full opacity-60"></div>
                <div className="absolute top-32 right-16 w-24 h-16 bg-green-400 rounded-full opacity-50"></div>
                <div className="absolute bottom-20 left-32 w-40 h-24 bg-blue-300 rounded-full opacity-40"></div>
                <div className="absolute bottom-32 right-24 w-28 h-18 bg-green-300 rounded-full opacity-50"></div>
                
                {/* Mountain silhouettes */}
                <div className="absolute top-0 right-0 w-48 h-32 bg-gradient-to-b from-gray-300 to-gray-400 rounded-tl-full"></div>
                <div className="absolute bottom-0 left-0 w-40 h-24 bg-gradient-to-t from-gray-300 to-gray-400 rounded-br-full"></div>
              </div>

              {/* Roads */}
              <div className="absolute inset-0">
                <svg className="w-full h-full">
                  <path d="M 100 200 Q 200 150 300 180 T 500 200" stroke="#fbbf24" strokeWidth="3" fill="none" opacity="0.8"/>
                  <path d="M 150 300 Q 250 250 350 280 T 550 300" stroke="#fbbf24" strokeWidth="3" fill="none" opacity="0.8"/>
                  <path d="M 200 400 Q 300 350 400 380 T 600 400" stroke="#fbbf24" strokeWidth="3" fill="none" opacity="0.8"/>
                </svg>
              </div>

              {/* Monastery Markers */}
              <div className="absolute top-20 left-32">
                <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>
              <div className="absolute top-40 right-24">
                <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>
              <div className="absolute bottom-32 left-40">
                <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>
              <div className="absolute bottom-20 right-32">
                <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>
              <div className="absolute top-60 left-60">
                <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>

              {/* Rumtek Monastery Callout */}
              <div className="absolute top-16 left-16 bg-white rounded-xl p-4 shadow-lg max-w-xs">
                <div className="flex items-start space-x-3">
                  <img 
                    src={monasteryInterior} 
                    alt="Rumtek Monastery" 
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm">Rumtek Monastery</h4>
                    <p className="text-xs text-gray-600 mb-3">24 km from Gangtok</p>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1">
                        360° Tour
                      </Button>
                      <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 flex items-center space-x-1">
                        <span>Open</span>
                        <Navigation className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Controls */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Plus className="h-5 w-5 text-gray-700" />
                </button>
                <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Minus className="h-5 w-5 text-gray-700" />
                </button>
                <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Compass className="h-5 w-5 text-gray-700" />
                </button>
              </div>

              {/* Transport Options Widget */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg">
                <h4 className="font-bold text-gray-900 text-sm mb-3">Transport Options</h4>
                <div className="space-y-2">
                  {transportOptions.map((option, index) => {
                    const IconComponent = option.icon;
                    return (
                      <div key={index} className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <IconComponent className="h-4 w-4 text-gray-600" />
                          <span className="text-gray-700">
                            {option.type}
                            {option.route && ` (${option.route})`}
                          </span>
                        </div>
                        <span className="font-medium text-gray-900">{option.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
