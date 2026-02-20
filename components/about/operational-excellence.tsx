"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { useFadeIn } from "@/lib/animations/use-fade-in";

export function OperationalExcellence() {
    const contentRef = useRef<HTMLDivElement>(null);
    useFadeIn({ ref: contentRef, delay: 0.2, duration: 1.2, yOffset: 40 });

    return (
        <SectionWrapper background="dark" spacing="default" className="relative overflow-hidden">
            {/* Background Texture Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute -left-40 top-20 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl" />
            </div>

            <Container className="relative z-10">
                <div
                    ref={contentRef}
                    className="max-w-5xl mx-auto flex flex-col md:flex-row items-center bg-brand-blue/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 md:p-16 lg:p-20 shadow-2xl gap-12 lg:gap-20"
                >
                    {/* The Metric Left */}
                    <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-center">
                        <span className="font-display text-8xl md:text-9xl font-black text-white/90 drop-shadow-lg tracking-tighter">
                            100
                        </span>
                        <div className="inline-flex items-center gap-2 mt-4 backdrop-blur-md bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-medium text-brand-accent">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                            Group Members
                        </div>
                    </div>

                    {/* The Verification Right */}
                    <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                            Flawless Logistical Execution.
                        </h3>
                        <p className="text-xl font-sans text-white/70 leading-relaxed font-light mb-8 max-w-2xl">
                            We recently managed a highly complex domestic tour for <strong className="font-medium text-white">100 corporate members</strong>. Every transfer, meal, and stay was executed flawlessly—<strong className="text-brand-accent font-medium">completely without an on-site tour manager.</strong>
                        </p>
                        <p className="text-base font-sans text-white/50 leading-relaxed max-w-xl">
                            When the digital architecture and human intelligence behind the planning is perfect, the on-ground experience feels like magic. That is the Universal Travel standard.
                        </p>
                    </div>
                </div>
            </Container>
        </SectionWrapper>
    );
}
