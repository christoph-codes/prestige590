import AnimateOnScroll from "./AnimateOnScroll";
import SectionWrapper from "./SectionWrapper";
import { FAQS } from "@/lib/site";

export default function FAQSection() {
  return (
    <SectionWrapper id="faq" className="bg-[#080d20]">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#c9a84c] mb-3">
            Buyer Questions
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#f5f0e8]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Prestige 590 FAQs
          </h2>
          <p className="text-[#8892a4] leading-relaxed mt-5 max-w-2xl mx-auto">
            Quick answers for buyers researching a Prestige 590 for sale,
            including price, location, horsepower, and current condition.
          </p>
          <div className="w-16 h-px bg-[#c9a84c] mx-auto mt-4" />
        </AnimateOnScroll>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <AnimateOnScroll key={faq.question} delay={index * 0.08}>
              <details
                className="rounded-2xl border border-white/8 bg-[#0a0f25] p-6"
                name="prestige-590-faq"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-[#f5f0e8]">
                  {faq.question}
                </summary>
                <p className="mt-4 text-[#8892a4] leading-relaxed">{faq.answer}</p>
              </details>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
