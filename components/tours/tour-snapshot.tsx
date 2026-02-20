"use client";

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
    return (
        <SectionWrapper background="alt" className="py-8 md:py-10 border-b border-brand-text/5 relative z-20 shadow-sm">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-x-0 md:divide-x divide-brand-text/10">

                    <div className="flex items-center gap-4 md:justify-center">
                        <div className="w-10 h-10 rounded-full bg-brand-blue/5 text-brand-blue flex items-center justify-center shrink-0">
                            <Plane size={18} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-brand-text/50 font-bold mb-0.5">Flights</span>
                            <span className="text-sm font-semibold text-brand-text">{flightsIncluded ? "Included" : "Optional Add-on"}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 md:justify-center">
                        <div className="w-10 h-10 rounded-full bg-brand-blue/5 text-brand-blue flex items-center justify-center shrink-0">
                            <FileBadge size={18} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-brand-text/50 font-bold mb-0.5">Visa Logic</span>
                            <span className="text-sm font-semibold text-brand-text">{visaType}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 md:justify-center">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                            <Users size={18} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-brand-text/50 font-bold mb-0.5">Scale</span>
                            <span className="text-sm font-semibold text-brand-text">{groupType}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 md:justify-center">
                        <div className="w-10 h-10 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center shrink-0">
                            <Sparkles size={18} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-brand-text/50 font-bold mb-0.5">Ideal For</span>
                            <span className="text-sm font-semibold text-brand-text">{idealFor}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 col-span-2 md:col-span-1 border-t md:border-t-0 pt-4 md:pt-0 border-brand-text/10 md:justify-center">
                        <div className="w-10 h-10 rounded-full bg-brand-text/5 text-brand-text flex items-center justify-center shrink-0">
                            <HandPlatter size={18} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-brand-text/50 font-bold mb-0.5">Cuisine Support</span>
                            <span className="text-sm font-semibold text-brand-text">
                                {kitchenCaravan ? "Jain / Kitchen Caravan Ready" : "Local Gourmet Curation"}
                            </span>
                        </div>
                    </div>

                </div>
            </Container>
        </SectionWrapper>
    );
}
