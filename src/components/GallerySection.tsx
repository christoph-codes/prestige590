"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionWrapper from "./SectionWrapper";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function GallerySection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const openModal = useCallback((idx: number) => {
    setActiveIndex(idx);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => setModalOpen(false), []);

  const onGalleryTileKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>, idx: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(idx);
      }
    },
    [openModal],
  );

  const prev = useCallback(() => {
    setActiveIndex(
      (i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
    );
  }, []);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % GALLERY_IMAGES.length);
  }, []);

  // Focus close button when modal opens; restore scroll when it closes
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      if (modalOpen) document.body.style.overflow = "";
    };
  }, [modalOpen]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (modalOpen) {
      thumbnailRefs.current[activeIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeIndex, modalOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen, prev, next, closeModal]);

  const activeImage = GALLERY_IMAGES[activeIndex];

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
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-3 h-145">
          {/* Large featured image */}
          <AnimateOnScroll
            className="col-span-2 row-span-2 relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openModal(0)}
            onKeyDown={(e) => onGalleryTileKeyDown(e, 0)}
            role="button"
            tabIndex={0}
            aria-label={`Open image 1: ${GALLERY_IMAGES[0].alt}`}
          >
            <Image
              src={GALLERY_IMAGES[0].src}
              alt={GALLERY_IMAGES[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02] h-auto"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </AnimateOnScroll>

          {/* Side images row 1 */}
          {[1, 2].map((idx) => (
            <AnimateOnScroll
              key={idx}
              delay={idx * 0.1}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openModal(idx)}
              onKeyDown={(e) => onGalleryTileKeyDown(e, idx)}
              role="button"
              tabIndex={0}
              aria-label={`Open image ${idx + 1}: ${GALLERY_IMAGES[idx].alt}`}
            >
              <Image
                src={GALLERY_IMAGES[idx].src}
                alt={GALLERY_IMAGES[idx].alt}
                fill
                className="object-cover h-auto transition-transform duration-700 group-hover:scale-[1.02] w-auto"
                sizes="25vw"
              />
              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                onClick={() => openModal(idx)}
              />
            </AnimateOnScroll>
          ))}

          {/* Bottom row small images */}
          {[3, 4, 5].map((idx) => (
            <AnimateOnScroll
              key={idx}
              delay={idx * 0.08}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openModal(idx)}
              onKeyDown={(e) => onGalleryTileKeyDown(e, idx)}
              role="button"
              tabIndex={0}
              aria-label={`Open image ${idx + 1}: ${GALLERY_IMAGES[idx].alt}`}
            >
              <Image
                src={GALLERY_IMAGES[idx].src}
                alt={GALLERY_IMAGES[idx].alt}
                fill
                className="cursor-pointer object-cover transition-transform duration-700 group-hover:scale-[1.02] h-auto"
                sizes="25vw"
              />
              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                onClick={() => openModal(idx)}
              />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Mobile stack */}
        <div className="md:hidden flex flex-col gap-3">
          {GALLERY_IMAGES.slice(0, 5).map((img, idx) => (
            <AnimateOnScroll
              key={idx}
              delay={idx * 0.08}
              className="relative aspect-video overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openModal(idx)}
              onKeyDown={(e) => onGalleryTileKeyDown(e, idx)}
              role="button"
              tabIndex={0}
              aria-label={`Open image ${idx + 1}: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="100vw"
              />
              <div
                className="absolute inset-0"
                onClick={() => openModal(idx)}
              />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="text-center mt-10" delay={0.3}>
          <button
            onClick={() => openModal(0)}
            className="inline-flex items-center gap-2 px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#c9a84c] hover:text-[#05091a] transition-all duration-300 cursor-pointer"
          >
            View Full Gallery
          </button>
        </AnimateOnScroll>
      </SectionWrapper>

      {/* Lightbox modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery — ${activeImage.alt} (${activeIndex + 1} of ${GALLERY_IMAGES.length})`}
          className="fixed inset-0 z-50 flex flex-col"
          style={{ background: "rgba(5,9,26,0.97)" }}
          onClick={closeModal}
        >
          {/* Header bar */}
          <div
            className="flex items-center justify-between px-6 py-4 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">
              {activeIndex + 1} / {GALLERY_IMAGES.length}
            </p>
            <button
              ref={closeButtonRef}
              onClick={closeModal}
              aria-label="Close gallery"
              className="text-[#c9a84c] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] rounded cursor-pointer"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Main image + side arrows */}
          <div
            className="relative flex-1 flex items-center justify-center min-h-0 px-14"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 z-10 p-2 text-[#c9a84c] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] rounded-full cursor-pointer"
            >
              <ChevronLeft className="w-9 h-9" />
            </button>

            {/* Active image */}
            <div className="relative w-full h-full max-w-5xl">
              <Image
                key={activeIndex}
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain h-auto"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 sm:right-4 z-10 p-2 text-[#c9a84c] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] rounded-full cursor-pointer"
            >
              <ChevronRight className="w-9 h-9" />
            </button>
          </div>

          {/* Caption */}
          <div
            className="text-center px-6 pt-3 pb-2 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-[#f5f0e8]/80 text-sm">{activeImage.alt}</p>
          </div>

          {/* Thumbnail strip */}
          <div
            className="shrink-0 px-4 pb-5 pt-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              role="listbox"
              aria-label="Image thumbnails"
              className="flex gap-2 overflow-x-auto pb-1 justify-start md:justify-center scroll-smooth"
              style={{ scrollbarWidth: "none" }}
            >
              {GALLERY_IMAGES.map((img, idx) => (
                <button
                  key={idx}
                  ref={(el) => {
                    thumbnailRefs.current[idx] = el;
                  }}
                  role="option"
                  aria-selected={activeIndex === idx}
                  aria-label={`View image ${idx + 1}: ${img.alt}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 overflow-hidden rounded transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] cursor-pointer ${
                    activeIndex === idx
                      ? "ring-2 ring-[#c9a84c] opacity-100 scale-105"
                      : "ring-1 ring-white/20 opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover h-auto"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
