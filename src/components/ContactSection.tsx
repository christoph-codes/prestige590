import AnimateOnScroll from "./AnimateOnScroll";
import SectionWrapper from "./SectionWrapper";
import PhoneButton from "./PhoneButton";

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" className="bg-[#05091a]">
      <div className="max-w-3xl mx-auto text-center">
        <AnimateOnScroll>
          <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-8" />
          <h2
            className="text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Request Pricing &amp; Private Showing
          </h2>
          <p className="text-[#8892a4] leading-relaxed mb-10 text-lg">
            Speak directly with the listing contact to confirm availability,
            review specifications, and schedule a private showing in Marina Del
            Rey.
          </p>
          <PhoneButton variant="primary" size="lg" ctaId="cta-call-contact" />
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
