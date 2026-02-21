"use client";

import { useRef } from "react";
import Image from "next/image";
import { useFadeIn } from "@/lib/animations/use-fade-in";
import { useStagger } from "@/lib/animations/use-stagger";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { HeadingBlock } from "@/components/ui/heading-block";
import { Star, ShieldCheck, Quote } from "lucide-react";

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
        text: "Our honeymoon to the Maldives was flawless. They negotiated a villa upgrade we couldn't get online. Worth every single penny for the peace of mind.",
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

    useFadeIn({ ref: marqueeRef, delay: 0.2 });
    useStagger({
        containerRef,
        selector: ".trust-item",
        staggerTime: 0.15,
        yOffset: 40,
    });

    return (
        <SectionWrapper background="default" className="relative overflow-hidden pt-12 pb-24 md:pb-32 z-10">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-bg-alt/50 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div
                ref={marqueeRef}
                className="w-full border-y border-brand-text/5 bg-white/50 backdrop-blur-sm py-8 flex overflow-hidden whitespace-nowrap mt-16 md:mt-24 mb-24 md:mb-32"
            >
                <div className="flex animate-[marquee_30s_linear_infinite] will-change-transform">
                    {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
                        <div
                            key={`${partner.id}-${i}`}
                            className="flex items-center justify-center min-w-[200px] md:min-w-[300px] text-brand-text/50 font-display font-medium tracking-widest uppercase text-sm md:text-base grayscale hover:grayscale-0 hover:text-brand-text transition-all duration-500 cursor-default"
                        >
                            {partner.logo}
                        </div>
                    ))}
                </div>
            </div>

            <Container ref={containerRef}>
                {/* Success Story / Trust Metric */}
                <div className="trust-item mb-24 px-4 md:px-0">
                    <div className="bg-brand-blue rounded-[2.5rem] p-10 md:p-14 lg:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 max-w-6xl mx-auto shadow-[0_30px_60px_rgba(10,37,64,0.3)] relative overflow-hidden group">

                        {/* Interactive abstract glow */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none transition-all duration-1000 group-hover:bg-brand-accent/40" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue-light/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 relative z-10 w-full lg:w-auto text-center lg:text-left shrink-0">
                            <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 backdrop-blur-xl shadow-inner group-hover:scale-110 transition-transform duration-700 mx-auto lg:mx-0">
                                <ShieldCheck className="w-10 h-10 text-white" />
                            </div>
                            <div>
                                <h3 className="text-5xl md:text-7xl font-display font-bold mb-2 tracking-tighter text-white drop-shadow-md">70+</h3>
                                <p className="text-white/60 font-medium uppercase tracking-[0.2em] text-xs">Stranded Passengers Rescued</p>
                            </div>
                        </div>

                        <div className="relative z-10 w-full lg:max-w-xl text-center lg:text-left lg:border-l lg:border-white/10 lg:pl-16">
                            <Quote className="w-8 h-8 text-brand-accent/50 mb-6 mx-auto lg:mx-0" />
                            <p className="font-sans font-light text-xl md:text-2xl leading-relaxed text-white/90">
                                "When a volcanic ash cloud grounded flights across Europe, our team worked through the night to reroute and safely bring home an entire 70-person corporate group. <span className="font-medium text-white">That's the Universal Travel promise.</span>"
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center mb-16 px-4 trust-item text-center">
                    <HeadingBlock
                        title="Trusted by 5,000+ Travelers"
                        subtitle="From Ahmedabad to everywhere. Hear from clients who have experienced the true Universal Travel standard of care."
                        alignment="center"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
                    {TESTIMONIALS.map((t, idx) => (
                        <div
                            key={idx}
                            className="trust-item relative group bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 flex flex-col justify-between h-full border border-brand-text/5 hover:border-brand-text/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,37,64,0.06)] overflow-hidden"
                        >
                            {/* Decorative gradient blob */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-blue-light rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10 flex-1">
                                <div className="flex gap-1.5 mb-8 text-brand-accent">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} fill="currentColor" className="w-4 h-4" />
                                    ))}
                                </div>
                                <p className="text-brand-text text-lg leading-relaxed mb-10 font-sans font-light tracking-wide">
                                    "{t.text}"
                                </p>
                            </div>

                            <div className="flex items-center gap-5 pt-8 border-t border-brand-text/5 relative z-10 mt-auto">
                                <div className="h-12 w-12 rounded-full bg-brand-blue/5 flex items-center justify-center font-display font-semibold text-brand-text/40 shrink-0 text-lg">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-text text-base">{t.author}</h4>
                                    <p className="text-brand-text-muted text-sm font-light mt-0.5">{t.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

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
