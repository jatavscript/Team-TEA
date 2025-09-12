import { Search, Filter, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export function AiSearch() {
  return (
    <section className="py-16 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI-Powered Heritage Search
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Use our advanced AI search to discover connections between artifacts, cultures, 
            and historical periods with natural language queries.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-card border-border shadow-heritage">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search Input */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input 
                    placeholder="Search for artifacts, cultures, time periods, or ask questions..."
                    className="pl-12 pr-4 py-6 text-lg bg-background border-border"
                  />
                </div>
              </div>

              {/* Search Button */}
              <Button variant="heritage" size="lg" className="lg:px-12">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>

            {/* Filter Options */}
            <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-border">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                All Categories
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Time Period
              </Button>
              <Button variant="outline" size="sm">
                <MapPin className="w-4 h-4 mr-2" />
                Location
              </Button>
              <Button variant="outline" size="sm">
                Material Type
              </Button>
              <Button variant="outline" size="sm">
                Cultural Origin
              </Button>
            </div>

            {/* Example Queries */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Try searching for:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Buddhist manuscripts from 8th century",
                  "Traditional pottery techniques",
                  "Silk road trade artifacts",
                  "Himalayan cultural practices"
                ].map((query, index) => (
                  <button
                    key={index}
                    className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors"
                  >
                    {query}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}