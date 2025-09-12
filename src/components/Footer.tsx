import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Virtual Tours", href: "#tours" },
    { label: "Interactive Map", href: "#map" },
    { label: "Digital Archives", href: "#archives" },
    { label: "Cultural Events", href: "#events" },
    { label: "Tourism Partners", href: "#tourism" },
  ];

  const resources = [
    { label: "API Documentation", href: "#" },
    { label: "Developer Guide", href: "#" },
    { label: "Cultural Guidelines", href: "#" },
    { label: "Download Mobile App", href: "#" },
    { label: "Support Center", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-monastery-burgundy text-prayer-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-monastery rounded-lg flex items-center justify-center">
                <span className="text-prayer-white font-bold">M360</span>
              </div>
              <span className="text-2xl font-bold">Monastery360</span>
            </div>
            <p className="text-prayer-white/80 mb-6 leading-relaxed">
              Preserving and sharing Sikkim's sacred heritage through immersive digital technology. 
              Connecting the world to ancient wisdom.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-monastery-gold" />
                <span className="text-sm">info@monastery360.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-monastery-gold" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-monastery-gold" />
                <span className="text-sm">Gangtok, Sikkim, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-monastery-gold">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-prayer-white/80 hover:text-monastery-gold transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-monastery-gold">Resources</h3>
            <div className="space-y-3">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  className="flex items-center space-x-2 text-prayer-white/80 hover:text-monastery-gold transition-colors text-sm"
                >
                  <span>{resource.label}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Government & Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-monastery-gold">Official Partners</h3>
            <div className="space-y-4">
              <div className="bg-prayer-white/10 rounded-lg p-4">
                <div className="text-sm font-medium mb-2">Government of Sikkim</div>
                <div className="text-xs text-prayer-white/70">Tourism & Cultural Affairs Department</div>
              </div>
              <div className="bg-prayer-white/10 rounded-lg p-4">
                <div className="text-sm font-medium mb-2">Smart India Hackathon</div>
                <div className="text-xs text-prayer-white/70">2025 Cultural Preservation Initiative</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3 text-monastery-gold">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-prayer-white/10 rounded-lg hover:bg-monastery-gold/20 transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-prayer-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-prayer-white/70">
              © 2025 Monastery360. All rights reserved. Built for Smart India Hackathon 2025.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-prayer-white/70 hover:text-monastery-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-prayer-white/70 hover:text-monastery-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-prayer-white/70 hover:text-monastery-gold transition-colors">
                Cultural Guidelines
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;