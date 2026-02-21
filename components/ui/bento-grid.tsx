import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[28rem] grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoCard = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-[2rem] group/bento transition-all duration-700 overflow-hidden relative cursor-pointer bg-brand-blue flex flex-col shadow-lg hover:shadow-2xl hover:shadow-brand-blue/20",
                className
            )}
        >
            <div className="absolute inset-0 z-0 bg-brand-text">
                {header}
            </div>

            {/* Base Gradient - Always present but subtle */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/20 to-transparent z-10 transition-opacity duration-700" />

            {/* Interactive Hover Overlay - Slides up to provide deep contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/80 to-transparent z-10 opacity-0 transform translate-y-8 group-hover/bento:opacity-100 group-hover/bento:translate-y-0 transition-all duration-500 ease-out" />

            <div className="relative z-20 flex flex-col h-full justify-end p-8 pb-12 md:p-10 transform transition-transform duration-500">
                {icon && <div className="mb-4 transform transition-transform duration-500 group-hover/bento:-translate-y-2">{icon}</div>}
                <div className="font-display font-medium tracking-tight text-white text-3xl md:text-4xl mb-3 drop-shadow-md transform transition-transform duration-500 group-hover/bento:-translate-y-1">
                    {title}
                </div>
                <div className="font-sans font-light text-white/70 text-base md:text-lg leading-relaxed drop-shadow-sm transform transition-all duration-500 opacity-80 group-hover/bento:opacity-100 group-hover/bento:-translate-y-1">
                    {description}
                </div>

                {/* Reveal Arrow Indicator */}
                <div className="absolute bottom-10 right-10 translate-x-4 opacity-0 transition-all duration-500 group-hover/bento:translate-x-0 group-hover/bento:opacity-100 text-brand-accent">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </div>
            </div>

            {/* Subtle inner border for glassy feel */}
            <div className="absolute inset-0 z-30 border border-white/10 rounded-[2rem] pointer-events-none transition-colors duration-500 group-hover/bento:border-white/20" />
        </div>
    );
};
