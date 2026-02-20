import { Hero } from "@/components/sections/hero";
import { BookingWidget } from "@/components/sections/booking-widget";
import { DestinationsGrid } from "@/components/sections/destinations-grid";
import { TrustSection } from "@/components/sections/trust-section";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BookingWidget />
      <HowItWorks />
      <DestinationsGrid />
      <TrustSection />
      <FinalCTA />
    </>
  );
}
