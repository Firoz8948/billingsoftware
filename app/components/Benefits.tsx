'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

// ─── ICON SVGs (red outline style) ─────────────────────────
const icons = [
  // 1. Document/Invoice
  <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
  // 2. Shield/Security
  <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>,
  // 3. Clock/Time
  <svg key="3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  // 4. Bar Chart/Reports
  <svg key="4" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
  // 5. Wallet/Payment
  <svg key="5" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>,
  // 6. Users/Team
  <svg key="6" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  // 7. Trending Up/Growth
  <svg key="7" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
  // 8. Settings/Gear
  <svg key="8" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
];

// ─── DATA ─────────────────────────────────────────────────
const benefits = [
  {
    id: 1,
    title: 'Lifetime Free Basic Usage',
    description:
      'Get started with essential billing and invoicing features at absolutely no cost. Perfect for small businesses beginning their digital journey.',
    readMore: `Get started with essential billing and invoicing features at absolutely no cost. Perfect for small businesses beginning their digital journey.

The free tier includes all the fundamental tools you need to manage your day-to-day billing operations. You can create professional invoices, manage your customer database, and track basic expenses without paying a single rupee.

This makes it ideal for startups, freelancers, and small shop owners who want to digitize their billing process without any upfront investment. As your business grows, you can seamlessly upgrade to premium features while keeping all your existing data intact.

The lifetime free model ensures that every business, regardless of size or budget, can access modern billing technology. There are no hidden charges or trial period limitations on the basic features.`,
    icon: icons[0],
  },
  {
    id: 2,
    title: 'Secure Data Backup & Protection',
    description:
      'Your business data is always safe with automatic cloud backups and local storage options. Never worry about losing important records again.',
    readMore: `Your business data is always safe with automatic cloud backups and local storage options. Never worry about losing important records again.

Data security is paramount for any business. The software provides multiple layers of protection including encrypted cloud storage, automatic daily backups, and the option to maintain local copies of your data.

In case of device failure, theft, or accidental deletion, you can restore your complete business data within minutes. The backup system works seamlessly in the background, ensuring your latest transactions are always saved.

Additionally, role-based access control ensures that only authorized personnel can view or modify sensitive business information. This comprehensive security approach gives you peace of mind while managing your finances.`,
    icon: icons[1],
  },
  {
    id: 3,
    title: 'Save Time with Automation',
    description:
      'Automate repetitive tasks like invoice generation, payment reminders, and report creation. Focus on growing your business instead.',
    readMore: `Automate repetitive tasks like invoice generation, payment reminders, and report creation. Focus on growing your business instead.

Manual data entry and repetitive billing tasks can consume hours of your valuable time every day. With built-in automation features, you can set up recurring invoices for regular clients, schedule automatic payment reminders, and generate reports with a single click.

The smart automation engine learns from your billing patterns and suggests optimizations. For example, it can auto-fill customer details, apply standard discounts, and calculate taxes based on product categories.

Businesses using automation features report saving an average of 4-5 hours per week on administrative tasks. This time can be redirected toward customer acquisition, product development, or strategic planning.`,
    icon: icons[2],
  },
  {
    id: 4,
    title: 'Detailed Business Reports',
    description:
      'Generate comprehensive reports including sales analysis, expense tracking, profit margins, and tax summaries at the click of a button.',
    readMore: `Generate comprehensive reports including sales analysis, expense tracking, profit margins, and tax summaries at the click of a button.

Understanding your business performance is crucial for making informed decisions. The reporting module provides over 20 different report types covering every aspect of your business operations.

Key reports include daily sales summaries, monthly revenue trends, customer-wise transaction history, product performance analysis, outstanding payment reports, and GST filing summaries. Each report can be customized with date ranges, filters, and sorting options.

Visual dashboards with charts and graphs make it easy to spot trends and identify areas for improvement. You can export reports in multiple formats including PDF, Excel, and CSV for sharing with your accountant or business partners.`,
    icon: icons[3],
  },
  {
    id: 5,
    title: 'Multiple Payment Options',
    description:
      'Accept payments through cash, UPI, cards, net banking, wallets, and more. Provide convenience to your customers with flexible payment methods.',
    readMore: `Accept payments through cash, UPI, cards, net banking, wallets, and more. Provide convenience to your customers with flexible payment methods.

In today's digital economy, customers expect multiple payment options. The software supports all major payment methods including cash, credit cards, debit cards, UPI (Google Pay, PhonePe, Paytm), net banking (NEFT, RTGS, IMPS), and digital wallets.

You can record split payments where a customer pays partially through one method and the remainder through another. QR code-based payments can be generated directly from invoices, making it easy for customers to pay instantly.

The payment tracking system automatically reconciles received payments with outstanding invoices, giving you a clear picture of your cash flow at any time. Payment receipts can be generated and shared with customers via WhatsApp or email.`,
    icon: icons[4],
  },
  {
    id: 6,
    title: 'Multi-User Access & Roles',
    description:
      'Add team members with customized access levels. Assign roles like admin, billing staff, or viewer to maintain control over your business data.',
    readMore: `Add team members with customized access levels. Assign roles like admin, billing staff, or viewer to maintain control over your business data.

As your business grows, you need multiple people to handle different aspects of operations. The multi-user feature allows you to add employees, accountants, and managers with specific permission levels.

You can define exactly what each user can see and do — from creating invoices and managing inventory to viewing financial reports and modifying settings. This ensures data security while enabling collaborative work.

Activity logs track every action performed by each user, providing complete transparency and accountability. You can also set up approval workflows where certain actions require manager authorization before execution.`,
    icon: icons[5],
  },
  {
    id: 7,
    title: 'Business Growth Insights',
    description:
      'Get actionable insights about your best-selling products, peak business hours, customer buying patterns, and revenue growth trends.',
    readMore: `Get actionable insights about your best-selling products, peak business hours, customer buying patterns, and revenue growth trends.

Data-driven decision making is the key to sustainable business growth. The insights module analyzes your transaction data to provide meaningful business intelligence that helps you make smarter decisions.

Discover which products contribute most to your revenue, identify seasonal demand patterns, understand customer purchasing behavior, and track your month-over-month growth. The system also highlights slow-moving inventory and suggests pricing optimizations.

Comparative analysis tools let you benchmark current performance against previous periods. You can set business goals and track your progress with visual indicators. These insights transform raw data into actionable strategies for growing your business.`,
    icon: icons[6],
  },
  {
    id: 8,
    title: 'Easy Setup & Customization',
    description:
      'Get started in minutes with an intuitive setup wizard. Customize invoice templates, business profiles, and tax settings to match your needs.',
    readMore: `Get started in minutes with an intuitive setup wizard. Customize invoice templates, business profiles, and tax settings to match your needs.

Unlike complex enterprise software that requires days of training, this solution is designed for simplicity. The guided setup wizard walks you through the initial configuration in under 10 minutes, covering your business profile, tax settings, and preferences.

Choose from 10+ professionally designed invoice templates that can be customized with your logo, brand colors, terms and conditions, and bank details. You can create different templates for different purposes — estimates, invoices, delivery challans, and receipts.

The settings panel provides granular control over every aspect of the software. Configure tax rates, discount policies, payment terms, notification preferences, and more. Changes take effect immediately, ensuring your workflow always matches your business requirements.`,
    icon: icons[7],
  },
];

const leftBenefits = benefits.slice(0, 4);
const rightBenefits = benefits.slice(4, 8);

// ─── COMPONENT ────────────────────────────────────────────
const BenefitsSection: React.FC = () => {
  const [openPopupId, setOpenPopupId] = useState<number | null>(null);

  const openBenefit = benefits.find((b) => b.id === openPopupId);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (openPopupId !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [openPopupId]);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && openPopupId !== null) {
        setOpenPopupId(null);
      }
    },
    [openPopupId]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const closeModal = () => setOpenPopupId(null);

  // ─── INLINE STYLES ───────────────────────────────────────
  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      width: '100%',
      backgroundColor: '#FFFFFF',
      padding: '70px 0 80px',
      fontFamily: "'Poppins', sans-serif",
    },
    container: {
      maxWidth: '1400px',
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
      margin: '0 0 56px 0',
    },
    threeColGrid: {
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
    },
    sideColumn: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '40px',
    },
    centerColumn: {
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    centerImageWrapper: {
      width: '350px',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 12px 40px rgba(0,0,0,0.10)',
    },

    // ── Benefit Item ──
    benefitItem: {
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start',
    },
    iconBox: {
      width: '52px',
      height: '52px',
      minWidth: '52px',
      borderRadius: '14px',
      border: '1.5px solid #FDDDE3',
      backgroundColor: '#FFF5F7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    itemContent: {
      display: 'flex',
      flexDirection: 'column' as const,
    },
    itemTitle: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '1.4',
      color: '#314259',
      margin: '0 0 6px 0',
    },
    itemDescription: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: '13.5px',
      lineHeight: '1.7',
      color: '#787878',
      margin: '0 0 10px 0',
    },
    readMoreTrigger: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '13.5px',
      color: '#ED1A3B',
      cursor: 'pointer',
      userSelect: 'none' as const,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      transition: 'opacity 0.2s ease',
      background: 'none',
      border: 'none',
      padding: 0,
    },

    // ── Modal Overlay ──
    overlay: {
      position: 'fixed' as const,
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 9998,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      animation: 'benefitFadeIn 0.25s ease',
    },
    modal: {
      position: 'relative' as const,
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      width: '100%',
      maxWidth: '640px',
      maxHeight: '80vh',
      display: 'flex',
      flexDirection: 'column' as const,
      boxShadow: '0 24px 80px rgba(0, 0, 0, 0.18)',
      animation: 'benefitSlideUp 0.3s ease',
      overflow: 'hidden',
    },
    modalHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '16px',
      padding: '24px 28px 16px 28px',
      borderBottom: '1px solid #f0f0f0',
      flexShrink: 0,
    },
    modalHeading: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '1.4',
      color: '#314259',
      margin: 0,
    },
    closeBtn: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      border: 'none',
      backgroundColor: '#F5F6F8',
      color: '#555555',
      fontSize: '20px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'background-color 0.2s ease, color 0.2s ease',
    },
    modalBody: {
      padding: '20px 28px 28px 28px',
      overflowY: 'auto' as const,
      fontFamily: "'Poppins', sans-serif",
      fontSize: '14.5px',
      lineHeight: '1.8',
      color: '#555555',
      whiteSpace: 'pre-line' as const,
    },

    // ── Mobile stacked list ──
    mobileList: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '32px',
    },
  };

  // ─── RESPONSIVE CSS ──────────────────────────────────────
  const responsiveCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    @keyframes benefitFadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes benefitSlideUp {
      from { opacity: 0; transform: translateY(40px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    /* ── Mobile defaults ── */
    .benefits-section-heading {
      font-size: 26px !important;
      margin-bottom: 36px !important;
    }

    .benefits-three-col {
      flex-direction: column !important;
      gap: 36px !important;
    }

    .benefits-center-col {
      order: -1 !important;
    }

    .benefits-center-image-wrapper {
      width: 100% !important;
      max-width: 320px !important;
    }

    .benefits-left-col,
    .benefits-right-col {
      width: 100% !important;
    }

    .benefits-read-more:hover {
      opacity: 0.8;
    }

    .benefits-close-btn:hover {
      background-color: #ebebeb !important;
      color: #ED1A3B !important;
    }

    /* ── Modal scrollbar ── */
    .benefits-modal-body::-webkit-scrollbar {
      width: 6px;
    }
    .benefits-modal-body::-webkit-scrollbar-track {
      background: transparent;
    }
    .benefits-modal-body::-webkit-scrollbar-thumb {
      background: #d1d5db;
      border-radius: 3px;
    }
    .benefits-modal-body::-webkit-scrollbar-thumb:hover {
      background: #9ca3af;
    }

    /* ── Modal mobile ── */
    .benefits-modal {
      max-width: 100% !important;
      max-height: 90vh !important;
      border-radius: 16px !important;
      margin: 0 8px;
    }
    .benefits-modal-header {
      padding: 20px 20px 14px 20px !important;
    }
    .benefits-modal-heading {
      font-size: 18px !important;
    }
    .benefits-modal-body {
      padding: 16px 20px 24px 20px !important;
      font-size: 14px !important;
    }

    /* ── Tablet (600px+) ── */
    @media (min-width: 600px) {
      .benefits-section-heading {
        font-size: 32px !important;
        margin-bottom: 44px !important;
      }
      .benefits-center-image-wrapper {
        max-width: 350px !important;
      }
      .benefits-modal {
        max-width: 560px !important;
        margin: 0;
      }
      .benefits-modal-header {
        padding: 24px 28px 16px 28px !important;
      }
      .benefits-modal-heading {
        font-size: 20px !important;
      }
      .benefits-modal-body {
        padding: 20px 28px 28px 28px !important;
        font-size: 14.5px !important;
      }
    }

    /* ── Desktop (960px+) ── */
    @media (min-width: 960px) {
      .benefits-section-heading {
        font-size: 38px !important;
        margin-bottom: 56px !important;
      }

      .benefits-three-col {
        flex-direction: row !important;
        gap: 40px !important;
        align-items: center !important;
      }

      .benefits-center-col {
        order: 0 !important;
      }

      .benefits-center-image-wrapper {
        width: 350px !important;
        max-width: 350px !important;
      }

      .benefits-left-col,
      .benefits-right-col {
        flex: 1 !important;
      }

      .benefits-modal {
        max-width: 640px !important;
      }
    }

    /* ── Large Desktop (1200px+) ── */
    @media (min-width: 1200px) {
      .benefits-section-heading {
        font-size: 42px !important;
      }

      .benefits-three-col {
        gap: 56px !important;
      }

      .benefits-center-image-wrapper {
        width: 380px !important;
        max-width: 380px !important;
      }
    }
  `;

  // ─── RENDER BENEFIT ITEM ─────────────────────────────────
  const renderBenefitItem = (benefit: (typeof benefits)[0]) => (
    <div key={benefit.id} style={styles.benefitItem}>
      {/* Icon */}
      <div style={styles.iconBox}>{benefit.icon}</div>

      {/* Content */}
      <div style={styles.itemContent}>
        <h3 style={styles.itemTitle}>{benefit.title}</h3>
        <p style={styles.itemDescription}>{benefit.description}</p>
        <button
          className="benefits-read-more"
          style={styles.readMoreTrigger}
          onClick={() => setOpenPopupId(benefit.id)}
          aria-haspopup="dialog"
        >
          <span
            style={{
              fontSize: '16px',
              lineHeight: 1,
              display: 'inline-block',
            }}
          >
            +
          </span>
          Read more
        </button>
      </div>
    </div>
  );

  return (
    <>
      <style>{responsiveCSS}</style>

      <section id="benefits" style={styles.section} aria-label="Benefits of GST Billing Software">
        <div style={styles.container}>
          {/* ── Section Heading ── */}
          <h2 className="benefits-section-heading" style={styles.sectionHeading}>
            Top 8 Benefits of GST Billing Software
          </h2>

          {/* ── Three Column Layout ── */}
          <div className="benefits-three-col" style={styles.threeColGrid}>
            {/* Left Column */}
            <div className="benefits-left-col" style={styles.sideColumn}>
              {leftBenefits.map(renderBenefitItem)}
            </div>

            {/* Center Column — Image */}
            <div className="benefits-center-col" style={styles.centerColumn}>
              <div
                className="benefits-center-image-wrapper"
                style={styles.centerImageWrapper}
              >
                <Image
                  src="/assets/benefits.webp"
                  alt="GST Billing Software Benefits"
                  width={380}
                  height={650}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  priority
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="benefits-right-col" style={styles.sideColumn}>
              {rightBenefits.map(renderBenefitItem)}
            </div>
          </div>
        </div>
      </section>

      {/* ── MODAL OVERLAY ── */}
      {openBenefit && (
        <div
          style={styles.overlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="benefit-modal-title"
        >
          <div className="benefits-modal" style={styles.modal}>
            {/* Header */}
            <div className="benefits-modal-header" style={styles.modalHeader}>
              <h3
                id="benefit-modal-title"
                className="benefits-modal-heading"
                style={styles.modalHeading}
              >
                {openBenefit.title}
              </h3>
              <button
                className="benefits-close-btn"
                style={styles.closeBtn}
                onClick={closeModal}
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="benefits-modal-body" style={styles.modalBody}>
              {openBenefit.readMore}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BenefitsSection;