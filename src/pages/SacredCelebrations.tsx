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
      image: "/lovable-uploads/3002ed2e-82d2-41aa-bf59-fe5cb1c8b137.png",
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
      image: "/lovable-uploads/454979dd-b894-4d87-a200-25d87a03ecd4.png",
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
      image: "/lovable-uploads/030cc0a5-7a96-48b7-9924-e1d002514bb0.png",
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-monastery-primary via-himalayan-primary to-prayer-primary">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/3002ed2e-82d2-41aa-bf59-fe5cb1c8b137.png')] bg-cover bg-center opacity-30"></div>
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

      {/* Cultural Calendar 2024 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cultural Calendar 2024</h2>
            <p className="text-xl text-gray-600">Mark your calendar for these sacred events</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {calendarEvents.map((event, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-primary mb-2">{event.date}</div>
                  <div className="text-sm text-gray-600 mb-1">{event.month}</div>
                  <div className="text-sm font-medium">{event.event}</div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View Full Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Participation Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Festival Participation Guide</h2>
            <p className="text-xl text-gray-600">Everything you need for the perfect festival experience</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {participationGuides.map((guide, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`h-32 bg-gradient-to-br ${guide.color} flex items-center justify-center`}>
                  <guide.icon className="w-16 h-16 text-white" />
                </div>
                <CardHeader>
                  <CardTitle>{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {guide.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4">Learn More</Button>
                </CardContent>
              </Card>
            ))}
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
      <section className="py-16 bg-gradient-to-br from-monastery-primary via-himalayan-primary to-prayer-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Never Miss a Sacred Moment</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stay connected with the spiritual rhythm of Sikkim. Get notifications for upcoming festivals, 
            exclusive ceremonies, and special cultural events.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Bell className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">Smart Notifications</h3>
              <p className="text-gray-200">Get timely alerts for festivals and ceremonies</p>
            </div>
            <div className="text-center">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">Personal Calendar</h3>
              <p className="text-gray-200">Sync sacred events with your schedule</p>
            </div>
            <div className="text-center">
              <Share2 className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">Share Experiences</h3>
              <p className="text-gray-200">Connect with fellow spiritual travelers</p>
            </div>
          </div>
          
          <Button size="lg" className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
            Enable Notifications
          </Button>
        </div>
      </section>

      {/* Festival Memories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Festival Memories</h2>
            <p className="text-xl text-gray-600">Capturing the essence of sacred celebrations</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img 
                src="/lovable-uploads/3002ed2e-82d2-41aa-bf59-fe5cb1c8b137.png" 
                alt="Featured Festival Moment"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Losar Festival 2024</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Experience the magic of Tibetan New Year as hundreds of devotees gather at Rumtek Monastery. 
                The air fills with the sound of horns, chanting, and the rustle of prayer flags dancing in the mountain breeze.
              </p>
              <div className="flex items-center gap-4">
                <Button className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Watch Highlights
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  View Gallery
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {festivalMemories.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src={image} 
                  alt={`Festival Memory ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Insights & Traditions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Cultural Insights & Traditions</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Delve deep into the spiritual significance and cultural importance of Sikkim's sacred celebrations. 
                Each festival carries centuries of wisdom, tradition, and spiritual practice.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ancient Origins</h4>
                    <p className="text-gray-600 text-sm">Festivals dating back over 1,000 years</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Spiritual Significance</h4>
                    <p className="text-gray-600 text-sm">Deep Buddhist and Bon traditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cultural Preservation</h4>
                    <p className="text-gray-600 text-sm">Keeping traditions alive for future generations</p>
                  </div>
                </div>
              </div>
              
              <Button className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Explore Traditions
              </Button>
            </div>
            
            <div>
              <img 
                src="/lovable-uploads/454979dd-b894-4d87-a200-25d87a03ecd4.png" 
                alt="Cultural Traditions"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              
              <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Festival Quick Facts</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">25+</div>
                    <div className="text-sm text-gray-600">Annual Festivals</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-sm text-gray-600">Major Monasteries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-gray-600">Years of Tradition</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">50K+</div>
                    <div className="text-sm text-gray-600">Annual Visitors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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