import Image from "next/image";
import { Circle } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionWrapper from "./SectionWrapper";

const engineBullets = [
  "Twin Cummins QSC 8.3 diesel engines",
  "600 HP each — 1,200 HP combined",
  "Only 140 documented hours",
  "Inboard diesel drive system",
  "Professional service records available",
  "Under factory warranty through 2026",
];

export default function EngineSection() {
  return (
    <SectionWrapper id="engines" className="bg-[#05091a] overflow-hidden !px-0 !py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Image */}
        <AnimateOnScroll direction="left" className="relative min-h-[400px] lg:min-h-full">
          <Image
            src="/gallery/2023-prestige-590-power-9931520-20250902140553515-1.webp"
            alt="Prestige 590 aerial view underway at speed"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#05091a] hidden lg:block" />
        </AnimateOnScroll>

        {/* Content */}
        <AnimateOnScroll direction="right" delay={0.15} className="flex flex-col justify-center px-8 md:px-14 lg:px-16 py-16 lg:py-24">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#c9a84c] mb-4">
            Propulsion
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Twin Cummins Power
          </h2>
          <p className="text-xl text-[#c9a84c] font-semibold mb-10">
            1,200 Combined Horsepower
          </p>

          <ul className="space-y-5">
            {engineBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-4">
                <Circle className="w-2 h-2 text-[#c9a84c] mt-2 flex-shrink-0 fill-[#c9a84c]" />
                <span className="text-[#8892a4] leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
