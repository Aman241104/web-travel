"use client";

import { useRef, useState, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import gsap from "gsap";

const CATEGORIES = [
    { id: "all", label: "All Experiences" },
    { id: "honeymoon", label: "Honeymoon & Couples" },
    { id: "corporate", label: "Corporate Retreats" },
    { id: "kitchen-caravan", label: "Kitchen Caravan Tours" },
    { id: "family", label: "Family Holidays" },
];

export function TourCategories({ onSelect }: { onSelect: (id: string) => void }) {
    const [activeId, setActiveId] = useState("all");
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(
            navRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 0.5 }
        );
    }, []);

    const handleSelect = (id: string) => {
        setActiveId(id);
        onSelect(id);
    };

    return (
        <div ref={navRef} className="w-full border-b border-brand-text/10 bg-brand-bg sticky top-[72px] z-40">
            <Container>
                <div className="flex overflow-x-auto no-scrollbar py-4 gap-8">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleSelect(cat.id)}
                            className={cn(
                                "whitespace-nowrap font-sans text-sm md:text-base tracking-wide transition-all duration-300 pb-1 border-b-2",
                                activeId === cat.id
                                    ? "text-brand-blue font-medium border-brand-accent/50"
                                    : "text-brand-text-muted hover:text-brand-blue border-transparent"
                            )}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </Container>
        </div>
    );
}
