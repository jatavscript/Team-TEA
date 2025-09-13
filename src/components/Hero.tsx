import { Button } from "@/components/ui/button";
import { Play, MapPin, Camera, MessageCircle, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Hero = () => {
  const navigate = useNavigate();

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
        <div className="max-w-[1400px] sm:px-12 mx-auto px-6">
          <div className="max-w-3xl">
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-10">
              Explore Sikkim's{" "}
              <span className="text-yellow-400">Sacred Heritage</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-10">
              Immerse yourself in 200+ monasteries through cutting-edge 360°
              virtual tours, AI-powered guides, and interactive cultural
              experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-white text-gray-900 hover:text-white hover:bg-gray-100 px-8 py-4 rounded-lg flex items-center space-x-3 text-lg font-medium border-2 border-white" onClick={() => { document.getElementById("virtual-tours").scrollIntoView({ behavior: "smooth" }) }}>
                <Camera className="h-6 w-6" />
                <span>Start Virtual Tour</span>
              </Button>

              <Button
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg flex items-center space-x-3 text-lg font-medium"
                onClick={() => {
                  document
                    .getElementById("plan")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                <MapPin className="h-6 w-6" />
                <span>Book Tour</span>
              </Button>

              <Button
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg flex items-center space-x-3 text-lg font-medium"
                onClick={() => {
                  alert("Comming Soon")
                  // document
                  //   .getElementById("interactive-map")
                  //   .scrollIntoView({ behavior: "smooth" });
                }}
              >
                <MapPin className="h-6 w-6" />
                <span>Play Game</span>
              </Button>
            </div>

            {/* Feature Highlights */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="Logo" className="w-10 h-10" />
                <span className="text-white text-lg font-medium">
                  200+ Monasteries
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <RotateCcw className="h-8 w-8 text-white" />
                <span className="text-white text-lg font-medium">
                  360° Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
