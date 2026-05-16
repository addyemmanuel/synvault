import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ProblemSection } from "@/components/site/ProblemSection";
import { BridgeSection } from "@/components/site/BridgeSection";
import { HowItWorks } from "@/components/site/HowItWorks";
import { FeaturesSection } from "@/components/site/FeaturesSection";
import { WhyItMatters } from "@/components/site/WhyItMatters";
import { BusinessModel } from "@/components/site/BusinessModel";
import { SecuritySection } from "@/components/site/SecuritySection";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SynVault — Secure Healthcare Data Bridge" },
      {
        name: "description",
        content:
          "SynVault is the secure interoperability layer that moves patient records between hospitals on demand — federated, compliant, real-time.",
      },
      { property: "og:title", content: "SynVault — Secure Healthcare Data Bridge" },
      {
        property: "og:description",
        content:
          "Connect any two healthcare systems on demand. Federated, HIPAA & GDPR aligned, real-time patient record access.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <BridgeSection />
        <HowItWorks />
        <FeaturesSection />
        <WhyItMatters />
        <BusinessModel />
        <SecuritySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
