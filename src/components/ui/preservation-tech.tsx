import { Card, CardContent } from "./card";
import { Cpu, Camera, Microscope } from "lucide-react";

const technologies = [
  {
    icon: Cpu,
    title: "AI Analysis",
    description: "Advanced machine learning algorithms analyze patterns, materials, and cultural contexts to provide deeper insights into historical artifacts.",
    features: ["Pattern Recognition", "Material Analysis", "Cultural Context", "Historical Dating"]
  },
  {
    icon: Camera,
    title: "3D Digitization", 
    description: "High-resolution 3D scanning and photogrammetry techniques create detailed digital replicas for preservation and study.",
    features: ["Photogrammetry", "Laser Scanning", "Virtual Reality", "Interactive Models"]
  },
  {
    icon: Microscope,
    title: "Scientific Analysis",
    description: "Non-invasive scientific techniques provide detailed information about composition, age, and provenance of artifacts.",
    features: ["Spectroscopy", "Carbon Dating", "Material Composition", "Provenance Tracking"]
  }
];

export function PreservationTech() {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4 relative">
        {/* Add heritage pattern overlay */}
        <div 
          className="absolute top-0 right-0 w-64 h-64 opacity-10 bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url('/lovable-uploads/5622ef21-7684-40a7-8470-8c0d22fb8d75.png')`
          }}
        ></div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Advanced Preservation Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technology ensures the highest quality preservation and accessibility 
            of cultural heritage for future generations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-heritage transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mr-4">
                    <tech.icon className="w-6 h-6 text-heritage-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {tech.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {tech.description}
                </p>
                <ul className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Preservation Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50TB</div>
            <div className="text-sm text-muted-foreground">Digital Storage</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">8K</div>
            <div className="text-sm text-muted-foreground">Resolution Capture</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Global Access</div>
          </div>
        </div>
      </div>
    </section>
  );
}