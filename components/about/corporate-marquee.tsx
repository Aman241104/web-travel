"use client";

import { useRef } from "react";
import { useFadeIn } from "@/lib/animations/use-fade-in";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Container } from "@/components/ui/container";

const CORPORATE_CLIENTS = [
    "HDFC Housing Loans",
    "Sonata",
    "Fast Track Company",
    "Film Studio Company",
    "M.S. University Baroda",
    "INIFD Baroda",
    "J.D. Institute",
    "Siddheshwar Group"
];

export function CorporateMarquee() {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    // Fade in text and marquee gracefully
    useFadeIn({ ref: textRef, delay: 0.1 });
    useFadeIn({ ref: marqueeRef, delay: 0.3 });

    return (
        <SectionWrapper background="default" spacing="default" className="border-t border-brand-text/5 overflow-hidden">
            <Container>
                <div ref={textRef} className="text-center mb-16">
                    <p className="text-sm font-semibold tracking-widest uppercase text-brand-text/40 mb-4">
                        Trusted Across Sectors
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-brand-text">
                        The Corporations That Trust Us
                    </h2>
                </div>
            </Container>

            {/* Infinite Marquee - Text Based */}
            <div
                ref={marqueeRef}
                className="w-full bg-brand-bg-alt py-10 flex overflow-hidden whitespace-nowrap border-y border-brand-text/5"
            >
                {/* Duplicate arrays to create continuous CSS loop */}
                <div className="flex animate-[marquee_40s_linear_infinite] will-change-transform">
                    {[...CORPORATE_CLIENTS, ...CORPORATE_CLIENTS].map((client, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center mx-8 md:mx-16 text-brand-text/60 font-display font-medium tracking-wide text-2xl md:text-4xl opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default"
                        >
                            {client}
                            <span className="text-brand-accent/50 ml-16 md:ml-32 text-xl">•</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tailwind Animation Keyframes Injection */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
        </SectionWrapper>
    );
}
