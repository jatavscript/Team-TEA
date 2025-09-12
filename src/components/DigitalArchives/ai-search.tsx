import { Search, Filter, Calendar, MapPin, Sparkles, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

export function AiSearch() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 overflow-hidden">
      {/* Distinctive section separator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>
      
      {/* Dynamic background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-gray-800/40 to-zinc-800/60"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-slate-700/80 to-transparent animate-pulse"></div>
        
        {/* AI-themed floating elements */}
        <div className="absolute top-20 left-16 w-24 h-24 bg-blue-500/20 rounded-full animate-float">
          <Brain className="w-8 h-8 text-blue-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute top-40 right-24 w-20 h-20 bg-purple-500/20 rounded-full animate-float" style={{animationDelay: '1.5s'}}>
          <Sparkles className="w-6 h-6 text-purple-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-indigo-500/20 rounded-full animate-float" style={{animationDelay: '3s'}}>
          <Zap className="w-5 h-5 text-indigo-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        {/* Animated circuit-like lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg">
              <Brain className="w-6 h-6 animate-pulse" />
              <span className="font-semibold">AI-Powered</span>
              <Sparkles className="w-5 h-5 animate-bounce" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
            Ai Powered Heritage Search
          </h2>
          <p className="text-lg text-yellow-200 max-w-3xl mx-auto leading-relaxed">
            Use our advanced AI search to discover connections between artifacts, cultures, 
            and historical periods with natural language queries.
          </p>
        </div>

        <Card className={`max-w-5xl mx-auto bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-lg border-slate-700/60 shadow-2xl shadow-blue-500/10 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-transparent to-purple-500 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-slate-700/30 to-transparent"></div>
          </div>
          
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-indigo-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <CardContent className="p-10 relative">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Enhanced Search Input */}
              <div className="flex-1">
                <div className="relative group">
                  <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 transition-all duration-300 ${searchFocused ? 'text-yellow-400 scale-110' : 'text-yellow-300'}`} />
                  <Input 
                    placeholder="Search for artifacts, cultures, time periods, or ask questions..."
                    className="pl-14 pr-6 py-8 text-lg bg-slate-700/50 border-slate-600/50 rounded-xl focus:border-yellow-400 focus:ring-yellow-300 focus:bg-slate-700/70 transition-all duration-300 shadow-inner text-yellow-100 placeholder:text-yellow-300"
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                  />
                  {/* Animated search suggestions */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-1">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>

              {/* Enhanced Search Button */}
              <Button 
                variant="heritage" 
                size="lg" 
                className="lg:px-16 py-8 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Search className="w-6 h-6 mr-3" />
                Search
                <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
              </Button>
            </div>

            {/* Enhanced Filter Options */}
            <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-yellow-400/40">
              {[
                { icon: Filter, label: "All Categories" },
                { icon: Calendar, label: "Time Period" },
                { icon: MapPin, label: "Location" },
                { icon: null, label: "Material Type" },
                { icon: null, label: "Cultural Origin" }
              ].map((filter, index) => (
                <Button 
                  key={index}
                  variant="outline" 
                  size="sm" 
                  className={`bg-slate-700/70 hover:bg-yellow-500/20 border-yellow-400/50 hover:border-yellow-300 text-yellow-200 hover:text-yellow-100 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{transitionDelay: `${index * 100 + 500}ms`}}
                >
                  {filter.icon && <filter.icon className="w-4 h-4 mr-2" />}
                  {filter.label}
                </Button>
              ))}
            </div>

            {/* Enhanced Example Queries */}
            <div className="mt-8 pt-8 border-t border-yellow-400/40">
              <p className="text-sm text-yellow-300 mb-4 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                Try searching for:
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Buddhist manuscripts from 8th century",
                  "Traditional pottery techniques",
                  "Silk road trade artifacts",
                  "Himalayan cultural practices"
                ].map((query, index) => (
                  <button
                    key={index}
                    className={`text-sm px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-200 rounded-full hover:from-yellow-400/30 hover:to-amber-400/30 hover:text-yellow-100 transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-md transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{transitionDelay: `${index * 100 + 800}ms`}}
                  >
                    {query}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Bottom decorative elements */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-4">
            {[...Array(7)].map((_, i) => (
              <div 
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full animate-pulse"
                style={{animationDelay: `${i * 0.3}s`}}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom section separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500"></div>
    </section>
  );
}