'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';

// ─── DATA ─────────────────────────────────────────────────
const slides = [
  {
    id: 1,
    title: 'Construction Business',
    paragraph:
      'Vyapar billing software helps construction businesses manage project-based invoicing, track material costs, and handle contractor payments efficiently. Create detailed estimates, convert them to invoices, and monitor expenses across multiple construction sites with ease. The software supports multi-project tracking, labour cost management, and material reconciliation to keep your construction business profitable.',
  },
  {
    id: 2,
    title: 'Retail & Shopping',
    paragraph:
      'Retail shop owners can streamline their billing process with barcode scanning, inventory tracking, and instant GST invoicing. Vyapar helps manage stock levels, generate sales reports, and keep accurate records of every transaction in your store. Whether you run a single outlet or multiple branches, the software adapts to your retail needs with ease.',
  },
  {
    id: 3,
    title: 'Food & Restaurant',
    paragraph:
      'From small eateries to restaurant chains, Vyapar simplifies order billing, kitchen inventory management, and expense tracking. Generate itemized bills, manage supplier payments, and analyze daily sales performance to grow your food business. Track ingredient costs, monitor wastage, and optimize your menu pricing for maximum profitability.',
  },
  {
    id: 4,
    title: 'Wholesale & Distribution',
    paragraph:
      'Wholesale distributors can manage bulk orders, track deliveries with challans, and handle complex pricing structures. Vyapar supports party-wise pricing, credit management, and detailed stock reports to keep your distribution business running smoothly. Manage multiple warehouses, track goods in transit, and maintain accurate ledgers for all your parties.',
  },
  {
    id: 5,
    title: 'Textile & Garment',
    paragraph:
      'The textile industry requires detailed size, color, and batch tracking. Vyapar offers customized invoicing templates, fabric inventory management, and seasonal sales analysis to help garment businesses maintain profitability year-round. Handle complex product variants, manage job work orders, and track production costs efficiently.',
  },
  {
    id: 6,
    title: 'Electronics & Hardware',
    paragraph:
      'Electronics dealers can manage serial number tracking, warranty records, and service billing with Vyapar. The software supports product cataloging, repair service invoicing, and comprehensive inventory management for hardware stores. Track each unit by IMEI or serial number, manage AMC contracts, and handle service center operations.',
  },
  {
    id: 7,
    title: 'Pharma & Healthcare',
    paragraph:
      'Pharmaceutical businesses benefit from batch-wise tracking, expiry date management, and GST-compliant drug billing. Vyapar helps maintain accurate medicine inventories, generate purchase orders, and ensure regulatory compliance. Set up automatic alerts for expiring stock and manage returns efficiently to minimize losses.',
  },
  {
    id: 8,
    title: 'Services & Freelancing',
    paragraph:
      'Service providers and freelancers can create professional invoices, track project hours, and manage client payments effortlessly. Vyapar helps build a professional brand image while keeping your finances organized and tax-ready. Generate recurring invoices for retainer clients, track expenses by project, and maintain a clear record of all your earnings.',
  },
];

const STATIC_PARAGRAPH =
  'Vyapar GST billing software and accounting tools have numerous features. Collectively, they help businesses across industries. Vyapar app is built to serve every industry. It is customisable to meet the requirement of your business as per your unique business requirements. Some of the most popular industries use the Vyapar GST accounting software. It helps manage all of their business requirements.';

// ─── INDUSTRY ICON SVGS ───────────────────────────────────
const industryIcons = [
  // 1. Construction - Building
  <svg key="c1" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/><rect x="10" y="18" width="4" height="4"/></svg>,
  // 2. Retail - Shopping bag
  <svg key="c2" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
  // 3. Food - Coffee/cup
  <svg key="c3" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  // 4. Wholesale - Truck
  <svg key="c4" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  // 5. Textile - Scissors
  <svg key="c5" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>,
  // 6. Electronics - Monitor
  <svg key="c6" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  // 7. Pharma - Heart/Plus
  <svg key="c7" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  // 8. Services - Briefcase
  <svg key="c8" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
];

// ─── NAV ARROW SVGS ───────────────────────────────────────
const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

// ─── COMPONENT ────────────────────────────────────────────
const BuildSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = slides.length;

  // ── Auto-play ──
  const resetAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
  }, [totalSlides]);

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [resetAutoPlay]);

  // ── Navigation ──
  const goToSlide = (index: number) => {
    if (isTransitioning && index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    resetAutoPlay();
  };

  const goNext = () => {
    goToSlide((currentIndex + 1) % totalSlides);
  };

  const goPrev = () => {
    goToSlide((currentIndex - 1 + totalSlides) % totalSlides);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  // ── Touch / Swipe ──
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) goNext();
      else goPrev();
    }
  };

  // ── Keyboard ──
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentIndex]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // ─── INLINE STYLES ───────────────────────────────────────
  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      width: '100%',
      backgroundColor: '#F7F8FA',
      padding: '70px 0 80px',
      fontFamily: "'Poppins', sans-serif",
      overflow: 'hidden',
    },
    container: {
      maxWidth: '1300px',
      margin: '0 auto',
      padding: '0 24px',
    },
    sectionHeading: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 800,
      fontSize: '38px',
      lineHeight: '1.3',
      color: '#314259',
      textAlign: 'center' as const,
      margin: '0 0 24px 0',
    },
    staticParagraph: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: '1.8',
      color: '#787878',
      textAlign: 'center' as const,
      maxWidth: '860px',
      margin: '0 auto 52px auto',
    },

    // ── Carousel wrapper ──
    carouselWrapper: {
      position: 'relative' as const,
      width: '100%',
    },
    carouselViewport: {
      overflow: 'hidden',
      borderRadius: '20px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
    },
    carouselTrack: {
      display: 'flex',
      transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: `translateX(-${currentIndex * 100}%)`,
    },
    slide: {
      minWidth: '100%',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '56px 60px',
      textAlign: 'center' as const,
    },
    slideIconBox: {
      width: '72px',
      height: '72px',
      borderRadius: '20px',
      border: '1.5px solid #FDDDE3',
      backgroundColor: '#FFF5F7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '28px',
    },
    slideTitle: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '28px',
      lineHeight: '1.35',
      color: '#314259',
      margin: '0 0 18px 0',
    },
    slideParagraph: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: '1.85',
      color: '#787878',
      margin: 0,
      maxWidth: '720px',
    },

    // ── Arrow buttons ──
    arrowBtn: {
      position: 'absolute' as const,
      top: '50%',
      transform: 'translateY(-50%)',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      border: '2px solid #E8E8E8',
      backgroundColor: '#FFFFFF',
      color: '#314259',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 10,
      transition: 'all 0.25s ease',
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    },
    arrowLeft: {
      left: '-24px',
    },
    arrowRight: {
      right: '-24px',
    },

    // ── Dots ──
    dotsWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      marginTop: '32px',
    },
    dot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      padding: 0,
    },
    dotActive: {
      backgroundColor: '#ED1A3B',
      width: '28px',
      borderRadius: '5px',
    },
    dotInactive: {
      backgroundColor: '#D9D9D9',
    },
  };

  // ─── RESPONSIVE CSS ──────────────────────────────────────
  const responsiveCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    /* ── Mobile defaults ── */
    .build-section-heading {
      font-size: 26px !important;
      margin-bottom: 18px !important;
    }
    .build-static-paragraph {
      font-size: 14px !important;
      margin-bottom: 36px !important;
      padding: 0 4px !important;
    }

    .build-slide {
      padding: 36px 24px 40px 24px !important;
    }
    .build-slide-icon-box {
      width: 60px !important;
      height: 60px !important;
      border-radius: 16px !important;
      margin-bottom: 22px !important;
    }
    .build-slide-title {
      font-size: 22px !important;
      margin-bottom: 14px !important;
    }
    .build-slide-paragraph {
      font-size: 14px !important;
      line-height: 1.75 !important;
    }

    .build-arrow-btn {
      width: 40px !important;
      height: 40px !important;
    }
    .build-arrow-left {
      left: 8px !important;
    }
    .build-arrow-right {
      right: 8px !important;
    }

    .build-arrow-btn:hover {
      background-color: #ED1A3B !important;
      border-color: #ED1A3B !important;
      color: #FFFFFF !important;
      box-shadow: 0 6px 20px rgba(237, 26, 59, 0.25) !important;
    }

    .build-dots-wrapper {
      margin-top: 24px !important;
    }

    /* ── Tablet (600px+) ── */
    @media (min-width: 600px) {
      .build-section-heading {
        font-size: 32px !important;
        margin-bottom: 20px !important;
      }
      .build-static-paragraph {
        font-size: 15px !important;
        margin-bottom: 44px !important;
      }
      .build-slide {
        padding: 48px 44px !important;
      }
      .build-slide-icon-box {
        width: 68px !important;
        height: 68px !important;
        margin-bottom: 26px !important;
      }
      .build-slide-title {
        font-size: 26px !important;
      }
      .build-arrow-left {
        left: 12px !important;
      }
      .build-arrow-right {
        right: 12px !important;
      }
    }

    /* ── Desktop (900px+) ── */
    @media (min-width: 900px) {
      .build-section-heading {
        font-size: 38px !important;
        margin-bottom: 24px !important;
      }
      .build-static-paragraph {
        margin-bottom: 52px !important;
      }
      .build-slide {
        padding: 56px 60px !important;
      }
      .build-slide-icon-box {
        width: 72px !important;
        height: 72px !important;
        border-radius: 20px !important;
        margin-bottom: 28px !important;
      }
      .build-slide-title {
        font-size: 28px !important;
        margin-bottom: 18px !important;
      }
      .build-slide-paragraph {
        font-size: 15px !important;
      }
      .build-arrow-btn {
        width: 48px !important;
        height: 48px !important;
      }
      .build-arrow-left {
        left: -24px !important;
      }
      .build-arrow-right {
        right: -24px !important;
      }
      .build-dots-wrapper {
        margin-top: 32px !important;
      }
    }

    /* ── Large Desktop (1100px+) ── */
    @media (min-width: 1100px) {
      .build-section-heading {
        font-size: 42px !important;
      }
      .build-slide {
        padding: 64px 80px !important;
      }
    }

    /* ── Extra Large (1400px+) ── */
    @media (min-width: 1400px) {
      .build-arrow-left {
        left: -60px !important;
      }
      .build-arrow-right {
        right: -60px !important;
      }
    }
  `;

  return (
    <>
      <style>{responsiveCSS}</style>

      <section style={styles.section} aria-label="Built for Small Businesses">
        <div style={styles.container}>
          {/* ── Heading ── */}
          <h2 className="build-section-heading" style={styles.sectionHeading}>
            Built for Small Businesses
          </h2>

          {/* ── Static Paragraph ── */}
          <p className="build-static-paragraph" style={styles.staticParagraph}>
            {STATIC_PARAGRAPH}
          </p>

          {/* ── Carousel ── */}
          <div style={styles.carouselWrapper}>
            {/* Viewport */}
            <div
              style={styles.carouselViewport}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                style={styles.carouselTrack}
                onTransitionEnd={handleTransitionEnd}
              >
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className="build-slide"
                    style={styles.slide}
                  >
                    {/* Icon */}
                    <div
                      className="build-slide-icon-box"
                      style={styles.slideIconBox}
                    >
                      {industryIcons[index]}
                    </div>

                    {/* Title */}
                    <h3
                      className="build-slide-title"
                      style={styles.slideTitle}
                    >
                      {slide.title}
                    </h3>

                    {/* Paragraph */}
                    <p
                      className="build-slide-paragraph"
                      style={styles.slideParagraph}
                    >
                      {slide.paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Arrow Left ── */}
            <button
              className="build-arrow-btn build-arrow-left"
              style={{ ...styles.arrowBtn, ...styles.arrowLeft }}
              onClick={goPrev}
              aria-label="Previous slide"
            >
              <ArrowLeft />
            </button>

            {/* ── Arrow Right ── */}
            <button
              className="build-arrow-btn build-arrow-right"
              style={{ ...styles.arrowBtn, ...styles.arrowRight }}
              onClick={goNext}
              aria-label="Next slide"
            >
              <ArrowRight />
            </button>
          </div>

          {/* ── Pagination Dots ── */}
          <div className="build-dots-wrapper" style={styles.dotsWrapper}>
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                style={{
                  ...styles.dot,
                  ...(index === currentIndex
                    ? styles.dotActive
                    : styles.dotInactive),
                }}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BuildSection;