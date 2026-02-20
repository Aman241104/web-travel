"use client";

import { useRef } from "react";
import Image from "next/image";
import { useFadeIn } from "@/lib/animations/use-fade-in";
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
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-text mb-6">
                        The Experience Flow
                    </h2>
                    <p className="text-brand-text-muted font-sans text-lg leading-relaxed">
                        We don't build rigid itineraries. We design emotional story arcs. Here is a glimpse into how this journey unfolds.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto space-y-32">
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
    const ref = useRef<HTMLDivElement>(null);
    useFadeIn({ ref, delay: 0.1, yOffset: 40 });

    return (
        <div ref={ref} className={`flex flex-col gap-12 lg:gap-24 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
            {/* Image Box */}
            <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden isolate shadow-2xl">
                    <Image
                        src={beat.image}
                        alt={beat.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-brand-text/10 mix-blend-multiply" />
                </div>
            </div>

            {/* Text Box */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <span className="text-brand-accent font-semibold tracking-widest uppercase text-sm mb-4 block">
                    {beat.dayLabel}
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-brand-text mb-6 leading-tight">
                    {beat.title}
                </h3>
                <p className="text-brand-text-muted font-sans text-lg leading-relaxed">
                    {beat.description}
                </p>
                <div className="mt-8 border-t border-brand-text/10 pt-6">
                    <p className="text-xs uppercase tracking-widest text-brand-text/40 font-bold">Pacing: Leisure & Immersion</p>
                </div>
            </div>
        </div>
    );
}
