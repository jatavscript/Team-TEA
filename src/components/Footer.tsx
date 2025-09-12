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
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold">HA</span>
              </div>
              <span className="text-2xl font-bold text-yellow-400">Heritage Archives</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Preserving and sharing cultural heritage through advanced digital technology and global
              collaboration.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-gray-400">info@heritage-archives.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-gray-400">123 Culture Street<br/>Heritage City, HC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Support</h3>
            <div className="space-y-3">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  <span>{resource.label}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Government & Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="bg-slate-800 rounded-lg p-4">
                <div className="text-sm font-medium mb-2 text-gray-300">Help Center</div>
                <div className="text-xs text-gray-400">Contact Us</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-4">
                <div className="text-sm font-medium mb-2 text-gray-300">Privacy Policy</div>
                <div className="text-xs text-gray-400">Terms of Service</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-4">
                <div className="text-sm font-medium mb-2 text-gray-300">Contributing Guidelines</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3 text-yellow-400">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-slate-800 rounded-lg hover:bg-yellow-600/20 transition-colors text-gray-400 hover:text-yellow-400"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              &copy; 2024 Digital Heritage Archives. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">
                Accessibility
              </a>
              <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">
                Sitemap
              </a>
              <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">
                Stats
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;