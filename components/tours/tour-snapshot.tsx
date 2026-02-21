"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plane, FileBadge, Users, HandPlatter, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";

interface TourSnapshotProps {
    flightsIncluded: boolean;
    visaType: string;
    groupType: string;
    idealFor: string;
    kitchenCaravan: boolean;
}

export function TourSnapshot({ flightsIncluded, visaType, groupType, idealFor, kitchenCaravan }: TourSnapshotProps) {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".snapshot-item", {
                opacity: 0,
                y: 15,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: { trigger: barRef.current, start: "top 95%", once: true },
            });
        }, barRef);
        return () => ctx.revert();
    }, []);

    const items = [
        {
            icon: Plane,
            label: "Flights",
            value: flightsIncluded ? "Included" : "Optional Add-on",
            color: "text-brand-blue bg-brand-blue/8",
            glow: flightsIncluded,
        },
        {
            icon: FileBadge,
            label: "Visa Logic",
            value: visaType,
            color: "text-brand-blue bg-brand-blue/8",
        },
        {
            icon: Users,
            label: "Scale",
            value: groupType,
            color: "text-emerald-600 bg-emerald-500/10",
        },
        {
            icon: Sparkles,
            label: "Ideal For",
            value: idealFor,
            color: "text-brand-accent bg-brand-accent/10",
        },
        {
            icon: HandPlatter,
            label: "Cuisine Support",
            value: kitchenCaravan ? "Jain / Kitchen Caravan Ready" : "Local Gourmet Curation",
            color: kitchenCaravan ? "text-amber-600 bg-amber-500/10" : "text-brand-text/60 bg-brand-text/5",
        },
    ];

    return (
        <SectionWrapper background="alt" className="py-0 border-b border-brand-text/5 relative z-20 shadow-sm" spacing="none">
            <Container>
                <div ref={barRef} className="grid grid-cols-2 md:grid-cols-5 gap-0">
                    {items.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className={`snapshot-item flex items-center gap-4 py-6 px-5 md:px-6 border-r border-brand-text/8 last:border-r-0 ${idx === 2 ? "col-span-2 md:col-span-1 border-t md:border-t-0 border-brand-text/8" : ""
                                    }`}
                            >
                                <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                                    <Icon size={17} />
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-[9px] uppercase tracking-[0.18em] text-brand-text/45 font-bold mb-1">
                                        {item.label}
                                    </span>
                                    <span className="text-sm font-semibold text-brand-text leading-tight truncate">
                                        {item.value}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </SectionWrapper>
    );
}
