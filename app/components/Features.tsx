'use client';

import React, { useState, useRef, useEffect } from 'react';

// ─── ICONS (SVG) ──────────────────────────────────────────
type IconProps = React.SVGProps<SVGSVGElement>;

const EstimateIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M8 7h8M8 11h8M8 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const OrderIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 6h18l-2 10H5L3 6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="9" cy="20" r="1.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="17" cy="20" r="1.5" stroke="currentColor" strokeWidth="2" />
    <path d="M3 6L1.5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ThemeIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M12 3c2.5 3 4 6 4 9s-1.5 6-4 9" stroke="currentColor" strokeWidth="2" />
    <path d="M12 3c-2.5 3-4 6-4 9s1.5 6 4 9" stroke="currentColor" strokeWidth="2" />
    <path d="M3 12h18" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const ExpenseIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M2 10h20" stroke="currentColor" strokeWidth="2" />
    <path d="M6 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const InventoryIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 7l8-4 8 4-8 4-8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M4 7v10l8 4V11" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M20 7v10l-8 4V11" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const GSTIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M3 9h18" stroke="currentColor" strokeWidth="2" />
    <path d="M9 9v11" stroke="currentColor" strokeWidth="2" />
    <path d="M7 13h4M7 16h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ReminderIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 3a6 6 0 0 1 6 6c0 4 2 5 2 5H4s2-1 2-5a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" />
    <path d="M10 21h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 1v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CustomerIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const VendorIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
    <path d="M3 20c0-3 2.5-5.5 6-5.5s6 2.5 6 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M15 15c2 0 4 1.5 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AnalyticsIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 20V10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M9 20V6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M14 20V12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M19 20V4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const MultiUserIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M2 20c0-2.8 2.7-5 6-5 1.2 0 2.4.3 3.3.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 20c0-2.8-2.7-5-6-5-1.2 0-2.4.3-3.3.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const MobileIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="7" y="2" width="10" height="20" rx="2.5" stroke="currentColor" strokeWidth="2" />
    <path d="M10 5h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
  </svg>
);

// ─── FEATURE DATA ─────────────────────────────────────────
const featuresList = [
  {
    id: 1,
    title: 'Send Estimate and Quotations',
    Icon: EstimateIcon,
    contentHeading: 'Send Estimate and Quotations',
    contentBody: `Using our free billing software, you can easily create useful documents. It includes quotations, estimates, and accurate GST invoices. Inbuilt features in the GST billing app allow you to send quotes/estimates to customers anytime. You can send them directly through WhatsApp, email, SMS, or by printing.

Vyapar billing software for small businesses provides a professional outlook with instant estimates and quotes. The Vyapar app helps automate most processes. It makes the quotes and estimates error-free. Additionally, you can set up a due date for tracking invoices seamlessly.

Further, you can convert your estimates and quotations into sales invoices anytime. All you need is the Vyapar software for billing and it’s done in a few clicks. Vyapar free billing software offers the business a complete option for quickly saving more time, getting instant quotes. Using the accounting software, you can manage your business with higher productivity.

The billing app brings professionalism for your valued customers to attract them back. Choosing advanced Software for GST billing is one of the best investments for your business. Our Billing Software helps simplify estimates and quotations.`,
  },
  {
    id: 2,
    title: 'Track Orders',
    Icon: OrderIcon,
    contentHeading: 'Track Orders',
    contentBody: `Creating sales and purchase orders is easier and faster with our advanced GST Compliant GST Software. It helps set up a due date for tracking orders seamlessly. With this GST Accounting and Billing Software, we get an auto stock adjustment. It helps ensure the availability of inventory items.

Having tracking features is pretty helpful for fulfilling orders on time and avoiding unnecessary losses. You can save time with tracking and use it to perform other day to day tasks. It enables better customer satisfaction. You can attach a tax invoice to an order and track if payment is due using the app.

Using our GST billing app, it is easier to improve your purchase/sale order formats. The Vyapar App provides various options, including Word, PDF, and Excel. Using our GST invoicing software, you can save labour costs and efforts. You can save time by converting orders to sale/purchase invoices using automation.

You can track open, closed, and overdue orders using our free billing app. It makes it a perfect choice for businesses. Using these features makes the entire tracking process seamless for businesses. In short, it helps improve the performance of employees.`,
  },
  {
    id: 3,
    title: 'Choose The Best Themes',
    Icon: ThemeIcon,
    contentHeading: 'Choose The Best Themes',
    contentBody: `Maintaining and sharing professional invoices with your clients can improve your brand’s Identity. The GST Billing App has two invoice themes for thermal printers. Also, it has twelve invoice themes for regular printers.

With this GST invoice software, you can quickly improve the look of your invoice Using available customisation options is seamless. You can neatly prepare the invoice for your client. Business bills generated can better impress a client.

The Billing App for GST is the best option for your accounting inventory. It is very easy to handle. Choose from the best GST invoice formats to meet your business requirements. Most businesses choose our free GST billing software to help present a professional image. It is an ideal way to build a positive brand image.

This free billing app is efficient for quickly gaining the highest invoice standard. It provides multiple theme options for thermal and regular printers. GST Invoicing Software is suitable, and all themes are fully customisable. A business can use it for all types of commercial purposes. The list includes retailers, pharmaceutical businesses, gyms, restaurants, and many other businesses.`,
  },
  {
    id: 4,
    title: 'Record Business Expenses',
    Icon: ExpenseIcon,
    contentHeading: 'Record Business Expenses',
    contentBody: `Tracking and recording all expenses in the business is important for accounting and tax filing. It is easier to follow the money spent and create an accurate report with the GST billing software.

Our free billing app is an efficient option for recording expenses. Businesses can easily optimise their business expenditure to save more money. With our free GST billing software, you can record both GST and non-GST expenses.

Further, Vyapar billing solutions come with various benefits over competitors. It helps you reduce costs and maximise sales. The billing software is an efficient option for quickly recording outstanding expenses. It helps in tracking them in the future, too.

Our free accounting software is suitable for growing businesses. It helps keep their finances in check. By recording the expenses using GST software, the company can optimise the expenditure. It helps save money. Moreover, keeping track of costs will help build better strategies. It will result in better profitability for the business.`,
  },
  {
    id: 5,
    title: 'Accounts Receivable and Payables',
    Icon: InventoryIcon,
    contentHeading: 'Accounts Receivable and Payables',
    contentBody: `A professional free billing and accounting software lets users keep all the transaction details and track business cash flow seamlessly. Now you have a better way of keeping your transaction details safe.

Free GST Invoicing Software allows you to track party-wise receivables and payables. Using the business dashboard in the GST mobile app, you can track the money you have to receive and the money you need to pay in the Vyapar app.

You can easily track and observe who didn’t pay you back. You can set payment reminders to collect dues from these customers on time. You can send free payment reminders to any party via WhatsApp, SMS, and email. You can provide all types of online payment solutions to collect dues seamlessly. Further, it will allow you to save time for your day to day tasks.

Also, with the bulk payment reminder feature, you can save time by sending payment reminders to all your customers in bulk at once. The GST Billing and invoicing software performs automated calculations. It helps track accounts receivable and payables seamlessly.

Using the cash flow management system by Vyapar enables you to avoid taking too much debt and revisit your business plan, as it indicates an early sign of issues in cash flow. Further, you can also use Vyapar’s GST billing app to perform party-to-party balance transfers.`,
  },
  {
    id: 6,
    title: 'Track Delivery Challan',
    Icon: GSTIcon,
    contentHeading: 'Track Delivery Challan',
    contentBody: `Get acknowledgement upon delivery with the “Delivery Challan” of Vyapar. Create a delivery challan format and attach it to your consignment using this free GST invoicing app.

You can ensure your goods have reached customers safely by tracking delivery challans. Our GST billing software helps you track your consignments easily and helps provide instructions if they get misplaced. Our ultimate free GST Invoicing Software helps manage consignor and consignee details seamlessly.

You can include the terms and conditions of the order to avoid disputes and bring more clarity to the scope of the order. This process makes the business run smoothly and is helpful for the customers to get the consignment safely.

Converting the delivery challans into bills is also a pretty efficient option, as it helps adjust auto stock. Maintain all the records of delivery acknowledgement with the GST billing & Accounting software. It is an easier way of running a business with major productivity goals.

You can convert your delivery challans into invoices when the consignment reaches the customer. You can do it using the free billing app by Vyapar. It will allow you to receive payments using multiple payment options. To avoid delayed dues collection, you can offer both offline and online payment solutions through the tax invoice.`,
  },
  {
    id: 7,
    title: 'Link Your Bank Accounts',
    Icon: ReminderIcon,
    contentHeading: 'Link Your Bank Accounts',
    contentBody: `Businesses can easily add, manage, and track online and offline payments quickly. If they opt for an easy-to-use free GST billing app for mobile, the tasks get easier. Whether your revenue is from the banks or e-wallets, you can seamlessly enter data into the free billing software.

You can send or receive money using bank accounts and perform bank-to-bank transfers for seamless cash flow management. So, it is ideal for businesses with all the cash-ins and cash-outs using the Vyapar invoicing app.

A business account in your bank needs to be added to the GST Accounting Software to use the bank accounts feature within the app. You can easily manage credit cards and OD and loan accounts using the Vyapar app. This process is the most suitable option for keeping the complete bank account book without hassle. Further, it allows you to withdraw or deposit money in your bank accounts seamlessly.

Free invoicing & accounting software can also be accessed anywhere with internet connectivity from your mobile. Free accounting software by Vyapar helps you adjust the amount manually and manage cheque payments.

The Vyapar App has open cheques, which allow the user to make a quick deposit or withdraw and close them quickly. Along with many other payment options available in the app, we also allow you to keep track of cheque payments.`,
  },
  {
    id: 8,
    title: 'Create 50+ Business Reports',
    Icon: CustomerIcon,
    contentHeading: 'Create 50+ Business Reports',
    contentBody: `Businesses are required to make informed decisions to ensure a consistent growth trajectory. Use 50+ business reports created using our GST billing and accounting software for all your business requirements.

Vyapar accounting software comes with professional balance sheet formats. Using Vyapar extensively increases your business’s operational efficiency as you can easily export the reports in PDF or Excel.
• Accounting and management
• Billing and e-payments
• GST Reports and taxation

Users can easily view and analyse the data instantly using our free GST Invoicing & Accounting Software. You can create graphical reports for tracking sales and expenses using the app. This free software analyses accurate business details, accounts, and many more; it is also an efficient way to quickly analyse the business’s profit. Various reports, such as:
• GSTR 1 format report
• GSTR 3B format report
• GST-related reports
• Balance Sheet
• Profit & Loss`,
  },
  {
    id: 9,
    title: 'GST Invoicing / Billing',
    Icon: VendorIcon,
    contentHeading: 'GST Invoicing / Billing',
    contentBody: `Our all-in-one free GST billing software is an excellent addition to your business as it helps you automate your billing requirements. It is pretty efficient in assisting medium and small enterprises to save more time in accounting.

With the help of free billing software with GST, business owners could efficiently perform various tasks, including GST return filing, inventory management, invoicing, and billing. Our free accounting app allows businesses to customise the fields per their unique requirements.

You can use the app to generate GST invoices for your clients within 20 seconds and print/share them with customers. Bills are mainly recommended in the GST invoice format, and you can create them using our GST Software for billing.

You can use the barcode billing software and easily scan to speed up your billing process, and shortcut keys can help you do redundant tasks faster. “Bill wise payment” in the Vyapar app is one of the essential features, as it is pretty easy to link your payments with your sales invoices.

The free GST mobile app creates multiple parties to manage all clients seamlessly. With the help of this feature, it is easier to track all the due dates in the invoice and track old invoices anytime. The Vyapar app allows any business to identify any overdue payments quickly.`,
  },
  {
    id: 10,
    title: 'Automatic Data Backup',
    Icon: AnalyticsIcon,
    contentHeading: 'Automatic Data Backup',
    contentBody: `GST billing & accounting Software is 100% secure, and you can easily store your data accurately. Our free app lets you keep your data secure by creating local, external or online Google Drive backups.

You can easily use this GST Invoicing & Accounting Software to recover data quickly. The data is encrypted with added security, and the Vyapar app is an advanced free invoicing & accounting software.

Vyapar GST billing software in India comes with a hassle-free backup system with the “auto-backup” feature. After activating this mode on the Vyapar app, an automatic backup is created every day, so getting all your data backup is easier, so you would not lose anything.

Most businesses in India have used this free accounting and invoicing software to make the job quick with added data security. The app has an encryption system that allows it to keep the data accessible to the owner only, to enhance security further.

Anyone in the Vyapar team cannot use your business data, and thus it makes your data secure for future reference. Using the GST billing app, you can create data backups per your requirement and help ensure the security of your data using multiple backup options.`,
  },
  {
    id: 11,
    title: 'Laser and Thermal Printer Compatibility',
    Icon: MultiUserIcon,
    contentHeading: 'Laser and Thermal Printer Compatibility',
    contentBody: `Whether you require your invoice in the perfect format instead of bill format or Excel format, this free billing software is the best. Vyapar is compatible with thermal and regular (laser) printers and can help you get your desired printout within minutes.

Vyapar’s invoicing and accounting software/app is an efficient way to print your invoices and Bills. Now you have the better option to quickly generate the prints in all suitable size options, including regular paper size A4 & A5, thermal paper size 2” & 3”, and other custom paper size options.

Connect our app with your regular/thermal printer via Bluetooth or plug-in to start printing your invoices. You can use the Vyapar app to create and send a professional invoice to your customers. You don’t need to print, and use digital methods like e-mail, SMS, or WhatsApp.

Using the free GST invoicing app, you can choose from multiple Excel, Word, or PDF formats, create an invoice with complete customisation, and print it out for your customers. The process is seamless, and charges have been reduced to an all-time low in the last few years. You can use regular and thermal printers to print out the invoice and hand it over to clients.`,
  },
  {
    id: 12,
    title: 'Online Business Store',
    Icon: MobileIcon,
    contentHeading: 'Online Business Store',
    contentBody: `Set up your online store within a few hours using the Vyapar GST billing software. Using our billing app, you can list all the services/products you sell to your customers online, and it will help you present a catalogue of all the services/products you sell and boost your sales online.

Also, Vyapar billing software does not add any additional charges for using online store features that help you take your business online. You can send the link to your online store to your customers, and using the link, they can place orders with you online and pick up the products from your store once you have them packed.

Using the online store feature in the GST billing and invoicing app for your business will help you reduce waiting time at the store counter, as you will have the package packed for your customers before they reach the store. You can bring in more customers in your locality by taking your business online using the Vyapar online store.

Using the online store is the best way to help everyone in your locality by providing doorstep or pick-up services from your store. It helps increase the sales and hence the growth of the business. Using the GST billing software, you can update your online store anytime.`,
  },
];

// ─── COMPONENT ────────────────────────────────────────────
const FeatureExplainer: React.FC = () => {
  const [activeId, setActiveId] = useState(featuresList[0].id);
  const activeFeature = featuresList.find((f) => f.id === activeId)!;
  const sliderRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<{ [key: number]: HTMLButtonElement | null }>({});

  // Scroll active pill into view on mobile
  useEffect(() => {
    const pill = pillRefs.current[activeId];
    if (pill && sliderRef.current) {
      const container = sliderRef.current;
      const pillLeft = pill.offsetLeft;
      const pillWidth = pill.offsetWidth;
      const containerWidth = container.offsetWidth;
      const scrollTarget = pillLeft - containerWidth / 2 + pillWidth / 2;
      container.scrollTo({ left: scrollTarget, behavior: 'smooth' });
    }
  }, [activeId]);

  // ─── STYLES ──────────────────────────────────────────────
  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      width: '100%',
      backgroundColor: '#F5F6F8',
      padding: '64px 0',
      fontFamily: "'Poppins', sans-serif",
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 24px',
    },
    sectionHeading: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: 1.3,
      color: '#314259',
      textAlign: 'center',
      margin: 0,
      marginBottom: '48px',
    },

    // ── Desktop two-column ──
    columns: {
      display: 'flex',
      gap: '32px',
      alignItems: 'stretch',
    },

    // ── Left: feature selector list ──
    leftCol: {
      width: '380px',
      flexShrink: 0,
      maxHeight: '520px',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      paddingRight: '8px',
    },
    featureCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      padding: '14px 18px',
      borderRadius: '12px',
      border: '1.5px solid transparent',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      backgroundColor: '#ffffff',
      flexShrink: 0,
    },
    featureCardActive: {
      backgroundColor: '#FEF2F2',
      borderColor: '#ED1A3B',
    },
    featureIconWrap: {
      width: '36px',
      height: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ED1A3B',
      flexShrink: 0,
    },
    featureTitle: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
      fontSize: '15px',
      lineHeight: 1.4,
      color: '#314259',
      margin: 0,
    },
    featureTitleActive: {
      fontWeight: 600,
      color: '#ED1A3B',
    },

    // ── Right: content panel ──
    rightCol: {
      flex: 1,
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '36px 40px',
      maxHeight: '520px',
      overflowY: 'auto',
      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
    },
    contentHeading: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: 1.35,
      color: '#314259',
      margin: 0,
      marginBottom: '20px',
    },
    contentBody: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: 1.8,
      color: '#787878',
      margin: 0,
      whiteSpace: 'pre-line',
    },

    // ── Mobile horizontal slider ──
    mobileSlider: {
      display: 'none',
      overflowX: 'auto',
      gap: '10px',
      paddingBottom: '8px',
      marginBottom: '24px',
      scrollBehavior: 'smooth',
      WebkitOverflowScrolling: 'touch',
    },
    mobilePill: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 18px',
      borderRadius: '50px',
      border: '1.5px solid #e0e0e0',
      backgroundColor: '#ffffff',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      whiteSpace: 'nowrap',
    },
    mobilePillActive: {
      backgroundColor: '#FEF2F2',
      borderColor: '#ED1A3B',
    },
    mobilePillIcon: {
      width: '22px',
      height: '22px',
      color: '#ED1A3B',
      flexShrink: 0,
    },
    mobilePillText: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
      fontSize: '13px',
      color: '#314259',
    },
    mobilePillTextActive: {
      fontWeight: 600,
      color: '#ED1A3B',
    },

    // ── Mobile content ──
    mobileContent: {
      display: 'none',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '28px 24px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
    },
  };

  // ─── RESPONSIVE CSS ──────────────────────────────────────
  const responsiveCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    /* ── Scrollbar styling ── */
    .fe-left-col::-webkit-scrollbar,
    .fe-right-col::-webkit-scrollbar {
      width: 5px;
    }
    .fe-left-col::-webkit-scrollbar-track,
    .fe-right-col::-webkit-scrollbar-track {
      background: transparent;
    }
    .fe-left-col::-webkit-scrollbar-thumb,
    .fe-right-col::-webkit-scrollbar-thumb {
      background: #d1d5db;
      border-radius: 3px;
    }
    .fe-left-col::-webkit-scrollbar-thumb:hover,
    .fe-right-col::-webkit-scrollbar-thumb:hover {
      background: #9ca3af;
    }

    /* Mobile slider scrollbar hide */
    .fe-mobile-slider::-webkit-scrollbar {
      display: none;
    }
    .fe-mobile-slider {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    /* ── Feature card hover ── */
    .fe-card:hover {
      background-color: #FAFAFA !important;
      border-color: #e8e8e8 !important;
    }
    .fe-card-active:hover {
      background-color: #FEF2F2 !important;
      border-color: #ED1A3B !important;
    }

    /* ── Mobile pill hover ── */
    .fe-pill:hover {
      border-color: #c0c0c0 !important;
    }
    .fe-pill-active:hover {
      border-color: #ED1A3B !important;
    }

    /* ── Mobile (default) ── */
    .fe-desktop-columns {
      display: none !important;
    }
    .fe-mobile-slider {
      display: flex !important;
    }
    .fe-mobile-content {
      display: block !important;
    }
    .fe-section-heading {
      font-size: 24px !important;
      margin-bottom: 32px !important;
    }

    /* ── Tablet (600px+) ── */
    @media (min-width: 600px) {
      .fe-section-heading {
        font-size: 28px !important;
      }
    }

    /* ── Desktop (900px+) ── */
    @media (min-width: 900px) {
      .fe-desktop-columns {
        display: flex !important;
      }
      .fe-mobile-slider {
        display: none !important;
      }
      .fe-mobile-content {
        display: none !important;
      }
      .fe-section-heading {
        font-size: 32px !important;
        margin-bottom: 48px !important;
      }
    }

    /* ── Large Desktop (1200px+) ── */
    @media (min-width: 1200px) {
      .fe-section-heading {
        font-size: 36px !important;
      }
    }
  `;

  return (
    <>
      <style>{responsiveCSS}</style>

      <section id="features" style={styles.section} aria-label="Feature details">
        <div style={styles.container}>

          {/* ── Section Heading ── */}
          <h2 className="fe-section-heading" style={styles.sectionHeading}>
            Features of GST Billing and Accounting Software
          </h2>

          {/* ═══════════════════════════════════════════════════
              DESKTOP: Two-column layout
              ═══════════════════════════════════════════════════ */}
          <div className="fe-desktop-columns" style={styles.columns}>

            {/* ── Left: Feature selector ── */}
            <div className="fe-left-col" style={styles.leftCol}>
              {featuresList.map((f) => {
                const isActive = f.id === activeId;
                return (
                  <button
                    key={f.id}
                    className={`fe-card ${isActive ? 'fe-card-active' : ''}`}
                    style={{
                      ...styles.featureCard,
                      ...(isActive ? styles.featureCardActive : {}),
                    }}
                    onClick={() => setActiveId(f.id)}
                    aria-pressed={isActive}
                  >
                    <div style={styles.featureIconWrap}>
                      <f.Icon width={28} height={28} />
                    </div>
                    <span
                      style={{
                        ...styles.featureTitle,
                        ...(isActive ? styles.featureTitleActive : {}),
                      }}
                    >
                      {f.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* ── Right: Content panel ── */}
            <div className="fe-right-col" style={styles.rightCol} key={activeFeature.id}>
              <h3 style={styles.contentHeading}>{activeFeature.contentHeading}</h3>
              <p style={styles.contentBody}>{activeFeature.contentBody}</p>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════
              MOBILE: Horizontal slider + content below
              ═══════════════════════════════════════════════════ */}

          {/* ── Pill slider ── */}
          <div
            className="fe-mobile-slider"
            ref={sliderRef}
            style={styles.mobileSlider}
          >
            {featuresList.map((f) => {
              const isActive = f.id === activeId;
              return (
                <button
                  key={f.id}
                  className={`fe-pill ${isActive ? 'fe-pill-active' : ''}`}
                  ref={(el) => {
                    pillRefs.current[f.id] = el;
                  }}
                  style={{
                    ...styles.mobilePill,
                    ...(isActive ? styles.mobilePillActive : {}),
                  }}
                  onClick={() => setActiveId(f.id)}
                  aria-pressed={isActive}
                >
                  <f.Icon
                    style={styles.mobilePillIcon}
                  />
                  <span
                    style={{
                      ...styles.mobilePillText,
                      ...(isActive ? styles.mobilePillTextActive : {}),
                    }}
                  >
                    {f.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Mobile content ── */}
          <div className="fe-mobile-content" style={styles.mobileContent} key={`m-${activeFeature.id}`}>
            <h3
              style={{
                ...styles.contentHeading,
                fontSize: '20px',
              }}
            >
              {activeFeature.contentHeading}
            </h3>
            <p style={{ ...styles.contentBody, fontSize: '14px' }}>
              {activeFeature.contentBody}
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default FeatureExplainer;