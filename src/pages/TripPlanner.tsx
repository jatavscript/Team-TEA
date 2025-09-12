import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users, Clock, Star, Download, Share2, BookOpen, Mountain, Camera, Heart, Compass, Globe } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TripPlanner = () => {
  const [selectedDuration, setSelectedDuration] = useState('7 days');
  const [selectedBudget, setSelectedBudget] = useState('Mid-range');
  const [selectedInterests, setSelectedInterests] = useState(['Cultural Sites', 'Adventure']);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-festival-orange via-festival-purple to-primary text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI-Powered Trip Planner
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Create the perfect itinerary tailored to your interests with intelligent AI recommendations for your Sikkim spiritual journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg">
              Start Planning
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              View Sample Itinerary
            </Button>
          </div>
        </div>
      </section>

      {/* Customize Your Spiritual Journey */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Customize Your Spiritual Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tell us about yourself and your preferences to get the most personalized itinerary for your Sikkim adventure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Travel Details */}
            <Card className="border-2 hover:border-festival-orange transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-festival-orange">Travel Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="duration">Trip Duration</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['3 days', '5 days', '7 days', '10 days', '14 days'].map((duration) => (
                      <Badge
                        key={duration}
                        variant={selectedDuration === duration ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setSelectedDuration(duration)}
                      >
                        {duration}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="travelers">Number of Travelers</Label>
                  <Input id="travelers" placeholder="e.g., 2 adults" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="dates">Preferred Dates</Label>
                  <Input id="dates" type="date" className="mt-2" />
                </div>
              </CardContent>
            </Card>

            {/* Your Interests */}
            <Card className="border-2 hover:border-festival-purple transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-festival-purple">Your Interests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>What interests you most?</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Cultural Sites', 'Adventure', 'Monasteries', 'Nature', 'Photography', 'Local Food'].map((interest) => (
                      <Badge
                        key={interest}
                        variant={selectedInterests.includes(interest) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => {
                          if (selectedInterests.includes(interest)) {
                            setSelectedInterests(selectedInterests.filter(i => i !== interest));
                          } else {
                            setSelectedInterests([...selectedInterests, interest]);
                          }
                        }}
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="experience">Experience Level</Label>
                  <div className="flex gap-2 mt-2">
                    {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                      <Badge key={level} variant="outline" className="cursor-pointer">
                        {level}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trip Details */}
            <Card className="border-2 hover:border-festival-blue transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-festival-blue">Trip Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Budget Range</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Budget', 'Mid-range', 'Luxury'].map((budget) => (
                      <Badge
                        key={budget}
                        variant={selectedBudget === budget ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setSelectedBudget(budget)}
                      >
                        {budget}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="accommodation">Accommodation Preference</Label>
                  <div className="flex gap-2 mt-2">
                    {['Hotel', 'Homestay', 'Resort'].map((type) => (
                      <Badge key={type} variant="outline" className="cursor-pointer">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="transport">Transport Mode</Label>
                  <div className="flex gap-2 mt-2">
                    {['Private Car', 'Shared Taxi', 'Public Transport'].map((transport) => (
                      <Badge key={transport} variant="outline" className="cursor-pointer">
                        {transport}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-orange text-white px-12 py-4 text-lg">
              Generate Itinerary
            </Button>
          </div>
        </div>
      </section>

      {/* Your Personalized Itinerary */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your Personalized Itinerary</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Based on your preferences, we've created the perfect 7-day spiritual journey through Sikkim
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Itinerary Timeline */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-festival-orange">Daily Itinerary - 7 Days</CardTitle>
                <CardDescription>Comprehensive day-by-day plan for your journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <div key={day} className="flex gap-4 pb-4 border-b border-muted">
                      <div className="w-10 h-10 bg-festival-orange text-white rounded-full flex items-center justify-center font-bold">
                        {day}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">
                          Day {day}: {day === 1 ? 'Arrival in Gangtok' : day === 2 ? 'Tsomgo Lake & Baba Mandir' : day === 3 ? 'Rumtek Monastery' : day === 4 ? 'Pelling - Khecheopalri Lake' : day === 5 ? 'Yuksom - Dubdi Monastery' : day === 6 ? 'Ravangla - Buddha Park' : 'Departure'}
                        </h4>
                        <p className="text-muted-foreground text-sm mt-1">
                          {day === 1 ? 'Check-in, local market visit, evening at MG Marg' : 
                           day === 2 ? 'Sacred lake visit, temple blessing, mountain views' :
                           day === 3 ? 'Monastery tour, spiritual teachings, meditation' :
                           day === 4 ? 'Wishful lake, local legends, nature walk' :
                           day === 5 ? 'Historical monastery, hiking trail, local culture' :
                           day === 6 ? 'Giant Buddha statue, panoramic views, peaceful retreat' :
                           'Last-minute shopping, airport transfer'}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">8-10 hours</span>
                          <MapPin className="w-4 h-4 text-muted-foreground ml-2" />
                          <span className="text-sm text-muted-foreground">
                            {day <= 3 ? 'Gangtok' : day <= 5 ? 'Pelling' : day === 6 ? 'Ravangla' : 'Departure'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Adventure Highlights */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-festival-purple">Adventure Highlights</CardTitle>
                <CardDescription>Special experiences tailored for you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/47dd2b70-c944-42c5-acbd-9de9ae1410ac.png" 
                    alt="Sikkim Monastery" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Badge className="absolute top-2 right-2 bg-festival-purple">Featured</Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Mountain className="w-5 h-5 text-festival-blue" />
                    <div>
                      <p className="font-medium">Himalayan Monastery Tour</p>
                      <p className="text-sm text-muted-foreground">Ancient Buddhist temples with mountain views</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Camera className="w-5 h-5 text-festival-green" />
                    <div>
                      <p className="font-medium">Sacred Lake Photography</p>
                      <p className="text-sm text-muted-foreground">Capture spiritual moments at holy lakes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Globe className="w-5 h-5 text-festival-orange" />
                    <div>
                      <p className="font-medium">Cultural Immersion</p>
                      <p className="text-sm text-muted-foreground">Local traditions and spiritual practices</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Trip Rating</span>
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Perfect for spiritual seekers and culture enthusiasts</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Powered Recommendations */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">AI Powered Recommendations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get intelligent suggestions based on your preferences, weather, local events, and real-time data
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-elegant transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-festival-green/10 rounded-lg flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-festival-green" />
                </div>
                <CardTitle className="text-xl text-festival-green">Monastery Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  AI analyzes the best times to visit monasteries based on prayer schedules, festivals, and crowd levels.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-festival-green rounded-full"></div>
                    Early morning visits for peaceful meditation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-festival-green rounded-full"></div>
                    Festival calendar integration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-festival-green rounded-full"></div>
                    Monk interaction opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-festival-green rounded-full"></div>
                    Photography guidelines
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-elegant transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-festival-purple/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-festival-purple" />
                </div>
                <CardTitle className="text-xl text-festival-purple">Cultural Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Stay updated with local festivals, cultural events, and seasonal celebrations happening during your visit.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-festival-purple rounded-full"></div>
                    Real-time festival notifications
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-festival-purple rounded-full"></div>
                    Traditional dance performances
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-festival-purple rounded-full"></div>
                    Local market days
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-festival-purple rounded-full"></div>
                    Seasonal celebrations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-elegant transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-festival-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-festival-blue" />
                </div>
                <CardTitle className="text-xl text-festival-blue">Smart Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Receive intelligent alerts about weather changes, road conditions, and optimal travel times.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-festival-blue rounded-full"></div>
                    Weather-based recommendations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-festival-blue rounded-full"></div>
                    Traffic and road updates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-festival-blue rounded-full"></div>
                    Best photography hours
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-festival-blue rounded-full"></div>
                    Safety notifications
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ready to Book Your Journey */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary via-festival-purple to-festival-blue text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Book Your Journey?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Everything you need to turn your perfect itinerary into reality. Book accommodations, transport, and experiences all in one place.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            {/* Booking Services */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Booking Services</h3>
              <div className="space-y-4">
                <Card className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-semibold">Accommodations</h4>
                      <Badge variant="secondary" className="bg-white/20 text-white">Available</Badge>
                    </div>
                    <p className="text-sm opacity-90 mb-4">Hand-picked hotels and homestays along your route</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Starting from ₹2,500/night</span>
                      <Button variant="secondary" size="sm" className="bg-white text-primary">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-semibold">Tour Guides</h4>
                      <Badge variant="secondary" className="bg-green-500 text-white">Verified</Badge>
                    </div>
                    <p className="text-sm opacity-90 mb-4">Experienced local guides fluent in multiple languages</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">₹1,500-3,000/day</span>
                      <Button variant="secondary" size="sm" className="bg-white text-primary">
                        Book Guide
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-semibold">Transportation</h4>
                      <Badge variant="secondary" className="bg-blue-500 text-white">Premium</Badge>
                    </div>
                    <p className="text-sm opacity-90 mb-4">Private cars, shared taxis, and helicopter services</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">₹3,500-15,000/day</span>
                      <Button variant="secondary" size="sm" className="bg-white text-primary">
                        Book Transport
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-semibold">Experiences</h4>
                      <Badge variant="secondary" className="bg-purple-500 text-white">Unique</Badge>
                    </div>
                    <p className="text-sm opacity-90 mb-4">Meditation sessions, cooking classes, and cultural workshops</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">₹800-2,500/experience</span>
                      <Button variant="secondary" size="sm" className="bg-white text-primary">
                        Book Experience
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Export & Share Options */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Export & Share Options</h3>
              <div className="space-y-6">
                <Card className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-4">Download Your Itinerary</h4>
                    <p className="text-sm opacity-90 mb-6">Get your complete travel plan in multiple formats</p>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        PDF Guide
                      </Button>
                      <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Calendar
                      </Button>
                      <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                        <MapPin className="w-4 h-4 mr-2" />
                        Maps Offline
                      </Button>
                      <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Travel Guide
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-4">Share with Travel Companions</h4>
                    <p className="text-sm opacity-90 mb-6">Collaborate and plan together with your group</p>
                    <div className="flex gap-3">
                      <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white flex-1">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Link
                      </Button>
                      <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white flex-1">
                        <Users className="w-4 h-4 mr-2" />
                        Invite Friends
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <h4 className="text-lg font-semibold mb-4">Complete Package</h4>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">₹45,999</div>
                    <p className="text-sm opacity-90 mb-4">7 days • 2 travelers • All inclusive</p>
                    <Button size="lg" className="bg-festival-orange hover:bg-festival-orange/90 text-white w-full">
                      Book Complete Package
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Travel Dashboard */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your Travel Dashboard</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Manage all aspects of your trip from one convenient dashboard. Track bookings, get updates, and access your travel documents.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-orange rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Sikkim Spiritual Journey</CardTitle>
                    <CardDescription>March 15-22, 2024 • 2 Travelers</CardDescription>
                  </div>
                  <Badge className="ml-auto bg-green-500">Confirmed</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="bookings">Bookings</TabsTrigger>
                    <TabsTrigger value="documents">Documents</TabsTrigger>
                    <TabsTrigger value="updates">Updates</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-6 mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Trip Progress</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                            <span className="font-medium">Accommodation</span>
                            <Badge variant="secondary" className="bg-green-100 text-green-800">Booked</Badge>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                            <span className="font-medium">Transportation</span>
                            <Badge variant="secondary" className="bg-green-100 text-green-800">Confirmed</Badge>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                            <span className="font-medium">Tour Guide</span>
                            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Pending</Badge>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                            <span className="font-medium">Travel Insurance</span>
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800">Recommended</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <img 
                          src="/lovable-uploads/4b73a32a-d7b6-4e06-84aa-223813590f09.png" 
                          alt="Sikkim Temple" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="mt-4 space-y-2">
                          <h5 className="font-medium">Weather Forecast</h5>
                          <p className="text-sm text-muted-foreground">
                            Clear skies expected for your visit. Perfect weather for monastery visits and mountain photography.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="bookings" className="mt-6">
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">Booking management interface would be displayed here</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="documents" className="mt-6">
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">Travel documents and permits would be displayed here</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="updates" className="mt-6">
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">Real-time travel updates would be displayed here</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Share Your Experience */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Share Your Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Help fellow travelers by sharing your journey and reading reviews from other spiritual seekers who have explored Sikkim.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Write a Review */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-festival-orange">Write a Review</CardTitle>
                <CardDescription>Share your spiritual journey with fellow travelers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="rating">Overall Rating</Label>
                  <div className="flex gap-1 mt-2">
                    {[1,2,3,4,5].map((star) => (
                      <Star 
                        key={star} 
                        className="w-6 h-6 cursor-pointer text-yellow-400 fill-yellow-400" 
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="title">Review Title</Label>
                  <Input id="title" placeholder="A transformative spiritual journey..." className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="review">Your Experience</Label>
                  <textarea 
                    id="review"
                    placeholder="Tell us about your experience visiting the monasteries, the people you met, and how the journey affected you..."
                    className="w-full mt-2 p-3 border rounded-md min-h-[120px] resize-none"
                  />
                </div>
                <div className="flex gap-2">
                  <Button className="bg-festival-orange hover:bg-festival-orange/90">
                    Submit Review
                  </Button>
                  <Button variant="outline">
                    <Camera className="w-4 h-4 mr-2" />
                    Add Photos
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Reviews */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Recent Reviews</h3>
              
              {[
                {
                  name: "Sarah Johnson",
                  rating: 5,
                  title: "Life-changing spiritual experience",
                  text: "The monasteries of Sikkim provided the perfect setting for inner reflection. Our guide was knowledgeable about the Buddhist traditions and helped us understand the significance of each sacred site.",
                  date: "2 weeks ago"
                },
                {
                  name: "Rajesh Sharma",
                  rating: 5,
                  title: "Perfect blend of adventure and spirituality",
                  text: "The AI-powered itinerary was spot-on! Every recommendation matched our interests perfectly. The timing for festival visits was impeccable.",
                  date: "1 month ago"
                },
                {
                  name: "Maya Patel",
                  rating: 4,
                  title: "Beautiful mountains, peaceful monasteries",
                  text: "Sikkim's natural beauty combined with its spiritual heritage creates an unforgettable experience. The accommodation recommendations were excellent.",
                  date: "2 months ago"
                }
              ].map((review, index) => (
                <Card key={index} className="border">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h5 className="font-semibold">{review.name}</h5>
                        <div className="flex gap-1 mt-1">
                          {[1,2,3,4,5].map((star) => (
                            <Star 
                              key={star} 
                              className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <h6 className="font-medium mb-2">{review.title}</h6>
                    <p className="text-sm text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
              
              <div className="text-center">
                <Button variant="outline">View All Reviews</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TripPlanner;