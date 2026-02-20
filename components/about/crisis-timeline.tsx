"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { useFadeIn } from "@/lib/animations/use-fade-in";
import { useStagger } from "@/lib/animations/use-stagger";
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
        borderColor: "border-red-500/20"
    },
    {
        id: "02",
        time: "Immediate Action",
        title: "The Negotiation",
        description: "Our team stepped in immediately, fighting with airline management while keeping the clients completely insulated from the stress.",
        icon: <RotateCcw size={28} />,
        color: "text-brand-accent",
        bg: "bg-brand-accent/10",
        borderColor: "border-brand-accent/20"
    },
    {
        id: "03",
        time: "Within Hours",
        title: "The Pivot",
        description: "Successfully secured and coordinated 3 completely new flights across different carriers to reroute the entire group simultaneously.",
        icon: <Plane size={28} />,
        color: "text-brand-blue-accent",
        bg: "bg-brand-blue-accent/10",
        borderColor: "border-brand-blue-accent/20"
    },
    {
        id: "04",
        time: "T+7 Hours",
        title: "The Resolution",
        description: "Brought all 70 passengers home safely to Ahmedabad within 7 hours of the original cancellation, with zero operational casualties.",
        icon: <CheckCircle2 size={28} />,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        borderColor: "border-emerald-500/20"
    }
];

export function CrisisTimeline() {
    const titleRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    useFadeIn({ ref: titleRef, delay: 0.1 });
    useStagger({ containerRef: timelineRef, selector: ".timeline-card", staggerTime: 0.2, yOffset: 40 });

    return (
        <SectionWrapper background="alt" spacing="default" className="border-t border-brand-text/5 relative overflow-hidden">
            {/* Background Texture Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <Container>
                <div ref={titleRef} className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-text mb-6">
                        When the Unexpected Happens, <br className="hidden md:block" />
                        <span className="text-brand-accent">We Become Your Shield.</span>
                    </h2>
                    <p className="text-xl font-sans text-brand-text-muted leading-relaxed font-light">
                        Real-world proof of our 24/7 crisis capability. A true logistical case study.
                    </p>
                </div>

                <div
                    ref={timelineRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto relative"
                >
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-[68px] left-12 right-12 h-px bg-brand-text/10" />

                    {TIMELINE_STEPS.map((step, idx) => (
                        <div key={step.id} className="timeline-card relative z-10 bg-white rounded-3xl p-8 border border-brand-text/5 shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col h-full">

                            <div className="flex items-center justify-between mb-8">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${step.bg} ${step.color} border ${step.borderColor}`}>
                                    {step.icon}
                                </div>
                                <span className="font-display text-4xl font-black text-brand-text/5">{step.id}</span>
                            </div>

                            <div className="mb-2">
                                <span className="text-xs tracking-widest uppercase font-bold text-brand-text/40">{step.time}</span>
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
        </SectionWrapper>
    );
}
