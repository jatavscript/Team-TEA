import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Award } from "lucide-react";

const communityFeatures = [
  {
    icon: Users,
    title: "Expert Network", 
    description: "Connect with historians, archaeologists, and cultural experts from around the world.",
    action: "Join Network"
  },
  {
    icon: MessageSquare,
    title: "Discussion Forums",
    description: "Engage in scholarly discussions about discoveries, interpretations, and research methodologies.",
    action: "Join Discussion"
  },
  {
    icon: Award,
    title: "Contribution Recognition",
    description: "Get recognized for your contributions to heritage preservation and research efforts.",
    action: "Learn More"
  }
];

const recentActivities = [
  {
    user: "Dr. Sarah Chen",
    action: "added new analysis to",
    item: "Tang Dynasty Pottery Collection",
    time: "2 hours ago"
  },
  {
    user: "Prof. Michael Torres",
    action: "started discussion on",
    item: "Trade Route Archaeological Evidence",
    time: "4 hours ago"
  },
  {
    user: "Dr. Priya Sharma",
    action: "uploaded 3D model of",
    item: "Buddhist Stupa Architecture",
    time: "6 hours ago"
  },
  {
    user: "Dr. James Liu",
    action: "published research paper on",
    item: "Medieval Manuscript Analysis",
    time: "1 day ago"
  }
];

export function HeritageCommunity() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Heritage Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join a global community of researchers, historians, and heritage enthusiasts 
            working together to preserve and understand our cultural legacy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Community Features */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Community Features
            </h3>
            <div className="space-y-6">
              {communityFeatures.map((feature, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-heritage transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-heritage-blue" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                        <Button variant="outline" size="sm">
                          {feature.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Recent Activity
            </h3>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start border-b border-border last:border-b-0 pb-4 last:pb-0">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <div className="w-6 h-6 bg-primary rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">
                          <span className="font-medium">{activity.user}</span>
                          <span className="text-muted-foreground"> {activity.action} </span>
                          <span className="text-primary">{activity.item}</span>
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <Button variant="outline" className="w-full">
                    View All Activity
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Community Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <Card className="bg-card border-border">
                <CardContent className="p-4 text-center">
                  <div className="text-xl font-bold text-primary mb-1">2,847</div>
                  <div className="text-xs text-muted-foreground">Members</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-4 text-center">
                  <div className="text-xl font-bold text-primary mb-1">156</div>
                  <div className="text-xs text-muted-foreground">Discussions</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-4 text-center">
                  <div className="text-xl font-bold text-primary mb-1">89</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}