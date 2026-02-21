"use client";

import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Compass, Map, Info, MessageCircle } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";

export function FloatingMobileNav() {
    const navRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);

    // Scroll-aware absolute threshold
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 80) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Trigger initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useGSAP(() => {
        if (!navRef.current) return;

        gsap.to(navRef.current, {
            y: isVisible ? 0 : 100,
            opacity: isVisible ? 1 : 0,
            duration: 0.4,
            ease: "power3.out"
        });
    }, [isVisible]);

    const items = [
        { name: "Home", href: "/", icon: Home },
        { name: "Services", href: "/services", icon: Compass },
        { name: "Tours", href: "/signature-tours", icon: Map },
        { name: "About", href: "/about", icon: Info },
    ];

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden w-[95%] max-w-[360px] pointer-events-none">
            <div
                ref={navRef}
                className="w-full pointer-events-auto"
            >
                <nav className="glass-panel rounded-full pl-5 pr-1.5 py-1.5 flex items-center justify-between shadow-lg shadow-black/5 border border-white/40">
                    {items.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex flex-col items-center gap-1 transition-colors",
                                    isActive ? "text-brand-accent scale-110" : "text-brand-text/60 hover:text-brand-text"
                                )}
                            >
                                <item.icon size={20} className={isActive ? "fill-brand-accent/20" : ""} />
                                <span className="text-[10px] font-medium">{item.name}</span>
                            </Link>
                        );
                    })}

                    {/* WhatsApp Button integrated in mobile nav */}
                    <div className="pl-3 border-l border-brand-text/10 shrink-0">
                        <WhatsAppCTA
                            intentCategory="general"
                            variant="default"
                            size="icon"
                            hideDefaultIcon={true}
                            className="rounded-full w-10 h-10 p-0 shadow-md bg-[#25D366] text-white hover:bg-[#22c35e] transition-all flex items-center justify-center group isolate"
                        >
                            <MessageCircle size={20} className="fill-current group-hover:scale-110 transition-transform" />
                        </WhatsAppCTA>
                    </div>
                </nav>
            </div>
        </div>
    );
}
