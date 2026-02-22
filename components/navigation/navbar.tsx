"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const CATEGORIES = [
    { id: "all", label: "All Experiences" },
    { id: "honeymoon", label: "Honeymoon & Couples" },
    { id: "corporate", label: "Corporate Travel" },
    { id: "kitchen-caravan", label: "Special Dietary Tours" },
    { id: "family", label: "Family Holidays" },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navContainerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const isHome = pathname === "/";
    const isSignatureTours = pathname === "/signature-tours";
    const [activeCategoryId, setActiveCategoryId] = useState("all");

    React.useEffect(() => {
        const onScroll = () => {
            const scrolled = window.scrollY > 50;
            if (scrolled !== isScrolled) {
                setIsScrolled(scrolled);
            }
        };

        window.addEventListener("scroll", onScroll);
        onScroll(); // Fire initially
        return () => window.removeEventListener("scroll", onScroll);
    }, [isScrolled]);

    React.useEffect(() => {
        const handleCategoryChange = (e: any) => {
            if (e.detail) setActiveCategoryId(e.detail);
        };
        window.addEventListener('categoryChange', handleCategoryChange);
        return () => window.removeEventListener('categoryChange', handleCategoryChange);
    }, []);

    const handleCategorySelect = (id: string) => {
        setActiveCategoryId(id);
        window.dispatchEvent(new CustomEvent('categoryChange', { detail: id }));
    };

    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            gsap.to(navContainerRef.current, {
                width: isScrolled ? "95%" : "100%",
                maxWidth: isScrolled ? "1000px" : "100%",
                marginTop: isScrolled ? "1rem" : "0rem",
                borderRadius: isMobileMenuOpen
                    ? (isScrolled ? "1.5rem" : "0px")
                    : (isScrolled ? "2rem" : "0px"),
                backgroundColor: isScrolled || isMobileMenuOpen ? "rgba(255, 255, 255, 0.95)" : "transparent",
                backdropFilter: isScrolled || isMobileMenuOpen ? "blur(16px)" : "blur(0px)",
                border: isScrolled || isMobileMenuOpen ? "1px solid rgba(255,255,255,0.3)" : "1px solid transparent",
                boxShadow: isScrolled || isMobileMenuOpen ? "0 10px 30px -10px rgba(0,0,0,0.1)" : "none",
                duration: 0.4,
                ease: "power3.inOut",
            });
        });

        mm.add("(max-width: 767px)", () => {
            gsap.to(navContainerRef.current, {
                backgroundColor: isMobileMenuOpen ? "rgba(255, 255, 255, 0.95)" : "transparent",
                backdropFilter: isMobileMenuOpen ? "blur(16px)" : "blur(0px)",
                duration: 0.3
            });
        });

    }, [isScrolled, isMobileMenuOpen]);

    const textColorClass = isHome && !isScrolled && !isMobileMenuOpen ? "text-white" : "text-brand-text";

    return (
        <header className="absolute md:fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
            <div
                ref={navContainerRef}
                className="w-full pointer-events-auto flex flex-col transition-colors duration-300 overflow-hidden"
            >
                <div className="flex h-20 items-center justify-between px-6 md:px-10">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center">
                            <img
                                src={isHome && !isScrolled && !isMobileMenuOpen ? "/logo.jpeg" : "/logo.png"}
                                alt="Universal Travel"
                                className={cn("h-8 md:h-10 w-auto max-w-[150px] md:max-w-none object-contain transition-all duration-300", isHome && !isScrolled && !isMobileMenuOpen ? "rounded-full" : "")}
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className={cn("hidden md:flex items-center gap-8 transition-colors duration-300", textColorClass)}>
                        <Link href="/" className="text-sm font-medium hover:text-brand-accent transition-colors">Home</Link>
                        <Link href="/services" className="text-sm font-medium hover:text-brand-accent transition-colors">Services</Link>
                        <Link href="/signature-tours" className="text-sm font-medium hover:text-brand-accent transition-colors">Signature Tours</Link>
                        <Link href="/about" className="text-sm font-medium hover:text-brand-accent transition-colors">About</Link>
                    </nav>

                    {/* CTA Slot */}
                    <div className="hidden md:block">
                        <WhatsAppCTA intentCategory="general" variant="default" className={cn("rounded-full", isScrolled ? "shadow-md" : "")}>
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

                {/* Integrated Desktop Sub-Nav Tray (only on Signature Tours) */}
                {isSignatureTours && (
                    <div className="hidden md:flex w-full border-t border-brand-text/5 transition-all duration-300">
                        <div className="flex w-full overflow-x-auto no-scrollbar py-3 px-6 gap-6 lg:gap-10 items-center justify-start lg:justify-center">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => handleCategorySelect(cat.id)}
                                    className="relative whitespace-nowrap group focus:outline-none flex flex-col items-center py-2"
                                >
                                    <span className={cn(
                                        "text-xs uppercase tracking-[0.15em] transition-colors duration-300 font-medium",
                                        activeCategoryId === cat.id
                                            ? "text-brand-blue"
                                            : "text-brand-text/50 group-hover:text-brand-text/80"
                                    )}>
                                        {cat.label}
                                    </span>

                                    {/* Animated Active Indicator */}
                                    <span className={cn(
                                        "absolute -bottom-1 h-[2px] bg-brand-accent transition-all duration-500 ease-out",
                                        activeCategoryId === cat.id ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50"
                                    )} />
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div
                    className={cn(
                        "md:hidden w-full flex flex-col items-start px-6 transition-all duration-300 overflow-hidden",
                        isMobileMenuOpen ? "max-h-[500px] opacity-100 py-6 gap-6 rounded-b-[1.5rem] border-t border-black/5 bg-white/95 backdrop-blur-md" : "max-h-0 opacity-0 py-0 border-transparent rounded-b-[0px] gap-0 bg-white/0"
                    )}
                >
                    <Link href="/" className="text-lg font-medium w-full border-b border-black/5 pb-2 text-brand-text hover:text-brand-accent">Home</Link>
                    <Link href="/services" className="text-lg font-medium w-full border-b border-black/5 pb-2 text-brand-text hover:text-brand-accent">Services</Link>
                    <Link href="/signature-tours" className="text-lg font-medium w-full border-b border-black/5 pb-2 text-brand-text hover:text-brand-accent">Signature Tours</Link>
                    <Link href="/about" className="text-lg font-medium w-full pb-2 text-brand-text hover:text-brand-accent">About</Link>
                    <WhatsAppCTA intentCategory="general" className="w-full justify-center mt-2 rounded-full">
                        Plan My Trip
                    </WhatsAppCTA>
                </div>
            </div>
        </header>
    );
}
