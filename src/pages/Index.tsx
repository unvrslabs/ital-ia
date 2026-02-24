import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { SovereignSection } from "@/components/landing/SovereignSection";
import { SectorsSection } from "@/components/landing/SectorsSection";
import { InfrastructureSection } from "@/components/landing/InfrastructureSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { PMISection } from "@/components/landing/PMISection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Modern mesh gradient background */}
      <div className="fixed inset-0 mesh-gradient" />
      
      {/* Subtle aurora effect */}
      <div className="fixed inset-0 aurora-bg pointer-events-none" />
      
      {/* Very subtle grain for texture */}
      <div className="grain-overlay" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <HeroSection />
          <SovereignSection />
          <SectorsSection />
          <InfrastructureSection />
          <ComparisonSection />
          <PMISection />
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
