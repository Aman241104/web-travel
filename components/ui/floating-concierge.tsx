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
        <div className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-4 md:bottom-6 md:right-6 lg:bottom-10 lg:right-10 z-[60] flex items-center justify-end group">

            {/* Hover Tooltip */}
            <div className="absolute right-full mr-4 whitespace-nowrap bg-white text-brand-text px-4 py-2 rounded-xl text-sm font-medium shadow-xl opacity-0 translate-x-4 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 border border-brand-text/5 hidden sm:block">
                Chat with Heena's Team
                {/* Small indicator arrow */}
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-brand-text/5 rotate-45" />
            </div>

            <button
                onClick={handleClick}
                className={cn(
                    "relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:scale-105 active:scale-95 border-2 border-transparent hover:border-brand-accent/50 group-hover:shadow-[0_20px_50px_rgba(37,211,102,0.3)] isolate"
                )}
                aria-label="Chat on WhatsApp"
            >
                {/* Outer Pulse Animation */}
                <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />

                {/* Avatar / Icon Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-brand-bg-alt">
                    <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                        alt="Heena"
                        className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                </div>

                {/* WhatsApp Badge Overlay */}
                <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-[#25D366] rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                    <MessageCircle size={14} className="text-white fill-current" />
                </div>
            </button>
        </div>
    );
}
