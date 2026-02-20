"use client";

import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { WhatsAppCTA, IntentCategory } from "@/components/ui/whatsapp-cta";
import { CheckCircle2, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export interface LocalLandingProps {
    pageTitle: string; // Used for meta/schema
    heroTagline: string;
    heroHeadline: string; // e.g., "Expert Visa Assistance in Ahmedabad. Don't let paperwork ruin your trip."
    painAcknowledgement: string;
    heroImage: string;

    // Authority Proof Strip
    authorityStats: { label: string; value: string }[];

    // Relief Messaging
    reliefFeatures: { title: string; description: string }[];

    // Conversions
    ctaIntent: IntentCategory;
    ctaMessage: string;
    ctaButtonText?: string;

    // Micro FAQ
    faqItems: { question: string; answer: string }[];
}

export function LocalLandingTemplate({ data }: { data: LocalLandingProps }) {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <main className="w-full bg-brand-bg relative pb-16">

            {/* 1. HERO: Validation & Local Pain Acknowledgement */}
            <SectionWrapper spacing="hero" background="dark" className="relative min-h-[70vh] flex items-center pt-32 pb-24 border-b border-brand-text/5">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={data.heroImage}
                        alt={data.heroHeadline}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-brand-text/80 mix-blend-multiply" />
                </div>

                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 md:bg-white/5 md:backdrop-blur-md px-4 py-1.5 mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-semibold text-white/90 tracking-widest uppercase">Verified Local Partner: {data.heroTagline}</span>
                        </div>

                        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
                            {data.heroHeadline}
                        </h1>

                        <p className="text-lg md:text-xl text-white/80 font-sans leading-relaxed font-light mb-10 max-w-2xl">
                            {data.painAcknowledgement}
                        </p>

                        <WhatsAppCTA
                            intentCategory={data.ctaIntent}
                            message={data.ctaMessage}
                            className="w-full sm:w-auto h-14 px-8 text-base bg-emerald-500 hover:bg-white hover:text-brand-text text-white transition-all font-medium border-0"
                        >
                            {data.ctaButtonText || "Get Expert Help Immediately"}
                        </WhatsAppCTA>
                    </div>
                </Container>
            </SectionWrapper>

            {/* 2. AUTHORITY PROOF STRIP */}
            <div className="bg-white border-b border-brand-text/5 relative z-20 -mt-10 mx-4 md:mx-auto max-w-5xl rounded-[1.5rem] shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-around gap-8">
                {data.authorityStats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
                        <span className="font-display text-4xl font-bold text-brand-text">{stat.value}</span>
                        <span className="text-sm font-semibold uppercase tracking-widest text-brand-text-muted">{stat.label}</span>
                    </div>
                ))}
            </div>

            {/* 3. RELIEF MESSAGING */}
            <SectionWrapper background="default" className="pt-24 pb-20">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-text mb-4">
                            We handle the logistics. You just pack.
                        </h2>
                        <p className="text-brand-text-muted font-sans leading-relaxed">
                            Stop wasting hours researching outdated online requirements. Our exact local operations process ensures zero-friction travel execution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {data.reliefFeatures.map((feature, idx) => (
                            <div key={idx} className="p-8 rounded-[2rem] bg-white border border-brand-text/5 hover:border-brand-accent/20 transition-colors">
                                <CheckCircle2 className="text-brand-blue mb-6 w-8 h-8" />
                                <h3 className="font-display text-xl font-bold text-brand-text mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-brand-text-muted text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </SectionWrapper>

            {/* 4. MICRO FAQ (Real Anxieties Only) */}
            <SectionWrapper background="alt" className="py-24 border-y border-brand-text/5">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-display text-3xl font-bold text-brand-text mb-8 text-center">
                            Common Local Anxieties, Solved.
                        </h2>

                        <div className="flex flex-col gap-4">
                            {data.faqItems.map((faq, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                    className="text-left bg-white border border-brand-text/5 rounded-[1.5rem] p-6 hover:border-brand-text/10 transition-colors"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-brand-text text-lg pr-4">{faq.question}</span>
                                        <ChevronDown className={`shrink-0 transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                                    </div>

                                    <div
                                        className={`grid transition-all duration-300 ${openFaqIndex === idx ? 'grid-rows-[1fr] mt-4' : 'grid-rows-[0fr]'}`}
                                    >
                                        <p className="overflow-hidden text-brand-text-muted leading-relaxed font-sans text-sm md:text-base">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </Container>
            </SectionWrapper>

            {/* 5. FINAL CTA Conversion Block */}
            <SectionWrapper className="pt-24 pb-12">
                <Container className="text-center max-w-2xl mx-auto">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-text mb-6">
                        Speak directly to Heena's Team in Ahmedabad today.
                    </h2>
                    <WhatsAppCTA
                        intentCategory={data.ctaIntent}
                        message={data.ctaMessage}
                        className="w-full sm:w-auto h-16 px-12 text-lg shadow-2xl hover:scale-105"
                    >
                        {data.ctaButtonText || "Start the WhatsApp Chat"}
                    </WhatsAppCTA>
                    <p className="text-sm text-brand-text/40 mt-6 font-medium tracking-wide uppercase">
                        Instant Routing • Local Expertise • Zero Pressure
                    </p>
                </Container>
            </SectionWrapper>

        </main>
    );
}
