import { Button } from "./button";
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function HeritageFooter() {
  return (
    <footer className="bg-heritage-blue-light border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-heritage-blue" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Heritage Archives</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Preserving and sharing cultural heritage through advanced digital technology 
              and global collaboration.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Collections</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Research Tools</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Educational Resources</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Community Forum</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API Documentation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contributing Guidelines</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-muted-foreground mr-3" />
                <span className="text-muted-foreground">info@heritage-archives.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-muted-foreground mr-3" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-muted-foreground mr-3 mt-0.5" />
                <span className="text-muted-foreground">
                  Digital Heritage Institute<br />
                  123 Culture Street<br />
                  Heritage City, HC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 Digital Heritage Archives. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Accessibility</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sitemap</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}