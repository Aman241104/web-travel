"use client";

import { useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { useFadeIn } from "@/lib/animations/use-fade-in";

export function FounderProfile() {
    const contentRef = useRef<HTMLDivElement>(null);
    useFadeIn({ ref: contentRef, delay: 0.2, duration: 1.2, yOffset: 40 });

    return (
        <SectionWrapper background="default" spacing="large" className="overflow-hidden">
            <Container>
                <div
                    ref={contentRef}
                    className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
                >
                    {/* Placeholder for Heena's Image */}
                    <div className="w-full lg:w-5/12 relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl isolate">
                        <Image
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop"
                            alt="Heena Poriya - Founder & Travel Expert"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply" />
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-7/12 flex flex-col items-start text-left">
                        <div className="inline-flex items-center gap-2 rounded-full border border-brand-text/10 bg-brand-bg-alt px-5 py-2 mb-8 cursor-default">
                            <span className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
                            <span className="text-xs font-semibold text-brand-text tracking-widest uppercase">
                                The Visionary Behind the Journeys
                            </span>
                        </div>

                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text leading-tight mb-8">
                            Meet <span className="text-brand-accent">Heena Poriya</span>.
                        </h2>

                        <div className="space-y-6 text-lg md:text-xl font-sans font-light text-brand-text-muted leading-relaxed">
                            <p>
                                Driven by <strong className="font-medium text-brand-text">Powerful Communication and a Positive Mindset</strong>, Heena doesn't just book trips—she engineers flawless experiences.
                            </p>
                            <p>
                                What sets Universal Travel Planners apart isn’t just our access to luxury properties or our global vendor network; it’s the relentless dedication to solving impossible logistics so that our clients never have to.
                            </p>
                            <p className="italic border-l-4 border-brand-accent pl-6 py-2 mt-8 text-brand-text text-xl">
                                "Our standard is simple: when you travel with us, your only responsibility is making memories. We handle the rest."
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </SectionWrapper>
    );
}
