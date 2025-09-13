import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Star, Play, Heart, Share2, Bell, Ticket, UtensilsCrossed, Building, FileText, Camera, Globe } from "lucide-react";

const SacredCelebrations = () => {
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedType, setSelectedType] = useState("All");

  const featuredEvents = [
    {
      id: 1,
      title: "Losar Festival",
      date: "Feb 10, 2024",
      location: "Rumtek Monastery",
      duration: "3 Days",
      participants: "500+",
      image: "/assets/ramtech-banner1.jpg",
      description: "Tibetan New Year celebration with traditional dances, prayers, and cultural performances.",
      price: "₹2,500",
      featured: true
    },
    {
      id: 2,
      title: "Saga Dawa",
      date: "May 15, 2024",
      location: "Pemayangtse Monastery",
      duration: "1 Day",
      participants: "300+",
      image: "/assets/monastery-interior.jpg",
      description: "Buddha's birth, enlightenment and parinirvana commemoration.",
      price: "₹1,800"
    },
    {
      id: 3,
      title: "Drukpa Kunley",
      date: "Aug 20, 2024",
      location: "Tashiding Monastery",
      duration: "2 Days",
      participants: "400+",
      image: "/assets/tsug.jpg",
      description: "Sacred festival honoring the divine madman saint.",
      price: "₹2,200"
    }
  ];

  const calendarEvents = [
    { date: 10, month: "Feb", event: "Losar Festival" },
    { date: 15, month: "May", event: "Saga Dawa" },
    { date: 20, month: "Aug", event: "Drukpa Kunley" },
    { date: 25, month: "Oct", event: "Diwali Celebration" },
    { date: 12, month: "Dec", event: "Winter Solstice" }
  ];

  const participationGuides = [
    {
      icon: Ticket,
      title: "Festival Tickets",
      description: "Secure your spot at sacred celebrations",
      features: ["Early bird discounts", "VIP access options", "Group bookings", "Refund protection"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: UtensilsCrossed,
      title: "Food Corners",
      description: "Authentic Sikkimese festival cuisine",
      features: ["Traditional dishes", "Vegetarian options", "Local delicacies", "Cultural dining"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Building,
      title: "Accommodation",
      description: "Stay close to the festivities",
      features: ["Monastery stays", "Local homestays", "Premium hotels", "Budget options"],
      color: "from-orange-500 to-red-600"
    }
  ];

  const festivalMemories = [
    "/lovable-uploads/70750049-ba5d-4ae6-a7ed-5aa0f6401fac.png",
    "/lovable-uploads/00aafb18-34fd-4b5c-bb8e-12cdf87153de.png",
    "/lovable-uploads/d608c4d8-0fc2-4fff-bc02-4ec4917beaed.png",
    "/lovable-uploads/dedb3c3e-b625-4f92-9298-ce58aeaf42d0.png",
    "/lovable-uploads/9c195588-d0ec-4063-912c-7a528dc0dd01.png",
    "/lovable-uploads/a860a24e-abf1-45c7-919f-ec1d134f8e48.png"
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "Experiencing Losar Festival at Rumtek was absolutely magical. The spiritual energy and cultural richness exceeded all expectations.",
      avatar: "/lovable-uploads/3949632f-b024-4fb8-8f52-2f819d0741e5.png"
    },
    {
      name: "Sarah Chen",
      location: "Singapore",
      rating: 5,
      text: "The organization was perfect and the cultural insights provided made the experience truly meaningful and transformative.",
      avatar: "/lovable-uploads/3949632f-b024-4fb8-8f52-2f819d0741e5.png"
    },
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Sacred celebrations in Sikkim offer a unique blend of spirituality and culture that touched my soul deeply.",
      avatar: "/lovable-uploads/3949632f-b024-4fb8-8f52-2f819d0741e5.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/assets/monastery-hero.jpg')` }}
        />
        <div className="absolute inset-0 bg-purple-900/50"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
            Sacred Celebrations of Sikkim
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the mystical festivals and spiritual celebrations of the Himalayas. 
            Experience ancient traditions, vibrant cultures, and sacred rituals that have been preserved for centuries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full">
              Explore Festivals
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full">
              Watch Preview
            </Button>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <select 
              value={selectedYear} 
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
            <select 
              value={selectedMonth} 
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="All">All Months</option>
              <option value="Jan">January</option>
              <option value="Feb">February</option>
              <option value="Mar">March</option>
              <option value="Apr">April</option>
              <option value="May">May</option>
              <option value="Jun">June</option>
              <option value="Jul">July</option>
              <option value="Aug">August</option>
              <option value="Sep">September</option>
              <option value="Oct">October</option>
              <option value="Nov">November</option>
              <option value="Dec">December</option>
            </select>
            <select 
              value={selectedType} 
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="All">All Events</option>
              <option value="Festival">Festivals</option>
              <option value="Ceremony">Ceremonies</option>
              <option value="Celebration">Celebrations</option>
            </select>
            <Button className="bg-primary hover:bg-primary/90">
              Search Events
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Sacred Celebrations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Sacred Celebrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for these extraordinary spiritual festivals that showcase the rich cultural heritage of Sikkim
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                  {event.featured && (
                    <Badge className="absolute top-4 left-4 bg-yellow-500 text-black">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      {event.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      {event.participants}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{event.price}</span>
                    <Button>Register Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Calendar 2025 */}
      <section className="py-16 bg-gradient-to-br from-green-400 via-green-500 to-green-600 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-16 h-16 border-2 border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-12 h-12 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-8 h-8 bg-white/15 rounded-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Cultural Calendar 2025</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Plan your spiritual journey with our comprehensive festival calendar. Discover the perfect time to witness Sikkim's most sacred celebrations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Calendar Widget */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <span className="text-gray-600">‹</span>
                </button>
                <h3 className="text-xl font-bold text-gray-900">March 2025</h3>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <span className="text-gray-600">›</span>
                </button>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
                
                {/* Calendar Days */}
                {Array.from({ length: 31 }, (_, i) => {
                  const day = i + 1;
                  const isEventDay = [8, 15].includes(day);
                  return (
                    <div
                      key={day}
                      className={`text-center py-2 text-sm rounded-lg cursor-pointer transition-colors ${
                        isEventDay
                          ? 'bg-yellow-400 text-black font-bold'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
              
              {/* Legend */}
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-3">Festival Types:</h4>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-600">Buddhist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Traditional</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Hindu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600">Christian</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* March Festivals */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">March Festivals</h3>
              
              <Card className="bg-white/95 backdrop-blur-sm border-none shadow-lg">
                <div className="relative">
                  <img 
                    src="/assets/Pemayangtse.jpg" 
                    alt="Bumchu Festival"
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                    Traditional
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Bumchu Festival</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    March 8, 2025
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    Tashiding
                  </div>
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white/95 backdrop-blur-sm border-none shadow-lg">
                <div className="relative">
                  <img 
                    src="/assets/monastery-interior.jpg" 
                    alt="Holi Festival"
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    Traditional
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Holi</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    March 15, 2025
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    Traditional
                  </div>
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Extra Info Boxes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-none">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-green-600" />
                  <CardTitle className="text-green-800">Integration & Permits</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We handle all necessary permits and documentation for your spiritual journey. 
                  Our team ensures seamless integration with local authorities and monastery protocols.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Protected Area Permits</li>
                  <li>• Monastery Entry Permissions</li>
                  <li>• Cultural Protocol Guidance</li>
                  <li>• Local Authority Coordination</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-none">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="w-8 h-8 text-purple-600" />
                  <CardTitle className="text-purple-800">Cultural Preparation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Prepare yourself for meaningful cultural encounters with our comprehensive 
                  orientation sessions and cultural etiquette guidance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cultural Sensitivity Training</li>
                  <li>• Traditional Dress Guidance</li>
                  <li>• Language Basics</li>
                  <li>• Spiritual Practices Overview</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Never Miss a Sacred Moment */}
      

      {/* Festival Memories */}
      

      {/* Cultural Insights & Traditions */}
      

      {/* Spiritual Journeys Shared */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Spiritual Journeys Shared</h2>
            <p className="text-xl text-gray-600">Hear from fellow travelers who experienced the magic</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-gray-600">Happy Participants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Sacred Events</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SacredCelebrations;