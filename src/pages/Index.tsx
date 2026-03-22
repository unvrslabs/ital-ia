import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { BandiMarquee } from "@/components/landing/BandiMarquee";
import { AgentsSection } from "@/components/landing/AgentsSection";
import { SovereignSection } from "@/components/landing/SovereignSection";
import { SectorsSection } from "@/components/landing/SectorsSection";
import { InfrastructureSection } from "@/components/landing/InfrastructureSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { PMISection } from "@/components/landing/PMISection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

import { InlineCTA } from "@/components/landing/InlineCTA";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <div className="fixed inset-0 mesh-gradient" aria-hidden="true" />
      <div className="fixed inset-0 aurora-bg pointer-events-none" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative z-10">
        <Navbar />

        <main role="main">
          <HeroSection />
          <BandiMarquee />
          <AgentsSection />
          <SovereignSection />
          <InlineCTA text="Vuoi il controllo totale sui tuoi dati? Parliamone" />
          <SectorsSection />
          <InfrastructureSection />
          <HowItWorksSection />
          <ComparisonSection />
          <PMISection />
          <InlineCTA text="Scopri come la tua PMI può iniziare" buttonText="Scopri di più" />
          <FAQSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
