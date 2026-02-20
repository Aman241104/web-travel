"use client";

import { useRef } from "react";
import Image from "next/image";
import { useStagger } from "@/lib/animations/use-stagger";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { HeadingBlock } from "@/components/ui/heading-block";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";
import { ArrowRight } from "lucide-react";

// Placeholder Destination Data
const DESTINATIONS = [
    {
        id: "dest-1",
        title: "The Swiss Alps",
        nights: "7 Nights, 8 Days",
        tagline: "Panoramic glaciers & luxury trains",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2940&auto=format&fit=crop",
        className: "col-span-1 md:col-span-2 row-span-2", // Flagship size
        price: "From ₹1,85,000",
    },
    {
        id: "dest-2",
        title: "Maldives Escapes",
        nights: "4 Nights, 5 Days",
        tagline: "Bespoke overwater villas",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2865&auto=format&fit=crop",
        className: "col-span-1 md:col-span-1 row-span-1",
        price: "From ₹85,000",
    },
    {
        id: "dest-3",
        title: "Bali Immersive",
        nights: "6 Nights, 7 Days",
        tagline: "Culture, jungles & coastlines",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2838&auto=format&fit=crop",
        className: "col-span-1 md:col-span-1 row-span-1",
        price: "From ₹65,000",
    },
    {
        id: "dest-4",
        title: "Dubai & Abu Dhabi",
        nights: "5 Nights, 6 Days",
        tagline: "Architectural marvels & desert safaris",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop",
        className: "col-span-1 md:col-span-2 row-span-1", // Wide block size
        price: "From ₹55,000",
    }
];

export function DestinationsGrid() {
    const gridRef = useRef<HTMLDivElement>(null);

    // Stagger reveal animation for the destination cards
    useStagger({
        containerRef: gridRef,
        selector: ".destination-card",
        staggerTime: 0.15,
        yOffset: 50,
    });

    return (
        <SectionWrapper background="alt">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <HeadingBlock
                        title="Curated Signatures"
                        subtitle="Our most sought-after experiences. Hand-picked stays, private transfers, and itineraries designed for unparalleled comfort."
                        className="flex-1"
                    />
                    <WhatsAppCTA
                        variant="outline"
                        intentCategory="general"
                        className="flex-shrink-0 border-brand-text/30 hover:border-brand-text hover:bg-brand-text hover:text-white transition-all duration-500"
                    >
                        Request Custom Itinerary
                    </WhatsAppCTA>
                </div>

                <div
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[350px]"
                >
                    {DESTINATIONS.map((dest) => (
                        <div
                            key={dest.id}
                            className={`destination-card group relative rounded-3xl overflow-hidden cursor-pointer isolate ${dest.className}`}
                        >
                            {/* Background Image Setup */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={dest.image}
                                    alt={dest.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />

                                {/* Always-on bottom gradient for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-text/90 via-brand-text/30 to-transparent" />

                                {/* Hover overlay for revealing CTA */}
                                <div className="absolute inset-0 bg-brand-text/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Card Meta Content - Base State */}
                            <div className="absolute inset-x-6 bottom-6 flex flex-col items-start text-white z-10 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-4">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-white/90 font-medium mb-3 backdrop-blur-md bg-white/10 px-3 py-1 rounded-full border border-white/20">
                                    {dest.nights}
                                </span>
                                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 drop-shadow-md">
                                    {dest.title}
                                </h3>
                                <p className="text-white/80 font-sans text-sm md:text-base font-light tracking-wide drop-shadow-sm">
                                    {dest.tagline}
                                </p>

                                {/* Hidden pricing and CTA that fades/slides up on hover */}
                                <div className="mt-5 pt-5 border-t border-white/20 w-full flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-75">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-widest text-white/60 mb-0.5">Starting from</span>
                                        <span className="font-medium text-lg tracking-tight">{dest.price}</span>
                                    </div>

                                    {/* Dedicated WhatsApp CTA per card */}
                                    <WhatsAppCTA
                                        message={`Hi! I saw the ${dest.title} (${dest.nights}) package on your site and want to check pricing/availability for my dates.`}
                                        variant="premium"
                                        size="icon"
                                        className="rounded-full bg-white text-brand-text hover:bg-brand-accent hover:text-brand-text border-0 shadow-lg h-12 w-12 hover:scale-110 transition-transform duration-300"
                                    >
                                        <ArrowRight size={20} />
                                    </WhatsAppCTA>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </SectionWrapper>
    );
}
