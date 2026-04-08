import AnimateOnScroll from "./AnimateOnScroll";
import PhoneButton from "./PhoneButton";

export default function CalloutSection() {
  return (
    <section
      className="relative py-24 md:py-36 px-6 text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #080d20 0%, #05091a 40%, #0a0f25 100%)",
      }}
    >
      {/* Decorative gold lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll delay={0}>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#c9a84c] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            LLC Owned — No Sales Tax
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.12}>
          <div className="w-24 h-px bg-[#c9a84c] mx-auto my-8" />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f0e8] mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Under Factory Warranty Until March 2026
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <p className="text-lg text-[#8892a4] mb-12 leading-relaxed">
            A rare turn-key opportunity for the discerning buyer.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.4}>
          <PhoneButton variant="primary" size="lg" ctaId="cta-call-callout" />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
