"use client";

import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ShieldCheck, FileCheck, Landmark, Car, Hotel } from "lucide-react";

export function TourLogistics() {
    const items = [
        { icon: <FileCheck className="w-8 h-8" />, label: "Embassy Visa processing & mock audits" },
        { icon: <Landmark className="w-8 h-8" />, label: "Pre-departure Forex card loading" },
        { icon: <Car className="w-8 h-8" />, label: "VIP Airport Transfers & internal routing" },
        { icon: <Hotel className="w-8 h-8" />, label: "4-Star & Premium Boutique accomodations" },
        { icon: <ShieldCheck className="w-8 h-8" />, label: "24/7 dedicated crisis command line" },
    ];

    return (
        <SectionWrapper background="dark" className="py-24 md:py-32 border-y border-white/10">
            <Container>
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-4 block">
                        The Operational Shield
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-8">
                        We handle the complexity. <br className="hidden md:block" /> You just pack.
                    </h2>
                    <p className="text-white/70 font-sans text-lg max-w-2xl mx-auto mb-16 font-light">
                        Every single logistical friction point of this journey is intercepted and managed by our in-house team before you even depart.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {items.map((item, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-[1.5rem] flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors">
                                <div className="text-brand-accent p-3 bg-brand-accent/10 rounded-full">
                                    {item.icon}
                                </div>
                                <span className="text-sm text-white/90 font-medium leading-snug">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </SectionWrapper>
    );
}
