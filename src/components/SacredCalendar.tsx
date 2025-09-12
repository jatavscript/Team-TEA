import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Camera, ArrowRight } from 'lucide-react';

const SacredCalendar = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sacred Calendar & Festivals
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the vibrant spiritual life of Sikkim's monasteries throughout the year
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - Festival Calendar */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-card border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Festival Calendar</h3>
              
              {/* Calendar Month */}
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary">DEC</div>
                <div className="text-sm text-muted-foreground">2024</div>
              </div>

              {/* Events List */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div>
                    <div className="font-medium text-foreground">Losar Festival</div>
                    <div className="text-xs text-muted-foreground">Feb 10-12</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <div>
                    <div className="font-medium text-foreground">Saga Dawa</div>
                    <div className="text-xs text-muted-foreground">May 23</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/20 border border-primary/20">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <div>
                    <div className="font-medium text-foreground">Chaam Dance</div>
                    <div className="text-xs text-muted-foreground">Dec 28-29</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Featured Event - Chaam Dance Festival */}
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Event Image */}
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="/lovable-uploads/3949632f-b024-4fb8-8f52-2f819d0741e5.png"
                    alt="Chaam Dance Festival performers in colorful masks and costumes"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      UPCOMING | Dec 28-29
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-8 bg-gradient-to-br from-red-600 to-red-700 text-white">
                  <h3 className="text-3xl font-bold mb-4">Chaam Dance Festival</h3>
                  <p className="text-red-100 mb-6 leading-relaxed">
                    Witness the sacred masked dance at Rumtek Monastery, where monks perform ancient ritual masks to ward off evil spirits and welcome prosperity for the new year.
                  </p>

                  {/* Event Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-red-200" />
                      <span className="text-red-100">Rumtek Monastery, East Sikkim</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-red-200" />
                      <span className="text-red-100">9:00 AM - 5:00 PM (Both Days)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Camera className="h-5 w-5 text-red-200" />
                      <span className="text-red-100">Open to visitors • Photography allowed</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <Button variant="secondary" className="bg-white text-red-600 hover:bg-red-50">
                      Book Tour Guide
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white/10">
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Other Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Losar Festival */}
              <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src="/lovable-uploads/3949632f-b024-4fb8-8f52-2f819d0741e5.png"
                    alt="Prayer flags for Losar Festival"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      FEB 10
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-foreground mb-2">Losar Festival</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Tibetan New Year celebration with traditional dances, prayers, and community feasts
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Learn More <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </Card>

              {/* Saga Dawa */}
              <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src="/lovable-uploads/3949632f-b024-4fb8-8f52-2f819d0741e5.png"
                    alt="Saga Dawa celebration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs font-medium">
                      MAY 23
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-foreground mb-2">Saga Dawa</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Sacred month commemorating Buddha's birth, enlightenment, and parinirvana
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Learn More <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </Card>

              {/* Daily Pujas */}
              <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src="/lovable-uploads/3949632f-b024-4fb8-8f52-2f819d0741e5.png"
                    alt="Monks performing daily prayers"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                      ONGOING
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-foreground mb-2">Daily Pujas</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Morning and evening prayer sessions open to visitors at major monasteries
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    View Schedule <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SacredCalendar;