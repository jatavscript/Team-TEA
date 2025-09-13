import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: "Virtual Tours", href: "/virtual-tours" },
    { label: "Interactive Map", href: "/interactive-map" },
    { label: "Digital Archives", href: "/digital-archives" },
    { label: "Cultural Calendar", href: "/sacred-celebrations" },
  ];

  const searchItems = [
    {
      label: "Pemayangtse Monastery",
      href: "/monastery/pemayangtse-monastery",
    },
    { label: "Tashiding Monastery", href: "/monastery/tashiding-monastery" },
    { label: "Rumtek Monastery", href: "/monastery/rumtek-monastery" },
    { label: "Enchey Monastery", href: "/monastery/enchey-monastery" },
    { label: "Dubdi Monastery", href: "/monastery/dubdi-monastery" },
    {
      label: "Tsuglakhang Monastery",
      href: "/monastery/tsuglakhang-monastery",
    },
    { label: "Ralang Monastery", href: "/monastery/ralang-monastery" },
    { label: "Namgyal Institute", href: "/monastery/namgyal-institute" },
  ];

  // Filter search results based on query
  const filteredResults = searchItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search input focus
  const handleSearchFocus = () => {
    setShowSearchResults(true);
  };

  // Handle search item click
  const handleSearchItemClick = (href: string) => {
    navigate(href);
    setSearchQuery("");
    setShowSearchResults(false);
    setIsOpen(false); // Close mobile menu if open
  };

  // Language options
  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hi", name: "Hindi", flag: "🇮🇳" },
    { code: "ne", name: "Nepali", flag: "🇳🇵" },
    { code: "gu", name: "Gujarati", flag: "🇮🇳" },
    { code: "mr", name: "Marathi", flag: "🇮🇳" },
  ];

  // Handle language change
  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);

    // Google Translate integration
    if (languageCode === "en") {
      // Reset to original language
      const googleTranslateElement = document.querySelector(
        ".goog-te-banner-frame"
      );
      if (googleTranslateElement) {
        googleTranslateElement.remove();
      }
      document.body.classList.remove("translated-ltr");
      document.body.classList.remove("translated-rtl");

      // Reload page to reset translation
      window.location.reload();
    } else {
      // Wait for Google Translate to be available, then trigger translation
      const triggerTranslation = () => {
        const selectElement = document.querySelector(
          ".goog-te-combo"
        ) as HTMLSelectElement;
        if (selectElement) {
          selectElement.value = languageCode;
          selectElement.dispatchEvent(new Event("change"));
          return true;
        }
        return false;
      };

      // Try immediately
      if (!triggerTranslation()) {
        // If not available, wait and try again
        const checkInterval = setInterval(() => {
          if (triggerTranslation()) {
            clearInterval(checkInterval);
          }
        }, 100);

        // Stop checking after 5 seconds
        setTimeout(() => clearInterval(checkInterval), 5000);
      }
    }
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <div className="relative" ref={searchRef}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search monasteries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleSearchFocus}
                className="pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500 w-48"
              />

              {/* Search Results Dropdown */}
              {showSearchResults && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-64 overflow-y-auto z-50">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearchItemClick(item.href)}
                        className="w-full px-4 py-3 text-left text-white hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
                      >
                        <div className="flex items-center gap-2">
                          <Search className="h-4 w-4 text-gray-400" />
                          <span>{item.label}</span>
                        </div>
                      </button>
                    ))
                  ) : searchQuery ? (
                    <div className="px-4 py-3 text-gray-400 text-sm">
                      No monasteries found
                    </div>
                  ) : (
                    searchItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearchItemClick(item.href)}
                        className="w-full px-4 py-3 text-left text-white hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
                      >
                        <div className="flex items-center gap-2">
                          <Search className="h-4 w-4 text-gray-400" />
                          <span>{item.label}</span>
                        </div>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 text-white">
              <Globe className="h-4 w-4" />
              <select
                className="bg-gray-900/95 text-white border border-gray-700 rounded px-2 py-1"
                value={selectedLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={handleSearchFocus}
                  className="pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500 w-full"
                />

                {/* Mobile Search Results */}
                {showSearchResults && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-48 overflow-y-auto z-50">
                    {filteredResults.length > 0 ? (
                      filteredResults.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearchItemClick(item.href)}
                          className="w-full px-4 py-3 text-left text-white hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
                        >
                          <div className="flex items-center gap-2">
                            <Search className="h-4 w-4 text-gray-400" />
                            <span>{item.label}</span>
                          </div>
                        </button>
                      ))
                    ) : searchQuery ? (
                      <div className="px-4 py-3 text-gray-400 text-sm">
                        No monasteries found
                      </div>
                    ) : (
                      searchItems.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearchItemClick(item.href)}
                          className="w-full px-4 py-3 text-left text-white hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
                        >
                          <div className="flex items-center gap-2">
                            <Search className="h-4 w-4 text-gray-400" />
                            <span>{item.label}</span>
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                )}
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
                <select
                  className="bg-gray-900/95 text-white border border-gray-700 rounded px-2 py-1 flex-1"
                  value={selectedLanguage}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
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
