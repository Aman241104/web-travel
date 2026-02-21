"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const SKILL_TAGS = ["Powerful Communication", "Positive Mindset"];

export function FounderProfile() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Image slides in from left
            gsap.from(imgRef.current, {
                x: -70,
                opacity: 0,
                duration: 1.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 82%",
                    once: true,
                },
            });

            // Text block slides in from right
            gsap.from(textRef.current, {
                x: 70,
                opacity: 0,
                duration: 1.3,
                delay: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 82%",
                    once: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <SectionWrapper background="default" spacing="large" className="overflow-hidden">
            <Container>
                <div
                    ref={sectionRef}
                    className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
                >
                    {/* Image — animates from left */}
                    <div
                        ref={imgRef}
                        className="w-full lg:w-5/12 relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl isolate flex-shrink-0"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop"
                            alt="Heena Poriya - Founder & Travel Expert"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Warm brand tint overlay */}
                        <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply" />

                        {/* Floating credential badge */}
                        <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-5 shadow-xl">
                            <p className="font-display text-sm font-semibold text-brand-text tracking-wide mb-1">
                                Heena Poriya
                            </p>
                            <p className="text-xs text-brand-text-muted font-sans">
                                Founder & Lead Travel Architect, Universal Travel Planners
                            </p>
                        </div>
                    </div>

                    {/* Text — animates from right */}
                    <div
                        ref={textRef}
                        className="w-full lg:w-7/12 flex flex-col items-start text-left"
                    >
                        {/* Label pill */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-brand-text/10 bg-brand-bg-alt px-5 py-2 mb-8 cursor-default">
                            <span className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
                            <span className="text-xs font-semibold text-brand-text tracking-widest uppercase">
                                The Visionary Behind the Journeys
                            </span>
                        </div>

                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text leading-tight mb-6">
                            Meet <span className="text-brand-accent">Heena Poriya</span>.
                        </h2>

                        {/* Skill pills */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {SKILL_TAGS.map((skill) => (
                                <div
                                    key={skill}
                                    className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2 text-xs font-semibold text-white tracking-wide shadow-sm"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                                    {skill}
                                </div>
                            ))}
                        </div>

                        <div className="space-y-5 text-lg md:text-xl font-sans font-light text-brand-text-muted leading-relaxed">
                            <p>
                                Heena doesn't just book trips—she{" "}
                                <strong className="font-medium text-brand-text">
                                    engineers flawless experiences.
                                </strong>{" "}
                                Her approach is built on two non-negotiable principles: powerful communication that keeps every stakeholder aligned, and a positive mindset that turns crises into controlled resolutions.
                            </p>
                            <p>
                                What sets Universal Travel Planners apart isn't just access to luxury properties or a global vendor network—it's the relentless dedication to solving impossible logistics so that clients never have to think about the mechanics of travel.
                            </p>
                        </div>

                        {/* Pull-quote */}
                        <blockquote className="italic border-l-4 border-brand-accent pl-6 py-2 mt-8 text-brand-text text-xl font-sans">
                            "Our standard is simple: when you travel with us, your only responsibility is making memories. We handle the rest."
                        </blockquote>

                        {/* Micro-stat row */}
                        <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-brand-text/10 w-full">
                            <div className="flex flex-col">
                                <span className="font-display text-3xl font-bold text-brand-text">8+</span>
                                <span className="text-xs uppercase tracking-widest text-brand-text-muted mt-1 font-sans">Corporate Clients</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display text-3xl font-bold text-brand-text">100%</span>
                                <span className="text-xs uppercase tracking-widest text-brand-text-muted mt-1 font-sans">Crisis Resolution Rate</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display text-3xl font-bold text-brand-text">5+</span>
                                <span className="text-xs uppercase tracking-widest text-brand-text-muted mt-1 font-sans">Industries Served</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </SectionWrapper>
    );
}
