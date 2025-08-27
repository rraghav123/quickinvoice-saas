import HeroSection from "./molecules/LandingPage/HeroSection.tsx";
import BenefitsSection from "./molecules/LandingPage/BenefitsSection.tsx";
import PricingSection from "./molecules/LandingPage/Pricing.tsx";
import Testimonials from "./molecules/LandingPage/Testimonials.tsx";
import CtaSection from "./molecules/LandingPage/CtaSection.tsx";
import FooterSection from "./molecules/LandingPage/FooterSection.tsx";

export function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      {/* Benefits Section */}
      <BenefitsSection />
      {/* Pricing Section */}
      <PricingSection />
      {/* Testimonials Section */}
      <Testimonials />
      {/* CTA Section */}
      <CtaSection />
      {/* Footer */}
     <FooterSection />
    </div>
  );
}