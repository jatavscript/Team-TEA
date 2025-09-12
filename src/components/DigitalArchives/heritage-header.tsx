import { Search, Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeritageHeader() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-heritage-blue" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Heritage Archives</h1>
              <p className="text-sm text-muted-foreground">Digital Collection</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Archives</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Research</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Collections</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            <Button variant="heritage" size="sm">
              Contribute
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}