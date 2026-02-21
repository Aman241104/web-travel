"use client";

import { useRef, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertOctagon, Plane, RotateCcw, CheckCircle2 } from "lucide-react";

const TIMELINE_STEPS = [
    {
        id: "01",
        time: "Sunday Night",
        title: "The Crisis",
        description: "A corporate group of 70 passengers had their return flights unexpectedly cancelled from Bangalore to Ahmedabad by the airline.",
        icon: <AlertOctagon size={28} />,
        color: "text-red-500",
        bg: "bg-red-500/10",
        borderColor: "border-red-500/20",
    },
    {
        id: "02",
        time: "Immediate Action",
        title: "The Negotiation",
        description: "Our team stepped in immediately, fighting with airline management while keeping all 70 clients completely insulated from the stress.",
        icon: <RotateCcw size={28} />,
        color: "text-brand-accent",
        bg: "bg-brand-accent/10",
        borderColor: "border-brand-accent/20",
    },
    {
        id: "03",
        time: "Within Hours",
        title: "The Pivot",
        description: "Successfully secured and coordinated 3 completely new flights across different carriers to reroute the entire group simultaneously.",
        icon: <Plane size={28} />,
        color: "text-sky-500",
        bg: "bg-sky-500/10",
        borderColor: "border-sky-500/20",
    },
    {
        id: "04",
        time: "T+7 Hours",
        title: "The Resolution",
        description: "Brought all 70 passengers home safely to Ahmedabad within 7 hours of the original cancellation — zero operational casualties.",
        icon: <CheckCircle2 size={28} />,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        borderColor: "border-emerald-500/20",
    },
];

export function CrisisTimeline() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Title block fade up
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 85%",
                    once: true,
                },
            });

            // Line-draw animation: clip-path reveals left → right
            if (lineRef.current) {
                gsap.fromTo(
                    lineRef.current,
                    { clipPath: "inset(0 100% 0 0)" },
                    {
                        clipPath: "inset(0 0% 0 0)",
                        duration: 1.8,
                        ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: timelineRef.current,
                            start: "top 80%",
                            once: true,
                        },
                    }
                );
            }

            // Cards: sequential stagger reveal
            const cards = gsap.utils.toArray<HTMLElement>(".timeline-card");
            gsap.from(cards, {
                opacity: 0,
                y: 55,
                duration: 1.1,
                ease: "power3.out",
                stagger: 0.22,
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: "top 82%",
                    once: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <SectionWrapper background="alt" spacing="default" className="border-t border-brand-text/5 relative overflow-hidden">
            {/* Dramatic header gradient band */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-brand-blue/8 to-transparent pointer-events-none" />
            {/* Ambient orb */}
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-blue/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div ref={sectionRef}>
                <Container>
                    {/* Section heading */}
                    <div ref={titleRef} className="max-w-3xl mx-auto text-center mb-6">
                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-text mb-4">
                            When the Unexpected Happens, <br className="hidden md:block" />
                            <span className="text-brand-accent">We Become Your Shield.</span>
                        </h2>
                        <p className="text-xl font-sans text-brand-text-muted leading-relaxed font-light mb-6">
                            Real-world proof of our 24/7 crisis capability. A true logistical case study.
                        </p>

                        {/* The bold stat sub-headline */}
                        <div className="inline-flex items-center gap-3 rounded-2xl bg-brand-blue px-8 py-4 shadow-lg">
                            {["70 Passengers", "3 Airlines", "7 Hours"].map((stat, i) => (
                                <div key={stat} className="flex items-center gap-3">
                                    <span className="font-display text-lg md:text-xl font-bold text-white whitespace-nowrap">
                                        {stat}
                                    </span>
                                    {i < 2 && (
                                        <span className="text-brand-accent/60 text-xl font-light">·</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline grid */}
                    <div
                        ref={timelineRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto relative mt-16"
                    >
                        {/* Connecting line — animated via clip-path */}
                        <div
                            ref={lineRef}
                            className="hidden lg:block absolute top-[68px] left-12 right-12 h-px bg-gradient-to-r from-red-400/40 via-brand-accent/60 to-emerald-400/40"
                            style={{ clipPath: "inset(0 100% 0 0)" }}
                        />

                        {TIMELINE_STEPS.map((step) => (
                            <div
                                key={step.id}
                                className="timeline-card relative z-10 bg-white rounded-3xl p-8 border border-brand-text/5 shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col h-full group"
                            >
                                {/* Icon + step number row */}
                                <div className="flex items-center justify-between mb-8">
                                    <div
                                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${step.bg} ${step.color} border ${step.borderColor} group-hover:scale-105 transition-transform duration-300`}
                                    >
                                        {step.icon}
                                    </div>
                                    <span className="font-display text-6xl font-black text-brand-text/[0.04]">
                                        {step.id}
                                    </span>
                                </div>

                                {/* Timestamp */}
                                <div className="mb-2">
                                    <span className="text-xs tracking-widest uppercase font-bold text-brand-text/40">
                                        {step.time}
                                    </span>
                                </div>

                                <h3 className="font-display text-2xl font-semibold text-brand-text mb-4">
                                    {step.title}
                                </h3>

                                <p className="text-brand-text-muted text-sm md:text-base leading-relaxed mt-auto">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </SectionWrapper>
    );
}
