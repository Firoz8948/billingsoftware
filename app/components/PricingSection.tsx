// components/PricingSection.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';

// ─── TYPES ─────────────────────────────────────────────────
type Feature = {
  name: string;
  silver: string | boolean;
  gold: string | boolean;
};

type Plan = {
  tier: 'Silver' | 'Gold';
  originalPrice: number;
  salePrice: number;
  perMonth: string;
  features: Feature[];
  moreCount: number;
  popular?: boolean;
};

type PlanSet = {
  '1year': Plan[];
  '3years': Plan[];
};

type PlatformKey = 'desktopMobile' | 'desktop' | 'mobile';

// ─── DATA ──────────────────────────────────────────────────

const sharedFeatureNames = [
  'Sync data across devices',
  'Create multiple companies',
  'Generate E-way Bills',
  'Remove advertisement on invoices',
  'Set multiple pricing for items',
  'Update Items in bulk',
  'Export data to Tally',
  'Restore deleted transactions',
  'Combine multiple orders/challans into one sale',
  'Accounting Module',
  'Partywise Profit and Loss Report',
  'WhatsApp Connect',
  'Google Profile Manager',
];

const mobileFeatureNames = [
  'Sync data across devices',
  'Create multiple companies',
  'Remove advertisement on invoices',
  'Set multiple pricing for items',
  'Restore deleted transactions',
  'Partywise Profit and Loss Report',
];

const pricingData: Record<PlatformKey, PlanSet> = {
  desktopMobile: {
    '1year': [
      {
        tier: 'Silver',
        originalPrice: 7499,
        salePrice: 4399,
        perMonth: '366.58',
        features: [
          { name: 'Sync data across devices', silver: true, gold: true },
          { name: 'Create multiple companies', silver: '3 companies', gold: '5 companies' },
          { name: 'Generate E-way Bills', silver: '10 per month', gold: 'Unlimited' },
          { name: 'Remove advertisement on invoices', silver: true, gold: true },
          { name: 'Set multiple pricing for items', silver: true, gold: true },
          { name: 'Update Items in bulk', silver: true, gold: true },
          { name: 'Export data to Tally', silver: false, gold: true },
          { name: 'Restore deleted transactions', silver: '2 transactions', gold: 'Unlimited' },
          { name: 'Combine multiple orders/challans into one sale', silver: false, gold: true },
          { name: 'Accounting Module', silver: false, gold: true },
          { name: 'Partywise Profit and Loss Report', silver: false, gold: true },
          { name: 'WhatsApp Connect', silver: false, gold: true },
          { name: 'Google Profile Manager', silver: true, gold: true },
        ],
        moreCount: 16,
      },
      {
        tier: 'Gold',
        originalPrice: 9099,
        salePrice: 4799,
        perMonth: '399.92',
        popular: true,
        features: [
          { name: 'Sync data across devices', silver: true, gold: true },
          { name: 'Create multiple companies', silver: '3 companies', gold: '5 companies' },
          { name: 'Generate E-way Bills', silver: '10 per month', gold: 'Unlimited' },
          { name: 'Remove advertisement on invoices', silver: true, gold: true },
          { name: 'Set multiple pricing for items', silver: true, gold: true },
          { name: 'Update Items in bulk', silver: true, gold: true },
          { name: 'Export data to Tally', silver: false, gold: true },
          { name: 'Restore deleted transactions', silver: '2 transactions', gold: 'Unlimited' },
          { name: 'Combine multiple orders/challans into one sale', silver: false, gold: true },
          { name: 'Accounting Module', silver: false, gold: true },
          { name: 'Partywise Profit and Loss Report', silver: false, gold: true },
          { name: 'WhatsApp Connect', silver: false, gold: true },
          { name: 'Google Profile Manager', silver: true, gold: true },
        ],
        moreCount: 16,
      },
    ],
    '3years': [
      {
        tier: 'Silver',
        originalPrice: 16299,
        salePrice: 9599,
        perMonth: '266.64',
        features: [
          { name: 'Sync data across devices', silver: true, gold: true },
          { name: 'Create multiple companies', silver: '3 companies', gold: '5 companies' },
          { name: 'Generate E-way Bills', silver: '10 per month', gold: 'Unlimited' },
          { name: 'Remove advertisement on invoices', silver: true, gold: true },
          { name: 'Set multiple pricing for items', silver: true, gold: true },
          { name: 'Update Items in bulk', silver: true, gold: true },
          { name: 'Export data to Tally', silver: false, gold: true },
          { name: 'Restore deleted transactions', silver: '2 transactions', gold: 'Unlimited' },
          { name: 'Combine multiple orders/challans into one sale', silver: false, gold: true },
          { name: 'Accounting Module', silver: false, gold: true },
          { name: 'Partywise Profit and Loss Report', silver: false, gold: true },
          { name: 'WhatsApp Connect', silver: false, gold: true },
          { name: 'Google Profile Manager', silver: true, gold: true },
        ],
        moreCount: 16,
      },
      {
        tier: 'Gold',
        originalPrice: 18699,
        salePrice: 9899,
        perMonth: '274.97',
        popular: true,
        features: [
          { name: 'Sync data across devices', silver: true, gold: true },
          { name: 'Create multiple companies', silver: '3 companies', gold: '5 companies' },
          { name: 'Generate E-way Bills', silver: '10 per month', gold: 'Unlimited' },
          { name: 'Remove advertisement on invoices', silver: true, gold: true },
          { name: 'Set multiple pricing for items', silver: true, gold: true },
          { name: 'Update Items in bulk', silver: true, gold: true },
          { name: 'Export data to Tally', silver: false, gold: true },
          { name: 'Restore deleted transactions', silver: '2 transactions', gold: 'Unlimited' },
          { name: 'Combine multiple orders/challans into one sale', silver: false, gold: true },
          { name: 'Accounting Module', silver: false, gold: true },
          { name: 'Partywise Profit and Loss Report', silver: false, gold: true },
          { name: 'WhatsApp Connect', silver: false, gold: true },
          { name: 'Google Profile Manager', silver: true, gold: true },
        ],
        moreCount: 16,
      },
    ],
  },
  desktop: {
    '1year': [
      {
        tier: 'Silver',
        originalPrice: 6399,
        salePrice: 3799,
        perMonth: '316.58',
        features: [
          { name: 'Sync data across devices', silver: true, gold: true },
          { name: 'Create multiple companies', silver: '3 companies', gold: '5 companies' },
          { name: 'Generate E-way Bills', silver: '10 per month', gold: 'Unlimited' },
          { name: 'Remove advertisement on invoices', silver: true, gold: true },
          { name: 'Set multiple pricing for items', silver: true, gold: true },
          { name: 'Update Items in bulk', silver: true, gold: true },
          { name: 'Export data to Tally', silver: false, gold: true },
          { name: 'Restore deleted transactions', silver: '2 transactions', gold: 'Unlimited' },
          { name: 'Combine multiple orders/challans into one sale', silver: false, gold: true },
          { name: 'Accounting Module', silver: false, gold: true },
          { name: 'Partywise Profit and Loss Report', silver: false, gold: true },
          { name: 'WhatsApp Connect', silver: false, gold: true },
          { name: 'Google Profile Manager', silver: true, gold: true },
        ],
        moreCount: 16,
      },
      {
        tier: 'Gold',
        originalPrice: 7699,
        salePrice: 4099,
        perMonth: '341.58',
        popular: true,
        features: [
          { name: 'Sync data across devices', silver: true, gold: true },
          { name: 'Create multiple companies', silver: '3 companies', gold: '5 companies' },
          { name: 'Generate E-way Bills', silver: '10 per month', gold: 'Unlimited' },
          { name: 'Remove advertisement on invoices', silver: true, gold: true },
          { name: 'Set multiple pricing for items', silver: true, gold: true },
          { name: 'Update Items in bulk', silver: true, gold: true },
          { name: 'Export data to Tally', silver: false, gold: true },
          { name: 'Restore deleted transactions', silver: '2 transactions', gold: 'Unlimited' },
          { name: 'Combine multiple orders/challans into one sale', silver: false, gold: true },
          { name: 'Accounting Module', silver: false, gold: true },
          { name: 'Partywise Profit and Loss Report', silver: false, gold: true },
          { name: 'WhatsApp Connect', silver: false, gold: true },
          { name: 'Google Profile Manager', silver: true, gold: true },
        ],
        moreCount: 16,
      },
    ],
    '3years': [
      {
        tier: 'Silver',
        originalPrice: 14699,
        salePrice: 8599,
        perMonth: '238.86',
        features: [
          { name: 'Sync data across devices', silver: true, gold: true },
          { name: 'Create multiple companies', silver: '3 companies', gold: '5 companies' },
          { name: 'Generate E-way Bills', silver: '10 per month', gold: 'Unlimited' },
          { name: 'Remove advertisement on invoices', silver: true, gold: true },
          { name: 'Set multiple pricing for items', silver: true, gold: true },
          { name: 'Update Items in bulk', silver: true, gold: true },
          { name: 'Export data to Tally', silver: false, gold: true },
          { name: 'Restore deleted transactions', silver: '2 transactions', gold: 'Unlimited' },
          { name: 'Combine multiple orders/challans into one sale', silver: false, gold: true },
          { name: 'Accounting Module', silver: false, gold: true },
          { name: 'Partywise Profit and Loss Report', silver: false, gold: true },
          { name: 'WhatsApp Connect', silver: false, gold: true },
          { name: 'Google Profile Manager', silver: true, gold: true },
        ],
        moreCount: 16,
      },
      {
        tier: 'Gold',
        originalPrice: 17099,
        salePrice: 9099,
        perMonth: '252.75',
        popular: true,
        features: [
          { name: 'Sync data across devices', silver: true, gold: true },
          { name: 'Create multiple companies', silver: '3 companies', gold: '5 companies' },
          { name: 'Generate E-way Bills', silver: '10 per month', gold: 'Unlimited' },
          { name: 'Remove advertisement on invoices', silver: true, gold: true },
          { name: 'Set multiple pricing for items', silver: true, gold: true },
          { name: 'Update Items in bulk', silver: true, gold: true },
          { name: 'Export data to Tally', silver: false, gold: true },
          { name: 'Restore deleted transactions', silver: '2 transactions', gold: 'Unlimited' },
          { name: 'Combine multiple orders/challans into one sale', silver: false, gold: true },
          { name: 'Accounting Module', silver: false, gold: true },
          { name: 'Partywise Profit and Loss Report', silver: false, gold: true },
          { name: 'WhatsApp Connect', silver: false, gold: true },
          { name: 'Google Profile Manager', silver: true, gold: true },
        ],
        moreCount: 16,
      },
    ],
  },
  mobile: {
    '1year': [
      {
        tier: 'Silver',
        originalPrice: 1199,
        salePrice: 699,
        perMonth: '58.25',
        features: [
          { name: 'Sync data across devices', silver: true, gold: true },
          { name: 'Create multiple companies', silver: '3 companies', gold: '5 companies' },
          { name: 'Remove advertisement on invoices', silver: true, gold: true },
          { name: 'Set multiple pricing for items', silver: true, gold: true },
          { name: 'Restore deleted transactions', silver: '2 transactions', gold: 'Unlimited' },
          { name: 'Partywise Profit and Loss Report', silver: false, gold: true },
        ],
        moreCount: 16,
      },
      {
        tier: 'Gold',
        originalPrice: 1399,
        salePrice: 799,
        perMonth: '66.58',
        popular: true,
        features: [
          { name: 'Sync data across devices', silver: true, gold: true },
          { name: 'Create multiple companies', silver: '3 companies', gold: '5 companies' },
          { name: 'Remove advertisement on invoices', silver: true, gold: true },
          { name: 'Set multiple pricing for items', silver: true, gold: true },
          { name: 'Restore deleted transactions', silver: '2 transactions', gold: 'Unlimited' },
          { name: 'Partywise Profit and Loss Report', silver: false, gold: true },
        ],
        moreCount: 16,
      },
    ],
    '3years': [
      {
        tier: 'Silver',
        originalPrice: 2999,
        salePrice: 1799,
        perMonth: '49.97',
        features: [
          { name: 'Sync data across devices', silver: true, gold: true },
          { name: 'Create multiple companies', silver: '3 companies', gold: '5 companies' },
          { name: 'Remove advertisement on invoices', silver: true, gold: true },
          { name: 'Set multiple pricing for items', silver: true, gold: true },
          { name: 'Restore deleted transactions', silver: '2 transactions', gold: 'Unlimited' },
          { name: 'Partywise Profit and Loss Report', silver: false, gold: true },
        ],
        moreCount: 16,
      },
      {
        tier: 'Gold',
        originalPrice: 3499,
        salePrice: 1999,
        perMonth: '55.53',
        popular: true,
        features: [
          { name: 'Sync data across devices', silver: true, gold: true },
          { name: 'Create multiple companies', silver: '3 companies', gold: '5 companies' },
          { name: 'Remove advertisement on invoices', silver: true, gold: true },
          { name: 'Set multiple pricing for items', silver: true, gold: true },
          { name: 'Restore deleted transactions', silver: '2 transactions', gold: 'Unlimited' },
          { name: 'Partywise Profit and Loss Report', silver: false, gold: true },
        ],
        moreCount: 16,
      },
    ],
  },
};

// ─── ICONS ─────────────────────────────────────────────────
const TickIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#E8F5E9" />
    <path d="M6 10.5L8.5 13L14 7.5" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#FFEBEE" />
    <path d="M7 7L13 13M13 7L7 13" stroke="#C62828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DesktopMobileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const DesktopIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const MobileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

// ─── COMPONENT ─────────────────────────────────────────────
const PricingSection: React.FC = () => {
  const [platform, setPlatform] = useState<PlatformKey>('desktopMobile');
  const [duration, setDuration] = useState<'1year' | '3years'>('1year');
  const [showCompare, setShowCompare] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const plans = pricingData[platform][duration];
  const silverPlan = plans.find((p) => p.tier === 'Silver')!;
  const goldPlan = plans.find((p) => p.tier === 'Gold')!;

  // features for comparison
  const featureNames = platform === 'mobile' ? mobileFeatureNames : sharedFeatureNames;

  // Lock body scroll when compare modal is open
  useEffect(() => {
    if (showCompare) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showCompare]);

  // Close on Escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && showCompare) setShowCompare(false);
  }, [showCompare]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const toggleExpand = (tier: string) => {
    setExpandedCards((prev) => ({ ...prev, [tier]: !prev[tier] }));
  };

  const getFeatureValue = (plan: Plan, featureName: string): string | boolean => {
    const f = plan.features.find((ft) => ft.name === featureName);
    if (!f) return false;
    return plan.tier === 'Silver' ? f.silver : f.gold;
  };

  const renderFeatureValue = (value: string | boolean) => {
    if (value === true) return <TickIcon />;
    if (value === false) return <CrossIcon />;
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
        <TickIcon />
        <span style={{ fontSize: '12.5px', color: '#555', fontWeight: 500 }}>{value}</span>
      </span>
    );
  };

  const discount = (original: number, sale: number) => Math.round(((original - sale) / original) * 100);

  // ─── CSS ──────────────────────────────────────────────────
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    @keyframes pricingFadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes pricingSlideUp {
      from { opacity: 0; transform: translateY(30px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    .pricing-section * {
      box-sizing: border-box;
    }

    .pricing-section {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(180deg, #FFF5F7 0%, #FFFFFF 40%);
      padding: 60px 0 80px;
      min-height: 100vh;
    }

    .pricing-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .pricing-heading {
      font-family: 'Poppins', sans-serif;
      font-weight: 800;
      font-size: 28px;
      line-height: 1.3;
      color: #314259;
      text-align: center;
      margin: 0 0 8px 0;
    }

    .pricing-subheading {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 15px;
      color: #787878;
      text-align: center;
      margin: 0 0 36px 0;
      line-height: 1.6;
    }

    /* ── Platform Tabs ── */
    .pricing-platform-tabs {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin-bottom: 24px;
      flex-wrap: wrap;
    }

    .pricing-platform-tab {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 13.5px;
      padding: 10px 20px;
      border-radius: 10px;
      border: 2px solid #E8E8E8;
      background: #FFFFFF;
      color: #555555;
      cursor: pointer;
      transition: all 0.25s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      white-space: nowrap;
    }

    .pricing-platform-tab:hover {
      border-color: #ED1A3B;
      color: #ED1A3B;
    }

    .pricing-platform-tab.active {
      border-color: #ED1A3B;
      background: #FFF5F7;
      color: #ED1A3B;
    }

    /* ── Duration Toggle ── */
    .pricing-duration-toggle {
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
    }

    .pricing-toggle-wrapper {
      display: flex;
      background: #F5F6F8;
      border-radius: 12px;
      padding: 4px;
      gap: 4px;
    }

    .pricing-toggle-btn {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 14px;
      padding: 10px 28px;
      border-radius: 10px;
      border: none;
      background: transparent;
      color: #787878;
      cursor: pointer;
      transition: all 0.25s ease;
      position: relative;
    }

    .pricing-toggle-btn.active {
      background: #FFFFFF;
      color: #314259;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .pricing-toggle-btn .save-badge {
      position: absolute;
      top: -8px;
      right: -8px;
      background: #ED1A3B;
      color: #fff;
      font-size: 10px;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 20px;
      line-height: 1.4;
    }

    /* ── Cards Grid ── */
    .pricing-cards-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
      margin-bottom: 32px;
    }

    @media (min-width: 700px) {
      .pricing-cards-grid {
        grid-template-columns: 1fr 1fr;
        gap: 28px;
      }
    }

    /* ── Plan Card ── */
    .pricing-card {
      position: relative;
      background: #FFFFFF;
      border-radius: 20px;
      border: 2px solid #EEEEEE;
      padding: 32px 28px 28px;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
    }

    .pricing-card:hover {
      border-color: #F0C0C8;
      box-shadow: 0 8px 32px rgba(237, 26, 59, 0.08);
      transform: translateY(-2px);
    }

    .pricing-card.popular {
      border-color: #ED1A3B;
      box-shadow: 0 8px 40px rgba(237, 26, 59, 0.12);
    }

    .pricing-card.popular:hover {
      box-shadow: 0 12px 48px rgba(237, 26, 59, 0.16);
    }

    .popular-badge {
      position: absolute;
      top: -13px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #ED1A3B 0%, #FF4D6A 100%);
      color: #FFFFFF;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 12px;
      padding: 4px 20px;
      border-radius: 20px;
      white-space: nowrap;
      letter-spacing: 0.5px;
    }

    .card-tier-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 8px;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 13px;
      margin-bottom: 16px;
      width: fit-content;
    }

    .card-tier-badge.silver {
      background: #F5F5F5;
      color: #888;
    }

    .card-tier-badge.gold {
      background: #FFF8E1;
      color: #F9A825;
    }

    .tier-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .tier-dot.silver { background: #BDBDBD; }
    .tier-dot.gold { background: #F9A825; }

    .card-plan-name {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 22px;
      color: #314259;
      margin: 0 0 16px 0;
    }

    .card-pricing {
      margin-bottom: 6px;
    }

    .card-original-price {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 16px;
      color: #AAAAAA;
      text-decoration: line-through;
      margin-right: 10px;
    }

    .card-discount-badge {
      display: inline-block;
      background: #FFEBEE;
      color: #ED1A3B;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 12px;
      padding: 2px 8px;
      border-radius: 6px;
    }

    .card-sale-price {
      font-family: 'Poppins', sans-serif;
      font-weight: 800;
      font-size: 40px;
      color: #314259;
      margin: 4px 0 2px 0;
      line-height: 1.1;
    }

    .card-sale-price .currency {
      font-size: 24px;
      font-weight: 700;
      vertical-align: super;
    }

    .card-per-month {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 13.5px;
      color: #787878;
      margin: 0 0 20px 0;
    }

    .card-cta-btn {
      width: 100%;
      padding: 14px 0;
      border-radius: 12px;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 15px;
      border: none;
      cursor: pointer;
      transition: all 0.25s ease;
      margin-bottom: 24px;
    }

    .card-cta-btn.silver-btn {
      background: #FFFFFF;
      color: #ED1A3B;
      border: 2px solid #ED1A3B;
    }

    .card-cta-btn.silver-btn:hover {
      background: #FFF5F7;
    }

    .card-cta-btn.gold-btn {
      background: linear-gradient(135deg, #ED1A3B 0%, #FF4D6A 100%);
      color: #FFFFFF;
      border: 2px solid transparent;
    }

    .card-cta-btn.gold-btn:hover {
      box-shadow: 0 4px 16px rgba(237, 26, 59, 0.3);
      transform: translateY(-1px);
    }

    .card-divider {
      height: 1px;
      background: #F0F0F0;
      margin: 0 0 20px 0;
    }

    .card-features-title {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 13px;
      color: #314259;
      margin: 0 0 14px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .card-feature-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 7px 0;
    }

    .card-feature-name {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 13.5px;
      color: #555555;
      line-height: 1.5;
    }

    .card-feature-name .feature-detail {
      color: #888;
      font-size: 12px;
    }

    .card-more-features {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 13.5px;
      color: #ED1A3B;
      cursor: pointer;
      margin-top: 10px;
      background: none;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: opacity 0.2s ease;
    }

    .card-more-features:hover {
      opacity: 0.8;
    }

    /* ── Compare Button ── */
    .pricing-compare-section {
      display: flex;
      justify-content: center;
      margin-top: 12px;
    }

    .pricing-compare-btn {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 15px;
      padding: 14px 36px;
      border-radius: 12px;
      border: 2px solid #314259;
      background: #FFFFFF;
      color: #314259;
      cursor: pointer;
      transition: all 0.25s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .pricing-compare-btn:hover {
      background: #314259;
      color: #FFFFFF;
    }

    /* ── Compare Modal ── */
    .compare-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.55);
      z-index: 9998;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      animation: pricingFadeIn 0.25s ease;
    }

    .compare-modal {
      position: relative;
      background: #FFFFFF;
      border-radius: 20px;
      width: 100%;
      max-width: 800px;
      max-height: 85vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.2);
      animation: pricingSlideUp 0.3s ease;
      overflow: hidden;
    }

    .compare-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px 28px 18px;
      border-bottom: 1px solid #F0F0F0;
      flex-shrink: 0;
    }

    .compare-title {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 20px;
      color: #314259;
      margin: 0;
    }

    .compare-close-btn {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: none;
      background: #F5F6F8;
      color: #555;
      font-size: 18px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: all 0.2s ease;
    }

    .compare-close-btn:hover {
      background: #EBEBEB;
      color: #ED1A3B;
    }

    .compare-body {
      padding: 0;
      overflow-y: auto;
      flex: 1;
    }

    .compare-body::-webkit-scrollbar {
      width: 6px;
    }
    .compare-body::-webkit-scrollbar-track {
      background: transparent;
    }
    .compare-body::-webkit-scrollbar-thumb {
      background: #d1d5db;
      border-radius: 3px;
    }

    /* ── Compare Table ── */
    .compare-table {
      width: 100%;
      border-collapse: collapse;
    }

    .compare-table thead th {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 14px;
      color: #314259;
      padding: 16px 20px;
      text-align: center;
      background: #FAFAFA;
      border-bottom: 2px solid #F0F0F0;
      position: sticky;
      top: 0;
      z-index: 2;
    }

    .compare-table thead th:first-child {
      text-align: left;
      width: 45%;
    }

    .compare-table tbody td {
      font-family: 'Poppins', sans-serif;
      font-size: 13.5px;
      padding: 14px 20px;
      border-bottom: 1px solid #F5F5F5;
      color: #555;
      text-align: center;
      vertical-align: middle;
    }

    .compare-table tbody td:first-child {
      text-align: left;
      font-weight: 500;
      color: #444;
    }

    .compare-table tbody tr:hover {
      background: #FAFAFA;
    }

    .compare-table-price-row td {
      padding: 20px !important;
      background: #FFF5F7 !important;
      border-bottom: 2px solid #F0F0F0 !important;
    }

    .compare-price-cell {
      text-align: center;
    }

    .compare-price-original {
      font-size: 13px;
      color: #AAA;
      text-decoration: line-through;
      margin-bottom: 2px;
    }

    .compare-price-sale {
      font-family: 'Poppins', sans-serif;
      font-weight: 800;
      font-size: 22px;
      color: #314259;
    }

    .compare-price-sale .currency {
      font-size: 14px;
      font-weight: 700;
    }

    .compare-price-permonth {
      font-size: 12px;
      color: #888;
      margin-top: 2px;
    }

    /* ── Responsive ── */
    @media (min-width: 600px) {
      .pricing-heading {
        font-size: 34px;
      }
      .pricing-subheading {
        font-size: 16px;
      }
    }

    @media (min-width: 960px) {
      .pricing-heading {
        font-size: 42px;
      }
    }

    @media (max-width: 600px) {
      .pricing-card {
        padding: 28px 22px 24px;
      }
      .card-sale-price {
        font-size: 34px;
      }
      .compare-modal {
        max-height: 92vh;
        border-radius: 16px;
      }
      .compare-header {
        padding: 20px 20px 14px;
      }
      .compare-title {
        font-size: 17px;
      }
      .compare-table thead th {
        font-size: 12px;
        padding: 12px 12px;
      }
      .compare-table tbody td {
        font-size: 12.5px;
        padding: 12px 12px;
      }
      .compare-price-sale {
        font-size: 18px;
      }
      .pricing-toggle-btn {
        font-size: 13px;
        padding: 9px 20px;
      }
    }
  `;

  const renderFeatureForCard = (plan: Plan, feature: Feature) => {
    const val = plan.tier === 'Silver' ? feature.silver : feature.gold;
    return (
      <div key={feature.name} className="card-feature-row">
        {val === true ? <TickIcon /> : val === false ? <CrossIcon /> : <TickIcon />}
        <span className="card-feature-name">
          {feature.name}
          {typeof val === 'string' && (
            <span className="feature-detail"> ({val})</span>
          )}
        </span>
      </div>
    );
  };

  const renderPlanCard = (plan: Plan) => {
    const tierKey = `${platform}-${duration}-${plan.tier}`;
    const isExpanded = expandedCards[tierKey] || false;
    const visibleFeatures = isExpanded ? plan.features : plan.features.slice(0, 6);
    const hasMore = plan.features.length > 6 || plan.moreCount > 0;
    const disc = discount(plan.originalPrice, plan.salePrice);

    return (
      <div key={plan.tier} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
        {plan.popular && <div className="popular-badge">MOST POPULAR</div>}

        <div className={`card-tier-badge ${plan.tier.toLowerCase()}`}>
          <span className={`tier-dot ${plan.tier.toLowerCase()}`} />
          {plan.tier}
        </div>

        <h3 className="card-plan-name">Vyapar {plan.tier}</h3>

        <div className="card-pricing">
          <span className="card-original-price">₹{plan.originalPrice.toLocaleString()}</span>
          <span className="card-discount-badge">{disc}% OFF</span>
        </div>

        <div className="card-sale-price">
          <span className="currency">₹</span>
          {plan.salePrice.toLocaleString()}
        </div>

        <p className="card-per-month">Only ₹{plan.perMonth} per month</p>

        <button className={`card-cta-btn ${plan.tier === 'Gold' ? 'gold-btn' : 'silver-btn'}`}>
          Get Vyapar {plan.tier}
        </button>

        <div className="card-divider" />

        <h4 className="card-features-title">What&apos;s Included</h4>

        {visibleFeatures.map((f) => renderFeatureForCard(plan, f))}

        {hasMore && !isExpanded && (
          <button className="card-more-features" onClick={() => toggleExpand(tierKey)}>
            <span style={{ fontSize: '16px', lineHeight: 1 }}>+</span>
            {plan.moreCount > 0 ? `${plan.moreCount} More Features` : 'Show All Features'}
          </button>
        )}

        {isExpanded && plan.features.length > 6 && (
          <button className="card-more-features" onClick={() => toggleExpand(tierKey)}>
            <span style={{ fontSize: '16px', lineHeight: 1 }}>−</span>
            Show Less
          </button>
        )}
      </div>
    );
  };

  return (
    <>
      <style>{css}</style>

      <section className="pricing-section" aria-label="Pricing Plans">
        <div className="pricing-container">
          {/* ── Heading ── */}
          <h1 className="pricing-heading">Choose the Perfect Plan for Your Business</h1>
          <p className="pricing-subheading">
            Simple, transparent pricing. No hidden fees. Start free and upgrade when you&apos;re ready.
          </p>

          {/* ── Platform Tabs ── */}
          <div className="pricing-platform-tabs">
            <button
              className={`pricing-platform-tab ${platform === 'desktopMobile' ? 'active' : ''}`}
              onClick={() => setPlatform('desktopMobile')}
            >
              <DesktopMobileIcon />
              Desktop + Mobile
            </button>
            <button
              className={`pricing-platform-tab ${platform === 'desktop' ? 'active' : ''}`}
              onClick={() => setPlatform('desktop')}
            >
              <DesktopIcon />
              Desktop
            </button>
            <button
              className={`pricing-platform-tab ${platform === 'mobile' ? 'active' : ''}`}
              onClick={() => setPlatform('mobile')}
            >
              <MobileIcon />
              Mobile
            </button>
          </div>

          {/* ── Duration Toggle ── */}
          <div className="pricing-duration-toggle">
            <div className="pricing-toggle-wrapper">
              <button
                className={`pricing-toggle-btn ${duration === '1year' ? 'active' : ''}`}
                onClick={() => setDuration('1year')}
              >
                1 Year
              </button>
              <button
                className={`pricing-toggle-btn ${duration === '3years' ? 'active' : ''}`}
                onClick={() => setDuration('3years')}
              >
                3 Years
                <span className="save-badge">SAVE MORE</span>
              </button>
            </div>
          </div>

          {/* ── Plan Cards ── */}
          <div className="pricing-cards-grid">
            {plans.map(renderPlanCard)}
          </div>

          {/* ── Compare Button ── */}
          <div className="pricing-compare-section">
            <button className="pricing-compare-btn" onClick={() => setShowCompare(true)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
              </svg>
              Compare Plans
            </button>
          </div>
        </div>
      </section>

      {/* ── Compare Modal ── */}
      {showCompare && (
        <div
          className="compare-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setShowCompare(false); }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="compare-modal-title"
        >
          <div className="compare-modal">
            <div className="compare-header">
              <h3 id="compare-modal-title" className="compare-title">Compare Plans</h3>
              <button className="compare-close-btn" onClick={() => setShowCompare(false)} aria-label="Close">
                ✕
              </button>
            </div>
            <div className="compare-body">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Features</th>
                    <th>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                        <span className="tier-dot silver" style={{ width: 10, height: 10, borderRadius: '50%', background: '#BDBDBD', display: 'inline-block' }} />
                        Silver
                      </div>
                    </th>
                    <th>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                        <span className="tier-dot gold" style={{ width: 10, height: 10, borderRadius: '50%', background: '#F9A825', display: 'inline-block' }} />
                        Gold
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Price Row */}
                  <tr className="compare-table-price-row">
                    <td style={{ fontWeight: 700, color: '#314259' }}>Price</td>
                    <td>
                      <div className="compare-price-cell">
                        <div className="compare-price-original">₹{silverPlan.originalPrice.toLocaleString()}</div>
                        <div className="compare-price-sale">
                          <span className="currency">₹</span>{silverPlan.salePrice.toLocaleString()}
                        </div>
                        <div className="compare-price-permonth">₹{silverPlan.perMonth}/mo</div>
                      </div>
                    </td>
                    <td>
                      <div className="compare-price-cell">
                        <div className="compare-price-original">₹{goldPlan.originalPrice.toLocaleString()}</div>
                        <div className="compare-price-sale">
                          <span className="currency">₹</span>{goldPlan.salePrice.toLocaleString()}
                        </div>
                        <div className="compare-price-permonth">₹{goldPlan.perMonth}/mo</div>
                      </div>
                    </td>
                  </tr>

                  {/* Feature Rows */}
                  {featureNames.map((fname) => {
                    const silverVal = getFeatureValue(silverPlan, fname);
                    const goldVal = getFeatureValue(goldPlan, fname);
                    return (
                      <tr key={fname}>
                        <td>{fname}</td>
                        <td>{renderFeatureValue(silverVal)}</td>
                        <td>{renderFeatureValue(goldVal)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PricingSection;