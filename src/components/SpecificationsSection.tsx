import AnimateOnScroll from "./AnimateOnScroll";
import SectionWrapper from "./SectionWrapper";
import { SPECS } from "@/lib/constants";

export default function SpecificationsSection() {
  return (
    <div style={{ background: "#080d20" }}>
      <SectionWrapper id="specs">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#c9a84c] mb-3">
            Details
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#f5f0e8]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Technical Specifications
          </h2>
          <div className="w-16 h-px bg-[#c9a84c] mx-auto mt-4" />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(SPECS).map(([category, items], i) => (
            <AnimateOnScroll key={category} delay={i * 0.12}>
              <div
                className="rounded-xl p-8 border border-[#c9a84c]/30 h-full"
                style={{
                  background: "rgba(10,15,37,0.8)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <h3
                  className="text-lg font-semibold text-[#c9a84c] mb-6 tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {category}
                </h3>
                <ul className="space-y-4">
                  {items.map((spec) => (
                    <li
                      key={spec.key}
                      className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-[#8892a4] tracking-wide">
                        {spec.key}
                      </span>
                      <span className="text-sm font-semibold text-[#f5f0e8] text-right">
                        {spec.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
      </SectionWrapper>
    </div>
  );
}
