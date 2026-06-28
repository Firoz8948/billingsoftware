'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// ─── ICONS ────────────────────────────────────────────────
type IconProps = { name: string };

const Icon: React.FC<IconProps> = ({ name }) => {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: '#7a0a1b',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (name) {
    case 'accounting':
      return (<svg {...common}><path d="M4 4h16v16H4z" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>);
    case 'inventory':
      return (<svg {...common}><path d="M4 7l8-4 8 4-8 4-8-4z" /><path d="M4 7v10l8 4V11" /><path d="M20 7v10l-8 4" /></svg>);
    case 'invoicing':
      return (<svg {...common}><path d="M6 2h9l5 5v15H6z" /><path d="M14 2v6h6" /><path d="M9 13h6M9 17h4" /></svg>);
    case 'einvoice':
      return (<svg {...common}><path d="M6 2h9l5 5v15H6z" /><path d="M14 2v6h6" /><path d="M9 14l2 2 4-4" /></svg>);
    case 'pos':
      return (<svg {...common}><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M9 6h6M9 10h6M9 14h2" /></svg>);
    case 'ocr':
      return (<svg {...common}><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" /><path d="M7 12h10" /></svg>);
    case 'retail':
      return (<svg {...common}><path d="M3 9l1.5-5h15L21 9" /><path d="M3 9h18v11H3z" /><path d="M9 20v-6h6v6" /></svg>);
    case 'pharmacy':
      return (<svg {...common}><rect x="3" y="8" width="14" height="9" rx="4.5" transform="rotate(-45 10 12.5)" /><path d="M8 9l5 5" /></svg>);
    case 'grocery':
      return (<svg {...common}><circle cx="9" cy="20" r="1.4" /><circle cx="17" cy="20" r="1.4" /><path d="M3 4h2l2 11h11l2-7H6" /></svg>);
    case 'restaurant':
      return (<svg {...common}><path d="M6 2v8a2 2 0 0 0 4 0V2M8 10v12" /><path d="M16 2c-1.5 0-2.5 2-2.5 4.5S15 11 16 11v11" /></svg>);
    case 'jewellery':
      return (<svg {...common}><path d="M6 3h12l3 5-9 13L3 8z" /><path d="M3 8h18M9 3l3 5 3-5M12 8v13" /></svg>);
    case 'clothing':
      return (<svg {...common}><path d="M8 3l4 3 4-3 5 4-3 3-2-1.5V21H8V8.5L6 10 3 7z" /></svg>);
    case 'blogs':
      return (<svg {...common}><path d="M4 4h7a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4z" /><path d="M20 4h-7a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h7z" /></svg>);
    case 'usecases':
      return (<svg {...common}><circle cx="12" cy="9" r="5" /><path d="M9 13l-1 8 4-2 4 2-1-8" /></svg>);
    case 'guides':
      return (<svg {...common}><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 0 1 4.5 1.5c0 1.7-2 2-2 3.5" /><path d="M12 17h.01" /></svg>);
    case 'success':
      return (<svg {...common}><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.1-5.4A8.5 8.5 0 1 1 21 11.5z" /><path d="M8.5 12l2 2 4-4" /></svg>);
    case 'videos':
      return (<svg {...common}><rect x="2" y="5" width="14" height="14" rx="2" /><path d="M16 9l6-3v12l-6-3" /></svg>);
    default:
      return (<svg {...common}><circle cx="12" cy="12" r="9" /></svg>);
  }
};

// ─── SOLUTIONS DATA ───────────────────────────────────────
type SolutionItem = { name: string; text: string; icon: string; href: string };
type SolutionGroup = { title: string; items: SolutionItem[] };

const solutionGroups: SolutionGroup[] = [
  {
    title: 'Business Management Solutions',
    items: [
      { name: 'Accounting', text: 'Manage books, ledgers & balance sheets', icon: 'accounting', href: '#' },
      { name: 'Inventory', text: 'Track stock levels in real-time', icon: 'inventory', href: '#' },
      { name: 'Invoicing', text: 'Create GST invoices in seconds', icon: 'invoicing', href: '#' },
      { name: 'E-Invoice', text: 'Generate IRN & e-invoices easily', icon: 'einvoice', href: '#' },
      { name: 'POS', text: 'Fast billing at your counter', icon: 'pos', href: '#' },
      { name: 'OCR', text: 'Scan bills & auto-extract data', icon: 'ocr', href: '#' },
    ],
  },
  {
    title: 'Industry Solution',
    items: [
      { name: 'Retail', text: 'Billing built for retail stores', icon: 'retail', href: '#' },
      { name: 'Pharmacy', text: 'Batch & expiry-wise tracking', icon: 'pharmacy', href: '#' },
      { name: 'Grocery', text: 'Quick grocery store billing', icon: 'grocery', href: '#' },
      { name: 'Restaurant', text: 'KOT & table management', icon: 'restaurant', href: '#' },
      { name: 'Jewellery', text: 'Karat & weight-based billing', icon: 'jewellery', href: '#' },
      { name: 'Clothing/Apparel', text: 'Size & variant management', icon: 'clothing', href: '#' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { name: 'Blogs', text: 'Tips & business insights', icon: 'blogs', href: '#' },
      { name: 'Use Cases', text: 'See how businesses grow', icon: 'usecases', href: '#' },
      { name: 'Guides', text: 'Step-by-step how-tos', icon: 'guides', href: '#' },
      { name: 'Success Stories', text: 'Real customer results', icon: 'success', href: '#' },
      { name: 'Videos', text: 'Watch product tutorials', icon: 'videos', href: '#' },
    ],
  },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
      alignItems: 'center',
      textDecoration: 'none',
      cursor: 'pointer',
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
      color: '#7a0a1b',
    },
    solutionsTrigger: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      color: '#374151',
      fontWeight: 500,
      fontSize: '15px',
      fontFamily: "'Poppins', sans-serif",
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      padding: 0,
      transition: 'color 0.2s',
    },

    // ── Mega Menu ──
    megaPanel: {
      position: 'absolute',
      top: '64px',
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      borderTop: '1px solid #f0f0f0',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
      zIndex: 60,
    },
    megaInner: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '28px 24px 32px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '32px',
    },
    megaGroupTitle: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '13px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      color: '#314259',
      marginBottom: '14px',
    },
    megaItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      padding: '10px',
      borderRadius: '10px',
      textDecoration: 'none',
      transition: 'background-color 0.15s ease',
    },
    megaIconBox: {
      width: '38px',
      height: '38px',
      minWidth: '38px',
      borderRadius: '10px',
      backgroundColor: '#FFF5F7',
      border: '1px solid #FDDDE3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    megaItemTitle: {
      display: 'block',
      fontFamily: "'Poppins', sans-serif",
      fontSize: '14.5px',
      fontWeight: 600,
      color: '#314259',
      lineHeight: 1.3,
    },
    megaItemText: {
      display: 'block',
      fontFamily: "'Poppins', sans-serif",
      fontSize: '12.5px',
      color: '#787878',
      lineHeight: 1.4,
      marginTop: '2px',
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
      overflowY: 'auto',
      transition: 'max-height 0.3s ease, opacity 0.3s ease',
      maxHeight: isMenuOpen ? '85vh' : '0px',
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
    mobileSolutionsBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: '10px 12px',
      borderRadius: '6px',
      color: '#374151',
      fontWeight: 500,
      fontSize: '16px',
      fontFamily: "'Poppins', sans-serif",
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      textAlign: 'left',
    },
    mobileSolutionsPanel: {
      overflow: 'hidden',
      transition: 'max-height 0.3s ease',
      maxHeight: mobileSolutionsOpen ? '2000px' : '0px',
    },
    mobileGroupTitle: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '12px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      color: '#9ca3af',
      padding: '12px 12px 6px',
    },
    mobileSolutionGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      columnGap: '8px',
      rowGap: '2px',
    },
    mobileSolutionItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 8px 8px 8px',
      textDecoration: 'none',
    },
    mobileSolutionTitle: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '15px',
      fontWeight: 500,
      color: '#374151',
    },
  };

  // ─── RESPONSIVE CSS + FONT IMPORT ────────────────────────
  const responsiveCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    .mega-item:hover {
      background-color: #FAFAFA;
    }

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
    .solutions-mega {
      display: none !important;
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
      .solutions-mega {
        display: block !important;
      }
    }
  `;

  // ─── REUSABLE LOGO COMPONENT ─────────────────────────────
  const Logo = () => (
    <a href="/" style={styles.logoWrapper}>
      <Image
        src="/assets/logo.svg"
        alt="Billing Software logo"
        width={224}
        height={56}
        style={{ height: '56px', width: 'auto' }}
        priority
      />
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
              <a
                href="/"
                style={{
                  ...styles.navLink,
                  ...(hoveredLink === 'Home' ? styles.navLinkHover : {}),
                }}
                onMouseEnter={() => setHoveredLink('Home')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Home
              </a>

              {/* Solutions trigger */}
              <button
                style={{
                  ...styles.solutionsTrigger,
                  ...(solutionsOpen ? styles.navLinkHover : {}),
                }}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
                aria-expanded={solutionsOpen}
              >
                Solutions
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: solutionsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <a
                href="/pricing"
                style={{
                  ...styles.navLink,
                  ...(hoveredLink === 'Pricing' ? styles.navLinkHover : {}),
                }}
                onMouseEnter={() => setHoveredLink('Pricing')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Pricing
              </a>

              <a
                href="https://wa.me/919699164131"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.navLink,
                  ...(hoveredLink === 'Contact Us' ? styles.navLinkHover : {}),
                }}
                onMouseEnter={() => setHoveredLink('Contact Us')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Contact Us
              </a>
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

        {/* ── Desktop Mega Menu ── */}
        {solutionsOpen && (
          <div
            className="solutions-mega"
            style={styles.megaPanel}
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <div style={styles.megaInner}>
              {solutionGroups.map((group) => (
                <div key={group.title}>
                  <div style={styles.megaGroupTitle}>{group.title}</div>
                  {group.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="mega-item"
                      style={styles.megaItem}
                    >
                      <span style={styles.megaIconBox}>
                        <Icon name={item.icon} />
                      </span>
                      <span>
                        <span style={styles.megaItemTitle}>{item.name}</span>
                        <span style={styles.megaItemText}>{item.text}</span>
                      </span>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Mobile Dropdown Menu ── */}
        <div className="header-mobile-menu" style={styles.mobileMenu}>
          <div style={styles.mobileMenuInner}>
            <a href="/" style={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
              Home
            </a>

            {/* Mobile Solutions accordion */}
            <button
              style={styles.mobileSolutionsBtn}
              onClick={() => setMobileSolutionsOpen((v) => !v)}
              aria-expanded={mobileSolutionsOpen}
            >
              Solutions
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#374151"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: mobileSolutionsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <div style={styles.mobileSolutionsPanel}>
              {solutionGroups.map((group) => (
                <div key={group.title}>
                  <div style={styles.mobileGroupTitle}>{group.title}</div>
                  <div style={styles.mobileSolutionGrid}>
                    {group.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        style={styles.mobileSolutionItem}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span style={styles.megaIconBox}>
                          <Icon name={item.icon} />
                        </span>
                        <span style={styles.mobileSolutionTitle}>{item.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a href="/pricing" style={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
              Pricing
            </a>
            <a
              href="https://wa.me/919699164131"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.mobileLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
