"use client";

import { useRef } from "react";
import Image from "next/image";
import { useParallax } from "@/lib/animations/use-parallax";
import { useFadeIn } from "@/lib/animations/use-fade-in";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Container } from "@/components/ui/container";
import { GlassBookingWidget } from "@/components/ui/glass-booking-widget";
import { Sparkles } from "lucide-react";

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
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/70 to-brand-blue/30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
            </div>

            {/* Hero Content */}
            <Container className="relative z-10 flex flex-col items-center justify-center text-center mt-12 w-full">
                <div ref={contentRef} className="max-w-5xl w-full flex flex-col items-center gap-8 md:gap-10">

                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/30 cursor-default shadow-lg shadow-black/20 group">
                        <Sparkles className="w-3.5 h-3.5 text-brand-accent group-hover:animate-pulse" />
                        <span className="text-xs font-medium text-white/90 tracking-[0.2em] uppercase">Expertise by Heena Poriya</span>
                    </div>

                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-tight md:leading-[1.05] drop-shadow-lg px-2">
                        Curating Journeys,<br className="hidden sm:block" /> Perfecting Details.
                    </h1>

                    <p className="max-w-3xl text-lg md:text-xl lg:text-2xl text-white/80 font-sans leading-relaxed font-light mb-4 md:mb-8 drop-shadow-md">
                        Skip the stressful planning. From custom itineraries to visas, forex, and kitchen caravan groups—our local experts curate every single detail of your high-end journey.
                    </p>

                    <GlassBookingWidget className="mt-4 shadow-2xl shadow-brand-blue/50" />
                </div>
            </Container>
        </SectionWrapper>
    );
}
