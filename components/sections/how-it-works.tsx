"use client";

import { useRef } from "react";
import { useStagger } from "@/lib/animations/use-stagger";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { HeadingBlock } from "@/components/ui/heading-block";
import { MessageCircle, Map, PlaneTakeoff, ShieldCheck } from "lucide-react";

export function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);

    useStagger({
        containerRef,
        selector: ".process-card",
        staggerTime: 0.15,
        yOffset: 30,
    });

    const STEPS = [
        {
            title: "Say Hello",
            description: "No forms required. Start a conversation directly with our planners via WhatsApp.",
            icon: <MessageCircle className="w-8 h-8 text-brand-blue" />,
            badge: "01",
            bgClass: "bg-brand-blue/5"
        },
        {
            title: "We Curate",
            description: "We handle the friction: flights, tricky visas, hand-picked stays, and local forex.",
            icon: <Map className="w-8 h-8 text-brand-blue" />,
            badge: "02",
            bgClass: "bg-brand-blue/5"
        },
        {
            title: "Approve & Pack",
            description: "Review your transparent quote. Once approved, we book everything. You just pack.",
            icon: <PlaneTakeoff className="w-8 h-8 text-brand-blue" />,
            badge: "03",
            bgClass: "bg-brand-blue/5"
        },
        {
            title: "24/7 Support",
            description: "From takeoff to return, your dedicated expert is just a message away the entire time.",
            icon: <ShieldCheck className="w-8 h-8 text-white" />,
            badge: "04",
            bgClass: "bg-brand-accent shadow-[0_0_20px_rgba(0,82,255,0.4)] shadow-brand-accent/40"
        }
    ];

    return (
        <SectionWrapper background="alt" className="relative pb-24 md:pb-32 overflow-hidden z-10 -mt-10 pt-20 rounded-t-[3rem]">
            <Container ref={containerRef}>
                <div className="flex flex-col items-center text-center mb-16 md:mb-20 px-4">
                    <HeadingBlock
                        title="Effortless Planning"
                        subtitle="We've removed the friction. No endless forms, no hidden fees. Just direct access to human experts who care about your journey."
                        alignment="center"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 px-4">
                    {STEPS.map((step, idx) => (
                        <div
                            key={idx}
                            className="process-card group relative bg-white rounded-[2rem] p-8 md:p-10 border border-brand-text/5 flex flex-col items-start gap-12 hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-[0_20px_40px_rgba(10,37,64,0.06)] overflow-hidden"
                        >
                            {/* Abstract decorative shape */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-text/[0.02] rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 group-hover:bg-brand-accent/5 transition-colors duration-500 pointer-events-none" />

                            <div className="flex w-full justify-between items-start relative z-10">
                                <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center ${step.bgClass} group-hover:scale-110 transition-transform duration-500 shrink-0`}>
                                    {step.icon}
                                </div>
                                <span className="text-3xl font-display font-light text-brand-text/20 leading-none mt-2">
                                    {step.badge}
                                </span>
                            </div>

                            <div className="relative z-10 mt-auto">
                                <h3 className="font-display text-2xl font-semibold text-brand-text mb-3 tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="font-sans text-brand-text-muted text-base leading-relaxed font-light">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </SectionWrapper>
    );
}
