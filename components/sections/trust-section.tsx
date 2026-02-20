"use client";

import { useRef } from "react";
import Image from "next/image";
import { useFadeIn } from "@/lib/animations/use-fade-in";
import { useStagger } from "@/lib/animations/use-stagger";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { HeadingBlock } from "@/components/ui/heading-block";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

// Placeholder data - authentic voice text
const TESTIMONIALS = [
    {
        text: "Booking through WhatsApp felt incredibly personal. They handled our visa, forex, and literally met us at the airport in Zurich. Zero stress, full luxury.",
        author: "Kavita S.",
        location: "Ahmedabad to Switzerland",
        rating: 5,
    },
    {
        text: "Used them for our 50-person corporate retreat to Bali. Everything was perfectly timed, and having a dedicated human expert on WhatsApp 24/7 was a lifesaver.",
        author: "Rahul M.",
        location: "Corporate Group",
        rating: 5,
    },
    {
        text: "Our honeymoon to the Maldives was flawless. They negotiated a villa upgrade we couldn't get online. Worth every single penny for the peace of mind alone.",
        author: "Priya & Amit",
        location: "Maldives Escapes",
        rating: 5,
    }
];

const PARTNERS = [
    { id: "p1", name: "Emirates", logo: "✈️ Emirates Partner" },
    { id: "p2", name: "Marriott", logo: "🏨 Marriott Luxury" },
    { id: "p3", name: "SingaporeAir", logo: "✈️ Singapore Airlines" },
    { id: "p4", name: "IATA", logo: "✓ IATA Certified" },
    { id: "p5", name: "FourSeasons", logo: "🏨 Four Seasons" }
];

export function TrustSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    // Fade in the marquee
    useFadeIn({ ref: marqueeRef, delay: 0.2 });

    // Stagger reveal the testimonial cards
    useStagger({
        containerRef,
        selector: ".testimonial-card",
        staggerTime: 0.2,
    });

    return (
        <SectionWrapper background="default" className="overflow-hidden border-t border-brand-text/5">
            {/* Infinite Marquee - Partner Logos */}
            <div
                ref={marqueeRef}
                className="w-full border-b border-brand-text/5 bg-white py-6 flex overflow-hidden whitespace-nowrap mb-16 md:mb-24"
            >
                {/* We duplicate the span to create a continuous CSS marquee loop without complex GSAP */}
                <div className="flex animate-[marquee_30s_linear_infinite] will-change-transform">
                    {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
                        <div
                            key={`${partner.id}-${i}`}
                            className="flex items-center justify-center min-w-[200px] md:min-w-[300px] text-brand-text/80 font-display font-bold tracking-wide text-lg md:text-xl grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
                        >
                            {partner.logo}
                        </div>
                    ))}
                </div>
            </div>

            <Container ref={containerRef}>
                <div className="flex flex-col items-center mb-16 px-4">
                    <HeadingBlock
                        title="Trusted by 5,000+ Travelers"
                        subtitle="From Ahmedabad to everywhere. Hear from clients who have experienced the true Universal Travel standard of care."
                        alignment="center"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
                    {TESTIMONIALS.map((t, idx) => (
                        <Card
                            key={idx}
                            className="testimonial-card p-6 md:p-8 flex flex-col justify-between h-full bg-white transition-colors hover:border-brand-accent/30"
                            elevation="sm"
                        >
                            <div>
                                <div className="flex gap-1 mb-6 text-brand-accent">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-brand-text text-lg leading-relaxed mb-8 italic font-medium">
                                    "{t.text}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 pt-6 border-t border-brand-text/5">
                                <div className="h-10 w-10 rounded-full bg-brand-text/5 flex items-center justify-center font-display font-semibold text-brand-text/40 shrink-0">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-text text-sm">{t.author}</h4>
                                    <p className="text-brand-text/50 text-xs">{t.location}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>

            {/* Required for Tailwind to compile the infinite animation if not in global css */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}} />
        </SectionWrapper>
    );
}
