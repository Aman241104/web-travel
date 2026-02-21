"use client";

import { useRef, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CountUpMetric {
    targetVal: number;
    suffix: string;
    label: string;
    description: string;
}

const METRICS: CountUpMetric[] = [
    {
        targetVal: 100,
        suffix: "",
        label: "Group Members",
        description: "Flawless domestic tour without an on-site manager",
    },
    {
        targetVal: 7,
        suffix: " HRS",
        label: "Crisis-to-Resolution",
        description: "70 passengers rebooked across 3 airlines",
    },
];

export function OperationalExcellence() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const counter0Ref = useRef<HTMLSpanElement>(null);
    const counter1Ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // FIX #2: Removed gsap.context wrapper from CountUp — each counter gets its own
        // independent ScrollTrigger. No nested delay conflicts.
        const refs = [counter0Ref, counter1Ref];

        // Panel fade-in
        gsap.from(".excellence-panel", {
            opacity: 0,
            y: 40,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                once: true,
            },
        });

        // CountUp for each metric — independent ScrollTriggers, no shared context
        METRICS.forEach((metric, i) => {
            const el = refs[i].current;
            if (!el) return;
            const obj = { val: 0 };
            gsap.to(obj, {
                val: metric.targetVal,
                duration: metric.targetVal === 100 ? 2.5 : 1.8,
                ease: "power2.out",
                onUpdate() {
                    el.textContent = Math.round(obj.val) + metric.suffix;
                },
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    once: true,
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <SectionWrapper background="dark" spacing="default" className="relative overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute -left-40 top-20 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl" />
                <div className="absolute -right-20 bottom-10 w-[400px] h-[400px] bg-brand-accent/3 rounded-full blur-3xl" />
            </div>

            <Container className="relative z-10">
                <div
                    ref={sectionRef}
                    className="excellence-panel max-w-5xl mx-auto flex flex-col md:flex-row items-center bg-brand-blue/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 md:p-16 lg:p-20 shadow-2xl gap-12 lg:gap-20"
                >
                    {/* Left: Dual Metric Stack */}
                    <div className="w-full md:w-2/5 flex flex-col items-center gap-10 flex-shrink-0">
                        {METRICS.map((metric, i) => (
                            <div key={metric.label} className="flex flex-col items-center text-center w-full">
                                {/* Live counter — individual named refs, not array */}
                                <span
                                    ref={i === 0 ? counter0Ref : counter1Ref}
                                    className="font-display text-7xl md:text-8xl font-black text-white/90 drop-shadow-lg tracking-tighter leading-none tabular-nums"
                                >
                                    {i === 0 ? "0" : `0${metric.suffix}`}
                                </span>

                                <div className="inline-flex items-center gap-2 mt-3 backdrop-blur-md bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-medium text-brand-accent">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                                    {metric.label}
                                </div>

                                <p className="text-white/40 text-xs font-sans font-light mt-2 max-w-[160px] leading-relaxed">
                                    {metric.description}
                                </p>

                                {i < METRICS.length - 1 && (
                                    <div className="w-16 h-px bg-white/10 mt-8" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right: Narrative copy */}
                    <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Flawless Logistical Execution.
                        </h3>
                        <p className="text-xl font-sans text-white/70 leading-relaxed font-light mb-6 max-w-2xl">
                            We recently managed a highly complex domestic tour for{" "}
                            <strong className="font-medium text-white">100 corporate members</strong>. Every transfer, meal, and stay was executed flawlessly—{" "}
                            <strong className="text-brand-accent font-medium">
                                completely without an on-site tour manager.
                            </strong>
                        </p>
                        <p className="text-base font-sans text-white/50 leading-relaxed max-w-xl mb-8">
                            And when a corporate group of 70 had their flights cancelled on a Sunday night, we fought with airlines, secured 3 new carriers, and brought everyone home within 7 hours. This is the Universal Travel standard.
                        </p>

                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs font-semibold text-white/70 tracking-widest uppercase">
                                Verified Operational Record
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </SectionWrapper>
    );
}
