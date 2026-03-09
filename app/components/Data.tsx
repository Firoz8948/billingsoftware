'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

// ─── DATA ─────────────────────────────────────────────────
const features = [
  {
    id: 1,
    heading: 'Create GST Bills online and share them with customers',
    description:
      'Vyapar billing software allows you to generate GST invoices for clients and share them digitally. This tool helps establish a professional brand image with its essential online GST billing features.',
    readMore: `Vyapar billing software allows you to generate GST invoices for clients and share them digitally. This tool helps establish a professional brand image with its essential online GST billing features. You can utilize the Vyapar accounting and billing app to draft invoices, ensuring adherence to Goods and Services Tax regulations in India.

The Vyapar app minimizes accounting mistakes and safeguards your business data. With just a few simple steps, you can create GST invoices using the app's templates. Additionally, the Vyapar app can be accessed both online and offline, making it convenient for small and medium enterprises to follow optimal accounting practices and streamline their bookkeeping processes.

Using our user-friendly invoicing software to comply with GST norms. Vyapar billing software comes with a variety of useful billing solutions. You can create invoices for your customers in a few steps. Further, you can share them with customers using WhatsApp, email, or print methods. You can print them use your printer in A4, A5, 2, and 3 inches variations.

Unlike most software, Vyapar enables you to create invoices within minutes. The best part is that you won't require hours of rigorous training, as it is an easy process. In the app, you can choose from 10+ professional GST invoice formats and billing formats to create professional and unique bills.

Vyapar is a free invoicing software. It comes with various useful billing and accounting features. Using the app makes business management hassle-free for SMEs. With completely customised GST-compliant invoices, your business can stand out among competitors.

The best billing software makes the billing process easier for business owners. To do so, Vyapar comes with a dedicated billing & inventory Android app along with Windows software. The basic features required for everyday accounting are free for Android mobile users. A business owners only have to pay for premium features as a yearly subscription.

Numerous useful features are available in Windows desktop software. Every business can access them during the free trial. So, every business can try out the features before purchasing the subscription. It helps SMEs understand how the app benefits them before paying.`,
    image: '/assets/data1.webp',
  },
  {
    id: 2,
    heading: 'Manage Small Business Inventory Seamlessly',
    description:
      'Vyapar brings the finest inventory management software with incredibly effective features. It helps improve business performance.',
    readMore: `Vyapar brings the finest inventory management software with incredibly effective features. It helps improve business performance. Using the Vyapar app features like business reports, you can track your business's sales. It will help you understand how effectively you have managed your inventory.

As the best GST billing software, Vyapar keeps a record of business data within the app. It makes it hassle-free for business owners to create an effective strategy. Using inventory tracking features helps maximise the utility of inventory space. Our retail store inventory management tools simplify the process of pinpointing underperforming items. This analysis aids in optimizing space by removing infrequently sold products. With our inventory tracking capabilities, you can log and identify items effectively.

Tracking is accomplished through batch numbers, expiration dates, manufacturing dates, slot numbers, and additional details, which are entered into the system upon arrival. This ensures you maintain adequate stock levels for sales when necessary. Additionally, it allows you to keep accurate records, helping to detect any instances of theft promptly.

Using the free billing software by Vyapar, you can check the live status of your inventory. Further, you can set up alerts to place new orders with your suppliers. You can also track delivery challans location-wise to monitor order movements efficiently. Our inventory management app allows you to perform all inventory tracking tasks seamlessly. It helps provide a better customer experience.

Vyapar empowers your employees to take care of your inventory management needs. It does so with various useful features within the app. The instant invoicing app helps you enter all the data stored from sales in an Excel sheet. It helps save time and effort required in various accounting processes.

Using the best GST billing app, you need not do tasks manually as it automates most processes. Further, regular checks and matching data using the app ensure that items do not get misplaced. You can easily carry out a replacement without a delay to avoid business loss. It helps with day to day inventory management requirements.

Another benefit of using the Vyapar software is that it gives you statistics on your sales. Using the app, you can create GST reports. You can prepare a strategy to maximise profits and minimise expenses.`,
    image: '/assets/data2.webp',
  },
  {
    id: 3,
    heading: 'Send Payment Reminders to Recover Dues',
    description:
      'Vyapar\'s free accounting and billing software assists small and medium-sized enterprises (SMEs) in securing prompt payments and managing their cash flow effectively.',
    readMore: `Vyapar's free accounting and billing software assists small and medium-sized enterprises (SMEs) in securing prompt payments and managing their cash flow effectively. The platform enables users to monitor all outstanding payments directly from the business dashboard.

Utilizing the reminder functionality within the app, you can send payment notifications to clients. This feature helps remind them of their total balance due and the payment deadline via WhatsApp and email. By sending these reminders, you can ensure customers remember to make their payments, helping to maintain consistent cash flow and prevent unnecessary delays in your business.

To help your customers pay on time, the best GST billing software by Vyapar comes with a wide range of payment options. It includes cash, credit cards, debit cards, e-wallets, NEFT, RTGS, UPI, QR code, and much more. By providing a range of cash and online payment options, you can provide convenience to customers. It ensures that your customers can pay using the option they see fit for themselves.

Many small and medium business owners have reduced payment delays with the Vyapar billing software's payment reminder feature. The app features collectively to ensure that the dues do not impact the business's cash flow. You can create reports to adjust your business plans according to the available cash flow.

Using the Vyapar billing software is such an easy task. Many business owners rely solely on our small business inventory management software for all their inventory, invoicing, and accounting needs. Customers consider Vyapar as the best GST billing software for small businesses. The app features make it useful for their business. It eliminates the requirement for multiple apps.`,
    image: '/assets/data3.webp',
  },
  {
    id: 4,
    heading: 'GST filing made simpler and faster',
    description:
      'Filing GST can be a difficult task for entrepreneurs, often requiring a lengthy manual process. However, with Vyapar GST billing software, generating GST reports becomes effortless, streamlining the entire filing procedure.',
    readMore: `Filing GST can be a difficult task for entrepreneurs, often requiring a lengthy manual process. However, with Vyapar GST billing software, generating GST reports becomes effortless, streamlining the entire filing procedure.

Many business owners dedicate considerable time and energy each month to ensure compliance with tax regulations, which involves monitoring their invoices, expenses, and accounting records. Additionally, they need to manually input this data to submit their GST returns.

Vyapar billing and accounting software revolutionizes this process by enabling users to produce specific GSTR reports and harnessing automation for time-saving benefits. The app allows you to generate various reports, including GSTR1, GSTR2, GSTR3, GSTR4, and GSTR9, directly from the platform.

Using professional accounting software to create GST reports saves time for every business owner. With this, they can rely on automation to complete all accounting tasks without errors and simply send data to your CA/Tax Professional using Vyapar TaxOne for effortless GST filing.

As you create GST bills throughout the year, the app automatically detects the GST applicable to the product. It helps comply with GST laws to ensure that every transaction is recorded. Further, it ensures correct GST figures are entered. The billing software further eliminates manual errors with automation. It is beneficial when you cannot hire an extra employee to care for your accounting.

To ensure that you can file GST timely and no data loss happens, you can keep a backup. Using Vyapar, your business data is safe. It makes you feel stress-free when you have to file GST, as you can restore data anytime. Using Vyapar, you can create backups in both Google Drive and local storage to keep it secure.`,
    image: '/assets/data4.webp',
  },
];

// ─── COMPONENT ────────────────────────────────────────────
const FeatureSection: React.FC = () => {
  const [openPopupId, setOpenPopupId] = useState<number | null>(null);

  const openFeature = features.find((f) => f.id === openPopupId);

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

  const togglePopup = (id: number) => {
    setOpenPopupId((prev) => (prev === id ? null : id));
  };

  const closeModal = () => setOpenPopupId(null);

  // ─── INLINE STYLES ───────────────────────────────────────
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
      display: 'flex',
      flexDirection: 'column',
      gap: '64px',
    },
    row: {
      display: 'flex',
      alignItems: 'center',
      gap: '48px',
    },
    imageCol: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageWrapper: {
      width: '100%',
      maxWidth: '520px',
      borderRadius: '16px',
      overflow: 'hidden',
    },
    contentCol: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    heading: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '28px',
      lineHeight: '1.35',
      color: '#314259',
      margin: 0,
      marginBottom: '16px',
    },
    description: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: '1.75',
      color: '#787878',
      margin: 0,
      marginBottom: '20px',
    },
    readMoreTrigger: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '15px',
      color: '#ED1A3B',
      cursor: 'pointer',
      userSelect: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      transition: 'opacity 0.2s ease',
      background: 'none',
      border: 'none',
      padding: 0,
    },
    actionsRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginTop: '4px',
    },
    downloadLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
      fontSize: '14px',
      color: '#314259',
      textDecoration: 'none',
      cursor: 'pointer',
    },

    // ── Modal Overlay ──
    overlay: {
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 9998,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      animation: 'fadeIn 0.25s ease',
    },

    // ── Modal Card ──
    modal: {
      position: 'relative',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      width: '100%',
      maxWidth: '640px',
      maxHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 24px 80px rgba(0, 0, 0, 0.18)',
      animation: 'slideUp 0.3s ease',
      overflow: 'hidden',
    },

    // ── Modal Header ──
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

    // ── Modal Body ──
    modalBody: {
      padding: '20px 28px 28px 28px',
      overflowY: 'auto',
      fontFamily: "'Poppins', sans-serif",
      fontSize: '14.5px',
      lineHeight: '1.8',
      color: '#555555',
      whiteSpace: 'pre-line',
    },
  };

  // ─── RESPONSIVE CSS ──────────────────────────────────────
  const responsiveCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(40px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    /* ── Mobile: single column, image always first ── */
    .feature-row {
      flex-direction: column !important;
      gap: 24px !important;
    }
    .feature-row .feature-image-col {
      order: 1 !important;
    }
    .feature-row .feature-content-col {
      order: 2 !important;
    }
    .feature-heading {
      font-size: 28px !important;
    }

    /* ── Modal mobile adjustments ── */
    .feature-modal {
      max-width: 100% !important;
      max-height: 90vh !important;
      border-radius: 16px !important;
      margin: 0 8px;
    }
    .feature-modal-header {
      padding: 20px 20px 14px 20px !important;
    }
    .feature-modal-heading {
      font-size: 18px !important;
    }
    .feature-modal-body {
      padding: 16px 20px 24px 20px !important;
      font-size: 14px !important;
    }

    /* ── Read more hover ── */
    .feature-read-more:hover {
      opacity: 0.8;
    }

    /* ── Close button hover ── */
    .feature-close-btn:hover {
      background-color: #ebebeb !important;
      color: #ED1A3B !important;
    }

    /* ── Custom scrollbar for modal body ── */
    .feature-modal-body::-webkit-scrollbar {
      width: 6px;
    }
    .feature-modal-body::-webkit-scrollbar-track {
      background: transparent;
    }
    .feature-modal-body::-webkit-scrollbar-thumb {
      background: #d1d5db;
      border-radius: 3px;
    }
    .feature-modal-body::-webkit-scrollbar-thumb:hover {
      background: #9ca3af;
    }

    /* ── Tablet (600px+) ── */
    @media (min-width: 600px) {
      .feature-heading {
        font-size: 28px !important;
      }
      .feature-modal {
        max-width: 560px !important;
        margin: 0;
      }
      .feature-modal-header {
        padding: 24px 28px 16px 28px !important;
      }
      .feature-modal-heading {
        font-size: 20px !important;
      }
      .feature-modal-body {
        padding: 20px 28px 28px 28px !important;
        font-size: 14.5px !important;
      }
    }

    /* ── Desktop (900px+) ── */
    @media (min-width: 900px) {
      .feature-row {
        flex-direction: row !important;
        gap: 48px !important;
      }
      .feature-row .feature-image-col {
        order: 0 !important;
      }
      .feature-row .feature-content-col {
        order: 0 !important;
      }
      .feature-row-reversed {
        flex-direction: row-reverse !important;
      }
      .feature-heading {
        font-size: 44px !important;
      }
      .feature-modal {
        max-width: 640px !important;
      }
    }

    /* ── Large Desktop (1100px+) ── */
    @media (min-width: 1100px) {
      .feature-heading {
        font-size: 44px !important;
      }
    }
  `;

  return (
    <>
      <style>{responsiveCSS}</style>

      <section id="data" style={styles.section} aria-label="Product features">
        <div style={styles.container}>
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={feature.id}
                className={`feature-row ${isReversed ? 'feature-row-reversed' : ''}`}
                style={styles.row}
              >
                {/* ── Image Column ── */}
                <div className="feature-image-col" style={styles.imageCol}>
                  <div style={styles.imageWrapper}>
                    <Image
                      src={feature.image}
                      alt={feature.heading}
                      width={520}
                      height={340}
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </div>
                </div>

                {/* ── Content Column ── */}
                <div className="feature-content-col" style={styles.contentCol}>
                  <h2 className="feature-heading" style={styles.heading}>
                    {feature.heading}
                  </h2>

                  <p style={styles.description}>{feature.description}</p>

                  <div style={styles.actionsRow}>
                    {/* Read More trigger */}
                    <button
                      className="feature-read-more"
                      style={styles.readMoreTrigger}
                      onClick={() => togglePopup(feature.id)}
                      aria-haspopup="dialog"
                    >
                      <span
                        style={{
                          fontSize: '18px',
                          lineHeight: 1,
                          display: 'inline-block',
                        }}
                      >
                        +
                      </span>
                      Read more
                    </button>

                    {/* Download Vyapar link */}
                    <a
                      href="https://vyaparapp.in/desktop/download/?referrer_code=5J5W"
                      style={styles.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── MODAL OVERLAY ── */}
      {openFeature && (
        <div
          style={styles.overlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="feature-modal-title"
        >
          <div className="feature-modal" style={styles.modal}>
            {/* ── Header ── */}
            <div className="feature-modal-header" style={styles.modalHeader}>
              <h3
                id="feature-modal-title"
                className="feature-modal-heading"
                style={styles.modalHeading}
              >
                {openFeature.heading}
              </h3>
              <button
                className="feature-close-btn"
                style={styles.closeBtn}
                onClick={closeModal}
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            {/* ── Body ── */}
            <div className="feature-modal-body" style={styles.modalBody}>
              {openFeature.readMore}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeatureSection;