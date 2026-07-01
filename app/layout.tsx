import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

const siteUrl = "https://www.billingsoftwaredekho.in";
const siteTitle = "Billing Software Dekho | Authorized Vyapar Billing Software Partner";
const siteDescription =
  "Billing Software Dekho is an authorized Vyapar partner offering GST billing, invoicing, inventory, and accounting software for small businesses in India. Create GST invoices, manage stock, track payments, and file GST with ease.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Vyapar",
    "billing software",
    "GST billing software",
    "invoicing software",
    "accounting software",
    "inventory management",
    "GST invoice",
    "small business software India",
    "Billing Software Dekho",
    "Vyapar partner",
  ],
  applicationName: "Billing Software Dekho",
  authors: [{ name: "Billing Software Dekho" }],
  creator: "Billing Software Dekho",
  publisher: "Billing Software Dekho",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Billing Software Dekho",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/assets/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Billing Software Dekho - Authorized Vyapar Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/assets/og-image.webp"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Popup />
      </body>
    </html>
  );
}

