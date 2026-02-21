"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingConcierge() {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent("open-intent-modal"));
    };

    return (
        <div className="fixed bottom-24 left-4 md:bottom-6 md:right-6 lg:bottom-10 lg:right-10 z-[60] hidden md:flex items-center justify-start md:justify-end group">

            {/* Hover Tooltip */}
            <div className="absolute right-full mr-4 whitespace-nowrap bg-white text-brand-text px-4 py-2 rounded-xl text-sm font-medium shadow-xl opacity-0 translate-x-4 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 border border-brand-text/5 hidden md:block">
                Chat with Heena's Team
                {/* Small indicator arrow */}
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-brand-text/5 rotate-45" />
            </div>

            <button
                onClick={handleClick}
                className={cn(
                    "relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_15px_40px_rgba(37,211,102,0.3)] transition-transform duration-300 hover:scale-110 active:scale-95 border border-white/20 group-hover:shadow-[0_20px_50px_rgba(37,211,102,0.4)] isolate"
                )}
                aria-label="Chat on WhatsApp"
            >
                {/* Outer Pulse Animation */}
                <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30" />

                {/* WhatsApp Logo */}
                <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white fill-current relative z-10" />

            </button>
        </div>
    );
}
