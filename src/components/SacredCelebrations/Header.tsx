import { useState, useEffect } from "react";
import { Menu, X, Calendar, MapPin, Users, Info, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-primary/95 backdrop-blur-md shadow-2xl border-b border-festival-gold/20' 
        : 'bg-gradient-to-r from-primary via-primary/95 to-primary shadow-elegant'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-festival-gold via-yellow-400 to-festival-gold rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-festival-gold/50 transition-all duration-300 group-hover:scale-110">
                <span className="text-primary font-bold text-2xl">S</span>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-festival-gold animate-pulse" />
              </div>
            </div>
            <div className="group-hover:scale-105 transition-transform duration-300">
              <h1 className="text-primary-foreground font-bold text-xl bg-gradient-to-r from-white to-festival-gold bg-clip-text text-transparent">
                Sikkim Tours
              </h1>
              <p className="text-primary-foreground/90 text-sm font-medium">Sacred Celebrations</p>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#" className="relative px-4 py-2 text-primary-foreground hover:text-festival-gold transition-all duration-300 flex items-center space-x-2 rounded-lg hover:bg-white/10 group">
              <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Festivals</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-festival-gold transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#" className="relative px-4 py-2 text-primary-foreground hover:text-festival-gold transition-all duration-300 flex items-center space-x-2 rounded-lg hover:bg-white/10 group">
              <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Destinations</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-festival-gold transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#" className="relative px-4 py-2 text-primary-foreground hover:text-festival-gold transition-all duration-300 flex items-center space-x-2 rounded-lg hover:bg-white/10 group">
              <Users className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Tours</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-festival-gold transition-all duration-300 group-hover:w-full"></div>
            </a>
            <Link to="/trip-planner" className="relative px-4 py-2 text-primary-foreground hover:text-festival-gold transition-all duration-300 flex items-center space-x-2 rounded-lg hover:bg-white/10 group">
              <Bot className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">AI Planner</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-festival-gold transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <a href="#" className="relative px-4 py-2 text-primary-foreground hover:text-festival-gold transition-all duration-300 flex items-center space-x-2 rounded-lg hover:bg-white/10 group">
              <Info className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">About</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-festival-gold transition-all duration-300 group-hover:w-full"></div>
            </a>
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <Button variant="secondary" className="shadow-glow hover:shadow-festival-gold/50 bg-gradient-to-r from-festival-gold to-yellow-400 hover:from-yellow-400 hover:to-festival-gold text-primary font-bold px-6 py-3 rounded-xl transform hover:scale-105 transition-all duration-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground hover:text-festival-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-primary-foreground hover:text-festival-gold transition-colors flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Festivals</span>
              </a>
              <a href="#" className="text-primary-foreground hover:text-festival-gold transition-colors flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Destinations</span>
              </a>
              <a href="#" className="text-primary-foreground hover:text-festival-gold transition-colors flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Tours</span>
              </a>
              <Link to="/trip-planner" className="text-primary-foreground hover:text-festival-gold transition-colors flex items-center space-x-2">
                <Bot className="w-4 h-4" />
                <span>AI Planner</span>
              </Link>
              <a href="#" className="text-primary-foreground hover:text-festival-gold transition-colors flex items-center space-x-2">
                <Info className="w-4 h-4" />
                <span>About</span>
              </a>
              <Button variant="secondary" className="w-fit shadow-glow">
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;