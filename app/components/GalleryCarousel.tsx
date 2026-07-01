'use client';

import React, { useCallback, useEffect, useState } from 'react';

const AUTO_INTERVAL_MS = 4500;

const slides = [
  { src: '/assets/owner.webp', caption: 'Owner' },
  { src: '/assets/vicepresident.webp', caption: 'Vice President' },
  { src: '/assets/award.webp', caption: 'Award' },
  { src: '/assets/certificate.webp', caption: 'Certificate' },
];

const ChevronLeft = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function getVisibleIndices(start: number, count: number, total: number) {
  return Array.from({ length: count }, (_, i) => (start + i) % total);
}

const GalleryCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(goNext, AUTO_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [goNext, isPaused]);

  const desktopIndices = getVisibleIndices(activeIndex, 3, slides.length);

  const css = `
    @keyframes galleryFadeIn {
      from { opacity: 0; transform: scale(0.98); }
      to   { opacity: 1; transform: scale(1); }
    }

    .gallery-section {
      width: 100%;
      background: #FFFFFF;
      padding: 70px 0 80px;
    }

    .gallery-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .gallery-heading {
      font-weight: 800;
      font-size: 38px;
      line-height: 1.3;
      color: #314259;
      text-align: center;
      margin: 0 0 48px 0;
    }

    .gallery-carousel {
      position: relative;
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .gallery-nav-btn {
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 2px solid #E8E8E8;
      background: #FFFFFF;
      color: #314259;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    }

    .gallery-nav-btn:hover {
      border-color: #7a0a1b;
      color: #7a0a1b;
      background: #FFF5F7;
    }

    .gallery-track {
      flex: 1;
      overflow: hidden;
    }

    /* ── Desktop: 3 per row ── */
    .gallery-desktop-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .gallery-desktop-item {
      animation: galleryFadeIn 0.45s ease;
    }

    .gallery-desktop-image-wrap {
      border-radius: 16px;
      overflow: hidden;
      aspect-ratio: 3 / 4;
      min-height: 340px;
      background: #F5F6F8;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    }

    .gallery-desktop-image-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .gallery-desktop-caption {
      margin-top: 14px;
      font-size: 15px;
      font-weight: 600;
      color: #314259;
      text-align: center;
    }

    /* ── Mobile: 1 per view ── */
    .gallery-mobile-view {
      display: none;
    }

    .gallery-mobile-slide {
      animation: galleryFadeIn 0.45s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .gallery-mobile-image-wrap {
      width: 92vw;
      max-width: 100%;
      height: 420px;
      margin: 0 auto;
      border-radius: 16px;
      overflow: hidden;
      background: #F5F6F8;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    }

    .gallery-mobile-image-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .gallery-mobile-caption {
      margin-top: 16px;
      font-size: 16px;
      font-weight: 600;
      color: #314259;
      text-align: center;
      width: 92vw;
      max-width: 100%;
    }

    .gallery-dots {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin-top: 24px;
    }

    .gallery-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: none;
      padding: 0;
      background: #D1D5DB;
      cursor: pointer;
      transition: background 0.2s ease, transform 0.2s ease;
    }

    .gallery-dot.active {
      background: #7a0a1b;
      transform: scale(1.25);
    }

    @media (max-width: 767px) {
      .gallery-heading {
        font-size: 28px;
        margin-bottom: 32px;
      }

      .gallery-container {
        padding: 0 12px;
      }

      .gallery-desktop-grid {
        display: none;
      }

      .gallery-carousel {
        position: relative;
        gap: 0;
        margin: 0 -12px;
        width: calc(100% + 24px);
      }

      .gallery-mobile-view {
        display: flex;
        justify-content: center;
        width: 100%;
      }

      .gallery-track {
        display: flex;
        justify-content: center;
        flex: 1;
      }

      .gallery-nav-btn {
        position: absolute;
        top: 42%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        z-index: 2;
      }

      .gallery-nav-prev {
        left: 4px;
      }

      .gallery-nav-next {
        right: 4px;
      }
    }

    @media (min-width: 768px) {
      .gallery-mobile-view {
        display: none;
      }
    }
  `;

  return (
    <>
      <style>{css}</style>
      <section
        id="gallery"
        className="gallery-section"
        aria-label="Awards and recognition gallery"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="gallery-container">
          <h2 className="gallery-heading">Awards &amp; Recognition</h2>

          <div className="gallery-carousel">
            <button
              type="button"
              className="gallery-nav-btn gallery-nav-prev"
              onClick={goPrev}
              aria-label="Previous slide"
            >
              <ChevronLeft />
            </button>

            <div className="gallery-track">
              {/* Desktop: 3 images at a time */}
              <div className="gallery-desktop-grid" aria-live="polite">
                {desktopIndices.map((index) => {
                  const slide = slides[index];
                  return (
                    <div key={`${activeIndex}-${slide.src}`} className="gallery-desktop-item">
                      <div className="gallery-desktop-image-wrap">
                        <img src={slide.src} alt={slide.caption} loading="lazy" draggable={false} />
                      </div>
                      <p className="gallery-desktop-caption">{slide.caption}</p>
                    </div>
                  );
                })}
              </div>

              {/* Mobile: 1 image at a time */}
              <div className="gallery-mobile-view" aria-live="polite">
                <div key={activeIndex} className="gallery-mobile-slide">
                  <div className="gallery-mobile-image-wrap">
                    <img
                      src={slides[activeIndex].src}
                      alt={slides[activeIndex].caption}
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                  <p className="gallery-mobile-caption">{slides[activeIndex].caption}</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="gallery-nav-btn gallery-nav-next"
              onClick={goNext}
              aria-label="Next slide"
            >
              <ChevronRight />
            </button>
          </div>

          <div className="gallery-dots" role="tablist" aria-label="Gallery slides">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Go to ${slide.caption}`}
                className={`gallery-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryCarousel;
