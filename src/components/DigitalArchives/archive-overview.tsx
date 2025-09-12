import { Database, BookOpen, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const overviewItems = [
  {
    icon: Database,
    title: "Digital Collections",
    description: "Comprehensive digital archives with advanced metadata and search capabilities",
    color: "bg-blue-600",
  },
  {
    icon: BookOpen,
    title: "Research Tools",
    description: "AI-powered research assistance and advanced analytical tools for scholars",
    color: "bg-orange-600",
  },
  {
    icon: Users,
    title: "Community",
    description: "Collaborative platform connecting researchers, institutions, and enthusiasts",
    color: "bg-green-600",
  },
  {
    icon: Zap,
    title: "AI Integration",
    description: "Machine learning algorithms for content analysis and discovery",
    color: "bg-purple-600",
  },
];

export function ArchiveOverview() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-16 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 overflow-hidden">
      {/* Dark gradient overlay with dynamic patterns */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-gray-800/30 to-zinc-800/50"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-slate-700/20 to-transparent animate-pulse"></div>
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Archive Overview
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our digital heritage platform combines cutting-edge technology with comprehensive 
            collections to provide unparalleled access to cultural treasures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewItems.map((item, index) => (
            <Card 
              key={index} 
              className={`bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:bg-slate-700/90 transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 hover:rotate-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                animation: isVisible ? `float 4s ease-in-out infinite ${index * 0.5}s` : 'none'
              }}
            >
              <CardContent className="p-6 text-center relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className={`w-16 h-16 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl relative z-10`}>
                  <item.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 relative z-10">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                  {item.description}
                </p>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500/30 transition-all duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional decorative elements */}
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{animationDelay: `${i * 0.2}s`}}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}