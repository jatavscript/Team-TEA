import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Search,
  Globe,
  ChevronDown,
  UserCircle,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/img.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const navItems = [
    { label: "Virtual Tours", href: "/virtual-tours" },
    { label: "Interactive Map", href: "#map" },
    { label: "Digital Archives", href: "/digital-archives" },
    { label: "Cultural Calendar", href: "/sacred-celebrations" },
    { label: "Plan Visit", href: "#plan" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md">
      <div className="max-w-[1400px] sm:px-12 mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="w-10 h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
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
            )}
          </div>

          {/* Desktop Search and Language */}
          <div className="hidden md:flex items-center space-x-6">
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
              <select className="bg-gray-900/95 text-white">
                <option value="en">EN</option>
                <option value="hi">HI</option>
                <option value="ne">NE</option>
              </select>
            </div>

            {user ? (
              <div className="flex items-center gap-2">
                <span className="text-white text-sm hidden lg:inline">
                  {user.displayName || user.email}
                </span>
                <Button
                  onClick={logout}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-orange-400 hover:bg-gray-800"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-white hover:text-orange-400 transition-colors font-medium flex items-center gap-1"
              >
                <UserCircle className="h-6 w-6" />
                <span className="hidden lg:inline">Login</span>
              </Link>
            )}
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

              {navItems.map((item) =>
                item.href.startsWith("/") ? (
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
              )}

              {/* Language Switcher */}
              <div className="flex items-center space-x-2 text-white pt-2">
                <Globe className="h-4 w-4" />
                <select className="bg-gray-900/95 text-white">
                  <option value="en">EN</option>
                  <option value="hi">HI</option>
                  <option value="ne">NE</option>
                </select>
                <ChevronDown className="h-4 w-4" />
              </div>
              {user ? (
                <div className="space-y-2">
                  <div className="text-white text-sm py-2">
                    {user.displayName || user.email}
                  </div>
                  <Button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    variant="ghost"
                    className="text-white hover:text-orange-400 hover:bg-gray-800 w-full justify-start"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="block text-white hover:text-orange-400 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
