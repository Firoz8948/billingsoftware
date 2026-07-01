'use client';

import React, { useCallback, useEffect, useState } from 'react';

const DESKTOP_SRC = '/assets/desktop popup.webp';
const MOBILE_SRC = '/assets/mob popup.webp';
const DOWNLOAD_URL = 'https://vyaparapp.in/?referrer_code=5J5W';
const MOBILE_BREAKPOINT = 768;
const DELAY_MS = 5000;
const SESSION_KEY = 'billing-popup-shown';

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
}

const Popup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const closePopup = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const updateViewport = () => setIsMobile(mediaQuery.matches);
    updateViewport();
    mediaQuery.addEventListener('change', updateViewport);

    let cancelled = false;
    const timer = window.setTimeout(() => {
      if (!cancelled) {
        sessionStorage.setItem(SESSION_KEY, '1');
        setIsOpen(true);
      }
    }, DELAY_MS);

    void Promise.all([preloadImage(DESKTOP_SRC), preloadImage(MOBILE_SRC)]);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      mediaQuery.removeEventListener('change', updateViewport);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePopup();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closePopup]);

  if (!isOpen) return null;

  const imageSrc = isMobile ? MOBILE_SRC : DESKTOP_SRC;

  const styles: { [key: string]: React.CSSProperties } = {
    overlay: {
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      animation: 'popupFadeIn 0.25s ease',
    },
    content: {
      position: 'relative',
      maxWidth: isMobile ? '100%' : '900px',
      width: '100%',
      animation: 'popupSlideUp 0.3s ease',
    },
    image: {
      display: 'block',
      width: '100%',
      height: 'auto',
      borderRadius: '12px',
      boxShadow: '0 24px 80px rgba(0, 0, 0, 0.25)',
    },
    imageLink: {
      display: 'block',
      cursor: 'pointer',
      transition: 'opacity 0.2s ease',
    },
    closeBtn: {
      position: 'absolute',
      top: '-14px',
      right: '-14px',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      border: 'none',
      backgroundColor: '#ffffff',
      color: '#314259',
      fontSize: '22px',
      lineHeight: 1,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
      transition: 'background-color 0.2s ease, color 0.2s ease',
    },
  };

  const responsiveCSS = `
    @keyframes popupFadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes popupSlideUp {
      from { opacity: 0; transform: translateY(24px) scale(0.98); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    .popup-close-btn:hover {
      background-color: #7a0a1b !important;
      color: #ffffff !important;
    }
    .popup-image-link:hover {
      opacity: 0.95;
    }
    @media (max-width: ${MOBILE_BREAKPOINT}px) {
      .popup-close-btn {
        top: 8px !important;
        right: 8px !important;
      }
    }
  `;

  return (
    <>
      <style>{responsiveCSS}</style>
      <div
        style={styles.overlay}
        onClick={(e) => {
          if (e.target === e.currentTarget) closePopup();
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Promotional popup"
      >
        <div style={styles.content}>
          <button
            type="button"
            className="popup-close-btn"
            style={styles.closeBtn}
            onClick={closePopup}
            aria-label="Close popup"
          >
            ✕
          </button>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="popup-image-link"
            style={styles.imageLink}
            aria-label="Download Vyapar now"
          >
            <img
              src={imageSrc}
              alt="Billing Software Dekho promotion"
              style={styles.image}
              draggable={false}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Popup;
