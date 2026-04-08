"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, ChevronDown } from "lucide-react";
import PhoneButton from "./PhoneButton";
import { BOAT_TITLE, LOCATION, PRICE } from "@/lib/constants";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function HeroSection() {
  return (
    <>
      {/* Sticky Nav */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "rgba(5,9,26,0.9)", backdropFilter: "blur(8px)" }}
      >
        <span
          className="text-sm font-semibold tracking-widest uppercase text-[#c9a84c]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {BOAT_TITLE}
        </span>
        <PhoneButton variant="secondary" size="sm" ctaId="cta-call-nav" />
      </nav>

      {/* Hero */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden -mt-16">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery/2023-prestige-590-power-9931520-20250902140541623-1.webp"
            alt="2023 Prestige 590 Flybridge underway at sea"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(5,9,26,0.85) 0%, rgba(5,9,26,0.6) 50%, rgba(5,9,26,0.88) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-20 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-[#c9a84c] mb-6"
          >
            Exclusively Listed
          </motion.p>

          {/* Title */}
          <motion.h1
            {...fadeUp(0.35)}
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            2023 Prestige 590
          </motion.h1>
          <motion.h1
            {...fadeUp(0.45)}
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Flybridge
          </motion.h1>

          <motion.p
            {...fadeUp(0.5)}
            className="max-w-3xl text-base md:text-xl leading-relaxed text-[#d5dce7] mb-8"
          >
            Prestige 590 for sale in Marina Del Rey with direct pricing, full
            specs, recent photography, video tour access, and private showing
            availability for qualified buyers.
          </motion.p>

          {/* Price */}
          <motion.p
            {...fadeUp(0.55)}
            className="text-3xl md:text-4xl font-semibold text-[#c9a84c] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {PRICE}
          </motion.p>

          {/* Location */}
          <motion.div
            {...fadeUp(0.62)}
            className="flex items-center gap-1.5 text-[#8892a4] mb-8"
          >
            <MapPin className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-sm tracking-wider uppercase">{LOCATION}</span>
          </motion.div>

          {/* Badges */}
          <motion.div
            {...fadeUp(0.7)}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {[
              "Only 140 Hours",
              "Warranty Through 2026",
              "LLC Owned",
              "1,200 HP",
            ].map((badge) => (
              <span
                key={badge}
                className="px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-[#c9a84c] text-[#c9a84c] rounded-full"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.8)} className="flex justify-center">
            <PhoneButton variant="primary" size="lg" ctaId="cta-call-hero" />
          </motion.div>

          <motion.p
            {...fadeUp(0.88)}
            className="mt-5 text-sm tracking-wide text-[#8892a4]"
          >
            View pricing, specs, and showing details today.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#8892a4]"
        >
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-[#c9a84c]" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
