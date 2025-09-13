import { Button } from "@/components/ui/button";
import { Play, Calendar } from "lucide-react";
import heroImage from "@/assets/sikkim-hero.jpg";
import { useState, useEffect } from "react";
import styles from './SacredCelebrations.module.css';


const HeroSection = () => {
  // Example of how to use dark mode. Replace with your actual dark mode logic.
  const useDarkMode = () => {
    // Replace this with your actual dark mode detection logic
    // For example, you might use a context, a store, or a media query.
    const [isDark, setIsDark] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = () => setIsDark(mediaQuery.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    return isDark;
  }

  const isDarkMode = useDarkMode();
  const themeClass = isDarkMode ? styles.dark : '';

  return (
    <div className={`${styles.SacredCelebrations} ${themeClass}`}>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-purple-900/60 to-primary/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in-up">
              <span className="block text-yellow-400 mb-2">Sacred Celebrations of</span>
              <span className="block text-yellow-400">Sikkim</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in-up-delayed font-normal">
            Immerse yourself in the mystical world of Himalayan festivals, ancient monasteries, and vibrant cultural traditions that have thrived for centuries
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delayed-2">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Festival Experience
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Cultural Video
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-festival-gold/70 rounded-full flex justify-center bg-white/10 backdrop-blur-sm shadow-lg">
          <div className="w-1.5 h-4 bg-gradient-to-b from-festival-gold to-yellow-400 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
