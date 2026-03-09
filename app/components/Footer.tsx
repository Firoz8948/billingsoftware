'use client';

import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const styles: { [key: string]: React.CSSProperties } = {
    footer: {
      width: '100%',
      backgroundColor: '#1f2937',
      color: '#d1d5db',
      fontFamily: "'Poppins', sans-serif",
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '48px 24px 0',
    },
    gridRow: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '40px',
      justifyContent: 'space-between',
    },
    column: {
      flex: '1 1 220px',
      minWidth: '200px',
      marginBottom: '32px',
    },
    logoWrapper: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'flex-start',
      textDecoration: 'none',
      cursor: 'pointer',
      lineHeight: 1.1,
      marginBottom: '16px',
    },
    logoBilling: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '24px',
      color: '#ED1A3B',
      letterSpacing: '1px',
      textTransform: 'uppercase' as const,
    },
    logoSoftware: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: '13px',
      color: '#ED1A3B',
      letterSpacing: '3.5px',
      textTransform: 'uppercase' as const,
    },
    brandDescription: {
      fontSize: '14px',
      color: '#9ca3af',
      lineHeight: 1.7,
      marginTop: '12px',
      maxWidth: '280px',
    },
    columnTitle: {
      fontSize: '16px',
      fontWeight: 600,
      color: '#ffffff',
      marginBottom: '20px',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.5px',
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '12px',
    },
    link: {
      color: '#9ca3af',
      textDecoration: 'none',
      fontSize: '14px',
      fontFamily: "'Poppins', sans-serif",
      transition: 'color 0.2s',
      cursor: 'pointer',
    },
    linkHover: {
      color: '#ED1A3B',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '16px',
    },
    contactIcon: {
      marginTop: '2px',
      flexShrink: 0,
    },
    contactLabel: {
      fontSize: '12px',
      color: '#6b7280',
      fontWeight: 500,
      textTransform: 'uppercase' as const,
      letterSpacing: '0.5px',
      marginBottom: '2px',
    },
    contactValue: {
      fontSize: '14px',
      color: '#d1d5db',
      textDecoration: 'none',
      fontWeight: 500,
    },
    divider: {
      borderTop: '1px solid #374151',
      marginTop: '16px',
    },
    bottomBar: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 24px',
      maxWidth: '1280px',
      margin: '0 auto',
      gap: '12px',
    },
    copyright: {
      fontSize: '13px',
      color: '#6b7280',
      margin: 0,
    },
  };

  const responsiveCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
    .footer-links-row {
      display: contents;
    }
    @media (max-width: 768px) {
      .footer-grid {
        flex-direction: column;
        gap: 8px;
      }
      .footer-column {
        min-width: 100% !important;
      }
      .footer-links-row {
        display: flex !important;
        flex-direction: row !important;
        gap: 24px !important;
        width: 100% !important;
        min-width: 100% !important;
        margin-bottom: 32px;
      }
      .footer-links-row .footer-link-col {
        flex: 1 1 0% !important;
        min-width: 0 !important;
        margin-bottom: 0 !important;
      }
      .footer-bottom-bar {
        flex-direction: column;
        text-align: center;
      }
    }
  `;

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact Us', href: 'https://wa.me/919699164131', external: true },
    { label: 'Download Now', href: 'https://vyaparapp.in/desktop/download/?referrer_code=5J5W', external: true },
  ];

  const resourceLinks = [
    { label: 'Intro', href: '/#hero' },
    { label: 'Services', href: '/#data' },
    { label: 'Features', href: '/#features' },
    { label: 'Benefits', href: '/#benefits' },
    { label: 'FAQs', href: '/#faqs' },
  ];

  const renderNavLink = (item: { label: string; href: string; external?: boolean }) => {
    const isHovered = hoveredLink === item.label;
    const linkStyle = isHovered ? { ...styles.link, ...styles.linkHover } : styles.link;

    if (item.external) {
      return (
        <li key={item.label}>
          <a
            href={item.href}
            style={linkStyle}
            onMouseEnter={() => setHoveredLink(item.label)}
            onMouseLeave={() => setHoveredLink(null)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        </li>
      );
    }

    return (
      <li key={item.label}>
        <a
          href={item.href}
          style={linkStyle}
          onMouseEnter={() => setHoveredLink(item.label)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          {item.label}
        </a>
      </li>
    );
  };

  const phoneIconPath = 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z';

  return (
    <React.Fragment>
      <style>{responsiveCSS}</style>
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div className="footer-grid" style={styles.gridRow}>
            <div className="footer-column" style={styles.column}>
              <a href="/" style={styles.logoWrapper}>
                <span style={styles.logoBilling}>Billing</span>
                <span style={styles.logoSoftware}>Software</span>
              </a>
              <p style={styles.brandDescription}>
                Simplify your invoicing, manage customers, and track payments
                &mdash; all in one powerful billing platform built for modern businesses.
              </p>
            </div>
            <div className="footer-links-row">
              <div className="footer-link-col footer-column" style={styles.column}>
                <h4 style={styles.columnTitle}>Quick Links</h4>
                <ul style={styles.linkList}>
                  {quickLinks.map(renderNavLink)}
                </ul>
              </div>
              <div className="footer-link-col footer-column" style={styles.column}>
                <h4 style={styles.columnTitle}>Resources</h4>
                <ul style={styles.linkList}>
                  {resourceLinks.map(renderNavLink)}
                </ul>
              </div>
            </div>
            <div className="footer-column" style={styles.column}>
              <h4 style={styles.columnTitle}>Customer Care</h4>
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <svg width="20" height="20" fill="none" stroke="#ED1A3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d={phoneIconPath} />
                  </svg>
                </div>
                <div>
                  <div style={styles.contactLabel}>Whatsapp Now</div>
                  <a href="https://wa.me/919699164131" style={styles.contactValue} target="_blank" rel="noopener noreferrer">Click here</a>
                </div>
              </div>
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <svg width="20" height="20" fill="none" stroke="#ED1A3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div style={styles.contactLabel}>Working Hours</div>
                  <div style={styles.contactValue}>Mon &ndash; Sat: 9 AM &ndash; 7 PM</div>
                  <div style={{ fontSize: '13px', color: '#9ca3af', fontWeight: 500 }}>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.divider} />
        <div className="footer-bottom-bar" style={styles.bottomBar}>
          <p style={styles.copyright}>
            &copy; {currentYear} <span style={{ color: '#ED1A3B', fontWeight: 600 }}>Billing Software</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;