"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";
import { ArrowRight, Info, Heart, Users, Briefcase, HandPlatter } from "lucide-react";
import { cn } from "@/lib/utils";

interface TourPricingProps {
    destination: string;
    startingPrice: string;
    pricingNote: string;
}

const CUSTOMIZATION_OPTIONS = [
    { id: "family", label: "Scale for Family", icon: <Users size={16} />, intentSuffix: "tailored for a family." },
    { id: "honeymoon", label: "Honeymoon Suite", icon: <Heart size={16} />, intentSuffix: "with honeymoon/couples upgrades." },
    { id: "kitchen", label: "Add Kitchen Caravan", icon: <HandPlatter size={16} />, intentSuffix: "including a strict Kitchen Caravan." },
    { id: "corporate", label: "Corporate MICE", icon: <Briefcase size={16} />, intentSuffix: "scaled for a corporate MICE group." },
];

export function TourPricing({ destination, startingPrice, pricingNote }: TourPricingProps) {
    const [selectedCustomization, setSelectedCustomization] = useState<string | null>(null);

    const activeOption = CUSTOMIZATION_OPTIONS.find(opt => opt.id === selectedCustomization);
    const baseMessage = `Hi Heena, I'm exploring the ${destination} signature journey. I'd like to discuss customizing this route`;
    const finalMessage = activeOption ? `${baseMessage} ${activeOption.intentSuffix}` : `${baseMessage} for my specific dates.`;

    return (
        <SectionWrapper background="default" className="py-24 md:py-32">
            <Container>
                <div className="max-w-5xl mx-auto bg-white rounded-[2rem] border border-brand-text/10 shadow-2xl overflow-hidden flex flex-col md:flex-row">

                    {/* Left: Pricing Logic */}
                    <div className="w-full md:w-[45%] bg-brand-bg-alt p-10 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-brand-text/10">
                        <span className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-4 block">
                            Investment Parameters
                        </span>
                        <div className="mb-2 text-brand-text-muted font-medium">Starting From</div>
                        <div className="font-display text-5xl md:text-6xl font-bold text-brand-text mb-6">
                            {startingPrice}
                        </div>

                        <div className="flex items-start gap-3 text-sm text-brand-text-muted leading-relaxed bg-white/50 p-4 rounded-xl border border-brand-text/5">
                            <Info size={18} className="text-brand-blue shrink-0 mt-0.5" />
                            <p>{pricingNote}</p>
                        </div>
                    </div>

                    {/* Right: Customization Toggles */}
                    <div className="w-full md:w-[55%] bg-white p-10 md:p-16 flex flex-col">
                        <h3 className="font-display text-2xl font-bold text-brand-text mb-2">
                            This is just the starting point.
                        </h3>
                        <p className="text-brand-text-muted mb-8 text-sm md:text-base">
                            Select a variation below to adjust the conversation context before you chat with a planner.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-10">
                            {CUSTOMIZATION_OPTIONS.map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => setSelectedCustomization(opt.id === selectedCustomization ? null : opt.id)}
                                    className={cn(
                                        "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all border",
                                        selectedCustomization === opt.id
                                            ? "bg-brand-blue text-white border-brand-blue shadow-md"
                                            : "bg-white text-brand-text border-brand-text/10 hover:border-brand-accent/50 hover:bg-brand-accent/5"
                                    )}
                                >
                                    {opt.icon}
                                    {opt.label}
                                </button>
                            ))}
                        </div>

                        <div className="mt-auto border-t border-brand-text/10 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            <div className="text-sm text-brand-text-muted font-medium">
                                Ready to build your exact version?
                            </div>
                            <WhatsAppCTA
                                intentCategory="general"
                                message={finalMessage}
                                className="w-full sm:w-auto"
                                variant="premium"
                            >
                                <span className="mr-2">Craft my trip</span>
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </WhatsAppCTA>
                        </div>
                    </div>

                </div>
            </Container>
        </SectionWrapper>
    );
}
