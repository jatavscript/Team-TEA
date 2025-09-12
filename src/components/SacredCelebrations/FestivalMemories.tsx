import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Heart, Share2, Play, Download } from "lucide-react";
import styles from './SacredCelebrations.module.css';
const FestivalMemories = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const memories = [
    {
      id: 1,
      type: "image",
      title: "Traditional Cham Dance at Losar",
      category: "losar",
      likes: 245,
      shares: 32,
      user: "Travel Explorer",
      image: "/lovable-uploads/98d22d76-f250-4212-bd0f-ea8328a45a32.png",
      caption: "Mesmerizing traditional dance performance during Losar celebrations at Rumtek Monastery"
    },
    {
      id: 2,
      type: "image", 
      title: "Prayer Flags Against Himalayan Sky",
      category: "saga-dawa",
      likes: 189,
      shares: 28,
      user: "Mountain Lover",
      image: "/lovable-uploads/e0da48a8-26cf-4412-96ed-fd7624a45ac3.png",
      caption: "Colorful prayer flags fluttering in the wind during Saga Dawa festival"
    },
    {
      id: 3,
      type: "image",
      title: "Sacred Monastery Architecture",
      category: "bumchu",
      likes: 156,
      shares: 19,
      user: "Cultural Enthusiast",
      image: "/lovable-uploads/0c9a17a8-df51-43c2-b00e-c3cf7d7d6d25.png",
      caption: "Beautiful traditional architecture of Tashiding Monastery during Bumchu Festival"
    },
    {
      id: 4,
      type: "image",
      title: "Golden Buddha in Candlelight",
      category: "general",
      likes: 298,
      shares: 45,
      user: "Spiritual Seeker",
      image: "/lovable-uploads/2a4ca955-4cb8-4969-a54e-0f0d6a99998c.png",
      caption: "Peaceful Buddha statue surrounded by butter lamps creating a serene atmosphere"
    },
    {
      id: 5,
      type: "image",
      title: "Traditional Dance Performance",
      category: "losar",
      likes: 167,
      shares: 23,
      user: "Culture Photographer",
      image: "/lovable-uploads/86194906-cb2f-4c9a-b215-76a82466deb4.png",
      caption: "Vibrant traditional costumes and joyful expressions during festival celebrations"
    },
    {
      id: 6,
      type: "image",
      title: "Mountain Monastery Views",
      category: "general",
      likes: 134,
      shares: 15,
      user: "Adventure Seeker",
      image: "/lovable-uploads/ecf2c100-a0bb-4260-be82-1167c0ead79d.png",
      caption: "Traditional Himalayan monastery with colorful prayer flags against mountain backdrop"
    }
  ];

  const categories = [
    { id: "all", label: "All Memories", count: memories.length },
    { id: "losar", label: "Losar Festival", count: memories.filter(m => m.category === "losar").length },
    { id: "saga-dawa", label: "Saga Dawa", count: memories.filter(m => m.category === "saga-dawa").length },
    { id: "bumchu", label: "Bumchu Festival", count: memories.filter(m => m.category === "bumchu").length },
    { id: "general", label: "General", count: memories.filter(m => m.category === "general").length }
  ];

  const filteredMemories = activeCategory === "all" 
    ? memories 
    : memories.filter(memory => memory.category === activeCategory);

  return (
    <div className={styles.festivalMemories}>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Festival Memories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cherished moments captured by our travelers. Experience the joy, spirituality, and cultural richness 
            through the eyes of those who've witnessed Sikkim's sacred celebrations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`${
                activeCategory === category.id 
                  ? "bg-primary text-white" 
                  : "hover:border-primary"
              } transition-all duration-200`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-70">({category.count})</span>
            </Button>
          ))}
        </div>

        {/* Memory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredMemories.map((memory) => (
            <Card key={memory.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 group">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={memory.image} 
                  alt={memory.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center space-x-4">
                    {memory.type === "video" && (
                      <Button size="sm" variant="secondary" className="opacity-90">
                        <Play className="w-4 h-4 mr-2" />
                        Play
                      </Button>
                    )}
                    <Button size="sm" variant="secondary" className="opacity-90">
                      <Download className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </div>
                {memory.type === "video" && (
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-lg">
                    <Play className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-primary mb-2">{memory.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {memory.caption}
                </p>
                
                {/* User and Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                      <Camera className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium">{memory.user}</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{memory.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Share2 className="w-4 h-4" />
                      <span>{memory.shares}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Upload Section */}
        <Card className="p-12 text-center bg-gradient-orange text-white">
          <Camera className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">Share Your Festival Memories</h3>
          <p className="text-xl mb-8 opacity-90">
            Captured beautiful moments during your festival journey? Share them with fellow travelers!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-glow">
              Upload Photos
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              View Gallery Guidelines
            </Button>
          </div>
        </Card>
      </div>
    </section>
    </div>
  );
};

export default FestivalMemories;