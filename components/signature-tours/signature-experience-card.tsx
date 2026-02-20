"use client";

import Image from "next/image";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";
import { ArrowRight } from "lucide-react";
import { trackTourView } from "@/components/ui/resume-planning-toast";
import { useRouter } from "next/navigation";

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
    const router = useRouter();

    const handleCardClick = () => {
        trackTourView(data.title);
        // Fallback to simple slug logic for routing to our single dynamically generated page
        const slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        router.push(`/tours/${slug}`);
    };

    return (
        <div
            className="group relative w-full h-[600px] md:h-[700px] rounded-[2rem] overflow-hidden isolate cursor-pointer bg-brand-text"
            onClick={handleCardClick}
            onMouseEnter={() => trackTourView(data.title)}
            onTouchStart={() => trackTourView(data.title)}
        >
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Always-on gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/40 to-transparent mix-blend-multiply" />
                {/* Interactive darkening overlay on hover */}
                <div className="absolute inset-0 bg-brand-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 z-10 p-8 md:p-12 flex flex-col justify-between text-white">

                {/* Top: Customization Indicator */}
                <div className="self-start relative transform transition-transform duration-700 group-hover:-translate-y-2">
                    {data.customizable && (
                        <div className="inline-flex items-center gap-2 bg-black/40 md:bg-white/10 md:backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                            100% Customizable
                        </div>
                    )}
                </div>

                {/* Bottom: Title & Reveal Content */}
                <div className="mt-auto transform transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-16 group-hover:translate-y-0">

                    <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 drop-shadow-md">
                        {data.title}
                    </h3>

                    {/* The Emotional Hook (Always visible but shifts up) */}
                    <p className="text-xl md:text-2xl font-light text-white/90 leading-tight mb-8 max-w-lg">
                        {data.hookLine}
                    </p>

                    {/* The Hidden Details Layer (Reveals on Hover) */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 ease-in-out">

                        <div className="flex flex-wrap gap-3 mb-8">
                            {data.sensoryCues.map((cue, idx) => (
                                <span key={idx} className="text-sm border border-white/30 px-3 py-1 rounded-full text-white/80 bg-white/5">
                                    {cue}
                                </span>
                            ))}
                        </div>

                        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex flex-col">
                                <span className="text-xs uppercase tracking-widest text-white/60 mb-1">Curated from</span>
                                <span className="text-xl font-medium tracking-tight text-white/90">{data.startingRange}</span>
                            </div>

                            <div onClick={(e) => e.stopPropagation()}>
                                <WhatsAppCTA
                                    variant="premium"
                                    message={`Hi Heena/Team! I am very interested in customizing a trip based on the "${data.title}" signature experience. Can we discuss?`}
                                    className="group/btn bg-white text-brand-blue hover:bg-brand-accent hover:text-white border-0 py-6"
                                >
                                    <span className="mr-2">Discuss this trip</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                </WhatsAppCTA>
                            </div>
                        </div>

                        <p className="text-xs text-white/50 mt-4 text-center md:text-left flex items-center justify-center md:justify-start gap-1">
                            Pricing depends on final bespoke itinerary and dates.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
