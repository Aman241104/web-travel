"use client";

import { useRef, useState } from "react";
import { useFadeIn } from "@/lib/animations/use-fade-in";
import { WhatsAppCTA, IntentCategory } from "@/components/ui/whatsapp-cta";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

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
    className?: string;
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
    icon,
    className
}: CapabilityBlockProps) {
    const blockRef = useRef<HTMLDivElement>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    useFadeIn({ ref: blockRef, delay: 0.1 * index, yOffset: 20 });

    return (
        <div
            ref={blockRef}
            className={cn(
                "group relative bg-white/40 backdrop-blur-md border border-brand-text/10 rounded-[2rem] p-6 md:p-8 transition-all duration-500 hover:border-brand-accent/30 hover:shadow-2xl hover:shadow-brand-accent/10 hover:-translate-y-1 overflow-hidden flex flex-col h-full",
                className
            )}
        >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Header: Icon & Title */}
            <div className="flex items-start justify-between mb-6 relative z-10 w-full">
                <div className="h-14 w-14 bg-brand-bg-alt rounded-2xl flex items-center justify-center text-brand-blue border border-brand-text/5 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white shrink-0">
                    {icon}
                </div>
                <div className="text-sm font-display font-medium text-brand-text/30 bg-brand-bg rounded-full px-3 py-1 border border-brand-text/5">
                    0{index}
                </div>
            </div>

            <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-brand-text mb-4 leading-tight relative z-10 line-clamp-2 md:line-clamp-none">
                {title}
            </h3>

            {/* Content Display Area - The Magic Container */}
            <div className="relative z-10 flex-grow flex flex-col overflow-hidden transition-all duration-500">

                {/* Default State: Solution Summary + Proof/Reassurance */}
                <div className={cn("h-full transform transition-all duration-500", isExpanded ? "hidden md:flex flex-col opacity-0 invisible" : "flex flex-col opacity-100 visible md:group-hover:opacity-0 md:group-hover:invisible")}>
                    <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
                        {solution}
                    </p>

                    <div className="flex flex-col gap-3 text-xs font-medium text-brand-text-muted mt-auto pt-6 border-t border-brand-text/5">
                        {proofSignal && (
                            <div className="flex items-start gap-2">
                                <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span className="leading-tight">{proofSignal}</span>
                            </div>
                        )}
                        {reassurance && (
                            <div className="flex items-start gap-2 text-brand-blue font-semibold">
                                <div className="w-3 h-[1px] bg-brand-blue mt-1.5 shrink-0" />
                                <span className="leading-tight">{reassurance}</span>
                            </div>
                        )}
                    </div>

                    {/* Mobile Only: Expander Button */}
                    <button
                        onClick={() => setIsExpanded(true)}
                        className="md:hidden mt-4 text-xs font-semibold text-brand-blue uppercase tracking-widest flex items-center gap-1 justify-center w-full py-3 border border-brand-blue/10 rounded-xl bg-brand-blue/5 active:bg-brand-blue/10 transition-colors"
                    >
                        Tap for full details
                    </button>
                </div>

                {/* Hover State: Problem & Solution Deep Dive (Absolute overlay over the text area on desktop, Inline on mobile) */}
                <div className={cn("transform transition-all duration-500 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-brand-text/5 shadow-inner z-20",
                    "md:absolute md:inset-0 md:h-full w-full",
                    isExpanded ? "flex flex-col translate-y-0 opacity-100 visible" : "hidden md:flex flex-col translate-y-8 opacity-0 invisible md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-hover:visible"
                )}>
                    <div className="flex-grow flex flex-col overflow-y-auto custom-scrollbar">
                        <div className="my-auto flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-accent mb-2 block">The Industry Problem</span>
                            <p className="text-brand-text text-sm leading-relaxed font-medium mb-4">
                                {problem}
                            </p>

                            <div className="pt-4 border-t border-brand-text/10">
                                <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-blue mb-2 block">Our Solution</span>
                                <p className="text-brand-text-muted text-sm leading-relaxed">
                                    {solution}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Only: Close Button */}
                    <button
                        onClick={() => setIsExpanded(false)}
                        className="md:hidden mt-4 text-xs font-semibold text-brand-text-muted uppercase tracking-widest flex items-center gap-1 justify-center w-full py-3 border border-brand-text/10 rounded-xl bg-brand-text/5 active:bg-brand-text/10 transition-colors shrink-0"
                    >
                        Close details
                    </button>
                </div>

            </div>

            {/* Action Layer - Sticky bottom */}
            <div className="mt-8 pt-6 relative z-30 border-t border-brand-text/5 shrink-0">
                <WhatsAppCTA
                    intentCategory={ctaIntent}
                    message={ctaMessage}
                    variant="premium"
                    className="w-full bg-brand-text text-white hover:bg-brand-accent transition-all duration-300 py-4 md:py-6"
                >
                    <span className="mr-2 text-sm font-semibold md:font-normal">
                        <span className="md:hidden">Discuss</span>
                        <span className="hidden md:inline">Discuss this capability</span>
                    </span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </WhatsAppCTA>
            </div>
        </div>
    );
}
