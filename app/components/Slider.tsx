'use client';

import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

const SmileIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
    <path
      d="M8.5 14.2C9.4 15.5 10.6 16 12 16s2.6-.5 3.5-1.8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const PhoneIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <rect
      x="7"
      y="2.5"
      width="10"
      height="19"
      rx="2.5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M10 5h4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
  </svg>
);

const PlayStoreIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M7 5.5L18 12L7 18.5V5.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M7 5.5L13.5 12L7 18.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const WhatsappIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M5 19.5L6.2 16.1C5.4 14.9 5 13.7 5 12.4C5 8.9 7.8 6 11.2 6C14.6 6 17.5 8.9 17.5 12.4C17.5 15.9 14.6 18.8 11.2 18.8C10 18.8 8.9 18.5 7.9 18L5 19.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.6 10.2C9.4 9.7 9.4 9.3 9.5 9.1C9.6 8.9 9.8 8.8 10.1 8.8C10.5 8.8 11 9.1 11.3 9.5C11.7 9.9 11.9 10.4 11.8 10.7C11.8 11 11.6 11.2 11.4 11.4L11.3 11.5C11.6 12 12 12.4 12.5 12.7C13 13.1 13.5 13.3 14 13.5L14.1 13.4C14.3 13.2 14.5 13 14.8 13C15.1 13 15.6 13.2 16 13.5C16.4 13.8 16.7 14.2 16.7 14.6C16.7 14.9 16.6 15.1 16.4 15.3C16.2 15.5 15.8 15.8 15.3 15.8C14.6 15.8 13.7 15.5 12.7 15C11.8 14.5 11 13.8 10.3 13C9.7 12.2 9.2 11.3 9 10.7C8.9 10.5 9 10.3 9.1 10.2C9.2 10.1 9.4 10.1 9.6 10.2Z"
      fill="currentColor"
    />
  </svg>
);

const MonitorIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <rect
      x="3"
      y="4"
      width="18"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M9 20h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 16v4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const UsersIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="16.5" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    <path
      d="M4.5 18c.8-2.5 2.7-3.8 4.5-3.8s3.7 1.3 4.5 3.8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M14.5 17.8c.5-1.8 1.8-2.8 3.3-2.8 1.1 0 2.2.5 3 1.7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const features = [
  {
    title: '1 Crore+',
    description: 'Happy Customers',
    Icon: SmileIcon,
  },
  {
    title: 'Free',
    description: 'Whatsapp support',
    Icon: WhatsappIcon,
  },
  {
    title: 'Rated 4.7/5',
    description: 'On Google Play Store',
    Icon: PlayStoreIcon,
  },
  {
    title: 'Multi-Device',
    description: 'Use together on Mobile/Desktop',
    Icon: MonitorIcon,
  },
  {
    title: 'Multi-User',
    description: 'User Management Feature',
    Icon: UsersIcon,
  },
];

const Slider: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      width: '100%',
      backgroundColor: '#F5F6F8',
      padding: '30px 0',
      fontFamily: "'Poppins', sans-serif",
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 24px',
    },
    track: {
      display: 'flex',
      gap: '16px',
      overflowX: 'auto',
      scrollBehavior: 'smooth',
      WebkitOverflowScrolling: 'touch',
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px 12px',
      borderRadius: '16px',
      minHeight: '160px',
      scrollSnapAlign: 'start',
      backgroundColor: 'transparent',
      transition: 'transform 0.2s ease, background-color 0.2s ease',
    },
    iconWrap: {
      width: '56px',
      height: '56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ED1A3B',
      marginBottom: '14px',
    },
    title: {
      margin: 0,
      marginBottom: '8px',
      fontSize: '22px',
      lineHeight: '1.2',
      fontWeight: 600,
      color: '#314259',
    },
    description: {
      margin: 0,
      fontSize: '14px',
      lineHeight: '1.5',
      fontWeight: 400,
      color: '#787878',
      maxWidth: '210px',
    },
  };

  const responsiveCSS = `
    .feature-slider-track {
      scroll-snap-type: x mandatory;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .feature-slider-track::-webkit-scrollbar {
      display: none;
    }

    .feature-slider-item {
      flex: 0 0 calc((100% - 32px) / 2.5);
    }

    @media (hover: hover) {
      .feature-slider-item:hover {
        transform: translateY(-3px);
        background-color: rgba(255, 255, 255, 0.7);
      }
    }

    @media (min-width: 900px) {
      .feature-slider-track {
        display: grid !important;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 24px !important;
        overflow: visible !important;
      }

      .feature-slider-item {
        flex: unset !important;
        min-width: 0 !important;
      }
    }
  `;

  return (
    <>
      <style>{responsiveCSS}</style>

      <section style={styles.section} aria-label="Business feature highlights">
        <div style={styles.container}>
          <div className="feature-slider-track" style={styles.track}>
            {features.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="feature-slider-item"
                style={styles.item}
              >
                <div style={styles.iconWrap}>
                  <Icon width={40} height={40} />
                </div>

                <h3 style={styles.title}>{title}</h3>
                <p style={styles.description}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;