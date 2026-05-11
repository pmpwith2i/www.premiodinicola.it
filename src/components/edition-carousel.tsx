"use client";

import { useRef, useState, useEffect, useCallback } from "react";

export interface CarouselSlide {
  src: string;
  alt: string;
  caption: string;
  subcaption?: string;
  label?: string;
  labelColor?: string;
}

export function EditionCarousel({ slides }: { slides: CarouselSlide[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 20
      : 300;
    el.scrollBy({
      left: direction === "left" ? -slideWidth : slideWidth,
      behavior: "smooth",
    });
  };

  if (slides.length === 0) return null;

  // Polaroid-style — alternating tilts to feel like photos pinned in a yearbook
  const tilts = ["rotate-[-1.4deg]", "rotate-[1.6deg]", "rotate-[-0.8deg]", "rotate-[2deg]", "rotate-[-2deg]"];

  return (
    <div className="group relative">
      {/* Nav header */}
      <div className="flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-caps-tight font-semibold text-ink-mute">
          {slides.length} foto · scorri →
        </p>
        {slides.length > 2 && (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Precedente"
              className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-ink bg-paper text-ink transition-all hover:bg-blu hover:text-paper disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-paper disabled:hover:text-ink"
            >
              <span aria-hidden className="text-base leading-none">←</span>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Successivo"
              className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-ink bg-paper text-ink transition-all hover:bg-blu hover:text-paper disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-paper disabled:hover:text-ink"
            >
              <span aria-hidden className="text-base leading-none">→</span>
            </button>
          </div>
        )}
      </div>

      {/* Carousel track */}
      <div
        ref={scrollRef}
        className="mt-4 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {slides.map((slide, i) => (
          <figure
            key={i}
            className={`group/photo w-[180px] flex-shrink-0 snap-start sm:w-[210px] transition-transform duration-300 hover:!rotate-0 hover:-translate-y-1 ${tilts[i % tilts.length]}`}
          >
            <a
              href={slide.src}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md border-[1.5px] border-ink bg-paper p-2 shadow-[4px_4px_0_var(--ink)]"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="aspect-[3/4] w-full object-cover transition-all duration-700 group-hover/photo:scale-[1.02]"
                loading="lazy"
              />
              <figcaption className="mt-3 px-1.5 pb-1">
                {slide.label && (
                  <p
                    className={`text-[10px] uppercase tracking-caps-tight font-semibold ${
                      slide.labelColor ?? "text-ink-mute"
                    }`}
                  >
                    {slide.label}
                  </p>
                )}
                <p className="mt-1 font-hand text-xl leading-tight text-ink">
                  {slide.caption}
                </p>
                {slide.subcaption && (
                  <p className="mt-0.5 text-[11px] leading-tight text-ink-mute">
                    {slide.subcaption}
                  </p>
                )}
              </figcaption>
            </a>
          </figure>
        ))}
      </div>
    </div>
  );
}
