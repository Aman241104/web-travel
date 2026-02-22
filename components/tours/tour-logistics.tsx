"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ShieldCheck, FileCheck, Landmark, Car, Hotel } from "lucide-react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const LOGISTICS_ITEMS = [
    { icon: FileCheck, label: "Embassy Visa processing & mock audits" },
    { icon: Landmark, label: "Pre-departure Forex card loading" },
    { icon: Car, label: "VIP Airport Transfers & internal routing" },
    { icon: Hotel, label: "4-Star & Premium Boutique accommodations" },
    { icon: ShieldCheck, label: "24/7 dedicated crisis command line" },
];

export function TourLogistics() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        console.log("TourLogistics GSAP animation triggered");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
                once: true,
            }
        });

        tl.from(".logistics-heading", {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out",
        })
            .fromTo(".logistics-card",
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    stagger: 0.08,
                },
                "-=0.4"
            );

    }, { scope: sectionRef });

    return (
        <SectionWrapper background="dark" className="py-20 md:py-28 relative overflow-hidden border-y border-white/10">
            {/* Ambient glow orbs */}
            <div className="absolute -left-40 top-20 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -right-40 bottom-20 w-[500px] h-[500px] bg-brand-accent/3 rounded-full blur-3xl pointer-events-none" />

            <Container ref={sectionRef} className="relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="logistics-heading text-center mb-20">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
                            <span className="text-xs font-semibold text-white/60 tracking-widest uppercase">
                                The Operational Shield
                            </span>
                        </div>
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            We handle the complexity. <br className="hidden md:block" />
                            <span className="text-brand-accent">You just pack.</span>
                        </h2>
                        <p className="text-white/60 font-sans text-lg max-w-2xl mx-auto font-light">
                            Every logistical friction point is intercepted and managed by our in-house team before you even depart.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                        {LOGISTICS_ITEMS.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="logistics-card group bg-white/5 border border-white/10 p-7 rounded-[1.5rem] flex flex-col items-center text-center gap-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-brand-accent/15 border border-brand-accent/20 text-brand-accent group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm text-white/80 font-medium leading-snug">
                                        {item.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </SectionWrapper>
    );
}
