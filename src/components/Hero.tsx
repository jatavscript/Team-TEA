import { Button } from "@/components/ui/button";
import { Play, MapPin, Camera, MessageCircle, RotateCcw } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/src/assets/veo3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Explore Sikkim's{" "}
              <span className="text-yellow-400">Sacred Heritage</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
              Immerse yourself in 200+ monasteries through cutting-edge 360° virtual tours, 
              AI-powered guides, and interactive cultural experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg flex items-center space-x-3 text-lg font-medium border-2 border-white">
                <Camera className="h-6 w-6" />
                <span>Start Virtual Tour</span>
              </Button>
              
              <Button className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg flex items-center space-x-3 text-lg font-medium">
                <MapPin className="h-6 w-6" />
                <span>Explore Map</span>
              </Button>
            </div>

            {/* Feature Highlights */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-white text-lg font-medium">200+ Monasteries</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-8 w-8 text-white" />
                <span className="text-white text-lg font-medium">5 Languages</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-8 w-8 text-white" />
                <span className="text-white text-lg font-medium">360° Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Controls */}
      <div className="absolute bottom-6 right-6 z-20">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 flex items-center space-x-3">
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <Play className="h-5 w-5 text-white" />
          </button>
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
          </button>
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;