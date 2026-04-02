import { Check } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionWrapper from "./SectionWrapper";

export default function OverviewSection() {
  const keyPoints = [
    "Only 140 engine hours",
    "Factory warranty through March 2026",
    "LLC owned — potential tax advantage",
    "Professionally maintained",
  ];

  return (
    <SectionWrapper id="overview" className="bg-[#05091a]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <AnimateOnScroll direction="left">
          <div className="w-12 h-px bg-[#c9a84c] mb-8" />
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f0e8] leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Prestige 590 for Sale
            <br />
            With Modern
            <br />
            <span className="text-[#c9a84c]">Elegance</span>
          </h2>
        </AnimateOnScroll>

        {/* Right */}
        <AnimateOnScroll direction="right" delay={0.15}>
          <p className="text-[#8892a4] leading-relaxed mb-8 text-lg">
            Buyers searching for a Prestige 590 yacht for sale will find a rare
            opportunity in this 2023 Flybridge model located in Marina Del Rey.
            The yacht blends European craftsmanship, modern elegance, and
            practical cruising comfort with expansive social areas, refined
            interior finishes, and confident offshore performance.
          </p>
          <p className="text-[#8892a4] leading-relaxed mb-10">
            This lightly used Prestige 590 is positioned for buyers comparing
            listings across YachtWorld, Boat Trader, and brokerage sites, but
            wanting one page with pricing, specs, photography, and direct
            contact information. With only 140 hours and warranty coverage
            through 2026, it presents as a compelling turnkey luxury yacht.
          </p>

          <ul className="space-y-4">
            {keyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c] flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-[#c9a84c]" strokeWidth={2.5} />
                </span>
                <span className="text-[#f5f0e8] font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
