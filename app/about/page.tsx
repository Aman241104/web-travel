"use client";

import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";
import { FounderProfile } from "@/components/about/founder-profile";
import { CrisisTimeline } from "@/components/about/crisis-timeline";
import { OperationalExcellence } from "@/components/about/operational-excellence";
import { CorporateMarquee } from "@/components/about/corporate-marquee";

export default function AboutPage() {
    return (
        <main className="w-full bg-brand-bg relative pb-16">

            {/* Minimalist, Authority Hero */}
            <SectionWrapper spacing="hero" background="alt" className="pt-40 pb-24 border-b border-brand-text/5">
                <Container className="max-w-4xl max-auto text-center flex flex-col items-center">
                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-text mb-6">
                        More Than a Travel Agency.
                    </h1>
                    <p className="text-lg md:text-xl font-sans text-brand-text-muted max-w-2xl font-light leading-relaxed mb-6">
                        We are an operational powerhouse dedicated to flawless logistics, premium capability, and unwavering crisis management.
                    </p>
                </Container>
            </SectionWrapper>

            {/* Assembled Trust & Authority Blocks */}
            <FounderProfile />
            <CrisisTimeline />
            <OperationalExcellence />
            <CorporateMarquee />

            {/* Conversational Footer specific to the About Page */}
            <SectionWrapper background="default" spacing="default" className="border-t border-brand-text/5 mt-16 pb-24">
                <Container className="max-w-4xl mx-auto text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-text mb-8 leading-tight">
                        Put our expertise to work for your next journey.
                    </h2>
                    <WhatsAppCTA
                        variant="premium"
                        message="Hi Heena/Team! I am very impressed by your track record and would like to hire Universal Travel Planners for my upcoming trip."
                        className="h-16 px-10 text-lg shadow-[0_15px_40px_rgba(0,82,255,0.2)] rounded-xl"
                    >
                        Chat Directly with Our Planners
                    </WhatsAppCTA>
                </Container>
            </SectionWrapper>

        </main>
    );
}
