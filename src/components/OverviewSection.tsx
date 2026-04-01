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
            Luxury Performance
            <br />
            Meets Modern
            <br />
            <span className="text-[#c9a84c]">Elegance</span>
          </h2>
        </AnimateOnScroll>

        {/* Right */}
        <AnimateOnScroll direction="right" delay={0.15}>
          <p className="text-[#8892a4] leading-relaxed mb-8 text-lg">
            The 2023 Prestige 590 Flybridge represents the pinnacle of European
            yacht craftsmanship, blending breathtaking design with exhilarating
            performance. Every detail aboard reflects Prestige&apos;s unwavering
            commitment to excellence — from the sweeping flybridge overlooking
            azure waters to the meticulously appointed interior where premium
            materials create an atmosphere of understated opulence.
          </p>
          <p className="text-[#8892a4] leading-relaxed mb-10">
            This lightly used, LLC-owned vessel offers a rare turn-key
            opportunity for the discerning buyer seeking the finest in offshore
            cruising. With only 140 hours under her keel and a factory warranty
            extending through 2026, she presents in like-new condition and is
            ready to deliver her next owner an unparalleled on-water lifestyle.
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
