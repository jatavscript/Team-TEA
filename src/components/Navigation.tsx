import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Globe, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Virtual Tours", href: "/virtual-tours" },
    { label: "Interactive Map", href: "/interactive-map" },
    { label: "Digital Archives", href: "/digital-archives" },
    { label: "Cultural Calendar", href: "/sacred-celebrations" },
    { label: "Plan Visit", href: "#plan" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-gray-900/95 backdrop-blur-md">
      <div className="mx-auto px-6">
        <div className="flex items-center justify-around h-16 w-full">
          {/* Logo */}
          <Link to={"/"}>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">TEA</div>
              <div className="text-xs text-gray-300">Sikkim's Digital Heritage Tours</div>
            </div>
          </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-white hover:text-orange-400 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-orange-400 transition-colors font-medium"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          {/* Desktop Search and Language */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search monasteries..."
                className="pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500 w-48"
              />
            </div>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 text-white">
              <Globe className="h-4 w-4" />
              <select className="bg-transparent border-none outline-none text-white">
                <option value="en" className="bg-black ">EN</option>
                <option value="hi" className="bg-black">HI</option>
                <option value="ne" className="bg-black">NE</option>
              </select>
              {/* <ChevronDown className="h-4 w-4" /> */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="space-y-3">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search monasteries..."
                  className="pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500 w-full"
                />
              </div>

              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block text-white hover:text-orange-400 transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-white hover:text-orange-400 transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
              
              {/* Language Switcher */}
              <div className="flex items-center space-x-2 text-white pt-2">
                <Globe className="h-4 w-4" />
                <select className="bg-transparent border-none outline-none text-white">
                  <option value="en">EN</option>
                  <option value="hi">HI</option>
                  <option value="ne">NE</option>
                </select>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;