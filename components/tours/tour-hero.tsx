"use client";

import { useRef } from "react";
import Image from "next/image";
import { useFadeIn } from "@/lib/animations/use-fade-in";
import { Star, Clock, CalendarHeart, MapPin } from "lucide-react";

interface TourHeroProps {
    destination: string;
    title: string;
    image: string;
    duration: string;
    bestTime: string;
    cities: string[];
}

export function TourHero({ destination, title, image, duration, bestTime, cities }: TourHeroProps) {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useFadeIn({ ref: leftRef, delay: 0.2, yOffset: 30 });
    useFadeIn({ ref: rightRef, delay: 0.4, yOffset: 30 });

    return (
        <section className="relative w-full min-h-[100vh] md:h-[100vh] flex flex-col md:flex-row bg-brand-bg pt-20 md:pt-0">
            {/* Left Box: Emotional Hook & Imagery */}
            <div className="relative w-full md:w-[60%] h-[60vh] md:h-full isolate flex flex-col justify-end p-6 sm:p-12 lg:p-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={image}
                        alt={destination}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 mix-blend-multiply" />
                </div>

                <div ref={leftRef} className="relative z-10 w-full max-w-2xl text-white">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 md:bg-white/10 md:backdrop-blur-md px-4 py-1.5 mb-6">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-[pulse_2s_ease-in-out_infinite]" />
                        <span className="text-xs font-semibold tracking-widest uppercase">Curated by Universal Travel Planners</span>
                    </div>

                    <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-white/70 mb-3">{destination}</h2>
                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] drop-shadow-lg mb-8">
                        {title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-white/90">
                        <div className="flex items-center gap-2">
                            <Clock size={18} className="text-brand-accent" />
                            {duration}
                        </div>
                        <div className="flex items-center gap-2">
                            <CalendarHeart size={18} className="text-brand-accent" />
                            Best time: {bestTime}
                        </div>
                        <div className="flex items-center gap-1 text-emerald-400">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                            <span className="text-white ml-1">5.0 VIP Rating</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Box: Route Intelligence */}
            <div className="w-full md:w-[40%] h-auto md:h-full bg-white flex flex-col justify-center p-8 sm:p-12 lg:p-20 border-l border-brand-text/5">
                <div ref={rightRef}>
                    <h3 className="text-xs uppercase tracking-widest font-bold text-brand-text/40 mb-10">Route Visualization</h3>

                    <div className="relative pl-6 border-l-2 border-brand-text/10 space-y-12">
                        {cities.map((city, idx) => (
                            <div key={idx} className="relative">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-4 border-brand-blue shadow-sm" />

                                <h4 className="font-display text-2xl font-bold text-brand-text mb-2 flex items-center gap-2">
                                    {city}
                                </h4>
                                {idx === 0 && <p className="text-sm text-brand-text-muted">Touchdown & VIP Transfer</p>}
                                {idx === cities.length - 1 && <p className="text-sm text-brand-text-muted">Departure Protocol</p>}
                                {idx !== 0 && idx !== cities.length - 1 && <p className="text-sm text-brand-text-muted">Immersive Exploration</p>}
                            </div>
                        ))}
                    </div>

                    <p className="text-xs text-brand-blue font-semibold uppercase tracking-widest mt-16 pt-8 border-t border-brand-text/5">
                        Scroll to explore the experience flow
                    </p>
                </div>
            </div>
        </section>
    );
}
