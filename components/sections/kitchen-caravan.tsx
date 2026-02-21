"use client";

import { useRef } from "react";
import Image from "next/image";
import { useParallax } from "@/lib/animations/use-parallax";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { HeadingBlock } from "@/components/ui/heading-block";

export function KitchenCaravan() {
    const imageRef = useRef<HTMLImageElement>(null);

    // Parallax effect on the image
    useParallax({ ref: imageRef, speed: -0.15, scale: 1.15 });

    return (
        <SectionWrapper className="relative overflow-visible bg-white text-brand-text py-32 md:py-48 z-20">
            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Image Block: Clean side-by-side layout */}
                    <div className="lg:col-span-6 relative h-[600px] lg:h-[700px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-text/5 z-0 group">
                        <div className="absolute inset-0 bg-brand-text">
                            <Image
                                ref={imageRef}
                                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787&auto=format&fit=crop"
                                alt="Culinary Experience"
                                fill
                                className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                            />
                            {/* Deeper gradient overlay for contrast */}
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 via-transparent to-transparent opacity-80" />
                        </div>
                    </div>

                    {/* Content Block */}
                    <div className="lg:col-span-6 relative z-10">
                        <div className="bg-brand-blue text-white p-10 md:p-12 lg:p-14 rounded-[2.5rem] shadow-[0_30px_60px_rgba(10,37,64,0.25)] border border-brand-blue-light/10 relative overflow-hidden group">

                            {/* Abstract glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none transition-all duration-700 group-hover:bg-brand-accent/30" />

                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-8">
                                <span className="text-[10px] font-semibold text-white/90 tracking-[0.2em] uppercase">Signature Offering</span>
                            </div>

                            <HeadingBlock
                                title={<span className="text-white">The Kitchen Caravan</span>}
                                subtitle={<span className="text-white/70">Exclusive culinary experiences tailored for Jain, Swaminarayan, and pure vegetarian travelers. We bring our own Mahraj to curate bespoke meals anywhere in the world.</span>}
                                size="large"
                            />

                            <div className="mt-10 space-y-6 text-white/80 font-light text-lg">
                                <p className="leading-relaxed">
                                    Traveling to Europe or remote islands shouldn't mean compromising on your dietary beliefs. Our Kitchen Caravan ensures you enjoy fresh, authentic meals prepared in a dedicated environment.
                                </p>
                                <ul className="space-y-5 pt-4 border-t border-white/10">
                                    <li className="flex items-center gap-4 group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 shadow-[0_0_12px_rgba(0,82,255,0.9)] transition-transform group-hover/item:scale-150" />
                                        <span className="text-white/90">Available across Switzerland, Paris, Bali, and more.</span>
                                    </li>
                                    <li className="flex items-center gap-4 group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 shadow-[0_0_12px_rgba(0,82,255,0.9)] transition-transform group-hover/item:scale-150" />
                                        <span className="text-white/90">Jain and Swaminarayan strict dietary compliance.</span>
                                    </li>
                                    <li className="flex items-center gap-4 group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 shadow-[0_0_12px_rgba(0,82,255,0.9)] transition-transform group-hover/item:scale-150" />
                                        <span className="text-white/90">Perfect for large families and corporate incentive trips.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </SectionWrapper>
    );
}
