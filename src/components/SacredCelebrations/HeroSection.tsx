import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Sparkles, Star, Mountain } from "lucide-react";
import heroImage from "@/assets/sikkim-hero.jpg";
import { useState, useEffect } from "react";
import styles from './SacredCelebrations.module.css';


const HeroSection = () => {
  const [festivals, setFestivals] = useState(0);
  const [monasteries, setMonasteries] = useState(0);
  const [travelers, setTravelers] = useState(0);

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

  useEffect(() => {
    const animateCount = (setter: (value: number) => void, target: number, duration: number = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    // Start animations with delays
    setTimeout(() => animateCount(setFestivals, 25, 1500), 500);
    setTimeout(() => animateCount(setMonasteries, 50, 1800), 700);
    setTimeout(() => animateCount(setTravelers, 1000, 2200), 900);
  }, []);

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
      
      

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="w-6 h-6 text-festival-gold/60" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Star className="w-4 h-4 text-yellow-400/50" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <Mountain className="w-8 h-8 text-white/30" />
        </div>
        <div className="absolute top-60 right-10 animate-float-delayed">
          <Sparkles className="w-5 h-5 text-festival-gold/40" />
        </div>
      </div>

      {/* Enhanced Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Animated Main Heading */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 leading-tight animate-fade-in-up">
              Sacred Celebrations of
            </h1>
            <div className="relative inline-block">
              <span className="block text-6xl md:text-8xl font-bold bg-gradient-to-r from-festival-gold via-yellow-400 to-festival-gold bg-clip-text text-transparent animate-fade-in-up-delayed">
                Sikkim
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-festival-gold/20 to-yellow-400/20 blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced Subtitle */}
          <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-up-delayed-2 font-medium">
            Immerse yourself in the mystical festivals and vibrant celebrations of the Himalayas. 
            Experience ancient traditions, colorful ceremonies, and spiritual awakening in the 
            <span className="text-festival-gold font-semibold"> Land of Peaceful Dragons</span>.
          </p>


          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto animate-fade-in-up-delayed-4">
            <div className="text-center group">
              <div className="relative mb-4">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-festival-gold to-yellow-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">{festivals}</div>
                <div className="absolute -inset-4 bg-gradient-to-r from-festival-gold/20 to-yellow-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-white/90 text-lg font-medium">Sacred Festivals</div>
              <div className="w-16 h-1 bg-gradient-to-r from-festival-gold to-yellow-400 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="text-center group">
              <div className="relative mb-4">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-festival-gold to-yellow-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">{monasteries}</div>
                <div className="absolute -inset-4 bg-gradient-to-r from-festival-gold/20 to-yellow-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-white/90 text-lg font-medium">Monasteries</div>
              <div className="w-16 h-1 bg-gradient-to-r from-festival-gold to-yellow-400 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="text-center group">
              <div className="relative mb-4">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-festival-gold to-yellow-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">{travelers}</div>
                <div className="absolute -inset-4 bg-gradient-to-r from-festival-gold/20 to-yellow-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-white/90 text-lg font-medium">Happy Travelers</div>
              <div className="w-16 h-1 bg-gradient-to-r from-festival-gold to-yellow-400 mx-auto mt-2 rounded-full"></div>
            </div>
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
