"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    "Siddheshwar Group",
];

// Client item component for DRY rendering
function MarqueeItem({ name }: { name: string }) {
    return (
        <div className="flex items-center mx-10 md:mx-16">
            <span className="font-display font-medium tracking-wide text-2xl md:text-3xl text-brand-text/40 hover:text-brand-text hover:italic transition-all duration-300 cursor-default whitespace-nowrap select-none">
                {name}
            </span>
            <span className="text-brand-accent/40 ml-10 md:ml-16 text-lg font-light">/</span>
        </div>
    );
}

export function CorporateMarquee() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                opacity: 0,
                y: 25,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    once: true,
                },
            });
            gsap.from(marqueeRef.current, {
                opacity: 0,
                duration: 1,
                delay: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const doubledClients = [...CORPORATE_CLIENTS, ...CORPORATE_CLIENTS];
    const reversedClients = [...CORPORATE_CLIENTS].reverse();
    const doubledReversed = [...reversedClients, ...reversedClients];

    return (
        <SectionWrapper
            background="default"
            spacing="default"
            className="border-t border-brand-text/5 overflow-hidden"
        >
            <div ref={sectionRef}>
                <Container>
                    <div ref={textRef} className="text-center mb-16">
                        <p className="text-sm font-semibold tracking-widest uppercase text-brand-text/40 mb-3">
                            Trusted Across Sectors
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-brand-text mb-3">
                            The Corporations That Trust Us
                        </h2>
                        <p className="text-sm font-sans italic text-brand-accent font-medium tracking-wide">
                            Finance · Design · Education · Film & More
                        </p>
                    </div>
                </Container>

                {/* Dual Marquee Band */}
                <div
                    ref={marqueeRef}
                    className="w-full bg-brand-bg-alt border-y border-brand-text/5 py-0 overflow-hidden"
                >
                    {/* Row 1: Left → Right (standard direction) */}
                    <div className="flex whitespace-nowrap border-b border-brand-text/5 py-6 overflow-hidden">
                        <div className="flex animate-[marquee_40s_linear_infinite] will-change-transform">
                            {doubledClients.map((client, i) => (
                                <MarqueeItem key={`r1-${i}`} name={client} />
                            ))}
                        </div>
                    </div>

                    {/* Row 2: Right → Left (reversed direction) */}
                    <div className="flex whitespace-nowrap py-6 overflow-hidden">
                        <div className="flex animate-[marquee-reverse_40s_linear_infinite] will-change-transform">
                            {doubledReversed.map((client, i) => (
                                <MarqueeItem key={`r2-${i}`} name={client} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Keyframe definitions */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes marquee-reverse {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                `
            }} />
        </SectionWrapper>
    );
}
