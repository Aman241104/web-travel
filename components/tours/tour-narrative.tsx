"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/container";

export type ExperienceBeat = {
    dayLabel: string;
    title: string;
    description: string;
    image: string;
};

interface TourNarrativeProps {
    beats: ExperienceBeat[];
}

export function TourNarrative({ beats }: TourNarrativeProps) {
    return (
        <section className="w-full bg-white py-24 md:py-32">
            <Container>
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <div className="inline-flex items-center gap-2 rounded-full border border-brand-text/10 bg-brand-bg-alt px-5 py-2 mb-8">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
                        <span className="text-xs font-semibold text-brand-text tracking-widest uppercase">
                            How this journey unfolds
                        </span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-text mb-6">
                        The Experience Flow
                    </h2>
                    <p className="text-brand-text-muted font-sans text-lg leading-relaxed">
                        We don't build rigid itineraries. We design emotional story arcs — each chapter intentionally paced so you arrive fully present.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto space-y-32">
                    {beats.map((beat, idx) => (
                        <NarrativeBeat key={idx} beat={beat} index={idx} />
                    ))}
                </div>
            </Container>
        </section>
    );
}

function NarrativeBeat({ beat, index }: { beat: ExperienceBeat; index: number }) {
    const isEven = index % 2 === 0;
    const imgRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Image animation
        gsap.from(imgRef.current, {
            opacity: 0,
            x: isEven ? -60 : 60,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
            },
        });

        // Text animation
        gsap.from(textRef.current, {
            opacity: 0,
            x: isEven ? 60 : -60,
            duration: 1.2,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
            },
        });
    }, { scope: containerRef, dependencies: [isEven] });

    return (
        <div
            ref={containerRef}
            className={`flex flex-col gap-12 lg:gap-20 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center`}
        >
            {/* Image */}
            <div ref={imgRef} className="w-full lg:w-1/2">
                <div className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden isolate shadow-2xl group">
                    <Image
                        src={beat.image}
                        alt={beat.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-[2.5s] ease-out"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Chapter number overlay */}
                    <div className="absolute top-6 left-6 font-display text-8xl font-black text-white/10 leading-none select-none">
                        {String(index + 1).padStart(2, "0")}
                    </div>
                    {/* Day label pill on image */}
                    <div className="absolute bottom-6 left-6 right-6">
                        <span className="inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 text-xs font-bold text-white tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                            {beat.dayLabel}
                        </span>
                    </div>
                </div>
            </div>

            {/* Text */}
            <div ref={textRef} className="w-full lg:w-1/2 flex flex-col justify-center">
                {/* Step indicator */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-px bg-brand-accent" />
                    <span className="text-brand-accent font-semibold tracking-widest uppercase text-sm">
                        Chapter {String(index + 1).padStart(2, "0")}
                    </span>
                </div>

                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text mb-6 leading-tight">
                    {beat.title}
                </h3>
                <p className="text-brand-text-muted font-sans text-lg leading-relaxed">
                    {beat.description}
                </p>

                <div className="mt-10 border-t border-brand-text/10 pt-6 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-accent/60" />
                    <p className="text-xs uppercase tracking-widest text-brand-text/40 font-bold">
                        Pacing: Leisure & Immersion
                    </p>
                </div>
            </div>
        </div>
    );
}
