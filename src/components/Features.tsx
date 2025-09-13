import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  View,
  Check,
  Play,
  Lock,
  MapPin,
  Search,
  Zap,
  Map,
  Navigation,
  MapPin as MapPinIcon,
  Share,
  Bookmark,
  Camera,
  Mountain,
} from "lucide-react";

const Features = () => {
  const [hoveredMonastery, setHoveredMonastery] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const filterOptions = [
    "Ancient Manuscripts",
    "Temple Murals",
    "17th Century",
    "Tibetan Scripts",
    "Ritual Objects",
  ];

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);

    // Simulate AI search with mock results
    setTimeout(() => {
      const mockResults = [
        {
          title: "Rumtek Monastery Chronicles",
          type: "Manuscript",
          description:
            "Historical records of Rumtek Monastery from 17th century",
          relevance: 95,
        },
        {
          title: "Tibetan Prayer Wheel Artifacts",
          type: "Ritual Objects",
          description:
            "Collection of ancient prayer wheels from various monasteries",
          relevance: 88,
        },
        {
          title: "Pemayangtse Temple Murals",
          type: "Temple Murals",
          description:
            "High-resolution digital captures of monastery wall paintings",
          relevance: 82,
        },
      ];

      setSearchResults(mockResults);
      setIsSearching(false);
    }, 1500);
  };

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const arVrExperiences = [
    {
      id: "dassam-falls",
      title: "Dassam Falls VR",
      description: "360° Virtual Experience",
      icon: View,
      action: "Watch Preview",
    },
    {
      id: "tribal-dance",
      title: "Tribal Dance AR",
      description: "Interactive Cultural Show",
      icon: Camera,
      action: "Experience Now",
    },
    {
      id: "netarhat-sunrise",
      title: "Netarhat Sunrise",
      description: "Time-lapse Virtual Tour",
      icon: Mountain,
      action: "View Sunrise",
    },
  ];

  const monasteries = [
    {
      id: "rumtek",
      name: "Rumtek",
      status: "selected",
      icon: Check,
      color: "orange",
      position: { top: "25%", left: "45%" },
      info: {
        title: "Rumtek Monastery",
        description:
          "The largest monastery in Sikkim, also known as the Dharma Chakra Centre. Founded in 1966, it serves as the seat of the Karmapa lineage.",
        history:
          "Originally built in 1740, destroyed by fire, and rebuilt in 1966. Houses precious artifacts and serves as a major center for Tibetan Buddhism.",
        features: [
          "Golden Stupa",
          "Prayer Wheels",
          "Ancient Manuscripts",
          "Monk Quarters",
        ],
      },
    },
    {
      id: "pemayangtse",
      name: "Pemayangtse",
      status: "playable",
      icon: Play,
      color: "blue",
      position: { top: "65%", left: "75%" },
      info: {
        title: "Pemayangtse Monastery",
        description:
          "One of the oldest monasteries in Sikkim, established in 1705. Known for its beautiful architecture and spiritual significance.",
        history:
          "Founded by Lhatsun Chenpo, this monastery is the seat of the Nyingma sect and houses the famous seven-tiered wooden structure.",
        features: [
          "Seven-tiered Structure",
          "Ancient Paintings",
          "Sacred Relics",
          "Prayer Hall",
        ],
      },
    },
    {
      id: "enchey",
      name: "Enchey",
      status: "locked",
      icon: Lock,
      color: "gray",
      position: { top: "70%", left: "25%" },
      info: {
        title: "Enchey Monastery",
        description:
          "A beautiful monastery located near Gangtok, known for its annual Chaam dance festival and stunning mountain views.",
        history:
          "Built in 1909, this monastery follows the Nyingma tradition and is famous for its annual mask dance festival held in January.",
        features: [
          "Chaam Dance Festival",
          "Mountain Views",
          "Prayer Flags",
          "Sacred Tree",
        ],
      },
    },
    {
      id: "dubdi",
      name: "Dubdi",
      status: "locked",
      icon: Lock,
      color: "gray",
      position: { top: "20%", left: "80%" },
      info: {
        title: "Dubdi Monastery",
        description:
          "The oldest monastery in Sikkim, built in 1701. Located at an altitude of 2,100 meters, offering panoramic views.",
        history:
          "Established by Chogyal Chakdor Namgyal, this monastery is the first monastery built in Sikkim and holds great historical significance.",
        features: [
          "Oldest Monastery",
          "Panoramic Views",
          "Ancient Architecture",
          "Sacred Texts",
        ],
      },
    },
    {
      id: "tashiding",
      name: "Tashiding",
      status: "locked",
      icon: Lock,
      color: "gray",
      position: { top: "45%", left: "90%" },
      info: {
        title: "Tashiding Monastery",
        description:
          "A sacred monastery known for its annual Bumchu festival and the sacred water ceremony that predicts the year's fortune.",
        history:
          "Founded in 1641, this monastery is famous for its Bumchu festival where sacred water is opened to predict the year's events.",
        features: [
          "Bumchu Festival",
          "Sacred Water",
          "Prayer Wheels",
          "Mountain Setting",
        ],
      },
    },
  ];

  return null;
};

export default Features;
