'use client';

import React, { useCallback, useEffect } from 'react';

export type LicensePlatformKey = 'desktopMobile' | 'desktop' | 'mobile';
export type LicenseDurationKey = '1year' | '3years';

type LicenseTier = 'gold' | 'pro' | 'platinum';

type LicenseItem = {
  id: string;
  name: string;
  tier: LicenseTier;
  originalPrice: number;
  salePrice: number;
};

const additionalLicensesData: Record<LicensePlatformKey, Record<LicenseDurationKey, LicenseItem[]>> = {
  desktopMobile: {
    '1year': [
      { id: 'gold', name: 'Vyapar Gold', tier: 'gold', originalPrice: 9099, salePrice: 4799 },
      { id: 'mfg', name: 'Manufacturing Pro', tier: 'pro', originalPrice: 18999, salePrice: 9999 },
      { id: 'retail', name: 'Retail Pro', tier: 'pro', originalPrice: 18999, salePrice: 9999 },
      { id: 'dist', name: 'Distributor Pro', tier: 'pro', originalPrice: 18999, salePrice: 9999 },
      { id: 'platinum', name: 'Vyapar Platinum', tier: 'platinum', originalPrice: 23999, salePrice: 11999 },
    ],
    '3years': [
      { id: 'gold', name: 'Vyapar Gold', tier: 'gold', originalPrice: 18699, salePrice: 9899 },
      { id: 'mfg', name: 'Manufacturing Pro', tier: 'pro', originalPrice: 42999, salePrice: 21999 },
      { id: 'retail', name: 'Retail Pro', tier: 'pro', originalPrice: 42999, salePrice: 21999 },
      { id: 'dist', name: 'Distributor Pro', tier: 'pro', originalPrice: 42999, salePrice: 21999 },
      { id: 'platinum', name: 'Vyapar Platinum', tier: 'platinum', originalPrice: 52999, salePrice: 25999 },
    ],
  },
  desktop: {
    '1year': [
      { id: 'gold', name: 'Vyapar Gold', tier: 'gold', originalPrice: 7699, salePrice: 4099 },
      { id: 'mfg', name: 'Manufacturing Pro', tier: 'pro', originalPrice: 16999, salePrice: 8999 },
      { id: 'retail', name: 'Retail Pro', tier: 'pro', originalPrice: 16999, salePrice: 8999 },
      { id: 'dist', name: 'Distributor Pro', tier: 'pro', originalPrice: 16999, salePrice: 8999 },
      { id: 'platinum', name: 'Vyapar Platinum', tier: 'platinum', originalPrice: 18999, salePrice: 9999 },
    ],
    '3years': [
      { id: 'gold', name: 'Vyapar Gold', tier: 'gold', originalPrice: 17099, salePrice: 9099 },
      { id: 'mfg', name: 'Manufacturing Pro', tier: 'pro', originalPrice: 36999, salePrice: 19799 },
      { id: 'retail', name: 'Retail Pro', tier: 'pro', originalPrice: 36999, salePrice: 19799 },
      { id: 'dist', name: 'Distributor Pro', tier: 'pro', originalPrice: 36999, salePrice: 19799 },
      { id: 'platinum', name: 'Vyapar Platinum', tier: 'platinum', originalPrice: 42999, salePrice: 21999 },
    ],
  },
  mobile: {
    '1year': [
      { id: 'gold', name: 'Vyapar Gold', tier: 'gold', originalPrice: 1399, salePrice: 799 },
      { id: 'mfg', name: 'Manufacturing Pro', tier: 'pro', originalPrice: 2799, salePrice: 1599 },
      { id: 'retail', name: 'Retail Pro', tier: 'pro', originalPrice: 2799, salePrice: 1599 },
      { id: 'dist', name: 'Distributor Pro', tier: 'pro', originalPrice: 2799, salePrice: 1599 },
      { id: 'platinum', name: 'Vyapar Platinum', tier: 'platinum', originalPrice: 4299, salePrice: 2099 },
    ],
    '3years': [
      { id: 'gold', name: 'Vyapar Gold', tier: 'gold', originalPrice: 3299, salePrice: 1699 },
      { id: 'mfg', name: 'Manufacturing Pro', tier: 'pro', originalPrice: 6899, salePrice: 3599 },
      { id: 'retail', name: 'Retail Pro', tier: 'pro', originalPrice: 6899, salePrice: 3599 },
      { id: 'dist', name: 'Distributor Pro', tier: 'pro', originalPrice: 6899, salePrice: 3599 },
      { id: 'platinum', name: 'Vyapar Platinum', tier: 'platinum', originalPrice: 9999, salePrice: 5299 },
    ],
  },
};

const platformLabels: Record<LicensePlatformKey, string> = {
  desktopMobile: 'Desktop + Mobile',
  desktop: 'Desktop',
  mobile: 'Mobile',
};

function formatPrice(price: number) {
  return price.toLocaleString('en-IN', {
    minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

function getSubtitle(platform: LicensePlatformKey, duration: LicenseDurationKey) {
  const durationLabel = duration === '1year' ? '1 Year' : '3 Years';
  return `${platformLabels[platform]} • ${durationLabel}`;
}

const TierIcon: React.FC<{ tier: LicenseTier }> = ({ tier }) => {
  const colors = {
    gold: '#F9A825',
    pro: '#1E88E5',
    platinum: '#8E24AA',
  };

  return (
    <div
      className="license-tier-icon"
      style={{ backgroundColor: colors[tier] }}
      aria-hidden="true"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M7 5.5L18 12L7 18.5V5.5Z" fill="#FFFFFF" />
      </svg>
    </div>
  );
};

const DesktopMobileIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const DesktopIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const MobileIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

type BuyAdditionalLicensesModalProps = {
  isOpen: boolean;
  onClose: () => void;
  platform: LicensePlatformKey;
  duration: LicenseDurationKey;
  onPlatformChange: (platform: LicensePlatformKey) => void;
  onDurationChange: (duration: LicenseDurationKey) => void;
};

const BuyAdditionalLicensesModal: React.FC<BuyAdditionalLicensesModalProps> = ({
  isOpen,
  onClose,
  platform,
  duration,
  onPlatformChange,
  onDurationChange,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen) return null;

  const items = additionalLicensesData[platform][duration];
  const subtitle = getSubtitle(platform, duration);

  const css = `
    @keyframes licenseModalFadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes licenseModalSlideUp {
      from { opacity: 0; transform: translateY(24px) scale(0.98); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    .license-modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 10001;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      animation: licenseModalFadeIn 0.25s ease;
    }

    .license-modal {
      background: #FFFFFF;
      border-radius: 16px;
      width: 100%;
      max-width: 620px;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.2);
      animation: licenseModalSlideUp 0.3s ease;
      overflow: hidden;
    }

    .license-modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 24px 16px;
      border-bottom: 1px solid #F0F0F0;
      flex-shrink: 0;
    }

    .license-modal-title {
      font-weight: 700;
      font-size: 20px;
      color: #314259;
      margin: 0;
    }

    .license-modal-close {
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
    }

    .license-modal-close:hover {
      background: #EEE;
    }

    .license-modal-controls {
      padding: 16px 24px 12px;
      flex-shrink: 0;
    }

    .license-platform-tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 12px;
    }

    .license-platform-tab {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      border-radius: 10px;
      border: 1.5px solid #E8E8E8;
      background: #FFFFFF;
      color: #787878;
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .license-platform-tab.active {
      border-color: #7a0a1b;
      color: #7a0a1b;
      background: #FFF5F7;
    }

    .license-duration-toggle {
      display: flex;
      justify-content: flex-start;
    }

    .license-toggle-wrapper {
      display: flex;
      background: #F5F6F8;
      border-radius: 10px;
      padding: 3px;
      gap: 3px;
    }

    .license-toggle-btn {
      font-weight: 600;
      font-size: 13px;
      padding: 8px 22px;
      border-radius: 8px;
      border: none;
      background: transparent;
      color: #787878;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .license-toggle-btn.active {
      background: #FFFFFF;
      color: #314259;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
    }

    .license-section-label {
      margin: 0 24px 10px;
      padding: 8px 12px;
      background: #FFF8E1;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      color: #6D5A00;
      flex-shrink: 0;
    }

    .license-list {
      flex: 1;
      overflow-y: auto;
      padding: 0 24px 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .license-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 16px;
      border-radius: 12px;
      border: 1px solid #EEEEEE;
    }

    .license-item.gold { background: #FFFBF0; }
    .license-item.pro { background: #F3F9FF; }
    .license-item.platinum { background: #FAF5FC; }

    .license-tier-icon {
      width: 36px;
      height: 36px;
      min-width: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .license-item-info {
      flex: 1;
      min-width: 0;
    }

    .license-item-name {
      font-weight: 700;
      font-size: 14px;
      color: #314259;
      margin: 0 0 2px 0;
    }

    .license-item-sub {
      font-size: 12px;
      color: #888;
      margin: 0;
    }

    .license-item-pricing {
      text-align: right;
      flex-shrink: 0;
    }

    .license-original-price {
      font-size: 12px;
      color: #AAA;
      text-decoration: line-through;
      margin: 0 0 2px 0;
    }

    .license-sale-price {
      font-weight: 800;
      font-size: 16px;
      color: #314259;
      margin: 0;
    }

    .license-add-btn {
      flex-shrink: 0;
      padding: 8px 20px;
      border-radius: 20px;
      border: 2px solid #7a0a1b;
      background: #FFFFFF;
      color: #7a0a1b;
      font-weight: 700;
      font-size: 13px;
      opacity: 0.55;
      cursor: default;
      pointer-events: none;
      user-select: none;
    }

    .license-modal-footer {
      padding: 14px 24px;
      border-top: 1px solid #F0F0F0;
      background: #FAFAFA;
      font-size: 13px;
      color: #555;
      flex-shrink: 0;
    }

    .license-modal-footer strong {
      color: #314259;
    }

    @media (max-width: 480px) {
      .license-item {
        flex-wrap: wrap;
        gap: 10px;
      }

      .license-item-pricing {
        text-align: left;
      }

      .license-add-btn {
        margin-left: auto;
      }
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div
        className="license-modal-overlay"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="license-modal-title"
      >
        <div className="license-modal">
          <div className="license-modal-header">
            <h3 id="license-modal-title" className="license-modal-title">
              Buy Additional Licenses
            </h3>
            <button type="button" className="license-modal-close" onClick={onClose} aria-label="Close">
              ✕
            </button>
          </div>

          <div className="license-modal-controls">
            <div className="license-platform-tabs">
              <button
                type="button"
                className={`license-platform-tab ${platform === 'desktopMobile' ? 'active' : ''}`}
                onClick={() => onPlatformChange('desktopMobile')}
              >
                <DesktopMobileIcon />
                Desktop + Mobile
              </button>
              <button
                type="button"
                className={`license-platform-tab ${platform === 'desktop' ? 'active' : ''}`}
                onClick={() => onPlatformChange('desktop')}
              >
                <DesktopIcon />
                Desktop
              </button>
              <button
                type="button"
                className={`license-platform-tab ${platform === 'mobile' ? 'active' : ''}`}
                onClick={() => onPlatformChange('mobile')}
              >
                <MobileIcon />
                Mobile
              </button>
            </div>

            <div className="license-duration-toggle">
              <div className="license-toggle-wrapper">
                <button
                  type="button"
                  className={`license-toggle-btn ${duration === '1year' ? 'active' : ''}`}
                  onClick={() => onDurationChange('1year')}
                >
                  1 Year
                </button>
                <button
                  type="button"
                  className={`license-toggle-btn ${duration === '3years' ? 'active' : ''}`}
                  onClick={() => onDurationChange('3years')}
                >
                  3 Years
                </button>
              </div>
            </div>
          </div>

          <p className="license-section-label">{subtitle}</p>

          <div className="license-list">
            {items.map((item) => (
              <div key={item.id} className={`license-item ${item.tier}`}>
                <TierIcon tier={item.tier} />
                <div className="license-item-info">
                  <p className="license-item-name">{item.name}</p>
                  <p className="license-item-sub">{subtitle}</p>
                </div>
                <div className="license-item-pricing">
                  <p className="license-original-price">₹{formatPrice(item.originalPrice)}</p>
                  <p className="license-sale-price">₹{formatPrice(item.salePrice)}</p>
                </div>
                <button type="button" className="license-add-btn" disabled tabIndex={-1} aria-disabled="true">
                  Add
                </button>
              </div>
            ))}
          </div>

          <div className="license-modal-footer">
            🎁 Buy 1 or more licenses &amp; unlock <strong>Bulk Saver Discount!</strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyAdditionalLicensesModal;
