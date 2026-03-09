// app/pricing/page.tsx
import type { Metadata } from "next";
import PricingSection from "../components/PricingSection";

export const metadata: Metadata = {
  title: "Pricing - Billing Software",
  description: "Pricing plans for Billing Software.",
};

export default function PricingPage() {
  return (
    <main>
      <PricingSection />
    </main>
  );
}