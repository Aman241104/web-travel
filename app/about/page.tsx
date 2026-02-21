"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";
import { FounderProfile } from "@/components/about/founder-profile";
import { CrisisTimeline } from "@/components/about/crisis-timeline";
import { OperationalExcellence } from "@/components/about/operational-excellence";
import { CorporateMarquee } from "@/components/about/corporate-marquee";

export default function AboutPage() {
    const underlineRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        // FIX #1: Only animate the underline — hero text must NOT start at opacity:0
        // (above-fold elements should always be visible on load)
        if (underlineRef.current) {
            gsap.from(underlineRef.current, {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 0.9,
                ease: "power3.out",
                delay: 0.5,
            });
        }
    }, []);

    return (
        <main className="w-full bg-brand-bg relative pb-16">

            {/* Authority Hero — text is always visible, only underline animates */}
            <SectionWrapper spacing="hero" background="alt" className="pt-40 pb-24 border-b border-brand-text/5">
                <Container className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-text mb-6">
                        More Than a Travel{" "}
                        <span className="relative inline-block">
                            Agency.
                            <span
                                ref={underlineRef}
                                className="absolute -bottom-2 left-0 right-0 h-[4px] rounded-full bg-brand-accent block"
                                style={{ transformOrigin: "left center" }}
                            />
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl font-sans text-brand-text-muted max-w-2xl font-light leading-relaxed mb-6">
                        We are an operational powerhouse dedicated to flawless logistics, premium capability, and unwavering crisis management.
                    </p>
                </Container>
            </SectionWrapper>

            {/* Trust & Authority Blocks */}
            <FounderProfile />
            <CrisisTimeline />
            <OperationalExcellence />
            <CorporateMarquee />

            {/* About-specific CTA Footer */}
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
