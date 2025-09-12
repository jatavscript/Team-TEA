import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Calendar,
  Users,
  Info,
  BookOpen,
  Camera,
  Heart,
  Sparkles
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "All Festivals", href: "#festivals", icon: Calendar },
    { name: "Tours & Packages", href: "#tours", icon: Users },
    { name: "About Sikkim", href: "#about", icon: Info },
    { name: "Cultural Guide", href: "#guide", icon: BookOpen },
    { name: "Photo Gallery", href: "#gallery", icon: Camera },
    { name: "Testimonials", href: "#testimonials", icon: Heart }
  ];

  const festivals = [
    { name: "Losar Festival", month: "February" },
    { name: "Bumchu Festival", month: "March" },
    { name: "Saga Dawa", month: "May" },
    { name: "Pang Lhabsol", month: "August" },
    { name: "Dashain Festival", month: "September" },
    { name: "Diwali Celebrations", month: "October" }
  ];

  const destinations = [
    "Gangtok Monasteries",
    "Tashiding Monastery", 
    "Rumtek Monastery",
    "Pelling Attractions",
    "Yuksom Villages",
    "Lachung Valley"
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-festival-purple text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-festival-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-festival-orange rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-festival-blue rounded-full blur-3xl"></div>
      </div>


      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-festival-gold via-yellow-400 to-festival-gold rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-festival-gold/50 transition-all duration-300 group-hover:scale-110">
                  <span className="text-primary font-bold text-2xl">S</span>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-festival-gold animate-pulse" />
                </div>
              </div>
              <div className="group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-festival-gold bg-clip-text text-transparent">Sikkim Tours</h3>
                <p className="text-white/90 text-sm font-medium">Sacred Celebrations</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Experience the mystical festivals and vibrant celebrations of Sikkim. 
              We offer authentic cultural immersion and respectful participation in sacred traditions.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-festival-gold flex-shrink-0" />
                <span className="text-white/80">MG Marg, Gangtok, Sikkim 737101</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-festival-gold flex-shrink-0" />
                <span className="text-white/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-festival-gold flex-shrink-0" />
                <span className="text-white/80">info@sikkimtours.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="flex items-center space-x-3 text-white/80 hover:text-festival-gold transition-colors"
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Festivals */}
          <div>
            <h4 className="text-lg font-bold mb-6">Major Festivals</h4>
            <ul className="space-y-3">
              {festivals.map((festival) => (
                <li key={festival.name} className="flex items-center justify-between">
                  <span className="text-white/80">{festival.name}</span>
                  <span className="text-festival-gold text-sm">{festival.month}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-bold mb-6">Popular Destinations</h4>
            <ul className="space-y-3">
              {destinations.map((destination) => (
                <li key={destination}>
                  <a 
                    href="#"
                    className="text-white/80 hover:text-festival-gold transition-colors"
                  >
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media & Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-white/80">Follow Us:</span>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-white/80 hover:text-festival-gold transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-festival-gold transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-festival-gold transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-festival-gold transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-white/80 text-sm">
              <span>© 2024 Sikkim Tours. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-festival-gold transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-festival-gold transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-festival-gold transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;