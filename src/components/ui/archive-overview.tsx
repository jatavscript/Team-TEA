import { Database, BookOpen, Users, Zap } from "lucide-react";
import { Card, CardContent } from "./card";

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
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Archive Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our digital heritage platform combines cutting-edge technology with comprehensive 
            collections to provide unparalleled access to cultural treasures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewItems.map((item, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-heritage transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}