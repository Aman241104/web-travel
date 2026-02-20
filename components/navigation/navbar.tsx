"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useGSAP(() => {
        // Scroll aware background shift
        const showBackground = () => {
            gsap.to(headerRef.current, {
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid rgba(0,0,0,0.05)",
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const hideBackground = () => {
            gsap.to(headerRef.current, {
                backgroundColor: "transparent",
                backdropFilter: "blur(0px)",
                borderBottom: "1px solid transparent",
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const onScroll = () => {
            if (window.scrollY > 50) {
                showBackground();
                setIsScrolled(true);
            } else {
                hideBackground();
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        // Fire initially
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const textColorClass = isHome && !isScrolled ? "text-white" : "text-brand-text";

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300"
        >
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className={cn("font-display text-xl font-bold tracking-tight transition-colors duration-300", textColorClass)}>
                            Universal Travel<span className="text-brand-accent">.</span>
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className={cn("hidden md:flex items-center gap-8 transition-colors duration-300", textColorClass)}>
                        <a href="/" className="text-sm font-medium hover:text-brand-accent transition-colors">Home</a>
                        <a href="/services" className="text-sm font-medium hover:text-brand-accent transition-colors">Services</a>
                        <a href="/signature-tours" className="text-sm font-medium hover:text-brand-accent transition-colors">Signature Tours</a>
                        <a href="/about" className="text-sm font-medium hover:text-brand-accent transition-colors">About</a>
                    </nav>

                    {/* CTA Slot */}
                    <div className="hidden md:block">
                        <WhatsAppCTA intentCategory="general" variant="default">
                            Plan My Trip
                        </WhatsAppCTA>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={cn("md:hidden p-2 transition-colors duration-300", textColorClass)}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={24} className="text-brand-text" /> : <Menu size={24} />}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu Foundation */}
            <div
                className={cn(
                    "md:hidden absolute top-20 left-0 w-full bg-white border-b border-black/5 flex flex-col items-start p-6 gap-6 transition-all duration-300 overflow-hidden",
                    isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden py-0 border-transparent"
                )}
            >
                <a href="/" className="text-lg font-medium w-full border-b border-black/5 pb-2">Home</a>
                <a href="/services" className="text-lg font-medium w-full border-b border-black/5 pb-2">Services</a>
                <a href="/signature-tours" className="text-lg font-medium w-full border-b border-black/5 pb-2">Signature Tours</a>
                <a href="/about" className="text-lg font-medium w-full pb-2">About</a>
                <WhatsAppCTA intentCategory="general" className="w-full justify-center mt-4">
                    Plan My Trip
                </WhatsAppCTA>
            </div>
        </header>
    );
}
