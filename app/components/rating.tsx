'use client';

import React, { useState } from 'react';

// ─── COMPONENT ────────────────────────────────────────────
const RatingSection: React.FC = () => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [selectedStar, setSelectedStar] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const averageRating = 4.43;
  const totalVotes = 31869;

  const handleStarClick = (star: number) => {
    if (!hasVoted) {
      setSelectedStar(star);
      setHasVoted(true);
    }
  };

  const getStarFill = (index: number): string => {
    if (hoveredStar !== null && !hasVoted) {
      return index <= hoveredStar ? '#FFB800' : '#D9D9D9';
    }
    if (selectedStar !== null) {
      return index <= selectedStar ? '#FFB800' : '#D9D9D9';
    }
    return '#D9D9D9';
  };

  // ─── INLINE STYLES ───────────────────────────────────────
  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      width: '100%',
      backgroundColor: '#FFFFFF',
      padding: '64px 0 72px',
      fontFamily: "'Poppins', sans-serif",
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    heading: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: '1.35',
      color: '#314259',
      margin: '0 0 8px 0',
    },
    subtitle: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: '1.6',
      color: '#787878',
      margin: '0 0 28px 0',
    },
    starsRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      marginBottom: '28px',
    },
    starBtn: {
      background: 'none',
      border: 'none',
      padding: '4px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.2s ease',
    },
    ratingInfo: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px',
    },
    ratingNumber: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 800,
      fontSize: '44px',
      lineHeight: '1',
      color: '#314259',
      margin: 0,
    },
    ratingOutOf: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
      fontSize: '15px',
      lineHeight: '1',
      color: '#787878',
      margin: '0 0 4px 0',
    },
    voteCount: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '1.5',
      color: '#9CA3AF',
      margin: 0,
    },
    thankYou: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '15px',
      color: '#22C55E',
      margin: '16px 0 0 0',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
    },

    // ── Divider line ──
    divider: {
      width: '60px',
      height: '3px',
      borderRadius: '2px',
      backgroundColor: '#ED1A3B',
      margin: '0 0 28px 0',
    },

    // ── Mini stars for display rating ──
    miniStarsRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '3px',
      marginBottom: '6px',
    },
  };

  // ─── STAR SVG ────────────────────────────────────────────
  const StarSVG = ({
    fill,
    size = 40,
  }: {
    fill: string;
    size?: number;
  }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  // ── Mini filled stars for the average display ──
  const renderMiniStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const fillColor =
        i <= Math.floor(averageRating)
          ? '#FFB800'
          : i - averageRating < 1
          ? '#FFB800'
          : '#D9D9D9';
      stars.push(<StarSVG key={i} fill={fillColor} size={18} />);
    }
    return stars;
  };

  // ─── RESPONSIVE CSS ──────────────────────────────────────
  const responsiveCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    /* Mobile defaults */
    .rating-heading {
      font-size: 24px !important;
      margin-bottom: 6px !important;
    }
    .rating-subtitle {
      font-size: 14px !important;
      margin-bottom: 22px !important;
    }
    .rating-star-btn {
      padding: 3px !important;
    }
    .rating-star-btn svg {
      width: 34px !important;
      height: 34px !important;
    }
    .rating-stars-row {
      gap: 6px !important;
      margin-bottom: 24px !important;
    }
    .rating-number {
      font-size: 36px !important;
    }
    .rating-out-of {
      font-size: 14px !important;
    }
    .rating-vote-count {
      font-size: 13px !important;
    }
    .rating-divider {
      margin-bottom: 22px !important;
    }

    /* Hover effects */
    .rating-star-btn:hover {
      transform: scale(1.15) !important;
    }
    .rating-star-btn:active {
      transform: scale(0.95) !important;
    }

    /* Tablet (600px+) */
    @media (min-width: 600px) {
      .rating-heading {
        font-size: 28px !important;
      }
      .rating-subtitle {
        font-size: 15px !important;
        margin-bottom: 26px !important;
      }
      .rating-star-btn svg {
        width: 38px !important;
        height: 38px !important;
      }
      .rating-stars-row {
        gap: 8px !important;
        margin-bottom: 28px !important;
      }
      .rating-number {
        font-size: 40px !important;
      }
    }

    /* Desktop (960px+) */
    @media (min-width: 960px) {
      .rating-heading {
        font-size: 32px !important;
      }
      .rating-star-btn svg {
        width: 42px !important;
        height: 42px !important;
      }
      .rating-stars-row {
        gap: 10px !important;
      }
      .rating-number {
        font-size: 44px !important;
      }
    }

    /* Large Desktop (1200px+) */
    @media (min-width: 1200px) {
      .rating-heading {
        font-size: 36px !important;
      }
      .rating-star-btn svg {
        width: 46px !important;
        height: 46px !important;
      }
      .rating-stars-row {
        gap: 12px !important;
      }
      .rating-number {
        font-size: 48px !important;
      }
    }
  `;

  return (
    <>
      <style>{responsiveCSS}</style>

      <section style={styles.section} aria-label="Rate Vyapar">
        <div style={styles.container}>
          {/* ── Heading ── */}
          <h2 className="rating-heading" style={styles.heading}>
            How Useful is Vyapar for Your Business?
          </h2>

          {/* ── Subtitle ── */}
          <p className="rating-subtitle" style={styles.subtitle}>
            Click on a star to rate it!
          </p>

          {/* ── Red divider ── */}
          <div className="rating-divider" style={styles.divider} />

          {/* ── Interactive Stars ── */}
          <div className="rating-stars-row" style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className="rating-star-btn"
                style={styles.starBtn}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => {
                  if (!hasVoted) setHoveredStar(star);
                }}
                onMouseLeave={() => {
                  if (!hasVoted) setHoveredStar(null);
                }}
                aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
              >
                <StarSVG fill={getStarFill(star)} />
              </button>
            ))}
          </div>

          {/* ── Thank you message ── */}
          {hasVoted && (
            <p style={styles.thankYou}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22C55E"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Thank you for your rating!
            </p>
          )}

          {/* ── Rating info ── */}
          <div style={styles.ratingInfo}>
            {/* Mini display stars */}
            <div style={styles.miniStarsRow}>{renderMiniStars()}</div>

            {/* Big number */}
            <p className="rating-number" style={styles.ratingNumber}>
              {averageRating}
            </p>

            {/* Out of */}
            <p className="rating-out-of" style={styles.ratingOutOf}>
              / 5
            </p>

            {/* Vote count */}
            <p className="rating-vote-count" style={styles.voteCount}>
              Vote count:{' '}
              <span style={{ fontWeight: 600, color: '#314259' }}>
                {totalVotes.toLocaleString('en-IN')}
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RatingSection;