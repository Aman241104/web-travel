"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useStagger } from "@/lib/animations/use-stagger";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { HeadingBlock } from "@/components/ui/heading-block";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

const DESTINATIONS = [
    {
        id: "dest-1",
        title: "The Swiss Alps",
        nights: "7 Nights, 8 Days",
        tagline: "Panoramic glaciers & luxury trains",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2940&auto=format&fit=crop",
        className: "md:col-span-2",
        price: "From ₹1,85,000",
        href: "/tours/the-swiss-alps",
    },
    {
        id: "dest-2",
        title: "Maldives Escapes",
        nights: "4 Nights, 5 Days",
        tagline: "Bespoke overwater villas",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2865&auto=format&fit=crop",
        className: "md:col-span-1",
        price: "From ₹85,000",
        href: "/tours/maldives-escapes",
    },
    {
        id: "dest-3",
        title: "Bali Immersive",
        nights: "6 Nights, 7 Days",
        tagline: "Culture, jungles & coastlines",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2838&auto=format&fit=crop",
        className: "md:col-span-1",
        price: "From ₹65,000",
        href: "/tours/bali-immersive",
    },
    {
        id: "dest-4",
        title: "Dubai & Abu Dhabi",
        nights: "5 Nights, 6 Days",
        tagline: "Architectural marvels & desert safaris",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop",
        className: "md:col-span-2",
        price: "From ₹55,000",
        href: "/tours/dubai-and-abu-dhabi",
    }
];

const Skeleton = ({ image }: { image: string }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl relative overflow-hidden">
        <Image
            src={image}
            alt="Destination"
            fill
            className="object-cover transform transition-transform duration-1000 ease-out group-hover/bento:scale-110"
        />
    </div>
);

export function DestinationsGrid() {
    const gridRef = useRef<HTMLDivElement>(null);

    useStagger({
        containerRef: gridRef,
        selector: ".group\\/bento",
        staggerTime: 0.15,
        yOffset: 50,
    });

    return (
        <SectionWrapper background="alt" className="pt-24 md:pt-32">
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
                        className="flex-shrink-0 border-brand-text/30 hover:border-brand-text hover:bg-brand-text hover:text-white transition-all duration-500 rounded-full"
                    >
                        Request Custom Itinerary
                    </WhatsAppCTA>
                </div>

                <div ref={gridRef}>
                    <BentoGrid className="max-w-6xl mx-auto">
                        {DESTINATIONS.map((dest, i) => (
                            <Link href={dest.href} key={i} className={dest.className}>
                                <BentoCard
                                    title={dest.title}
                                    description={dest.tagline}
                                    header={<Skeleton image={dest.image} />}
                                    className="h-full w-full"
                                    icon={<span className="text-xs uppercase tracking-[0.2em] font-medium backdrop-blur-md bg-white/20 text-white px-4 py-1.5 rounded-full border border-white/30 inline-block shadow-sm">{dest.nights} • {dest.price}</span>}
                                />
                            </Link>
                        ))}
                    </BentoGrid>
                </div>
            </Container>
        </SectionWrapper>
    );
}
