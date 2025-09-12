import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Share2 } from "lucide-react";

const allHeritageItems = [
  {
    id: 1,
    title: "Lepcha Handwoven Shawl",
    period: "Traditional Era",
    origin: "East Sikkim",
    description: "Traditional Lepcha shawl fashioned from sheep's wool and colored using native herbs, blossoms, and barks by the earliest inhabitants of Sikkim.",
    image: "/lovable-uploads/997b063c-3b8a-4011-8943-6eaeb520a256.png",
    views: "2.3k",
    likes: "145"
  },
  {
    id: 2,
    title: "Traditional Ceremonial Mask", 
    period: "18th Century",
    origin: "Sikkim",
    description: "Colorful wooden mask used in traditional dances and shamanic rituals, showcasing Sikkim's artistry with diverse religious influences from Buddhism and spirit worship.",
    image: "/lovable-uploads/im2.png",
    views: "1.8k",
    likes: "98"
  },
  {
    id: 3,
    title: "Lepcha Traditional Loom",
    period: "19th Century", 
    origin: "North Sikkim",
    description: "Traditional handloom used by native Lepcha people, integral to Sikkim's creative landscape for weaving textiles and preserving cultural heritage.",
    image: "/lovable-uploads/4eb836b6-e17f-4835-a405-b3c88e882aa8.png",
    views: "1.5k",
    likes: "76"
  },
  {
    id: 4,
    title: "Shamanic Ritual Mask",
    period: "17th Century",
    origin: "West Sikkim",
    description: "Intricately crafted mask depicting mythical figures, created with wood, metals, fibers, clay, and paints for totemic clan ceremonies.",
    image: "/lovable-uploads/c90cdc7b-075a-4a8b-91c5-cc33e8ae735f.png",
    views: "2.1k",
    likes: "134"
  },
  {
    id: 5,
    title: "Lepcha Woolen Quilt",
    period: "Traditional Era",
    origin: "East Sikkim",
    description: "Handcrafted quilt made from sheep's wool by Lepcha artisans, dyed with natural colors from indigenous plants and herbs of Sikkim.",
    image: "/lovable-uploads/im1.png",
    views: "1.9k",
    likes: "112"
  },
  {
    id: 6,
    title: "Handcrafted bamboo",
    period: "21th Century",
    origin: "South and East Sikkim.",
    description: "Sustainable and stylish, these bamboo desk and décor pieces from Sikkim bring a natural, minimalistic charm to your space. Perfect for modern homes and workspaces, they reflect eco-conscious living with a touch of tradition.",
    image: "/lovable-uploads/im4.jpg",
    views: "1.2k",
    likes: "87"
  },
  {
    id: 7,
    title: "Buddhist prayer wheels",
    period: "21th Century",
    origin: "West Sikkim",
    description: "Sikkim’s prayer wheels blend spirituality with artistry, turning mantras into motion. A symbol of peace and mindfulness, they invite every passerby to spin them and share in the spreading of positive energy.",
    image: "/lovable-uploads/im5.jpg",
    views: "1.7k",
    likes: "95"
  },
  {
    id: 8,
    title: "Buddha Park of Ravangla ",
    period: "4th Century",
    origin: "Ancient Tibet",
    description: "This is the Buddha Park of Ravangla (Tathagata Tsal) in Sikkim, featuring a majestic 130-foot statue of Shakyamuni Buddha. Built in the 21st century, it is a serene pilgrimage site with stunning views of the Himalayas.",
    image: "/lovable-uploads/im6.jpg",
    views: "2.0k",
    likes: "128"
  }
];

export function FeaturedItems() {
  const [visibleItems, setVisibleItems] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setVisibleItems(prev => Math.min(prev + 4, allHeritageItems.length));
      setIsLoading(false);
    }, 800);
  };

  const displayedItems = allHeritageItems.slice(0, visibleItems);
  const hasMoreItems = visibleItems < allHeritageItems.length;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Heritage Items
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover some of our most significant and popular artifacts from our digital collection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayedItems.map((item) => (
            <Card key={item.id} className="bg-card border-border hover:shadow-heritage transition-all duration-300 group overflow-hidden">
              <div className="aspect-[4/3] bg-secondary/30 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-xs text-primary font-medium">{item.period}</div>
                  <div className="text-xs text-muted-foreground">{item.origin}</div>
                </div>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{item.views} views</span>
                  <span>{item.likes} likes</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          {hasMoreItems ? (
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleLoadMore}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "View All Items"}
            </Button>
          ) : (
            <p className="text-muted-foreground">
              All items loaded ({allHeritageItems.length} total)
            </p>
          )}
        </div>
      </div>
    </section>
  );
}