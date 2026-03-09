'use client';

import React, { useState, useCallback, useEffect } from 'react';

// ─────────────────── FAQ DATA ───────────────────────────────────────
const faqItems = [
  {
    id: 1,
    q: 'What is the GST Bill?',
    a: `A GST Bill is simply a tax invoice created by a seller when goods or services are sold under India’s Goods and Services Tax (GST) system. It’s an official document that lists all the important details of a transaction, like the seller’s and buyer’s names, GSTIN numbers, date, invoice number, product or service description, quantity, price, and the GST charged on it.

In simple terms, a GST bill is more than just a bill, it’s a record of a genuine sale that ensures taxes are properly accounted for and can be claimed as input tax credit (ITC) by businesses. Every registered business under GST must issue this bill whenever it makes a sale.`,
  },
  {
    id: 2,
    q: 'Which is the best billing software?',
    a: `Vyapar app is the best billing software available for SMEs in India. The Vyapar app provides access to a range of useful features. They can make the business management process seamless for business owners.

Using our billing tool, you can save a lot of time and effort required in creating GST invoices. You can use automation tools to manage inventory using tracking features. Further, you can create reports using stored data, and much more.`,
  },
  {
    id: 3,
    q: 'What is billing software?',
    a: `Billing software is a tool that helps businesses create bills and invoices quickly without manual work. Instead of writing everything by hand, the software automatically adds item details, calculates totals, taxes, discounts, and records the transaction for future use.

In simple words, billing software makes the process of selling, invoicing, and keeping track of payments much easier. It helps you avoid mistakes, saves time, and keeps all your billing records organized in one place.

Whether you run a shop, service business, or online store, billing software helps you:

• Create professional invoices  
• Track sales and payments  
• Manage customers and items  
• Maintain clean, accurate records or reports  
• Understand your business performance`,
  },
  {
    id: 4,
    q: 'How much does billing software cost?',
    a: `You can use Vyapar billing software on Android devices for free anytime. All businesses can get a 7 days free trial with the desktop version. Vyapar billing software only charges for providing access to premium features. You can try premium features for free using trial access in the desktop billing software.`,
  },
  {
    id: 5,
    q: 'Is there free GST billing software?',
    a: `Yes, you can get the best GST billing software by Vyapar for free. You can download the app on Android devices at zero cost and use it for your daily business requirements. You do not need to pay to use the app’s basic features.`,
  },
  {
    id: 6,
    q: 'Which software is used for GST billing?',
    a: `Vyapar is the best business choice for creating GST bills for customers in India. Over one crore businesses use Vyapar to bill their customers. It is because they trust the Vyapar billing software. Vyapar is the best choice as it comes with a range of useful features that eliminate the requirement to have multiple billing software. It acts as a one stop solution for all business requirements. The best billing solutions make the entire business management process seamless.`,
  },
  {
    id: 7,
    q: 'Which is the best free billing software in India?',
    a: `By having a simple, feature‑rich, and reliable tool for everyday business use. With a simple, easy to use interface and covering all the business management operations such as invoicing, inventory, and accounting, Vyapar stands out as one of the best choices in India for free use.`,
  },
  {
    id: 8,
    q: 'How do I invoice clients for free?',
    a: `You can create GST and non‑GST invoices for your clients. All you need is to use the best billing software by Vyapar. You can download the Vyapar invoicing software. Start by entering new party details. Once done, you can create and send invoices without paying any fees.`,
  },
  {
    id: 9,
    q: 'What is online billing software?',
    a: `Online billing software is used to create bills for customers online. The billing tool is used by businesses to get paid for a contract. The billing software that makes online bills does not require you to download the app. You can go to the online billing software by Vyapar, enter details for the invoice to create GST bills. Once generated, you can send them over to your customers.`,
  },
  {
    id: 10,
    q: 'What is the cheapest billing software?',
    a: `Vyapar brings you the cheapest billing software that comes with various accounting features. You can use the app at a small subscription cost. It helps create professional invoices for customers.

Using affordable billing software, you can reduce the cost of operating your business. After all, Vyapar assists you in various business management tasks.`,
  },
  {
    id: 11,
    q: 'How do I get a computerised GST bill?',
    a: `You can use Vyapar invoice templates to create computerised GST bills for your customers. The invoicing tools and billing software by Vyapar make the entire process seamless. It does not make a dent in your financials, as free templates do not require you to pay.

You can download the Vyapar software, automate your business’s billing process. It will save your employees time by creating computerised bills.`,
  },
  {
    id: 12,
    q: 'What is offline billing software?',
    a: `Offline billing software creates professional GST bills for customers without an active internet connection. An offline billing tool is helpful if you are running a small business in cities like Delhi, Mumbai, or Bengaluru, or in remote regions like hilly and rural areas with poor network connectivity.

Using the offline version helps ensure that customers get an uninterrupted billing experience. The app data remains secure as the business owner can also do local backups. Further, the app can set up automatic backups too.`,
  },
];

// ─────────────────── ACCORDION ICONS ───────────────────────────────────
const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ChevronUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

// ─────────────────── MAIN COMPONENT ─────────────────────────────────────
const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && openId !== null) setOpenId(null);
    },
    [openId]
  );
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // ── INLINE STYLES ───────────────────────────────────────
  const styles: { [k: string]: React.CSSProperties } = {
    section: {
      width: '100%',
      backgroundColor: '#FFFFFF',
      padding: '80px 0 90px',
      fontFamily: "'Poppins', sans-serif",
    },
    container: {
      maxWidth: '1300px',
      margin: '0 auto',
      padding: '0 24px',
    },
    heading: {
      fontWeight: 800,
      fontSize: '38px',
      lineHeight: '1.3',
      color: '#314259',
      textAlign: 'center' as const,
      margin: '0 0 24px',
    },
    paragraph: {
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: '1.8',
      color: '#787878',
      textAlign: 'center' as const,
      maxWidth: '860px',
      margin: '0 auto 56px',
    },

    // ── Accordion ──
    accordionItem: {
      borderBottom: '1px solid #E3E5E8',
      padding: '16px 0',
    },
    questionBtn: {
      width: '100%',
      background: 'none',
      border: 'none',
      textAlign: 'left' as const,
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '1.4',
      color: '#314259',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      padding: '0',
    },
    answer: {
      marginTop: '12px',
      fontWeight: 400,
      fontSize: '14.5px',
      lineHeight: '1.8',
      color: '#555555',
    },

    // ── Mobile spacing ──
    mobileWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },

    // ── Arrow button style ──
    arrow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.2s ease',
    },
  };

  // ── RESPONSIVE CSS ──────────────────────────────────────
  const responsiveCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    /* Mobile defaults */
    .faqs-heading {
      font-size: 26px !important;
      margin-bottom: 18px !important;
    }
    .faqs-paragraph {
      font-size: 14px !important;
      margin-bottom: 36px !important;
      padding: 0 4px !important;
    }
    .faqs-question {
      font-size: 15px !important;
    }
    .faqs-answer {
      font-size: 14px !important;
    }

    /* Tablet (600px+) */
    @media (min-width: 600px) {
      .faqs-heading {
        font-size: 32px !important;
        margin-bottom: 20px !important;
      }
      .faqs-paragraph {
        font-size: 15px !important;
        margin-bottom: 44px !important;
      }
      .faqs-question {
        font-size: 16px !important;
      }
      .faqs-answer {
        font-size: 14.5px !important;
      }
    }

    /* Desktop (960px+) */
    @media (min-width: 960px) {
      .faqs-heading {
        font-size: 38px !important;
        margin-bottom: 24px !important;
      }
      .faqs-paragraph {
        margin-bottom: 56px !important;
      }
      .faqs-question {
        font-size: 16.5px !important;
      }
      .faqs-answer {
        font-size: 15px !important;
      }
    }

    /* Large Desktop (1200px+) */
    @media (min-width: 1200px) {
      .faqs-heading {
        font-size: 42px !important;
      }
    }
  `;

  return (
    <>
      <style>{responsiveCSS}</style>

      <section id="faqs" style={styles.section} aria-label="Frequently asked questions">
        <div style={styles.container}>
          {/* ── Heading ── */}
          <h2 className="faqs-heading" style={styles.heading}>
            GST Billing Software FAQs
          </h2>

          {/* ── FAQ accordion ── */}
          <div className="faqs-wrapper" style={styles.mobileWrapper}>
            {faqItems.map((item) => (
              <div key={item.id} style={styles.accordionItem}>
                <button
                  className="faqs-question"
                  style={styles.questionBtn}
                  onClick={() => toggle(item.id)}
                  aria-expanded={openId === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  {item.q}
                  <span style={styles.arrow}>
                    {openId === item.id ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </button>

                {/* Answer panel */}
                {openId === item.id && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    style={styles.answer}
                  >
                    {item.a.split('\n').map((line, i) => (
                      <p key={i} style={{ margin: '0 0 0.6em' }}>
                        {line}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;