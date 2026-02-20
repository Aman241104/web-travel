"use client";

import { useRef } from "react";
import { useStagger } from "@/lib/animations/use-stagger";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { HeadingBlock } from "@/components/ui/heading-block";
import { MessageCircle, FileText, PlaneTakeoff, HeartHandshake } from "lucide-react";

const STEPS = [
    {
        id: "01",
        title: "Say Hello",
        description: "Tap WhatsApp and tell us your dream destination. No forms required—just start a conversation with Heena or our planners.",
        icon: <MessageCircle className="w-8 h-8 text-brand-bg relative z-10" />,
        color: "bg-[#25D366]" // WhatsApp Green
    },
    {
        id: "02",
        title: "We Curate",
        description: "Our experts piece together your itinerary. Flights, tricky visas, hand-picked stays, and local forex—we negotiate and organize the details for you.",
        icon: <FileText className="w-8 h-8 text-brand-bg relative z-10" />,
        color: "bg-brand-text"
    },
    {
        id: "03",
        title: "Approve & Pack",
        description: "Review a transparent quote. Once approved, we handle everything else. You just pack.",
        icon: <PlaneTakeoff className="w-8 h-8 text-brand-bg relative z-10" />,
        color: "bg-brand-text"
    },
    {
        id: "04",
        title: "24/7 Support",
        description: "Flight delayed? Need a restaurant reservation? From takeoff to return, your dedicated expert is just a WhatsApp message away.",
        icon: <HeartHandshake className="w-8 h-8 text-brand-bg relative z-10" />,
        color: "bg-brand-accent"
    }
];

export function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Stagger reveal the process steps
    useStagger({
        containerRef,
        selector: ".process-step",
        staggerTime: 0.2,
        yOffset: 30,
    });

    return (
        <SectionWrapper background="default">
            <Container className="max-w-6xl" ref={containerRef}>
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    <div className="lg:w-1/3 sticky top-32">
                        <HeadingBlock
                            title="How We Work"
                            subtitle="We've removed the friction. No endless forms, no hidden fees, and no automated call centers. Just direct access to human experts who care."
                        />
                    </div>


                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">

                        {/* Visual connector line for desktop */}
                        <div className="hidden md:block absolute top-[60px] left-12 right-12 h-px bg-brand-text/10" />

                        {STEPS.map((step, idx) => (
                            <div
                                key={step.id}
                                className="process-step flex flex-col items-start gap-4 relative w-full"
                            >
                                <div className="flex items-end gap-5 mb-2">
                                    <div className={`h-16 w-16 rounded-full flex items-center justify-center shrink-0 ${step.color} shadow-lg relative z-10`}>
                                        {/* Pulsing ring effect on hover */}
                                        <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-current transition-opacity group-hover:opacity-40" />
                                        {step.icon}
                                    </div>
                                    <span className="font-display font-medium text-brand-text/15 text-6xl md:text-7xl tabular-nums tracking-tighter leading-[0.8] relative top-2">
                                        {step.id}
                                    </span>
                                </div>

                                <div className="max-w-xs mt-2">
                                    <h3 className="font-display text-2xl font-semibold text-brand-text mb-2 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="font-sans text-brand-text/80 leading-relaxed text-base">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </Container>
        </SectionWrapper>
    );
}
