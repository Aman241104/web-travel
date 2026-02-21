import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { DestinationsGrid } from "@/components/sections/destinations-grid";
import { KitchenCaravan } from "@/components/sections/kitchen-caravan";
import { TrustSection } from "@/components/sections/trust-section";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <DestinationsGrid />
      <KitchenCaravan />
      <TrustSection />
      <FinalCTA />
    </>
  );
}
