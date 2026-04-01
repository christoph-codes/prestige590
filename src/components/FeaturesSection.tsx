import {
  Layers,
  Radio,
  Users,
  Monitor,
  Crown,
  Sparkles,
  Armchair,
  Gem,
  Key,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionWrapper from "./SectionWrapper";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Radio,
  Users,
  Monitor,
  Crown,
  Sparkles,
  Armchair,
  Gem,
  Key,
};

export default function FeaturesSection() {
  return (
    <SectionWrapper id="features" className="bg-[#05091a]">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#c9a84c] mb-3">
            Amenities
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#f5f0e8]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Premium Features &amp; Amenities
          </h2>
          <div className="w-16 h-px bg-[#c9a84c] mx-auto mt-4" />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? Layers;
            return (
              <AnimateOnScroll key={feature.name} delay={(i % 3) * 0.1}>
                <div className="group p-7 rounded-xl border border-white/8 hover:border-[#c9a84c]/50 transition-all duration-500 h-full"
                  style={{ background: "#0a0f25" }}>
                  <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center mb-5 group-hover:bg-[#c9a84c]/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#c9a84c]" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-lg font-semibold text-[#f5f0e8] mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {feature.name}
                  </h3>
                  <p className="text-sm text-[#8892a4] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
