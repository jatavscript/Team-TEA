import React from 'react';
import { Button } from "@/components/ui/button";
import { Play, Clock, Globe, Maximize2, Volume2, ArrowRight } from 'lucide-react';
import monasteryInterior from "@/assets/monastery-interior.jpg";
import virtualTour from "@/assets/virtual-tour.jpg";

const VirtualTours = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Virtual Tours
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Experience Sikkim's most iconic monasteries from anywhere in the world
            </p>
          </div>
          
          <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg flex items-center space-x-2">
            <span>View All Tours</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Featured Tour - Rumtek Monastery */}
          <div className="lg:col-span-2">
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-video group">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${monasteryInterior})` }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              
              {/* Top Right Controls */}
              <div className="absolute top-4 right-4 flex space-x-2 z-10">
                <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
                  <Maximize2 className="h-5 w-5 text-white" />
                </button>
                <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
                  <Volume2 className="h-5 w-5 text-white" />
                </button>
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex space-x-2 z-10">
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                  360° TOUR
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  4K Quality
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Rumtek Monastery
                </h3>
                <p className="text-white/90 text-lg mb-6 max-w-lg">
                  The largest monastery in Sikkim, seat of the Karmapa and center of Kagyu tradition
                </p>
                
                {/* Details Row */}
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2 text-white/80">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">45 min tour</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/80">
                    <Globe className="h-4 w-4" />
                    <span className="text-sm">5 languages</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-end">
                  <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2">
                    <Play className="h-4 w-4" />
                    <span>Start Tour</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Side Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Pemayangtse Monastery Card */}
            <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video group cursor-pointer">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${virtualTour})` }}
              >
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h4 className="text-xl font-bold text-white mb-2">
                  Pemayangtse Monastery
                </h4>
                <p className="text-white/90 text-sm mb-3">
                  Ancient wooden structure, exquisite carvings
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">30 min tour</span>
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Play className="h-5 w-5 text-white ml-0.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Enchey Monastery Card */}
            <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video group cursor-pointer">
              {/* Background Image with Prayer Flags */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${virtualTour})` }}
              >
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h4 className="text-xl font-bold text-white mb-2">
                  Enchey Monastery
                </h4>
                <p className="text-white/90 text-sm mb-3">
                  Sacred site with panoramic Gangtok views
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">25 min tour</span>
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Play className="h-5 w-5 text-white ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTours;
