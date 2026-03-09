 'use client';
 
 import React, { useState } from 'react';
 
 const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
 
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
 
  // ─── NAV ITEMS ────────────────────────────────────────────
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    {
      label: 'Contact Us',
      href: 'https://wa.me/919699164131',
      external: true,
    },
  ];
 
  // ─── STYLES ───────────────────────────────────────────────
  const styles: { [key: string]: React.CSSProperties } = {
    header: {
      width: '100%',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      fontFamily: 'Arial, Helvetica, sans-serif',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px',
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '64px',
      position: 'relative',
    },

    // ── Logo ──
    logoWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      textDecoration: 'none',
      cursor: 'pointer',
      lineHeight: 1.1,
    },
    logoBilling: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '22px',
      color: '#ED1A3B',
      letterSpacing: '1px',
      textTransform: 'uppercase',
    },
    logoSoftware: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: '13px',
      color: '#ED1A3B',
      letterSpacing: '3.5px',
      textTransform: 'uppercase',
    },

    // ── Desktop Nav ──
    desktopNav: {
      display: 'flex',
      alignItems: 'center',
      gap: '32px',
    },
    navLink: {
      color: '#374151',
      textDecoration: 'none',
      fontWeight: 500,
      fontSize: '15px',
      fontFamily: "'Poppins', sans-serif",
      transition: 'color 0.2s',
      cursor: 'pointer',
    },
    navLinkHover: {
      color: '#ED1A3B',
    },
    signInBtn: {
      backgroundColor: '#ED1A3B',
      color: '#ffffff',
      padding: '8px 20px',
      borderRadius: '8px',
      border: 'none',
      fontWeight: 600,
      fontSize: '15px',
      fontFamily: "'Poppins', sans-serif",
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },

    // ── Hamburger ──
    hamburger: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
      display: 'none',
    },

    // ── Mobile Dropdown ──
    mobileMenu: {
      overflow: 'hidden',
      transition: 'max-height 0.3s ease, opacity 0.3s ease',
      maxHeight: isMenuOpen ? '300px' : '0px',
      opacity: isMenuOpen ? 1 : 0,
      backgroundColor: '#f9fafb',
      borderTop: '1px solid #f3f4f6',
    },
    mobileMenuInner: {
      padding: '8px 24px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    },
    mobileLink: {
      display: 'block',
      padding: '10px 12px',
      borderRadius: '6px',
      color: '#374151',
      textDecoration: 'none',
      fontWeight: 500,
      fontSize: '16px',
      fontFamily: "'Poppins', sans-serif",
      cursor: 'pointer',
    },
    mobileSignInBtn: {
      backgroundColor: '#ED1A3B',
      color: '#ffffff',
      padding: '10px 20px',
      borderRadius: '8px',
      border: 'none',
      fontWeight: 600,
      fontSize: '16px',
      fontFamily: "'Poppins', sans-serif",
      cursor: 'pointer',
      marginTop: '8px',
      width: '100%',
    },
  };

  // ─── RESPONSIVE CSS + FONT IMPORT ────────────────────────
  const responsiveCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    /* ── Mobile (default) ── */
    .header-logo-desktop {
      display: none;
    }
    .header-logo-mobile {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .header-desktop-nav {
      display: none !important;
    }
    .header-hamburger {
      display: block !important;
      position: absolute;
      right: 0;
    }
    .header-mobile-menu {
      display: block;
    }

    /* ── Desktop (768px+) ── */
    @media (min-width: 768px) {
      .header-logo-desktop {
        display: flex;
      }
      .header-logo-mobile {
        display: none;
      }
      .header-desktop-nav {
        display: flex !important;
      }
      .header-hamburger {
        display: none !important;
      }
      .header-mobile-menu {
        display: none !important;
      }
    }
  `;

  // ─── REUSABLE LOGO COMPONENT ─────────────────────────────
  const Logo = () => (
    <a href="/" style={styles.logoWrapper}>
      <span style={styles.logoBilling}>Billing</span>
      <span style={styles.logoSoftware}>Software</span>
    </a>
  );

  return (
    <>
      <style>{responsiveCSS}</style>

      <header style={styles.header}>
        <div style={styles.container}>
          <div style={styles.row}>

            {/* ── Desktop Logo (left aligned) ── */}
            <div className="header-logo-desktop">
              <Logo />
            </div>

            {/* ── Mobile Logo (center aligned) ── */}
            <div className="header-logo-mobile">
              <Logo />
            </div>

            {/* ── Desktop Navigation (right aligned) ── */}
            <div className="header-desktop-nav" style={styles.desktopNav}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    ...styles.navLink,
                    ...(hoveredLink === item.label ? styles.navLinkHover : {}),
                  }}
                  onMouseEnter={() => setHoveredLink(item.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                  {...(item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* ── Hamburger Button ── */}
            <button
              className="header-hamburger"
              style={styles.hamburger}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#374151"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* ── Mobile Dropdown Menu ── */}
        <div className="header-mobile-menu" style={styles.mobileMenu}>
          <div style={styles.mobileMenuInner}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={styles.mobileLink}
                onClick={() => setIsMenuOpen(false)}
                {...(item.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;