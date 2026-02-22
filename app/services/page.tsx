"use client";

import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";
import { CapabilityBlock } from "@/components/services/capability-block";
import { Globe, FileCheck, Landmark, Briefcase, ShieldAlert, HeartHandshake } from "lucide-react";

export default function ServicesPage() {
    return (
        <main className="w-full bg-brand-bg relative pb-32">

            {/* Minimalist, Authority Hero with subtle ambient background */}
            <SectionWrapper spacing="hero" background="alt" className="pt-40 pb-24 border-b border-brand-text/5 relative overflow-hidden">
                {/* Ambient glow & dot grid for technical feel */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/5 rounded-[100%] blur-[100px] pointer-events-none" />

                <Container className="max-w-4xl max-auto text-center flex flex-col items-center">
                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-text mb-6">
                        Execution. Not just planning.
                    </h1>
                    <p className="text-lg md:text-xl font-sans text-brand-text-muted max-w-2xl font-light leading-relaxed mb-10">
                        We are an operational shield against the complexity of international travel. Review our core capabilities below.
                    </p>
                </Container>
            </SectionWrapper>

            {/* The Capabilities Engine (Bento Grid) */}
            <SectionWrapper background="default" spacing="default" className="pt-20">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-[1400px] mx-auto auto-rows-min">

                        <CapabilityBlock
                            index={1}
                            title="All-in-One Booking"
                            icon={<Globe size={32} strokeWidth={1.5} />}
                            problem="Booking flights, hotels, and transfers separately is stressful and leads to mistakes."
                            solution="We manage everything for you. Every flight, stay, and transfer is synchronized into one perfect timeline."
                            reassurance="Complete synchronization for a stress-free trip."
                            ctaIntent="general"
                            ctaMessage="Hi Heena, I need help managing my end-to-end travel bookings."
                            className="md:col-span-2 lg:col-span-2"
                        />

                        <CapabilityBlock
                            index={2}
                            title="Visa Assistance"
                            icon={<FileCheck size={32} strokeWidth={1.5} />}
                            problem="Visas are complicated, time-consuming, and the fear of rejection is real."
                            solution="Our dedicated team handles the paperwork, secures embassy appointments, and guides you through the entire process."
                            proofSignal="High success rates for Schengen and US visas."
                            ctaIntent="visa-inquiry"
                            ctaMessage="Hello! I have a question regarding my visa application process."
                            className="lg:col-span-1"
                        />

                        <CapabilityBlock
                            index={3}
                            title="Travel Cash & Forex"
                            icon={<Landmark size={32} strokeWidth={1.5} />}
                            problem="Bad exchange rates and hidden bank fees at the airport can cost you a lot."
                            solution="We secure the best rates and load your forex cards before you leave, so you're ready the moment you land."
                            reassurance="No hidden fees. Best rates. Zero stress."
                            ctaIntent="general"
                            ctaMessage="Hi team, I need help with forex for my upcoming trip."
                            className="lg:col-span-1"
                        />

                        <CapabilityBlock
                            index={4}
                            title="Group & Corporate Travel"
                            icon={<Briefcase size={32} strokeWidth={1.5} />}
                            problem="Moving large groups across borders is a logistical nightmare for most agencies."
                            solution="From company retreats to large families, we handle mass ticketing, private charters, and on-ground coordination."
                            proofSignal="Successfully managed 100+ member group trips with zero hiccups."
                            ctaIntent="corporate"
                            ctaMessage="Hello, I'm inquiring regarding group/corporate travel logistics."
                            className="md:col-span-1 lg:col-span-2"
                        />

                        <CapabilityBlock
                            index={5}
                            title="Special Dietary Tours"
                            icon={<HeartHandshake size={32} strokeWidth={1.5} />}
                            problem="Finding authentic Jain or Swaminarayan food shouldn't mean staying home or eating poorly."
                            solution="We bring our own kitchen and chefs on tour, ensuring you get the exact food you need, anywhere in the world."
                            reassurance="Pure vegetarian and dietary-restricted meals, guaranteed."
                            ctaIntent="kitchen-caravan"
                            ctaMessage="Hi, I'm interested in a tour with Jain/Swaminarayan food requirements."
                            className="md:col-span-2 lg:col-span-2 bg-brand-blue-light/30 border-brand-accent/20"
                        />

                        <CapabilityBlock
                            index={6}
                            title="24/7 Support & Help"
                            icon={<ShieldAlert size={32} strokeWidth={1.5} />}
                            problem="If a flight gets cancelled at midnight, you don't want to talk to a robot."
                            solution="We are your humans on the ground and on the phone. We handle the cancellations, re-bookings, and emergencies for you."
                            proofSignal="Real human support, anytime you need it."
                            ctaIntent="general"
                            ctaMessage="Hi, I need an expert travel team that is available 24/7 if things go wrong."
                            className="lg:col-span-1"
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
