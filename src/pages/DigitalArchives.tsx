import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import {
  Search,
  BookOpen,
  Image,
  FileText,
  Download,
  Eye,
  Filter,
  Zap,
  Globe,
  Calendar,
  Camera,
  Shield,
  Database,
  Cpu,
  MapPin,
  Star,
  MessageSquare,
  Users,
  Award,
  PlayCircle,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DigitalArchives = () => {
  const [selectedRating, setSelectedRating] = useState(0);

  // Archive Overview Stats
  const archiveStats = [
    {
      title: "MANUSCRIPTS",
      count: "2,847",
      color: "bg-blue-600",
      icon: BookOpen,
    },
    {
      title: "ARTIFACTS",
      count: "1,523",
      color: "bg-orange-600",
      icon: Camera,
    },
    {
      title: "AUDIO RECORDS",
      count: "892",
      color: "bg-green-600",
      icon: FileText,
    },
    {
      title: "VIDEO ARCHIVES",
      count: "456",
      color: "bg-purple-600",
      icon: PlayCircle,
    },
  ];

  // Featured Heritage Items
  const featuredItems = [
    {
      title: "Ancient Palm Manuscript",
      type: "Religious Text",
      language: "Sanskrit",
      year: "12th Century",
      location: "Gangtok Monastery",
      status: "Digitized",
      image: "/lovable-uploads/3002ed2e-82d2-41aa-bf59-fe5cb1c8b137.png",
    },
    {
      title: "Thangka Painting Collection",
      type: "Visual Art",
      language: "Tibetan",
      year: "15th Century",
      location: "Rumtek Monastery",
      status: "3D Scanned",
      image: "/lovable-uploads/454979dd-b894-4d87-a200-25d87a03ecd4.png",
    },
    {
      title: "Sacred Prayer Wheels",
      type: "Ritual Objects",
      language: "Mixed",
      year: "14th Century",
      location: "Pemayangtse",
      status: "AR Ready",
      image: "/lovable-uploads/030cc0a5-7a96-48b7-9924-e1d002514bb0.png",
    },
    {
      title: "Historical Chronicles",
      type: "Documents",
      language: "Lepcha",
      year: "18th Century",
      location: "Tashiding",
      status: "OCR Complete",
      image: "/lovable-uploads/70750049-ba5d-4ae6-a7ed-5aa0f6401fac.png",
    },
  ];

  // Advanced Preservation Technology
  const preservationTech = [
    {
      title: "AI SCANNING",
      description:
        "Advanced computer vision algorithms analyze and catalog every detail of artifacts",
      icon: Cpu,
      color: "bg-blue-600",
    },
    {
      title: "DIGITAL RESTORATION",
      description:
        "Machine learning techniques restore damaged texts and faded artwork",
      icon: Shield,
      color: "bg-green-600",
    },
    {
      title: "BLOCKCHAIN SECURITY",
      description:
        "Immutable ledger technology ensures authenticity and prevents tampering",
      icon: Database,
      color: "bg-purple-600",
    },
  ];

  // Conservation Workflow Steps
  const workflowSteps = [
    {
      step: "1",
      title: "Documentation",
      description: "High-resolution photography and 3D scanning",
    },
    {
      step: "2",
      title: "Digital Processing",
      description: "AI-powered analysis and metadata extraction",
    },
    {
      step: "3",
      title: "Restoration",
      description: "Digital restoration using machine learning algorithms",
    },
    {
      step: "4",
      title: "Cataloging",
      description: "Multi-language tagging and classification",
    },
    {
      step: "5",
      title: "Archive",
      description: "Secure storage with blockchain verification",
    },
    {
      step: "6",
      title: "Access",
      description: "Public access through our digital platform",
    },
  ];

  // Historical Timeline Events
  const timelineEvents = [
    {
      year: "1642",
      title: "Foundation of Rumtek Monastery",
      description:
        "Establishment of one of Sikkim's most important Buddhist centers",
      image: "/lovable-uploads/00aafb18-34fd-4b5c-bb8e-12cdf87153de.png",
    },
    {
      year: "1705",
      title: "Pemayangtse Construction",
      description: "Built as the head monastery of the Nyingma order in Sikkim",
      image: "/lovable-uploads/d608c4d8-0fc2-4fff-bc02-4ec4917beaed.png",
    },
    {
      year: "1717",
      title: "Tashiding Sacred Site",
      description: "Considered the holiest place in Sikkim for Buddhists",
      image: "/lovable-uploads/dedb3c3e-b625-4f92-9298-ce58aeaf42d0.png",
    },
    {
      year: "2023",
      title: "Digital Heritage Project",
      description: "Launch of comprehensive digitization initiative",
      image: "/lovable-uploads/9c195588-d0ec-4063-912c-7a528dc0dd01.png",
    },
  ];

  // Educational Resources
  const educationalResources = [
    {
      title: "RESEARCH GUIDES",
      description:
        "Comprehensive guides for researchers and scholars studying Buddhist heritage",
      icon: BookOpen,
      color: "bg-blue-600",
    },
    {
      title: "VIRTUAL WORKSHOPS",
      description:
        "Online sessions on conservation techniques and digital preservation",
      icon: Users,
      color: "bg-green-600",
    },
    {
      title: "CERTIFICATION PROGRAMS",
      description:
        "Professional certification in digital heritage and conservation methods",
      icon: Award,
      color: "bg-purple-600",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Digital Archaeologist",
      rating: 5,
      comment:
        "The AI-powered search capabilities have revolutionized how we access ancient texts.",
      image: "/lovable-uploads/a860a24e-abf1-45c7-919f-ec1d134f8e48.png",
    },
    {
      name: "Prof. Michael Thompson",
      role: "Buddhist Studies",
      rating: 5,
      comment:
        "Incredible preservation quality. The 3D scans capture details invisible to the naked eye.",
      image: "/lovable-uploads/a860a24e-abf1-45c7-919f-ec1d134f8e48.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative pt-20 pb-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent"></div>

        <div className="relative max-w-[1400px] sm:px-12 mx-auto px-6 pt-16">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Digital Heritage <span className="text-yellow-400">Archives</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Preserving Sikkim's sacred Buddhist heritage through cutting-edge
              AI technology, 3D digitization, and immersive virtual experiences
              for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg">
                Explore Archives
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
              >
                Research Portal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Overview Stats */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-[1400px] sm:px-12 mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Archive Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {archiveStats.map((stat, index) => (
              <Card
                key={index}
                className={`${stat.color} border-none text-white overflow-hidden relative`}
              >
                <div className="absolute top-0 right-0 opacity-20">
                  <stat.icon className="h-32 w-32" />
                </div>
                <CardContent className="p-8 relative z-10">
                  <div className="text-sm font-medium mb-2 opacity-90">
                    {stat.title}
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.count}</div>
                  <div className="text-sm opacity-75">Items preserved</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Powered Heritage Search */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-[1400px] sm:px-12 mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              AI-Powered Heritage Search
            </h2>
            <p className="text-gray-300 text-lg">
              Discover centuries of wisdom with intelligent search capabilities
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-700 rounded-2xl p-8">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                <Input
                  placeholder="Search manuscripts, artifacts, images... (e.g., 'Tibetan prayer wheels' or 'Buddhist texts')"
                  className="pl-14 h-16 text-lg bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:border-yellow-400"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-black">
                  <Zap className="mr-2 h-5 w-5" />
                  AI Search
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <Button
                  variant="outline"
                  className="border-gray-500 text-gray-300 hover:bg-gray-600"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Manuscripts
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-500 text-gray-300 hover:bg-gray-600"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Time Period
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-500 text-gray-300 hover:bg-gray-600"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Language
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-500 text-gray-300 hover:bg-gray-600"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Location
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Sanskrit",
                  "Tibetan",
                  "Lepcha",
                  "15th Century",
                  "Rumtek",
                  "Religious Text",
                ].map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-gray-600 text-gray-200 hover:bg-gray-500"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Heritage Items */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-[1400px] sm:px-12 mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Featured Heritage Items
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredItems.map((item, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-400 text-black font-semibold">
                      {item.status}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h3>

                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <div className="flex justify-between">
                      <span>Type:</span>
                      <span className="text-gray-300">{item.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Language:</span>
                      <span className="text-gray-300">{item.language}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Period:</span>
                      <span className="text-gray-300">{item.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Location:</span>
                      <span className="text-gray-300">{item.location}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Preservation Technology */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-[1400px] sm:px-12 mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Preservation Technology
            </h2>
            <p className="text-gray-300 text-lg">
              Cutting-edge tools ensuring heritage preservation for millennia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {preservationTech.map((tech, index) => (
              <Card
                key={index}
                className={`${tech.color} border-none text-white overflow-hidden relative group hover:scale-105 transition-transform duration-300`}
              >
                <div className="absolute top-0 right-0 opacity-20">
                  <tech.icon className="h-24 w-24" />
                </div>
                <CardContent className="p-8 relative z-10">
                  <tech.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-4">{tech.title}</h3>
                  <p className="opacity-90">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Workflow */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-[1400px] sm:px-12 mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Conservation Workflow
              </h2>
              <div className="space-y-6">
                {workflowSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg group-hover:text-yellow-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/a860a24e-abf1-45c7-919f-ec1d134f8e48.png"
                alt="Conservation Process"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Portal */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-[1400px] sm:px-12 mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Research Portal
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Research Statistics */}
            <Card className="bg-blue-600 border-none text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Research Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Manuscripts Digitized</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>AI Analysis Complete</span>
                      <span>72%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>3D Scanning Progress</span>
                      <span>68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Publication Stats */}
            <Card className="bg-green-600 border-none text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Publication Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Research Papers</span>
                    <span className="text-2xl font-bold">156</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Citations</span>
                    <span className="text-2xl font-bold">2,847</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Collaborations</span>
                    <span className="text-2xl font-bold">89</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Downloads</span>
                    <span className="text-2xl font-bold">45,623</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-[1400px] sm:px-12 mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Historical Timeline
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400"></div>

            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <div className="bg-gray-800 rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300">
                      <div className="text-yellow-400 font-bold text-2xl mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-white font-semibold text-xl mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-400">{event.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full border-4 border-gray-900"></div>
                  </div>

                  <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Collaboration Network */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-[1400px] sm:px-12 mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Global Collaboration Network
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">25+</div>
                  <div className="text-gray-400">Countries</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">150+</div>
                  <div className="text-gray-400">Researchers</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">12</div>
                  <div className="text-gray-400">Universities</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6 text-center">
                  <Database className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-400">Institutions</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-700 rounded-2xl p-8">
              <img
                src="/api/placeholder/600/400"
                alt="Global Network Map"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h3 className="text-white font-semibold text-xl mb-4">
                Join Our Network
              </h3>
              <p className="text-gray-400 mb-6">
                Connect with researchers, institutions, and cultural
                preservationists worldwide to advance digital heritage
                conservation.
              </p>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                Join Network
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-[1400px] sm:px-12 mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Educational Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationalResources.map((resource, index) => (
              <Card
                key={index}
                className={`${resource.color} border-none text-white overflow-hidden relative group hover:scale-105 transition-transform duration-300`}
              >
                <div className="absolute top-0 right-0 opacity-20">
                  <resource.icon className="h-32 w-32" />
                </div>
                <CardContent className="p-8 relative z-10">
                  <resource.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-4">{resource.title}</h3>
                  <p className="opacity-90 mb-6">{resource.description}</p>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-900"
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Reality Experiences */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-[1400px] sm:px-12 mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Virtual Reality Experiences
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Immerse Yourself in History
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                Step into ancient monasteries, walk through sacred halls, and
                interact with historical artifacts in stunning virtual reality
                environments.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300">360° monastery tours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300">
                    Interactive artifact examination
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300">
                    Historical timeline navigation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300">
                    Multi-language audio guides
                  </span>
                </div>
              </div>

              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                <PlayCircle className="mr-2 h-5 w-5" />
                Start VR Experience
              </Button>
            </div>

            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="VR Experience"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6">
                <Badge className="bg-yellow-400 text-black font-semibold">
                  VR Ready
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Community & Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-[1400px] sm:px-12 mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Heritage Community
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Testimonials */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                What Researchers Say
              </h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="text-white font-semibold">
                              {testimonial.name}
                            </div>
                            <div className="flex space-x-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                          </div>
                          <div className="text-gray-400 text-sm mb-3">
                            {testimonial.role}
                          </div>
                          <p className="text-gray-300">{testimonial.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Share Your Experience Form */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Share Your Experience
              </h3>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <label className="text-white font-medium mb-2 block">
                        Your Rating
                      </label>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => setSelectedRating(star)}
                            className="focus:outline-none"
                          >
                            <Star
                              className={`h-8 w-8 ${
                                star <= selectedRating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-400"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-white font-medium mb-2 block">
                        Your Review
                      </label>
                      <Textarea
                        placeholder="Share your experience with our digital archives..."
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400"
                        rows={4}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-white font-medium mb-2 block">
                          Name
                        </label>
                        <Input
                          placeholder="Your name"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400"
                        />
                      </div>
                      <div>
                        <label className="text-white font-medium mb-2 block">
                          Role/Affiliation
                        </label>
                        <Input
                          placeholder="Researcher, Student, etc."
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400"
                        />
                      </div>
                    </div>

                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                      Submit Review
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-gray-300 text-lg mb-8">
            Get the latest updates on new digitizations, research findings, and
            virtual experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400"
            />
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalArchives;
