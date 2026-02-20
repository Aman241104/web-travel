"use client";

import { useEffect, useState } from "react";
import { X, Heart, Briefcase, Users, HandPlatter, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

export const INTENT_OPTIONS = [
    {
        id: "honeymoon",
        label: "Honeymoon & Couples",
        icon: <Heart size={20} />,
        appendMessage: "for a honeymoon."
    },
    {
        id: "corporate",
        label: "Corporate / MICE",
        icon: <Briefcase size={20} />,
        appendMessage: "for a corporate group."
    },
    {
        id: "family",
        label: "Family Holiday",
        icon: <Users size={20} />,
        appendMessage: "for a family trip."
    },
    {
        id: "kitchen-caravan",
        label: "Kitchen Caravan (Dietary)",
        icon: <HandPlatter size={20} />,
        appendMessage: "requiring a Kitchen Caravan with specialized culinary needs."
    }
];

export function IntentSelectorModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [phone] = useState("919000000000"); // Standard placeholder

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener("open-intent-modal", handleOpen);
        return () => window.removeEventListener("open-intent-modal", handleOpen);
    }, []);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(
                ".intent-modal-content",
                { opacity: 0, y: 50, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.2)" }
            );
            gsap.to(".intent-modal-overlay", {
                opacity: 1, duration: 0.3, display: "flex"
            });
        } else {
            gsap.to(".intent-modal-overlay", {
                opacity: 0, duration: 0.3, display: "none"
            });
        }
    }, [isOpen]);

    const handleSelect = (appendMessage: string) => {
        const baseMessage = "Hi Heena/Team! I am looking to start planning a new trip with Universal Travel Planners";
        const finalMessage = `${baseMessage} ${appendMessage}`;
        const encodedMessage = encodeURIComponent(finalMessage);
        const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

        // Open in new window
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        setIsOpen(false);
    };

    return (
        <div className="intent-modal-overlay fixed inset-0 z-[100] hidden items-end sm:items-center justify-center bg-brand-text/80 backdrop-blur-sm p-4 touch-none overscroll-none pb-8 sm:pb-4">
            {/* Background click to close */}
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

            <div className="intent-modal-content relative w-full max-w-lg bg-white rounded-t-[2rem] sm:rounded-[2rem] shadow-2xl overflow-hidden isolate p-6 pt-10 sm:p-10 mb-0 mt-auto sm:mt-0 sm:mb-0 transition-all">

                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h3 className="font-display text-2xl font-bold tracking-tight text-brand-text mb-2">
                            What kind of journey are we crafting?
                        </h3>
                        <p className="text-brand-text-muted text-sm leading-relaxed">
                            Select an option below to connect with the right planner instantly via WhatsApp.
                        </p>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-10 h-10 rounded-full bg-brand-text/5 flex items-center justify-center text-brand-text/50 hover:bg-brand-text/10 hover:text-brand-text transition-colors"
                        aria-label="Close modal"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Dynamic Options List */}
                <div className="space-y-3">
                    {INTENT_OPTIONS.map((opt) => (
                        <button
                            key={opt.id}
                            onClick={() => handleSelect(opt.appendMessage)}
                            className="w-full flex items-center justify-between p-5 min-h-[4rem] rounded-2xl border border-brand-text/10 hover:border-brand-accent/50 active:bg-brand-accent/10 hover:bg-brand-accent/5 hover:shadow-sm transition-all group text-left"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-blue/5 text-brand-blue flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-colors">
                                    {opt.icon}
                                </div>
                                <span className="font-sans font-medium text-brand-text text-[15px]">{opt.label}</span>
                            </div>
                            <ArrowRight size={18} className="text-brand-text/30 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                        </button>
                    ))}
                </div>

                {/* Footer fallback */}
                <div className="mt-8 text-center border-t border-brand-text/5 pt-6">
                    <button
                        onClick={() => handleSelect("for general exploration.")}
                        className="text-xs font-semibold uppercase tracking-widest text-brand-text/40 hover:text-brand-blue transition-colors"
                    >
                        I'm not sure yet, skip to WhatsApp
                    </button>
                </div>

            </div>
        </div>
    );
}
