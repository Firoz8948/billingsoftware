'use client';

import React, { useState } from 'react';
import Image from "next/image";

const Hero: React.FC = () => {
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  // ─── STYLES ───────────────────────────────────────────────
  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      width: '100%',
      backgroundColor: '#ffffff',
      padding: '60px 0',
      fontFamily: "'Poppins', sans-serif",
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 24px',
    },
    row: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '40px',
    },

    // ── Left Content ──
    contentLeft: {
      flex: 1,
      maxWidth: '550px',
    },
    heading: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      letterSpacing: 'normal',
      color: '#314259',
      margin: 0,
      padding: 0,
    },

    // ── Each line of the heading ──
    headingLine: {
      display: 'block',
    },

    description: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '16px',
      lineHeight: '26.88px',
      fontWeight: 400,
      letterSpacing: 'normal',
      color: '#787878',
      width: '514.275px',
      maxWidth: '100%',
      marginTop: '16px',
      marginBottom: '32px',
    },
    ctaButton: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '20px',
      lineHeight: '33.6px',
      fontWeight: 600,
      letterSpacing: 'normal',
      color: '#FFFFFF',
      backgroundColor: isBtnHovered ? '#d01534' : '#ED1A3B',
      width: '372.55px',
      maxWidth: '100%',
      height: '57.6px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease, transform 0.2s ease',
      transform: isBtnHovered ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: isBtnHovered
        ? '0 6px 20px rgba(237, 26, 59, 0.35)'
        : '0 2px 8px rgba(237, 26, 59, 0.2)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
    },

    // ── Right Image Placeholder ──
    imageRight: {
      flex: 1,
      maxWidth: '580px',
      minHeight: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '16px',
      overflow: 'hidden',
    },
  };

  // ─── RESPONSIVE CSS ──────────────────────────────────────
  const responsiveCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    /* ── Mobile (default) ── */
    .hero-row {
      flex-direction: column !important;
      text-align: center;
    }
    .hero-content {
      max-width: 100% !important;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .hero-heading {
      width: 100% !important;
      font-size: 46px !important;
      line-height: 1.3 !important;
      text-align: center;
    }
    .hero-heading .heading-line {
      display: inline !important;
    }
    .hero-heading .heading-br {
      display: none !important;
    }
    .hero-description {
      width: 100% !important;
      text-align: center;
    }
    .hero-cta {
      width: 100% !important;
      max-width: 372px;
    }
    .hero-image {
      display: none !important;
    }

    /* ── Tablet (600px+) ── */
    @media (min-width: 600px) {
      .hero-heading {
        font-size: 46px !important;
      }
      .hero-description {
        width: 514px !important;
        max-width: 100% !important;
      }
    }

    /* ── Desktop (900px+) ── */
    @media (min-width: 900px) {
      .hero-row {
        flex-direction: row !important;
        text-align: left;
      }
      .hero-content {
        max-width: 650px !important;
        align-items: flex-start;
      }
      .hero-heading {
        width: auto !important;
        font-size: 48px !important;
        line-height: 1.15 !important;
        text-align: left;
      }
      .hero-heading .heading-line {
        display: block !important;
      }
      .hero-heading .heading-br {
        display: none !important;
      }
      .hero-description {
        width: 514.275px !important;
        max-width: 100% !important;
        text-align: left;
      }
      .hero-cta {
        width: 372.55px !important;
      }
      .hero-image {
        display: flex !important;
      }
    }

    /* ── Large Desktop (1100px+) ── */
    @media (min-width: 1100px) {
      .hero-heading {
        font-size: 54px !important;
        line-height: 1.15 !important;
      }
      .hero-description {
        font-size: 16px !important;
      }
    }
  `;

  return (
    <>
      <style>{responsiveCSS}</style>

      <section id="hero" style={styles.section}>
        <div style={styles.container}>
          <div className="hero-row" style={styles.row}>

            {/* ── Left: Content ── */}
            <div className="hero-content" style={styles.contentLeft}>

              {/* Heading — 3 lines on desktop, flows naturally on mobile */}
              <h1 className="hero-heading" style={styles.heading}>
                <span className="heading-line" style={styles.headingLine}>
                  GST Billing Software
                </span>
                <span className="heading-line" style={styles.headingLine}>
                  {' '}for Small Businesses in
                </span>
                <span className="heading-line" style={styles.headingLine}>
                  {' '}India
                </span>
              </h1>

              {/* Description */}
              <p className="hero-description" style={styles.description}>
                Manage your business professionally with Vyapar, India's leading
                small business software for billing, inventory, and accounting.
                Join 1 Cr+ satisfied SMEs in India who trust Vyapar.
              </p>

              {/* CTA Button */}
              <a
                href="https://vyaparapp.in/desktop/download/?referrer_code=5J5W"
                className="hero-cta"
                style={styles.ctaButton}
                onMouseEnter={() => setIsBtnHovered(true)}
                onMouseLeave={() => setIsBtnHovered(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Vyapar Now!
              </a>
            </div>

            {/* ── Right: Hero Image ── */}
            <div className="hero-image" style={styles.imageRight}>
              <Image
                src="/assets/hero.png"
                alt="GST billing dashboard illustration"
                width={580}
                height={400}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                priority
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;