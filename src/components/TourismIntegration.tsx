import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Plane, 
  Hotel, 
  Utensils, 
  Camera, 
  Users, 
  Star,
  Clock,
  MapPin,
  PhoneCall
} from "lucide-react";

const TourismIntegration = () => {
  const tourPackages = [
    {
      title: "Sacred Monastery Circuit",
      duration: "7 Days",
      price: "₹15,999",
      rating: 4.8,
      highlights: ["Rumtek Monastery", "Enchey Monastery", "Pemayangtse Monastery"],
      includes: ["Transport", "Guide", "Meals", "Accommodation"],
      image: "bg-gradient-monastery"
    },
    {
      title: "Himalayan Heritage Trail",
      duration: "5 Days", 
      price: "₹12,499",
      rating: 4.9,
      highlights: ["Tashiding Monastery", "Dubdi Monastery", "Local Villages"],
      includes: ["Trekking Guide", "Camping", "Meals", "Permits"],
      image: "bg-gradient-himalayan"
    },
    {
      title: "Cultural Immersion Experience",
      duration: "3 Days",
      price: "₹8,999", 
      rating: 4.7,
      highlights: ["Traditional Ceremonies", "Monk Interactions", "Local Crafts"],
      includes: ["Cultural Guide", "Workshops", "Meals", "Transport"],
      image: "bg-gradient-sacred"
    }
  ];

  const services = [
    {
      icon: Car,
      title: "Local Transport",
      description: "Eco-friendly vehicles and experienced local drivers",
      partners: "15+ Transport Partners"
    },
    {
      icon: Hotel,
      title: "Accommodation", 
      description: "From traditional homestays to luxury resorts",
      partners: "50+ Properties"
    },
    {
      icon: Utensils,
      title: "Local Cuisine",
      description: "Authentic Sikkimese and Tibetan dining experiences", 
      partners: "30+ Restaurants"
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Professional guidance for capturing monastery architecture",
      partners: "12+ Photographers"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-monastery bg-clip-text text-transparent">Tourism</span> Integration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seamlessly connect with local transport, accommodation, and cultural experiences
          </p>
        </div>

        {/* Tour Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tourPackages.map((tour, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-elevated transition-all duration-300">
              <div className={`h-48 ${tour.image} flex items-end p-6`}>
                <div className="text-prayer-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-4 w-4 text-monastery-gold fill-current" />
                    <span className="text-sm font-medium">{tour.rating}</span>
                  </div>
                  <h3 className="text-xl font-bold">{tour.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{tour.duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">{tour.price}</div>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Highlights</h4>
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.map((highlight, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Includes</h4>
                    <div className="flex flex-wrap gap-1">
                      {tour.includes.map((include, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {include}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="monastery" size="sm" className="flex-1">
                    Book Now
                  </Button>
                  <Button variant="outline" size="sm">
                    <MapPin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Partners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center group hover:shadow-monastery transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 w-fit">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                <Badge variant="outline" className="text-xs">{service.partners}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Integration */}
        <div className="bg-card rounded-2xl p-8 border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Connect with Local Operators
              </h3>
              <p className="text-muted-foreground mb-6">
                Our integrated platform connects you directly with verified local tour operators, 
                transport providers, and accommodation partners for authentic experiences.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm">Verified local partners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneCall className="h-5 w-5 text-primary" />
                  <span className="text-sm">24/7 customer support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-sm">Rated & reviewed services</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button variant="monastery" size="lg" className="w-full">
                <PhoneCall className="mr-2 h-5 w-5" />
                Contact Tour Operators
              </Button>
              <Button variant="sacred" size="lg" className="w-full">
                <Car className="mr-2 h-5 w-5" />
                Book Transportation
              </Button>
              <Button variant="himalayan" size="lg" className="w-full">
                <Hotel className="mr-2 h-5 w-5" />
                Find Accommodation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismIntegration;