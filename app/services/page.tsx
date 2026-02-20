"use client";

import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";
import { CapabilityBlock } from "@/components/services/capability-block";
import { Globe, FileCheck, Landmark, Briefcase, ShieldAlert, HeartHandshake } from "lucide-react";

export default function ServicesPage() {
    return (
        <main className="w-full bg-brand-bg relative pb-32">

            {/* Minimalist, Authority Hero */}
            <SectionWrapper spacing="hero" background="alt" className="pt-40 pb-24 border-b border-brand-text/5">
                <Container className="max-w-4xl max-auto text-center flex flex-col items-center">
                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-text mb-6">
                        Execution. Not just planning.
                    </h1>
                    <p className="text-lg md:text-xl font-sans text-brand-text-muted max-w-2xl font-light leading-relaxed mb-10">
                        We are an operational shield against the complexity of international travel. Review our core capabilities below.
                    </p>
                </Container>
            </SectionWrapper>

            {/* The Capabilities Engine */}
            <SectionWrapper background="default" spacing="default" className="pt-20">
                <Container>
                    <div className="flex flex-col gap-8 md:gap-12 max-w-6xl mx-auto">

                        <CapabilityBlock
                            index={1}
                            title="International Logistics Engineering"
                            icon={<Globe size={32} strokeWidth={1.5} />}
                            problem="Fragmented bookings across OTAs lead to missed connections, stranded transfers, and immense cognitive load."
                            solution="Chronologically engineered planning. We synchronize every flight, bespoke stay, and ground transfer into a single, flawless timeline."
                            reassurance="End-to-end synchronization for zero-friction transit."
                            ctaIntent="general"
                            ctaMessage="Hi Heena, I need complex end-to-end logistics handled for my upcoming trip."
                        />

                        <CapabilityBlock
                            index={2}
                            title="Visa & Bureaucracy Shield"
                            icon={<FileCheck size={32} strokeWidth={1.5} />}
                            problem="International travel is increasingly stalled by complex visa requirements, strict paperwork, and high rejection fears."
                            solution="An internal team dedicated exclusively to navigating embassy bureaucracy, securing appointments, and organizing documentation."
                            proofSignal="High success rates for complex Schengen and US visas."
                            ctaIntent="visa-inquiry"
                            ctaMessage="Hello! I have a quick question regarding Schengen/International visa processes."
                        />

                        <CapabilityBlock
                            index={3}
                            title="Global Forex Solutions"
                            icon={<Landmark size={32} strokeWidth={1.5} />}
                            problem="Travelers constantly bleed money on hidden card fees, terrible airport exchange rates, and unexpected locks on their accounts."
                            solution="Turnkey financial framing pre-departure. We secure the best operational rates and load forex cards so you land functionally independent."
                            reassurance="Transparent financial management before you board."
                            ctaIntent="general"
                            ctaMessage="Hi team, I need forex guidance for my upcoming international travel."
                        />

                        <CapabilityBlock
                            index={4}
                            title="Corporate & Large Group Movement"
                            icon={<Briefcase size={32} strokeWidth={1.5} />}
                            problem="Moving 50+ people internationally requires military-grade logistics that standard travel agencies cannot scale to handle."
                            solution="Strategic charter coordination, synchronized mass ticketing, precise rally points, and dedicated remote operational management."
                            proofSignal="Managed 100-member complex domestic tour without an on-site manager."
                            ctaIntent="corporate"
                            ctaMessage="Hello, I'm inquiring on behalf of my company regarding corporate group travel and mass logistics."
                        />

                        <CapabilityBlock
                            index={5}
                            title="Kitchen Caravan Curations"
                            icon={<HeartHandshake size={32} strokeWidth={1.5} />}
                            problem="Strict dietary practices often mean compromising on the absolute quality or location of luxury international trips."
                            solution="We bring the kitchen to the world. A mobile culinary operation featuring dedicated chefs ensuring exact dietary adherence (Jain/Swaminarayan)."
                            reassurance="Never compromise your beliefs or comfort abroad."
                            ctaIntent="kitchen-caravan"
                            ctaMessage="Hi team, I'm interested in a Kitchen Caravan tour with specific dietary requirements for our group."
                        />

                        <CapabilityBlock
                            index={6}
                            title="24/7 Crisis Command Support"
                            icon={<ShieldAlert size={32} strokeWidth={1.5} />}
                            problem="When an airline strikes mid-trip, an automated booking platform leaves you entirely abandoned in a foreign country."
                            solution="We become your ultimate operational safety net. From re-routing entire groups to managing medical emergencies, we intercept the crisis."
                            proofSignal="Re-routed 70 cancelled passengers to 3 new flights inside 7 hours."
                            ctaIntent="general"
                            ctaMessage="Hi Heena, I need an expert planner who handles logistics and unexpected crises. Can we chat?"
                        />

                    </div>
                </Container>
            </SectionWrapper>

            {/* Bottom Final CTA */}
            <SectionWrapper background="alt" className="mt-20 border-t border-brand-text/5 pb-20 pt-20">
                <Container className="text-center max-w-3xl mx-auto">
                    <h2 className="font-display text-4xl font-bold text-brand-text mb-6">
                        Ready to shift the burden?
                    </h2>
                    <p className="text-brand-text-muted mb-10 leading-relaxed font-sans">
                        Let us build the architecture for your journey while you focus purely on the destination.
                    </p>
                    <WhatsAppCTA intentCategory="general" className="h-14 px-8 shadow-xl hover:scale-105">
                        Start the Conversation
                    </WhatsAppCTA>
                </Container>
            </SectionWrapper>
        </main>
    );
}
