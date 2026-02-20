"use client";

import { useRef } from "react";
import { useFadeIn } from "@/lib/animations/use-fade-in";
import { WhatsAppCTA, IntentCategory } from "@/components/ui/whatsapp-cta";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface CapabilityBlockProps {
    index: number;
    title: string;
    problem: string;
    solution: string;
    proofSignal?: string;
    reassurance?: string;
    ctaIntent: IntentCategory;
    ctaMessage?: string;
    icon: React.ReactNode;
}

export function CapabilityBlock({
    index,
    title,
    problem,
    solution,
    proofSignal,
    reassurance,
    ctaIntent,
    ctaMessage,
    icon
}: CapabilityBlockProps) {
    const blockRef = useRef<HTMLDivElement>(null);
    useFadeIn({ ref: blockRef, delay: 0.1, yOffset: 20 });

    return (
        <div
            ref={blockRef}
            className="group relative bg-white border border-brand-text/10 rounded-[2rem] p-8 md:p-12 transition-all duration-500 hover:border-brand-accent/30 hover:shadow-xl hover:shadow-brand-accent/5"
        >
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                {/* Left: The Pillar Identity */}
                <div className="w-full lg:w-1/3 flex flex-col items-start border-r-0 lg:border-r border-brand-text/5 pr-0 lg:pr-12">
                    <div className="h-16 w-16 bg-brand-bg-alt rounded-2xl flex items-center justify-center text-brand-blue mb-8 border border-brand-text/5 shadow-inner">
                        {icon}
                    </div>

                    <div className="text-xl font-display font-medium text-brand-text/30 mb-2">0{index}</div>
                    <h3 className="font-display text-3xl font-bold tracking-tight text-brand-text mb-4 leading-tight">
                        {title}
                    </h3>
                </div>

                {/* Right: The Breakdown */}
                <div className="w-full lg:w-2/3 flex flex-col">

                    {/* Problem vs Solution Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <div className="bg-brand-bg md:bg-transparent rounded-xl p-6 md:p-0 border border-brand-text/5 md:border-transparent">
                            <span className="text-xs uppercase tracking-widest font-semibold text-brand-accent mb-3 block">The Industry Problem</span>
                            <p className="text-brand-text-muted text-sm md:text-base leading-relaxed">
                                {problem}
                            </p>
                        </div>
                        <div className="bg-brand-blue/[0.03] md:bg-transparent rounded-xl p-6 md:p-0 border border-brand-blue/10 md:border-transparent">
                            <span className="text-xs uppercase tracking-widest font-semibold text-brand-blue mb-3 block">The Universal Solution</span>
                            <p className="text-brand-text leading-relaxed font-medium md:font-normal text-sm md:text-base">
                                {solution}
                            </p>
                        </div>
                    </div>

                    {/* Proof & Reassurance */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-medium text-brand-text-muted mb-10 pb-10 border-b border-brand-text/5">
                        {proofSignal && (
                            <div className="flex items-center gap-2 bg-brand-bg-alt px-4 py-2 rounded-lg border border-brand-text/10">
                                <CheckCircle2 size={16} className="text-emerald-500" />
                                {proofSignal}
                            </div>
                        )}
                        {reassurance && (
                            <div className="flex items-center gap-2 text-brand-blue font-semibold">
                                {/* Small indicator dash */}
                                <div className="w-4 h-[1px] bg-brand-blue" />
                                {reassurance}
                            </div>
                        )}
                    </div>

                    {/* Action Layer */}
                    <div className="mt-auto">
                        <WhatsAppCTA
                            intentCategory={ctaIntent}
                            message={ctaMessage}
                            variant="premium"
                            className="w-full sm:w-auto bg-brand-text text-white hover:bg-brand-accent group-hover:scale-105 transition-all duration-300"
                        >
                            <span className="mr-2">Discuss this capability</span>
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </WhatsAppCTA>
                    </div>

                </div>
            </div>
        </div>
    );
}
