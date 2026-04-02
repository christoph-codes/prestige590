import AnimateOnScroll from "./AnimateOnScroll";
import SectionWrapper from "./SectionWrapper";

export default function VideoSection() {
  return (
    <SectionWrapper id="video" className="bg-[#080d20]">
      <AnimateOnScroll className="text-center mb-12">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#c9a84c] mb-3">
          On the Water
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold text-[#f5f0e8]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Experience the Prestige 590
        </h2>
        <div className="w-16 h-px bg-[#c9a84c] mx-auto mt-4" />
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.15}>
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_0_60px_rgba(201,168,76,0.12)] ring-1 ring-[#c9a84c]/20">
            <iframe
              src="https://www.youtube.com/embed/O_n41MDGiTA?rel=0&modestbranding=1"
              title="2023 Prestige 590 Flybridge — On the Water"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
