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

    useEffect(() => {
        const handleCategoryChange = (e: any) => {
            if (e.detail) setActiveId(e.detail);
        };
        window.addEventListener('categoryChange', handleCategoryChange);
        return () => window.removeEventListener('categoryChange', handleCategoryChange);
    }, []);

    const handleSelect = (id: string) => {
        setActiveId(id);
        onSelect(id);
        window.dispatchEvent(new CustomEvent('categoryChange', { detail: id }));
    };

    return (
        <div ref={navRef} className="w-full md:hidden pb-4 bg-white/70 backdrop-blur-xl sticky top-0 z-40 border-b border-brand-text/5 transition-all duration-500">
            <Container>
                <div className="flex overflow-x-auto no-scrollbar py-4 gap-8 md:gap-12 items-center justify-start md:justify-center">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleSelect(cat.id)}
                            className="relative whitespace-nowrap group focus:outline-none flex flex-col items-center py-2"
                        >
                            <span className={cn(
                                "text-[10px] md:text-xs uppercase tracking-[0.15em] transition-colors duration-300 font-medium",
                                activeId === cat.id
                                    ? "text-brand-blue"
                                    : "text-brand-text/50 group-hover:text-brand-text/80"
                            )}>
                                {cat.label}
                            </span>

                            {/* Animated Active Indicator */}
                            <span className={cn(
                                "absolute -bottom-1 h-[2px] bg-brand-accent transition-all duration-500 ease-out",
                                activeId === cat.id ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50"
                            )} />
                        </button>
                    ))}
                </div>
            </Container>
        </div>
    );
}
