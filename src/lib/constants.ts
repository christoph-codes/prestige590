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
    src: "https://github.com/user-attachments/assets/4e9b014e-a1d8-4831-8f95-ae2abbec2ad2",
    alt: "Prestige 590 aerial top-down view underway",
  },
  {
    src: "https://github.com/user-attachments/assets/5b6bac6b-7770-4798-aa24-0f2b7ac52086",
    alt: "Prestige 590 side profile cruising at sea",
  },
  {
    src: "https://github.com/user-attachments/assets/74aa4c9b-2691-4e85-933a-847e6155f531",
    alt: "Prestige 590 master cabin wardrobe and storage",
  },
  {
    src: "https://github.com/user-attachments/assets/62131340-e94b-4c41-82ad-5bba5ffed468",
    alt: "Prestige 590 master stateroom with en-suite",
  },
  {
    src: "https://github.com/user-attachments/assets/9d4d531d-3d27-44eb-a1e0-5624cd683618",
    alt: "Prestige 590 flybridge helm and salon interior",
  },
  {
    src: "https://github.com/user-attachments/assets/55dfbe50-acbd-44c1-8ce3-78f051ebdc3e",
    alt: "Prestige 590 exterior deck and seating area",
  },
  {
    src: "https://github.com/user-attachments/assets/b5149ce3-65e9-46ee-bd28-30137a091052",
    alt: "Prestige 590 main salon and living space",
  },
  {
    src: "https://github.com/user-attachments/assets/61896ca5-df90-4949-9c71-2843231f9bba",
    alt: "Prestige 590 cockpit and aft deck",
  },
  {
    src: "https://github.com/user-attachments/assets/ade485b2-65fc-4c62-a635-d976810bb938",
    alt: "Prestige 590 bow and foredeck view",
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
