"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, ChevronDown } from "lucide-react";
import PhoneButton from "./PhoneButton";
import { BOAT_TITLE, LOCATION, PHONE_HREF, PHONE_NUMBER, PRICE } from "@/lib/constants";

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
        <PhoneButton variant="secondary" size="sm" />
      </nav>

      {/* Hero */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden -mt-[64px]">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1920&q=85"
            alt="2023 Prestige 590 Flybridge aerial view"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(5,9,26,0.7) 0%, rgba(5,9,26,0.4) 50%, rgba(5,9,26,0.85) 100%)",
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
            {["Only 140 Hours", "Warranty Through 2026", "LLC Owned", "1,200 HP"].map(
              (badge) => (
                <span
                  key={badge}
                  className="px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-[#c9a84c] text-[#c9a84c] rounded-full"
                >
                  {badge}
                </span>
              )
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.8)}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-[#c9a84c] text-[#05091a] hover:bg-[#e8d5a3] transition-all duration-300 shadow-lg shadow-[#c9a84c]/25 tracking-wide"
            >
              Schedule Showing · {PHONE_NUMBER}
            </a>
            <a
              href="#specs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#05091a] transition-all duration-300 tracking-wide"
            >
              View Specs
            </a>
          </motion.div>
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
