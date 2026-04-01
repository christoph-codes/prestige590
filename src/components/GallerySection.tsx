"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionWrapper from "./SectionWrapper";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function GallerySection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <SectionWrapper id="gallery" className="bg-[#05091a]">
        <AnimateOnScroll className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#c9a84c] mb-3">
            Photography
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#f5f0e8]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Vessel Gallery
          </h2>
          <div className="w-16 h-px bg-[#c9a84c] mx-auto mt-4" />
        </AnimateOnScroll>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-3 h-[580px]">
          {/* Large featured image */}
          <AnimateOnScroll className="col-span-2 row-span-2 relative overflow-hidden rounded-lg cursor-pointer group">
            <Image
              src={GALLERY_IMAGES[0].src}
              alt={GALLERY_IMAGES[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
              onClick={() => { setActiveIndex(0); setModalOpen(true); }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </AnimateOnScroll>

          {/* Side images row 1 */}
          {[1, 2].map((idx) => (
            <AnimateOnScroll key={idx} delay={idx * 0.1} className="relative overflow-hidden rounded-lg cursor-pointer group">
              <Image
                src={GALLERY_IMAGES[idx].src}
                alt={GALLERY_IMAGES[idx].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="25vw"
                onClick={() => { setActiveIndex(idx); setModalOpen(true); }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </AnimateOnScroll>
          ))}

          {/* Bottom row small images */}
          {[3, 4, 5].map((idx) => (
            <AnimateOnScroll key={idx} delay={idx * 0.08} className="relative overflow-hidden rounded-lg cursor-pointer group">
              <Image
                src={GALLERY_IMAGES[idx].src}
                alt={GALLERY_IMAGES[idx].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="25vw"
                onClick={() => { setActiveIndex(idx); setModalOpen(true); }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Mobile stack */}
        <div className="md:hidden flex flex-col gap-3">
          {GALLERY_IMAGES.slice(0, 5).map((img, idx) => (
            <AnimateOnScroll key={idx} delay={idx * 0.08} className="relative aspect-video overflow-hidden rounded-lg cursor-pointer group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="100vw"
                onClick={() => { setActiveIndex(idx); setModalOpen(true); }}
              />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="text-center mt-10" delay={0.3}>
          <button
            onClick={() => { setActiveIndex(0); setModalOpen(true); }}
            className="inline-flex items-center gap-2 px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#c9a84c] hover:text-[#05091a] transition-all duration-300"
          >
            View Full Gallery
          </button>
        </AnimateOnScroll>
      </SectionWrapper>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(5,9,26,0.95)" }}
          onClick={() => setModalOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-[#c9a84c] hover:text-white transition-colors"
            onClick={() => setModalOpen(false)}
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="w-full max-w-6xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {GALLERY_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  className={`relative overflow-hidden rounded-lg cursor-pointer ring-2 transition-all duration-200 ${
                    activeIndex === idx ? "ring-[#c9a84c]" : "ring-transparent"
                  } ${idx === 0 ? "md:col-span-2 aspect-video" : "aspect-video"}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
