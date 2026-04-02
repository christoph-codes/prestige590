import { Ruler, Zap, Gauge, Layers, Droplets, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const PHONE_NUMBER = "(702) 604-6133";
export const PHONE_HREF = "tel:+17026046133";
export const CTA_LABEL = "Call to Inquire";
export const PRICE = "$1,790,000";
export const BOAT_TITLE = "2023 Prestige 590 Flybridge";
export const LOCATION = "Marina Del Rey, CA";

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1920&q=85",
    alt: "2023 Prestige 590 Flybridge aerial view",
  },
  {
    src: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=960&q=85",
    alt: "Prestige 590 side profile on water",
  },
  {
    src: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=960&q=85",
    alt: "Luxury yacht cruising at sea",
  },
  {
    src: "https://images.unsplash.com/photo-1648551307887-0d700b4d7e16?w=640&q=85",
    alt: "Yacht deck and seating area",
  },
  {
    src: "https://images.unsplash.com/photo-1572373688680-21e3a7cb51b2?w=640&q=85",
    alt: "Yacht interior living space",
  },
  {
    src: "https://images.unsplash.com/photo-1616680214084-22670b2cc7f1?w=640&q=85",
    alt: "Yacht helm station and navigation",
  },
  {
    src: "https://images.unsplash.com/photo-1565008576549-57569a49d7b8?w=640&q=85",
    alt: "Luxury yacht at sunset marina",
  },
];

export interface Highlight {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const HIGHLIGHTS: Highlight[] = [
  { icon: Ruler, label: "Length", value: "61 ft" },
  { icon: Zap, label: "Engines", value: "Twin Cummins 600 HP" },
  { icon: Gauge, label: "Max Speed", value: "29 Knots" },
  { icon: Layers, label: "Layout", value: "Flybridge" },
  { icon: Droplets, label: "Fuel Type", value: "Diesel" },
  { icon: Star, label: "Condition", value: "Like New" },
];

export const SPECS = {
  General: [
    { key: "Year", value: "2023" },
    { key: "Make", value: "Prestige" },
    { key: "Model", value: "590" },
    { key: "Length", value: "61.33 ft" },
    { key: "Beam", value: "15.92 ft" },
    { key: "Hull Type", value: "Modified-V" },
  ],
  Performance: [
    { key: "Max Speed", value: "29 knots" },
    { key: "Cruise Speed", value: "23 knots" },
    { key: "Engine Count", value: "2" },
    { key: "Drive Type", value: "Inboard" },
  ],
  Capacity: [
    { key: "Fuel", value: "581 gal" },
    { key: "Fresh Water", value: "201 gal" },
    { key: "Holding Tank", value: "45 gal" },
    { key: "Max Persons", value: "12" },
  ],
};

export const FEATURES = [
  {
    name: "Flybridge Layout",
    icon: "Layers",
    description: "Panoramic upper deck with helm station and social seating",
  },
  {
    name: "Radar Arch",
    icon: "Radio",
    description: "Full electronics suite with Garmin navigation",
  },
  {
    name: "Crew Cabin",
    icon: "Users",
    description: "Private crew quarters with dedicated head",
  },
  {
    name: "Ship Control System",
    icon: "Monitor",
    description: "Digital yacht management and monitoring",
  },
  {
    name: "Premium Interior",
    icon: "Crown",
    description: "Italian leather and hand-selected materials throughout",
  },
  {
    name: "Modern Design",
    icon: "Sparkles",
    description: "Contemporary Prestige styling with timeless elegance",
  },
  {
    name: "Spacious Seating",
    icon: "Armchair",
    description: "Multiple entertainment and lounging areas",
  },
  {
    name: "Luxury Finish",
    icon: "Gem",
    description: "Premium woodwork, marble accents, and designer fixtures",
  },
  {
    name: "Turnkey Ready",
    icon: "Key",
    description: "Fully equipped and ready for immediate enjoyment",
  },
];
