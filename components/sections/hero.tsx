"use client";

import { useRef } from "react";
import Image from "next/image";
import { useParallax } from "@/lib/animations/use-parallax";
import { useFadeIn } from "@/lib/animations/use-fade-in";
import { HeadingBlock } from "@/components/ui/heading-block";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Container } from "@/components/ui/container";

export function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // Parallax effect on the background image
    useParallax({ ref: imageRef, speed: 0.3, scale: 1.05 });
    // Fade in the hero content
    useFadeIn({ ref: contentRef, delay: 0.2, duration: 1.2, yOffset: 40 });

    return (
        <SectionWrapper
            ref={containerRef}
            spacing="hero"
            background="dark"
            className="relative min-h-[90vh] md:min-h-[95vh] flex items-center justify-center overflow-hidden pt-32 pb-32 md:pb-48"
        >
            {/* Background Image Setup */}
            <div className="absolute inset-0 z-0">
                <Image
                    ref={imageRef}
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2940&auto=format&fit=crop"
                    alt="Premium travel destination"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                {/* Deep overlay gradient to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-text via-brand-text/60 to-brand-text/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Hero Content */}
            <Container className="relative z-10 flex flex-col items-center justify-center text-center">
                <div ref={contentRef} className="max-w-4xl flex flex-col items-center gap-10">

                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 md:bg-white/5 px-5 py-2 md:backdrop-blur-md transition-colors hover:bg-white/10 cursor-default">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-[pulse_2s_ease-in-out_infinite]" />
                        <span className="text-xs font-medium text-white/90 tracking-widest uppercase">Expertise by Heena Poriya</span>
                    </div>

                    <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-sm">
                        We handle everything.<br className="hidden sm:block" /> You just pack.
                    </h1>

                    <p className="max-w-2xl text-lg md:text-xl text-white/70 font-sans leading-relaxed font-light">
                        Skip the stressful planning. From custom itineraries to visas, forex, and kitchen caravan groups—our local experts curate every single detail of your journey.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
                        <WhatsAppCTA
                            className="w-full sm:w-auto h-14 px-10 text-base shadow-[0_15px_40px_rgba(212,175,55,0.2)] bg-brand-accent text-brand-text hover:bg-white transition-all duration-500 rounded-xl font-medium tracking-wide"
                            intentCategory="general"
                        >
                            Speak to a Planner
                        </WhatsAppCTA>
                    </div>
                </div>
            </Container>
        </SectionWrapper>
    );
}
