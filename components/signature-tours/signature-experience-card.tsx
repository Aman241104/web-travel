"use client";

import Image from "next/image";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";
import { ArrowRight } from "lucide-react";
import { trackTourView } from "@/components/ui/resume-planning-toast";

export interface SignatureExperienceData {
    id: string;
    slug: string;
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
        <Link
            href={`/tours/${data.slug}`}
            className="group relative w-full h-[600px] md:h-[700px] rounded-[2rem] overflow-hidden isolate bg-brand-bg border border-brand-text/5 shadow-sm block cursor-pointer"
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
                {/* Always-on gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/30 to-transparent mix-blend-multiply" />
                {/* Hover glassmorphism overlay */}
                <div className="absolute inset-x-0 bottom-0 h-4/5 md:h-2/3 bg-gradient-to-t from-brand-blue/95 via-brand-blue/80 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out backdrop-blur-md" />
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 z-10 p-8 md:p-12 flex flex-col justify-between text-white">

                {/* Top: Customization badge */}
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

                    <p className="text-lg md:text-xl font-light text-white/95 leading-relaxed mb-6 md:mb-8 max-w-lg drop-shadow-md">
                        {data.hookLine}
                    </p>

                    {/* Hidden Details — reveal on hover */}
                    <div className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 ease-in-out">

                        <div className="hidden md:flex flex-wrap gap-3 mb-6">
                            {data.sensoryCues.map((cue, idx) => (
                                <span key={idx} className="text-sm border border-white/30 px-4 py-1.5 rounded-full text-white/90 bg-white/10 backdrop-blur-sm shadow-sm font-medium">
                                    {cue}
                                </span>
                            ))}
                        </div>

                        {/* FIX #5: Removed the "View Experience" ghost button (redundant — entire card is a Link).
                            Single CTA: WhatsApp only. No button overlap. */}
                        <div className="border-t border-white/20 pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 mb-1">Curated from</span>
                                <span className="text-2xl font-medium tracking-tight text-white">{data.startingRange}</span>
                            </div>

                            {/* Single action button — stops Link navigation so WA opens instead */}
                            <WhatsAppCTA
                                intentCategory="general"
                                variant="premium"
                                message={`Hi Heena! I am interested in the ${data.title} package. Can we discuss?`}
                                className="group/btn bg-white text-brand-blue hover:bg-brand-accent hover:text-white border-0 py-4 px-7 shadow-2xl backdrop-blur-none text-sm shrink-0"
                                onClick={(e: React.MouseEvent) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    const encodedMessage = encodeURIComponent(`Hi Heena! I am interested in the ${data.title} package. Can we discuss?`);
                                    window.open(`https://wa.me/919000000000?text=${encodedMessage}`, '_blank');
                                }}
                            >
                                <span className="mr-2 font-semibold">Discuss this trip</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                            </WhatsAppCTA>
                        </div>

                        <p className="text-xs text-white/45 mt-4 flex items-center gap-1">
                            Tap anywhere to view full experience details ·{" "}
                            Pricing depends on final itinerary and dates.
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
