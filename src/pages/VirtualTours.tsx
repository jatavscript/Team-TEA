import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Play, 
  MapPin, 
  Clock, 
  Star, 
  Heart, 
  Share2,
  Eye,
  Headphones,
  Monitor,
  Download,
  BookOpen,
  Calendar,
  Globe,
  Send
} from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const VirtualTours = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { number: "50+", label: "Virtual Tours" },
    { number: "500K+", label: "Monthly Visitors" },
    { number: "1000+", label: "High-Resolution Photos" },
    { number: "4.9★", label: "Average Rating" }
  ];

  // Animated counters for stats
  const [statDisplays, setStatDisplays] = useState<string[]>(stats.map(() => "0"));
  useEffect(() => {
    const startTime = performance.now();
    const durationMs = 1200;
    const parseStat = (value: string) => {
      const match = value.match(/^[0-9]+(?:\.[0-9]+)?/);
      const numericPart = match ? match[0] : "0";
      const suffix = value.slice(numericPart.length);
      const target = parseFloat(numericPart);
      const decimals = numericPart.includes('.') ? (numericPart.split('.')[1]?.length || 0) : 0;
      return { target, suffix, decimals };
    };
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const parsed = stats.map(s => parseStat(s.number));
    let rafId = 0;
    const animate = () => {
      const now = performance.now();
      const t = Math.min(1, (now - startTime) / durationMs);
      const eased = easeOutCubic(t);
      setStatDisplays(parsed.map(p => (p.target * eased).toFixed(p.decimals) + p.suffix));
      if (t < 1) rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const monasteries = [
    {
      id: 1,
      name: "Rumtek Monastery",
      slug: "rumtek-monastery",
      location: "East Sikkim",
      duration: "45 min",
      rating: 4.9,
      views: "125K",
      image: "/assets/rumtek.jpg",
      category: "Active Monastery"
    },
    {
      id: 2,
      name: "Pemayangtse Monastery",
      slug: "pemayangtse-monastery",
      location: "West Sikkim", 
      duration: "30 min",
      rating: 4.8,
      views: "98K",
      image: "/assets/pemayangtse.jpg",
      category: "Historic Site"
    },
    {
      id: 3,
      name: "Enchey Monastery",
      slug: "enchey-monastery",
      location: "Gangtok",
      duration: "25 min", 
      rating: 4.7,
      views: "87K",
      image: "/assets/enchey.jpg",
      category: "Active Monastery"
    },
    {
      id: 4,
      name: "Tashiding Monastery",
      slug: "tashiding-monastery",
      location: "West Sikkim",
      duration: "35 min",
      rating: 4.9,
      views: "156K", 
      image: "/assets/tashiding.jpg",
      category: "Sacred Site"
    },
    {
      id: 5,
      name: "Dubdi Monastery",
      slug: "dubdi-monastery",
      location: "West Sikkim",
      duration: "20 min",
      rating: 4.6,
      views: "45K",
      image: "/assets/dubdi.jpg",
      category: "Historic Site"
    },
    {
      id: 6,
      name: "Tsuglakhang Monastery",
      slug: "tsuglakhang-monastery",
      location: "Gangtok", 
      duration: "20 min",
      rating: 4.7,
      views: "82K",
      image: "/assets/tsug.jpg",
      category: "Active Monastery"
    },
    {
      id: 7,
      name: "Ralang Monastery",
      slug: "ralang-monastery",
      location: "South Sikkim",
      duration: "30 min",
      rating: 4.6,
      views: "56K",
      image: "/assets/ralang.jpg",
      category: "Active Monastery"
    },
    {
      id: 8,
      name: "Namgyal Institute",
      slug: "namgyal-institute",
      location: "Gangtok",
      duration: "40 min",
      rating: 4.8,
      views: "134K",
      image: "/assets/namygal.jpg",
      category: "Educational"
    }
  ];

  const handleMonasteryClick = (slug: string) => {
    navigate(`/monastery/${slug}`);
  };

  const handleFeaturedTourClick = () => {
    navigate('/monastery/rumtek-monastery');
  };

  const workSteps = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "High-Quality 360° Capture",
      description: "Professional photography using specialized equipment for immersive experiences"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Audio Narration",
      description: "Expert commentary in multiple languages with cultural context"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Interactive Exploration", 
      description: "Click and explore every corner with detailed information hotspots"
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Multi-Platform Access",
      description: "Available on web, mobile, and VR devices for maximum accessibility"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Cultural Researcher",
      rating: 5,
      text: "Absolutely incredible experience! The virtual tours are so detailed and immersive.",
      avatar: "SC"
    },
    {
      name: "David Kumar", 
      role: "Travel Blogger",
      rating: 5,
      text: "Perfect way to explore Sikkim's monasteries before my actual visit. Highly recommended!",
      avatar: "DK"
    },
    {
      name: "Maria Rodriguez",
      role: "Student",
      rating: 5,
      text: "Amazing educational resource. The audio guides are incredibly informative.",
      avatar: "MR"
    }
  ];

  const culturalInsights = [
    {
      title: "Prayer Flags",
      description: "Meaning and significance of colorful Buddhist prayer flags",
      image: "/lovable-uploads/a860a24e-abf1-45c7-919f-ec1d134f8e48.png",
      readTime: "5 min read"
    },
    {
      title: "Monastery Architecture", 
      description: "Traditional building techniques and symbolic designs",
      image: "/lovable-uploads/dedb3c3e-b625-4f92-9298-ce58aeaf42d0.png",
      readTime: "8 min read"
    },
    {
      title: "Buddhist Rituals",
      description: "Daily practices and ceremonial traditions",
      image: "/lovable-uploads/d608c4d8-0fc2-4fff-bc02-4ec4917beaed.png",
      readTime: "6 min read"
    }
  ];

  const educationalResources = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "For Educators & Students",
      description: "Curriculum materials and guided learning experiences",
      cta: "Download Resources"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "API Documentation", 
      description: "Integrate virtual tours into your applications",
      cta: "View API Docs"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Live Sessions",
      description: "Weekly guided tours with cultural experts",
      cta: "Schedule Session"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Mobile Apps",
      description: "Enhanced AR/VR experiences on iOS and Android",
      cta: "Download App"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${'/assets/monastery-hero.jpg'})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Experience Sikkim Monasteries Virtually
          </h1>
          <p className="text-xl md:text-2xl mb-16 text-white/90 max-w-3xl mx-auto">
            Immerse yourself in sacred spaces through cutting-edge 360° virtual tours, 
            high-definition photography, and expert cultural commentary
          </p>
          
          {/* Counter Section in Hero */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {statDisplays[index]}
                </div>
                <div className="text-white/80 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section removed - moved to hero */}

      {/* Search & Filter Bar removed */}

      {/* Featured Virtual Tour */}
      <section className="py-20 bg-background" id="virtual-tours">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Virtual Tour</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the spiritual heart of Sikkim through our most popular virtual experience
            </p>
          </div>
          
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 group cursor-pointer"
              onClick={handleFeaturedTourClick}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${'/assets/ramtech-banner1.jpg'})` }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30">
                  <Play className="h-6 w-6 mr-2" />
                  Play Virtual Tour
                </Button>
              </div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-white">360° TOUR</Badge>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-3">Rumtek Monastery</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Experience the largest monastery in Sikkim, home to the Karmapa and center of 
                  the Kagyu tradition. Our immersive tour takes you through sacred halls, 
                  prayer rooms, and stunning architectural details.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>45 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>5 languages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-primary" />
                  <span>125K views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-primary fill-current" />
                  <span>4.9 rating</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button className="flex-1" onClick={handleFeaturedTourClick}>
                  <Play className="h-4 w-4 mr-2" />
                  Start Tour
                </Button>
                <Button variant="outline">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore All Monasteries */}
      <section className="py-20" style={{ background: 'linear-gradient(356deg,rgba(255, 255, 255, 0.88) 0%,rgba(235, 226, 204, 0.88) 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore All Monasteries</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover Sikkim's rich monastic heritage through our comprehensive collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {monasteries.map((monastery) => (
              <Card 
                key={monastery.id} 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleMonasteryClick(monastery.slug)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                    <img 
                      src={monastery.image}
                      alt={monastery.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        {monastery.category}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-8 w-8 p-0 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Heart className="h-4 w-4 text-white" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{monastery.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {monastery.location}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {monastery.duration}
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {monastery.views}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{monastery.rating}</span>
                      </div>
                      <Button 
                        size="sm" 
                        className="h-8"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMonasteryClick(monastery.slug);
                        }}
                      >
                        <Play className="h-3 w-3 mr-1" />
                        Tour
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
{/*           
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Tours
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div> */}
        </div>
      </section>



      {/* Visitor Testimonials */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg,rgba(217, 221, 182, 0.88) 0%,rgba(255, 255, 255, 0.88) 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Visitors Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our community of virtual explorers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Experience */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg,rgba(222, 203, 161, 0.88) 0%,rgba(255, 255, 255, 0.88) 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Share Your Experience</h2>
            <p className="text-xl text-muted-foreground">
              Help others discover the beauty of Sikkim's monasteries
            </p>
          </div>
          
          <Card className="p-8">
            <CardContent className="p-0 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-8 w-8 cursor-pointer transition-colors ${
                        star <= rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300 hover:text-yellow-400'
                      }`}
                      onClick={() => setRating(star)}
                    />
                  ))}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <Input placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email (optional)</label>
                  <Input placeholder="your@email.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Your Review</label>
                <Textarea 
                  placeholder="Share your thoughts about the virtual tour experience..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Submit Review
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default VirtualTours;