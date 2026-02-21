"use client";

import Image from "next/image";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";
import { ArrowRight } from "lucide-react";
import { trackTourView } from "@/components/ui/resume-planning-toast";

export interface SignatureExperienceData {
    id: string;
    title: string;
    hookLine: string;
    sensoryCues: string[];
    startingRange: string;
    image: string;
    category: string;
    customizable: boolean;
}

interface Props {
    data: SignatureExperienceData;
}

export function SignatureExperienceCard({ data }: Props) {
    return (
        <div
            className="group relative w-full h-[600px] md:h-[700px] rounded-[2rem] overflow-hidden isolate bg-brand-bg border border-brand-text/5 shadow-sm"
            onMouseEnter={() => trackTourView(data.title)}
            onTouchStart={() => trackTourView(data.title)}
        >
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 bg-black">
                <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className="object-cover transition-transform duration-[2.5s] ease-[cubic-bezier(0.22,1,0.36,1)] scale-105 md:scale-100 group-hover:scale-110 opacity-100 md:opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Always-on gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/30 to-transparent mix-blend-multiply" />
                {/* Interactive glassmorphism overlay on hover (Always on for mobile) */}
                <div className="absolute inset-x-0 bottom-0 h-4/5 md:h-2/3 bg-gradient-to-t from-brand-blue/95 via-brand-blue/80 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out backdrop-blur-md" />
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 z-10 p-8 md:p-12 flex flex-col justify-between text-white">

                {/* Top: Customization Indicator */}
                <div className="self-start relative transform transition-transform duration-700 md:group-hover:-translate-y-2">
                    {data.customizable && (
                        <div className="inline-flex items-center gap-2 bg-black/40 md:bg-white/10 md:backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-medium shadow-lg">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                            100% Customizable
                        </div>
                    )}
                </div>

                {/* Bottom: Title & Reveal Content */}
                <div className="mt-auto transform transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-0 md:translate-y-24 group-hover:translate-y-0">

                    <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-2 md:mb-4 drop-shadow-xl text-white">
                        {data.title}
                    </h3>

                    {/* The Emotional Hook (Always visible but shifts up) */}
                    <p className="text-lg md:text-2xl font-light text-white/95 leading-relaxed mb-6 md:mb-8 max-w-lg drop-shadow-md">
                        {data.hookLine}
                    </p>

                    {/* The Hidden Details Layer (Reveals on Hover, Always visible on mobile) */}
                    <div className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 ease-in-out">

                        <div className="hidden md:flex flex-wrap gap-3 mb-8">
                            {data.sensoryCues.map((cue, idx) => (
                                <span key={idx} className="text-sm border border-white/30 px-4 py-1.5 rounded-full text-white/90 bg-white/10 backdrop-blur-sm shadow-sm font-medium">
                                    {cue}
                                </span>
                            ))}
                        </div>

                        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 mb-1">Curated from</span>
                                <span className="text-2xl font-medium tracking-tight text-white">{data.startingRange}</span>
                            </div>

                            <WhatsAppCTA
                                variant="premium"
                                message={`Hi Heena! I am interested in the ${data.title} package...`}
                                className="group/btn bg-white text-brand-blue hover:bg-brand-accent hover:text-white border-0 py-6 px-8 shadow-2xl backdrop-blur-none"
                            >
                                <span className="mr-3 font-medium text-base">Discuss this trip</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                            </WhatsAppCTA>
                        </div>

                        <p className="text-xs text-white/50 mt-5 text-center md:text-left flex items-center justify-center md:justify-start gap-1">
                            Pricing depends on final bespoke itinerary and dates.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
