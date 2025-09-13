import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  MapPin,
  Plus,
  Minus,
  Compass,
  Car,
  Bus,
  Bike,
  Navigation,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const InteractiveMap = () => {
  const navigate = useNavigate();
  const [selectedRegions, setSelectedRegions] = useState<string[]>(["east"]);
  const [selectedTraditions, setSelectedTraditions] = useState<string[]>([
    "nyingma",
  ]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const regions = [
    { id: "east", name: "East Sikkim", count: 45 },
    { id: "west", name: "West Sikkim", count: 38 },
    { id: "north", name: "North Sikkim", count: 25 },
    { id: "south", name: "South Sikkim", count: 32 },
  ];

  const traditions = [
    { id: "nyingma", name: "Nyingma" },
    { id: "kagyu", name: "Kagyu" },
    { id: "gelug", name: "Gelug" },
  ];

  const features = [
    { id: "360tour", name: "360° Tour Available" },
    { id: "audioguide", name: "Audio Guide" },
    { id: "festivals", name: "Festivals" },
  ];

  const transportOptions = [
    { type: "Taxi", price: "₹800-1200", icon: Car },
    { type: "Bus", route: "Route 1A", price: "₹25", icon: Bus },
    { type: "Bike Rental", price: "₹500/day", icon: Bike },
  ];

  const handleRegionToggle = (regionId: string) => {
    setSelectedRegions((prev) =>
      prev.includes(regionId)
        ? prev.filter((id) => id !== regionId)
        : [...prev, regionId]
    );
  };

  const handleTraditionToggle = (traditionId: string) => {
    setSelectedTraditions((prev) =>
      prev.includes(traditionId)
        ? prev.filter((id) => id !== traditionId)
        : [...prev, traditionId]
    );
  };

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  return (
    <section className="py-20 bg-white" id="interactive-map">
      <div className="max-w-[1400px] sm:px-12 mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interactive Monastery Map
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover monasteries across Sikkim with intelligent routing and
            local insights
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Filter Monasteries
              </h3>

              {/* Region Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-700 mb-4">
                  Region
                </h4>
                <div className="space-y-3">
                  {regions.map((region) => (
                    <label
                      key={region.id}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
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
                <h4 className="text-sm font-semibold text-gray-700 mb-4">
                  Tradition
                </h4>
                <div className="space-y-3">
                  {traditions.map((tradition) => (
                    <label
                      key={tradition.id}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <Checkbox
                        checked={selectedTraditions.includes(tradition.id)}
                        onCheckedChange={() =>
                          handleTraditionToggle(tradition.id)
                        }
                        className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                      />
                      <span className="text-sm text-gray-700">
                        {tradition.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Features Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-700 mb-4">
                  Features
                </h4>
                <div className="space-y-3">
                  {features.map((feature) => (
                    <label
                      key={feature.id}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <Checkbox
                        checked={selectedFeatures.includes(feature.id)}
                        onCheckedChange={() => handleFeatureToggle(feature.id)}
                        className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                      />
                      <span className="text-sm text-gray-700">
                        {feature.name}
                      </span>
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
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915406.3756828315!2d87.88635537343749!3d27.533055899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a56a5805eafb%3A0xa4c4b857e98d2364!2sSikkim!5e0!3m2!1sen!2sin!4v1703598765432!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sikkim Interactive Map"
              ></iframe>

              {/* Rumtek Monastery Callout */}
              <div className="absolute top-28 left-3 bg-white rounded-sm p-4 shadow-lg max-w-xs">
                <div className="flex items-start space-x-3">
                  <img
                    src={'/assets/monastery-interior.jpg'}
                    alt="Rumtek Monastery"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm">
                      Rumtek Monastery
                    </h4>
                    <p className="text-xs text-gray-600 mb-3">
                      24 km from Gangtok
                    </p>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1"
                        onClick={() => navigate("/monastery/rumtek-monastery")}
                      >
                        360° Tour
                      </Button>
                      <Button
                        size="sm"
                        className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 flex items-center space-x-1"
                      >
                        <span>Open</span>
                        <Navigation className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transport Options Widget */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg">
                <h4 className="font-bold text-gray-900 text-sm mb-3">
                  Transport Options
                </h4>
                <div className="space-y-2">
                  {transportOptions.map((option, index) => {
                    const IconComponent = option.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center space-x-2">
                          <IconComponent className="h-4 w-4 text-gray-600" />
                          <span className="text-gray-700">
                            {option.type}
                            {option.route && ` (${option.route})`}
                          </span>
                        </div>
                        <span className="font-medium text-gray-900">
                          {option.price}
                        </span>
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
