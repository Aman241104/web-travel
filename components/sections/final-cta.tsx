"use client";

import { useRef } from "react";
import { useFadeIn } from "@/lib/animations/use-fade-in";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";

export function FinalCTA() {
    const containerRef = useRef<HTMLDivElement>(null);

    useFadeIn({
        ref: containerRef,
        yOffset: 40,
        duration: 1,
    });

    return (
        <SectionWrapper background="dark" spacing="hero" className="border-t border-white/10 relative overflow-hidden pb-32">
            {/* Ambient glow effect for premium feel */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-accent/20 blur-[120px] rounded-[100%] pointer-events-none" />

            <Container>
                <div
                    ref={containerRef}
                    className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-12 md:space-y-16 py-8"
                >
                    <div className="space-y-4">
                        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight drop-shadow-lg">
                            Your suitcase is waiting.
                        </h2>
                        <p className="text-xl md:text-2xl text-white/80 font-sans max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
                            You deserve a vacation, not a second job planning one. Let our experts curate the perfect itinerary.
                        </p>
                    </div>

                    <WhatsAppCTA
                        className="h-16 px-10 text-lg shadow-[0_15px_40px_rgba(212,175,55,0.3)] bg-brand-accent text-brand-text hover:bg-white hover:text-brand-text hover:scale-105 transition-all duration-500 w-full sm:w-auto font-medium"
                        intentCategory="general"
                    >
                        Message us on WhatsApp
                    </WhatsAppCTA>

                    <p className="text-white/70 text-base md:text-lg font-sans tracking-wide font-medium mt-6 pt-6 border-t border-white/10">
                        Replies typically within 15 minutes during business hours.
                    </p>
                </div>
            </Container>
        </SectionWrapper>
    );
}
